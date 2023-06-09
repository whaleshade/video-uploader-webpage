import mongoose from "mongoose";
import bcrypt from "bcrypt";

/* schema define */
const userSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	avatarUrl: { type: String },
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	name: { type: String, required: true },
	location: String,
});

/* middleware pre */
userSchema.pre("save", async function () {
	this.password = await bcrypt.hash(this.password, 5);
});

/* for export */
const User = mongoose.model("User", userSchema);
export default User;
