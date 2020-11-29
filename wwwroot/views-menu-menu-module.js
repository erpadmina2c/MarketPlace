(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-menu-menu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/menu/menu.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/menu/menu.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">                     \n            <div class=\"form-group\">\n                <div class=\"input-group row\">\n                  <label for=\"exampleSelect1\" class=\"col-lg-7\">Menu Setting</label>\n                  <select class=\"form-control\" id=\"roleid\" [(ngModel)]=\"model.roleID\"  (ngModelChange)=\"loadMenu($event)\">\n                    <option disabled selected=\"selected\" [value]=\"0\">Select Role</option>\n                    <option *ngFor=\"let role of roles; let i = index\"  [value]=\"role.roleID\">                    \n                      {{role.roleTitle}}\n                    </option>\n                  </select>\n                </div>\n              </div> \n          </div>\n          <div class=\"card-body\">\n              <div *ngFor=\"let item of menus\" class=\"row\" style=\"margin: 8px -20px;\">\n                <label for=\"exampleSelect1\" style=\"background-color: #062736;color:#08AB9E;font-weight:bold;line-height:27px;height: 31px;width:83%\">{{item.name}}</label>\n               <div style=\"background-color: #062736;color:#08AB9E;font-weight: bold;height: 31px;padding: 0;width:17%\">\n                <label class=\"switch switch-label switch-primary\" style=\"background-color: #062736;color:#08AB9E;font-weight: bold;height: 31px;padding: 0;width:54px\">\n                    <input type=\"checkbox\" class=\"switch-input\" [checked]=\"item.is_active\"  (click)=\"activateMenu($event,item.id)\">\n                    <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n                </label>\n              </div>\n                <div *ngFor=\"let submenu of submenus\" class=\"col-md-11 mydiv{{item.parent_id}}\" >\n                  <label *ngIf=\"submenu.parent_id === item.menu_id\" for=\"exampleSelect1\" class=\"col-md-11\">{{submenu.name}}</label>\n                  <label *ngIf=\"submenu.parent_id === item.menu_id\" class=\"switch switch-label switch-primary\">\n                      <input type=\"checkbox\" class=\"switch-input\" [checked]=\"submenu.is_active\"  (click)=\"activateMenu($event,submenu.id)\">\n                      <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n                  </label>\n                </div>\n              </div>\n          </div>\n        </div>\n      </div><!--/.col-->\n      <div class=\"col-md-6\">\n          <div class=\"card\">\n            <div class=\"card-header\">                     \n              <div class=\"form-group\">\n                  <div class=\"input-group row\">\n                    <label for=\"exampleSelect1\" class=\"col-lg-7\">Manage Email Setting</label>\n                    <select class=\"form-control\" id=\"roleid\" name=\"role_id\" [(ngModel)]=\"emaimodel.role_id\"  (ngModelChange)=\"loadEmail($event)\">\n                      <option disabled selected=\"selected\" [value]=\"0\">Select Role</option>\n                      <option *ngFor=\"let role of roles; let i = index\"  [value]=\"role.roleID\">                    \n                        {{role.roleTitle}}\n                      </option>\n                    </select>\n                  </div>\n                </div> \n            </div>\n            <div class=\"card-body\">\n                <div *ngFor=\"let emailsetting of emailsettings\" class=\"row\" style=\"border-bottom: 1px solid #e6d9d9;margin: 8px -20px;\">\n                  <label for=\"exampleSelect1\" class=\"col-md-11\">{{emailsetting.e_type}}</label>\n                  <label class=\"switch switch-label switch-primary\">\n                      <input type=\"checkbox\" class=\"switch-input\" [checked]=\"emailsetting.status\"  (click)=\"activateEmail($event,emailsetting.id)\">\n                      <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n                  </label>\n              </div>\n            </div>\n          </div>\n        </div><!--/.col-->      \n      </div>");

/***/ }),

/***/ "./src/app/views/menu/menu-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/menu/menu-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MenuRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuRoutingModule", function() { return MenuRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.component */ "./src/app/views/menu/menu.component.ts");




var routes = [{
        path: '',
        component: _menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"],
        data: {
            title: 'Menu'
        }
    }];
var MenuRoutingModule = /** @class */ (function () {
    function MenuRoutingModule() {
    }
    MenuRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MenuRoutingModule);
    return MenuRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/menu/menu.component.css":
/*!***********************************************!*\
  !*** ./src/app/views/menu/menu.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".switch-slider {\r\n    position: relative;\r\n    display: block;\r\n    height: inherit;\r\n    cursor: pointer;\r\n    background-color: #fff;\r\n    border: 1px solid #c8ced3;\r\n    transition: 0.15s ease-out;\r\n    border-radius: 0rem;\r\n}\r\n.switch-primary .switch-input:checked + .switch-slider {\r\n    background-color: #08AB9E;\r\n    border-color: #08AB9E;\r\n    color: #062736;\r\n}\r\n.card-header { \r\n    background: #062736!important;\r\n    color: #08ab9e!important;\r\n}\r\n.card {\r\n    border: 2px solid #062736;\r\n    border-radius: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3Qix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2l0Y2gtc2xpZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGNlZDM7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlLW91dDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDByZW07XHJcbn1cclxuLnN3aXRjaC1wcmltYXJ5IC5zd2l0Y2gtaW5wdXQ6Y2hlY2tlZCArIC5zd2l0Y2gtc2xpZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOEFCOUU7XHJcbiAgICBib3JkZXItY29sb3I6ICMwOEFCOUU7XHJcbiAgICBjb2xvcjogIzA2MjczNjtcclxufVxyXG4uY2FyZC1oZWFkZXIgeyBcclxuICAgIGJhY2tncm91bmQ6ICMwNjI3MzYhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwOGFiOWUhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwNjI3MzY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/menu/menu.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/menu/menu.component.ts ***!
  \**********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/loadspecs.service */ "./src/app/_services/loadspecs.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/role.service */ "./src/app/_services/role.service.ts");





var MenuComponent = /** @class */ (function () {
    function MenuComponent(loadspecsService, roleService, alertify) {
        this.loadspecsService = loadspecsService;
        this.roleService = roleService;
        this.alertify = alertify;
        this.model = {};
        this.emaimodel = {};
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.model.roleID = '0';
        this.loadRoles();
    };
    MenuComponent.prototype.loadMenu = function (id) {
        var _this = this;
        return this.loadspecsService.getallmenus().subscribe(function (menus) {
            _this.menus = menus.filter(function (proj) { return (proj.role_id === Number(id) && proj.parent_id === 0); });
            _this.submenus = menus.filter(function (proj) { return (proj.role_id === Number(id) && proj.parent_id !== 0); });
            console.log(_this.menus);
            console.log(_this.submenus);
        });
    };
    MenuComponent.prototype.loadEmail = function (id) {
        var _this = this;
        return this.loadspecsService.getemailsetting().subscribe(function (emailsettings) {
            _this.emailsettings = emailsettings.filter(function (proj) { return (proj.role_id === Number(id)); });
        });
    };
    MenuComponent.prototype.loadRoles = function () {
        var _this = this;
        return this.roleService.getRoles().subscribe(function (roles) {
            _this.roles = roles;
            console.log(_this.roles);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MenuComponent.prototype.activateMenu = function (event, id) {
        var _this = this;
        this.setrole = this.model.roleID;
        this.model = { id: id, is_active: event.target.checked };
        console.log(this.model);
        this.loadspecsService.activateMenu(this.model).subscribe(function () {
            _this.model.roleID = _this.setrole;
            _this.loadMenu(_this.setrole);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MenuComponent.prototype.activateEmail = function (event, id) {
        var _this = this;
        this.setrole = this.emaimodel.role_id;
        if (event.target.checked === true) {
            this.emaimodel = { id: id, status: 1 };
        }
        else if (event.target.checked === false) {
            this.emaimodel = { id: id, status: 0 };
        }
        this.loadspecsService.activateEmail(this.emaimodel).subscribe(function () {
            _this.loadEmail(_this.setrole);
            _this.emaimodel.role_id = _this.setrole;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MenuComponent.ctorParameters = function () { return [
        { type: _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_2__["LoadspecsService"] },
        { type: _services_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] }
    ]; };
    MenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/menu/menu.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./menu.component.css */ "./src/app/views/menu/menu.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_loadspecs_service__WEBPACK_IMPORTED_MODULE_2__["LoadspecsService"], _services_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/views/menu/menu.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/menu/menu.module.ts ***!
  \*******************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-routing.module */ "./src/app/views/menu/menu-routing.module.ts");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.component */ "./src/app/views/menu/menu.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _menu_routing_module__WEBPACK_IMPORTED_MODULE_3__["MenuRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ]
        })
    ], MenuModule);
    return MenuModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-menu-menu-module.js.map