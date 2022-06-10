/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Calculator_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Calculator/calc */ \"./modules/Calculator/calc.js\");\n/* harmony import */ var _modules_Form_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Form/Form */ \"./modules/Form/Form.js\");\n/* harmony import */ var _modules_Modal_document_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Modal/document-modal */ \"./modules/Modal/document-modal.js\");\n/* harmony import */ var _modules_Modal_modal_call__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Modal/modal-call */ \"./modules/Modal/modal-call.js\");\n/* harmony import */ var _modules_Modal_services_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Modal/services-modal */ \"./modules/Modal/services-modal.js\");\n/* harmony import */ var _modules_Scroll_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/Scroll/scroll */ \"./modules/Scroll/scroll.js\");\n/* harmony import */ var _modules_Slider_benefits_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/Slider/benefits-slider */ \"./modules/Slider/benefits-slider.js\");\n/* harmony import */ var _modules_Slider_services_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/Slider/services-slider */ \"./modules/Slider/services-slider.js\");\n/* harmony import */ var _modules_Timer_timer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/Timer/timer */ \"./modules/Timer/timer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_Modal_modal_call__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_Slider_benefits_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_Slider_services_slider__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_Modal_services_modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_Timer_timer__WEBPACK_IMPORTED_MODULE_8__[\"default\"])('12 june 2022 13: 30: 00', '#order_1');\r\n(0,_modules_Timer_timer__WEBPACK_IMPORTED_MODULE_8__[\"default\"])('12 june 2022 13: 30: 00', '#order_2');\r\n(0,_modules_Modal_document_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_Scroll_scroll__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_Calculator_calc__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_Form_Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n    someElem: [{\r\n        type: 'block',\r\n        id: 'calc-total'\r\n    }]\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/Calculator/calc.js":
/*!************************************!*\
  !*** ./modules/Calculator/calc.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = () => {\r\n    const calcWrapper = document.getElementById('calc');\r\n    const calcType = document.getElementById('calc-type');\r\n    const calcTypeMaterial = document.getElementById('calc-type-material');\r\n    const calcInput = document.getElementById('calc-input');\r\n    const calcTotal = document.getElementById('calc-total');\r\n\r\n    const validate = () => {\r\n        calcInput.addEventListener('change', () => {\r\n            if (!/[^\\d]/g.test(calcInput.value)) {\r\n                calcInput.style.borderColor = 'green';\r\n            } else {\r\n                calcInput.value = 'Ввeдите число';\r\n                calcInput.style.cssText = `\r\n                    border-color: red;\r\n                    color: red;\r\n                `;\r\n            }\r\n            calcInput.addEventListener('click', () => {\r\n                calcInput.value = '';\r\n                calcInput.removeAttribute('style');\r\n            });\r\n        });\r\n    };\r\n\r\n    const countCalc = () => {\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n        const calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;\r\n        const calcInputValue = +calcInput.value;\r\n\r\n        const totalValue = calcTypeValue * calcTypeMaterialValue * calcInputValue;\r\n\r\n        calcTotal.value = totalValue;\r\n    };\r\n\r\n    calcWrapper?.addEventListener('change', e => {\r\n        if (e.target === calcType || e.target === calcTypeMaterial ||\r\n            e.target === calcInput) {\r\n            validate();\r\n            countCalc();\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\r\n\n\n//# sourceURL=webpack:///./modules/Calculator/calc.js?");

/***/ }),

/***/ "./modules/Form/Form.js":
/*!******************************!*\
  !*** ./modules/Form/Form.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst form = ({ someElem = [] }) => {\r\n    const form = document.querySelector('.form-horizontal');\r\n    const formElement = form.querySelectorAll('input');\r\n    const statusBlock = document.createElement('span');\r\n    const loadText = 'Загрузка...';\r\n    const errorText = 'Ошибка...';\r\n    const successText = 'Спасибо! Наш менеджер с вами свяжется!';\r\n\r\n    const mapInputs = {\r\n        'form-name': /^[a-zA-Zа-яА-ЯёЁa ]{2,20}$/,\r\n        'form-phone': /^((8|\\+7)[-]?)?(\\(?\\d{3}\\)?[-]?)?[\\d\\- ]{7,10}$/,\r\n    };\r\n\r\n    const inputValidate = list => {\r\n        console.log(list);\r\n\r\n        const newArray = Array.from(list);\r\n\r\n        Object.keys(mapInputs).forEach(key => {\r\n            const findInput = newArray.find(input => input.classList.contains(key));\r\n\r\n            if (findInput && !(mapInputs[key].test(findInput.value))) {\r\n                findInput.style.border = 'solid red 2px';\r\n            }\r\n        });\r\n    };\r\n    const clearStyleBorder = item => {\r\n        if (item.style.border) {\r\n            item.style.border = '';\r\n        }\r\n    };\r\n\r\n    const clearError = list => {\r\n        list.forEach(input => {\r\n            input.addEventListener('focus', e => clearStyleBorder(e.target));\r\n        });\r\n    };\r\n\r\n    const validate = list => {\r\n        let success = true;\r\n\r\n        list.forEach(input => {\r\n            if (input.value === '') {\r\n                success = false;\r\n            }\r\n        });\r\n\r\n        return success;\r\n    };\r\n\r\n    const sendData = data => fetch('https://jsonplaceholder.typicode.com/posts', {\r\n        method: 'POST',\r\n        body: JSON.stringify(data),\r\n        headers: {\r\n            'Content-Type': 'application/json'\r\n        }\r\n    }).then(res => res.json());\r\n\r\n    const submitForm = () => {\r\n        const formData = new FormData(form);\r\n        const formBody = {};\r\n\r\n        formData.forEach((value, key) => {\r\n            formBody[key] = value;\r\n        });\r\n        someElem.forEach(elem => {\r\n            const element = document.getElementById(elem.id);\r\n\r\n            formBody[elem.id] = elem.type === 'block' ? element.textContent : element.value;\r\n        });\r\n\r\n        inputValidate(formElement);\r\n\r\n        if (validate(formElement)) {\r\n            statusBlock.textContent = loadText;\r\n            statusBlock.style.color = '#fff';\r\n            form.append(statusBlock);\r\n\r\n            sendData(formBody)\r\n                .then(() => {\r\n                    statusBlock.textContent = successText;\r\n\r\n                    formElement.forEach(input => {\r\n                        input.value = '';\r\n                    });\r\n                })\r\n                .catch(() => statusBlock.textContent = errorText);\r\n        }\r\n    };\r\n\r\n    clearError(formElement);\r\n\r\n    try {\r\n        if (!form) {\r\n            throw new Error('Верни форму на место');\r\n        }\r\n\r\n        form.addEventListener('submit', event => {\r\n            event.preventDefault();\r\n\r\n            submitForm();\r\n        });\r\n    } catch (error) {\r\n        alert(error.massage);\r\n    }\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);\r\n\n\n//# sourceURL=webpack:///./modules/Form/Form.js?");

/***/ }),

/***/ "./modules/Modal/document-modal.js":
/*!*****************************************!*\
  !*** ./modules/Modal/document-modal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst documentModal = () => {\r\n    const body = document.querySelector('body');\r\n    const documentSection = document.getElementById('documents');\r\n    const certificateBlock = documentSection.querySelectorAll('.col-sm-4');\r\n    const modal = document.createElement('div');\r\n    const overlay = document.querySelector('.overlay');\r\n    const widht = document.documentElement.clientWidth;\r\n\r\n    const createModal = () => {\r\n        body.append(modal);\r\n\r\n        modal.innerHTML = `<img src=\"images/documents/original/document4.jpg\" class=\"img-responsive\" alt=\"\">\r\n                            <span>X</span>\r\n        `;\r\n\r\n        const buttonClose = modal.querySelector('span');\r\n        const image = modal.querySelector('img');\r\n\r\n        if (widht < 576) {\r\n            modal.style.cssText = `\r\n                position: fixed;\r\n                top: 50%;\r\n                left: 50%;\r\n                transform: translate(-50%, -50%);\r\n                z-index: 9999;\r\n                width: 60%;\r\n                height: 90%;\r\n            `;\r\n        } else if (widht > 576 && widht < 800) {\r\n            modal.style.cssText = `\r\n                position: fixed;\r\n                top: 50%;\r\n                left: 50%;\r\n                transform: translate(-50%, -50%);\r\n                z-index: 9999;\r\n                width: 70%;\r\n                height: 80%;\r\n            `;\r\n        } else if (widht > 800 && widht < 1200) {\r\n            modal.style.cssText = `\r\n                position: fixed;\r\n                top: 50%;\r\n                left: 50%;\r\n                transform: translate(-50%, -50%);\r\n                z-index: 9999;\r\n                width: 50%;\r\n                height: 80%;\r\n            `;\r\n        } else {\r\n            modal.style.cssText = `\r\n                position: fixed;\r\n                top: 50%;\r\n                left: 50%;\r\n                transform: translate(-50%, -50%);\r\n                z-index: 9999;\r\n                width: 40%;\r\n                height: 80%;\r\n            `;\r\n        }\r\n\r\n\r\n        buttonClose.style.cssText = `\r\n        cursor: pointer;\r\n        position: fixed;\r\n        top: 20px;\r\n        right: 20px;\r\n        font-size: 25px;\r\n        color: black;\r\n        `;\r\n\r\n        image.style.cssText = `\r\n        width: 100%;\r\n        height: 100%;\r\n        `;\r\n\r\n        buttonClose.addEventListener('click', () => {\r\n            modal.style.cssText = `\r\n                display: none;\r\n            `;\r\n            overlay.style.cssText = `\r\n                display: '';\r\n            `;\r\n        });\r\n    };\r\n\r\n    certificateBlock.forEach(el => {\r\n\r\n        el.addEventListener('mouseenter', () => {\r\n            el.children[0].children[1].style.opacity = 1;\r\n        });\r\n        el.addEventListener('mouseleave', () => {\r\n            el.children[0].children[1].style.opacity = 0;\r\n        });\r\n        el.addEventListener('click', e => {\r\n            e.preventDefault();\r\n            overlay.style.cssText = `\r\n                display: block;\r\n            `;\r\n            createModal();\r\n        });\r\n    });\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (documentModal);\r\n\n\n//# sourceURL=webpack:///./modules/Modal/document-modal.js?");

/***/ }),

/***/ "./modules/Modal/modal-call.js":
/*!*************************************!*\
  !*** ./modules/Modal/modal-call.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modalCall = () => {\r\n    const header = document.getElementById('header');\r\n    const buttonCall = header.querySelector('a[href=\"#callback\"]');\r\n    const headerModal = document.querySelector('.header-modal');\r\n    const closeButton = headerModal.querySelector('.header-modal__close');\r\n    const overlay = document.querySelector('.overlay');\r\n\r\n    const openModal = () => {\r\n        overlay.style.cssText = `\r\n        display: block;\r\n        `;\r\n        headerModal.classList.remove('header-modal');\r\n    };\r\n\r\n    const closeModal = () => {\r\n        overlay.style.cssText = `\r\n        display: '';\r\n        `;\r\n        headerModal.classList.add('header-modal');\r\n    };\r\n\r\n    buttonCall.addEventListener('click', openModal);\r\n    closeButton.addEventListener('click', closeModal);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalCall);\r\n\n\n//# sourceURL=webpack:///./modules/Modal/modal-call.js?");

/***/ }),

/***/ "./modules/Modal/services-modal.js":
/*!*****************************************!*\
  !*** ./modules/Modal/services-modal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst servicesModal = () => {\r\n    const services = document.getElementById('services');\r\n    const buttons = services.querySelectorAll('.service-button');\r\n    const overlay = document.querySelector('.overlay');\r\n    const serviceModal = document.querySelector('.services-modal');\r\n    const buttonCloSe = serviceModal.querySelector('.services-modal__close');\r\n\r\n    const openModal = () => {\r\n        overlay.style.cssText = `\r\n        display: block;\r\n        `;\r\n        serviceModal.classList.remove('services-modal');\r\n    };\r\n\r\n    const closeModal = () => {\r\n        overlay.style.cssText = `\r\n        display: '';\r\n        `;\r\n        serviceModal.classList.add('services-modal');\r\n    };\r\n\r\n    buttons.forEach(el => el.addEventListener('click', openModal));\r\n    buttonCloSe.addEventListener('click', closeModal);\r\n\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (servicesModal);\r\n\n\n//# sourceURL=webpack:///./modules/Modal/services-modal.js?");

/***/ }),

/***/ "./modules/Scroll/scroll.js":
/*!**********************************!*\
  !*** ./modules/Scroll/scroll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst smoothScroll = () => {\r\n    const arrowUp = document.querySelector('.smooth-scroll');\r\n    const header = document.getElementById('header');\r\n\r\n    window.addEventListener('scroll', () => {\r\n        const scrollTop = document.documentElement.scrollTop;\r\n        if (scrollTop <= 856) {\r\n            arrowUp.style.display = 'none';\r\n        } else {\r\n            arrowUp.style.display = '';\r\n        }\r\n    });\r\n\r\n    arrowUp.addEventListener('click', e => {\r\n        e.preventDefault();\r\n        header.scrollIntoView({\r\n            block: \"start\",\r\n            behavior: \"smooth\"\r\n        });\r\n    });\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\r\n\n\n//# sourceURL=webpack:///./modules/Scroll/scroll.js?");

/***/ }),

/***/ "./modules/Slider/benefits-slider.js":
/*!*******************************************!*\
  !*** ./modules/Slider/benefits-slider.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst benefitsSlider = () => {\r\n    const sliderWrapper = document.querySelector('.benefits-wrap');\r\n    const slides = sliderWrapper.querySelectorAll('.benefits__item');\r\n    const arrowsBlock = document.querySelector('.benefits-arrows');\r\n    const arrowLeft = arrowsBlock.querySelector('.benefits__arrow--left > img');\r\n    const arrowRight = arrowsBlock.querySelector('.benefits__arrow--right > img');\r\n    const widht = document.documentElement.clientWidth;\r\n\r\n    widht < 576 ? sliderWrapper.style.justifyContent = 'center' : sliderWrapper.style.justifyContent = '';\r\n\r\n    const visibleSlides = () => (widht >= 576 ? 3 : 1);\r\n\r\n    const hideSlides = list => {\r\n        list.forEach((item, index) => {\r\n            if (index >= visibleSlides()) {\r\n                item.style.display = 'none';\r\n            } else {\r\n                item.style.display = '';\r\n            }\r\n        });\r\n    };\r\n\r\n    const switchSlide = type => {\r\n        let list = sliderWrapper.querySelectorAll('.benefits__item');\r\n\r\n        const activeSlide = type === 'next' ? 0 : list.length - 1;\r\n        const clone = list[activeSlide].cloneNode(true);\r\n\r\n        list[activeSlide].remove();\r\n\r\n        if (type === 'next') {\r\n            sliderWrapper.append(clone);\r\n        } else {\r\n            sliderWrapper.prepend(clone);\r\n        }\r\n\r\n        list = sliderWrapper.querySelectorAll('.benefits__item');\r\n        hideSlides(list);\r\n    };\r\n\r\n\r\n    arrowsBlock.addEventListener('click', e => {\r\n        if (e.target.contains(arrowLeft)) {\r\n            switchSlide('prev');\r\n        } else if (e.target.contains(arrowRight)) {\r\n            switchSlide('next');\r\n        }\r\n    });\r\n\r\n\r\n    hideSlides(slides);\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (benefitsSlider);\r\n\n\n//# sourceURL=webpack:///./modules/Slider/benefits-slider.js?");

/***/ }),

/***/ "./modules/Slider/services-slider.js":
/*!*******************************************!*\
  !*** ./modules/Slider/services-slider.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst servicesSlider = () => {\r\n    const services = document.getElementById('services');\r\n    const sliderWrapper = services.querySelector('.row');\r\n    const slides = sliderWrapper.querySelectorAll('.col-md-12.col-lg-6');\r\n    const arrowsBlock = document.querySelector('.services-arrows');\r\n    const arrowLeft = arrowsBlock.querySelector('.services__arrow--left > img');\r\n    const arrowRight = arrowsBlock.querySelector('.services__arrow--right > img');\r\n    const widht = document.documentElement.clientWidth;\r\n\r\n    sliderWrapper.style.cssText = `\r\n    display: flex;\r\n    `;\r\n    widht < 1200 ? sliderWrapper.style.justifyContent = 'center' : sliderWrapper.style.justifyContent = '';\r\n\r\n\r\n    const visibleSlides = () => (widht >= 1200 ? 2 : 1);\r\n\r\n    const hideSlides = list => {\r\n        list.forEach((item, index) => {\r\n            if (index >= visibleSlides()) {\r\n                item.style.display = 'none';\r\n            } else {\r\n                item.style.display = '';\r\n            }\r\n        });\r\n    };\r\n\r\n    const switchSlide = type => {\r\n        let list = sliderWrapper.querySelectorAll('.col-md-12.col-lg-6');\r\n\r\n        const activeSlide = type === 'next' ? 0 : list.length - 1;\r\n        const clone = list[activeSlide].cloneNode(true);\r\n\r\n        list[activeSlide].remove();\r\n\r\n        if (type === 'next') {\r\n            sliderWrapper.append(clone);\r\n        } else {\r\n            sliderWrapper.prepend(clone);\r\n        }\r\n\r\n        list = sliderWrapper.querySelectorAll('.col-md-12.col-lg-6');\r\n        hideSlides(list);\r\n    };\r\n\r\n\r\n    arrowsBlock.addEventListener('click', e => {\r\n        if (e.target.contains(arrowLeft)) {\r\n            switchSlide('prev');\r\n        } else if (e.target.contains(arrowRight)) {\r\n            switchSlide('next');\r\n        }\r\n    });\r\n\r\n\r\n    hideSlides(slides);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (servicesSlider);\r\n\n\n//# sourceURL=webpack:///./modules/Slider/services-slider.js?");

/***/ }),

/***/ "./modules/Timer/timer.js":
/*!********************************!*\
  !*** ./modules/Timer/timer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline, id) => {\r\n    const timerWrapper = document.querySelector(id);\r\n    const timerDays = timerWrapper.querySelector('.count_1 > span');\r\n    const timerHours = timerWrapper.querySelector('.count_2 > span');\r\n    const timerMinutes = timerWrapper.querySelector('.count_3 > span');\r\n    const timerSeconds = timerWrapper.querySelector('.count_4 > span');\r\n\r\n    const getTimeRemaining = () => {\r\n        const dateStop = new Date(deadline).getTime();\r\n        const dateNow = new Date().getTime();\r\n        const timeRemaining = (dateStop - dateNow) / 1000;\r\n        const days = Math.floor(timeRemaining / 3600 / 24);\r\n        const hours = Math.floor((timeRemaining / 3600) % 24);\r\n        const minutes = Math.floor((timeRemaining / 60) % 60);\r\n        const seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return {\r\n            timeRemaining,\r\n            days,\r\n            hours,\r\n            minutes,\r\n            seconds\r\n        };\r\n    };\r\n\r\n    const addZero = str => {\r\n        if (Number(str) >= 0 && Number(str) < 10) {\r\n            return `0${str}`;\r\n        }\r\n        return str;\r\n    };\r\n\r\n    const showClock = () => {\r\n        const getTime = getTimeRemaining();\r\n\r\n        if (getTime.timeRemaining > 0) {\r\n            timerDays.textContent = `${addZero(getTime.days)}`;\r\n            timerHours.textContent = `${addZero(getTime.hours)}`;\r\n            timerMinutes.textContent = `${addZero(getTime.minutes)}`;\r\n            timerSeconds.textContent = `${addZero(getTime.seconds)}`;\r\n        }\r\n    };\r\n\r\n    const updateClock = () => {\r\n        const getTime = getTimeRemaining();\r\n        if (getTime.timeRemaining > 0) {\r\n            setInterval(() => {\r\n                showClock();\r\n            }, 1000);\r\n        }\r\n    };\r\n    updateClock();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/Timer/timer.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;