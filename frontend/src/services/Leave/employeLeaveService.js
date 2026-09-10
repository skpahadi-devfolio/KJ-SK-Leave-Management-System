//All API Call for employee Apply Leave:-

const BASE_URL = "http://localhost:3000/api/auth";


//API Calling for create Employee leaves:-
export const createEmployeeleaves = async(data, managerId) => {
    try {
        const token = localStorage.getItem("Token");
        const response = await fetch(`${BASE_URL}/createYourLeave`, {method: "POST", headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
        body: JSON.stringify(data)});
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message};
    } catch (error) {
        return {success: false, message: error.message};
    }
}








//API Calling for fetch All Leaves of Employee:-
export const fetchEmployeeLeave = async() => {
    try {
        const token = localStorage.getItem("Token");
        const response = await fetch(`${BASE_URL}/yourLeaves`, {method: "GET", headers: {Authorization: `Bearer ${token}`}});
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message, result: result};
    } catch (error) {
        return {success: false, message: error.message};
    }
}








//API Calling for Update Employee Leave:-
export const updateEmployeeLeave = async(data, leaveId) => {
    try {
        const token = localStorage.getItem("Token");
        const response = await fetch(`${BASE_URL}/updateYourLeave/${leaveId}`, {method: "PUT", headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
        body: JSON.stringify(data)});
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message};
    } catch (error) {
        return {success: false, message: error.message};
    }
}









//API Calling for Delete Employee Leave:-
export const deleteEmployeeLeave = async(leaveId) => {
    try {
        const token = localStorage.getItem("Token");
        const response = await fetch(`${BASE_URL}/deleteYourLeave/${leaveId}`, {method: "DELETE", headers: {Authorization: `Bearer ${token}`}});
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message};
    } catch (error) {
        return {success: false, message: error.message};
    }
}