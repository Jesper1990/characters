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
const users_model_1 = require("../../../sequelize/models/users/users.model");
function getAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const created = yield users_model_1.UserInstance.findAll();
            return res.json({ created, msg: 'Successfully fetched all users' });
        }
        catch (e) {
            return res.json({ msg: 'Failed to fetch users', status: 500, route: '/users' });
        }
    });
}
function getById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.body.id;
        try {
            const created = yield users_model_1.UserInstance.findByPk(id);
            return res.json({ created, msg: `User with id: ${id} has been fetched` });
        }
        catch (e) {
            return res.json({ msg: `User with id: ${id} does not exist.`, status: 404, route: `/users/${id}` });
        }
    });
}
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(req.body);
            const created = yield users_model_1.UserInstance.create(Object.assign({}, req.body));
            return res.json({ created, msg: 'Successfully created user!' });
        }
        catch (e) {
            return res.json({ msg: 'Failed to create user', status: 500, route: '/users' });
        }
    });
}
exports.default = { getAll, getById, create };
