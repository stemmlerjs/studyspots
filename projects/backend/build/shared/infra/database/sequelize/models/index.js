"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createModels = void 0;
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var config_1 = __importDefault(require("../config/config"));
var Sequelize = __importStar(require("sequelize"));
var sequelize = config_1.default.connection;
// turns base_user => BaseUser
function toCamelCase(str) {
    var _ = str.indexOf('_');
    if (~_) {
        return toCamelCase(str.substring(0, _) +
            str
                .substring(_ + 1)
                .substring(0, 1)
                .toUpperCase() +
            str.substring(_ + 2));
    }
    else {
        return str.substring(0, 1).toUpperCase() + str.substring(1);
    }
}
var models = {};
var modelsLoaded = false;
var createModels = function () {
    if (modelsLoaded)
        return models;
    // Get all models
    var modelsList = fs
        .readdirSync(path.resolve(__dirname, './'))
        .filter(function (t) {
        return (~t.indexOf('.ts') || ~t.indexOf('.js')) &&
            !~t.indexOf('index') &&
            !~t.indexOf('.map');
    })
        .map(function (model) { return require(__dirname + '/' + model).default; });
    // Camel case the models
    for (var i = 0; i < modelsList.length; i++) {
        var modelName = toCamelCase(modelsList[i].name);
        models[modelName] = modelsList[i];
    }
    // Create the relationships for the models;
    Object.keys(models).forEach(function (modelName) {
        if (models[modelName].associate) {
            models[modelName].associate(models);
        }
    });
    models['sequelize'] = sequelize;
    models['Sequelize'] = Sequelize;
    modelsLoaded = true;
    console.log('[DB]: Connected to the database.');
    return models;
};
exports.createModels = createModels;
exports.default = createModels();
