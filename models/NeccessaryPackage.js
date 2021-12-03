
module.exports = class Patient{
    constructor(obj) {
        this.id = obj.id;
        this.name = obj.name, 
        this.list_product = obj.list_product,
        this.limit_count_package_day = obj.limit_count_package_day,
        this.limit_count_package_week = obj.limit_count_package_week,
        this.limit_count_package_month = obj.limit_count_package_month
    }
}