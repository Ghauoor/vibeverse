import express from 'express';
import dotenv from 'dotenv';
import connectDB from './lib/db.js';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import songsRoutes from './routes/songs.routes.js';
import albumsRoutes from './routes/albums.routes.js';
import adminRoutes from './routes/admin.routes.js';
import statsRoutes from './routes/stats.routes.js';


dotenv.config();

const app = express();

connectDB();

const PORT = process.env.PORT || 8080;

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/songs", songsRoutes);
app.use("/api/albums", albumsRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/stats", statsRoutes);




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
