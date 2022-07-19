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
exports.postProduct = void 0;
const statusCodes_1 = require("../constants/statusCodes");
const uuid_1 = require("uuid");
const createProduct_1 = require("../functions/createProduct");
const handlleError_1 = require("../functions/handlleError");
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //COLOQUEI PRA RECEBER MAIS PROPRIEDADES DO BODY COMO OPCIONAIS, A FUNÇÃO FUNCIONA INDEPENDENTE DE RECEBER TODOS OS DADOS
        const prodData = req.body;
        if (!prodData.name || !prodData.price || !prodData.imageUrl) {
            throw new Error("MISSING_PARAMETERS");
        }
        const newProduct = {
            id: (0, uuid_1.v4)(),
            name: prodData.name,
            price: prodData.price,
            image_url: prodData.imageUrl,
            rating: prodData.rating,
            description: prodData.description,
            brand: prodData.brand,
            category: prodData.category,
            stock: prodData.stock,
        };
        //ANTES DE CRIAR O PRODUTO COLOQUEI UMA VERIFICAÇÃO DENTRO DA FUNÇÃO PARA ENVIAR MENSAGEM DE ERRO SE OS DADOS DO TITLE JÁ CONSTAREM NO BANCO DE DADOS, PRA NÃO HAVER REPETIÇÃO DE NOME DE PRODUTOS
        yield (0, createProduct_1.createProduct)(newProduct);
        res
            .status(statusCodes_1.messageStatus.CREATED_PRODUCT.status)
            .send(statusCodes_1.messageStatus.CREATED_PRODUCT.message);
    }
    catch (error) {
        (0, handlleError_1.handlleError)(res, error);
    }
});
exports.postProduct = postProduct;
