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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Vue.component('task-list', {

	template: '<div><task v-for="task in tasks">{{task.description}}</task></div>',

	data: function data() {
		return {
			tasks: [{ description: 'Go to the store', completed: false }, { description: 'Take the garbage', completed: true }, { description: 'Finish lesson', completed: false }, { description: 'Clear inbox', completed: true }]
		};
	}
});

Vue.component('task', {

	template: '<li><slot></slot></li>'

});

Vue.component('message', {
	props: ['title', 'body'],

	data: function data() {
		return {
			isVisible: true
		};
	},


	template: '\n\n\t\t<article v-show="isVisible" class="message">\n\t      <div class="message-header">\n\t        <p>{{title}}</p>\n\t        <button @click="hideModal" class="delete" aria-label="delete"></button>\n\t      </div>\n\t      <div class="message-body">\n\t       {{body}}\n\t      </div>\n\t    </article> \n\t',

	methods: {
		hideModal: function hideModal() {
			this.isVisible = false;
		}
	}

});

Vue.component('my-modal', {
	data: function data() {
		return {
			visible: 'is-active'
		};
	},

	template: '\n\t  <div class="modal is-active">\n\t    <div class="modal-background"></div>\n\t    <div class="modal-content">\n\t      <div class="box">\n\t        <slot></slot>\n\t      </div>\n\t    </div>\n\t    <button class="modal-close is-large" aria-label="close" @click="$emit(\'close\')"></button>\n\t  </div>\n\t'
});

var app = new Vue({

	el: '#root',

	data: {
		showModal: false
	}

});

/***/ })

/******/ });