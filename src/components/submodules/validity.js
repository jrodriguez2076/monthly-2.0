class ValidityService {

    constructor(){
        this.EmailExpression = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
        this.DateExpression = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
    }
    
    validAmount(value) {
        return (value > 0);
    }

    validName(value) {
        return (value.length > 0);
    }

    validEmail(value) {
        return this.EmailExpression.test(value);
    }

    validDate(value) {
        return this.DateExpression.test(value);
    }

    validDescription(value) {
        return (value.length > 0 && value.length <50);
    }

    validPassword(value) {
        return (value.length > 0);
    }
}

export default ValidityService