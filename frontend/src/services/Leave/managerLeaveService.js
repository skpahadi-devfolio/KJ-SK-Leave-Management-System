//All API Call for Manager Approval:-

const BASE_URL = "https://kj-sk-leave-management-system.onrender.com/api/auth/ManagerAssign";



//API Calling for fetch All Manager Approval Leave:-
export const fetchManagerApproval = async() => {
    try {
        const token = localStorage.getItem("Token");
        const response = await fetch(`${BASE_URL}/allLeaves`, {method: "GET", headers: {Authorization: `Bearer ${token}`}});
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message, result: result};
    } catch (error) {
        return {success: false, message: error.message};
    }
}








//API Calling for Update Leaves Aproved by Manager:-
export const updateManagerApproval = async(data, leaveId) => {
    try {
        const token = localStorage.getItem("Token");
        const response = await fetch(`${BASE_URL}/ActionLeaves/${leaveId}`, {method: "PUT", headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
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