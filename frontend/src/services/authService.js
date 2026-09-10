//API Call For Auth:-


const BASE_URL = "http://localhost:3000/api/auth"


//API Calling for Signup:-
export const signupAPI = async(form) => {
    try {
        const response = await fetch(`${BASE_URL}/signup`, {method: "POST", headers: {"Content-Type": "application/json"},
        body: JSON.stringify(form)});
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message}
        }
        return {success: true,  message: result.message}
    } catch (error) {
        return {success: false, message: error.message}
    }
}






//API Calling for login:-
export const loginAPI = async(form) => {
    try {
        const response = await fetch(`${BASE_URL}/login`, {method: "POST", headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)});
            const result = await response.json();
            if(!response.ok){
                return {success: false, message: result.message}
            }
        localStorage.setItem("Token", result.Token);
        localStorage.setItem("userName", result.user.name);
        return {success: true,  message: result.message, result: result}
    } catch (error) {
        return {success: false, message: error.message}
    }
}
