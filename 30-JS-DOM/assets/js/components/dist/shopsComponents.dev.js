"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShopsComponents = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ShopsComponents =
/*#__PURE__*/
function () {
  function ShopsComponents() {
    _classCallCheck(this, ShopsComponents);
  }

  _createClass(ShopsComponents, [{
    key: "render",
    value: function render() {
      var shops = ["Frankfurt", "Zurich"];
      var div = document.createElement("div");

      for (var _i = 0, _shops = shops; _i < _shops.length; _i++) {
        var shop = _shops[_i];
        var p = document.createElement("p");
        p.textContent = shop;
        div.append(p);
      }

      return div;
    }
  }]);

  return ShopsComponents;
}();

exports.ShopsComponents = ShopsComponents;