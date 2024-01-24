"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setIsloading = exports.fetchMissionData = exports.fetchMenuData = exports.setTabKey = exports.setRegCertData = exports.setUserUploadStatus = exports.setRegStatus = exports.setMissionData = exports.setMenuData = void 0;

var _menuActionTypes = require("./menuActionTypes");

var _axios = _interopRequireDefault(require("axios"));

var _Global = require("../../Global");

var _api = require("../../lib/api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setMenuData = function setMenuData(data) {
  return {
    type: _menuActionTypes.menuActionTypes.SET_MENU_DATA,
    payload: data
  };
};

exports.setMenuData = setMenuData;

var setMissionData = function setMissionData(data) {
  return {
    type: _menuActionTypes.menuActionTypes.SET_MISSION_DATA,
    payload: data
  };
};

exports.setMissionData = setMissionData;

var setRegStatus = function setRegStatus(data) {
  return {
    type: _menuActionTypes.menuActionTypes.SET_REG_STATUS,
    payload: data
  };
};

exports.setRegStatus = setRegStatus;

var setUserUploadStatus = function setUserUploadStatus(data) {
  return {
    type: _menuActionTypes.menuActionTypes.SET_USER_UPLOAD_STATUS,
    payload: data
  };
};

exports.setUserUploadStatus = setUserUploadStatus;

var setRegCertData = function setRegCertData(data) {
  return {
    type: _menuActionTypes.menuActionTypes.SET_REG_CERT_DATA,
    payload: data
  };
};

exports.setRegCertData = setRegCertData;

var setTabKey = function setTabKey(data) {
  return {
    type: _menuActionTypes.menuActionTypes.SET_TAB_KEY,
    payload: data
  };
};

exports.setTabKey = setTabKey;

var fetchMenuData = function fetchMenuData() {
  return function _callee(dispatch) {
    var menuItems;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap((0, _api.getMenuItems)());

          case 2:
            menuItems = _context.sent;
            //applo client 
            dispatch(setMenuData(menuItems));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.fetchMenuData = fetchMenuData;

var fetchMissionData = function fetchMissionData() {
  return function (dispatch) {
    _axios["default"].get(_Global.API_PATH + 'fetch-mission-data.php').then(function (_ref) {
      var data = _ref.data;
      dispatch(setMissionData(data));
    });
  };
};

exports.fetchMissionData = fetchMissionData;

var setIsloading = function setIsloading(data) {
  return {
    type: _menuActionTypes.menuActionTypes.SET_IS_LOADING,
    payload: data
  };
};

exports.setIsloading = setIsloading;
//# sourceMappingURL=menuAction.dev.js.map
