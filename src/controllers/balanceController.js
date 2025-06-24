import * as balanceServices from "../services/balanceServices.js";

async function addAll(req, res) {
    const { statusCode, message } = await balanceServices.addAll();
    res.status(statusCode).json({ "message": message});
}

async function getAll(req, res) {
    try {
        const balances = await balanceServices.getAll() 
        if (balances.length == 0) throw new Error();
        const orderBalances = balances.sort((a, b) => a.id - b.id);
        res.status(200).json(orderBalances);
    } catch (err) {
        res.status(400).json({"message": "Não foram encontrados as balanças"})
    }
}
async function getById(req, res) {
    const { id } = req.params;
    try {
        const balance = await balanceServices.getById(id);
        if (!balance) throw new Error("Balança não encontrada")
        res.status(200).json(balance);
    } catch (err) {
        res.status(400).json({ "message": err.message });
    }
}
async function getFilter(req, res) {
    try {
        if (!req.query) res.status(400).json({ "message": "Nada selecionado" })
        const { marca,status } = req.query;
        const item = {};
        if (marca && status) {
            item.marca = marca;
            item.status = status;
        }

        const data = await balanceServices.getFilter(item);
        const dataOrdenado = [...data]
        dataOrdenado.sort((a, b) => a.id - b.id)
        if (dataOrdenado.length === 0) {
            res.status(400).json({ "message": "Nenhuma balança encontrado" })
            return;
        }
        res.status(200).json(dataOrdenado);
    } catch (err) {
        console.log(err)
        res.status(400).json({"message": "Não encontrado"})
    }
}
export {
    addAll,
    getAll,
    getById,
    getFilter
}