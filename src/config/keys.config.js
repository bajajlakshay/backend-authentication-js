require('dotenv').config();

const config={
    port : process.env.PORT,
    mongoUri: process.env.MONGODB_URI,
    mongoDBName: process.env.MONGODB_DB,
    mongoCollectionName:process.env.MONGODB_COLLECTION_TEST,
    JWT_SECRETE: process.env.JWT_SECRET,
    GOOGLE_APP_PASS: process.env.GOOGLE_APP_PASSWORD,
    GOOGLE_ACCOUNT: process.env.GOOGLE_ACCOUNT

}

module.exports = config