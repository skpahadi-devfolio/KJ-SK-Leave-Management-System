//All API Calling for Manager:-

const BASE_URL = "https://kj-sk-leave-management-system.onrender.com/api/auth";



//API Calling for create Manager:-
export const createManager = async(data) => {
    try {
        const token = localStorage.getItem("Token");
        const response = await fetch(`${BASE_URL}/createManagerProfile`, {method: "POST", headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
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








//API Calling for Fetch Manager:-
export const fetchManager = async() => {
    try {
        const token = localStorage.getItem("Token");
        const response = await fetch(`${BASE_URL}/yourManagerProfile`, {method: "GET", headers: { Authorization: `Bearer ${token}`}});
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message, result: result};
    } catch (error) {
        return {success: false, message: error.message};
    }
}








//API Calling for Update Manager:-
export const updateManager = async(data, managerId) => {
    try {
        const token = localStorage.getItem("Token");
        const response = await fetch(`${BASE_URL}/updateManagerProfile/${managerId}`, {method: "PUT", headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
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









//API Calling for Delete Manager:-
export const deleteManager = async(managerId) => {
    try {
        const token = localStorage.getItem("Token");
        const response = await fetch(`${BASE_URL}/deleteManagerProfile/${managerId}`, {method: "DELETE", headers: {Authorization: `Bearer ${token}`}});
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message};
    } catch (error) {
        return {success: false, message: error.message};
    }
}