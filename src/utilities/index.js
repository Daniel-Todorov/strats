import Constants from '@/utilities/constants';

export default {
    isValidPassword(password) {
        return ( typeof password).toLowerCase() === 'string' && password.trim().length >= Constants.minPasswordLength;
    },
    isValidEmail(email) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }
}