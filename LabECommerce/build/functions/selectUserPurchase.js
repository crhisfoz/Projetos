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
exports.selectUserPurchase = void 0;
const connection_1 = __importDefault(require("../connection"));
const selectUserPurchase = (idUser) => __awaiter(void 0, void 0, void 0, function* () {
    const dataUser = yield connection_1.default
        .select("prod.name as name_product", "p.quantity", "p.total_price", "p.user_id as user_id")
        .from("labecommerce_purchases as p")
        .join(" labecommerce_products as prod", "prod.id", "p.product_id")
        .where("p.user_id", idUser);
    return dataUser;
});
exports.selectUserPurchase = selectUserPurchase;
