
module.exports = class Patient{
    constructor(obj) {
        this.id = obj.id;
        this.id_package = obj.id_package,
        this.id_payer = obj.id_payer,
        this.count = obj.count,
        this.time_start = obj.time_start,
        this.price = obj.price,
        this.list_product = obj.list_product
    }
}