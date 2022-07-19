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
exports.selectUsers = void 0;
const connection_1 = __importDefault(require("../connection"));
const selectUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    let purchases;
    let newArrayData = [];
    let users = yield connection_1.default
        .select("name", "email", "id", "address")
        .from("labecommerce_users")
        .orderBy("name", "asc");
    for (let user of users) {
        purchases = yield (0, connection_1.default)("labecommerce_purchases as p")
            .select("prod.name as product_name", "p.user_id as userId", "p.quantity", "p.total_price as TotalPrice")
            .join("labecommerce_products as prod", "prod.id", "p.product_id")
            .join("labecommerce_users as u", "u.id", "p.user_id")
            .where("p.user_id", user.id);
        newArrayData.push({
            id: user.id,
            name: user.name,
            email: user.email,
            address: user.address,
            purchases: purchases,
        });
    }
    return newArrayData;
});
exports.selectUsers = selectUsers;
