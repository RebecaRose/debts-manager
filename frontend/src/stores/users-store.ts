import { makeAutoObservable } from "mobx";
import { User } from '../models';

export default class UsersStore{
    public users = [] as User[];

    constructor(){
        makeAutoObservable(this);
        this.getUsers();
    }

    public getUsers = async() => {
        const endpoint = 'https://jsonplaceholder.typicode.com/users';
        fetch(endpoint)
        .then(response => response.json())
        .then(json => this.users = json);

    }

}
