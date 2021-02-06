const express = require("express");
const db = require("./database.ts");
const app = express();

const debtRoute = require('./routes/debts.ts');

app.use(express.json());
app.use('/', debtRoute);

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
