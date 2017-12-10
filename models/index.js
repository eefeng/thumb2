'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IndexModel = function () {
    function IndexModel(ctx) {
        _classCallCheck(this, IndexModel);

        this.ctx = ctx;
    }

    _createClass(IndexModel, [{
        key: 'updateNum',
        value: function updateNum() {
            var opts = {
                uri: 'http://localhost/GFE/praise.php',
                method: 'get'
            };
            return new Promise(function (resolve, reject) {
                (0, _requestPromise2.default)(opts).then(function (res) {
                    var info = JSON.parse(res);
                    if (info) {
                        resolve({ data: info.res });
                    } else {
                        reject({});
                    }
                });
            });
        }
    }]);

    return IndexModel;
}();

exports.default = IndexModel;
