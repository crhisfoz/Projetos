"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlleError = void 0;
const statusCodes_1 = require("../constants/statusCodes");
const handlleError = (res, error) => {
    error.sqlMessage ? res.status(500).send(error.sqlMessage) :
        res
            .status(statusCodes_1.messageStatus[error.message].status)
            .send(statusCodes_1.messageStatus[error.message].message);
};
exports.handlleError = handlleError;
