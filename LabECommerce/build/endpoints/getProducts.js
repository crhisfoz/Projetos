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
exports.getProducts = void 0;
const statusCodes_1 = require("../constants/statusCodes");
const selectProducts_1 = require("../functions/selectProducts");
const handlleError_1 = require("../functions/handlleError");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let name = req.query.search;
        let sort = req.query.sort;
        let order = req.query.order;
        if (!name) {
            name = "%";
        }
        if (!sort) {
            sort = "name";
        }
        if ((order === null || order === void 0 ? void 0 : order.toUpperCase()) !== "DESC" && (order === null || order === void 0 ? void 0 : order.toUpperCase()) !== "ASC") {
            order = undefined;
        }
        const product = yield (0, selectProducts_1.selectProducts)(name, sort, order);
        if (!product.length) {
            throw new Error("NOT_FOUND_PRODUCT");
        }
        res.status(statusCodes_1.messageStatus.SUCCESS.status).send(product);
    }
    catch (error) {
        (0, handlleError_1.handlleError)(res, error);
    }
});
exports.getProducts = getProducts;
