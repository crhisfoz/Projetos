"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectProducts = void 0;
const connection_1 = __importDefault(require("../connection"));
const productsList = "labecommerce_products";
const selectProducts = (name, sort, order) => {
    return (0, connection_1.default)(productsList)
        .select("*")
        .where("name", "like", `%${name}%`)
        .orderBy(sort, order);
};
exports.selectProducts = selectProducts;
