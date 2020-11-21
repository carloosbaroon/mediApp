(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctor-settings-doctor-settings-doctor-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/doctor/settings-doctor/settings-doctor.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/doctor/settings-doctor/settings-doctor.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>settings-doctor</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/doctor/settings-doctor/settings-doctor-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/doctor/settings-doctor/settings-doctor-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: SettingsDoctorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsDoctorPageRoutingModule", function() { return SettingsDoctorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _settings_doctor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-doctor.page */ "./src/app/doctor/settings-doctor/settings-doctor.page.ts");




const routes = [
    {
        path: '',
        component: _settings_doctor_page__WEBPACK_IMPORTED_MODULE_3__["SettingsDoctorPage"]
    }
];
let SettingsDoctorPageRoutingModule = class SettingsDoctorPageRoutingModule {
};
SettingsDoctorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsDoctorPageRoutingModule);



/***/ }),

/***/ "./src/app/doctor/settings-doctor/settings-doctor.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/doctor/settings-doctor/settings-doctor.module.ts ***!
  \******************************************************************/
/*! exports provided: SettingsDoctorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsDoctorPageModule", function() { return SettingsDoctorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _settings_doctor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-doctor-routing.module */ "./src/app/doctor/settings-doctor/settings-doctor-routing.module.ts");
/* harmony import */ var _settings_doctor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings-doctor.page */ "./src/app/doctor/settings-doctor/settings-doctor.page.ts");







let SettingsDoctorPageModule = class SettingsDoctorPageModule {
};
SettingsDoctorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_doctor_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsDoctorPageRoutingModule"]
        ],
        declarations: [_settings_doctor_page__WEBPACK_IMPORTED_MODULE_6__["SettingsDoctorPage"]]
    })
], SettingsDoctorPageModule);



/***/ }),

/***/ "./src/app/doctor/settings-doctor/settings-doctor.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/doctor/settings-doctor/settings-doctor.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3Rvci9zZXR0aW5ncy1kb2N0b3Ivc2V0dGluZ3MtZG9jdG9yLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/doctor/settings-doctor/settings-doctor.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/doctor/settings-doctor/settings-doctor.page.ts ***!
  \****************************************************************/
/*! exports provided: SettingsDoctorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsDoctorPage", function() { return SettingsDoctorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingsDoctorPage = class SettingsDoctorPage {
    constructor() { }
    ngOnInit() {
    }
};
SettingsDoctorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings-doctor',
        template: __webpack_require__(/*! raw-loader!./settings-doctor.page.html */ "./node_modules/raw-loader/index.js!./src/app/doctor/settings-doctor/settings-doctor.page.html"),
        styles: [__webpack_require__(/*! ./settings-doctor.page.scss */ "./src/app/doctor/settings-doctor/settings-doctor.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SettingsDoctorPage);



/***/ })

}]);
//# sourceMappingURL=doctor-settings-doctor-settings-doctor-module-es2015.js.map