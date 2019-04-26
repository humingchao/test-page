import { observable, action, computed } from 'mobx';

class RoleStore {
    @observable username;
    @observable password;
    @observable todos;
    @observable list = '123';

    constructor() {
        this.username = 'username';
        this.password = 'password';
        this.todos = [{
            title: "todo标题",
            done: false,
        }];
    }

    @computed get total() {
        return this.list.length;
    }

    @action change (params) {
        this.list.push(this.list.length);
    }

    @action changeUsername = (value) => {
        this.username = value;
        console.log(value,"新value")
    }

    @action changePassword = (value) => {
        this.password = value;
        console.log(value,"新value")
    }
}

export default new RoleStore();

