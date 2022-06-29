export const validateForm = (form, isSignup) => {
    const { email, password, cpassword } = form;

    if (!email || !password || (signup && !cpassword)) {
        return 'This field is required';
    };

    if (isSignup && password !== cpassword) {
        return 'Pasword'
    }
}