import pg from "pg";

const {Pool} = pg;

let pool;

export const connectDB = async() => {
    try {
        pool = new Pool({
            connectionString: process.env.PRODUCTION_URL ||process.env.LOCAL_DATABASE
        })
        const client = await pool.connect();
        console.log("Postgresql Connected SuccessFully!");
        client.release();
    } catch (error) {
        console.log("Connection Failed");
    }
}
export {pool};
export default connectDB;