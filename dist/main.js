/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_getGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getGoods */ \"./src/modules/getGoods.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./src/modules/smoothScroll.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_getGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__.smoothScroll)()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUM7QUFDUTtBQUNKO0FBQ2dCO0FBQ2hCO0FBQ3JDO0FBQ0E7QUFDQSx5REFBSTtBQUNKLDhEQUFRO0FBQ1IsNERBQU07QUFDTixvRUFBWTtBQUNaLDREQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2lsZGJlcnJpZXMvLi9zcmMvbWFpbi5qcz81NmQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjYXJ0IGZyb20gJy4vbW9kdWxlcy9jYXJ0J1xyXG5pbXBvcnQgZ2V0R29vZHMgZnJvbSAnLi9tb2R1bGVzL2dldEdvb2RzJ1xyXG5pbXBvcnQgc2VhcmNoIGZyb20gJy4vbW9kdWxlcy9zZWFyY2gnXHJcbmltcG9ydCB7IHNtb290aFNjcm9sbCB9IGZyb20gJy4vbW9kdWxlcy9zbW9vdGhTY3JvbGwnXHJcbmltcG9ydCBzbGlkZXIgZnJvbSAnLi9tb2R1bGVzL3NsaWRlcidcclxuXHJcblxyXG5jYXJ0KClcclxuZ2V0R29vZHMoKVxyXG5zZWFyY2goKVxyXG5zbW9vdGhTY3JvbGwoKVxyXG5zbGlkZXIoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction cart() {\r\n  const cartBtn = document.querySelector(\".button-cart\")\r\n  const cart = document.getElementById(\"modal-cart\")\r\n  const closeBtn = cart.querySelector(\".modal-close\")\r\n  const goodsContainer = document.querySelector('.long-goods-list')\r\n  const cartTable = document.querySelector('.cart-table__goods')\r\n  const modalForm = document.querySelector('.modal-form')\r\n  const totalSum = document.querySelector('.card-table__total')\r\n  \r\n\r\n  const deleteCartItem = (id) => {\r\n    const cart = JSON.parse(localStorage.getItem(\"cart\"))\r\n    \r\n    const newCart = cart.filter(good => {\r\n      return good.id !== id\r\n    })\r\n\r\n    localStorage.setItem('cart', JSON.stringify(newCart))\r\n    renderCartGoods(JSON.parse(localStorage.getItem(\"cart\")))\r\n  }\r\n\r\n  const plusCartItem = (id) => {\r\n    const cart = JSON.parse(localStorage.getItem(\"cart\"))\r\n\r\n    const newCart = cart.map((good) => {\r\n      if (good.id === id) {\r\n        good.count++\r\n      }\r\n      return good\r\n    })\r\n\r\n    localStorage.setItem('cart', JSON.stringify(newCart))\r\n    renderCartGoods(JSON.parse(localStorage.getItem(\"cart\")))\r\n  }\r\n\r\n  const minusCartItem = (id) => {\r\n    const cart = JSON.parse(localStorage.getItem(\"cart\"))\r\n\r\n    const newCart = cart.map((good) => {\r\n      if (good.id === id) {\r\n        if (good.count > 0) {\r\n              good.count--\r\n        }\r\n      }\r\n      return good\r\n    })\r\n\r\n    localStorage.setItem('cart', JSON.stringify(newCart))\r\n    renderCartGoods(JSON.parse(localStorage.getItem(\"cart\")))\r\n  }\r\n\r\n  const addToCart = (id) => {\r\n    const goods = JSON.parse(localStorage.getItem(\"goods\"))\r\n    const clickedGood = goods.find((good) => good.id === id)\r\n    const cart = localStorage.getItem(\"cart\") ?\r\n      JSON.parse(localStorage.getItem(\"cart\")) : []\r\n    \r\n    if (cart.some(good => good.id === clickedGood.id)) {\r\n  \r\n      cart.map((good) => {\r\n        if (good.id === clickedGood.id) {\r\n          good.count++\r\n        }\r\n        return good\r\n      })\r\n    } else {\r\n      clickedGood.count = 1\r\n      cart.push(clickedGood)\r\n    }\r\n\r\n    localStorage.setItem(\"cart\", JSON.stringify(cart)) \r\n  }\r\n\r\n  const renderCartGoods = (goods) => {\r\n    cartTable.innerHTML = ''\r\n    goods.forEach(good => {\r\n      const tr = document.createElement('tr')\r\n      tr.innerHTML = `\r\n          <td>${good.name}</td>\r\n\t\t\t\t\t<td>${good.price}$</td>\r\n\t\t\t\t\t<td><button class=\"cart-btn-minus\"\">-</button></td>\r\n\t\t\t\t\t<td>${good.count}</td>\r\n\t\t\t\t\t<td><button class=\" cart-btn-plus\"\">+</button></td>\r\n\t\t\t\t\t<td>${good.price * good.count}$</td>\r\n\t\t\t\t\t<td><button class=\"cart-btn-delete\"\">x</button></td>\r\n      `\r\n\r\n      cartTable.append(tr)\r\n\r\n      tr.addEventListener('click', (e) => {\r\n        if (e.target.classList.contains('cart-btn-minus')) {\r\n          minusCartItem(good.id)\r\n        } else if (e.target.classList.contains('cart-btn-plus')) {\r\n          plusCartItem(good.id)\r\n        } else if (e.target.classList.contains('cart-btn-delete')) {\r\n          deleteCartItem(good.id)\r\n        }\r\n      })\r\n    })\r\n  }\r\n\r\n  const sendForm = () => {\r\n    const cartArray = localStorage.getItem(\"cart\") ?\r\n      JSON.parse(localStorage.getItem(\"cart\")) : []\r\n    \r\n    fetch('https://jsonplaceholder.typicode.com/posts', {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        cart: cartArray,\r\n        name: '',\r\n        phone: ''\r\n      })\r\n    }).then(() => {\r\n      cart.style.display = \"\"\r\n    })\r\n  }\r\n\r\n  modalForm.addEventListener('submit', (e) => {\r\n    e.preventDefault()\r\n    sendForm()\r\n    localStorage.removeItem(\"cart\")\r\n  })\r\n\r\n\r\n  cart.addEventListener(\"click\", (event) => {\r\n    if (!event.target.closest('.modal') && event.target.classList.contains('overlay')) {\r\n      cart.style.display = ''\r\n    }\r\n  })\r\n\r\n  window.addEventListener('keydown', (event) => {\r\n    if (event.key === 'Escape') {\r\n      cart.style.display = ''\r\n    }\r\n  })\r\n\r\n  cartBtn.addEventListener(\"click\", () => {\r\n    const cartArray = localStorage.getItem('cart') ?\r\n      JSON.parse(localStorage.getItem('cart')) : []\r\n    \r\n    renderCartGoods(cartArray)\r\n\r\n    cart.style.display = \"flex\"\r\n  })\r\n\r\n  closeBtn.addEventListener(\"click\", () => {\r\n    cart.style.display = \"\";\r\n  })\r\n\r\n  if (goodsContainer) {\r\n    goodsContainer.addEventListener(\"click\", (event) => {\r\n      if (event.target.closest('.add-to-cart')) {\r\n        const buttonToCart = event.target.closest('.add-to-cart')\r\n        const goodId = buttonToCart.dataset.id\r\n\r\n        addToCart(goodId)\r\n      }\r\n    }) \r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9jYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFVBQVU7QUFDMUIsV0FBVyxXQUFXO0FBQ3RCO0FBQ0EsV0FBVyxXQUFXO0FBQ3RCO0FBQ0EsV0FBVyx3QkFBd0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3dpbGRiZXJyaWVzLy4vc3JjL21vZHVsZXMvY2FydC5qcz9hYzBlIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNhcnQoKSB7XHJcbiAgY29uc3QgY2FydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLWNhcnRcIilcclxuICBjb25zdCBjYXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jYXJ0XCIpXHJcbiAgY29uc3QgY2xvc2VCdG4gPSBjYXJ0LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY2xvc2VcIilcclxuICBjb25zdCBnb29kc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb25nLWdvb2RzLWxpc3QnKVxyXG4gIGNvbnN0IGNhcnRUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LXRhYmxlX19nb29kcycpXHJcbiAgY29uc3QgbW9kYWxGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWZvcm0nKVxyXG4gIGNvbnN0IHRvdGFsU3VtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtdGFibGVfX3RvdGFsJylcclxuICBcclxuXHJcbiAgY29uc3QgZGVsZXRlQ2FydEl0ZW0gPSAoaWQpID0+IHtcclxuICAgIGNvbnN0IGNhcnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydFwiKSlcclxuICAgIFxyXG4gICAgY29uc3QgbmV3Q2FydCA9IGNhcnQuZmlsdGVyKGdvb2QgPT4ge1xyXG4gICAgICByZXR1cm4gZ29vZC5pZCAhPT0gaWRcclxuICAgIH0pXHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShuZXdDYXJ0KSlcclxuICAgIHJlbmRlckNhcnRHb29kcyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydFwiKSkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBwbHVzQ2FydEl0ZW0gPSAoaWQpID0+IHtcclxuICAgIGNvbnN0IGNhcnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydFwiKSlcclxuXHJcbiAgICBjb25zdCBuZXdDYXJ0ID0gY2FydC5tYXAoKGdvb2QpID0+IHtcclxuICAgICAgaWYgKGdvb2QuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgZ29vZC5jb3VudCsrXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGdvb2RcclxuICAgIH0pXHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShuZXdDYXJ0KSlcclxuICAgIHJlbmRlckNhcnRHb29kcyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydFwiKSkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBtaW51c0NhcnRJdGVtID0gKGlkKSA9PiB7XHJcbiAgICBjb25zdCBjYXJ0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRcIikpXHJcblxyXG4gICAgY29uc3QgbmV3Q2FydCA9IGNhcnQubWFwKChnb29kKSA9PiB7XHJcbiAgICAgIGlmIChnb29kLmlkID09PSBpZCkge1xyXG4gICAgICAgIGlmIChnb29kLmNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgIGdvb2QuY291bnQtLVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZ29vZFxyXG4gICAgfSlcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KG5ld0NhcnQpKVxyXG4gICAgcmVuZGVyQ2FydEdvb2RzKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0XCIpKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZFRvQ2FydCA9IChpZCkgPT4ge1xyXG4gICAgY29uc3QgZ29vZHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ29vZHNcIikpXHJcbiAgICBjb25zdCBjbGlja2VkR29vZCA9IGdvb2RzLmZpbmQoKGdvb2QpID0+IGdvb2QuaWQgPT09IGlkKVxyXG4gICAgY29uc3QgY2FydCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydFwiKSA/XHJcbiAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0XCIpKSA6IFtdXHJcbiAgICBcclxuICAgIGlmIChjYXJ0LnNvbWUoZ29vZCA9PiBnb29kLmlkID09PSBjbGlja2VkR29vZC5pZCkpIHtcclxuICBcclxuICAgICAgY2FydC5tYXAoKGdvb2QpID0+IHtcclxuICAgICAgICBpZiAoZ29vZC5pZCA9PT0gY2xpY2tlZEdvb2QuaWQpIHtcclxuICAgICAgICAgIGdvb2QuY291bnQrK1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZ29vZFxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2xpY2tlZEdvb2QuY291bnQgPSAxXHJcbiAgICAgIGNhcnQucHVzaChjbGlja2VkR29vZClcclxuICAgIH1cclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkoY2FydCkpIFxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVuZGVyQ2FydEdvb2RzID0gKGdvb2RzKSA9PiB7XHJcbiAgICBjYXJ0VGFibGUuaW5uZXJIVE1MID0gJydcclxuICAgIGdvb2RzLmZvckVhY2goZ29vZCA9PiB7XHJcbiAgICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKVxyXG4gICAgICB0ci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICA8dGQ+JHtnb29kLm5hbWV9PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD4ke2dvb2QucHJpY2V9JDwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PGJ1dHRvbiBjbGFzcz1cImNhcnQtYnRuLW1pbnVzXCJcIj4tPC9idXR0b24+PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD4ke2dvb2QuY291bnR9PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD48YnV0dG9uIGNsYXNzPVwiIGNhcnQtYnRuLXBsdXNcIlwiPis8L2J1dHRvbj48L3RkPlxyXG5cdFx0XHRcdFx0PHRkPiR7Z29vZC5wcmljZSAqIGdvb2QuY291bnR9JDwvdGQ+XHJcblx0XHRcdFx0XHQ8dGQ+PGJ1dHRvbiBjbGFzcz1cImNhcnQtYnRuLWRlbGV0ZVwiXCI+eDwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgIGBcclxuXHJcbiAgICAgIGNhcnRUYWJsZS5hcHBlbmQodHIpXHJcblxyXG4gICAgICB0ci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FydC1idG4tbWludXMnKSkge1xyXG4gICAgICAgICAgbWludXNDYXJ0SXRlbShnb29kLmlkKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJ0LWJ0bi1wbHVzJykpIHtcclxuICAgICAgICAgIHBsdXNDYXJ0SXRlbShnb29kLmlkKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJ0LWJ0bi1kZWxldGUnKSkge1xyXG4gICAgICAgICAgZGVsZXRlQ2FydEl0ZW0oZ29vZC5pZClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2VuZEZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjYXJ0QXJyYXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRcIikgP1xyXG4gICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydFwiKSkgOiBbXVxyXG4gICAgXHJcbiAgICBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJywge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGNhcnQ6IGNhcnRBcnJheSxcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBwaG9uZTogJydcclxuICAgICAgfSlcclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjYXJ0LnN0eWxlLmRpc3BsYXkgPSBcIlwiXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbW9kYWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNlbmRGb3JtKClcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2FydFwiKVxyXG4gIH0pXHJcblxyXG5cclxuICBjYXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbCcpICYmIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ292ZXJsYXknKSkge1xyXG4gICAgICBjYXJ0LnN0eWxlLmRpc3BsYXkgPSAnJ1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICBjYXJ0LnN0eWxlLmRpc3BsYXkgPSAnJ1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNvbnN0IGNhcnRBcnJheSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykgP1xyXG4gICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykpIDogW11cclxuICAgIFxyXG4gICAgcmVuZGVyQ2FydEdvb2RzKGNhcnRBcnJheSlcclxuXHJcbiAgICBjYXJ0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxyXG4gIH0pXHJcblxyXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjYXJ0LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xyXG4gIH0pXHJcblxyXG4gIGlmIChnb29kc0NvbnRhaW5lcikge1xyXG4gICAgZ29vZHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5hZGQtdG8tY2FydCcpKSB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uVG9DYXJ0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5hZGQtdG8tY2FydCcpXHJcbiAgICAgICAgY29uc3QgZ29vZElkID0gYnV0dG9uVG9DYXJ0LmRhdGFzZXQuaWRcclxuXHJcbiAgICAgICAgYWRkVG9DYXJ0KGdvb2RJZClcclxuICAgICAgfVxyXG4gICAgfSkgXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXJ0XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/cart.js\n");

/***/ }),

/***/ "./src/modules/getGoods.js":
/*!*********************************!*\
  !*** ./src/modules/getGoods.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getGoods = () => {\r\n    const links = document.querySelectorAll('.navigation-link')\r\n    const more = document.querySelector('.more')\r\n\r\n    const renderGoods = (goods) => {\r\n        const goodsContainer = document.querySelector('.long-goods-list')\r\n\r\n        goodsContainer.innerHTML = ''\r\n\r\n        goods.forEach(good => {\r\n            const goodBlock = document.createElement('div')\r\n\r\n            goodBlock.classList.add('col-lg-3')\r\n            goodBlock.classList.add('col-sm-6')\r\n\r\n            goodBlock.innerHTML = `\r\n                 <div class=\"goods-card\">\r\n\t\t\t\t\t\t<span class=\"label ${good.label ? null : 'd-none'}\">${good.label}</span>\r\n\t\t\t\t\t\t<img src=\"db/${good.img}\" alt=\"${good.name}\" class=\"goods-image\">\r\n\t\t\t\t\t\t<h3 class=\"goods-title\">${good.name}</h3>\r\n\t\t\t\t\t\t<p class=\"goods-description\">${good.description}</p>\r\n\t\t\t\t\t\t<button class=\"button goods-card-btn add-to-cart\" data-id=\"${good.id}\">\r\n\t\t\t\t\t\t\t<span class=\"button-price\">$ ${good.price}</span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n            `\r\n\r\n            goodsContainer.append(goodBlock)\r\n        })\r\n        \r\n    }\r\n\r\n    const getData = (value, category) => {\r\n        fetch('https://wildberries-e9de3-default-rtdb.firebaseio.com/db.json')\r\n            .then((response) => response.json())\r\n            .then((data) => {\r\n                const array = category ? data.filter((item) => item[category] === value) : data\r\n            \r\n                localStorage.setItem('goods', JSON.stringify(array))\r\n\r\n                if (window.location.pathname !== \"/goods.html\") {\r\n                    window.location.href = '/goods.html'\r\n                } else {\r\n                    renderGoods(array)\r\n                }\r\n                \r\n            })\r\n    }\r\n\r\n    links.forEach((link) => {\r\n        link.addEventListener('click', (event) => {\r\n            event.preventDefault()\r\n            const linkValue = link.textContent\r\n            const category = link.dataset.field\r\n           \r\n            getData(linkValue, category);\r\n        })\r\n    })\r\n\r\n    if (localStorage.getItem('goods') && window.location.pathname === \"/goods.html\") {\r\n        renderGoods(JSON.parse(localStorage.getItem('goods')))\r\n    }\r\n\r\n    if (more) {\r\n        more.addEventListener('click', (e) => {\r\n            e.preventDefault()\r\n            getData()\r\n        })\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getGoods);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9nZXRHb29kcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw2QkFBNkIsSUFBSSxXQUFXO0FBQ3ZFLHFCQUFxQixTQUFTLFNBQVMsVUFBVTtBQUNqRCxnQ0FBZ0MsVUFBVTtBQUMxQyxxQ0FBcUMsaUJBQWlCO0FBQ3RELG1FQUFtRSxRQUFRO0FBQzNFLHNDQUFzQyxXQUFXO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2lsZGJlcnJpZXMvLi9zcmMvbW9kdWxlcy9nZXRHb29kcy5qcz9kNTlhIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldEdvb2RzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2aWdhdGlvbi1saW5rJylcclxuICAgIGNvbnN0IG1vcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9yZScpXHJcblxyXG4gICAgY29uc3QgcmVuZGVyR29vZHMgPSAoZ29vZHMpID0+IHtcclxuICAgICAgICBjb25zdCBnb29kc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb25nLWdvb2RzLWxpc3QnKVxyXG5cclxuICAgICAgICBnb29kc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xyXG5cclxuICAgICAgICBnb29kcy5mb3JFYWNoKGdvb2QgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBnb29kQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuICAgICAgICAgICAgZ29vZEJsb2NrLmNsYXNzTGlzdC5hZGQoJ2NvbC1sZy0zJylcclxuICAgICAgICAgICAgZ29vZEJsb2NrLmNsYXNzTGlzdC5hZGQoJ2NvbC1zbS02JylcclxuXHJcbiAgICAgICAgICAgIGdvb2RCbG9jay5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdvb2RzLWNhcmRcIj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJsYWJlbCAke2dvb2QubGFiZWwgPyBudWxsIDogJ2Qtbm9uZSd9XCI+JHtnb29kLmxhYmVsfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9XCJkYi8ke2dvb2QuaW1nfVwiIGFsdD1cIiR7Z29vZC5uYW1lfVwiIGNsYXNzPVwiZ29vZHMtaW1hZ2VcIj5cclxuXHRcdFx0XHRcdFx0PGgzIGNsYXNzPVwiZ29vZHMtdGl0bGVcIj4ke2dvb2QubmFtZX08L2gzPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzcz1cImdvb2RzLWRlc2NyaXB0aW9uXCI+JHtnb29kLmRlc2NyaXB0aW9ufTwvcD5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBnb29kcy1jYXJkLWJ0biBhZGQtdG8tY2FydFwiIGRhdGEtaWQ9XCIke2dvb2QuaWR9XCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJidXR0b24tcHJpY2VcIj4kICR7Z29vZC5wcmljZX08L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgICAgYFxyXG5cclxuICAgICAgICAgICAgZ29vZHNDb250YWluZXIuYXBwZW5kKGdvb2RCbG9jaylcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldERhdGEgPSAodmFsdWUsIGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vd2lsZGJlcnJpZXMtZTlkZTMtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL2RiLmpzb24nKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5ID0gY2F0ZWdvcnkgPyBkYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbVtjYXRlZ29yeV0gPT09IHZhbHVlKSA6IGRhdGFcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ29vZHMnLCBKU09OLnN0cmluZ2lmeShhcnJheSkpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSAhPT0gXCIvZ29vZHMuaHRtbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2dvb2RzLmh0bWwnXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckdvb2RzKGFycmF5KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBjb25zdCBsaW5rVmFsdWUgPSBsaW5rLnRleHRDb250ZW50XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gbGluay5kYXRhc2V0LmZpZWxkXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGdldERhdGEobGlua1ZhbHVlLCBjYXRlZ29yeSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnb29kcycpICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvZ29vZHMuaHRtbFwiKSB7XHJcbiAgICAgICAgcmVuZGVyR29vZHMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ29vZHMnKSkpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1vcmUpIHtcclxuICAgICAgICBtb3JlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIGdldERhdGEoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldEdvb2RzIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/getGoods.js\n");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction search() {\r\n    const input = document.querySelector('.search-block > input')\r\n    const searchBtn = document.querySelector('.search-block > button')\r\n\r\n    const renderGoods = (goods) => {\r\n        const goodsContainer = document.querySelector('.long-goods-list')\r\n\r\n        goodsContainer.innerHTML = ''\r\n\r\n        goods.forEach(good => {\r\n            const goodBlock = document.createElement('div')\r\n\r\n            goodBlock.classList.add('col-lg-3')\r\n            goodBlock.classList.add('col-sm-6')\r\n\r\n            goodBlock.innerHTML = `\r\n                 <div class=\"goods-card\">\r\n\t\t\t\t\t\t<span class=\"label ${good.label ? null : 'd-none'}\">${good.label}</span>\r\n\t\t\t\t\t\t<img src=\"db/${good.img}\" alt=\"${good.name}\" class=\"goods-image\">\r\n\t\t\t\t\t\t<h3 class=\"goods-title\">${good.name}</h3>\r\n\t\t\t\t\t\t<p class=\"goods-description\">${good.description}</p>\r\n\t\t\t\t\t\t<button class=\"button goods-card-btn add-to-cart\" data-id=\"${good.id}\">\r\n\t\t\t\t\t\t\t<span class=\"button-price\">$ ${good.price}</span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n            `\r\n\r\n            goodsContainer.append(goodBlock)\r\n        })\r\n        \r\n    }\r\n\r\n    const getData = (value) => {\r\n        fetch('db/db.json')\r\n            .then((response) => response.json())\r\n            .then((data) => {\r\n                const array = data.filter(good => good.name.toLowerCase().includes(value.toLowerCase()))\r\n                     \r\n                localStorage.setItem('goods', JSON.stringify(array))\r\n\r\n                if (window.location.pathname !== \"/goods.html\") {\r\n                    window.location.href = '/goods.html'\r\n                } else {\r\n                    renderGoods(array)\r\n                }\r\n                \r\n            })\r\n    }\r\n\r\n\r\n    searchBtn.addEventListener('click', () => {\r\n\r\n        getData(input.value)\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\r\n\r\n\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9zZWFyY2guanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkJBQTZCLElBQUksV0FBVztBQUN2RSxxQkFBcUIsU0FBUyxTQUFTLFVBQVU7QUFDakQsZ0NBQWdDLFVBQVU7QUFDMUMscUNBQXFDLGlCQUFpQjtBQUN0RCxtRUFBbUUsUUFBUTtBQUMzRSxzQ0FBc0MsV0FBVztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlFQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dpbGRiZXJyaWVzLy4vc3JjL21vZHVsZXMvc2VhcmNoLmpzP2UwNzUiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2VhcmNoKCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJsb2NrID4gaW5wdXQnKVxyXG4gICAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1ibG9jayA+IGJ1dHRvbicpXHJcblxyXG4gICAgY29uc3QgcmVuZGVyR29vZHMgPSAoZ29vZHMpID0+IHtcclxuICAgICAgICBjb25zdCBnb29kc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb25nLWdvb2RzLWxpc3QnKVxyXG5cclxuICAgICAgICBnb29kc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xyXG5cclxuICAgICAgICBnb29kcy5mb3JFYWNoKGdvb2QgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBnb29kQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuICAgICAgICAgICAgZ29vZEJsb2NrLmNsYXNzTGlzdC5hZGQoJ2NvbC1sZy0zJylcclxuICAgICAgICAgICAgZ29vZEJsb2NrLmNsYXNzTGlzdC5hZGQoJ2NvbC1zbS02JylcclxuXHJcbiAgICAgICAgICAgIGdvb2RCbG9jay5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdvb2RzLWNhcmRcIj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJsYWJlbCAke2dvb2QubGFiZWwgPyBudWxsIDogJ2Qtbm9uZSd9XCI+JHtnb29kLmxhYmVsfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9XCJkYi8ke2dvb2QuaW1nfVwiIGFsdD1cIiR7Z29vZC5uYW1lfVwiIGNsYXNzPVwiZ29vZHMtaW1hZ2VcIj5cclxuXHRcdFx0XHRcdFx0PGgzIGNsYXNzPVwiZ29vZHMtdGl0bGVcIj4ke2dvb2QubmFtZX08L2gzPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzcz1cImdvb2RzLWRlc2NyaXB0aW9uXCI+JHtnb29kLmRlc2NyaXB0aW9ufTwvcD5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBnb29kcy1jYXJkLWJ0biBhZGQtdG8tY2FydFwiIGRhdGEtaWQ9XCIke2dvb2QuaWR9XCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJidXR0b24tcHJpY2VcIj4kICR7Z29vZC5wcmljZX08L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgICAgICAgYFxyXG5cclxuICAgICAgICAgICAgZ29vZHNDb250YWluZXIuYXBwZW5kKGdvb2RCbG9jaylcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldERhdGEgPSAodmFsdWUpID0+IHtcclxuICAgICAgICBmZXRjaCgnZGIvZGIuanNvbicpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBkYXRhLmZpbHRlcihnb29kID0+IGdvb2QubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlLnRvTG93ZXJDYXNlKCkpKVxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnb29kcycsIEpTT04uc3RyaW5naWZ5KGFycmF5KSlcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSBcIi9nb29kcy5odG1sXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvZ29vZHMuaHRtbCdcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyR29vZHMoYXJyYXkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBnZXREYXRhKGlucHV0LnZhbHVlKVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/search.js\n");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    console.log('opa');\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9zbGlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3dpbGRiZXJyaWVzLy4vc3JjL21vZHVsZXMvc2xpZGVyLmpzP2FhZWEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2xpZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ29wYScpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2xpZGVyIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/slider.js\n");

/***/ }),

/***/ "./src/modules/smoothScroll.js":
/*!*************************************!*\
  !*** ./src/modules/smoothScroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"smoothScroll\": () => (/* binding */ smoothScroll)\n/* harmony export */ });\nconst smoothScroll = () => {\r\n    const links = document.querySelectorAll('.scroll-link')\r\n\r\n    links.forEach((link) => {\r\n        link.addEventListener('click', (e) => {\r\n            e.preventDefault()\r\n\r\n            window.scrollTo({\r\n                top: 0,\r\n                behavior: 'smooth'\r\n            })\r\n        })\r\n    })\r\n}\r\n\r\nsmoothScroll()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9zbW9vdGhTY3JvbGwuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2lsZGJlcnJpZXMvLi9zcmMvbW9kdWxlcy9zbW9vdGhTY3JvbGwuanM/YzAxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc21vb3RoU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2Nyb2xsLWxpbmsnKVxyXG5cclxuICAgIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbnNtb290aFNjcm9sbCgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/smoothScroll.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;