const router = require('express-promise-router')();
const db = require("../database.ts");

router.get("/debts", async (req, res) => {
    const debts = await db("debt");
    res.json({ success: true, debts });
});

router.post("/debts", async (req, res) => {
    const { debt } = req.body;
    try{
        const result = await DebtsService.insertDebt(db, debt);
        return res.status(200).json({ success: true, message: 'Dívida criada com sucesso!'});
    } catch (err){
        return res.status(500).json({ success: false, error: err.sqlMessage});
    }
});

router.put("/debts", async (req, res) => {
    const { debt } = req.body;
    try{
        const result = await DebtsService.updateDebt(db, debt.id, debt);
        return res.status(200).json({ success: true, message: 'Dívida atualizada com sucesso!'});
    } catch (err){
        return res.status(500).json({ success: false, error: err.sqlMessage});
    }
});

router.delete("/debts/:id", async (req, res) => {
    const id = req.params.id;
    try{
        const result = await DebtsService.deleteDebt(db, id);
        return res.status(200).json({ success: true, message: 'Dívida excluída com sucesso!'});
    } catch (err){
        return res.status(500).json({ success: false, error: err.sqlMessage});
    }

});

const DebtsService = {
    insertDebt(db, newDebt) {
        return db
        .insert(newDebt)
        .into("debt")
        .then(rows => {
            return rows;
        });
    },
    deleteDebt(db, id) {
      return db("debt")
        .where({ id })
        .delete();
    },
    updateDebt(db, id, debtFields) {
        return db("debt")
            .where({ id })
            .update(debtFields);
    }
};

module.exports = router;