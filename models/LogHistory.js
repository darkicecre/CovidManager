module.exports = class LogHistory{
    constructor(obj) {
        this.id = obj.id;
        this.id_person = obj.id_person, 
        this.type = obj.type,
        this.note = obj.note,
        this.time_start = obj.time_start
    }
}