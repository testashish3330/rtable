"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function RTable(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("table", {
    className: props.className
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, props.TableHeadings.map((item, i) => /*#__PURE__*/React.createElement("th", {
    key: i
  }, item.name)))), /*#__PURE__*/React.createElement("tbody", null, props.TableData.map((data, i) => /*#__PURE__*/React.createElement("tr", null, Object.keys(data).map((keyname, i) => /*#__PURE__*/React.createElement("th", null, data[keyname])))))));
}

var _default = RTable;
exports.default = _default;