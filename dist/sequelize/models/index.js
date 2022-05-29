"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterInstance = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../config/database.config"));
class CharacterInstance extends sequelize_1.Model {
}
exports.CharacterInstance = CharacterInstance;
CharacterInstance.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    imgUrl: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    sequelize: database_config_1.default,
    tableName: 'characters',
});
