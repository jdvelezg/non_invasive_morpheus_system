"use strict";
(self["webpackChunkmorpheusbox_admin"] = self["webpackChunkmorpheusbox_admin"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _pages_patients_page_patients_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/patients-page/patients-page.component */ 7515);
/* harmony import */ var _pages_devices_page_devices_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/devices-page/devices-page.component */ 7075);
/* harmony import */ var _pages_sensors_page_sensors_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/sensors-page/sensors-page.component */ 5229);
/* harmony import */ var _pages_recordings_page_recordings_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/recordings-page/recordings-page.component */ 3093);
/* harmony import */ var _shared_components_edit_device_form_edit_device_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/edit-device-form/edit-device-form.component */ 2636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);








const routes = [{
  path: '',
  redirectTo: 'patients',
  pathMatch: 'full'
}, {
  path: 'home',
  component: _pages_devices_page_devices_page_component__WEBPACK_IMPORTED_MODULE_1__.DevicesPageComponent
}, {
  path: 'patients',
  component: _pages_patients_page_patients_page_component__WEBPACK_IMPORTED_MODULE_0__.PatientsPageComponent
}, {
  path: 'devices',
  component: _pages_devices_page_devices_page_component__WEBPACK_IMPORTED_MODULE_1__.DevicesPageComponent
}, {
  path: 'connecteddevice',
  component: _shared_components_edit_device_form_edit_device_form_component__WEBPACK_IMPORTED_MODULE_4__.EditDeviceFormComponent
}, {
  path: 'sensors',
  component: _pages_sensors_page_sensors_page_component__WEBPACK_IMPORTED_MODULE_2__.SensorsPageComponent
}, {
  path: 'recordings',
  component: _pages_recordings_page_recordings_page_component__WEBPACK_IMPORTED_MODULE_3__.RecordingsPageComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/services/session.service */ 5813);
/* harmony import */ var _shared_services_rx_stomp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/rx-stomp.service */ 1019);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ 8173);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 895);













function AppComponent_mat_progress_bar_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-bar", 22);
  }
}
function AppComponent_mat_list_item_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-list-item")(1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Registered Devices");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function AppComponent_mat_list_item_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-list-item")(1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Recordings");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class AppComponent {
  constructor(_session, _rxStomp) {
    this._session = _session;
    this._rxStomp = _rxStomp;
    this.title = 'morpheusbox_admin';
  }
  disconectDevice(event) {
    console.log(event);
    this._session.closeSession();
  }
  getSessionDeviceUUID() {
    var uuid;
    if (this._session.isSessionStarted()) {
      const dev = this._session.getSessionDeviceData();
      uuid = dev?.uuid;
    }
    return uuid;
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_rx_stomp_service__WEBPACK_IMPORTED_MODULE_1__.RxStompService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 51,
    vars: 10,
    consts: [[1, "mbox-header"], ["matRipple", "", 3, "matRippleTrigger"], ["openner", ""], ["mat-button", "", "aria-label", "icon-button with image", 1, "menu-button", 3, "click"], ["src", "assets/images/logo_300x.gif", "alt", "Menu", "height", "53", "width", "50"], [2, "margin-left", "12px"], [1, "mbox-spacer"], ["mode", "query", 4, "ngIf"], [1, "mbox-main"], ["autosize", "", 1, "sidenav-container"], ["mode", "side", "opened", "", 1, "mbox-sidenav"], ["drawer", ""], [2, "text-align", "center"], ["routerLink", "/patients", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], [4, "ngIf"], [3, "hidden"], ["fontIcon", "memory", 2, "color", "green"], [2, "font-size", "50%", "color", "lightslategray"], ["routerLink", "/connecteddevice", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["routerLink", "/sensors", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["routerLink", "/recordings", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["mat-button", "", 3, "disabled", "click"], ["mode", "query"], ["routerLink", "/devices", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-toolbar", 1)(2, "div", null, 2)(4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r2.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Admin Panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AppComponent_mat_progress_bar_9_Template, 1, 0, "mat-progress-bar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "mat-drawer-container", 9)(13, "mat-drawer", 10, 11)(15, "div")(16, "mat-list")(17, "mat-list-item", 12)(18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Morpheus Box");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-list-item")(22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Registered Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, AppComponent_mat_list_item_24_Template, 3, 0, "mat-list-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, AppComponent_mat_list_item_25_Template, 3, 0, "mat-list-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div")(28, "mat-list", 15)(29, "mat-list-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Device ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Connected ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-list-item")(38, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "main ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "mat-list-item")(41, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "sensors");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "mat-list-item")(44, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "recordings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mat-list-item", 12)(48, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_48_listener($event) {
          return ctx.disconectDevice($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Disconnect");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRippleTrigger", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 8, ctx._session.sessionManager.isOnQueryObs));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx._session.isSessionStarted());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx._session.isSessionStarted());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx._session.isSessionStarted());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx._session.isSessionStarted());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", ctx.getSessionDeviceUUID(), ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx._session.isSessionStarted());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawerContainer, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__.MatProgressBar, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRipple, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
    styles: ["[_nghost-%COMP%]{\n    height:100%;\n    display: block;\n    background: #B5ECB3;\n}\n\n.mbox-main[_ngcontent-%COMP%] {\n    height: inherit;\n}\n\nmat-drawer-container[_ngcontent-%COMP%] {\n    height: inherit;\n}\n.mbox-container[_ngcontent-%COMP%] {\n    width: 500px;\n    height: 300px;\n    border: 1px solid rgba(0, 0, 0, 0.5);\n  }\n  \n  .mbox-sidenav-content[_ngcontent-%COMP%] {\n    display: flex;\n    height: 100%;\n    align-items: center;\n    justify-content: center;\n  }\n  \n  .mbox-sidenav[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICNCNUVDQjM7XG59XG5cbi5tYm94LW1haW4ge1xuICAgIGhlaWdodDogaW5oZXJpdDtcbn1cblxubWF0LWRyYXdlci1jb250YWluZXIge1xuICAgIGhlaWdodDogaW5oZXJpdDtcbn1cbi5tYm94LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB9XG4gIFxuICAubWJveC1zaWRlbmF2LWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5tYm94LXNpZGVuYXYge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6080);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ 8173);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/radio */ 2106);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/clipboard */ 4362);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/progress-spinner */ 3910);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/chips */ 1757);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/autocomplete */ 9892);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/checkbox */ 6658);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _pages_patients_page_patients_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/patients-page/patients-page.component */ 7515);
/* harmony import */ var _pages_devices_page_devices_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/devices-page/devices-page.component */ 7075);
/* harmony import */ var _shared_components_patient_data_table_patient_data_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/patient-data-table/patient-data-table.component */ 692);
/* harmony import */ var _shared_components_link_patient_form_link_patient_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/link-patient-form/link-patient-form.component */ 6761);
/* harmony import */ var _shared_components_del_patient_button_del_patient_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/del-patient-button/del-patient-button.component */ 4148);
/* harmony import */ var _shared_components_device_card_device_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/device-card/device-card.component */ 5602);
/* harmony import */ var _pages_sensors_page_sensors_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/sensors-page/sensors-page.component */ 5229);
/* harmony import */ var _shared_components_sensors_data_table_sensors_data_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/sensors-data-table/sensors-data-table.component */ 261);
/* harmony import */ var _shared_components_recordings_data_table_recordings_data_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/recordings-data-table/recordings-data-table.component */ 3830);
/* harmony import */ var _pages_recordings_page_recordings_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/recordings-page/recordings-page.component */ 3093);
/* harmony import */ var _shared_components_bed_canvas_bed_canvas_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/components/bed-canvas/bed-canvas.component */ 7982);
/* harmony import */ var _shared_components_edit_device_form_edit_device_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/components/edit-device-form/edit-device-form.component */ 2636);
/* harmony import */ var _shared_components_link_sensor_form_link_sensor_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/components/link-sensor-form/link-sensor-form.component */ 3675);
/* harmony import */ var _shared_components_del_sensor_button_del_sensor_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/components/del-sensor-button/del-sensor-button.component */ 8142);
/* harmony import */ var _shared_components_recording_controls_recording_controls_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/components/recording-controls/recording-controls.component */ 3940);
/* harmony import */ var _shared_components_link_download_data_form_link_download_data_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/components/link-download-data-form/link-download-data-form.component */ 8647);
/* harmony import */ var _shared_components_link_recorder_form_link_recorder_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/components/link-recorder-form/link-recorder-form.component */ 4025);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 1699);



















































class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__.BrowserAnimationsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__.MatToolbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__.MatSidenavModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__.MatDividerModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatProgressBarModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__.MatRadioModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_31__.MatCardModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_32__.ClipboardModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__.MatProgressSpinnerModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggleModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_35__.MatListModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__.MatSortModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_39__.MatChipsModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_40__.MatRippleModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_41__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_42__.MatSelectModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_43__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_44__.MatButtonModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_45__.MatTooltipModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_46__.MatSnackBarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_47__.MatAutocompleteModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_48__.MatCheckboxModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_49__.MatMenuModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbPopoverModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _pages_patients_page_patients_page_component__WEBPACK_IMPORTED_MODULE_2__.PatientsPageComponent, _pages_devices_page_devices_page_component__WEBPACK_IMPORTED_MODULE_3__.DevicesPageComponent, _shared_components_patient_data_table_patient_data_table_component__WEBPACK_IMPORTED_MODULE_4__.PatientDataTableComponent, _shared_components_link_patient_form_link_patient_form_component__WEBPACK_IMPORTED_MODULE_5__.LinkPatientFormComponent, _shared_components_del_patient_button_del_patient_button_component__WEBPACK_IMPORTED_MODULE_6__.DelPatientButtonComponent, _shared_components_device_card_device_card_component__WEBPACK_IMPORTED_MODULE_7__.DeviceCardComponent, _pages_sensors_page_sensors_page_component__WEBPACK_IMPORTED_MODULE_8__.SensorsPageComponent, _shared_components_sensors_data_table_sensors_data_table_component__WEBPACK_IMPORTED_MODULE_9__.SensorsDataTableComponent, _shared_components_recordings_data_table_recordings_data_table_component__WEBPACK_IMPORTED_MODULE_10__.RecordingsDataTableComponent, _pages_recordings_page_recordings_page_component__WEBPACK_IMPORTED_MODULE_11__.RecordingsPageComponent, _shared_components_bed_canvas_bed_canvas_component__WEBPACK_IMPORTED_MODULE_12__.BedCanvasComponent, _shared_components_edit_device_form_edit_device_form_component__WEBPACK_IMPORTED_MODULE_13__.EditDeviceFormComponent, _shared_components_link_sensor_form_link_sensor_form_component__WEBPACK_IMPORTED_MODULE_14__.LinkSensorFormComponent, _shared_components_del_sensor_button_del_sensor_button_component__WEBPACK_IMPORTED_MODULE_15__.DelSensorButtonComponent, _shared_components_recording_controls_recording_controls_component__WEBPACK_IMPORTED_MODULE_16__.RecordingControlsComponent, _shared_components_link_download_data_form_link_download_data_form_component__WEBPACK_IMPORTED_MODULE_17__.LinkDownloadDataFormComponent, _shared_components_link_recorder_form_link_recorder_form_component__WEBPACK_IMPORTED_MODULE_18__.LinkRecorderFormComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__.BrowserAnimationsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__.MatToolbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__.MatSidenavModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__.MatDividerModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatProgressBarModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__.MatRadioModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_31__.MatCardModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_32__.ClipboardModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__.MatProgressSpinnerModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__.MatSlideToggleModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_35__.MatListModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__.MatSortModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_39__.MatChipsModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_40__.MatRippleModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_41__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_42__.MatSelectModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_43__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_44__.MatButtonModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_45__.MatTooltipModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_46__.MatSnackBarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_47__.MatAutocompleteModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_48__.MatCheckboxModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_49__.MatMenuModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbPopoverModule]
  });
})();

/***/ }),

/***/ 7075:
/*!**************************************************************!*\
  !*** ./src/app/pages/devices-page/devices-page.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevicesPageComponent: () => (/* binding */ DevicesPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3379);
/* harmony import */ var src_app_shared_services_rx_stomp_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/rx-stomp.service */ 1019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/request.service */ 5467);
/* harmony import */ var src_app_shared_services_backendmap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/backendmap.service */ 9705);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var src_app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/session.service */ 5813);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ 1757);
/* harmony import */ var _shared_components_device_card_device_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/device-card/device-card.component */ 5602);


















function DevicesPageComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "app-device-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submitInfo", function DevicesPageComponent_div_30_Template_app_device_card_submitInfo_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.onMessageEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const device_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !device_r1.isOnline && ctx_r0.showOffline);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("device", device_r1);
  }
}
const _c0 = function () {
  return [3, 5];
};
class DevicesPageComponent {
  constructor(_request, _backend, _snackBar, _session) {
    this._request = _request;
    this._backend = _backend;
    this._snackBar = _snackBar;
    this._session = _session;
    this.showError = false;
    this.showOffline = true;
    this.datacount = 0;
    this.DEVICE_DATA = [];
  }
  ngOnInit() {
    //Query list of registered devices
    this._request.sendBackendGet(this._backend.GET_DEVICES_LIST).subscribe({
      next: res => {
        let response = JSON.parse(res);
        this.infoMessage = undefined;
        this.errorMessage = undefined;
        if (response.error) {
          this.showError = true;
          this.errorMessage = response.message;
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource([]);
          console.error(response.message);
        } else {
          this.infoMessage = response.message;
          this.DEVICE_DATA = response.response;
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(this.DEVICE_DATA);
          this.datacount = this.DEVICE_DATA.length;
          if (this.datacount != 0) {
            this.dataSource.paginator = this.paginator;
          }
          console.log("info: " + this.infoMessage);
        }
      },
      error: err => {
        console.error("HTTP-Error requesting patient data: " + err);
      },
      complete: () => {
        //hide progress bar
        this._session.setEndQuery();
        this.setInfoSubscriber();
      }
    });
  }
  ngOnDestroy() {
    (0,src_app_shared_services_rx_stomp_service__WEBPACK_IMPORTED_MODULE_0__.rxStompServiceDestroy)();
  }
  getPageFromDataSource() {
    if (this.dataSource != undefined) {
      let deviceList = this.dataSource._pageData(this.DEVICE_DATA);
      return deviceList;
    }
    return [];
  }
  /**
   * Disappear the Info header after 10 seconds
   */
  setInfoSubscriber() {
    //vanish InfoMessage if any
    if (this.infoMessage !== undefined) {
      const secondsCounter = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.interval)(7 * 1000);
      this.subscriber = secondsCounter.subscribe(n => {
        this.infoMessage = undefined;
        this.subscriber.unsubscribe();
        console.log(n + " end subscriber");
      });
    } else {
      if (this.subscriber !== undefined) {
        this.subscriber.unsubscribe();
      }
    }
  }
  removeInfoMssg() {
    this.infoMessage = undefined;
    this.showError = false;
  }
  removeErrorMssg() {
    this.errorMessage = undefined;
    this.showError = false;
  }
  onMessageEvent(message) {
    this._snackBar.open(message, 'dismiss', {
      duration: 7 * 1000
    });
  }
  static #_ = this.ɵfac = function DevicesPageComponent_Factory(t) {
    return new (t || DevicesPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_backendmap_service__WEBPACK_IMPORTED_MODULE_2__.BackendmapService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__.SessionService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DevicesPageComponent,
    selectors: [["app-devices-page"]],
    viewQuery: function DevicesPageComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
      provide: src_app_shared_services_rx_stomp_service__WEBPACK_IMPORTED_MODULE_0__.RxStompService,
      useFactory: src_app_shared_services_rx_stomp_service__WEBPACK_IMPORTED_MODULE_0__.rxStompServiceFactory
    }])],
    decls: 31,
    vars: 11,
    consts: [[1, "container"], [1, "row"], [1, "col-md", "text-center"], [1, "mbox-crud-title"], [1, "material-icons"], [1, "row", 2, "height", "10px"], [1, "col"], ["aria-label", "Info messages"], ["color", "accent", 1, "mbox-info-chip", 3, "hidden", "removed"], ["matChipRemove", ""], ["color", "accent", 1, "mbox-error-chip", 3, "hidden", "removed"], [1, "col", 2, "margin-top", "5em"], [2, "text-align", "end", "margin-right", "2em"], ["title", "Show only online devices", "color", "primary", 3, "ngModel", "checked", "ngModelChange"], ["aria-hidden", "false", "aria-label", "Delete icon", 3, "hidden"], ["showFirstLastButtons", "", "aria-label", "Select page of Registered Devices", 3, "pageSizeOptions"], ["class", "row", "style", "margin-top: 0.3em;", 4, "ngFor", "ngForOf"], [1, "row", 2, "margin-top", "0.3em"], [1, "col", 3, "hidden"], [3, "device", "submitInfo"]],
    template: function DevicesPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Devices Registered in the system ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "memory");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "mat-chip-listbox", 7)(11, "mat-chip-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("removed", function DevicesPageComponent_Template_mat_chip_option_removed_11_listener() {
          return ctx.removeInfoMssg();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 9)(14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-chip-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("removed", function DevicesPageComponent_Template_mat_chip_option_removed_16_listener() {
          return ctx.removeErrorMssg();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 9)(19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 1)(22, "div", 11)(23, "div", 12)(24, "mat-slide-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DevicesPageComponent_Template_mat_slide_toggle_ngModelChange_24_listener($event) {
          return ctx.showOffline = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "sensors");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "sensors_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "mat-paginator", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, DevicesPageComponent_div_30_Template, 3, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.infoMessage == undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.infoMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx.showError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.errorMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.showOffline)("checked", ctx.showOffline);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx.showOffline);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.showOffline);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.getPageFromDataSource());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDivider, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__.MatSlideToggle, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipListbox, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipOption, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipRemove, _shared_components_device_card_device_card_component__WEBPACK_IMPORTED_MODULE_4__.DeviceCardComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 7515:
/*!****************************************************************!*\
  !*** ./src/app/pages/patients-page/patients-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PatientsPageComponent: () => (/* binding */ PatientsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _shared_components_patient_data_table_patient_data_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/patient-data-table/patient-data-table.component */ 692);




class PatientsPageComponent {
  constructor(_snackBar) {
    this._snackBar = _snackBar;
  }
  openSnackBar(message) {
    console.log(message);
    this._snackBar.open(message, 'dismiss', {
      duration: 7 * 1000
    });
  }
  static #_ = this.ɵfac = function PatientsPageComponent_Factory(t) {
    return new (t || PatientsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PatientsPageComponent,
    selectors: [["app-patients-page"]],
    decls: 11,
    vars: 0,
    consts: [[1, "container"], [1, "row"], [1, "col-md", "text-center"], [1, "mbox-crud-title"], [1, "material-icons"], [1, "col", 2, "margin-top", "5em"]],
    template: function PatientsPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Patients Registered in the system ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "personal_injury");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 1)(9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-patient-data-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_3__.MatDivider, _shared_components_patient_data_table_patient_data_table_component__WEBPACK_IMPORTED_MODULE_0__.PatientDataTableComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 3093:
/*!********************************************************************!*\
  !*** ./src/app/pages/recordings-page/recordings-page.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecordingsPageComponent: () => (/* binding */ RecordingsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var src_app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/session.service */ 5813);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _shared_components_recordings_data_table_recordings_data_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/recordings-data-table/recordings-data-table.component */ 3830);






function RecordingsPageComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", ctx_r0.activeDevice.name, ")");
  }
}
class RecordingsPageComponent {
  constructor(_snackBar, _session) {
    this._snackBar = _snackBar;
    this._session = _session;
    this.activeDevice = this._session.getSessionDeviceData();
  }
  openSnackBar(message) {
    console.log(message);
    this._snackBar.open(message, 'dismiss', {
      duration: 7 * 1000
    });
  }
  static #_ = this.ɵfac = function RecordingsPageComponent_Factory(t) {
    return new (t || RecordingsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: RecordingsPageComponent,
    selectors: [["app-recordings-page"]],
    decls: 13,
    vars: 2,
    consts: [[1, "container"], [1, "row"], [1, "col-md", "text-center"], [4, "ngIf"], [1, "mbox-crud-title"], [1, "material-icons"], [1, "col", 2, "margin-top", "5em"], [3, "device", "submitInfo"]],
    template: function RecordingsPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RecordingsPageComponent_span_4_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Recordings from Device ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "local_hotel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 1)(11, "div", 6)(12, "app-recordings-data-table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submitInfo", function RecordingsPageComponent_Template_app_recordings_data_table_submitInfo_12_listener($event) {
          return ctx.openSnackBar($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeDevice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("device", ctx._session.getSessionDeviceData());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider, _shared_components_recordings_data_table_recordings_data_table_component__WEBPACK_IMPORTED_MODULE_1__.RecordingsDataTableComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 5229:
/*!**************************************************************!*\
  !*** ./src/app/pages/sensors-page/sensors-page.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SensorsPageComponent: () => (/* binding */ SensorsPageComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_services_rx_stomp_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/rx-stomp.service */ 1019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var src_app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/session.service */ 5813);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _shared_components_sensors_data_table_sensors_data_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/sensors-data-table/sensors-data-table.component */ 261);







function SensorsPageComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", ctx_r0.activeDevice.name, ")");
  }
}
function SensorsPageComponent_app_sensors_data_table_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-sensors-data-table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submitInfo", function SensorsPageComponent_app_sensors_data_table_12_Template_app_sensors_data_table_submitInfo_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.openSnackBar($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("device", ctx_r1.activeDevice);
  }
}
class SensorsPageComponent {
  constructor(_snackBar, _session) {
    this._snackBar = _snackBar;
    this._session = _session;
    this.currentDevice = null;
    this.activeSession = false;
    this.currentDevice = this._session.getSessionDeviceData();
    if (this.currentDevice !== null) {
      this.activeDevice = this.activeDevice;
      this.activeSession = true;
    }
  }
  ngOnInit() {
    this.currentDevice = this._session.getSessionDeviceData();
    console.log(this.currentDevice);
    if (this.currentDevice != null) {
      this.activeDevice = this.currentDevice;
      console.log("active-set");
    }
  }
  openSnackBar(message) {
    console.log(message);
    this._snackBar.open(message, 'dismiss', {
      duration: 7 * 1000
    });
  }
  static #_ = this.ɵfac = function SensorsPageComponent_Factory(t) {
    return new (t || SensorsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_1__.SessionService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SensorsPageComponent,
    selectors: [["app-sensors-page"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
      provide: src_app_shared_services_rx_stomp_service__WEBPACK_IMPORTED_MODULE_0__.RxStompService,
      useFactory: src_app_shared_services_rx_stomp_service__WEBPACK_IMPORTED_MODULE_0__.rxStompServiceFactory
    }])],
    decls: 13,
    vars: 2,
    consts: [[1, "container"], [1, "row"], [1, "col-md", "text-center"], [4, "ngIf"], [1, "mbox-crud-title"], [1, "material-icons"], [1, "col", 2, "margin-top", "5em"], [3, "device", "submitInfo", 4, "ngIf"], [3, "device", "submitInfo"]],
    template: function SensorsPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SensorsPageComponent_span_4_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Sensors Configured in Device ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "sensors");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 1)(11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, SensorsPageComponent_app_sensors_data_table_12_Template, 1, 1, "app-sensors-data-table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeDevice);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._session.isSessionStarted());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider, _shared_components_sensors_data_table_sensors_data_table_component__WEBPACK_IMPORTED_MODULE_2__.SensorsDataTableComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 7982:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/bed-canvas/bed-canvas.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BedCanvasComponent: () => (/* binding */ BedCanvasComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6080);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 8128);









function BedCanvasComponent_ng_template_0_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.device.name);
  }
}
function BedCanvasComponent_ng_template_0__svg_svg_20__svg_circle_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "circle", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BedCanvasComponent_ng_template_0__svg_svg_20__svg_circle_3_Template__svg_circle_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const s_r14 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.setEditable(s_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx_r10.measureToPixels(s_r14.xLocation))("cy", ctx_r10.measureToPixels(s_r14.yLocation))("r", ctx_r10.magnifyMagnitude(s_r14.xDimension, 3));
  }
}
function BedCanvasComponent_ng_template_0__svg_svg_20__svg_text_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "text", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r17 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r11.measureToPixels(s_r17.xLocation, ctx_r11.magnifyMagnitude(s_r17.xDimension, 3)))("y", ctx_r11.measureToPixels(s_r17.yLocation, 0, ctx_r11.magnifyMagnitude(s_r17.yDimension, 3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r17.name);
  }
}
function BedCanvasComponent_ng_template_0__svg_svg_20__svg_rect_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rect", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BedCanvasComponent_ng_template_0__svg_svg_20__svg_rect_5_Template__svg_rect_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const s_r18 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.setEditable(s_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r12.measureToPixels(s_r18.xLocation))("y", ctx_r12.measureToPixels(s_r18.yLocation))("width", ctx_r12.magnifyMagnitude(s_r18.xDimension, 3))("height", ctx_r12.magnifyMagnitude(s_r18.yDimension, 3));
  }
}
function BedCanvasComponent_ng_template_0__svg_svg_20__svg_text_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "text", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r21 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r13.measureToPixels(s_r21.xLocation))("y", ctx_r13.measureToPixels(s_r21.yLocation, ctx_r13.magnifyMagnitude(s_r21.yDimension, 3 * 2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r21.name);
  }
}
function BedCanvasComponent_ng_template_0__svg_svg_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 22)(1, "text", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BedCanvasComponent_ng_template_0__svg_svg_20__svg_circle_3_Template, 1, 4, "circle", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BedCanvasComponent_ng_template_0__svg_svg_20__svg_text_4_Template, 2, 3, "text", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BedCanvasComponent_ng_template_0__svg_svg_20__svg_rect_5_Template, 1, 5, "rect", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BedCanvasComponent_ng_template_0__svg_svg_20__svg_text_6_Template, 2, 3, "text", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r6.getBedDeviceStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx_r6.getViewBoxValues());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r6.measureToPixels(ctx_r6.width, 0, 100))("y", ctx_r6.measureToPixels(ctx_r6.height, 0, 20));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.getStringBedDimensions());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.getFilteredSensorList(ctx_r6.sensorList, "FSR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.getFilteredSensorList(ctx_r6.sensorList, "FSR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.getFilteredSensorList(ctx_r6.sensorList, "ACC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.getFilteredSensorList(ctx_r6.sensorList, "ACC"));
  }
}
function BedCanvasComponent_ng_template_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30)(1, "span")(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p")(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "x Location:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "y Location:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " active?: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BedCanvasComponent_ng_template_0_div_25_Template_mat_icon_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r22.sendDeactiveSensor(ctx_r22.currentEditable));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "toggle_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BedCanvasComponent_ng_template_0_div_25_Template_mat_icon_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r24.sendActiveSensor(ctx_r24.currentEditable));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "toggle_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "flip_camera_android");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.currentEditable.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.currentEditable.xLocation, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.currentEditable.yLocation, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r9.currentEditable.active || ctx_r9.updateEvent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r9.currentEditable.active || ctx_r9.updateEvent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r9.updateEvent);
  }
}
function BedCanvasComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sensor Distribution: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BedCanvasComponent_ng_template_0_span_3_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BedCanvasComponent_ng_template_0_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const modal_r4 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r4.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7)(6, "div", 8)(7, "div", 9)(8, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "check_box_outline_blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " ACC-Sensor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "radio_button_unchecked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " FSR-Sensor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "radio_button_unchecked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " PTZ-Sensor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13)(19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BedCanvasComponent_ng_template_0__svg_svg_20_Template, 7, 9, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-menu", null, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, BedCanvasComponent_ng_template_0_div_25_Template, 21, 6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20)(27, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BedCanvasComponent_ng_template_0_Template_button_click_27_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const modal_r4 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r4.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.device);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.getBedDeviceStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.renderReady);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentEditable);
  }
}
function BedCanvasComponent_img_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BedCanvasComponent_img_4_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r28.showModal(_r0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.picture_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function BedCanvasComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BedCanvasComponent_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r30.showModal(_r0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "sensors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Sensor map ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class BedCanvasComponent {
  constructor(modalService) {
    this.modalService = modalService;
    /**
     * Path of the picture to show
     */
    this.picture_path = "assets/images/mbox_sleep.png";
    /**
     * Configures how the launcher will be rendered
     * possible values: picture (default) | button
     */
    this.mode = "picture";
    this.submitObject = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.width = 110;
    this.height = 190; //mm = (pixels * 25.4) / dpi
    this.bedStyle = {
      "width": "110mm",
      "height": "190mm",
      "min-width": "110mm",
      "min-height": "190mm",
      "z-index": 2
    };
    this.viewBoxStyle = {
      "width": "110mm",
      "height": "190mm",
      "min-width": "110mm",
      "min-height": "190mm"
    };
    this.renderReady = false;
    this.updateEvent = false;
    this.sendActiveSensor = sensor => {
      console.log("click!");
      console.log(sensor);
    };
    this.sendDeactiveSensor = sensor => {
      console.log("click!");
      console.log(sensor);
    };
    //config.
  }

  ngOnChanges(changes) {
    // changes.prop contains the old and the new value...
    let device = changes['device'];
    let list = changes['sensorList'];
    if (device) {
      this.width = device.currentValue.xBedDimension;
      this.height = device.currentValue.yBedDimension;
    } else if (list) {
      console.log("render ready");
      console.log(this.sensorList);
      this.renderReady = true;
    }
  }
  print(value) {
    console.log("print");
    console.log(value);
  }
  showModal(content) {
    this.modalService.open(content, {
      modalDialogClass: 'bedmap-modal',
      scrollable: true,
      centered: true,
      size: 'lg'
    });
  }
  getFilteredSensorList(sensorList, type) {
    const fsrList = sensorList.filter(sensor => sensor.transducerType.toUpperCase() == type.toUpperCase());
    return fsrList;
  }
  getStringBedDimensions() {
    const x = this.device ? this.device.xBedDimension : this.width.toString();
    const y = this.device ? this.device.yBedDimension : this.height.toString();
    const unit = this.device ? this.device.bedDimensionUnits : "cm";
    let label = "" + x + " x " + y + " " + unit;
    return label;
  }
  /**
   * calculate the proportion of pixels to maintain a scale in the bed picture
   * using the formula:
   * mm = (pixels * 25.4) / dpi
   * @param value the value to convert
   * @param add  value to add
   * @param substract value to substract
   * @returns
   */
  measureToPixels(value, add = 0, substract = 0) {
    const dpi = window.devicePixelRatio * 96;
    //console.log("dpi");
    //console.log(dpi);
    const pixel = value * dpi / 25.4 + add - substract;
    //console.log("pixel");
    //console.log(pixel);
    return pixel;
  }
  magnifyMagnitude(value, times) {
    let result = value;
    result = result * times;
    return result;
  }
  setEditable(sensor) {
    this.currentEditable = sensor;
  }
  getBedDeviceStyle() {
    if (this.device) {
      const width = this.device.xBedDimension?.toString().concat("mm");
      const height = this.device.yBedDimension?.toString().concat("mm");
      const style = {
        "width": width,
        "height": height,
        "min-width": width,
        "min-height": height
      };
      //console.log("applying style");
      //console.log(style);
      return style;
    }
    console.log("default style");
    return this.bedStyle;
  }
  getViewBoxValues() {
    if (this.device) {
      var width = this.device.xBedDimension ? Number(this.device.xBedDimension) : 110;
      var height = this.device.yBedDimension ? Number(this.device.yBedDimension) : 190;
      //apply pixelation
      width = this.measureToPixels(width);
      height = this.measureToPixels(height);
      const viewbox = "0,0,".concat(width.toString()).concat(",").concat(height.toString());
      console.log("applying viewbox");
      console.log(viewbox);
      return viewbox;
    }
    console.log("default style");
    return this.viewBoxStyle;
  }
  static #_ = this.ɵfac = function BedCanvasComponent_Factory(t) {
    return new (t || BedCanvasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BedCanvasComponent,
    selectors: [["app-bed-canvas"]],
    inputs: {
      picture_path: "picture_path",
      mode: "mode",
      device: "device",
      sensorList: "sensorList"
    },
    outputs: {
      submitObject: "submitObject"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 6,
    vars: 2,
    consts: [["content", ""], ["mat-card-sm-image", "", "width", "100px", "height", "90px", "alt", "Product Picture", 3, "src", "click", 4, "ngIf"], ["mat-raised-button", "", "type", "button", "class", "btn del-icon-button mbox_download", "title", "Connect to device", 3, "click", 4, "ngIf"], [1, "modal-header"], [1, "modal-title"], [4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "row", "justify-content-center"], [1, "col", "text-center"], [2, "color", "rgb(109, 109, 233)"], [2, "color", "rgb(236, 100, 59)"], [2, "color", "rgb(59, 236, 118)"], [1, "row", "justify-content-center", 2, "position", "relative"], [1, "d-flex", "mbox_bedmap", 3, "ngStyle"], ["class", "mbox_bedmap", 3, "ngStyle", 4, "ngIf"], ["src", "assets/images/bed_map3.png", "width", "100%", "height", "100%", "alt", "bed_map_background", 1, "backbedimage"], ["svgmap", ""], ["menu", "matMenu"], ["style", "font-size: small;margin: 1em;", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "mbox_bedmap", 3, "ngStyle"], ["fill", "red", "transform", "rotate(0 0,0)"], ["stroke", "rgb(236, 100, 59)", "stroke-width", "4", "fill", "rgb(236, 100, 59)", 3, "matMenuTriggerFor", "click", 4, "ngFor", "ngForOf"], ["fill", "black", "style", "font: bold 18px sans-serif;", 4, "ngFor", "ngForOf"], ["rx", "0", "ry", "0", "style", "stroke:rgb(109, 109, 233);stroke-width:2;opacity:0.5", 3, "matMenuTriggerFor", "click", 4, "ngFor", "ngForOf"], ["stroke", "rgb(236, 100, 59)", "stroke-width", "4", "fill", "rgb(236, 100, 59)", 3, "matMenuTriggerFor", "click"], ["fill", "black", 2, "font", "bold 18px sans-serif"], ["rx", "0", "ry", "0", 2, "stroke", "rgb(109, 109, 233)", "stroke-width", "2", "opacity", "0.5", 3, "matMenuTriggerFor", "click"], [2, "font-size", "small", "margin", "1em"], [1, "mbox_actionable"], [2, "color", "#ff4081", "padding-top", "7px", 3, "hidden", "click"], [2, "color", "gray", "padding-top", "7px", 3, "hidden", "click"], [1, "loader", 3, "hidden"], ["mat-card-sm-image", "", "width", "100px", "height", "90px", "alt", "Product Picture", 3, "src", "click"], ["mat-raised-button", "", "type", "button", "title", "Connect to device", 1, "btn", "del-icon-button", "mbox_download", 3, "click"], ["aria-hidden", "false", "disabled", "", "aria-label", "connect icon"]],
    template: function BedCanvasComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BedCanvasComponent_ng_template_0_Template, 29, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BedCanvasComponent_img_4_Template, 1, 1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BedCanvasComponent_button_5_Template, 4, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode === "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode === "button");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardSmImage, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuTrigger],
    styles: ["div.mbox_bedmap[_ngcontent-%COMP%]{\n    position: absolute;\n    top: 2px;\n    z-index: 5;\n}\n\nimg.backbedimage[_ngcontent-%COMP%]{\n    object-fit: fill; \n    opacity: 0.5;\n    position: absolute; \n    z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYmVkLWNhbnZhcy9iZWQtY2FudmFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZiIsInNvdXJjZXNDb250ZW50IjpbImRpdi5tYm94X2JlZG1hcHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAycHg7XG4gICAgei1pbmRleDogNTtcbn1cblxuaW1nLmJhY2tiZWRpbWFnZXtcbiAgICBvYmplY3QtZml0OiBmaWxsOyBcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 4148:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/del-patient-button/del-patient-button.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DelPatientButtonComponent: () => (/* binding */ DelPatientButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6080);
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/request.service */ 5467);
/* harmony import */ var _services_backendmap_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/backendmap.service */ 9705);
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/session.service */ 5813);
/* harmony import */ var _services_global_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global-util.service */ 2735);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 702);










function DelPatientButtonComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Delete Patient ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "personal_injury");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DelPatientButtonComponent_ng_template_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.modalClose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " The following Registered Patient & Data will be erased: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 10)(15, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DelPatientButtonComponent_ng_template_0_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.modalClose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DelPatientButtonComponent_ng_template_0_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.requestDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r1.patient.name, "(", ctx_r1.patient.uuid, ") ");
  }
}
class DelPatientButtonComponent {
  constructor(config, modalService, _request, _backend, _session, _util) {
    this.modalService = modalService;
    this._request = _request;
    this._backend = _backend;
    this._session = _session;
    this._util = _util;
    this.submitInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.warnMessage = "Warning";
    this.errorEvent = false;
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  modalOpen(content) {
    this.modalService.open(content, {
      centered: true,
      size: 'lg'
    });
  }
  modalClose() {
    this.modalService.dismissAll('finished');
  }
  /**
   * Send a REST delete
   */
  requestDelete() {
    //show query bar
    this._session.setShowQuery();
    //send REST request
    this._request.sendBackendDelete(this._backend.DELETE_PATIENT_URL(this.patient.uuid)).subscribe({
      next: res => {
        let response = JSON.parse(res);
        if (response.error) {
          this.errorEvent = true;
          this.warnMessage = response.message;
          console.error(response.message);
        } else {
          this.submitInfo.emit(response.message);
          this.modalService.dismissAll('finished');
        }
      },
      error: err => {
        this.errorEvent = true;
        this.warnMessage = err;
        console.log("HTTP-Error deleting patient data: " + err);
      },
      complete: () => {
        this._session.setEndQuery();
      }
    });
  }
  static #_ = this.ɵfac = function DelPatientButtonComponent_Factory(t) {
    return new (t || DelPatientButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_request_service__WEBPACK_IMPORTED_MODULE_0__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_backendmap_service__WEBPACK_IMPORTED_MODULE_1__.BackendmapService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_session_service__WEBPACK_IMPORTED_MODULE_2__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_global_util_service__WEBPACK_IMPORTED_MODULE_3__.GlobalUtilService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: DelPatientButtonComponent,
    selectors: [["app-del-patient-button"]],
    inputs: {
      patient: "patient"
    },
    outputs: {
      submitInfo: "submitInfo"
    },
    decls: 5,
    vars: 0,
    consts: [["deletePatient", ""], ["mat-icon-button", "", "color", "primary", "matTooltip", "delete patient", "aria-label", "delete patient icon button with a x icon", 2, "color", "#c04d4d", 3, "click"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-12", "text-center"], [1, "mbox-warn-mssg"], [1, "modal-footer"], [1, "btn", "btn-outline-dark", 3, "click"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]],
    template: function DelPatientButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DelPatientButtonComponent_ng_template_0_Template, 19, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DelPatientButtonComponent_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.modalOpen(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 8142:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/del-sensor-button/del-sensor-button.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DelSensorButtonComponent: () => (/* binding */ DelSensorButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6080);
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/session.service */ 5813);
/* harmony import */ var _services_global_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/global-util.service */ 2735);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 702);








function DelSensorButtonComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Delete Sensor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "sensors_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DelSensorButtonComponent_ng_template_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.modalClose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " The following Sensor will be removed from the Device: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10)(17, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DelSensorButtonComponent_ng_template_0_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.modalClose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DelSensorButtonComponent_ng_template_0_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.requestDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r1.sensor.transducerType, "(", ctx_r1.sensor.name, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.additional_message, " ");
  }
}
class DelSensorButtonComponent {
  constructor(config, modalService, _session, _util) {
    this.modalService = modalService;
    this._session = _session;
    this._util = _util;
    this.submitInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.confirmDeletion = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.warnMessage = "Warning";
    this.additional_message = "";
    this.errorEvent = false;
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnChanges(changes) {
    // changes.prop contains the old and the new value...
    let confirmEvent = changes['success'];
    let error = changes['error'];
    if (confirmEvent || error) {
      this.modalClose();
    }
  }
  modalOpen(content) {
    this.modalService.open(content, {
      centered: true,
      size: 'lg'
    });
  }
  modalClose() {
    this.modalService.dismissAll('finished');
    this._session.setEndQuery();
  }
  /**
   * Send a REST delete
   */
  requestDelete() {
    //show query bar
    this._session.setShowQuery();
    //send STOMP request from parent
    this.confirmDeletion.next(this.sensor);
  }
  static #_ = this.ɵfac = function DelSensorButtonComponent_Factory(t) {
    return new (t || DelSensorButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_global_util_service__WEBPACK_IMPORTED_MODULE_1__.GlobalUtilService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DelSensorButtonComponent,
    selectors: [["app-del-sensor-button"]],
    inputs: {
      sensor: "sensor",
      success: "success",
      error: "error"
    },
    outputs: {
      submitInfo: "submitInfo",
      confirmDeletion: "confirmDeletion"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    decls: 5,
    vars: 0,
    consts: [["deleteSensor", ""], ["mat-icon-button", "", "color", "primary", "matTooltip", "delete sensor", "aria-label", "delete sensor icon button with a x icon", 2, "color", "#c04d4d", 3, "click"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-12", "text-center"], [1, "mbox-warn-mssg"], [1, "modal-footer"], [1, "btn", "btn-outline-dark", 3, "click"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]],
    template: function DelSensorButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DelSensorButtonComponent_ng_template_0_Template, 21, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DelSensorButtonComponent_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.modalOpen(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 5602:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/device-card/device-card.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeviceCardComponent: () => (/* binding */ DeviceCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3379);
/* harmony import */ var _services_rx_stomp_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/rx-stomp.service */ 1019);
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/session.service */ 5813);
/* harmony import */ var _services_global_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global-util.service */ 2735);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/clipboard */ 4362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _bed_canvas_bed_canvas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bed-canvas/bed-canvas.component */ 7982);
/* harmony import */ var _recording_controls_recording_controls_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recording-controls/recording-controls.component */ 3940);














class DeviceCardComponent {
  constructor(_rxStomp, _session, _util) {
    this._rxStomp = _rxStomp;
    this._session = _session;
    this._util = _util;
    this.submitInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    /**
     * The number of failed attempts before quiting auto-query device
     */
    this.queryCounterThreshold = 1;
    this.actionControls = false;
    this.recordingInProgress = false;
    this.queryInProgress = false;
    this.brokerFail = false;
  }
  ngOnInit() {
    this.stompSubscriber = this._rxStomp.connected$.subscribe(state => {
      //assign flag
      this.brokerFail = false;
      //create subscription
      this.queueSubscription = this._rxStomp.watch('/topic/'.concat(this.device.uuid)).subscribe(message => {
        console.log('message recieved:');
        console.log(message);
        try {
          const response = JSON.parse(message.body);
          const params = response.PARAMS;
          //ONLINE_SIGNAL
          if (response.ACTION == 'ONLINE_SIGNAL') {
            this.device.isOnline = params == this.device.uuid;
          } else
            //CONNECTION_TOKEN
            /*if(response.ACTION == 'CONNECTION_TOKEN'){
              this.device.token = params;
            }else/** */
            //RECORDING_STATUS
            if (response.ACTION == 'RECORDING_STATUS') {
              this.recordingInProgress = params;
              this.device.isOnline = true;
              console.log(params);
            } else {
              console.log('message not processed:');
              console.log(message);
            }
          //destroys query subscriber to stop sending alive request
          if (this.querySubscriber !== undefined) {
            this.querySubscriber.unsubscribe();
            this.queryInProgress = false;
          }
        } catch (err) {
          console.error('Error processing queue message:');
          console.error(err);
        }
      });
      //subscribe the online topic to identify late online devices
      this.newOnlineSubscription = this._rxStomp.watch('/topic/online_devices').subscribe(message => {
        console.log('report_online message recieved:');
        console.log(message);
        try {
          const newDevice = JSON.parse(message.body);
          this.device.isOnline = newDevice.uuid == this.device.uuid;
        } catch (err) {
          console.error('Error processing report_online message:');
          console.error(err);
        }
      });
      //ping the device
      this.pingDevice(this.device);
      this.requestConnectionToken(this.device);
    });
  }
  ngOnChanges(changes) {
    // changes.prop contains the old and the new value...
    let deviceEvent = changes['device'];
    if (deviceEvent) {
      let current = changes['device'].currentValue;
      if (current !== undefined) {
        this.device = current;
      }
    }
  }
  ngAfterContentInit() {
    const secondsCounter = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.interval)(30 * 1000);
    this.aliveSubscriber = secondsCounter.subscribe(n => {
      if (this.device !== undefined) {
        console.log("checking device");
        this.pingDevice(this.device);
      } else {
        console.log("device-undefined");
      }
      if (n >= this.queryCounterThreshold) {
        this.aliveSubscriber.unsubscribe();
        console.log('quiting auto-ping. Number of attempts: ' + (n + 1));
      }
    });
  }
  ngOnDestroy() {
    //unbind the subscriber
    this.aliveSubscriber.unsubscribe();
    this.queueSubscription.unsubscribe();
    this.stompSubscriber.unsubscribe();
    this.newOnlineSubscription.unsubscribe();
  }
  pingDevice(device) {
    //check connection
    if (this._rxStomp.connected()) {
      const command = this.recordingInProgress ? JSON.stringify({
        ACTION: 'RECORDING_STATUS',
        PARAMS: ''
      }) : JSON.stringify({
        ACTION: 'ONLINE_SIGNAL',
        PARAMS: ''
      });
      this._rxStomp.publish({
        destination: "/queue/".concat(this.device.uuid),
        body: command
      });
      this.startQueryCounter(this.device.uuid);
    } else {
      this.submitInfo.emit("Failed Connecting websocket-Server ");
    }
  }
  requestRecordingStatus(device) {
    //check connection
    if (this._rxStomp.connected()) {
      const command = JSON.stringify({
        ACTION: 'RECORDING_STATUS',
        PARAMS: ''
      });
      this._rxStomp.publish({
        destination: "/queue/".concat(device.uuid),
        body: command
      });
      this.startQueryCounter(this.device.uuid);
    } else {
      this.submitInfo.emit("Failed Connecting websocket-Server ");
    }
  }
  requestConnectionToken(device) {
    //check connection
    if (this._rxStomp.connected()) {
      const command = JSON.stringify({
        ACTION: 'CONNECTION_TOKEN',
        PARAMS: ''
      });
      this._rxStomp.publish({
        destination: "/queue/".concat(device.uuid),
        body: command
      });
    } else {
      this.submitInfo.emit("Failed Connecting websocket-Server ");
    }
  }
  startQueryCounter(queueName = '') {
    this.queryInProgress = true;
    const queryCounter = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.interval)(5 * 1000);
    this.querySubscriber = queryCounter.subscribe(n => {
      this.queryInProgress = false;
      this.querySubscriber.unsubscribe();
      console.log('time-off: no response from device:' + queueName);
      this.device.isOnline = false;
      this.submitInfo.emit('Device ' + this.device.uuid + ' is offline');
    });
  }
  showActionControls() {
    this.requestRecordingStatus(this.device);
    this.actionControls = this.recordingInProgress ? this.recordingInProgress : !this.actionControls;
  }
  toRecordings() {
    this.connectDevice();
    this._session.toPath('recordings');
  }
  connectDevice() {
    this._session.startSession(this.device, this._rxStomp);
    //this._router.navigate([ {outlets: {primary:'connecteddevice'} } ])
  }

  startRecording() {
    if (this._rxStomp.connected()) {
      const command = JSON.stringify({
        ACTION: 'START_RECORDING',
        PARAMS: ''
      });
      this._rxStomp.publish({
        destination: "/queue/".concat(this.device.uuid),
        body: command
      });
      this.requestRecordingStatus(this.device);
    } else {
      this.submitInfo.emit("Failed Connecting websocket-Server ");
    }
  }
  stopRecording() {
    if (this._rxStomp.connected()) {
      const command = JSON.stringify({
        ACTION: 'STOP_RECORDING',
        PARAMS: ''
      });
      this._rxStomp.publish({
        destination: "/queue/".concat(this.device.uuid),
        body: command
      });
      this.requestRecordingStatus(this.device);
    } else {
      this.submitInfo.emit("Failed Connecting websocket-Server ");
    }
  }
  showRecordingInfo() {}
  static #_ = this.ɵfac = function DeviceCardComponent_Factory(t) {
    return new (t || DeviceCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_rx_stomp_service__WEBPACK_IMPORTED_MODULE_0__.RxStompService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_session_service__WEBPACK_IMPORTED_MODULE_1__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_global_util_service__WEBPACK_IMPORTED_MODULE_2__.GlobalUtilService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DeviceCardComponent,
    selectors: [["app-device-card"]],
    inputs: {
      device: "device"
    },
    outputs: {
      submitInfo: "submitInfo"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
    decls: 58,
    vars: 29,
    consts: [[1, "mbox-device-card", 2, "margin-bottom", "0.5em"], ["type", "button", "title", "copy uuid", 1, "btn", "copy-btn", 3, "cdkCopyToClipboard"], ["aria-hidden", "false", "aria-label", "copy icon"], [1, "mbox_device_icon"], ["mode", "picture"], [2, "list-style-type", "none", "color", "lightslategray"], [3, "hidden"], [1, "mbox_action_control", 3, "hidden"], [3, "device", "isRecording", "startEvent", "stopEvent"], [2, "text-align", "left", "width", "50%"], ["mat-raised-button", "", "type", "button", "title", "Connect to device", 1, "btn", "del-icon-button", "mbox_download", 3, "disabled", "click"], ["aria-hidden", "false", "disabled", "", "aria-label", "connect icon"], [2, "text-align", "right", "width", "100%", "padding", "1em"], ["mat-raised-button", "", "type", "button", "title", "Connect to device", 1, "btn", "del-icon-button", "mbox_configure", 3, "hidden", "disabled", "click"], ["mat-raised-button", "", "type", "button", "title", "Connect to device", 1, "btn", "del-icon-button", "mbox_configure", 2, "margin-left", "5px", 3, "hidden", "disabled", "click"], ["aria-hidden", "false", "aria-label", "Check device"], ["mat-raised-button", "", "type", "button", "title", "Connect to device", 1, "btn", "del-icon-button", 2, "margin-left", "5px", 3, "hidden", "disabled", "ngClass", "click"], [2, "text-align", "right"], [2, "margin-right", "2em", "color", "green", 3, "hidden"], ["aria-hidden", "false", "aria-label", "online", 1, "mbox_query_animation"], [2, "margin-right", "2em", 3, "hidden"], ["aria-hidden", "false", "aria-label", "offline", 3, "hidden"], ["aria-hidden", "false", "aria-label", "query in progress", 1, "mbox_query_animation", 3, "hidden"]],
    template: function DeviceCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-header")(2, "mat-card-title-group")(3, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 1)(6, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "content_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-card-content")(9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "app-bed-canvas", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ul", 5)(14, "li", 6)(15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Patient: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "li", 6)(19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Bed: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 7)(23, "app-recording-controls", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("startEvent", function DeviceCardComponent_Template_app_recording_controls_startEvent_23_listener() {
          return ctx.startRecording();
        })("stopEvent", function DeviceCardComponent_Template_app_recording_controls_stopEvent_23_listener() {
          return ctx.stopRecording();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-card-actions")(25, "div", 9)(26, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DeviceCardComponent_Template_button_click_26_listener() {
          return ctx.toRecordings();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "folder_zip");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, " Download data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 12)(31, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DeviceCardComponent_Template_button_click_31_listener() {
          return ctx.connectDevice();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "settings_remote");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, " Configure device ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DeviceCardComponent_Template_button_click_35_listener() {
          return ctx.pingDevice(ctx.device);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "connect_without_contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, " Check device ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DeviceCardComponent_Template_button_click_39_listener() {
          return ctx.showActionControls();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "radio_button_checked");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, " Recording ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "mat-card-footer", 17)(45, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, " online ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "router");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](51, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "sensors_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "mat-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "sensors");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "cloud_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.device.uuid, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cdkCopyToClipboard", ctx.device.uuid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.device.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx.device.patientDto);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.device.patientDto.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx.device.bedDimensionUnits);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"]("", ctx.device.xBedDimension, " x ", ctx.device.yBedDimension, " - ", ctx.device.bedDimensionUnits, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx.actionControls);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("device", ctx.device)("isRecording", ctx.recordingInProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.actionControls);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx.device.isOnline)("disabled", !ctx.device.isOnline || ctx.actionControls);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.device.isOnline)("disabled", ctx.queryInProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx.device.isOnline)("disabled", ctx.device.isRecording)("ngClass", ctx.actionControls ? "mbox_recording_active" : "mbox_recording");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx.device.isOnline);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.device.isOnline);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" last-online: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](51, 26, ctx.device.lastOnline, "M/d/yy, h:mm a"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.queryInProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx.queryInProgress || ctx.recordingInProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx.brokerFail);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardFooter, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitleGroup, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__.CdkCopyToClipboard, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _bed_canvas_bed_canvas_component__WEBPACK_IMPORTED_MODULE_3__.BedCanvasComponent, _recording_controls_recording_controls_component__WEBPACK_IMPORTED_MODULE_4__.RecordingControlsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
    styles: ["div.mbox_device_icon[_ngcontent-%COMP%]{\n    border: 2px solid #6c757d;\n    border-radius: 25px;\n    padding: 0.5em;\n    margin-left: 1em;\n    margin-right: 1.5em;\n    float: left;\n    box-shadow: 2px 2px;\n}\n.mbox_action_control[_ngcontent-%COMP%]{\n    text-align: center !important;\n    position: absolute !important;\n    top: 15% !important;\n    right: 10% !important; \n    width: 200px;\n    background-color: white;\n}\n.mbox_action_control[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  cursor: pointer;\n}\n\nimg.mbox_rec_controlaction[_ngcontent-%COMP%]{\n    margin-left: 20px;\n    animation: _ngcontent-%COMP%_blink 2s steps(2, end) infinite;\n}\n\nmat-icon.mbox_query_animation[_ngcontent-%COMP%]{\n  color: green;\n  animation: _ngcontent-%COMP%_blink 2s steps(2, end) infinite;\n}\n\n@keyframes _ngcontent-%COMP%_blink {\n    0% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n}\n\nbutton.mbox_recording[_ngcontent-%COMP%]{\n  background-color: cadetblue;\n}\nbutton.mbox_recording_active[_ngcontent-%COMP%]{\n  background-color: silver;\n}\n\nbutton.mbox_configure[_ngcontent-%COMP%]{\n  background-color: gainsboro;\n}\n\nbutton.mbox_download[_ngcontent-%COMP%]{\n  background-color: antiquewhite;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGV2aWNlLWNhcmQvZGV2aWNlLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsMENBQTBDO0FBQzlDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDBDQUEwQztBQUM1Qzs7QUFFQTtJQUNJO01BQ0UsVUFBVTtJQUNaO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7SUFDQTtNQUNFLFVBQVU7SUFDWjtBQUNKOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYubWJveF9kZXZpY2VfaWNvbntcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNmM3NTdkO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHg7XG59XG4ubWJveF9hY3Rpb25fY29udHJvbHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICB0b3A6IDE1JSAhaW1wb3J0YW50O1xuICAgIHJpZ2h0OiAxMCUgIWltcG9ydGFudDsgXG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLm1ib3hfYWN0aW9uX2NvbnRyb2wgaW1ne1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmltZy5tYm94X3JlY19jb250cm9sYWN0aW9ue1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGFuaW1hdGlvbjogYmxpbmsgMnMgc3RlcHMoMiwgZW5kKSBpbmZpbml0ZTtcbn1cblxubWF0LWljb24ubWJveF9xdWVyeV9hbmltYXRpb257XG4gIGNvbG9yOiBncmVlbjtcbiAgYW5pbWF0aW9uOiBibGluayAycyBzdGVwcygyLCBlbmQpIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuYnV0dG9uLm1ib3hfcmVjb3JkaW5ne1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XG59XG5idXR0b24ubWJveF9yZWNvcmRpbmdfYWN0aXZle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XG59XG5cbmJ1dHRvbi5tYm94X2NvbmZpZ3VyZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xufVxuXG5idXR0b24ubWJveF9kb3dubG9hZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xufVxuXG4gIFxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 2636:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/edit-device-form/edit-device-form.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditDeviceFormComponent: () => (/* binding */ EditDeviceFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 3379);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5043);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _services_rx_stomp_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/rx-stomp.service */ 1019);
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/request.service */ 5467);
/* harmony import */ var _services_backendmap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/backendmap.service */ 9705);
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/session.service */ 5813);
/* harmony import */ var _services_global_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/global-util.service */ 2735);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ 1757);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/autocomplete */ 9892);
/* harmony import */ var _bed_canvas_bed_canvas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bed-canvas/bed-canvas.component */ 7982);























function EditDeviceFormComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("(", ctx_r0.device.name, ")");
  }
}
function EditDeviceFormComponent_mat_option_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", type_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](type_r6);
  }
}
function EditDeviceFormComponent_mat_option_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onSelectionChange", function EditDeviceFormComponent_mat_option_61_Template_mat_option_onSelectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.setPatient($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const patient_r7 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", patient_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r4.stringifyPatientOption(patient_r7), " ");
  }
}
function EditDeviceFormComponent_option_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", unit_r10.viewValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](unit_r10.value);
  }
}
class EditDeviceFormComponent {
  constructor(_rxStomp, _formBuilder, _request, _backend, _session, _util) {
    this._rxStomp = _rxStomp;
    this._formBuilder = _formBuilder;
    this._request = _request;
    this._backend = _backend;
    this._session = _session;
    this._util = _util;
    this.submitInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.showError = false;
    this.errorEvent = false;
    this.isNewDevice = false;
    this.brokerFail = false;
    this.PATIENT_DATA = [];
    this.patientSelectorFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl();
    this.isPatientAssigned = true;
    this.typesFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl();
    this.deviceTypes = ["bed"];
    if (_session.isSessionStarted()) {
      this.device = this._session.getSessionDeviceData();
    } else {
      this._session.toHome();
    }
  }
  ngOnInit() {
    console.log(this.device);
    this.getPatientData();
    this.initDeviceForm();
    this.stompSubscriber = this._rxStomp.connected$.subscribe(state => {
      console.log('state');
      console.log(state);
      //assign flag
      this.brokerFail = false;
      const uuid = this.device ? this.device.uuid : '';
      //create subscription
      this.queueSubscription = this._rxStomp.watch('/topic/'.concat(uuid)).subscribe(message => {
        console.log('message recieved:');
        console.log(message);
        try {
          const response = JSON.parse(message.body);
          const params = response.PARAMS;
          //ONLINE_SIGNAL
          if (response.ACTION == 'ONLINE_SIGNAL') {
            if (this.device != null) {
              this.device.isOnline = params == uuid;
            }
          } else {
            console.log('message not processed:');
            console.log(message);
          }
        } catch (err) {
          console.error('Error processing queue message:');
          console.error(err);
        }
      });
    });
  }
  ngOnDestroy() {
    //unbind the subscriber
    if (this.queueSubscription !== undefined) {
      this.queueSubscription.unsubscribe();
    }
    if (this.queueSubscription !== undefined) {
      this.stompSubscriber.unsubscribe();
    }
  }
  ngOnChanges(changes) {
    // changes.prop contains the old and the new value...
    let deviceEvent = changes['device'];
    if (deviceEvent) {
      let current = changes['device'].currentValue;
      if (current !== undefined) {
        this.initDeviceForm();
      }
      this.isNewDevice = false;
    }
  }
  initDeviceForm() {
    if (this.device) {
      this.isNewDevice = false;
      //autocomplete formControls
      this.patientSelectorFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.device.patientDto.alias);
      this.typesFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.device.type);
      //Form group form controls
      this.deviceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
        uuid: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl({
          value: this.device.uuid,
          disabled: true
        }),
        type: this.typesFC,
        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.device.name),
        xBedDimension: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.device.xBedDimension),
        yBedDimension: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.device.yBedDimension),
        bedDimensionUnits: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.device.bedDimensionUnits),
        patient_uuid: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.device.patientUuid),
        patientDto: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.device.patientDto),
        patient: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.device.patientDto)
      });
    } else {
      this.isNewDevice = true;
      this.deviceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
        uuid: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
        type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
        xBedDimension: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
        yBedDimension: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
        bedDimensionUnits: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('centimeters'),
        patient_uuid: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
        patientDto: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
        patient: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
      });
    } //else
  }
  /**
   * Query the Patient data registered in the server
   */
  getPatientData() {
    //Query data
    this._request.sendBackendGet(this._backend.GET_PATIENT_DATA).subscribe({
      next: res => {
        let response = JSON.parse(res);
        this.infoMessage = undefined;
        this.errorMessage = undefined;
        if (!response.error) {
          this.infoMessage = response.message;
          this.PATIENT_DATA = response.response;
          this.patientDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(this.PATIENT_DATA);
          //set value for current patient
          this.patientSelectorFC.setValue(this.device?.patientDto.name, {
            emitEvent: true
          });
          //autocomplete for patient list
          this.filteredPatients = this.patientSelectorFC.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(value => this._filterPatient(value)));
          console.log("info: " + this.infoMessage);
        } else {
          this.showError = true;
          this.errorMessage = response.message;
          this.patientDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource([]);
          console.log("error: " + this.infoMessage);
        }
      },
      error: err => {
        console.error("HTTP-Error requesting patient data: " + err);
      },
      complete: () => {
        //hide progress bar
        this._session.setEndQuery();
        this.setInfoSubscriber();
      }
    });
  }
  _filterPatient(value) {
    try {
      const filterValue = value.toLowerCase();
      this.patientDataSource.filter = value;
      return this.patientDataSource.filteredData;
    } catch (err) {
      return this.patientDataSource.data;
    }
  }
  actualSubmit(data) {
    this.errorEvent = false;
    this._session.setShowQuery();
    this._request.sendBackendPut(this._backend.PUT_DEVICE_DATA, data).subscribe({
      next: res => {
        let response = JSON.parse(res);
        if (response.error) {
          this.showError = true;
          this.errorMessage = response.message;
          console.error(response.message);
        } else {
          this.submitInfo.emit(response.message);
          //send sync order to device
          const uuid = this.device ? this.device.uuid : '';
          if (this._rxStomp.connected()) {
            const command = JSON.stringify({
              ACTION: 'SYNC_DEVICE',
              PARAMS: ''
            });
            this._rxStomp.publish({
              destination: "/queue/".concat(uuid),
              body: command
            });
          } else {
            this.showError = true;
            this.errorMessage = "Failed Connecting websocket-Server";
          }
        }
      },
      error: err => {
        this.showError = true;
        this.errorMessage = err;
        console.log("HTTP-Error requesting patient data: " + err);
      },
      complete: () => {
        this._session.setEndQuery();
      }
    });
  }
  stringifyPatientOption(patient) {
    if (typeof patient === "string") {
      return patient;
    } else {
      const alias = patient ? patient.alias ? patient.alias : patient.name : undefined;
      return alias;
    }
  }
  setPatient(option) {
    if (option.source.value) {
      const patient = option.source.value;
      const patient_uuid = patient.uuid;
      //restricted patient data is assigned to the device to promote privacy
      const patientDto = {
        uuid: patient_uuid,
        name: patient.alias
      };
      let patientControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(patientDto);
      let uuidControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(patient_uuid);
      this.deviceForm.setControl("patientDto", patientControl, {
        emitEvent: true
      });
      this.deviceForm.setControl("patient_uuid", uuidControl, {
        emitEvent: true
      });
      this.deviceForm.setControl("patient", uuidControl, {
        emitEvent: true
      });
    }
  }
  onSubmit() {
    if (!this.deviceForm.invalid) {
      let data = this.deviceForm.getRawValue();
      this.actualSubmit(data);
    }
  }
  removeInfoMssg() {
    this.infoMessage = undefined;
    this.showError = false;
  }
  removeErrorMssg() {
    this.errorMessage = undefined;
    this.showError = false;
  }
  resetForm() {
    this.initDeviceForm();
    this.patientSelectorFC.setValue(this.device?.patientDto.name, {
      emitEvent: true
    });
  }
  /**
   * Disappear the Info header after 10 seconds
   */
  setInfoSubscriber() {
    //vanish InfoMessage if any
    if (this.infoMessage !== undefined) {
      const secondsCounter = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.interval)(10 * 1000);
      this.subscriber = secondsCounter.subscribe(n => {
        this.infoMessage = undefined;
        this.subscriber.unsubscribe();
      });
    } else {
      if (this.subscriber !== undefined) {
        this.subscriber.unsubscribe();
      }
    }
  }
  static #_ = this.ɵfac = function EditDeviceFormComponent_Factory(t) {
    return new (t || EditDeviceFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_rx_stomp_service__WEBPACK_IMPORTED_MODULE_0__.RxStompService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_backendmap_service__WEBPACK_IMPORTED_MODULE_2__.BackendmapService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_session_service__WEBPACK_IMPORTED_MODULE_3__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_global_util_service__WEBPACK_IMPORTED_MODULE_4__.GlobalUtilService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: EditDeviceFormComponent,
    selectors: [["app-edit-device-form"]],
    inputs: {
      device: "device"
    },
    outputs: {
      submitInfo: "submitInfo"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([{
      provide: _services_rx_stomp_service__WEBPACK_IMPORTED_MODULE_0__.RxStompService,
      useFactory: _services_rx_stomp_service__WEBPACK_IMPORTED_MODULE_0__.rxStompServiceFactory
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
    decls: 101,
    vars: 21,
    consts: [[3, "formGroup", "ngSubmit"], [1, "container"], [1, "row"], [1, "col-md", "text-center"], [4, "ngIf"], [1, "mbox-crud-title"], [1, "material-icons"], [1, "row", 2, "height", "20px"], [1, "col"], ["aria-label", "Info messages"], ["color", "accent", 1, "mbox-info-chip", 3, "hidden", "removed"], ["matChipRemove", ""], ["color", "accent", 1, "mbox-error-chip", 3, "hidden", "removed"], [1, "row", 2, "margin-top", "2em"], [1, "col-md-6"], [2, "width", "100%"], ["matInput", "", "placeholder", "UUID", "type", "text", "formControlName", "uuid", "required", ""], ["matInput", "", "placeholder", "Name", "type", "text", "formControlName", "name", "required", ""], [1, "col-md-4"], ["matInput", "", "placeholder", "Type", "type", "text", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [2, "margin", "2em"], ["type", "text", "placeholder", "select patient", "aria-label", "patient", "matInput", "", 3, "formControl", "matAutocomplete"], [3, "displayWith"], ["auto_patient", "matAutocomplete"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "col-md-4", 2, "height", "4em", 3, "hidden"], ["mode", "button", 3, "device"], [1, "row", 2, "margin-top", "2em", 3, "hidden"], ["matNativeControl", "", "formControlName", "bedDimensionUnits"], ["matInput", "", "placeholder", "Width of Bed", "type", "number", "formControlName", "xBedDimension", "required", ""], ["matInput", "", "placeholder", "Lenght of Bed", "type", "number", "formControlName", "yBedDimension", "required", ""], ["mat-raised-button", "", "type", "button", "title", "Connect to device", 1, "btn", "del-icon-button", "mbox_configure", 3, "disabled", "click"], ["aria-hidden", "false", "disabled", "", "aria-label", "connect icon"], ["mat-raised-button", "", "type", "submit", "title", "Connect to device", 1, "btn", "del-icon-button", "mbox_configure", 3, "disabled"], [3, "value"], [3, "value", "onSelectionChange"]],
    template: function EditDeviceFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function EditDeviceFormComponent_Template_form_ngSubmit_0_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, EditDeviceFormComponent_span_5_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Device Configuration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "memory");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 7)(12, "div", 8)(13, "mat-chip-listbox", 9)(14, "mat-chip-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("removed", function EditDeviceFormComponent_Template_mat_chip_option_removed_14_listener() {
          return ctx.removeInfoMssg();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "button", 11)(17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-chip-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("removed", function EditDeviceFormComponent_Template_mat_chip_option_removed_19_listener() {
          return ctx.removeErrorMssg();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "button", 11)(22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 13)(25, "div", 14)(26, "mat-form-field", 15)(27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "UUID");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "device uuid");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 13)(33, "div", 14)(34, "mat-form-field", 15)(35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "device's name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 18)(41, "mat-form-field")(42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "type of device");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "mat-autocomplete", null, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, EditDeviceFormComponent_mat_option_49_Template, 2, 2, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "mat-divider", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 13)(52, "div", 14)(53, "mat-form-field", 15)(54, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Patient");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "Patient");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "mat-autocomplete", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](61, EditDeviceFormComponent_mat_option_61_Template, 2, 2, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](62, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](63, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](65, "app-bed-canvas", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 30)(67, "div", 18)(68, "mat-form-field")(69, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "Bed dimension units");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](72, EditDeviceFormComponent_option_72_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "Bed dimension units");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div", 18)(76, "mat-form-field")(77, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "Width of Bed");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](79, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "Width of the Bed");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "div", 18)(83, "mat-form-field")(84, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "Lenght of Bed");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](86, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](88, "Lenght of the Bed");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](89, "mat-divider", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "div", 2)(91, "div", 8)(92, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EditDeviceFormComponent_Template_button_click_92_listener() {
          return ctx.resetForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "mat-icon", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](94, "undo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, " Discard Changes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "div", 8)(97, "button", 36)(98, "mat-icon", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](100, " Save Configuration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](48);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.deviceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.device);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.infoMessage == undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.infoMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx.showError);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.errorMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.typesFC)("matAutocomplete", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.deviceTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.patientSelectorFC)("matAutocomplete", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("displayWith", ctx.stringifyPatientOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](62, 19, ctx.filteredPatients));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx.isPatientAssigned);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("device", ctx.device);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx.isPatientAssigned);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx._util.hunits);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.deviceForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.deviceForm.invalid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDivider, _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChipListbox, _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChipOption, _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChipRemove, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatHint, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteTrigger, _bed_canvas_bed_canvas_component__WEBPACK_IMPORTED_MODULE_5__.BedCanvasComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 8647:
/*!************************************************************************************************!*\
  !*** ./src/app/shared/components/link-download-data-form/link-download-data-form.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkDownloadDataFormComponent: () => (/* binding */ LinkDownloadDataFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6080);
/* harmony import */ var _services_backendmap_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/backendmap.service */ 9705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ 2106);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 702);










function LinkDownloadDataFormComponent_ng_template_0_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.recording.uuid);
  }
}
function LinkDownloadDataFormComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Download Data: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LinkDownloadDataFormComponent_ng_template_0_span_3_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LinkDownloadDataFormComponent_ng_template_0_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const modal_r5 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r5.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8)(6, "div", 9)(7, "div", 10)(8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 11)(11, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Select the format to download data");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-radio-group", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LinkDownloadDataFormComponent_ng_template_0_Template_mat_radio_group_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.format = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-radio-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "CVS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-radio-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-radio-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "EDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div")(21, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LinkDownloadDataFormComponent_ng_template_0_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.openFiletab(ctx_r10.format));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Download Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 20)(26, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LinkDownloadDataFormComponent_ng_template_0_Template_button_click_26_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const modal_r5 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r5.close("Close click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.recording);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.format);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.format === "");
  }
}
function LinkDownloadDataFormComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LinkDownloadDataFormComponent_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.showModal(_r0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function LinkDownloadDataFormComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LinkDownloadDataFormComponent_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.showModal(_r0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Download Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LinkDownloadDataFormComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LinkDownloadDataFormComponent_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.showModal(_r0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class LinkDownloadDataFormComponent {
  constructor(modalService, _backend) {
    this.modalService = modalService;
    this._backend = _backend;
    /**
     * Configures how the launcher will be rendered
     * possible values: fab (default) | button
     */
    this.mode = "fab";
    this.submitObject = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.format = "raw";
    //config.
  }

  ngOnChanges(changes) {
    // changes.prop contains the old and the new value...
    let recording = changes['recording'];
    if (recording) {}
    console.log(changes);
  }
  showModal(content) {
    this.modalService.open(content, {
      scrollable: true,
      centered: true,
      size: 'lg'
    });
  }
  openFiletab(format) {
    let recording_uuid = this.recording.uuid;
    window.open(this._backend.GET_FORMAT_DATARECORDS_URL(format, recording_uuid), '_blank');
  }
  static #_ = this.ɵfac = function LinkDownloadDataFormComponent_Factory(t) {
    return new (t || LinkDownloadDataFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_backendmap_service__WEBPACK_IMPORTED_MODULE_0__.BackendmapService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LinkDownloadDataFormComponent,
    selectors: [["app-link-download-data-form"]],
    inputs: {
      mode: "mode",
      recording: "recording"
    },
    outputs: {
      submitObject: "submitObject"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    decls: 7,
    vars: 3,
    consts: [["content", ""], ["matTooltip", "download data", "mat-mini-fab", "", "color", "primary", "aria-label", "add patient icon button with a user icon", "style", "background-color: #5f9ea0;", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "type", "button", "class", "btn del-icon-button mbox_download", "title", "Connect to device", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "primary", "matTooltip", "download data", "aria-label", "add sensor icon button with a user icon", "style", "color:#5f9ea0", 3, "click", 4, "ngIf"], [1, "modal-header"], [1, "modal-title"], [4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "container", "text-center"], [1, "row"], [1, "col"], ["src", "./assets/images/download.png", 2, "width", "150px"], ["id", "radio-group-label"], ["aria-labelledby", "radio-group-label", 1, "radio-group", 3, "ngModel", "ngModelChange"], ["value", "raw", "selected", "", 1, "radio-button"], ["value", "json", 1, "radio-button"], ["disabled", "", "value", "edf", 1, "radio-button"], ["mat-raised-button", "", "type", "button", "title", "Download file", 1, "btn", "del-icon-button", "mbox_download", 3, "disabled", "click"], ["aria-hidden", "false", "disabled", "", "aria-label", "connect icon"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["matTooltip", "download data", "mat-mini-fab", "", "color", "primary", "aria-label", "add patient icon button with a user icon", 2, "background-color", "#5f9ea0", 3, "click"], ["mat-raised-button", "", "type", "button", "title", "Connect to device", 1, "btn", "del-icon-button", "mbox_download", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "download data", "aria-label", "add sensor icon button with a user icon", 2, "color", "#5f9ea0", 3, "click"]],
    template: function LinkDownloadDataFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LinkDownloadDataFormComponent_ng_template_0_Template, 28, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LinkDownloadDataFormComponent_button_4_Template, 3, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LinkDownloadDataFormComponent_button_5_Template, 4, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LinkDownloadDataFormComponent_button_6_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mode === "fab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mode === "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mode === "icon");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__.MatRadioButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatMiniFabButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip],
    styles: [".radio-group[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    margin: 15px 0;\n    align-items: flex-start;\n  }\n  \n  .radio-button[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGluay1kb3dubG9hZC1kYXRhLWZvcm0vbGluay1kb3dubG9hZC1kYXRhLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYiIsInNvdXJjZXNDb250ZW50IjpbIi5yYWRpby1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMTVweCAwO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG4gIFxuICAucmFkaW8tYnV0dG9uIHtcbiAgICBtYXJnaW46IDVweDtcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 6761:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/link-patient-form/link-patient-form.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkPatientFormComponent: () => (/* binding */ LinkPatientFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6080);
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/request.service */ 5467);
/* harmony import */ var _services_backendmap_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/backendmap.service */ 9705);
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/session.service */ 5813);
/* harmony import */ var _services_global_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global-util.service */ 2735);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 702);















function LinkPatientFormComponent_ng_template_0_option_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unit_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](unit_r7.viewValue);
  }
}
function LinkPatientFormComponent_ng_template_0_option_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unit_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](unit_r8.viewValue);
  }
}
function LinkPatientFormComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function LinkPatientFormComponent_ng_template_0_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 5)(2, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "personal_injury");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LinkPatientFormComponent_ng_template_0_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.modalClose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "div", 11)(11, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 13)(14, "div", 14)(15, "mat-form-field", 15)(16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "patient's name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 13)(22, "div", 17)(23, "mat-form-field", 15)(24, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Alias");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "patient's alias reference");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 13)(30, "div", 17)(31, "mat-form-field")(32, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "patient's age");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "years");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 13)(40, "div", 21)(41, "mat-form-field")(42, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Height");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "patient's height");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "mat-form-field", 23)(52, "select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](53, LinkPatientFormComponent_ng_template_0_option_53_Template, 2, 2, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "units of height");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "span")(57, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LinkPatientFormComponent_ng_template_0_Template_a_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.showUnits("hunit"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 13)(60, "div", 21)(61, "mat-form-field")(62, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "patient's weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "mat-form-field", 23)(72, "select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](73, LinkPatientFormComponent_ng_template_0_option_73_Template, 2, 2, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "units of weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "span")(77, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LinkPatientFormComponent_ng_template_0_Template_a_click_77_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.showUnits("wunit"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 29)(80, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LinkPatientFormComponent_ng_template_0_Template_button_click_80_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.modalClose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.patientForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", !ctx_r1.errorEvent);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.warnMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getHUnitValue());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", !ctx_r1.editHunit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1._util.hunits);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.unitChangerLabel("hunit"), " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getWUnitValue());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", !ctx_r1.editWunit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1._util.wunits);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.unitChangerLabel("wunit"), " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.patientForm.valid);
  }
}
function LinkPatientFormComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LinkPatientFormComponent_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.modalOpen(_r0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Add New ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "person_add_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function LinkPatientFormComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LinkPatientFormComponent_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.modalOpen(_r0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "person_add_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function LinkPatientFormComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LinkPatientFormComponent_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r19.modalOpen(_r0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "drive_file_rename_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class LinkPatientFormComponent {
  constructor(config, modalService, _formBuilder, _request, _backend, _session, _util) {
    this.modalService = modalService;
    this._formBuilder = _formBuilder;
    this._request = _request;
    this._backend = _backend;
    this._session = _session;
    this._util = _util;
    this.mode = "fab";
    this.title = "Edit Patient Information";
    this.submitInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.warnMessage = "Warning";
    this.errorEvent = false;
    this.editHunit = false;
    this.editWunit = false;
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
    this.initPatientForm();
  }
  ngOnChanges(changes) {
    // changes.prop contains the old and the new value...
    let patientEvent = changes['patient'];
    if (patientEvent) {
      let current = changes['patient'].currentValue;
      if (current !== undefined) {
        this.initPatientForm();
      }
    }
  }
  modalOpen(content) {
    this.modalReference = this.modalService.open(content, {
      fullscreen: true
    });
  }
  modalClose() {
    this.patientForm.markAsUntouched();
    this.initPatientForm();
    this.modalReference.close();
    //this.modalService.dismissAll('finished');
  }

  initPatientForm() {
    if (this.patient !== undefined) {
      this.patientForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
        uuid: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.patient.uuid),
        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.patient.name),
        alias: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.patient.alias),
        age: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.patient.age),
        height: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.patient.height),
        heightUnit: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.patient.heightUnit),
        weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.patient.weight),
        weightUnit: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.patient.weightUnit)
      });
    } else {
      this.patientForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
        uuid: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
        alias: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
        age: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
        height: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
        heightUnit: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('centimeters'),
        weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
        weightUnit: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('kilograms')
      });
    } //else
  }

  getHUnitValue() {
    let form = this.patientForm.getRawValue();
    const unit = form['heightUnit'];
    if (unit === null) {
      return "centimeters";
    } else {
      return unit;
    }
  }
  getWUnitValue() {
    let form = this.patientForm.getRawValue();
    const unit = form['weightUnit'];
    if (unit === null) {
      return "kilograms";
    } else {
      return unit;
    }
  }
  showUnits(name) {
    if (name == 'hunit') {
      this.editHunit = !this.editHunit;
    }
    if (name == 'wunit') {
      this.editWunit = !this.editWunit;
    }
    console.log(name);
  }
  unitChangerLabel(name) {
    if (name == 'hunit') {
      return this.editHunit ? 'set' : 'Change units';
    }
    if (name == 'wunit') {
      return this.editWunit ? 'set' : 'Change units';
    }
    return 'Change units';
  }
  actualSubmit(data) {
    this.errorEvent = false;
    this._session.setShowQuery();
    this._request.sendBackendPost(this._backend.POST_PATIENT_DATA, data).subscribe({
      next: res => {
        let response = JSON.parse(res);
        if (response.error) {
          this.errorEvent = true;
          this.warnMessage = response.message;
          console.error(response.message);
        } else {
          this.submitInfo.emit(response.message);
          this.patientForm.reset();
          this.modalService.dismissAll('finished');
        }
      },
      error: err => {
        this.errorEvent = true;
        this.warnMessage = err;
        console.log("HTTP-Error requesting patient data: " + err);
      },
      complete: () => {
        this._session.setEndQuery();
      }
    });
  }
  onSubmit() {
    if (!this.patientForm.invalid) {
      let data = this.patientForm.getRawValue();
      this.actualSubmit(data);
    }
  }
  static #_ = this.ɵfac = function LinkPatientFormComponent_Factory(t) {
    return new (t || LinkPatientFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_request_service__WEBPACK_IMPORTED_MODULE_0__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_backendmap_service__WEBPACK_IMPORTED_MODULE_1__.BackendmapService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_session_service__WEBPACK_IMPORTED_MODULE_2__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_global_util_service__WEBPACK_IMPORTED_MODULE_3__.GlobalUtilService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: LinkPatientFormComponent,
    selectors: [["app-link-patient-form"]],
    inputs: {
      mode: "mode",
      title: "title",
      patient: "patient"
    },
    outputs: {
      submitInfo: "submitInfo"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
    decls: 5,
    vars: 3,
    consts: [["editPatientForm", ""], ["class", "btn btn-lg btn-outline-primary", "style", "color: #5f9ea0;", 3, "click", 4, "ngIf"], ["matTooltip", "add new patient", "mat-mini-fab", "", "color", "primary", "aria-label", "add patient icon button with a user icon", "style", "background-color: #5f9ea0;", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "primary", "matTooltip", "edit patient", "aria-label", "add patient icon button with a user icon", "style", "color: #5f9ea0;", 3, "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "container"], [1, "row", "justify-content-center", 3, "hidden"], [1, "col-12", "text-center"], [1, "mbox-warn-mssg"], [1, "row"], [1, "col-8"], [2, "width", "100%"], ["matInput", "", "placeholder", "Name", "type", "text", "formControlName", "name", "required", ""], [1, "col-4"], ["matInput", "", "placeholder", "Alias", "type", "text", "formControlName", "alias", "required", ""], ["matInput", "", "placeholder", "Age", "type", "number", "formControlName", "age", "required", ""], ["matSuffix", "", 2, "color", "gray"], [1, "col"], ["matInput", "", "placeholder", "Height", "type", "number", "formControlName", "height", "required", ""], [3, "hidden"], ["matNativeControl", "", "formControlName", "heightUnit"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", 2, "font-size", "smaller", "color", "#6495ed", 3, "click"], ["matInput", "", "placeholder", "Weight", "type", "number", "formControlName", "weight", "required", ""], ["matNativeControl", "", "formControlName", "weightUnit"], [1, "modal-footer"], [1, "btn", "btn-outline-dark", 3, "click"], ["type", "button", "type", "submit", 1, "btn", "btn-outline-dark", 3, "disabled"], [3, "value"], [1, "btn", "btn-lg", "btn-outline-primary", 2, "color", "#5f9ea0", 3, "click"], [1, "material-icons"], ["matTooltip", "add new patient", "mat-mini-fab", "", "color", "primary", "aria-label", "add patient icon button with a user icon", 2, "background-color", "#5f9ea0", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "edit patient", "aria-label", "add patient icon button with a user icon", 2, "color", "#5f9ea0", 3, "click"]],
    template: function LinkPatientFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, LinkPatientFormComponent_ng_template_0_Template, 84, 13, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, LinkPatientFormComponent_button_2_Template, 4, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, LinkPatientFormComponent_button_3_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, LinkPatientFormComponent_button_4_Template, 3, 0, "button", 3);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mode == "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mode == "fab");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mode == "icon");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatMiniFabButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip],
    styles: [".mbox-warn-mssg[_ngcontent-%COMP%]{\n    background-color: #ff6347;\n    font-weight: bold;\n    border: 2px solid red;\n    border-radius: 12px;\n    padding: 5px;\n}\n\n.mbox-small-control[_ngcontent-%COMP%]{\n    font-size: smaller !important;\n    color: #6495ed !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGluay1wYXRpZW50LWZvcm0vbGluay1wYXRpZW50LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHlCQUF5QjtBQUM3QiIsInNvdXJjZXNDb250ZW50IjpbIi5tYm94LXdhcm4tbXNzZ3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2MzQ3O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLm1ib3gtc21hbGwtY29udHJvbHtcbiAgICBmb250LXNpemU6IHNtYWxsZXIgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzY0OTVlZCAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 4025:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/link-recorder-form/link-recorder-form.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkRecorderFormComponent: () => (/* binding */ LinkRecorderFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5043);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6080);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ 2106);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ 9892);















function LinkRecorderFormComponent_ng_template_0_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "./recorders/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function LinkRecorderFormComponent_ng_template_0_mat_option_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function LinkRecorderFormComponent_ng_template_0_mat_option_31_Template_mat_option_onSelectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.setFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", file_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", file_r6, " ");
  }
}
function LinkRecorderFormComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2)(1, "div", 3)(2, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "graphic_eq");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LinkRecorderFormComponent_ng_template_0_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.modalClose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11)(14, "div", 12)(15, "mat-form-field", 13)(16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Command");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "command used to start the recorder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12)(22, "mat-form-field", 13)(23, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Path");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "filepath to executable recorder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, LinkRecorderFormComponent_ng_template_0_span_28_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-autocomplete", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, LinkRecorderFormComponent_ng_template_0_mat_option_31_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11)(34, "div", 20)(35, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Type of Script:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-radio-group", 22)(39, "mat-radio-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Data-Storage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-radio-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "MQTT-Streamer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11)(44, "div", 20)(45, "mat-form-field", 13)(46, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Parameters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "additional execution parameters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 11)(52, "div", 20)(53, "mat-form-field", 13)(54, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "additional description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 26)(60, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LinkRecorderFormComponent_ng_template_0_Template_button_click_60_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.modalClose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LinkRecorderFormComponent_ng_template_0_Template_button_click_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.recorderForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r1.errorEvent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.warnMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.filesFC)("matAutocomplete", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.sensor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 11, ctx_r1.currentFiles));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.recorderForm.valid);
  }
}
function LinkRecorderFormComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LinkRecorderFormComponent_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.modalOpen(_r0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "graphic_eq");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class LinkRecorderFormComponent {
  constructor(config, modalService) {
    this.modalService = modalService;
    this.mode = "fab";
    this.title = "Edit Sensor Information";
    this.submitInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.submitObject = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.warnMessage = "Warning";
    this.errorEvent = false;
    this.FILE_LIST = [];
    this.filesFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl();
  }
  ngOnInit() {
    //init the form
    this.initSensorForm();
    //set listener to the type selector
    this.currentFiles = this.filesFC.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(value => this._filterFiles(value)));
    //reset the control
    const current = this.recorderForm.get("filepath")?.getRawValue();
    this.filesFC.patchValue(current);
    this.recorderForm.setControl("filepath", this.filesFC);
  }
  ngOnChanges(changes) {}
  _filterFiles(value) {
    const filterValue = value?.toLowerCase();
    return this.filelist.filter(filename => filename.toLowerCase().includes(filterValue));
  }
  setFile(event) {
    console.log(event);
    //this.recorderForm.get("filepath")?.patchValue(event.data);
  }

  initSensorForm() {
    if (this.sensor !== undefined && this.sensor.recorder !== undefined) {
      this.recorderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
        command: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.sensor.recorder.command),
        filepath: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.sensor.recorder.filepath),
        streamer: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.sensor.recorder.streamer),
        params: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.sensor.recorder.params),
        description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.sensor.recorder.description)
      });
    } else {
      this.recorderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
        command: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
        filepath: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
        streamer: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('false'),
        params: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
        description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('')
      });
      this.sensor.recorder = this.recorderForm.getRawValue();
    }
  }
  modalOpen(content) {
    this.modalReference = this.modalService.open(content, {
      size: 'xl',
      fullscreen: false,
      scrollable: true
    });
  }
  modalClose() {
    this.recorderForm?.reset();
    this.initSensorForm();
    this.modalReference?.close();
    //this.modalService.dismissAll('finished');
  }

  onSubmit() {
    if (!this.recorderForm.invalid) {
      let data = this.recorderForm.getRawValue();
      this.sensor.recorder = data;
      this.submitObject.next(this.sensor);
    }
  }
  static #_ = this.ɵfac = function LinkRecorderFormComponent_Factory(t) {
    return new (t || LinkRecorderFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LinkRecorderFormComponent,
    selectors: [["app-link-recorder-form"]],
    inputs: {
      mode: "mode",
      title: "title",
      sensor: "sensor",
      filelist: "filelist",
      error: "error"
    },
    outputs: {
      submitInfo: "submitInfo",
      submitObject: "submitObject"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 3,
    vars: 1,
    consts: [["editSensorForm", ""], ["mat-icon-button", "", "color", "primary", "matTooltip", "edit recorders", "aria-label", "add sensor icon button with a user icon", "style", "color:#5f9ea0", 3, "click", 4, "ngIf"], [1, "mbox_modal_form", 3, "formGroup"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "container"], [1, "row", "justify-content-center", 3, "hidden"], [1, "col-12", "text-center"], [1, "mbox-warn-mssg"], [1, "row"], [1, "col-4"], [2, "width", "100%"], ["matInput", "", "placeholder", "Command", "type", "text", "formControlName", "command", "required", ""], ["matInput", "", "placeholder", "Path", "type", "text", "required", "", 3, "formControl", "matAutocomplete"], ["matPrefix", "", "style", "color: gray;", 4, "ngIf"], [2, "z-index", "9999"], ["auto_types", "matAutocomplete"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [1, "col-md-8"], ["id", "radio-group-label"], ["aria-label", "Select an option", "formControlName", "streamer"], [3, "value"], ["matInput", "", "placeholder", "Parameters", "type", "string", "formControlName", "params", "required", ""], ["matInput", "", "placeholder", "Decription", "type", "text", "formControlName", "description"], [1, "modal-footer"], [1, "btn", "btn-outline-dark", 3, "click"], ["type", "button", "type", "submit", 1, "btn", "btn-outline-dark", 3, "disabled", "click"], ["matPrefix", "", 2, "color", "gray"], [3, "value", "onSelectionChange"], ["mat-icon-button", "", "color", "primary", "matTooltip", "edit recorders", "aria-label", "add sensor icon button with a user icon", 2, "color", "#5f9ea0", 3, "click"]],
    template: function LinkRecorderFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LinkRecorderFormComponent_ng_template_0_Template, 64, 13, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LinkRecorderFormComponent_button_2_Template, 3, 0, "button", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode == "icon");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatPrefix, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatIconButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 3675:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/link-sensor-form/link-sensor-form.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkSensorFormComponent: () => (/* binding */ LinkSensorFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _data_custom_sensor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/custom-sensor */ 1553);
/* harmony import */ var _data_fsrsensor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/fsrsensor */ 2211);
/* harmony import */ var _data_imusensor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/imusensor */ 4537);
/* harmony import */ var _data_ptz_sensor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/ptz-sensor */ 7104);
/* harmony import */ var _data_acc_sensor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/acc-sensor */ 4200);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 5043);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6080);
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/request.service */ 5467);
/* harmony import */ var _services_backendmap_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/backendmap.service */ 9705);
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/session.service */ 5813);
/* harmony import */ var _services_global_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/global-util.service */ 2735);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/clipboard */ 4362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/autocomplete */ 9892);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/checkbox */ 6658);


























function LinkSensorFormComponent_ng_template_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 14)(1, "div", 43)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Fill from template: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 15)(5, "mat-form-field", 16)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Sensor templates");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "select", 44)(9, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Custom");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "FSR");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "ACC");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "PTZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formControl", ctx_r5.templateFC);
  }
}
function LinkSensorFormComponent_ng_template_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 15)(1, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LinkSensorFormComponent_ng_template_0_div_23_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.getRandomUUID());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Set random UUID");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function LinkSensorFormComponent_ng_template_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 15)(1, "button", 49)(2, "mat-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("cdkCopyToClipboard", ctx_r7.getCurrentSensorUUID());
  }
}
function LinkSensorFormComponent_ng_template_0_mat_option_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onSelectionChange", function LinkSensorFormComponent_ng_template_0_mat_option_46_Template_mat_option_onSelectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r15.setType($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", type_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", type_r14, " ");
  }
}
function LinkSensorFormComponent_ng_template_0_span_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r10.sensor.physicalDimension);
  }
}
function LinkSensorFormComponent_ng_template_0_span_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r11.sensor.physicalDimension);
  }
}
function LinkSensorFormComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "form", 4)(1, "div", 5)(2, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "sensors");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LinkSensorFormComponent_ng_template_0_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r17.modalClose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "div", 11)(11, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, LinkSensorFormComponent_ng_template_0_div_13_Template, 17, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 14)(16, "div", 15)(17, "mat-form-field", 16)(18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "UUID");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "sensor uuid");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, LinkSensorFormComponent_ng_template_0_div_23_Template, 3, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, LinkSensorFormComponent_ng_template_0_div_24_Template, 4, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 14)(26, "div", 15)(27, "mat-checkbox", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "Active Sensor");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 14)(30, "div", 20)(31, "mat-form-field", 16)(32, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](34, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "unique name for the sensor");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "div", 20)(38, "mat-form-field", 16)(39, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](41, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "sensor type");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "mat-autocomplete", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](46, LinkSensorFormComponent_ng_template_0_mat_option_46_Template, 2, 2, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](47, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "div", 14)(49, "div", 26)(50, "mat-form-field", 16)(51, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52, "physicalDimension");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](53, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, "physic dimension used by sensor");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div", 26)(57, "mat-form-field", 16)(58, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59, "physicalMin");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](60, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62, "sensor's physicalMin");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](63, LinkSensorFormComponent_ng_template_0_span_63_Template, 2, 1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "div", 26)(65, "mat-form-field", 16)(66, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67, "physicalMax");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](68, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70, "sensor's physicalMax");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](71, LinkSensorFormComponent_ng_template_0_span_71_Template, 2, 1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "div", 26)(73, "mat-form-field", 16)(74, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](75, "DigitalMin");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](76, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](78, "sensor's DigitalMin");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](80, "V");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "div", 26)(82, "mat-form-field", 16)(83, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](84, "DigitalMax");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](85, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](86, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](87, "sensor's DigitalMax");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](88, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](89, "V");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](90, "div", 14)(91, "div", 26)(92, "mat-form-field", 16)(93, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](94, "xLocation");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](95, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](96, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](97, "sensor's xLocation");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](98, "div", 26)(99, "mat-form-field", 16)(100, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](101, "yLocation");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](102, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](103, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](104, "sensor's yLocation");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](105, "div", 26)(106, "mat-form-field", 16)(107, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](108, "xDimension");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](109, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](110, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](111, "sensor's xDimension");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](112, "div", 26)(113, "mat-form-field", 16)(114, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](115, "yDimension");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](116, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](117, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](118, "sensor's yDimension");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](119, "div", 14)(120, "div", 15)(121, "mat-form-field", 16)(122, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](123, "accessProtocol");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](124, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](125, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](126, "sensor's accessProtocol");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](127, "div", 15)(128, "mat-form-field", 16)(129, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](130, "portAddress");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](131, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](132, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](133, "sensor's portAddress");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](134, "div", 40)(135, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LinkSensorFormComponent_ng_template_0_Template_button_click_135_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r19.modalClose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](136, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](137, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LinkSensorFormComponent_ng_template_0_Template_button_click_137_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r20.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](138, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](45);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r1.sensorForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", !ctx_r1.errorEvent);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.warnMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.isNewSensor);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.isNewSensor);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.isNewSensor);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formControl", ctx_r1.typesFC)("matAutocomplete", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](47, 13, ctx_r1.suportedTypes));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.sensor);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.sensor);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r1.sensorForm.valid);
  }
}
function LinkSensorFormComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LinkSensorFormComponent_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r21.modalOpen(_r0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Add New ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "post_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function LinkSensorFormComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LinkSensorFormComponent_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r23.modalOpen(_r0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "post_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function LinkSensorFormComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LinkSensorFormComponent_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r25.modalOpen(_r0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "drive_file_rename_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
class LinkSensorFormComponent {
  constructor(config, modalService, _request, _backend, _session, _util) {
    this.modalService = modalService;
    this._request = _request;
    this._backend = _backend;
    this._session = _session;
    this._util = _util;
    this.mode = "fab";
    this.title = "Edit Sensor Information";
    this.submitInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    this.submitObject = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    this.warnMessage = "Warning";
    this.errorEvent = false;
    this.isNewSensor = false;
    this.templateFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl();
    this.DATA_TYPES = ['FSR', 'IMU'];
    this.typesFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl();
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit() {
    //init the form
    this.initSensorForm();
    //set listener to the template chooser
    this.templateFC.valueChanges.subscribe(selection => {
      if (selection === "CUSTOM") {
        const template = new _data_custom_sensor__WEBPACK_IMPORTED_MODULE_0__.CustomSensor();
        this.resetForm(template);
        this.typesFC.patchValue(template.transducerType);
      } else if (selection === "FSR") {
        const template = new _data_fsrsensor__WEBPACK_IMPORTED_MODULE_1__.FSRSensor();
        this.resetForm(template);
        this.typesFC.patchValue(template.transducerType);
      } else if (selection === "ACC") {
        const template = new _data_acc_sensor__WEBPACK_IMPORTED_MODULE_4__.AccSensor();
        this.resetForm(template);
        this.typesFC.patchValue(template.transducerType);
      } else if (selection === "PTZ") {
        const template = new _data_ptz_sensor__WEBPACK_IMPORTED_MODULE_3__.PtzSensor();
        this.resetForm(template);
        this.typesFC.patchValue(template.transducerType);
      } else if (selection === "IMU") {
        const template = new _data_imusensor__WEBPACK_IMPORTED_MODULE_2__.IMUSensor();
        this.resetForm(template);
        this.typesFC.patchValue(template.transducerType);
      }
    });
    //set listener to the type selector
    this.suportedTypes = this.typesFC.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(value => this._filterTypes(value)));
    //reset the control
    const current = this.sensorForm.get("transducerType")?.getRawValue();
    this.typesFC.patchValue(current);
    this.sensorForm.setControl("transducerType", this.typesFC);
  }
  _filterTypes(value) {
    const filterValue = value?.toLowerCase();
    return this.DATA_TYPES.filter(type => type.toLowerCase().includes(filterValue));
  }
  ngOnChanges(changes) {
    // changes.prop contains the old and the new value...
    let SensorEvent = changes['sensor'];
    let confirmEvent = changes['success'];
    let error = changes['error'];
    if (SensorEvent) {
      let current = changes['sensor'].currentValue;
      if (current !== undefined) {
        this.initSensorForm();
        this.isNewSensor = false;
      }
    } else
      //after submit changes    
      if (confirmEvent || error) {
        this.modalClose();
      }
  }
  modalOpen(content) {
    this.modalReference = this.modalService.open(content, {
      fullscreen: true,
      scrollable: true
    });
  }
  modalClose() {
    this.sensorForm?.reset();
    this.initSensorForm();
    this.modalReference?.close();
    //this.modalService.dismissAll('finished');
  }

  initSensorForm() {
    if (this.sensor !== undefined) {
      this.sensorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
        uuid: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl({
          value: this.sensor.uuid,
          disabled: true
        }),
        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.sensor.name),
        transducerType: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.sensor.transducerType),
        physicalDimension: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.sensor.physicalDimension),
        physicalMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.sensor.physicalMin),
        physicalMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.sensor.physicalMax),
        digitalMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.sensor.digitalMin),
        digitalMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.sensor.digitalMax),
        xLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.sensor.xLocation),
        yLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.sensor.yLocation),
        yDimension: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.sensor.yDimension),
        xDimension: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.sensor.xDimension),
        active: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.sensor.active),
        accessProtocol: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.sensor.accessProtocol),
        portAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.sensor.portAddress)
        /*recorder: new FormGroup({
          comand: new FormControl(this.sensor.recorder.command),
          exec_path: new FormControl(this.sensor.recorder.exec_path),
          description: new FormControl(this.sensor.recorder.description)
        }),/** */
      });

      this.typesFC.setValue(this.sensor.transducerType);
    } else {
      this.isNewSensor = true;
      this.sensorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
        template: this.templateFC,
        uuid: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
        transducerType: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
        physicalDimension: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
        physicalMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(),
        physicalMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(),
        digitalMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(),
        digitalMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(),
        xLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(),
        yLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(),
        yDimension: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(),
        xDimension: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(),
        active: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(),
        accessProtocol: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
        portAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(),
        recorder: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
          comand: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
          exec_path: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
          description: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('')
        })
      });
      this.typesFC.setValue('');
    }
  }
  setType(event) {
    console.log(event);
    //this.sensorForm.get("type")?.patchValue(event.data);
  }

  getCurrentSensorUUID() {
    const uuid_value = this.sensorForm.get("uuid")?.getRawValue();
    return uuid_value;
  }
  resetForm(defaultSensor = this.sensor) {
    this.sensorForm.markAsUntouched();
    const current_uuid = this.sensorForm.get("uuid")?.getRawValue();
    this.sensorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
      uuid: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl({
        value: current_uuid,
        disabled: !this.isNewSensor
      }),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(defaultSensor.name),
      transducerType: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(defaultSensor.transducerType),
      physicalDimension: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(defaultSensor.physicalDimension),
      physicalMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(defaultSensor.physicalMin),
      physicalMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(defaultSensor.physicalMax),
      digitalMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(defaultSensor.digitalMin),
      digitalMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(defaultSensor.digitalMax),
      xLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(defaultSensor.xLocation),
      yLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(defaultSensor.yLocation),
      yDimension: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(defaultSensor.yDimension),
      xDimension: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(defaultSensor.xDimension),
      active: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(defaultSensor.active),
      accessProtocol: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(defaultSensor.accessProtocol),
      portAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(defaultSensor.portAddress)
      /*recorder: new FormGroup({
        comand: new FormControl(this.sensor.recorder.command),
        exec_path: new FormControl(this.sensor.recorder.exec_path),
        description: new FormControl(this.sensor.recorder.description)
      }),/** */
    }); /** */
  }

  actualSubmit(data) {
    this.submitObject.next(data);
  }
  onSubmit() {
    if (!this.sensorForm.invalid) {
      let data = this.sensorForm.getRawValue();
      this.actualSubmit(data);
    }
  }
  getRandomUUID() {
    this._request.sendBackendGet(this._backend.GET_RANDOM_UUID_URL).subscribe({
      next: res => {
        this.sensorForm.get('uuid')?.setValue(res);
      },
      error: err => {
        console.error("HTTP-Error requesting auto UUID: " + err);
      },
      complete: () => {
        this._session.setEndQuery();
      }
    });
  }
  static #_ = this.ɵfac = function LinkSensorFormComponent_Factory(t) {
    return new (t || LinkSensorFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_request_service__WEBPACK_IMPORTED_MODULE_5__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_backendmap_service__WEBPACK_IMPORTED_MODULE_6__.BackendmapService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_session_service__WEBPACK_IMPORTED_MODULE_7__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_global_util_service__WEBPACK_IMPORTED_MODULE_8__.GlobalUtilService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: LinkSensorFormComponent,
    selectors: [["app-link-sensor-form"]],
    inputs: {
      mode: "mode",
      title: "title",
      sensor: "sensor",
      success: "success",
      error: "error"
    },
    outputs: {
      submitInfo: "submitInfo",
      submitObject: "submitObject"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]],
    decls: 5,
    vars: 3,
    consts: [["editSensorForm", ""], ["class", "btn btn-lg btn-outline-primary", "class", "mbox-add-button", 3, "click", 4, "ngIf"], ["matTooltip", "add new sensor", "mat-mini-fab", "", "color", "primary", "aria-label", "add sensor icon button with a user icon", "class", "mbox-add-button", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "primary", "matTooltip", "edit sensor", "aria-label", "add sensor icon button with a user icon", "style", "color:#5f9ea0", 3, "click", 4, "ngIf"], [1, "mbox_modal_form", 3, "formGroup"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "container"], [1, "row", "justify-content-center", 3, "hidden"], [1, "col-12", "text-center"], [1, "mbox-warn-mssg"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-4"], [2, "width", "100%"], ["matInput", "", "placeholder", "UUID", "type", "text", "formControlName", "uuid", "required", ""], ["class", "col-md-4", 4, "ngIf"], ["formControlName", "active", 1, "mbox_check"], [1, "col-4"], ["matInput", "", "placeholder", "Name", "type", "text", "formControlName", "name", "required", ""], ["matInput", "", "placeholder", "Type", "type", "text", "required", "", 3, "formControl", "matAutocomplete"], [2, "z-index", "9999"], ["auto_types", "matAutocomplete"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [1, "col-md-2"], ["matInput", "", "placeholder", "physicalDimension", "type", "string", "formControlName", "physicalDimension", "required", ""], ["matInput", "", "placeholder", "physicalMin", "type", "number", "formControlName", "physicalMin", "required", ""], ["matSuffix", "", "style", "color: gray;", 4, "ngIf"], ["matInput", "", "placeholder", "physicalMin", "type", "number", "formControlName", "physicalMax", "required", ""], ["matInput", "", "placeholder", "digitalMin", "type", "number", "formControlName", "digitalMin", "required", ""], ["matSuffix", "", 2, "color", "gray"], ["matInput", "", "placeholder", "digitalMax", "type", "number", "formControlName", "digitalMax", "required", ""], ["matInput", "", "placeholder", "xLocation", "type", "number", "formControlName", "xLocation", "required", ""], ["matInput", "", "placeholder", "yLocation", "type", "number", "formControlName", "yLocation", "required", ""], ["matInput", "", "placeholder", "xDimension", "type", "number", "formControlName", "xDimension", "required", ""], ["matInput", "", "placeholder", "yDimension", "type", "number", "formControlName", "yDimension", "required", ""], ["matInput", "", "placeholder", "accessProtocol", "type", "string", "formControlName", "accessProtocol"], ["matInput", "", "placeholder", "portAddress", "type", "string", "formControlName", "portAddress"], [1, "modal-footer"], [1, "btn", "btn-outline-dark", 3, "click"], ["type", "button", "type", "submit", 1, "btn", "btn-outline-dark", 3, "disabled", "click"], [1, "col-md-3"], ["matNativeControl", "", "name", "the_template", 3, "formControl"], ["value", "CUSTOM", "selected", "true"], ["value", "FSR"], ["value", "ACC"], ["value", "PTZ"], ["type", "button", "title", "copy", 1, "btn", "copy-btn", 3, "cdkCopyToClipboard"], ["aria-hidden", "false", "aria-label", "copy icon"], [3, "value", "onSelectionChange"], [1, "mbox-add-button", 3, "click"], [1, "material-icons"], ["matTooltip", "add new sensor", "mat-mini-fab", "", "color", "primary", "aria-label", "add sensor icon button with a user icon", 1, "mbox-add-button", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "edit sensor", "aria-label", "add sensor icon button with a user icon", 2, "color", "#5f9ea0", 3, "click"]],
    template: function LinkSensorFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, LinkSensorFormComponent_ng_template_0_Template, 139, 15, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, LinkSensorFormComponent_button_2_Template, 4, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, LinkSensorFormComponent_button_3_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, LinkSensorFormComponent_button_4_Template, 3, 0, "button", 3);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.mode == "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.mode == "fab");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.mode == "icon");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDivider, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_17__.CdkCopyToClipboard, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatSuffix, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatMiniFabButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltip, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocompleteTrigger, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__.MatCheckbox, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe],
    styles: ["div.cdk-overlay-container[_ngcontent-%COMP%] { z-index: 9999; }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGluay1zZW5zb3ItZm9ybS9saW5rLXNlbnNvci1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCLGFBQWEsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImRpdi5jZGstb3ZlcmxheS1jb250YWluZXIgeyB6LWluZGV4OiA5OTk5OyB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 692:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/patient-data-table/patient-data-table.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PatientDataTableComponent: () => (/* binding */ PatientDataTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/request.service */ 5467);
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/session.service */ 5813);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _services_backendmap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/backendmap.service */ 9705);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/clipboard */ 4362);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ 1757);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _link_patient_form_link_patient_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../link-patient-form/link-patient-form.component */ 6761);
/* harmony import */ var _del_patient_button_del_patient_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../del-patient-button/del-patient-button.component */ 4148);



















function PatientDataTableComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PatientDataTableComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 36)(1, "button", 37)(2, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const patient_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cdkCopyToClipboard", patient_r20.uuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", patient_r20.uuid, " ");
  }
}
function PatientDataTableComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PatientDataTableComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const patient_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", patient_r21.name, " ");
  }
}
function PatientDataTableComponent_th_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Alias ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PatientDataTableComponent_td_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const patient_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", patient_r22.alias, " ");
  }
}
function PatientDataTableComponent_th_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Age ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PatientDataTableComponent_td_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const patient_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", patient_r23.age, " ");
  }
}
function PatientDataTableComponent_th_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PatientDataTableComponent_td_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const patient_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", patient_r24.weight, " ", patient_r24.weightUnit, " ");
  }
}
function PatientDataTableComponent_th_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Weight Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PatientDataTableComponent_td_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const patient_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", patient_r25.weightUnit, " ");
  }
}
function PatientDataTableComponent_th_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Height ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PatientDataTableComponent_td_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const patient_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", patient_r26.height, " ", patient_r26.heightUnit, " ");
  }
}
function PatientDataTableComponent_th_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Height Unit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PatientDataTableComponent_td_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const patient_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", patient_r27.heightUnit, " ");
  }
}
function PatientDataTableComponent_th_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "th", 43);
  }
}
function PatientDataTableComponent_td_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 36)(1, "app-link-patient-form", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submitInfo", function PatientDataTableComponent_td_51_Template_app_link_patient_form_submitInfo_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r29.onEditEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "app-del-patient-button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submitInfo", function PatientDataTableComponent_td_51_Template_app_del_patient_button_submitInfo_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r31.onEditEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const patient_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("patient", patient_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("patient", patient_r28);
  }
}
function PatientDataTableComponent_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 47);
  }
}
function PatientDataTableComponent_tr_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 48);
  }
}
const _c0 = function () {
  return [5, 10, 20];
};
class PatientDataTableComponent {
  constructor(_request, _session, _snackBar, _backend) {
    this._request = _request;
    this._session = _session;
    this._snackBar = _snackBar;
    this._backend = _backend;
    this.PATIENT_DATA = [];
    this.showError = false;
    this.datacount = 0;
    this.displayedColumns = ['uuid', 'name', 'alias', 'age', 'height', 'weight', 'controls'];
  }
  ngOnInit() {
    //Query data
    this._request.sendBackendGet(this._backend.GET_PATIENT_DATA).subscribe({
      next: res => {
        let response = JSON.parse(res);
        this.infoMessage = undefined;
        this.errorMessage = undefined;
        if (!response.error) {
          this.infoMessage = response.message;
          this.PATIENT_DATA = response.response;
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(this.PATIENT_DATA);
          this.datacount = this.PATIENT_DATA.length;
          if (this.datacount != 0) {
            this.dataSource.paginator = this.paginator;
          }
          console.log("info: " + this.infoMessage);
        } else {
          this.showError = true;
          this.errorMessage = response.message;
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource([]);
          console.log("error: " + this.infoMessage);
        }
      },
      error: err => {
        console.error("HTTP-Error requesting patient data: " + err);
      },
      complete: () => {
        //hide progress bar
        this._session.setEndQuery();
        this.setInfoSubscriber();
      }
    });
  }
  ngAfterViewInit() {
    this.datacount = this.PATIENT_DATA.length;
    if (this.datacount != 0) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
  /**
   * Disappear the Info header after 10 seconds
   */
  setInfoSubscriber() {
    //vanish InfoMessage if any
    if (this.infoMessage !== undefined) {
      const secondsCounter = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.interval)(10 * 1000);
      this.subscriber = secondsCounter.subscribe(n => {
        this.infoMessage = undefined;
        this.subscriber.unsubscribe();
      });
    } else {
      if (this.subscriber !== undefined) {
        this.subscriber.unsubscribe();
      }
    }
  }
  openSnackBar(message) {
    console.log(message);
    this._snackBar.open(message, 'dismiss', {
      duration: 7 * 1000
    });
  }
  reloadData() {
    this._session.setShowQuery();
    this.ngOnInit();
  }
  onEditEvent(message) {
    this.openSnackBar(message);
    this.reloadData();
  }
  removeInfoMssg() {
    this.infoMessage = undefined;
    this.showError = false;
  }
  removeErrorMssg() {
    this.errorMessage = undefined;
    this.showError = false;
  }
  static #_ = this.ɵfac = function PatientDataTableComponent_Factory(t) {
    return new (t || PatientDataTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_0__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_session_service__WEBPACK_IMPORTED_MODULE_1__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_backendmap_service__WEBPACK_IMPORTED_MODULE_2__.BackendmapService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: PatientDataTableComponent,
    selectors: [["app-patient-data-table"]],
    viewQuery: function PatientDataTableComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      }
    },
    decls: 55,
    vars: 10,
    consts: [[1, "container"], [1, "row"], [1, "col"], ["aria-label", "Info messages"], ["color", "accent", 1, "mbox-info-chip", 3, "hidden", "removed"], ["matChipRemove", ""], ["color", "accent", 1, "mbox-error-chip", 3, "hidden", "removed"], [1, "row", "justify-content-between"], [1, "col-4"], ["mat-mini-fab", "", "matTooltip", "reload data", "color", "warn", "aria-label", "reload icon button with redo icon", 1, "mbox-reload-button", 3, "click"], [1, "col-2"], ["mode", "fab", "title", "New Patient", 3, "submitInfo"], [1, "col-md"], [1, "mat-elevation-z8", 3, "hidden"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "uuid"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by ID", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by Name", 4, "matHeaderCellDef"], ["matColumnDef", "alias"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by Alias", 4, "matHeaderCellDef"], ["matColumnDef", "age"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by Age", 4, "matHeaderCellDef"], ["matColumnDef", "weight"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by Weight", 4, "matHeaderCellDef"], ["matColumnDef", "weightUnit", "hidden", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "height"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by Height", 4, "matHeaderCellDef"], ["matColumnDef", "heightUnit", "hidden", ""], ["matColumnDef", "controls"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of Registered Patients", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by ID"], ["mat-cell", ""], ["type", "button", "title", "copy", 1, "btn", "copy-btn", 3, "cdkCopyToClipboard"], ["aria-hidden", "false", "aria-label", "copy icon"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by Name"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by Alias"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by Age"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by Weight"], ["mat-header-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by Height"], ["mode", "icon", 3, "patient", "submitInfo"], [3, "patient", "submitInfo"], ["mat-header-row", ""], ["mat-row", ""]],
    template: function PatientDataTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-chip-listbox", 3)(4, "mat-chip-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("removed", function PatientDataTableComponent_Template_mat_chip_option_removed_4_listener() {
          return ctx.removeInfoMssg();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 5)(7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-chip-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("removed", function PatientDataTableComponent_Template_mat_chip_option_removed_9_listener() {
          return ctx.removeErrorMssg();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 5)(12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 7)(15, "div", 8)(16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PatientDataTableComponent_Template_button_click_16_listener() {
          return ctx.reloadData();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "restart_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 10)(20, "app-link-patient-form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submitInfo", function PatientDataTableComponent_Template_app_link_patient_form_submitInfo_20_listener($event) {
          return ctx.onEditEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 1)(22, "div", 12)(23, "div", 13)(24, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](25, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, PatientDataTableComponent_th_26_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, PatientDataTableComponent_td_27_Template, 5, 2, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](28, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, PatientDataTableComponent_th_29_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, PatientDataTableComponent_td_30_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](31, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, PatientDataTableComponent_th_32_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, PatientDataTableComponent_td_33_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](34, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, PatientDataTableComponent_th_35_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, PatientDataTableComponent_td_36_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](37, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, PatientDataTableComponent_th_38_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, PatientDataTableComponent_td_39_Template, 2, 2, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](40, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, PatientDataTableComponent_th_41_Template, 2, 0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, PatientDataTableComponent_td_42_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](43, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, PatientDataTableComponent_th_44_Template, 2, 0, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, PatientDataTableComponent_td_45_Template, 2, 2, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](46, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, PatientDataTableComponent_th_47_Template, 2, 0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, PatientDataTableComponent_td_48_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](49, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, PatientDataTableComponent_th_50_Template, 1, 0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, PatientDataTableComponent_td_51_Template, 3, 2, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, PatientDataTableComponent_tr_52_Template, 1, 0, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, PatientDataTableComponent_tr_53_Template, 1, 0, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "mat-paginator", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.infoMessage == undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.infoMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx.showError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.errorMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.datacount == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](9, _c0));
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_12__.CdkCopyToClipboard, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortHeader, _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipListbox, _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipOption, _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipRemove, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatMiniFabButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip, _link_patient_form_link_patient_form_component__WEBPACK_IMPORTED_MODULE_3__.LinkPatientFormComponent, _del_patient_button_del_patient_button_component__WEBPACK_IMPORTED_MODULE_4__.DelPatientButtonComponent],
    styles: ["table[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n.mat-column-uuid[_ngcontent-%COMP%]{\n  padding-right: 24px;\n  text-align: left;\n  font-size: xx-small;\n  width: 320px;;\n}\n\nbutton.copy-btn[_ngcontent-%COMP%]{\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGF0aWVudC1kYXRhLXRhYmxlL3BhdGllbnQtZGF0YS10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOztBQUVGO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbi5tYXQtY29sdW1uLXV1aWR7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogeHgtc21hbGw7XG4gIHdpZHRoOiAzMjBweDs7XG59XG5cbmJ1dHRvbi5jb3B5LWJ0bntcbiAgY29sb3I6IGdyYXk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 3940:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/recording-controls/recording-controls.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecordingControlsComponent: () => (/* binding */ RecordingControlsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


class RecordingControlsComponent {
  constructor() {
    /**
     * Configures how the launcher will be rendered
     * possible values: picture (default) | button
     */
    this.mode = "picture";
    /**
     * Defines if a recording is in progress
     */
    this.recordingInProgress = false;
    this.submitObject = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.startEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.stopEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnChanges(changes) {
    // changes.prop contains the old and the new value...
    let device = changes['device'];
    let isRecording = changes['isRecording'];
    if (device) {} else if (isRecording) {
      let log = isRecording.currentValue ? "recording in progress" : "recording stopped";
      console.log(log);
    } else {}
  }
  startRecording(event) {
    this.startEvent.emit(event);
  }
  stopRecording(event) {
    this.stopEvent.emit(event);
  }
  showRecordingInfo() {}
  static #_ = this.ɵfac = function RecordingControlsComponent_Factory(t) {
    return new (t || RecordingControlsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: RecordingControlsComponent,
    selectors: [["app-recording-controls"]],
    inputs: {
      mode: "mode",
      device: "device",
      recordingInProgress: ["isRecording", "recordingInProgress"]
    },
    outputs: {
      submitObject: "submitObject",
      startEvent: "startEvent",
      stopEvent: "stopEvent"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 11,
    vars: 5,
    consts: [[1, "mbox_action_control"], [3, "hidden", "click"], ["src", "assets/images/record.png", "width", "70px"], ["src", "assets/images/stop-button.png", "width", "50px"], ["src", "assets/images/rec.png", "width", "40px", 1, "mbox_rec_controlaction"], [3, "hidden"]],
    template: function RecordingControlsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecordingControlsComponent_Template_a_click_1_listener($event) {
          return ctx.startRecording($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecordingControlsComponent_Template_a_click_3_listener($event) {
          return ctx.stopRecording($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecordingControlsComponent_Template_a_click_5_listener() {
          return ctx.showRecordingInfo();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "click to Start Recording");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "click to Stop Recording");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.recordingInProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.recordingInProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.recordingInProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.recordingInProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.recordingInProgress);
      }
    },
    styles: [".mbox_action_control[_ngcontent-%COMP%]{\n    text-align: center !important;\n    position: absolute !important;\n    top: 15% !important;\n    right: 10% !important; \n    width: 200px;\n    background-color: white;\n}\n.mbox_action_control[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  cursor: pointer;\n}\n\nimg.mbox_rec_controlaction[_ngcontent-%COMP%]{\n    position: absolute;\n    top: 0px;\n    right: 0;\n    width: 30px;\n    animation: _ngcontent-%COMP%_blink 2s steps(2, end) infinite;\n}\n\n@keyframes _ngcontent-%COMP%_blink {\n    0% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmVjb3JkaW5nLWNvbnRyb2xzL3JlY29yZGluZy1jb250cm9scy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFFBQVE7SUFDUixXQUFXO0lBQ1gsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0k7TUFDRSxVQUFVO0lBQ1o7SUFDQTtNQUNFLFVBQVU7SUFDWjtJQUNBO01BQ0UsVUFBVTtJQUNaO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIubWJveF9hY3Rpb25fY29udHJvbHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICB0b3A6IDE1JSAhaW1wb3J0YW50O1xuICAgIHJpZ2h0OiAxMCUgIWltcG9ydGFudDsgXG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLm1ib3hfYWN0aW9uX2NvbnRyb2wgaW1ne1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmltZy5tYm94X3JlY19jb250cm9sYWN0aW9ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBhbmltYXRpb246IGJsaW5rIDJzIHN0ZXBzKDIsIGVuZCkgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 3830:
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/recordings-data-table/recordings-data-table.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecordingsDataTableComponent: () => (/* binding */ RecordingsDataTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3379);
/* harmony import */ var src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/request.service */ 5467);
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/session.service */ 5813);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _services_backendmap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/backendmap.service */ 9705);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/clipboard */ 4362);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ 1757);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _link_download_data_form_link_download_data_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../link-download-data-form/link-download-data-form.component */ 8647);



















function RecordingsDataTableComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RecordingsDataTableComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 32)(1, "button", 33)(2, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rec_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkCopyToClipboard", rec_r14.uuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rec_r14.uuid, " ");
  }
}
function RecordingsDataTableComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Device ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RecordingsDataTableComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rec_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rec_r15.registeredDevice.name, " ");
  }
}
function RecordingsDataTableComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Started at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RecordingsDataTableComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rec_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rec_r16.startDate, " ");
  }
}
function RecordingsDataTableComponent_th_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Stoped at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RecordingsDataTableComponent_td_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rec_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rec_r17.stopdate, " ");
  }
}
function RecordingsDataTableComponent_th_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Patient ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function RecordingsDataTableComponent_td_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rec_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rec_r18.patient.name, " ");
  }
}
function RecordingsDataTableComponent_th_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "th", 39);
  }
}
function RecordingsDataTableComponent_td_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-link-download-data-form", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rec_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("recording", rec_r19);
  }
}
function RecordingsDataTableComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 41);
  }
}
function RecordingsDataTableComponent_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 42);
  }
}
const _c0 = function () {
  return [5, 10, 20];
};
class RecordingsDataTableComponent {
  constructor(_request, _session, _snackBar, _backend) {
    this._request = _request;
    this._session = _session;
    this._snackBar = _snackBar;
    this._backend = _backend;
    this.submitInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.RECORDING_DATA = [];
    this.showError = false;
    this.datacount = 0;
    this.displayedColumns = ['uuid', 'registeredDevice', 'startDate', 'stopdate', 'patient', 'controls'];
  }
  ngOnInit() {
    this.requestRecordingInfo();
  }
  ngAfterViewInit() {
    if (!this.device) {}
  }
  ngOnChanges(changes) {
    // changes.prop contains the old and the new value...
    let deviceEvent = changes['device'];
    if (deviceEvent) {
      console.log('deviceEvent:');
      console.log(deviceEvent);
      let current = changes['device'].currentValue;
      if (current !== undefined && current !== null) {
        this.device = current;
        this.displayedColumns = ['uuid', 'startDate', 'stopdate', 'patient', 'controls'];
      } else {
        this.displayedColumns = ['uuid', 'registeredDevice', 'startDate', 'stopdate', 'patient', 'controls'];
      }
    }
  }
  requestRecordingInfo() {
    const recordings_end_point = this.device !== null ? this._backend.GET_DEVICE_RECORDINGS_URL(this.device.uuid) : this._backend.GET_RECORDING_LIST;
    //Query data
    this._request.sendBackendGet(recordings_end_point).subscribe({
      next: res => {
        let response = JSON.parse(res);
        this.infoMessage = undefined;
        this.errorMessage = undefined;
        if (!response.error) {
          this.infoMessage = response.message;
          this.RECORDING_DATA = response.response;
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.RECORDING_DATA);
          this.datacount = this.RECORDING_DATA.length;
          if (this.datacount != 0) {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
          console.log("info: " + this.infoMessage);
        } else {
          this.showError = true;
          this.errorMessage = response.message;
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource([]);
          console.log("error: " + this.infoMessage);
        }
      },
      error: err => {
        console.error("HTTP-Error requesting recordings data: " + err);
      },
      complete: () => {
        //hide progress bar
        this._session.setEndQuery();
        this.setInfoSubscriber();
      }
    });
  }
  /**
   * Disappear the Info header after 10 seconds
   */
  setInfoSubscriber() {
    //vanish InfoMessage if any
    if (this.infoMessage !== undefined) {
      const secondsCounter = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.interval)(10 * 1000);
      this.subscriber = secondsCounter.subscribe(n => {
        this.infoMessage = undefined;
        this.subscriber.unsubscribe();
      });
    } else {
      if (this.subscriber !== undefined) {
        this.subscriber.unsubscribe();
      }
    }
  }
  reloadData() {
    this._session.setShowQuery();
    this.requestRecordingInfo();
  }
  removeInfoMssg() {
    this.infoMessage = undefined;
    this.showError = false;
  }
  removeErrorMssg() {
    this.errorMessage = undefined;
    this.showError = false;
  }
  static #_ = this.ɵfac = function RecordingsDataTableComponent_Factory(t) {
    return new (t || RecordingsDataTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_0__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_session_service__WEBPACK_IMPORTED_MODULE_1__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_backendmap_service__WEBPACK_IMPORTED_MODULE_2__.BackendmapService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: RecordingsDataTableComponent,
    selectors: [["app-recordings-data-table"]],
    viewQuery: function RecordingsDataTableComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      }
    },
    inputs: {
      device: "device"
    },
    outputs: {
      submitInfo: "submitInfo"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
    decls: 45,
    vars: 9,
    consts: [[1, "container"], [1, "row", 2, "height", "10px"], [1, "col"], ["aria-label", "Info messages"], ["color", "accent", 1, "mbox-info-chip", 3, "hidden", "removed"], ["matChipRemove", ""], ["color", "accent", 1, "mbox-error-chip", 3, "hidden", "removed"], [1, "row", "justify-content-between"], [1, "col-4"], ["mat-mini-fab", "", "matTooltip", "reload data", "color", "warn", "aria-label", "reload icon button with redo icon", 1, "mbox-reload-button", 3, "click"], [1, "col-2"], [1, "row"], [1, "col-md"], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "uuid"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by ID", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "registeredDevice"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by device", 4, "matHeaderCellDef"], ["matColumnDef", "startDate"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by startDate", 4, "matHeaderCellDef"], ["matColumnDef", "stopdate"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by stopdate", 4, "matHeaderCellDef"], ["matColumnDef", "patient"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by active", 4, "matHeaderCellDef"], ["matColumnDef", "controls"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of Records", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by ID"], ["mat-cell", ""], ["type", "button", "title", "copy", 1, "btn", "copy-btn", 3, "cdkCopyToClipboard"], ["aria-hidden", "false", "aria-label", "copy icon"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by device"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by startDate"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by stopdate"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by active"], ["mat-header-cell", ""], ["mode", "icon", 3, "recording"], ["mat-header-row", ""], ["mat-row", ""]],
    template: function RecordingsDataTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-chip-listbox", 3)(4, "mat-chip-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("removed", function RecordingsDataTableComponent_Template_mat_chip_option_removed_4_listener() {
          return ctx.removeInfoMssg();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 5)(7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-chip-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("removed", function RecordingsDataTableComponent_Template_mat_chip_option_removed_9_listener() {
          return ctx.removeErrorMssg();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 5)(12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 7)(15, "div", 8)(16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RecordingsDataTableComponent_Template_button_click_16_listener() {
          return ctx.reloadData();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "restart_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 11)(21, "div", 12)(22, "div", 13)(23, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](24, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, RecordingsDataTableComponent_th_25_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, RecordingsDataTableComponent_td_26_Template, 5, 2, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](27, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, RecordingsDataTableComponent_th_28_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, RecordingsDataTableComponent_td_29_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](30, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, RecordingsDataTableComponent_th_31_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, RecordingsDataTableComponent_td_32_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](33, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, RecordingsDataTableComponent_th_34_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, RecordingsDataTableComponent_td_35_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](36, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, RecordingsDataTableComponent_th_37_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, RecordingsDataTableComponent_td_38_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](39, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, RecordingsDataTableComponent_th_40_Template, 1, 0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, RecordingsDataTableComponent_td_41_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, RecordingsDataTableComponent_tr_42_Template, 1, 0, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, RecordingsDataTableComponent_tr_43_Template, 1, 0, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "mat-paginator", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx.infoMessage == undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.infoMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", !ctx.showError);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.errorMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c0));
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__.CdkCopyToClipboard, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__.MatChipListbox, _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__.MatChipOption, _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__.MatChipRemove, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatMiniFabButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, _link_download_data_form_link_download_data_form_component__WEBPACK_IMPORTED_MODULE_3__.LinkDownloadDataFormComponent],
    styles: ["table[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n.mat-column-uuid[_ngcontent-%COMP%]{\n  padding-right: 20px;\n  text-align: left;\n  font-size: xx-small;\n  width: 310px;;\n}\n\nbutton.copy-btn[_ngcontent-%COMP%]{\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmVjb3JkaW5ncy1kYXRhLXRhYmxlL3JlY29yZGluZ3MtZGF0YS10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOztBQUVGO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbi5tYXQtY29sdW1uLXV1aWR7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogeHgtc21hbGw7XG4gIHdpZHRoOiAzMTBweDs7XG59XG5cbmJ1dHRvbi5jb3B5LWJ0bntcbiAgY29sb3I6IGdyYXk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 261:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/sensors-data-table/sensors-data-table.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SensorsDataTableComponent: () => (/* binding */ SensorsDataTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 3379);
/* harmony import */ var _services_rx_stomp_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/rx-stomp.service */ 1019);
/* harmony import */ var src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/request.service */ 5467);
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/session.service */ 5813);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _services_backendmap_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/backendmap.service */ 9705);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/clipboard */ 4362);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ 1757);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _bed_canvas_bed_canvas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bed-canvas/bed-canvas.component */ 7982);
/* harmony import */ var _link_sensor_form_link_sensor_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../link-sensor-form/link-sensor-form.component */ 3675);
/* harmony import */ var _del_sensor_button_del_sensor_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../del-sensor-button/del-sensor-button.component */ 8142);
/* harmony import */ var _link_recorder_form_link_recorder_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../link-recorder-form/link-recorder-form.component */ 4025);























function SensorsDataTableComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SensorsDataTableComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 36)(1, "button", 37)(2, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sensor_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cdkCopyToClipboard", sensor_r14.uuid);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", sensor_r14.uuid, " ");
  }
}
function SensorsDataTableComponent_th_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SensorsDataTableComponent_td_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sensor_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", sensor_r15.name, " ");
  }
}
function SensorsDataTableComponent_th_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " transducerType ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SensorsDataTableComponent_td_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sensor_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", sensor_r16.transducerType, " ");
  }
}
function SensorsDataTableComponent_th_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Active ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SensorsDataTableComponent_td_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 36)(1, "span", 42)(2, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SensorsDataTableComponent_td_39_Template_mat_icon_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const sensor_r17 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r18.sendDeactiveSensor(sensor_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "toggle_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SensorsDataTableComponent_td_39_Template_mat_icon_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const sensor_r17 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r20.sendActiveSensor(sensor_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "toggle_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "flip_camera_android");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const sensor_r17 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !sensor_r17.active || ctx_r7.activeUpdateEvent);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", sensor_r17.active || ctx_r7.activeUpdateEvent);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !ctx_r7.activeUpdateEvent);
  }
}
function SensorsDataTableComponent_th_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " AccessProtocol ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function SensorsDataTableComponent_td_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sensor_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", sensor_r21.accessProtocol, " ");
  }
}
function SensorsDataTableComponent_th_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "th", 47);
  }
}
function SensorsDataTableComponent_td_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 36)(1, "app-link-recorder-form", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("submitObject", function SensorsDataTableComponent_td_45_Template_app_link_recorder_form_submitObject_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r23.submitSensor($event));
    })("submitInfo", function SensorsDataTableComponent_td_45_Template_app_link_recorder_form_submitInfo_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r25.onEditEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "app-link-sensor-form", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("submitObject", function SensorsDataTableComponent_td_45_Template_app_link_sensor_form_submitObject_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r26.submitSensor($event));
    })("submitInfo", function SensorsDataTableComponent_td_45_Template_app_link_sensor_form_submitInfo_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r27.onEditEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "app-del-sensor-button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("confirmDeletion", function SensorsDataTableComponent_td_45_Template_app_del_sensor_button_confirmDeletion_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);
      const sensor_r22 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r28.sendDeleteSensor(sensor_r22));
    })("submitInfo", function SensorsDataTableComponent_td_45_Template_app_del_sensor_button_submitInfo_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r29.onEditEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sensor_r22 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("sensor", sensor_r22)("filelist", ctx_r11.RECORD_FILES)("error", ctx_r11.showError);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("sensor", sensor_r22)("success", ctx_r11.submitSuccess)("error", ctx_r11.showError);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("sensor", sensor_r22)("success", ctx_r11.submitSuccess)("error", ctx_r11.showError);
  }
}
function SensorsDataTableComponent_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 51);
  }
}
function SensorsDataTableComponent_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 52);
  }
}
const _c0 = function () {
  return [5, 10, 20];
};
class SensorsDataTableComponent {
  constructor(_rxStomp, _request, _session, _snackBar, _backend) {
    this._rxStomp = _rxStomp;
    this._request = _request;
    this._session = _session;
    this._snackBar = _snackBar;
    this._backend = _backend;
    this.submitInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.SENSOR_DATA = [];
    this.showError = false;
    this.datacount = 0;
    this.RECORD_FILES = [];
    this.brokerFail = false;
    this.activeUpdateEvent = false;
    this.submitSuccess = false;
    this.displayedColumns = ['uuid', 'name', 'transducerType', 'active', 'accessProtocol', 'controls'];
  }
  ngOnInit() {
    this.stompSubscriber = this._rxStomp.connected$.subscribe(state => {
      console.log('state');
      console.log(state);
      console.log(this.device);
      //assign flag
      this.brokerFail = false;
      const uuid = this.device ? this.device.uuid : '';
      //create subscription
      this.queueSubscription = this._rxStomp.watch('/topic/'.concat(uuid)).subscribe(message => {
        console.log('message recieved:');
        console.log(message);
        try {
          const response = JSON.parse(message.body);
          const params = response.PARAMS;
          //ONLINE_SIGNAL
          if (response.ACTION == 'ONLINE_SIGNAL') {
            if (this.device != null) {
              this.device.isOnline = params == uuid;
            }
          } else
            //PROCEDURE_FAIL
            if (response.ACTION == 'PROCEDURE_FAIL') {
              this.errorMessage = params.origin.concat(' Error!: ').concat(params.message);
              this.showError = true;
              this.submitSuccess = false;
              this.activeUpdateEvent = false;
              this._session.setEndQuery();
            } else
              //LIST_SENSORS
              if (response.ACTION == 'LIST_SENSORS') {
                console.log('LIST_SENSORS');
                console.log(params);
                if (this.device != null) {
                  this.SENSOR_DATA = params;
                  this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.SENSOR_DATA);
                  this.datacount = this.SENSOR_DATA.length;
                  if (this.datacount != 0) {
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                  }
                }
                this.activeUpdateEvent = false;
                this._session.setEndQuery();
                //request record-files 
                this.requestRecorderFileInfo();
              }
          //LIST_RECORDER_FILES
          if (response.ACTION == 'LIST_RECORDER_FILES') {
            console.log('LIST_RECORDER_FILES');
            console.log(params);
            this.RECORD_FILES = params;
            this.activeUpdateEvent = false;
            this._session.setEndQuery();
          } else {
            console.log('message not processed:');
            console.log(message);
            this.activeUpdateEvent = false;
            this._session.setEndQuery();
          }
        } catch (err) {
          console.error('Error processing queue message:');
          console.error(err);
          this.activeUpdateEvent = false;
          this._session.setEndQuery();
        }
      });
      //send signal
      this.requestSensorList(this.device);
    });
  }
  ngOnChanges(changes) {
    // changes.prop contains the old and the new value...
    let deviceEvent = changes['device'];
    console.log('changes');
    if (deviceEvent) {
      let current = changes['device'].currentValue;
      if (current !== undefined) {
        this.device = current;
      }
    }
  }
  requestSensorList(device) {
    //check connection
    if (this._rxStomp.connected()) {
      const command = JSON.stringify({
        ACTION: 'LIST_SENSORS',
        PARAMS: ''
      });
      const uuid = this.device ? this.device.uuid : '';
      this._rxStomp.publish({
        destination: "/queue/".concat(uuid),
        body: command
      });
    } else {
      this.submitInfo.emit("Failed Connecting websocket-Server ");
    }
  }
  sendActiveSensor(sensor) {
    if (!this.activeUpdateEvent) {
      this.activeUpdateEvent = true;
      if (this._rxStomp.connected()) {
        const command = JSON.stringify({
          ACTION: 'ACTIVATE_SENSOR',
          PARAMS: {
            uuid: sensor.uuid
          }
        });
        const uuid = this.device ? this.device.uuid : '';
        this._rxStomp.publish({
          destination: "/queue/".concat(uuid),
          body: command
        });
      } else {
        this.submitInfo.emit("Failed Connecting websocket-Server ");
        this.activeUpdateEvent = false;
      }
    }
  }
  sendDeactiveSensor(sensor) {
    if (!this.activeUpdateEvent) {
      this.activeUpdateEvent = true;
      if (this._rxStomp.connected()) {
        const command = JSON.stringify({
          ACTION: 'DEACTIVATE_SENSOR',
          PARAMS: {
            uuid: sensor.uuid
          }
        });
        const uuid = this.device ? this.device.uuid : '';
        this._rxStomp.publish({
          destination: "/queue/".concat(uuid),
          body: command
        });
      } else {
        this.submitInfo.emit("Failed Connecting websocket-Server ");
        this.activeUpdateEvent = false;
      }
    }
  }
  sendAddSensor(sensor) {
    this._session.setShowQuery();
    if (!this.activeUpdateEvent) {
      this.activeUpdateEvent = true;
      if (this._rxStomp.connected()) {
        this._session.setShowQuery();
        const command = JSON.stringify({
          ACTION: 'ADD_SENSOR',
          PARAMS: {
            sensor: sensor
          }
        });
        const uuid = this.device ? this.device.uuid : '';
        this._rxStomp.publish({
          destination: "/queue/".concat(uuid),
          body: command
        });
      } else {
        this.submitInfo.emit("Failed Connecting websocket-Server ");
        this.activeUpdateEvent = false;
      }
    }
  }
  sendDeleteSensor(sensor) {
    if (!this.activeUpdateEvent) {
      this.activeUpdateEvent = true;
      if (this._rxStomp.connected()) {
        this._session.setShowQuery();
        const command = JSON.stringify({
          ACTION: 'REMOVE_SENSOR',
          PARAMS: {
            uuid: sensor.uuid
          }
        });
        const uuid = this.device ? this.device.uuid : '';
        this._rxStomp.publish({
          destination: "/queue/".concat(uuid),
          body: command
        });
      } else {
        this.submitInfo.emit("Failed Connecting websocket-Server ");
        this.activeUpdateEvent = false;
      }
    }
  }
  requestRecorderFileInfo() {
    if (!this.activeUpdateEvent) {
      this.activeUpdateEvent = true;
      if (this._rxStomp.connected()) {
        this._session.setShowQuery();
        const command = JSON.stringify({
          ACTION: 'LIST_RECORDER_FILES',
          PARAMS: {}
        });
        const uuid = this.device ? this.device.uuid : '';
        this._rxStomp.publish({
          destination: "/queue/".concat(uuid),
          body: command
        });
      } else {
        this.submitInfo.emit("Failed Connecting websocket-Server ");
        this.activeUpdateEvent = false;
      }
    }
  }
  requestSensorInfo() {
    //Query data
    const uuid = this.device ? this.device.uuid : '';
    this._request.sendBackendGet(this._backend.GET_DEVICE_SENSOR_URL(uuid)).subscribe({
      next: res => {
        let response = JSON.parse(res);
        this.infoMessage = undefined;
        this.errorMessage = undefined;
        if (!response.error) {
          this.infoMessage = response.message;
          this.SENSOR_DATA = response.response;
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.SENSOR_DATA);
          this.datacount = this.SENSOR_DATA.length;
          if (this.datacount != 0) {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
          console.log("info: " + this.infoMessage);
        } else {
          this.showError = true;
          this.errorMessage = response.message;
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource([]);
          console.log("error: " + this.infoMessage);
        }
      },
      error: err => {
        console.error("HTTP-Error requesting sensor data: " + err);
        this._session.setEndQuery();
      },
      complete: () => {
        //hide progress bar
        this._session.setEndQuery();
        this.setInfoSubscriber();
      }
    });
  }
  /**
   * Disappear the Info header after 10 seconds
   */
  setInfoSubscriber() {
    //vanish InfoMessage if any
    if (this.infoMessage !== undefined) {
      const secondsCounter = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.interval)(10 * 1000);
      this.subscriber = secondsCounter.subscribe(n => {
        this.infoMessage = undefined;
        this.subscriber.unsubscribe();
      });
    } else {
      if (this.subscriber !== undefined) {
        this.subscriber.unsubscribe();
      }
    }
  }
  reloadData() {
    this._session.setShowQuery();
    this.requestSensorList(this.device);
  }
  removeInfoMssg() {
    this.infoMessage = undefined;
    this.showError = false;
  }
  removeErrorMssg() {
    this.errorMessage = undefined;
    this.showError = false;
  }
  submitSensor(event) {
    console.log(event);
    const sensor = event;
    this.sendAddSensor(sensor);
  }
  onEditEvent(message) {
    this.openSnackBar(message);
    this.reloadData();
  }
  openSnackBar(message) {
    console.log(message);
    this._snackBar.open(message, 'dismiss', {
      duration: 7 * 1000
    });
  }
  static #_ = this.ɵfac = function SensorsDataTableComponent_Factory(t) {
    return new (t || SensorsDataTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_rx_stomp_service__WEBPACK_IMPORTED_MODULE_0__.RxStompService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_session_service__WEBPACK_IMPORTED_MODULE_2__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_backendmap_service__WEBPACK_IMPORTED_MODULE_3__.BackendmapService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: SensorsDataTableComponent,
    selectors: [["app-sensors-data-table"]],
    viewQuery: function SensorsDataTableComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      }
    },
    inputs: {
      device: "device"
    },
    outputs: {
      submitInfo: "submitInfo"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]],
    decls: 49,
    vars: 13,
    consts: [[1, "container"], [1, "row", 2, "height", "10px"], [1, "col"], ["aria-label", "Info messages"], ["color", "accent", 1, "mbox-info-chip", 3, "hidden", "removed"], ["matChipRemove", ""], ["color", "accent", 1, "mbox-error-chip", 3, "hidden", "removed"], [1, "row", "justify-content-end"], [1, "col-md-2"], ["mode", "button", 3, "device", "sensorList"], [1, "row", "justify-content-between"], [1, "col-4"], ["mat-mini-fab", "", "matTooltip", "reload data", "color", "warn", "aria-label", "reload icon button with redo icon", 1, "mbox-reload-button", 3, "click"], [1, "col-2"], ["mode", "fab", "title", "New Sensor", 3, "success", "error", "submitObject", "submitInfo"], [1, "row"], [1, "col-md"], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "uuid"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by ID", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by Name", 4, "matHeaderCellDef"], ["matColumnDef", "transducerType"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by transducerType", 4, "matHeaderCellDef"], ["matColumnDef", "active"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by active", 4, "matHeaderCellDef"], ["matColumnDef", "accessProtocol"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by accessProtocol", 4, "matHeaderCellDef"], ["matColumnDef", "controls"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of Sensors", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by ID"], ["mat-cell", ""], ["type", "button", "title", "copy", 1, "btn", "copy-btn", 3, "cdkCopyToClipboard"], ["aria-hidden", "false", "aria-label", "copy icon"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by Name"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by transducerType"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by active"], [1, "mbox_actionable"], [2, "color", "#ff4081", 3, "hidden", "click"], [2, "color", "gray", 3, "hidden", "click"], [1, "loader", 3, "hidden"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by accessProtocol"], ["mat-header-cell", ""], ["mode", "icon", 3, "sensor", "filelist", "error", "submitObject", "submitInfo"], ["mode", "icon", "title", "Edit Sensor", 3, "sensor", "success", "error", "submitObject", "submitInfo"], [3, "sensor", "success", "error", "confirmDeletion", "submitInfo"], ["mat-header-row", ""], ["mat-row", ""]],
    template: function SensorsDataTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-chip-listbox", 3)(4, "mat-chip-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("removed", function SensorsDataTableComponent_Template_mat_chip_option_removed_4_listener() {
          return ctx.removeInfoMssg();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 5)(7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-chip-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("removed", function SensorsDataTableComponent_Template_mat_chip_option_removed_9_listener() {
          return ctx.removeErrorMssg();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "button", 5)(12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 7)(15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "app-bed-canvas", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 10)(18, "div", 11)(19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SensorsDataTableComponent_Template_button_click_19_listener() {
          return ctx.reloadData();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "restart_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 13)(23, "app-link-sensor-form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("submitObject", function SensorsDataTableComponent_Template_app_link_sensor_form_submitObject_23_listener($event) {
          return ctx.submitSensor($event);
        })("submitInfo", function SensorsDataTableComponent_Template_app_link_sensor_form_submitInfo_23_listener($event) {
          return ctx.onEditEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 15)(25, "div", 16)(26, "div", 17)(27, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](28, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, SensorsDataTableComponent_th_29_Template, 2, 0, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, SensorsDataTableComponent_td_30_Template, 5, 2, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](31, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, SensorsDataTableComponent_th_32_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, SensorsDataTableComponent_td_33_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](34, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, SensorsDataTableComponent_th_35_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, SensorsDataTableComponent_td_36_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](37, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, SensorsDataTableComponent_th_38_Template, 2, 0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, SensorsDataTableComponent_td_39_Template, 8, 3, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](40, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](41, SensorsDataTableComponent_th_41_Template, 2, 0, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](42, SensorsDataTableComponent_td_42_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](43, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, SensorsDataTableComponent_th_44_Template, 1, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, SensorsDataTableComponent_td_45_Template, 4, 9, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, SensorsDataTableComponent_tr_46_Template, 1, 0, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, SensorsDataTableComponent_tr_47_Template, 1, 0, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](48, "mat-paginator", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.infoMessage == undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.infoMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !ctx.showError);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.errorMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("device", ctx.device)("sensorList", ctx.SENSOR_DATA);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("success", ctx.submitSuccess)("error", ctx.showError);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](12, _c0));
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_15__.CdkCopyToClipboard, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipListbox, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipOption, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipRemove, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatMiniFabButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip, _bed_canvas_bed_canvas_component__WEBPACK_IMPORTED_MODULE_4__.BedCanvasComponent, _link_sensor_form_link_sensor_form_component__WEBPACK_IMPORTED_MODULE_5__.LinkSensorFormComponent, _del_sensor_button_del_sensor_button_component__WEBPACK_IMPORTED_MODULE_6__.DelSensorButtonComponent, _link_recorder_form_link_recorder_form_component__WEBPACK_IMPORTED_MODULE_7__.LinkRecorderFormComponent],
    styles: [".mat-column-uuid[_ngcontent-%COMP%]{\n    padding-right: 24px;\n    text-align: left;\n    font-size: xx-small;\n    width: 320px;;\n  }\n\n  .loader[_ngcontent-%COMP%]{\n    color: #7979e1;\n    animation: _ngcontent-%COMP%_spin 0.5s linear infinite;\n  }\n\n  @keyframes _ngcontent-%COMP%_spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(180deg); }\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2Vuc29ycy1kYXRhLXRhYmxlL3NlbnNvcnMtZGF0YS10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztJQUNkLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLEtBQUssdUJBQXVCLEVBQUU7SUFDOUIsT0FBTyx5QkFBeUIsRUFBRTtFQUNwQyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY29sdW1uLXV1aWR7XG4gICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XG4gICAgd2lkdGg6IDMyMHB4OztcbiAgfVxuXG4gIC5sb2FkZXJ7XG4gICAgY29sb3I6ICM3OTc5ZTE7XG4gICAgYW5pbWF0aW9uOiBzcGluIDAuNXMgbGluZWFyIGluZmluaXRlO1xuICB9XG5cbiAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IH1cbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 4200:
/*!*******************************************!*\
  !*** ./src/app/shared/data/acc-sensor.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccSensor: () => (/* binding */ AccSensor)
/* harmony export */ });
class AccSensor {
  constructor() {
    this.uuid = "";
    this.name = "";
    this.transducerType = "ACC";
    this.physicalDimension = "V";
    this.physicalMin = -5;
    this.physicalMax = 5;
    this.digitalMin = -2048;
    this.digitalMax = 2047;
    this.xLocation = 0;
    this.yLocation = 0;
    this.yDimension = "5";
    this.xDimension = "5";
    this.active = true;
    this.accessProtocol = "I2C";
    this.portAddress = "0";
    this.recorder = {
      command: "",
      filepath: "",
      streamer: false,
      description: ""
    };
  }
}

/***/ }),

/***/ 1553:
/*!**********************************************!*\
  !*** ./src/app/shared/data/custom-sensor.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomSensor: () => (/* binding */ CustomSensor)
/* harmony export */ });
class CustomSensor {
  constructor() {
    this.uuid = "";
    this.name = "";
    this.transducerType = "CUSTOM";
    this.physicalDimension = "";
    this.physicalMin = 0;
    this.physicalMax = 0;
    this.digitalMin = 0;
    this.digitalMax = 0;
    this.xLocation = 0;
    this.yLocation = 0;
    this.yDimension = "";
    this.xDimension = "";
    this.active = true;
    this.accessProtocol = "";
    this.portAddress = "";
    this.recorder = {
      command: "",
      filepath: "",
      description: ""
    };
  }
}

/***/ }),

/***/ 2211:
/*!******************************************!*\
  !*** ./src/app/shared/data/fsrsensor.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FSRSensor: () => (/* binding */ FSRSensor)
/* harmony export */ });
class FSRSensor {
  constructor() {
    this.uuid = "";
    this.name = "";
    this.transducerType = "FSR";
    this.physicalDimension = "V";
    this.physicalMin = -5;
    this.physicalMax = 5;
    this.digitalMin = -2048;
    this.digitalMax = 2047;
    this.xLocation = 0;
    this.yLocation = 0;
    this.yDimension = "5";
    this.xDimension = "5";
    this.active = true;
    this.accessProtocol = "I2C";
    this.portAddress = "0";
    this.recorder = {
      command: "",
      filepath: "",
      description: ""
    };
  }
}

/***/ }),

/***/ 4537:
/*!******************************************!*\
  !*** ./src/app/shared/data/imusensor.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IMUSensor: () => (/* binding */ IMUSensor)
/* harmony export */ });
class IMUSensor {
  constructor() {
    this.uuid = "";
    this.name = "";
    this.transducerType = "IMU";
    this.physicalDimension = "V";
    this.physicalMin = -5;
    this.physicalMax = 5;
    this.digitalMin = -2048;
    this.digitalMax = 2047;
    this.xLocation = 0;
    this.yLocation = 0;
    this.yDimension = "5";
    this.xDimension = "5";
    this.active = true;
    this.accessProtocol = "I2C";
    this.portAddress = "0";
    this.recorder = {
      command: "",
      filepath: "",
      description: ""
    };
  }
}

/***/ }),

/***/ 7104:
/*!*******************************************!*\
  !*** ./src/app/shared/data/ptz-sensor.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PtzSensor: () => (/* binding */ PtzSensor)
/* harmony export */ });
class PtzSensor {
  constructor() {
    this.uuid = "";
    this.name = "";
    this.transducerType = "PTZ";
    this.physicalDimension = "V";
    this.physicalMin = -5;
    this.physicalMax = 5;
    this.digitalMin = -2048;
    this.digitalMax = 2047;
    this.xLocation = 0;
    this.yLocation = 0;
    this.yDimension = "5";
    this.xDimension = "5";
    this.active = true;
    this.accessProtocol = "I2C";
    this.portAddress = "0";
    this.recorder = {
      command: "",
      streamer: false,
      filepath: "",
      description: ""
    };
  }
}

/***/ }),

/***/ 9705:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/backendmap.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackendmapService: () => (/* binding */ BackendmapService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class BackendmapService {
  DELETE_PATIENT_URL(uuid) {
    return this.DELETE_PATIENT_DATA.concat(uuid);
  }
  GET_DEVICE_SENSOR_URL(uuid) {
    return this.GET_SENSOR_LIST.concat("/" + uuid);
  }
  GET_DEVICE_RECORDINGS_URL(device_uuid) {
    return this.GET_RECORDING_LIST.concat('device/').concat(device_uuid);
  }
  GET_RAW_DATARECORDS_URL(recording_uuid) {
    return this.GET_DATARECORDS.concat("raw/").concat(recording_uuid);
  }
  GET_FORMAT_DATARECORDS_URL(format, recording_uuid) {
    return this.GET_DATARECORDS.concat(format).concat("/").concat(recording_uuid);
  }
  constructor() {
    this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backend_url;
    /** Patient infromation */
    this.GET_PATIENT_DATA = this.BASE_URL.concat("/users/patients");
    this.POST_PATIENT_DATA = this.BASE_URL.concat("/users/patient");
    this.DELETE_PATIENT_DATA = this.BASE_URL.concat("/users/delete/"); //{uuid}
    this.GET_RANDOM_UUID_URL = this.BASE_URL.concat("/users/randomuuid");
    /** Devices information */
    this.GET_DEVICES_LIST = this.BASE_URL.concat("/devices/dto");
    this.POST_DEVICE_DATA = this.BASE_URL.concat("/devices/add");
    this.PUT_DEVICE_DATA = this.BASE_URL.concat("/devices/add");
    /** Sensor Information */
    this.GET_SENSOR_LIST = this.BASE_URL.concat("/devices/sensors"); //{uuid}
    /** Recording Information */
    this.GET_RECORDING_LIST = this.BASE_URL.concat("/recordings/"); //device/{deviceuuid}
    this.GET_DATARECORDS = this.BASE_URL.concat("/recordings/datarecords/zip/"); //{recuuid}
  }
  static #_ = this.ɵfac = function BackendmapService_Factory(t) {
    return new (t || BackendmapService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: BackendmapService,
    factory: BackendmapService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 2735:
/*!********************************************************!*\
  !*** ./src/app/shared/services/global-util.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalUtilService: () => (/* binding */ GlobalUtilService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

const heightUnits = [{
  value: 'centimeters',
  viewValue: 'cm'
}, {
  value: 'meters',
  viewValue: 'mt'
}, {
  value: 'inches',
  viewValue: 'inch'
}, {
  value: 'feets',
  viewValue: 'ft'
}];
const weightUnits = [{
  value: 'kilograms',
  viewValue: 'Kg'
}, {
  value: 'grams',
  viewValue: 'gr'
}, {
  value: 'pounds',
  viewValue: 'lbs'
}, {
  value: 'ounces',
  viewValue: 'Oz'
}];
class GlobalUtilService {
  constructor() {
    this.hunits = heightUnits;
    this.wunits = weightUnits;
  }
  static #_ = this.ɵfac = function GlobalUtilService_Factory(t) {
    return new (t || GlobalUtilService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: GlobalUtilService,
    factory: GlobalUtilService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 5467:
/*!****************************************************!*\
  !*** ./src/app/shared/services/request.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestService: () => (/* binding */ RequestService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session.service */ 5813);






class RequestService {
  constructor(http, session) {
    this.http = http;
    this.session = session;
    this.ResponseContentType = {
      Json: 'JSON',
      JsonHeader: 'application/json;odata=verbose;charset=utf-8',
      Xml: 'XML'
    };
    const token = session.getSessionDeviceData() ? JSON.stringify(session.getSessionDeviceData()?.token) : '';
    this.authHeader = {
      'device': token,
      'ContentType': this.ResponseContentType.JsonHeader
    };
  }
  /**
   *
   * @param url Send GET to backend
   */
  sendBackendGet(url, validacion) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders(this.authHeader);
    const httpOptions = {
      responseType: this.ResponseContentType.Json,
      headers: headers
    }; /** */
    return this.http.get(url, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Send POST to backend
   */
  sendBackendPost(url, body, validacion) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders(this.authHeader);
    const httpOptions = {
      responseType: this.ResponseContentType.Json,
      headers: headers
    }; /** */
    return this.http.post(url, body, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * Send PUT to backend
   */
  sendBackendPut(url, body, validacion) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders(this.authHeader);
    const httpOptions = {
      responseType: this.ResponseContentType.Json,
      headers: headers
    }; /** */
    return this.http.put(url, body, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   *
   * @param url send DELETE to backend
   * @param body
   */
  sendBackendDelete(url, validacion) {
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders(this.authHeader);
    const httpOptions = {
      responseType: this.ResponseContentType.Json,
      headers: headers
    }; /** */
    return this.http.delete(url, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
  }
  /**
   * handle errors from HTTP request
   */
  handleError(error) {
    if (error.error instanceof ErrorEvent) {
      // Access error
      console.error('Request operation failed.', error);
    } else {
      // Error response from backend server
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error(error.status + '-' + error.message));
  }
  static #_ = this.ɵfac = function RequestService_Factory(t) {
    return new (t || RequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: RequestService,
    factory: RequestService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 1019:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/rx-stomp.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RxStompService: () => (/* binding */ RxStompService),
/* harmony export */   myRxStompConfig: () => (/* binding */ myRxStompConfig),
/* harmony export */   rxStompServiceDestroy: () => (/* binding */ rxStompServiceDestroy),
/* harmony export */   rxStompServiceFactory: () => (/* binding */ rxStompServiceFactory)
/* harmony export */ });
/* harmony import */ var _stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stomp/rx-stomp */ 9979);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);



//Configuration
const myRxStompConfig = {
  // server
  brokerURL: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backend_ws,
  // Headers
  // Typical keys: login, passcode, host
  connectHeaders: {
    login: '',
    passcode: ''
  },
  // How often to heartbeat (milliseconds) - 0 to disable
  heartbeatIncoming: 0,
  heartbeatOutgoing: 20000,
  // Wait in milliseconds before attempting auto reconnect
  // Set to 0 to disable
  // Typical value 500 (500 milli seconds)
  reconnectDelay: 30 * 1000,
  // Will log diagnostics on console
  // It can be quite verbose, not recommended in production
  // Skip this key to stop logging to console
  debug: msg => {
    console.log(new Date(), msg);
  }
};
class RxStompService extends _stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_1__.RxStomp {
  constructor() {
    super();
  }
  static #_ = this.ɵfac = function RxStompService_Factory(t) {
    return new (t || RxStompService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: RxStompService,
    factory: RxStompService.ɵfac,
    providedIn: 'root'
  });
}

//singleton
const rxStomp = new RxStompService();
function rxStompServiceFactory() {
  //const rxStomp = new RxStompService();
  rxStomp.configure(myRxStompConfig);
  rxStomp.activate();
  return rxStomp;
}
function rxStompServiceDestroy() {
  rxStomp.deactivate();
}

/***/ }),

/***/ 5813:
/*!****************************************************!*\
  !*** ./src/app/shared/services/session.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionMngr: () => (/* binding */ SessionMngr),
/* harmony export */   SessionService: () => (/* binding */ SessionService),
/* harmony export */   sessionMngr: () => (/* binding */ sessionMngr)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);



//singleton
class SessionMngr {
  constructor() {
    this.device = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.deviceObserver = this.device.asObservable();
    this.sessview = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.sessviewObserver = this.sessview.asObservable();
    this._queryMode = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    this.isOnQueryObs = this._queryMode.asObservable();
    var box = sessionStorage.getItem("MBX_CURRENTDEVICE");
    if (box != null && box != 'undefined') {
      let rawData = atob(box);
      const encoder = new TextEncoder();
      //rawData = Buffer.from(rawData,'base64').toString('utf8'); // Buffer.from(data).toString('base64');
      let data = JSON.parse(rawData);
      this.device.next(data);
    }
  }
  set ActiveDevice(val) {
    //if null deletes all session data
    if (val == null) {
      sessionStorage.clear();
    } else {
      //var encoded = Buffer.from(JSON.stringify(val)).toString('base64');
      var encoded = btoa(JSON.stringify(val));
      sessionStorage.setItem("MBX_CURRENTDEVICE", encoded);
      this.device.next(val);
    }
  }
  get ActiveDevice() {
    var box = sessionStorage.getItem("MBX_CURRENTDEVICE");
    if (box != null && box != 'undefined') {
      let rawData = atob(box);
      //rawData = Buffer.from(rawData,'base64').toString('utf8');
      let data = JSON.parse(rawData);
      this.device.next(data);
      return data;
    } else {
      return null;
    }
  }
  observerForActiveDevice() {
    return this.deviceObserver;
  }
  sessionExist() {
    return !(sessionStorage.getItem("MBX_CURRENTDEVICE") === null);
  }
  setQueryMode() {
    this._queryMode.next(true);
  }
  unsetQueryMode() {
    this._queryMode.next(false);
  }
}
const sessionMngr = new SessionMngr();
class SessionService {
  constructor(_router) {
    this._router = _router;
    this.sessionManager = sessionMngr;
  }
  startSession(device, rxStomp = null) {
    this.sessionManager.ActiveDevice = device;
    console.log("Session created" + this.sessionManager.ActiveDevice);
    this._router.navigate([{
      outlets: {
        primary: 'connecteddevice'
      }
    }]);
    if (rxStomp != null) {
      this._rxStomp = rxStomp;
    }
  }
  getSessionDeviceData() {
    return this.sessionManager.ActiveDevice;
  }
  isSessionStarted() {
    return this.sessionManager.sessionExist();
  }
  toHome() {
    this._router.navigate([{
      outlets: {
        primary: 'home'
      }
    }]);
  }
  toPath(path) {
    this._router.navigate([{
      outlets: {
        primary: path
      }
    }]);
  }
  closeSession() {
    this.sessionManager.ActiveDevice = null;
    if (this._rxStomp != null) {
      this._rxStomp.deactivate();
    }
    this.toHome();
  }
  setShowQuery() {
    this.sessionManager.setQueryMode();
  }
  setEndQuery() {
    this.sessionManager.unsetQueryMode();
  }
  static #_ = this.ɵfac = function SessionService_Factory(t) {
    return new (t || SessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: SessionService,
    factory: SessionService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  testing: true,
  backend_url: "http://141.37.168.27:8080/morpheusagent",
  backend_ws: "ws://141.37.168.27:8080/morpheusagent-websocket"
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ 4700);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 8629);
/// <reference types="@angular/localize" />



_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4686), __webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map