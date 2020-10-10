(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-menu-menu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/menu/menu.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/menu/menu.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">                     \n            <div class=\"form-group\">\n                <div class=\"input-group row\">\n                  <label for=\"exampleSelect1\" class=\"col-lg-7\">Menu Setting</label>\n                  <select class=\"form-control\" id=\"roleid\" [(ngModel)]=\"model.roleID\"  (ngModelChange)=\"loadMenu($event)\">\n                    <option disabled selected=\"selected\" [value]=\"0\">Select Role</option>\n                    <option *ngFor=\"let role of roles; let i = index\"  [value]=\"role.roleID\">                    \n                      {{role.roleTitle}}\n                    </option>\n                  </select>\n                </div>\n              </div> \n          </div>\n          <div class=\"card-body\">\n              <div *ngFor=\"let item of menus\" class=\"row\" style=\"border-bottom: 1px solid #e6d9d9;margin: 8px -20px;\">\n                <label for=\"exampleSelect1\" class=\"col-md-11\">{{item.name}}</label>\n                <label class=\"switch switch-label switch-primary\">\n                    <input type=\"checkbox\" class=\"switch-input\" [checked]=\"item.is_active\"  (click)=\"activateMenu($event,item.id)\">\n                    <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n                </label>\n            </div>\n          </div>\n        </div>\n      </div><!--/.col-->\n      <div class=\"col-md-6\">\n          <div class=\"card\">\n            <div class=\"card-header\">                     \n              <div class=\"form-group\">\n                  <div class=\"input-group row\">\n                    <label for=\"exampleSelect1\" class=\"col-lg-7\">Manage Email Setting</label>\n                    <select class=\"form-control\" id=\"roleid\" name=\"role_id\" [(ngModel)]=\"emaimodel.role_id\"  (ngModelChange)=\"loadEmail($event)\">\n                      <option disabled selected=\"selected\" [value]=\"0\">Select Role</option>\n                      <option *ngFor=\"let role of roles; let i = index\"  [value]=\"role.roleID\">                    \n                        {{role.roleTitle}}\n                      </option>\n                    </select>\n                  </div>\n                </div> \n            </div>\n            <div class=\"card-body\">\n                <div *ngFor=\"let emailsetting of emailsettings\" class=\"row\" style=\"border-bottom: 1px solid #e6d9d9;margin: 8px -20px;\">\n                  <label for=\"exampleSelect1\" class=\"col-md-11\">{{emailsetting.e_type}}</label>\n                  <label class=\"switch switch-label switch-primary\">\n                      <input type=\"checkbox\" class=\"switch-input\" [checked]=\"emailsetting.status\"  (click)=\"activateEmail($event,emailsetting.id)\">\n                      <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\n                  </label>\n              </div>\n            </div>\n          </div>\n        </div><!--/.col-->      \n      </div>");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */");

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
            _this.menus = menus.filter(function (proj) { return (proj.role_id === Number(id)); });
            // console.log(this.menus);
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