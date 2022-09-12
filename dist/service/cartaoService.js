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
import * as userRepository from '../repositories/cartaoRepositories.js';
import Cryptr from 'cryptr';
export function pegarUsuario(token) {
    return __awaiter(this, void 0, void 0, function () {
        var usuario;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('???');
                    if (token.length === 0) {
                        throw { code: 'NotFound', message: 'token null' };
                    }
                    return [4 /*yield*/, userRepository.getUsuario(token)];
                case 1:
                    usuario = _a.sent();
                    return [2 /*return*/, usuario[0]];
            }
        });
    });
}
export function varificarTitulo(id, titul) {
    return __awaiter(this, void 0, void 0, function () {
        var titulo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userRepository.getTitulo(id, titul)];
                case 1:
                    titulo = _a.sent();
                    console.log(titulo);
                    if (titulo.length > 0) {
                        throw { code: 'NotFound', message: 'titulo invalido' };
                    }
                    return [2 /*return*/];
            }
        });
    });
}
export function criarSite(credenciais, id) {
    return __awaiter(this, void 0, void 0, function () {
        var sites;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('ab');
                    sites = {
                        titulo: credenciais.titulo,
                        usuarioId: id
                    };
                    console.log('ab');
                    return [4 /*yield*/, userRepository.insert(sites)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function pegarSite(id, cd) {
    return __awaiter(this, void 0, void 0, function () {
        var site, n;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userRepository.getsite(id, cd)];
                case 1:
                    site = _a.sent();
                    n = site.length - 1;
                    return [2 /*return*/, site[n]];
            }
        });
    });
}
export function criarCredenciais(credenciais, id) {
    return __awaiter(this, void 0, void 0, function () {
        var cryptr, senha1, cod, cd;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('a1');
                    cryptr = new Cryptr('myTotallySecretKey');
                    senha1 = cryptr.encrypt(credenciais.senha);
                    cod = cryptr.encrypt(credenciais.codigoSeg);
                    cd = {
                        numeroCartao: credenciais.numeroCartao,
                        nomeCartao: credenciais.nomeCartao,
                        codigoSeg: cod,
                        dataValidade: credenciais.dataValidade,
                        senha: senha1,
                        virtual: credenciais.virtual,
                        tipo: credenciais.tipo,
                        nomeCartaoId: id
                    };
                    console.log('a2');
                    return [4 /*yield*/, userRepository.insertCd(cd)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function pegarCartaos(id, idUsuario) {
    return __awaiter(this, void 0, void 0, function () {
        var usuario;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userRepository.getCredenciais(id, idUsuario)];
                case 1:
                    usuario = _a.sent();
                    if (usuario.length === 0) {
                        throw { code: 'NotFound', message: 'id invalido' };
                    }
                    return [2 /*return*/, usuario];
            }
        });
    });
}
export function varificarID(id, titul) {
    return __awaiter(this, void 0, void 0, function () {
        var titulo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userRepository.getId(id)];
                case 1:
                    titulo = _a.sent();
                    console.log(titulo);
                    if (titulo.length === 0) {
                        throw { code: 'NotFound', message: 'id invalido' };
                    }
                    return [2 /*return*/];
            }
        });
    });
}
export function Delete(idsite, idcd) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userRepository.deletar(idsite, idcd)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
