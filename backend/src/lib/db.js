import mongoose from 'mongoose';

export default async function connectDB() {

    try {
        if (mongoose.connection.readyState >= 1) {
            return;
        }
        const connection = mongoose.connect(process.env.MONGODB_URI);
        console.log("Database Connected", (await connection).STATES.connected);
        return connection;

    } catch (error) {
        console.log("Error Connecting to Database", error);
        process.exit(1);
    }

}