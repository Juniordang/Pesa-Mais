import xlsx from "xlsx";
import path from "path";
import { fileURLToPath } from "url";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js"
dayjs.extend(utc)

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const wb = xlsx.readFile(path.resolve(__dirname, "balanca_avenorte.xlsx"));
const sheet = wb.Sheets[wb.SheetNames[0]];

const json = xlsx.utils.sheet_to_json(sheet);

function excelDateToJs(serial) {
    const date = new Date((serial - 25569) * 86400 * 1000)
    return dayjs.utc(date, "YYYY-MM-DD")
}
const jsonFormatted = json.map((balance) => {
    const date = excelDateToJs(balance.data_calibracao);
    if (!date.isValid()) {
        return {
            ...balance,
            data_calibracao: null
        }
    }
    return {
        ...balance,
        data_calibracao: date.toDate()
    }
})
export default jsonFormatted