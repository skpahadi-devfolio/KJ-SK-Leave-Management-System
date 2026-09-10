//Model for Contact Page:-

import { pool } from "../config/db.js"


export const contactForm = async(name, email, message) => {
    return await pool.query(
        "INSERT INTO contact (name, email, message) VALUES($1, $2, $3) RETURNING *", [name, email, message]
    )
}
