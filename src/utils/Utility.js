export default class Utility {
    static isValidField = (term) => {
        console.log('called');
        let length = term.trim().length;
        return length > 0 ? true : false;
    }

    static isEmailValid = (term) => {
        //const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]
        let isTrue = expression.test(String(term).toLowerCase());
        return isTrue;
    }
}