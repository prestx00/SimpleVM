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
exports.__esModule = true;
var SimpleVM_1 = require("../abi/SimpleVM");
var getSimpleVMWithSigner_1 = require("../abi/getSimpleVMWithSigner");
var react_1 = require("react");
var router_1 = require("next/router");
var Layout_1 = require("../components/Layout");
var StyledLabelInput_1 = require("../components/StyledLabelInput");
var OpCodeString_1 = require("../components/OpCodeString");
var ResultAndExecute_1 = require("../components/ResultAndExecute");
var IndexStyledComponents_1 = require("../components/styledcomponents/IndexStyledComponents");
var BeatLoader_1 = require("react-spinners/BeatLoader");
var Index = function () {
    var _a = react_1.useState(), result = _a[0], setResult = _a[1];
    var _b = react_1.useState(false), loader = _b[0], setLoader = _b[1];
    var _c = react_1.useState(""), error = _c[0], setError = _c[1];
    var stackRef = react_1.useRef(null);
    var opCodeRef = react_1.useRef(null);
    var router = router_1.useRouter();
    react_1.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var lastResult, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, SimpleVM_1["default"].getLastResult()];
                    case 1:
                        lastResult = _a.sent();
                        console.log(lastResult);
                        setResult(lastResult);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    var validateValues = function (stackValue, opCodeValue) {
        if (stackValue.length === 0 || opCodeValue.length === 0) {
            setError("Both Stack and OpCode values must be provided");
            return false;
        }
        setError("");
        return true;
    };
    var handleExecuteButton = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var stackValue, opCodeValue, tx, response, error_2;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    event.preventDefault();
                    if (!stackRef.current || !opCodeRef.current) {
                        return [2 /*return*/];
                    }
                    stackValue = (_a = stackRef.current) === null || _a === void 0 ? void 0 : _a.value.split("").map(Number);
                    opCodeValue = (_b = opCodeRef.current) === null || _b === void 0 ? void 0 : _b.value.split("").map(Number);
                    if (!validateValues(stackValue, opCodeValue)) {
                        return [2 /*return*/];
                    }
                    console.log("Stack Value:", stackValue);
                    console.log("OpCode Value:", opCodeValue);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 5, 6, 7]);
                    return [4 /*yield*/, getSimpleVMWithSigner_1["default"]()];
                case 2: return [4 /*yield*/, (_c.sent()).execute(stackValue, opCodeValue)];
                case 3:
                    tx = _c.sent();
                    setLoader(true);
                    return [4 /*yield*/, tx.wait()];
                case 4:
                    response = _c.sent();
                    setLoader(false);
                    console.log(response);
                    router.reload();
                    return [3 /*break*/, 7];
                case 5:
                    error_2 = _c.sent();
                    console.error(error_2);
                    return [3 /*break*/, 7];
                case 6:
                    setLoader(false);
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(React.Fragment, null,
        React.createElement(Layout_1["default"], null,
            React.createElement(IndexStyledComponents_1.StyledFormContainer, { onSubmit: handleExecuteButton },
                React.createElement(IndexStyledComponents_1.Title, null, "SimpleVM"),
                React.createElement(StyledLabelInput_1["default"], { label: "Stack", name: "stack", id: "stack", type: "text", placeholder: "add new stack, e.g. 3456", tooltipText: "stack", inputRef: stackRef }),
                React.createElement(StyledLabelInput_1["default"], { label: "OpCode", name: "opcode", id: "opcode", type: "text", placeholder: "add new opcode, e.g 022", tooltipText: "opcode", inputRef: opCodeRef }),
                error && (React.createElement("div", { style: { color: "red", fontSize: "12px" } }, error)),
                React.createElement(OpCodeString_1["default"], null),
                React.createElement(ResultAndExecute_1["default"], { spinner: BeatLoader_1["default"], loader: loader, result: result ? result : "" })))));
};
exports["default"] = Index;
