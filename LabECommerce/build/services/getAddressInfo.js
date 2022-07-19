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
exports.getAdrressInfo = void 0;
const axios_1 = __importDefault(require("axios"));
const getAdrressInfo = (zipcode) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = `https://viacep.com.br/ws/${zipcode}/json`;
        const res = yield axios_1.default.get(url);
        const finalAddress = `${res.data.logradouro}, ${res.data.bairro} - ${res.data.localidade}/${res.data.uf}`;
        return finalAddress;
    }
    catch (error) {
        throw new Error("VIA_CEP_ERROR");
    }
});
exports.getAdrressInfo = getAdrressInfo;
