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
exports.postUser = void 0;
const mailTransporter_1 = require("./../services/mailTransporter");
const statusCodes_1 = require("../constants/statusCodes");
const uuid_1 = require("uuid");
const createUser_1 = require("../functions/createUser");
const handlleError_1 = require("../functions/handlleError");
const getAddressInfo_1 = require("../services/getAddressInfo");
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, zipcode } = req.body;
        const address = yield (0, getAddressInfo_1.getAdrressInfo)(zipcode);
        if (!name || !email || !password || !zipcode) {
            throw new Error("MISSING_PARAMETERS");
        }
        const newUser = {
            id: (0, uuid_1.v4)(),
            name,
            email,
            password,
            address,
        };
        //ANTES DE CRIAR O USUÁRIO COLOQUEI UMA VERIFICAÇÃO DENTRO DA FUNÇÃO CREATEUSER PARA ENVIAR MENSAGEM DE ERRO SE OS DADOS QUE SÃO ÚNICOS JÁ CONSTAREM NO BANCO DE DADOS
        yield (0, createUser_1.createUser)(newUser);
        //TIVE QUE TRANSFORMAR ESSA EMAILINFO  EM FUNÇÃO ASYNC PORQUE QUANDO DÁ ALGUM ERRO DE NODEMAILER, ELA CRIA O USUÁRIO MAS FICA EM LOOP E NÃO ENCERRAVA A REQUISIÇÃO
        const sendConfirmationEmail = (email, name) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield mailTransporter_1.mailTransporter.sendMail({
                    from: "<submit-backend-crhis@hotmail.com>",
                    to: email,
                    subject: "Cadastro Efetuado",
                    text: "BOAS VINDAS !!!!",
                    html: `<p> " Olá ${name}, Seu Cadastro Foi concluído com Sucesso"</p>`,
                });
            }
            catch (error) {
                throw new Error("NODE_MAILER_ERROR");
            }
        });
        sendConfirmationEmail(email, name);
        res
            .status(statusCodes_1.messageStatus.CREATED_USER.status)
            .send(statusCodes_1.messageStatus.CREATED_USER.message);
    }
    catch (error) {
        (0, handlleError_1.handlleError)(res, error);
    }
});
exports.postUser = postUser;
