(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patient-home-patient-home-patient-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/patient/home-patient/home-patient.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/patient/home-patient/home-patient.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>home-patient</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/patient/home-patient/home-patient-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/patient/home-patient/home-patient-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: HomePatientPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePatientPageRoutingModule", function() { return HomePatientPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_patient_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-patient.page */ "./src/app/patient/home-patient/home-patient.page.ts");




const routes = [
    {
        path: '',
        component: _home_patient_page__WEBPACK_IMPORTED_MODULE_3__["HomePatientPage"]
    }
];
let HomePatientPageRoutingModule = class HomePatientPageRoutingModule {
};
HomePatientPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePatientPageRoutingModule);



/***/ }),

/***/ "./src/app/patient/home-patient/home-patient.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/patient/home-patient/home-patient.module.ts ***!
  \*************************************************************/
/*! exports provided: HomePatientPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePatientPageModule", function() { return HomePatientPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home_patient_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-patient-routing.module */ "./src/app/patient/home-patient/home-patient-routing.module.ts");
/* harmony import */ var _home_patient_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-patient.page */ "./src/app/patient/home-patient/home-patient.page.ts");







let HomePatientPageModule = class HomePatientPageModule {
};
HomePatientPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_patient_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePatientPageRoutingModule"]
        ],
        declarations: [_home_patient_page__WEBPACK_IMPORTED_MODULE_6__["HomePatientPage"]]
    })
], HomePatientPageModule);



/***/ }),

/***/ "./src/app/patient/home-patient/home-patient.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/patient/home-patient/home-patient.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQvaG9tZS1wYXRpZW50L2hvbWUtcGF0aWVudC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/patient/home-patient/home-patient.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/patient/home-patient/home-patient.page.ts ***!
  \***********************************************************/
/*! exports provided: HomePatientPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePatientPage", function() { return HomePatientPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomePatientPage = class HomePatientPage {
    constructor() { }
    ngOnInit() {
    }
};
HomePatientPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-patient',
        template: __webpack_require__(/*! raw-loader!./home-patient.page.html */ "./node_modules/raw-loader/index.js!./src/app/patient/home-patient/home-patient.page.html"),
        styles: [__webpack_require__(/*! ./home-patient.page.scss */ "./src/app/patient/home-patient/home-patient.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomePatientPage);



/***/ })

}]);
//# sourceMappingURL=patient-home-patient-home-patient-module-es2015.js.map