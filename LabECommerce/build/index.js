"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const postUser_1 = require("./endpoints/postUser");
const getUsers_1 = require("./endpoints/getUsers");
const postProduct_1 = require("./endpoints/postProduct");
const getProducts_1 = require("./endpoints/getProducts");
const postPurchases_1 = require("./endpoints/postPurchases");
const getUserPurchases_1 = require("./endpoints/getUserPurchases");
//1. CRIAR USÁRIO
app_1.default.post("/users", postUser_1.postUser);
//2. BUSCAR USÁRIOS
app_1.default.get("/users", getUsers_1.getUsers);
//3. CRIAR PRODUTO
app_1.default.post("/products", postProduct_1.postProduct);
//4. BUSCAR PRODUTO
app_1.default.get("/products", getProducts_1.getProducts);
//5. CRIAR REGISTRO DE COMPRA
app_1.default.post("/purchases", postPurchases_1.postPurchases);
//6. BURSCAR REGISTROS DE COMPRAS DE 1 USUÁRIO POR ID
app_1.default.get("/users/:userId/purchases", getUserPurchases_1.getUserPurchases);
