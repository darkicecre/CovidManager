
module.exports = class Patient{
    constructor(obj) {
        this.id = obj.id;
        this.id_manager = obj.id_manager,
        this.type = obj.type,
        this.describe = obj.describe
    }
}