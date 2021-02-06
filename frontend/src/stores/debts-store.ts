import { makeAutoObservable } from "mobx";
import { Debt } from '../models';
import requestService from '../request-service';

export default class DebtsStore{
    public debts = [] as Debt[];
    public current = {
        open: false,
        type: 'create',
        debt: {
            id: undefined,
            user_id: 1,
            date: '',
            value: 0,
            description: '',
        } as Debt,
    }

    constructor(){
        makeAutoObservable(this);
        this.getDebts();
    }

    public getDebts = async() => {
        const endpoint = 'http://localhost:3500/debts';
        const method = 'GET';
        const response = await requestService(endpoint, method);
        if(response.success){
            this.debts = response.debts;
        }
    }

    public updateDebt = async() => {
        const debt = this.current.debt;
        const endpoint = 'http://localhost:3500/debts';
        const method = 'POST';
        const payload = {
            id: debt.id,
            user_id: debt.user_id,
            date: debt.date,
            value: debt.value,
            description: debt.description,
        };
        const response = await requestService(endpoint, method, payload);
        if(response.success){
            alert('Dívida atualizada com sucesso!');
            return;
        }
        alert('Erro ao tentar atualizar dívida. Por favor, tente novamente mais tarde.');
        
    }

    public deleteDebt = async() => {
        const id = this.current.debt.id;
        const endpoint = `http://localhost:3500/debts/${id}`;
        const method = 'DELETE';
        const response = await requestService(endpoint, method);
        if(response.success){
            alert('Dívida excluída com sucesso!');
            this.debts = this.debts.filter(debt => debt.id !== id);
            return;
        }
        alert('Erro ao tentar excluír dívida. Por favor, tente novamente mais tarde.');
        
    }

    public createDebt = async() => {
        const debt = this.current.debt;
        const endpoint = 'http://localhost:3500/debts';
        const method = 'POST';
        const payload = {
            debt: {
                user_id: debt.user_id,
                date: debt.date,
                value: debt.value,
                description: debt.description,
            }
        };
        const response = await requestService(endpoint, method, payload);
        if(response.success){
            alert('Dívida criada com sucesso!');
            this.getDebts();
            this.current = {
                open: false,
                type: 'create',
                debt: {
                    id: undefined,
                    user_id: 1,
                    date: '',
                    value: 0,
                    description: '',
                }
            }
            return;
        }
        alert('Erro ao tentar criar dívida. Por favor, tente novamente mais tarde.');
        
    }

    public toggleCurrent = (type: 'update' | 'create', debtIndex?: number) => {
        if(type === 'update' && debtIndex !== undefined){
            const debt = this.debts[debtIndex];
            this.current.debt = debt;
        }
        this.current.type = type;
        this.current.open = true;
    }

    public closeCurrent = () => {
        this.current.open = false;
    }

    public updateUserId = (user_id: any) => {
        if(typeof user_id == 'number'){
            this.current.debt.user_id = user_id;
        }
    }

    public updateValue = (value: number) => {
        this.current.debt.value = value;
    }

    public updateDate = (date: string) => {
        this.current.debt.date = date;
    }

    public updateDescription = (description: string) => {
        this.current.debt.description = description;
    }


}
