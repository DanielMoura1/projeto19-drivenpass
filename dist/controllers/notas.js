var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as notasService from '../service/notasService.js';
export function createNota(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var nota, authorization, token, usuario, notaNome, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nota = req.body;
                    authorization = req.headers.authorization;
                    token = authorization === null || authorization === void 0 ? void 0 : authorization.replace('Bearer ', '');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    return [4 /*yield*/, notasService.pegarUsuario(token)];
                case 2:
                    usuario = _a.sent();
                    return [4 /*yield*/, notasService.varificarTitulo(usuario.id, nota.titulo)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, notasService.criarnotaNome(nota, usuario.id)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, notasService.pegarnota(usuario.id, nota.titulo)];
                case 5:
                    notaNome = _a.sent();
                    console.log(notaNome.id);
                    return [4 /*yield*/, notasService.criarNota(nota, notaNome.id)];
                case 6:
                    _a.sent();
                    res.status(200).send('Notas criada com sucesso!!');
                    return [3 /*break*/, 8];
                case 7:
                    error_1 = _a.sent();
                    res.status(500).send(error_1);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
export function getnotas(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, authorization, token, usuario, cd, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = parseInt(req.params.id);
                    authorization = req.headers.authorization;
                    token = authorization === null || authorization === void 0 ? void 0 : authorization.replace('Bearer ', '');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, notasService.pegarUsuario(token)];
                case 2:
                    usuario = _a.sent();
                    return [4 /*yield*/, notasService.pegarnotas(id, usuario.id)];
                case 3:
                    cd = _a.sent();
                    console.log(cd);
                    res.send(cd);
                    return [3 /*break*/, 5];
                case 4:
                    error_2 = _a.sent();
                    res.status(500).send(error_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
export function Delete(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, authorization, token, usuario, cd, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = parseInt(req.params.id);
                    console.log(id);
                    authorization = req.headers.authorization;
                    token = authorization === null || authorization === void 0 ? void 0 : authorization.replace('Bearer ', '');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    console.log(id);
                    console.log(token);
                    return [4 /*yield*/, notasService.pegarUsuario(token)];
                case 2:
                    usuario = _a.sent();
                    return [4 /*yield*/, notasService.pegarnotas(id, usuario.id)];
                case 3:
                    cd = _a.sent();
                    return [4 /*yield*/, notasService.varificarID(usuario.id, cd[0].titulo)];
                case 4:
                    _a.sent();
                    console.log('oi');
                    return [4 /*yield*/, notasService.Delete(id, cd[0].notas[0].id)];
                case 5:
                    _a.sent();
                    console.log(cd);
                    res.status(200).send('Notas deletadas com sucesso !!');
                    return [3 /*break*/, 7];
                case 6:
                    error_3 = _a.sent();
                    res.status(500).send(error_3);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
