"use strict";
//DEIXEI NO PROJETO APENAS PARA CONSULTA FUTURA
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
exports.selectUsersWithMap = void 0;
const connection_1 = __importDefault(require("../connection"));
const selectUsersWithMap = () => __awaiter(void 0, void 0, void 0, function* () {
    let users = yield connection_1.default
        .select("name", "email", "id")
        .from("labecommerce_users");
    const purchases = yield Promise.all(users.map((u) => __awaiter(void 0, void 0, void 0, function* () {
        const purchases = yield (0, connection_1.default)("labecommerce_purchases as p")
            .select("prod.name as product_name", "p.user_id", "p.quantity", "p.total_price")
            .join("labecommerce_products as prod", "prod.id", "p.product_id")
            .join("labecommerce_users as u", "u.id", "p.user_id")
            .where("p.user_id", u.id);
        return Object.assign(Object.assign({}, u), { purchases });
    })));
    return purchases;
});
exports.selectUsersWithMap = selectUsersWithMap;
