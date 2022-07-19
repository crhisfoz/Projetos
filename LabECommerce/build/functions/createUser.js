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
exports.createUser = void 0;
const connection_1 = __importDefault(require("../connection"));
const usersList = "labecommerce_users";
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = yield (0, connection_1.default)(usersList);
    if (userData) {
        userData.forEach((u) => {
            if (u.nickname === user.name) {
                throw new Error("NOT_IMPLEMENTED_NAME");
            }
            else if (u.email === user.email) {
                throw new Error("NOT_IMPLEMENTED_EMAIL");
            }
            else if (u.password === user.password) {
                throw new Error("NOT_IMPLEMENTED_PASSWORD");
            }
            return userData;
        });
    }
    yield (0, connection_1.default)(usersList)
        .insert(user)
        .into(usersList);
});
exports.createUser = createUser;
