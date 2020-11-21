(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patient-settings-patient-settings-patient-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/patient/settings-patient/settings-patient.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/patient/settings-patient/settings-patient.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>settings-patient</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/patient/settings-patient/settings-patient-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/patient/settings-patient/settings-patient-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: SettingsPatientPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPatientPageRoutingModule", function() { return SettingsPatientPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _settings_patient_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-patient.page */ "./src/app/patient/settings-patient/settings-patient.page.ts");




const routes = [
    {
        path: '',
        component: _settings_patient_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPatientPage"]
    }
];
let SettingsPatientPageRoutingModule = class SettingsPatientPageRoutingModule {
};
SettingsPatientPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPatientPageRoutingModule);



/***/ }),

/***/ "./src/app/patient/settings-patient/settings-patient.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/patient/settings-patient/settings-patient.module.ts ***!
  \*********************************************************************/
/*! exports provided: SettingsPatientPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPatientPageModule", function() { return SettingsPatientPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _settings_patient_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-patient-routing.module */ "./src/app/patient/settings-patient/settings-patient-routing.module.ts");
/* harmony import */ var _settings_patient_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings-patient.page */ "./src/app/patient/settings-patient/settings-patient.page.ts");







let SettingsPatientPageModule = class SettingsPatientPageModule {
};
SettingsPatientPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_patient_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPatientPageRoutingModule"]
        ],
        declarations: [_settings_patient_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPatientPage"]]
    })
], SettingsPatientPageModule);



/***/ }),

/***/ "./src/app/patient/settings-patient/settings-patient.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/patient/settings-patient/settings-patient.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQvc2V0dGluZ3MtcGF0aWVudC9zZXR0aW5ncy1wYXRpZW50LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/patient/settings-patient/settings-patient.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/patient/settings-patient/settings-patient.page.ts ***!
  \*******************************************************************/
/*! exports provided: SettingsPatientPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPatientPage", function() { return SettingsPatientPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingsPatientPage = class SettingsPatientPage {
    constructor() { }
    ngOnInit() {
    }
};
SettingsPatientPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings-patient',
        template: __webpack_require__(/*! raw-loader!./settings-patient.page.html */ "./node_modules/raw-loader/index.js!./src/app/patient/settings-patient/settings-patient.page.html"),
        styles: [__webpack_require__(/*! ./settings-patient.page.scss */ "./src/app/patient/settings-patient/settings-patient.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SettingsPatientPage);



/***/ })

}]);
//# sourceMappingURL=patient-settings-patient-settings-patient-module-es2015.js.map