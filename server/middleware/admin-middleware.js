const adminMiddleware = (req, res, next) => {
  const user = req.user;
  if (user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Access denied! Admin rights required.",
    });
  }
  next();
};

module.exports = adminMiddleware;
