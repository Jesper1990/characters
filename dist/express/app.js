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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const characters_1 = __importDefault(require("./routes/public/characters"));
const users_1 = __importDefault(require("./routes/public/users"));
const publicRoutes = {
    characters: characters_1.default,
    users: users_1.default
};
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
function makeHandlerAwareOfAsyncErrors(handler) {
    return function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield handler(req, res);
            }
            catch (e) {
                next(e);
            }
        });
    };
}
app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to first request!' });
});
for (const [routeName, routeController] of Object.entries(publicRoutes)) {
    if (routeController.getAll) {
        app.get(`/api/${routeName}`, makeHandlerAwareOfAsyncErrors(routeController.getAll));
    }
    if (routeController.getById) {
        app.get(`/api/${routeName}/:id`, makeHandlerAwareOfAsyncErrors(routeController.getById));
    }
    if (routeController.create) {
        app.post(`/api/${routeName}`, makeHandlerAwareOfAsyncErrors(routeController.create));
    }
}
exports.default = app;
