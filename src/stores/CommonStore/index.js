import { observable, action, computed, flow } from 'mobx';
import Axios from 'axios';

class CommonStore {
    @observable common;
    @observable pathname = [];
    @observable obj = [1,2,3];
    @observable githubProjects = [];
    @observable state = "pending"; // "pending" / "done" / "error"
    @observable todos = [{
        title: "todo标题",
        done: false,
    }];

    @computed get total() {
        return this.common.length;
    }

    @action changePathname = (value) => {
        if(this.pathname.length) {
            this.pathname.splice(this.pathname.length-1, 1 ,value);
        } else {
            this.pathname.push(value);
        }
    }

    @action changePassword = (value) => {
        this.common = value;
        console.log(value,"新value")
    }

    fetchProjects = flow(function* fetchProjects() { // <- 注意*号，这是生成器函数！
        this.githubProjects = [];
        this.state = "pending";
        try {
            const projects = yield Axios.get('/user?ID=12345')
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                }); // 用 yield 代替 await
            // 异步代码自动会被 `action` 包装
            this.state = "done";
            this.githubProjects = projects;
        } catch (error) {
            this.state = "error";
        }
    })
}

export default new CommonStore();

