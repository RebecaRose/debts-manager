import { Paper, Button, Container, TextField, FormControl, Select, InputLabel, MenuItem, Grid } from "@material-ui/core";
import { useStores } from "../../stores/root-store";
import { observer } from "mobx-react";
const Debts = () => {
    const { debtsStore, usersStore } = useStores();

    return (
        <Paper>
            <Container style={{marginTop: 20, padding: 10, marginLeft: 10}}>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <FormControl>
                            <InputLabel htmlFor="age-native-simple">
                                Usuário
                            </InputLabel>
                            <Select
                                value={debtsStore.current.debt.user_id}
                                onChange={e => debtsStore.updateUserId(e.target.value)}
                            >
                                {usersStore.users.map( user => (
                                    <MenuItem value={user.id}>
                                        {user.name}
                                    </MenuItem>
                                ))}
                                
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            style={{marginTop: 5}}
                            id="standard-password-input"
                            label="Motivo"
                            variant='outlined'
                            type="text"
                            value={debtsStore.current.debt.description}
                            onChange={ e => debtsStore.updateDescription(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            style={{marginTop: 5}}
                            id="standard-password-input"
                            label="Valor"
                            variant='outlined'
                            type="text"
                            value={debtsStore.current.debt.value}
                            onChange={ e => debtsStore.updateValue(parseInt(e.target.value))}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            style={{marginTop: 5}}
                            id="standard-password-input"
                            label="Data"
                            variant='outlined'
                            type="date"
                            value={debtsStore.current.debt.date}
                            onChange={ e => debtsStore.updateDate(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} style={{ marginTop: 10, padding: 5}}>
                        {debtsStore.current.type === 'update' &&
                            <Button
                                color='secondary'
                                variant='contained'
                                onClick={debtsStore.updateDebt}
                                fullWidth
                            >
                                SALVAR
                            </Button>
                        }

                        {debtsStore.current.type === 'create' &&
                            <Button
                                color='secondary'
                                variant='contained'
                                onClick={debtsStore.createDebt}
                                fullWidth
                            >
                                CRIAR
                            </Button>
                        }
                    </Grid>
                    {debtsStore.current.type === 'update' &&
                    
                        <>
                            <Grid item xs={12} md={6} style={{ marginTop: 10, padding: 5}}>
                                <Button
                                    color='secondary'
                                    variant='contained'
                                    onClick={debtsStore.deleteDebt}
                                    fullWidth
                                >
                                    EXCLUÍR
                                </Button>
                            </Grid>
                            <Grid 
                                item 
                                xs={12}
                                md={6} 
                                style={{marginTop: 10}}
                            >
                                <Button
                                    color='secondary'
                                    variant='contained'
                                    fullWidth
                                    onClick={() => debtsStore.toggleCurrent('create')}
                                >
                                    CRIAR NOVA DÍVIDA
                                </Button>

                            </Grid>
                        </>
                    }
                </Grid>
            </Container>

        </Paper>
    );
};

export default observer(Debts);
    