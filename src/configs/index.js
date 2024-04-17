const dotenv = require('dotenv');
dotenv.config();

const config={
PORT: process.env.PORT || 6000,
MONGOOSE_URL: process.env.MONGOOSE_URL,
JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
JWT_EXPIRES_IN : process.env.JWT_EXPIRES_IN,
JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN,
JWT_REFRESH_COOKIES_NAME: process.env.JWT_REFRESH_COOKIES_NAME,

}
module.exports = config;