/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    env: {
        FIREBASE_KEY: process.env.FIREBASE_KEY,
        FIREBASE_DOMAIN: process.env.FIREBASE_DOMAIN,
        FIREBASE_DATABASE: process.env.FIREBASE_DATABASE,
        FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
        FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
        FIREBASE_SENDER_ID: process.env.FIREBASE_SENDER_ID,
        FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
        FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    },
};
