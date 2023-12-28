export const registerValidation = (name, email, password, checkBox) => {
   let errorMessage = "";

   // Validate form value
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+|~-]).{7,}$/;

   if (!name.length) {
      errorMessage = "Name cannot be blank";
   } else if (!emailRegex.test(email)) {
      errorMessage = "Invalid email address";
   } else if (password.length < 6) {
      errorMessage = "Password must be at least 6 characters long";
   } else if (!passwordRegex.test(password)) {
      errorMessage =
         "Password must contain at least one capital letter and special character";
   } else if (!checkBox) {
      errorMessage = "You must accept the terms and conditions to proceed";
   }

   return errorMessage;
};
