
module.exports = class Patient{
    constructor(obj) {
        this.id = obj.id;
        this.name = obj.name, 
        this.image = obj.image,
        this.note = obj.note,
        this.price = obj.price,
        this.quantity_unit = obj.quantity_unit
    }
}