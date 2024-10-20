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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/about */ \"./src/modules/about.js\");\n\n\n\n\n\nfunction switchTab(tabFunction) {\n    const contentDiv = document.getElementById('content')\n    contentDiv.innerHTML = '';\n\n    tabFunction();\n}\n\ndocument.getElementById('home-btn').addEventListener('click', () => {\n    switchTab(_modules_home__WEBPACK_IMPORTED_MODULE_2__.loadHome);\n});\n\ndocument.getElementById('menu-btn').addEventListener('click', () => {\n    switchTab(_modules_menu__WEBPACK_IMPORTED_MODULE_0__.loadMenu);\n});\n\ndocument.getElementById('about-btn').addEventListener('click', () => {\n    switchTab(_modules_about__WEBPACK_IMPORTED_MODULE_3__.loadAbout);\n});\n\ndocument.getElementById('contact-btn').addEventListener('click', () => {\n    switchTab(_modules_contact__WEBPACK_IMPORTED_MODULE_1__.loadContact);\n});\n\nswitchTab(_modules_home__WEBPACK_IMPORTED_MODULE_2__.loadHome);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEM7QUFDTTtBQUNOO0FBQ0U7O0FBRTVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxtREFBUTtBQUN0QixDQUFDOztBQUVEO0FBQ0EsY0FBYyxtREFBUTtBQUN0QixDQUFDOztBQUVEO0FBQ0EsY0FBYyxxREFBUztBQUN2QixDQUFDOztBQUVEO0FBQ0EsY0FBYyx5REFBVztBQUN6QixDQUFDOztBQUVELFVBQVUsbURBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkTWVudSB9IGZyb20gJy4vbW9kdWxlcy9tZW51JztcbmltcG9ydCB7IGxvYWRDb250YWN0IH0gZnJvbSAnLi9tb2R1bGVzL2NvbnRhY3QnO1xuaW1wb3J0IHsgbG9hZEhvbWUgfSBmcm9tICcuL21vZHVsZXMvaG9tZSc7XG5pbXBvcnQgeyBsb2FkQWJvdXQgfSBmcm9tICcuL21vZHVsZXMvYWJvdXQnO1xuXG5mdW5jdGlvbiBzd2l0Y2hUYWIodGFiRnVuY3Rpb24pIHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJyc7XG5cbiAgICB0YWJGdW5jdGlvbigpO1xufVxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzd2l0Y2hUYWIobG9hZEhvbWUpO1xufSk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHN3aXRjaFRhYihsb2FkTWVudSk7XG59KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0LWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHN3aXRjaFRhYihsb2FkQWJvdXQpO1xufSk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHN3aXRjaFRhYihsb2FkQ29udGFjdCk7XG59KTtcblxuc3dpdGNoVGFiKGxvYWRIb21lKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAbout: () => (/* binding */ loadAbout)\n/* harmony export */ });\nfunction loadAbout() {\n    const contentDiv = document.getElementById('content');\n\n    const heading = document.createElement('h1')\n    heading.textContent = 'About Us';\n\n    const image = document.createElement('img');\n    image.src = __webpack_require__(/*! ../assets/images/about.jpg */ \"./src/assets/images/about.jpg\");\n    image.alt = 'staff';\n    image.style.maxWidth = '600px';\n\n    const description = document.createElement('p');\n    description.textContent = 'Welcome to the best restaurant in town! Enjoy our delicious meals.';\n\n    // append elements to the div\n\n    contentDiv.appendChild(heading);\n    contentDiv.appendChild(image);\n    contentDiv.appendChild(description);\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hYm91dC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFPLENBQUMsaUVBQTRCO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9hYm91dC5qcz9hOGZhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBsb2FkQWJvdXQoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnQWJvdXQgVXMnO1xuXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5zcmMgPSByZXF1aXJlKCcuLi9hc3NldHMvaW1hZ2VzL2Fib3V0LmpwZycpO1xuICAgIGltYWdlLmFsdCA9ICdzdGFmZic7XG4gICAgaW1hZ2Uuc3R5bGUubWF4V2lkdGggPSAnNjAwcHgnO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byB0aGUgYmVzdCByZXN0YXVyYW50IGluIHRvd24hIEVuam95IG91ciBkZWxpY2lvdXMgbWVhbHMuJztcblxuICAgIC8vIGFwcGVuZCBlbGVtZW50cyB0byB0aGUgZGl2XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/about.js\n");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContact: () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\n    const contentDiv = document.getElementById('content');\n    const contactDiv = document.createElement('div');\n    \n    // Create form elements\n    const heading = document.createElement('h1');\n    heading.textContent = 'Contact Us';\n  \n    const form = document.createElement('form');\n    form.setAttribute('action', '#'); // You can update the action URL for form submission later\n  \n    // Name field\n    const nameLabel = document.createElement('label');\n    nameLabel.setAttribute('for', 'name');\n    nameLabel.textContent = 'Name:';\n  \n    const nameInput = document.createElement('input');\n    nameInput.setAttribute('type', 'text');\n    nameInput.setAttribute('id', 'name');\n    nameInput.setAttribute('name', 'name');\n    nameInput.setAttribute('required', '');\n  \n    // Email field\n    const emailLabel = document.createElement('label');\n    emailLabel.setAttribute('for', 'email');\n    emailLabel.textContent = 'Email:';\n  \n    const emailInput = document.createElement('input');\n    emailInput.setAttribute('type', 'email');\n    emailInput.setAttribute('id', 'email');\n    emailInput.setAttribute('name', 'email');\n    emailInput.setAttribute('required', '');\n  \n    // Message field\n    const messageLabel = document.createElement('label');\n    messageLabel.setAttribute('for', 'message');\n    messageLabel.textContent = 'Message:';\n  \n    const messageTextarea = document.createElement('textarea');\n    messageTextarea.setAttribute('id', 'message');\n    messageTextarea.setAttribute('name', 'message');\n    messageTextarea.setAttribute('required', '');\n  \n    // Submit button\n    const submitButton = document.createElement('button');\n    submitButton.setAttribute('type', 'submit');\n    submitButton.textContent = 'Submit';\n  \n    // Append all elements to the form\n    form.appendChild(nameLabel);\n    form.appendChild(nameInput);\n    form.appendChild(document.createElement('br'));\n  \n    form.appendChild(emailLabel);\n    form.appendChild(emailInput);\n    form.appendChild(document.createElement('br'));\n  \n    form.appendChild(messageLabel);\n    form.appendChild(messageTextarea);\n    form.appendChild(document.createElement('br'));\n  \n    form.appendChild(submitButton);\n  \n    // Append form to contact div\n    contactDiv.appendChild(heading);\n    contactDiv.appendChild(form);\n    contentDiv.appendChild(contactDiv);\n  }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzPzFhMWMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICAvLyBDcmVhdGUgZm9ybSBlbGVtZW50c1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XG4gIFxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcjJyk7IC8vIFlvdSBjYW4gdXBkYXRlIHRoZSBhY3Rpb24gVVJMIGZvciBmb3JtIHN1Ym1pc3Npb24gbGF0ZXJcbiAgXG4gICAgLy8gTmFtZSBmaWVsZFxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKTtcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnTmFtZTonO1xuICBcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWUnKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgXG4gICAgLy8gRW1haWwgZmllbGRcbiAgICBjb25zdCBlbWFpbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBlbWFpbExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2VtYWlsJyk7XG4gICAgZW1haWxMYWJlbC50ZXh0Q29udGVudCA9ICdFbWFpbDonO1xuICBcbiAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdlbWFpbCcpO1xuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdlbWFpbCcpO1xuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2VtYWlsJyk7XG4gICAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICBcbiAgICAvLyBNZXNzYWdlIGZpZWxkXG4gICAgY29uc3QgbWVzc2FnZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBtZXNzYWdlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbWVzc2FnZScpO1xuICAgIG1lc3NhZ2VMYWJlbC50ZXh0Q29udGVudCA9ICdNZXNzYWdlOic7XG4gIFxuICAgIGNvbnN0IG1lc3NhZ2VUZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgbWVzc2FnZVRleHRhcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVzc2FnZScpO1xuICAgIG1lc3NhZ2VUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbWVzc2FnZScpO1xuICAgIG1lc3NhZ2VUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICBcbiAgICAvLyBTdWJtaXQgYnV0dG9uXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgXG4gICAgLy8gQXBwZW5kIGFsbCBlbGVtZW50cyB0byB0aGUgZm9ybVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcbiAgXG4gICAgZm9ybS5hcHBlbmRDaGlsZChlbWFpbExhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGVtYWlsSW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG4gIFxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZUxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG1lc3NhZ2VUZXh0YXJlYSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcbiAgXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuICBcbiAgICAvLyBBcHBlbmQgZm9ybSB0byBjb250YWN0IGRpdlxuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhY3REaXYpO1xuICB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/contact.js\n");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\n    const contentDiv = document.getElementById('content');\n\n    const heading = document.createElement('h1')\n    heading.textContent = 'Amazing Restaurant';\n\n    const image = document.createElement('img');\n    image.src = __webpack_require__(/*! ../assets/images/restaurant1.jpg */ \"./src/assets/images/restaurant1.jpg\");\n    image.alt = 'restaurant';\n    image.style.maxWidth = '600px';\n\n    const description = document.createElement('p');\n    description.textContent = 'Welcome to the best restaurant in town! Enjoy our delicious meals.';\n\n    // append elements to the div\n\n    contentDiv.appendChild(heading);\n    contentDiv.appendChild(image);\n    contentDiv.appendChild(description);\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQU8sQ0FBQyw2RUFBa0M7QUFDMUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2hvbWUuanM/YzM2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnQW1hemluZyBSZXN0YXVyYW50JztcblxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc3JjID0gcmVxdWlyZSgnLi4vYXNzZXRzL2ltYWdlcy9yZXN0YXVyYW50MS5qcGcnKTtcbiAgICBpbWFnZS5hbHQgPSAncmVzdGF1cmFudCc7XG4gICAgaW1hZ2Uuc3R5bGUubWF4V2lkdGggPSAnNjAwcHgnO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byB0aGUgYmVzdCByZXN0YXVyYW50IGluIHRvd24hIEVuam95IG91ciBkZWxpY2lvdXMgbWVhbHMuJztcblxuICAgIC8vIGFwcGVuZCBlbGVtZW50cyB0byB0aGUgZGl2XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/home.js\n");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\n    const contentDiv = document.getElementById('content');\n\n    const heading = document.createElement('h1')\n    heading.textContent = 'This is our Menu';\n\n    const image = document.createElement('img');\n    image.src = __webpack_require__(/*! ../assets/images/menu.png */ \"./src/assets/images/menu.png\");\n    image.alt = 'menu';\n    image.style.maxWidth = '600px';\n\n    const description = document.createElement('p');\n    description.textContent = 'Welcome to the best restaurant in town! Enjoy our delicious meals.';\n\n    // append elements to the div\n\n    contentDiv.appendChild(heading);\n    contentDiv.appendChild(image);\n    contentDiv.appendChild(description);\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQU8sQ0FBQywrREFBMkI7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL21lbnUuanM/MmZhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnVGhpcyBpcyBvdXIgTWVudSc7XG5cbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlLnNyYyA9IHJlcXVpcmUoJy4uL2Fzc2V0cy9pbWFnZXMvbWVudS5wbmcnKTtcbiAgICBpbWFnZS5hbHQgPSAnbWVudSc7XG4gICAgaW1hZ2Uuc3R5bGUubWF4V2lkdGggPSAnNjAwcHgnO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byB0aGUgYmVzdCByZXN0YXVyYW50IGluIHRvd24hIEVuam95IG91ciBkZWxpY2lvdXMgbWVhbHMuJztcblxuICAgIC8vIGFwcGVuZCBlbGVtZW50cyB0byB0aGUgZGl2XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n");

/***/ }),

/***/ "./src/assets/images/about.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/about.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f90dc5643fe6ea9b4d3.jpg";

/***/ }),

/***/ "./src/assets/images/menu.png":
/*!************************************!*\
  !*** ./src/assets/images/menu.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9e2acf377cae8f67b30.png";

/***/ }),

/***/ "./src/assets/images/restaurant1.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/restaurant1.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b08bf90f3563aa5effd3.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;