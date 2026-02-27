/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const healthCheck = (req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    message:"Backend running ✅",
  });
};

module.exports = { healthCheck };