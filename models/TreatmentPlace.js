module.exports = class TreatmentPlace{
    constructor(obj) {
        this.id = obj.id;
        this.name = obj.name, 
        this.address = obj.address,
        this.capacity = obj.capacity
    }
}