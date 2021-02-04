module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/users/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/api/users/index.ts":
/*!**************************************!*\
  !*** ./src/pages/api/users/index.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_sample_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/sample-data */ \"./src/utils/sample-data.ts\");\n\n\nconst handler = (_req, res) => {\n  try {\n    if (!Array.isArray(_utils_sample_data__WEBPACK_IMPORTED_MODULE_0__[\"sampleUserData\"])) {\n      throw new Error('Cannot find user data');\n    }\n\n    res.status(200).json(_utils_sample_data__WEBPACK_IMPORTED_MODULE_0__[\"sampleUserData\"]);\n  } catch (err) {\n    res.status(500).json({\n      statusCode: 500,\n      message: err.message\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL3VzZXJzL2luZGV4LnRzPzMyMDgiXSwibmFtZXMiOlsiaGFuZGxlciIsIl9yZXEiLCJyZXMiLCJBcnJheSIsImlzQXJyYXkiLCJzYW1wbGVVc2VyRGF0YSIsIkVycm9yIiwic3RhdHVzIiwianNvbiIsImVyciIsInN0YXR1c0NvZGUiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLENBQUNDLElBQUQsRUFBdUJDLEdBQXZCLEtBQWdEO0FBQzlELE1BQUk7QUFDRixRQUFJLENBQUNDLEtBQUssQ0FBQ0MsT0FBTixDQUFjQyxpRUFBZCxDQUFMLEVBQW9DO0FBQ2xDLFlBQU0sSUFBSUMsS0FBSixDQUFVLHVCQUFWLENBQU47QUFDRDs7QUFFREosT0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJILGlFQUFyQjtBQUNELEdBTkQsQ0FNRSxPQUFPSSxHQUFQLEVBQVk7QUFDWlAsT0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUUsZ0JBQVUsRUFBRSxHQUFkO0FBQW1CQyxhQUFPLEVBQUVGLEdBQUcsQ0FBQ0U7QUFBaEMsS0FBckI7QUFDRDtBQUNGLENBVkQ7O0FBWWVYLHNFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2FwaS91c2Vycy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgc2FtcGxlVXNlckRhdGEgfSBmcm9tICcuLi8uLi8uLi91dGlscy9zYW1wbGUtZGF0YSdcblxuY29uc3QgaGFuZGxlciA9IChfcmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgdHJ5IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2FtcGxlVXNlckRhdGEpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIHVzZXIgZGF0YScpXG4gICAgfVxuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oc2FtcGxlVXNlckRhdGEpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgc3RhdHVzQ29kZTogNTAwLCBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/api/users/index.ts\n");

/***/ }),

/***/ "./src/utils/sample-data.ts":
/*!**********************************!*\
  !*** ./src/utils/sample-data.ts ***!
  \**********************************/
/*! exports provided: sampleUserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sampleUserData\", function() { return sampleUserData; });\n/** Dummy user data. */\nconst sampleUserData = [{\n  id: 101,\n  name: 'Alice'\n}, {\n  id: 102,\n  name: 'Bob'\n}, {\n  id: 103,\n  name: 'Caroline'\n}, {\n  id: 104,\n  name: 'Dave'\n}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9zYW1wbGUtZGF0YS50cz81YWU4Il0sIm5hbWVzIjpbInNhbXBsZVVzZXJEYXRhIiwiaWQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFDTyxNQUFNQSxjQUFzQixHQUFHLENBQ3BDO0FBQUVDLElBQUUsRUFBRSxHQUFOO0FBQVdDLE1BQUksRUFBRTtBQUFqQixDQURvQyxFQUVwQztBQUFFRCxJQUFFLEVBQUUsR0FBTjtBQUFXQyxNQUFJLEVBQUU7QUFBakIsQ0FGb0MsRUFHcEM7QUFBRUQsSUFBRSxFQUFFLEdBQU47QUFBV0MsTUFBSSxFQUFFO0FBQWpCLENBSG9DLEVBSXBDO0FBQUVELElBQUUsRUFBRSxHQUFOO0FBQVdDLE1BQUksRUFBRTtBQUFqQixDQUpvQyxDQUEvQiIsImZpbGUiOiIuL3NyYy91dGlscy9zYW1wbGUtZGF0YS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzJ1xuXG4vKiogRHVtbXkgdXNlciBkYXRhLiAqL1xuZXhwb3J0IGNvbnN0IHNhbXBsZVVzZXJEYXRhOiBVc2VyW10gPSBbXG4gIHsgaWQ6IDEwMSwgbmFtZTogJ0FsaWNlJyB9LFxuICB7IGlkOiAxMDIsIG5hbWU6ICdCb2InIH0sXG4gIHsgaWQ6IDEwMywgbmFtZTogJ0Nhcm9saW5lJyB9LFxuICB7IGlkOiAxMDQsIG5hbWU6ICdEYXZlJyB9LFxuXVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/sample-data.ts\n");

/***/ })

/******/ });