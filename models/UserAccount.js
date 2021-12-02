
module.exports = class Patient{
    constructor(obj) {
        this.id = obj.id;
        this.user_name = obj.user_name,
        this.password = obj.password,
        this.role = obj.role,
        this.active = obj.active,
        this.is_alert = obj.alert
    }
}