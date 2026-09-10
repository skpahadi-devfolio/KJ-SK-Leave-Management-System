//API Call For Contact:-
export const contactAPI = async(form) => {
    try {
        const response = await fetch('http://localhost:3000/api/sendMessage', {method: "POST", headers: {"Content-Type": "application/json"},
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
