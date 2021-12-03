
module.exports = class Patient{
    constructor(obj) {
        this.id = obj.id;
        this.name = obj.name, 
        this.identity_card = obj.identity_card,
        this.birthdate = obj.birthdate,
        this.address = obj.address,
        this.status = obj.status,
        this.treatment_place = obj.treatment_place
    }
}