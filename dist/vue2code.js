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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.Event = new Vue();

Vue.component('coupon', {

	template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied" v-model="couponCode">',

	data: function data() {
		return {
			couponCode: ''
		};
	},


	methods: {
		onCouponApplied: function onCouponApplied() {
			this.$emit('applied', this.couponCode);
		}
	}
});

Vue.component('click-btn', {

	template: '<button class="button" @click="submitCoupon" v-text="btnText"></button>',

	data: function data() {
		return {
			btnText: 'Submit Coupon'
		};
	},


	methods: {
		submitCoupon: function submitCoupon() {
			Event.$emit('submitted');
		}
	}
});

Vue.component('progress-view', {
	data: function data() {
		return {
			completeRate: 10
		};
	}
});

new Vue({

	el: root,

	data: {
		showApplied: false
	},

	methods: {
		onCouponApplied: function onCouponApplied(code) {
			alert('It was applied ' + code);
			this.showApplied = true;
		}
	},

	created: function created() {
		Event.$on('submitted', function () {
			alert('Coupon Submitted!');
		});
	}
});

/***/ })

/******/ });