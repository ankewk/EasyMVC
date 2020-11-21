module.exports = class {

    return = 'hello Easy';

    constructor(id, data={}) {
        this.return = '参数' + id + '接收成功';
    }

    return() {
        return this.return;
    }
}