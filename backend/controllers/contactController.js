//Controller logic for Contact:-

import { contactForm } from "../models/contactModel.js";


//create contact page API Logic:-
export const contactFormController = async(req, res) => {
    try {
        const {name, email, message} = req.body;
        if(!name || !email || !message){
            return res.status(400).json({
                success: false,
                message: "Please Field Empty Column"
            })
        }
        const contactMessage = await contactForm(name, email, message);
        return res.status(201).json({
            success: true,
            message: "Your Form Sent SuccessFully!",
            contactMessage: contactMessage.rows[0]
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Issue! You Can't Send Messsage"
        })
    }
}