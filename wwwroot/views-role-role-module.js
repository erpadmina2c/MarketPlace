(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-role-role-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/role/role.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/role/role.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\n    <!-- Button trigger modal -->\n    \n  </div>\n  <div bsModal #infoModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"AddRole()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add Role</h4>\n          <button type=\"button\" class=\"close\" (click)=\"infoModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <label style=\"padding: 7px\">Role Title</label>\n                    <input type=\"text\" id=\"RoleTitle\" name=\"RoleTitle\" [(ngModel)]=\"model.RoleTitle\"  class=\"form-control\" placeholder=\"Role Title\">               \n                  </div>\n                </div> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"infoModal.hide()\">Close</button>        \n          <button type=\"submit\" class=\"btn btn-sm btn-success\">Submit</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <div bsModal #pageModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"AddRole()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add Menu</h4>\n          <button type=\"button\" class=\"close\" (click)=\"pageModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <label style=\"padding: 7px\">Menu</label>\n                    <input type=\"text\" id=\"RoleTitle\" name=\"RoleTitle\" [(ngModel)]=\"model.RoleTitle\"  class=\"form-control\" placeholder=\"Role Title\">               \n                  </div>\n                </div> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"pageModal.hide()\">Close</button>        \n          <button type=\"submit\" class=\"btn btn-sm btn-success\">Submit</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-lg-6 \" *ngIf=\"roleid === 9\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Manage Roles\n          <button *ngIf=\"roleid === 9\" type=\"button\" class=\"btn btn-info mr-1\" style=\"float: right;\" data-toggle=\"modal\" (click)=\"infoModal.show()\">\n            Add Role\n          </button>\n        </div>\n        <div class=\"card-body table-responsive-sm\">\n          <table class=\"table table-responsive-sm table-hover table-outline mb-0\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th>RoleId</th>\n                <th>Role Title</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let role of roles; let i = index\">                \n                  <td>{{role.roleID}}</td>\n                  <td>{{role.roleTitle}}</td>\n                  <td>                           \n                      <span class=\"badge badge-danger\">Edit</span>\n                  </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div><!--/.col--> \n    <div class=\"col-lg-6 \" *ngIf=\"roleid === 9\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Manage Menus\n          <!-- <button *ngIf=\"roleid === 9\" type=\"button\" class=\"btn btn-info mr-1\" style=\"float: right;\" data-toggle=\"modal\" (click)=\"pageModal.show()\">\n            Add Menu\n          </button> -->\n        </div>\n        <div class=\"card-body table-responsive-sm\">\n          <table class=\"table table-responsive-sm table-hover table-outline mb-0\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th>id</th>\n                <th>Page Name</th>\n                <th>Page Url</th>\n                <th>Icon</th>\n                <th>Parent Name</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let page of pages; let i = index\">                \n                  <td>{{page.id}}</td>\n                  <td>{{page.page_name}}</td>\n                  <td>{{page.page_url}}</td>\n                  <td>{{page.icon}}</td>\n                  <td>{{page.parent_name}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div><!--/.col--> \n  </div>\n  <div *ngIf=\"roleid !== 9\">\n    <div class=\"app flex-row align-items-center\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-6\">\n            <div class=\"clearfix\">\n              <h1 class=\"float-left display-3 mr-4\">404</h1>\n              <h4 class=\"pt-3\">Oops! You're lost.</h4>\n              <p class=\"text-muted\">The page you are looking for was not found.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>");

/***/ }),

/***/ "./src/app/views/role/role-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/role/role-routing.module.ts ***!
  \***************************************************/
/*! exports provided: RoleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleRoutingModule", function() { return RoleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _role_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./role.component */ "./src/app/views/role/role.component.ts");




var routes = [
    {
        path: '',
        component: _role_component__WEBPACK_IMPORTED_MODULE_3__["RoleComponent"],
        data: {
            title: 'roles'
        }
    }
];
var RoleRoutingModule = /** @class */ (function () {
    function RoleRoutingModule() {
    }
    RoleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RoleRoutingModule);
    return RoleRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/role/role.component.css":
/*!***********************************************!*\
  !*** ./src/app/views/role/role.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label {\r\n    width: 78px;\r\n}\r\ninput, select {\r\n    border: 1px solid #b3acac;\r\n    border-radius: 3px;\r\n}\r\nbutton {\r\n    background-color: #08ab9e;\r\n    border: #0b8076;\r\n    color: #fff;\r\n    border-radius: 0px;\r\n}\r\n.close {\r\n    background: transparent!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvcm9sZS9yb2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvcm9sZS9yb2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgICB3aWR0aDogNzhweDtcclxufVxyXG5pbnB1dCwgc2VsZWN0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2FjYWM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOGFiOWU7XHJcbiAgICBib3JkZXI6ICMwYjgwNzY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG4uY2xvc2Uge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/views/role/role.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/role/role.component.ts ***!
  \**********************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/role.service */ "./src/app/_services/role.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/loadspecs.service */ "./src/app/_services/loadspecs.service.ts");






var RoleComponent = /** @class */ (function () {
    function RoleComponent(roleService, alertify, loadspecsService) {
        this.roleService = roleService;
        this.alertify = alertify;
        this.loadspecsService = loadspecsService;
        this.model = {};
        this.roleid = Number(localStorage.getItem('RoleID'));
    }
    RoleComponent.prototype.ngOnInit = function () {
        this.loadRoles();
        this.loadMenu();
    };
    RoleComponent.prototype.loadRoles = function () {
        var _this = this;
        return this.roleService.getRoles().subscribe(function (roles) {
            _this.roles = roles;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    RoleComponent.prototype.loadMenu = function () {
        var _this = this;
        return this.loadspecsService.getallpages().subscribe(function (pages) {
            _this.pages = pages;
            console.log(pages);
        });
    };
    RoleComponent.prototype.AddRole = function () {
        var _this = this;
        if (!this.model.RoleTitle) {
            this.alertify.error('Enter Role Title');
            return;
        }
        this.roleService.AddRole(this.model).subscribe(function (roles) {
            _this.roles = roles;
            _this.model.RoleTitle = '';
            _this.alertify.success('Role Added Successfully');
            _this.infoModal.hide();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    RoleComponent.ctorParameters = function () { return [
        { type: _services_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
        { type: _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_5__["LoadspecsService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('infoModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], RoleComponent.prototype, "infoModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pageModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], RoleComponent.prototype, "pageModal", void 0);
    RoleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./role.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/role/role.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./role.component.css */ "./src/app/views/role/role.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_5__["LoadspecsService"]])
    ], RoleComponent);
    return RoleComponent;
}());



/***/ }),

/***/ "./src/app/views/role/role.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/role/role.module.ts ***!
  \*******************************************/
/*! exports provided: RoleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleModule", function() { return RoleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _role_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./role-routing.module */ "./src/app/views/role/role-routing.module.ts");
/* harmony import */ var _role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./role.component */ "./src/app/views/role/role.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var RoleModule = /** @class */ (function () {
    function RoleModule() {
    }
    RoleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_role_component__WEBPACK_IMPORTED_MODULE_4__["RoleComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _role_routing_module__WEBPACK_IMPORTED_MODULE_3__["RoleRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ]
        })
    ], RoleModule);
    return RoleModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-role-role-module.js.map