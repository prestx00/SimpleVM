"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _walletProvider = _interopRequireDefault(require("./walletProvider"));

var _SimpleVM = _interopRequireDefault(require("./SimpleVM"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getSimpleVMWithSigner = function getSimpleVMWithSigner() {
  var signer;
  return regeneratorRuntime.async(function getSimpleVMWithSigner$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_walletProvider["default"].getSigner());

        case 2:
          signer = _context.sent;
          return _context.abrupt("return", _SimpleVM["default"].connect(signer));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = getSimpleVMWithSigner;
exports["default"] = _default;