module.exports = {
    // Prefer environment variable for production deployments (Vercel).
    MongoURI: process.env.MongoURI || "mongodb+srv://siva:siva@cluster0.yje7www.mongodb.net/?appName=Cluster0"
}