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
exports.getUsers = void 0;
const statusCodes_1 = require("./constants/statusCodes");
const handlleError_1 = require("./functions/handlleError");
const selectUsers_1 = require("./functions/selectUsers");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let array = [];
    try {
        const users = yield (0, selectUsers_1.selectUsers)();
        if (!users) {
            throw new Error("NOT_FOUND");
        }
        const newUser = {
            users: users
        };
        res.status(statusCodes_1.messageStatus.SUCCESS.status).send(newUser);
    }
    catch (error) {
        (0, handlleError_1.handlleError)(res, error);
    }
});
exports.getUsers = getUsers;
