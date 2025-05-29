import { Balance } from "../model/balanceModel.js";
import balanceJson from "../../data/parsePlanilha.js"

async function addAll() {
    try {
        const lengthBalance = await Balance.countDocuments()
        if (lengthBalance > 0) {
            throw new Error("Já foi adicionado todos os dados");
        }
        try {
            await Balance.insertMany(balanceJson);
            return { statusCode: 200, message: 'Balanças adicionadas com sucesso'}
        } catch (err) {
            console.log(err)
            return { statusCode: 400, message: 'Erro ao adicionar todos os dados'};
        }
    } catch (err) {
        return { statusCode: 400, message: err.message};
    }
    
}
async function getAll() {
    try {
        return await Balance.find()
    } catch (err) {
        console.log(err)
    }
}
async function getById(id) {
    try {
        return await Balance.findOne({ id: id });
    } catch (err) {
        console.log(err)
    }
}
async function getFilter(item) {
    try {
        return await Balance.find(item)
    } catch (err) {
        console.log(err)
    }
}
export {
    addAll,
    getAll,
    getById,
    getFilter
}