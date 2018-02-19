/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

function createNews(article) {
  function createElements() {
    var entry = document.createElement("figure");
    entry.className = "news";
    var header = document.createElement("h2");
    var link = document.createElement("a");
    link.href = article.url;
    link.textContent = article.title;
    var image = document.createElement("img");
    image.src = article.urlToImage;
    image.alt = article.title;
    var description = document.createElement("figcaption");
    description.className = "caption";
    description.textContent = article.description;
    return {
      header: header,
      link: link,
      entry: entry,
      image: image,
      description: description
    };
  }

  function addChildren() {
    header.appendChild(link);
    entry.appendChild(header);
    entry.appendChild(image);
    entry.appendChild(description);
    document.body.appendChild(entry);
  }

  var _createElements = createElements(),
      header = _createElements.header,
      link = _createElements.link,
      entry = _createElements.entry,
      image = _createElements.image,
      description = _createElements.description;

  addChildren();
}

var url = 'https://newsapi.org/v2/top-headlines?' + 'country=ru&' + 'category=technology&' + 'apiKey=94d80f877d70435eafbc7f57e02da2a5';
var request = new Request(url);
fetch(request).then(function (response) {
  return response.json();
}).then(function (feed) {
  feed.articles.filter(function (article) {
    return article.description != null;
  }).map(createNews);
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);