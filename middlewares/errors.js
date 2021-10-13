const express = require('express');

module.exports = (err, req, res, next) => {
  const status = err.statusCode || 500;
  console.log(err);
  res.status(status).send({ message: err.message });
};
