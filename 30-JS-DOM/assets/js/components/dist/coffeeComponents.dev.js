"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CoffeComponents = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CoffeComponents =
/*#__PURE__*/
function () {
  function CoffeComponents() {
    _classCallCheck(this, CoffeComponents);
  }

  _createClass(CoffeComponents, [{
    key: "render",
    value: function render() {
      var coffes = ["Coffe", "Cappuchino", "Mocha"];
      var div = document.querySelector("div");
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = coffees[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var coffee = _step.value;
          var p = document.createElement("p");
          p.textContent = coffee;
          div.append(p);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return div;
    }
  }]);

  return CoffeComponents;
}();

exports.CoffeComponents = CoffeComponents;