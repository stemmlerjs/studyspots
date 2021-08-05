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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var runner_1 = __importDefault(require("../runner"));
exports.default = {
    up: function (queryInterface, Sequelize) { return __awaiter(void 0, void 0, void 0, function () {
        var CREATE_BASE_USER, CREATE_MEMBER, CREATE_POST, CREATE_COMMENT, CREATE_POST_VOTE, CREATE_COMMENT_VOTE;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    CREATE_BASE_USER = function () {
                        return queryInterface.createTable('base_user', {
                            base_user_id: {
                                type: Sequelize.UUID,
                                defaultValue: Sequelize.UUIDV4,
                                allowNull: false,
                                primaryKey: true,
                            },
                            user_email: {
                                type: Sequelize.STRING(250),
                                allowNull: false,
                                unique: true,
                            },
                            is_email_verified: {
                                type: Sequelize.BOOLEAN,
                                allowNull: false,
                                defaultValue: false,
                            },
                            username: {
                                type: Sequelize.STRING(250),
                                allowNull: false,
                            },
                            user_password: {
                                type: Sequelize.STRING,
                                allowNull: true,
                                defaultValue: null,
                            },
                            is_admin_user: {
                                type: Sequelize.BOOLEAN,
                                allowNull: false,
                                defaultValue: false,
                            },
                            is_deleted: {
                                type: Sequelize.BOOLEAN,
                                allowNull: false,
                                defaultValue: false,
                            },
                            created_at: {
                                type: Sequelize.DATE,
                                allowNull: false,
                                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                            },
                            updated_at: {
                                type: Sequelize.DATE,
                                allowNull: false,
                                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
                            },
                        });
                    };
                    CREATE_MEMBER = function () {
                        return queryInterface.createTable('member', {
                            member_id: {
                                type: Sequelize.UUID,
                                defaultValue: Sequelize.UUIDV4,
                                allowNull: false,
                                primaryKey: true,
                            },
                            member_base_id: {
                                type: Sequelize.UUID,
                                allowNull: false,
                                primaryKey: true,
                                references: {
                                    model: 'base_user',
                                    key: 'base_user_id',
                                },
                                onDelete: 'cascade',
                                onUpdate: 'cascade',
                            },
                            reputation: {
                                type: Sequelize.INTEGER,
                                allowNull: false,
                                defaultValue: 0,
                            },
                            created_at: {
                                type: Sequelize.DATE,
                                allowNull: false,
                                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                            },
                            updated_at: {
                                type: Sequelize.DATE,
                                allowNull: false,
                                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
                            },
                        });
                    };
                    CREATE_POST = function () {
                        return queryInterface.createTable('post', {
                            post_id: {
                                type: Sequelize.UUID,
                                defaultValue: Sequelize.UUIDV4,
                                allowNull: false,
                                primaryKey: true,
                            },
                            member_id: {
                                type: Sequelize.UUID,
                                allowNull: false,
                                references: {
                                    model: 'member',
                                    key: 'member_id',
                                },
                                onDelete: 'cascade',
                                onUpdate: 'cascade',
                            },
                            type: {
                                type: Sequelize.STRING(30),
                                allowNull: false,
                            },
                            title: {
                                type: Sequelize.TEXT,
                                allowNull: true,
                            },
                            text: {
                                type: Sequelize.TEXT,
                                allowNull: true,
                            },
                            link: {
                                type: Sequelize.TEXT,
                                allowNull: true,
                            },
                            slug: {
                                type: Sequelize.STRING(150),
                                allowNull: false,
                            },
                            points: {
                                type: Sequelize.INTEGER,
                                allowNull: false,
                                defaultValue: 0,
                            },
                            total_num_comments: {
                                type: Sequelize.INTEGER,
                                allowNull: false,
                                defaultValue: 0,
                            },
                            created_at: {
                                type: Sequelize.DATE,
                                allowNull: false,
                                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                            },
                            updated_at: {
                                type: Sequelize.DATE,
                                allowNull: false,
                                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
                            },
                        });
                    };
                    CREATE_COMMENT = function () {
                        return queryInterface.createTable('comment', {
                            comment_id: {
                                type: Sequelize.UUID,
                                defaultValue: Sequelize.UUIDV4,
                                allowNull: false,
                                primaryKey: true,
                            },
                            member_id: {
                                type: Sequelize.UUID,
                                allowNull: false,
                                references: {
                                    model: 'member',
                                    key: 'member_id',
                                },
                                onDelete: 'cascade',
                                onUpdate: 'cascade',
                            },
                            parent_comment_id: {
                                type: Sequelize.UUID,
                                allowNull: true,
                                references: {
                                    model: 'comment',
                                    key: 'comment_id',
                                },
                                onDelete: 'cascade',
                                onUpdate: 'cascade',
                            },
                            post_id: {
                                type: Sequelize.UUID,
                                allowNull: false,
                                references: {
                                    model: 'post',
                                    key: 'post_id',
                                },
                                onDelete: 'cascade',
                                onUpdate: 'cascade',
                            },
                            text: {
                                type: Sequelize.TEXT,
                                allowNull: false,
                            },
                            points: {
                                type: Sequelize.INTEGER,
                                allowNull: false,
                                defaultValue: 1,
                            },
                            created_at: {
                                type: Sequelize.DATE,
                                allowNull: false,
                                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                            },
                            updated_at: {
                                type: Sequelize.DATE,
                                allowNull: false,
                                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
                            },
                        });
                    };
                    CREATE_POST_VOTE = function () {
                        return queryInterface.createTable('post_vote', {
                            post_vote_id: {
                                type: Sequelize.UUID,
                                defaultValue: Sequelize.UUIDV4,
                                allowNull: false,
                                primaryKey: true,
                            },
                            post_id: {
                                type: Sequelize.UUID,
                                allowNull: false,
                                references: {
                                    model: 'post',
                                    key: 'post_id',
                                },
                                onDelete: 'cascade',
                                onUpdate: 'cascade',
                            },
                            member_id: {
                                type: Sequelize.UUID,
                                allowNull: false,
                                references: {
                                    model: 'member',
                                    key: 'member_id',
                                },
                                onDelete: 'cascade',
                                onUpdate: 'cascade',
                            },
                            type: {
                                type: Sequelize.STRING(10),
                                allowNull: false,
                            },
                            created_at: {
                                type: Sequelize.DATE,
                                allowNull: false,
                                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                            },
                            updated_at: {
                                type: Sequelize.DATE,
                                allowNull: false,
                                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
                            },
                        });
                    };
                    CREATE_COMMENT_VOTE = function () {
                        return queryInterface.createTable('comment_vote', {
                            comment_vote_id: {
                                type: Sequelize.UUID,
                                defaultValue: Sequelize.UUIDV4,
                                allowNull: false,
                                primaryKey: true,
                            },
                            comment_id: {
                                type: Sequelize.UUID,
                                allowNull: false,
                                references: {
                                    model: 'comment',
                                    key: 'comment_id',
                                },
                                onDelete: 'cascade',
                                onUpdate: 'cascade',
                            },
                            member_id: {
                                type: Sequelize.UUID,
                                allowNull: false,
                                references: {
                                    model: 'member',
                                    key: 'member_id',
                                },
                                onDelete: 'cascade',
                                onUpdate: 'cascade',
                            },
                            type: {
                                type: Sequelize.STRING(10),
                                allowNull: false,
                            },
                            created_at: {
                                type: Sequelize.DATE,
                                allowNull: false,
                                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                            },
                            updated_at: {
                                type: Sequelize.DATE,
                                allowNull: false,
                                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
                            },
                        });
                    };
                    return [4 /*yield*/, runner_1.default.run([
                            function () { return CREATE_BASE_USER(); },
                            function () { return CREATE_MEMBER(); },
                            function () { return CREATE_POST(); },
                            function () { return CREATE_COMMENT(); },
                            function () { return CREATE_POST_VOTE(); },
                            function () { return CREATE_COMMENT_VOTE(); },
                        ])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
    down: function (queryInterface, Sequelize) {
        return runner_1.default.run([function () { return queryInterface.dropTable('base_user'); }]);
    },
};
