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
exports.postPurchases = void 0;
const createPurchase_1 = require("./../functions/createPurchase");
const statusCodes_1 = require("../constants/statusCodes");
const uuid_1 = require("uuid");
const selectPriceById_1 = require("../functions/selectPriceById");
const selectUserById_1 = require("../functions/selectUserById");
const handlleError_1 = require("../functions/handlleError");
const postPurchases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataPurchase = req.body;
        const idProduct = dataPurchase.productId;
        const idUser = dataPurchase.userId;
        const quantity = dataPurchase.quantity;
        if (!idUser || !idProduct || !quantity) {
            throw new Error("MISSING_PARAMETERS");
        }
        // AQUI VERIFICO SE O ID DE USUÁRIO ENVIADO, É VÁLIDO
        const user = yield (0, selectUserById_1.selectUserById)(idUser);
        // AQUI VERIFICO SE O ID DE PRODUTO ENVIADO, É VÁLIDO
        const price = yield (0, selectPriceById_1.selectPriceById)(idProduct);
        const purchaseObject = {
            id: (0, uuid_1.v4)(),
            user_id: idUser,
            product_id: idProduct,
            quantity,
            total_price: quantity * price,
        };
        yield (0, createPurchase_1.createPurchase)(purchaseObject);
        res
            .status(statusCodes_1.messageStatus.SUCCESS.status)
            .send(statusCodes_1.messageStatus.SUCCESS.message);
    }
    catch (error) {
        (0, handlleError_1.handlleError)(res, error);
    }
});
exports.postPurchases = postPurchases;
