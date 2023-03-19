import mongoose from "mongoose";

mongoose.connect(
	'mongodb://mongo:27017', // mongodb://[container name or ipddress]:27017
	{ useNewUrlParser: true, useUnifiedTopology : true },
);

const db = mongoose.connection;

console.log("check")

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);

