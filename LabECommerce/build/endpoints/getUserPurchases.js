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
exports.getUserPurchases = void 0;
const statusCodes_1 = require("../constants/statusCodes");
const selectUserPurchase_1 = require("../functions/selectUserPurchase");
const handlleError_1 = require("../functions/handlleError");
const getUserPurchases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let arrayPurchase = [];
        let purchaseObject;
        const idUser = req.params.userId;
        const purchasesUser = yield (0, selectUserPurchase_1.selectUserPurchase)(idUser);
        if (!purchasesUser) {
            throw new Error("NOT_FOUND");
        }
        if (purchasesUser.length < 1) {
            throw new Error("NOT_FOUND");
        }
        //AQUI CRIO UM OBJETO COM OS PRODUTOS PARA CADA COMPRA REALIZADA
        purchasesUser.forEach((user) => {
            purchaseObject = {
                product: user.name_product,
                quantity: user.quantity,
                TotalPrice: user.total_price,
            };
            arrayPurchase.push(purchaseObject);
            return arrayPurchase;
        });
        const newObjectPurchase = {
            purchases: arrayPurchase,
        };
        res.status(statusCodes_1.messageStatus.SUCCESS.status).send(newObjectPurchase);
    }
    catch (error) {
        (0, handlleError_1.handlleError)(res, error);
    }
});
exports.getUserPurchases = getUserPurchases;
