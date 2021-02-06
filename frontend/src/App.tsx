import { Container, Grid, AppBar } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Debts, UsersList } from './components';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#5a2d8e',
        },
        secondary: {
            main: '#853e97',
        },
    }
});

const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <AppBar style={{padding: 20}}/>
            <Container style={{marginTop: 40}}>
                <Grid container>
                    <Grid item xs={12} sm={6} md={4}>
                        <UsersList/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={8}>
                        <Debts/>
                    </Grid>
                </Grid>
            </Container>
        </MuiThemeProvider>
    );
}

export default App;
