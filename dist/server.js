"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const database_config_1 = __importDefault(require("./sequelize/config/database.config"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
try {
    database_config_1.default.authenticate();
    console.log('Connection has been established');
}
catch (error) {
    console.error('Unable to connect', error);
}
const PORT = process.env.PORT;
app.get('/', (req, res) => {
    res.send({ msg: 'Welcome to first request' });
});
app.post('/create', (req, res) => {
    console.log(req.body);
    return res.send('Functional route');
});
app.listen(PORT, () => {
    console.log(`Server is up and running at: ${PORT}`);
});
