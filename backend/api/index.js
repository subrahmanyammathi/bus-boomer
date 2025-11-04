const serverless = require('serverless-http');
const app = require('../app');

// Export a serverless handler wrapping the existing Express app.
// Vercel will deploy this as a serverless function and route requests here.
module.exports = serverless(app);
