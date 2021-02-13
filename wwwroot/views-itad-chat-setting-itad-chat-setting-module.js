(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-itad-chat-setting-itad-chat-setting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/itad-chat-setting/itad-chat-setting.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/itad-chat-setting/itad-chat-setting.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">                     \n            <div class=\"form-group\">\n                <div class=\"input-group row\">\n                  <label for=\"exampleSelect1\" class=\"col-lg-7\">User Roles</label>\n                  <select class=\"form-control\" id=\"roleid\" name=\"roleID\" [(ngModel)]=\"model.roleID\" (ngModelChange)=\"loadMenu($event)\">\n                    <option disabled selected=\"selected\" [value]=\"0\">Select Role</option>\n                    <!-- <option [value]=\"1\">PO Chat</option>\n                    <option [value]=\"2\">Orders Chat</option>\n                    <option [value]=\"3\">User Orders Chat</option> -->\n                    <option [value]=\"4\">ITAD Chat</option>\n                  </select>\n                </div>\n              </div> \n          </div>\n          <div class=\"card-body\">\n              <div *ngFor=\"let user of users\" class=\"row\" style=\"border-bottom: 1px solid #e6d9d9;margin: 8px -20px;\">\n                <label for=\"exampleSelect1\" class=\"col-md-11\">{{user.name}}</label>\n                <label class=\"switch switch-label switch-primary\">\n                    <input type=\"checkbox\" class=\"switch-input\" [checked]=\"user.is_active\"  (click)=\"activateChat($event,user.user_id)\">\n                    <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n                </label>\n            </div>\n          </div>\n        </div>\n      </div><!--/.col-->");

/***/ }),

/***/ "./src/app/views/itad-chat-setting/itad-chat-setting-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/itad-chat-setting/itad-chat-setting-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ItadChatSettingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItadChatSettingRoutingModule", function() { return ItadChatSettingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _itad_chat_setting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./itad-chat-setting.component */ "./src/app/views/itad-chat-setting/itad-chat-setting.component.ts");




var routes = [{
        path: '',
        component: _itad_chat_setting_component__WEBPACK_IMPORTED_MODULE_3__["ItadChatSettingComponent"],
        data: {
            title: 'Itad Chat Setting'
        }
    }];
var ItadChatSettingRoutingModule = /** @class */ (function () {
    function ItadChatSettingRoutingModule() {
    }
    ItadChatSettingRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ItadChatSettingRoutingModule);
    return ItadChatSettingRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/itad-chat-setting/itad-chat-setting.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/views/itad-chat-setting/itad-chat-setting.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2l0YWQtY2hhdC1zZXR0aW5nL2l0YWQtY2hhdC1zZXR0aW5nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/itad-chat-setting/itad-chat-setting.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/itad-chat-setting/itad-chat-setting.component.ts ***!
  \************************************************************************/
/*! exports provided: ItadChatSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItadChatSettingComponent", function() { return ItadChatSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/loadspecs.service */ "./src/app/_services/loadspecs.service.ts");




var ItadChatSettingComponent = /** @class */ (function () {
    function ItadChatSettingComponent(loadspecsService, alertify) {
        this.loadspecsService = loadspecsService;
        this.alertify = alertify;
        this.model = {};
    }
    ItadChatSettingComponent.prototype.ngOnInit = function () {
        this.model.roleID = '0';
    };
    ItadChatSettingComponent.prototype.loadMenu = function (id) {
        var _this = this;
        return this.loadspecsService.getChatSetting().subscribe(function (users) {
            _this.users = users.filter(function (proj) { return (proj.chat_type === Number(id)); });
        });
    };
    ItadChatSettingComponent.prototype.activateChat = function (event, user_id) {
        var _this = this;
        this.setrole = this.model.roleID;
        if (event.target.checked === true) {
            this.model = { user_id: user_id, chat_type: this.setrole, status: 1 };
        }
        else if (event.target.checked === false) {
            this.model = { user_id: user_id, chat_type: this.setrole, status: 0 };
        }
        this.loadspecsService.activateChat(this.model).subscribe(function () {
            _this.model.roleID = _this.setrole;
            _this.loadMenu(_this.setrole);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ItadChatSettingComponent.ctorParameters = function () { return [
        { type: _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_3__["LoadspecsService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"] }
    ]; };
    ItadChatSettingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-itad-chat-setting',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./itad-chat-setting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/itad-chat-setting/itad-chat-setting.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./itad-chat-setting.component.css */ "./src/app/views/itad-chat-setting/itad-chat-setting.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_loadspecs_service__WEBPACK_IMPORTED_MODULE_3__["LoadspecsService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]])
    ], ItadChatSettingComponent);
    return ItadChatSettingComponent;
}());



/***/ }),

/***/ "./src/app/views/itad-chat-setting/itad-chat-setting.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/itad-chat-setting/itad-chat-setting.module.ts ***!
  \*********************************************************************/
/*! exports provided: ItadChatSettingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItadChatSettingModule", function() { return ItadChatSettingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _itad_chat_setting_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./itad-chat-setting-routing.module */ "./src/app/views/itad-chat-setting/itad-chat-setting-routing.module.ts");
/* harmony import */ var _itad_chat_setting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./itad-chat-setting.component */ "./src/app/views/itad-chat-setting/itad-chat-setting.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var ItadChatSettingModule = /** @class */ (function () {
    function ItadChatSettingModule() {
    }
    ItadChatSettingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_itad_chat_setting_component__WEBPACK_IMPORTED_MODULE_4__["ItadChatSettingComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _itad_chat_setting_routing_module__WEBPACK_IMPORTED_MODULE_3__["ItadChatSettingRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ]
        })
    ], ItadChatSettingModule);
    return ItadChatSettingModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-itad-chat-setting-itad-chat-setting-module.js.map