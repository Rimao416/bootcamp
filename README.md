Nous sommes actuellement dans la vidéo 9.005, et nous venons d'implémenter notre gestionnaire global d'erreurs
`app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});`
