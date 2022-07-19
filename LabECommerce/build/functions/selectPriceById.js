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
exports.selectPriceById = void 0;
const connection_1 = __importDefault(require("../connection"));
const productsList = "labecommerce_products";
const selectPriceById = (idProduct) => __awaiter(void 0, void 0, void 0, function* () {
    const price = yield connection_1.default
        .select("price")
        .from(productsList)
        .where("id", idProduct);
    if (!price[0]) {
        throw new Error("NOT_FOUND_PRODUCT");
    }
    return Number(price[0].price);
});
exports.selectPriceById = selectPriceById;
