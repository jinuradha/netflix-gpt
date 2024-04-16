export const checkValidate = (email, password) => {
    const isEmailValidate = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isEmailValidate) return "Email Id is not valid";
    if(!isPasswordValid) return "Password is not valid";

    return null;
}