import mongoose from "mongoose";

async function main() {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connected succesfully");
    } catch (error) {
        console.log(error.message);
        
    }
}

main();

export default mongoose;