export const checkEmail = (email) =>{
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    if (!isEmailValid) return "Email is not valid";
    return null
}
export const checkPassWord = (password)=>{
    const isPassValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/.test(password)
    if (!isPassValid) return "Password is not valid";
    return null
}
export const checkName = (cName) => {
  const isNameLength = cName.length
  if (isNameLength < 3 ) return "Name must have atleast 3 char";
  return null;
};
