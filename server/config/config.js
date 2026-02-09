require("dotenv").config();

const config = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  clientBaseUrl:
    process.env.CLIENT_BASE_URL ||
    process.env.CLIENT_URL ||
    "http://localhost:5173",
  nodeEnv: process.env.NODE_ENV || "development",
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
  },
  paypal: {
    mode: process.env.PAYPAL_MODE || "sandbox",
    clientId: process.env.PAYPAL_CLIENT_ID,
    clientSecret: process.env.PAYPAL_CLIENT_SECRET,
    returnUrl: `${process.env.CLIENT_BASE_URL || "http://localhost:5173"}/shop/paypal-return`,
    cancelUrl: `${process.env.CLIENT_BASE_URL || "http://localhost:5173"}/shop/paypal-cancel`,
  },
  email: {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT || 587,
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    from: process.env.EMAIL_FROM || "noreply@hazalis.com",
  },
};

// Validate critical config
const requiredVars = [
  "MONGO_URI",
  "JWT_SECRET",
  "CLOUDINARY_CLOUD_NAME",
  "CLOUDINARY_API_KEY",
  "CLOUDINARY_API_SECRET",
  "PAYPAL_CLIENT_ID",
  "PAYPAL_CLIENT_SECRET",
];

requiredVars.forEach((v) => {
  if (!process.env[v]) {
    console.warn(`WARNING: Environment variable ${v} is missing!`);
  }
});

module.exports = config;
