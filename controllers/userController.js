const catchAsync = require("../utils/catchAsync");
const User = require("./../models/userModel");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
});
exports.getUser = (req, res) => {
  res.status(500).json({
    status: "Error",
    message: "Cette route n'est pas encore définie",
  });
};
exports.createUser = (req, res) => {
  res.status(500).json({
    status: "Error",
    message: "Cette route n'est pas encore définie",
  });
};
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: "Error",
    message: "Cette route n'est pas encore définie",
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: "Error",
    message: "Cette route n'est pas encore définie",
  });
};

// app.get("/api/v1/tours", getAllTours);
// app.post("/api/v1/tours", createTour);

// app.get("/api/v1/tours/:id", getTour);
// app.patch("/api/v1/tours/:id", updateTour);
// app.delete("/api/v1/tours/:id", deleteTour);
