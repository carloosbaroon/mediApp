(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctor-prescribe-prescribe-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/doctor/prescribe/prescribe.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/doctor/prescribe/prescribe.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>prescribe</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/doctor/prescribe/prescribe-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/doctor/prescribe/prescribe-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: PrescribePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescribePageRoutingModule", function() { return PrescribePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _prescribe_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prescribe.page */ "./src/app/doctor/prescribe/prescribe.page.ts");




var routes = [
    {
        path: '',
        component: _prescribe_page__WEBPACK_IMPORTED_MODULE_3__["PrescribePage"]
    }
];
var PrescribePageRoutingModule = /** @class */ (function () {
    function PrescribePageRoutingModule() {
    }
    PrescribePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PrescribePageRoutingModule);
    return PrescribePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/doctor/prescribe/prescribe.module.ts":
/*!******************************************************!*\
  !*** ./src/app/doctor/prescribe/prescribe.module.ts ***!
  \******************************************************/
/*! exports provided: PrescribePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescribePageModule", function() { return PrescribePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _prescribe_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prescribe-routing.module */ "./src/app/doctor/prescribe/prescribe-routing.module.ts");
/* harmony import */ var _prescribe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prescribe.page */ "./src/app/doctor/prescribe/prescribe.page.ts");







var PrescribePageModule = /** @class */ (function () {
    function PrescribePageModule() {
    }
    PrescribePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _prescribe_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrescribePageRoutingModule"]
            ],
            declarations: [_prescribe_page__WEBPACK_IMPORTED_MODULE_6__["PrescribePage"]]
        })
    ], PrescribePageModule);
    return PrescribePageModule;
}());



/***/ }),

/***/ "./src/app/doctor/prescribe/prescribe.page.scss":
/*!******************************************************!*\
  !*** ./src/app/doctor/prescribe/prescribe.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3Rvci9wcmVzY3JpYmUvcHJlc2NyaWJlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/doctor/prescribe/prescribe.page.ts":
/*!****************************************************!*\
  !*** ./src/app/doctor/prescribe/prescribe.page.ts ***!
  \****************************************************/
/*! exports provided: PrescribePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescribePage", function() { return PrescribePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrescribePage = /** @class */ (function () {
    function PrescribePage() {
    }
    PrescribePage.prototype.ngOnInit = function () {
    };
    PrescribePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prescribe',
            template: __webpack_require__(/*! raw-loader!./prescribe.page.html */ "./node_modules/raw-loader/index.js!./src/app/doctor/prescribe/prescribe.page.html"),
            styles: [__webpack_require__(/*! ./prescribe.page.scss */ "./src/app/doctor/prescribe/prescribe.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrescribePage);
    return PrescribePage;
}());



/***/ })

}]);
//# sourceMappingURL=doctor-prescribe-prescribe-module-es5.js.map