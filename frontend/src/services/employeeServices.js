//All API Calling of Employees:-

const BASE_URL = "https://kj-sk-leave-management-system.onrender.com/api/auth";



//API Calling for create Employee:-
export const createEmployee = async(data) => {
    try {
        const token = localStorage.getItem("Token");
        const response = await fetch(`${BASE_URL}/createProfile`, {method: "POST", headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
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









//API Calling for Fetch Employee:-
export const fetchEmployees = async() => {
    try {
        const token = localStorage.getItem("Token");
        const response = await fetch(`${BASE_URL}/yourProfile`, {method: "GET", headers: { Authorization: `Bearer ${token}`}});
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message, result: result};
    } catch (error) {
        return {success: false, message: error.message};
    }
}








//API Calling for Update Employee:-
export const updateEmployee = async(data, empId) => {
    try {
        const token = localStorage.getItem("Token");
        const response = await fetch(`${BASE_URL}/updateProfile/${empId}`, {method: "PUT", headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
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









//API Calling for Delete Employee:-
export const deleteEmployee = async(empId) => {
    try {
        const token = localStorage.getItem("Token");
        const response = await fetch(`${BASE_URL}/deleteProfile/${empId}`, {method: "DELETE", headers: {Authorization: `Bearer ${token}`}});
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message};
    } catch (error) {
        return {success: false, message: error.message};
    }
}