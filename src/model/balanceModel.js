import mongoose from "mongoose";

const balanceAvenorte = new mongoose.Schema({
    id: { type: Number, required: true, unique: true},
    marca: String,
    modelo: String,
    serie: String,
    certificado: String,
    divisao: String,
    capacidade: String,
    data_calibracao: Date,
    localizacao: String,
    status: { type: String, required: true }
}, {
    toJSON: {
        transform(doc, ret) {
            delete ret._id;
            delete ret.__v;
        }
    }
});
const Balance = mongoose.model("Balance", balanceAvenorte);
export { Balance };