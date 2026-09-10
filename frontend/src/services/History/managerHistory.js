//API Call for Manager Approve leave history:-

const BASE_URL = "http://localhost:3000/api/auth";


//Create API Caling for Manager Approve leave history:-

export const createManagerLeaveHistory = async(data, leaveId) => {
    try {
        const token = localStorage.getItem("Token");
        const respone = await fetch(`${BASE_URL}/ManagerApproval/LeaveHistory/${leaveId}`, {method: "POST", headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
        body: JSON.stringify(data)});
        const result = await respone.json();
        if(!respone.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message};
    } catch (error) {
        return {success: false, message: error.message};
    }
}









//Fetch API Calling for Manager Approve leave History:-

export const fetchManagerLeaveHistory = async() => {
    try {
        const token = localStorage.getItem("Token");
        const respone = await fetch(`${BASE_URL}/ManagerApproval/LeaveHistory`, {method: "GET", headers: {Authorization: `Bearer ${token}`}});
        const result = await respone.json();
        if(!respone.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message, result: result};
    } catch (error) {
        return {success: false, message: error.message};
    }
}