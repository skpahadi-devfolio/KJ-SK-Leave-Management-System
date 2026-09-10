import nodemailer from "nodemailer";


//Send to the manager from employee:-
export const sendLeaveNotification = async(managerEmail) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: managerEmail,
        subject: "A New Leave Request by Employee",
        text: "A New Employee leave Request has been Submitted. Please Login to the leave Management System to review it",
    });
};





//send to the employee from manager:-

export const sendLeaveStatusNotification = async(employeeEmail, status) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: employeeEmail,
        subject: "Leave Status Updated",
        text: `Your Leave request Has Been ${status}.Please Login to the leave Management system to check the update`
    });
}
