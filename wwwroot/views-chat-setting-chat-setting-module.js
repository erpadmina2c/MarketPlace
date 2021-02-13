(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-chat-setting-chat-setting-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/chat-setting/chat-setting.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/chat-setting/chat-setting.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">                     \n            <div class=\"form-group\">\n                <div class=\"input-group row\">\n                  <label for=\"exampleSelect1\" class=\"col-lg-7\">User Roles</label>\n                  <select class=\"form-control\" id=\"roleid\" name=\"roleID\" [(ngModel)]=\"model.roleID\" (ngModelChange)=\"loadMenu($event)\">\n                    <option disabled selected=\"selected\" [value]=\"0\">Select Role</option>\n                    <option [value]=\"1\">PO Chat</option>\n                    <option [value]=\"2\">Orders Chat</option>\n                    <option [value]=\"3\">User Orders Chat</option>\n                    <option [value]=\"4\">ITAD Chat</option>\n                  </select>\n                </div>\n              </div> \n          </div>\n          <div class=\"card-body\">\n              <div *ngFor=\"let user of users\" class=\"row\" style=\"border-bottom: 1px solid #e6d9d9;margin: 8px -20px;\">\n                <label for=\"exampleSelect1\" class=\"col-md-11\">{{user.name}}</label>\n                <label class=\"switch switch-label switch-primary\">\n                    <input type=\"checkbox\" class=\"switch-input\" [checked]=\"user.is_active\"  (click)=\"activateChat($event,user.user_id)\">\n                    <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n                </label>\n            </div>\n          </div>\n        </div>\n      </div><!--/.col-->");

/***/ }),

/***/ "./src/app/views/chat-setting/chat-setting-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/chat-setting/chat-setting-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ChatSettingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatSettingRoutingModule", function() { return ChatSettingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chat_setting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-setting.component */ "./src/app/views/chat-setting/chat-setting.component.ts");




var routes = [
    {
        path: '',
        component: _chat_setting_component__WEBPACK_IMPORTED_MODULE_3__["ChatSettingComponent"],
        data: {
            title: 'Chat Setting'
        }
    }
];
var ChatSettingRoutingModule = /** @class */ (function () {
    function ChatSettingRoutingModule() {
    }
    ChatSettingRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ChatSettingRoutingModule);
    return ChatSettingRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/chat-setting/chat-setting.component.css":
/*!***************************************************************!*\
  !*** ./src/app/views/chat-setting/chat-setting.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.card-header { \r\n    background: #062736!important;\r\n    color: #08ab9e!important;\r\n}\r\n.card {\r\n    border: 2px solid #062736;\r\n    border-radius: 0px;\r\n}\r\n.switch-primary .switch-input:checked + .switch-slider {\r\n    background-color: #08AB9E;\r\n    border-color: #08AB9E;\r\n    color: #062736;\r\n}\r\n.switch-slider {\r\n    border-radius: 0rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2hhdC1zZXR0aW5nL2NoYXQtc2V0dGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3Qix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvY2hhdC1zZXR0aW5nL2NoYXQtc2V0dGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jYXJkLWhlYWRlciB7IFxyXG4gICAgYmFja2dyb3VuZDogIzA2MjczNiFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzA4YWI5ZSFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzA2MjczNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG4uc3dpdGNoLXByaW1hcnkgLnN3aXRjaC1pbnB1dDpjaGVja2VkICsgLnN3aXRjaC1zbGlkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4QUI5RTtcclxuICAgIGJvcmRlci1jb2xvcjogIzA4QUI5RTtcclxuICAgIGNvbG9yOiAjMDYyNzM2O1xyXG59XHJcbi5zd2l0Y2gtc2xpZGVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDByZW07XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/chat-setting/chat-setting.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/chat-setting/chat-setting.component.ts ***!
  \**************************************************************/
/*! exports provided: ChatSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatSettingComponent", function() { return ChatSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/loadspecs.service */ "./src/app/_services/loadspecs.service.ts");




var ChatSettingComponent = /** @class */ (function () {
    function ChatSettingComponent(loadspecsService, alertify) {
        this.loadspecsService = loadspecsService;
        this.alertify = alertify;
        this.model = {};
    }
    ChatSettingComponent.prototype.ngOnInit = function () {
        this.model.roleID = '0';
    };
    ChatSettingComponent.prototype.loadMenu = function (id) {
        var _this = this;
        return this.loadspecsService.getChatSetting().subscribe(function (users) {
            _this.users = users.filter(function (proj) { return (proj.chat_type === Number(id)); });
        });
    };
    ChatSettingComponent.prototype.activateChat = function (event, user_id) {
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
    ChatSettingComponent.ctorParameters = function () { return [
        { type: _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_3__["LoadspecsService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"] }
    ]; };
    ChatSettingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-setting',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chat-setting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/chat-setting/chat-setting.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chat-setting.component.css */ "./src/app/views/chat-setting/chat-setting.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_loadspecs_service__WEBPACK_IMPORTED_MODULE_3__["LoadspecsService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]])
    ], ChatSettingComponent);
    return ChatSettingComponent;
}());



/***/ }),

/***/ "./src/app/views/chat-setting/chat-setting.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/chat-setting/chat-setting.module.ts ***!
  \***********************************************************/
/*! exports provided: ChatSettingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatSettingModule", function() { return ChatSettingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chat_setting_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-setting-routing.module */ "./src/app/views/chat-setting/chat-setting-routing.module.ts");
/* harmony import */ var _chat_setting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-setting.component */ "./src/app/views/chat-setting/chat-setting.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var ChatSettingModule = /** @class */ (function () {
    function ChatSettingModule() {
    }
    ChatSettingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_chat_setting_component__WEBPACK_IMPORTED_MODULE_4__["ChatSettingComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _chat_setting_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChatSettingRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ]
        })
    ], ChatSettingModule);
    return ChatSettingModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-chat-setting-chat-setting-module.js.map