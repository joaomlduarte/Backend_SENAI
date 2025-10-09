import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, trim: true},
        author: {type: String, required: true, trim: true},
        year: { type: Number, required: true, min: 0}
    },
    { timestamps: true}
);

export default mongoose.model("Book", BookSchema);