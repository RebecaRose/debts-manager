import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import { useStores } from "../../stores/root-store";
import { observer } from "mobx-react";

const UsersList = () => {
    const { debtsStore, usersStore } = useStores();
    const getUser = (id: number) => {
        const user = usersStore.users.find(user => user.id === id);
        if (user) {
            return user.name;
        }
        return '';
    }
    return (
        <List color='primary' style={{marginRight: 10}}>
            {debtsStore.debts.map( (debt, index) => (
                <Paper>
                    <ListItem
                        style={{marginTop: 10}}
                        onClick={() => debtsStore.toggleCurrent('update', index)}
                    >
                        {getUser(debt.user_id)} - R$ {debt.value}
                    </ListItem>
                </Paper>
            ))}
        </List>
    );
};

export default observer(UsersList);
    