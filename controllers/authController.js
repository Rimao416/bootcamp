const { promisify } = require("util");
const catchAsync = require("../utils/catchAsync");
const AppError = require("./../utils/appError");
const User = require("./../models/userModel");
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });
  const token = signToken(newUser._id);
  res.status(201).json({
    status: "success",
    token,
    data: {
      user: newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  // 1) Vérifier si l'email et mot de passe existe
  if (!email || !password) {
    next(new AppError("Mettez un mot de passe et un email"));
  }

  // 2) Vérifie si l'utilisateur existe ou le mot de passe est correcte
  const user = await User.findOne({ email: email }).select("+password");
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }
  // 3) Si tout est correcte, envoie le token
  const token = signToken(user._id);
  res.status(200).json({
    status: "success",
    token,
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  // 1) Obtenir le token et voir si il existe
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new AppError("Vous n'etes pas connecté, connectez vous"));
  }
  // 2) Verification du token

  let decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  // 3) Vérifier si l'utilisateur existe
  const freshUser = await User.findById(decoded.id);
  if (!freshUser) {
    return next(new AppError("Le token de cet utilisateur n'existe plus"));
  }

  // 4) Vérifier si le mot de passe a changé après la création du token

  if (freshUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError("L'utilisateur a recemment changé son mot de passe"),
      401
    );
  }
  req.user = freshUser;
  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new AppError("You are not allow to execute this", 403));
    }
    next();
  };
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1) Get USER BASED ON POSTED EMAIL
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(
      new AppError("Il n'y a pas d'utilisateur avec cette adresse", 404)
    );
  }
  // 2) GENERATE THE RANDOM RESET TOKEN
  const resetToken = user.createPasswordResetToken();
  await user.save({validateBeforeSave:false});
});
exports.resetPassword = (req, res, next) => {};
