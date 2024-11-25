import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required."],
        trim: true,
        minLength: [2, "First Name must be atleast 3 characters"],
        maxLength: [50, "First Name must be lesser than 50 characters"],
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required."],
        trim: true,
        minLength: [2, "Last Name must be atleast 3 characters"],
        maxLength: [50, "Last Name must be lesser than 50 characters"],
    },
    email: {
        type: String,
        required: [true, "Email is required."],

    },
    phone: {
        type: String,
        required: [true, "Phone number is required."],
        minlength: [10, "Phone number must be at least 10 digits long"] // Example constraint
    },
    message: {
        type: String,
        required: [true, "Message is required"]
    },

    date: {
        type: Date,
        default: Date.now,
    },
})


const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema)
export default Contact
