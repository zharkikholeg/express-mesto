module.exports = (err, req, res) => {
  const status = err.statusCode || 500;
  console.log(err);
  res.status(status).send({ message: err.message });
};
