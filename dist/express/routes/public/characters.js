"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../../sequelize/models");
function getAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const created = yield models_1.CharacterInstance.findAll();
            return res.json({ created, msg: 'Successfully fetched all characters' });
        }
        catch (e) {
            return res.json({ msg: 'Failed to create character', status: 500, route: '/getAll' });
        }
    });
}
function getById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.body.id;
        try {
            const created = yield models_1.CharacterInstance.findByPk(id);
            return res.json({ created, msg: 'Successfully fetched character by id' });
        }
        catch (e) {
            return res.json({ msg: `Character with id: ${id} does not exist`, status: 404, route: '/getById' });
        }
    });
}
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const created = yield models_1.CharacterInstance.create(Object.assign({}, req.body));
            return res.json({ created, msg: 'Successfully created character ' });
        }
        catch (e) {
            return res.json({ msg: 'Failed to create character', status: 500, route: '/create' });
        }
    });
}
exports.default = { getAll, getById, create };
