import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true,
    },

    clerkId: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;