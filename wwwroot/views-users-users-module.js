(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-users-users-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/users/users.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/users/users.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\n    <!-- Button trigger modal -->    \n  </div>\n  <div bsModal #infoModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"register()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add User</h4>\n          <button type=\"button\" class=\"close\" (click)=\"infoModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <label style=\"padding: 7px\">Username</label>\n                    <input type=\"text\" id=\"username\" name=\"username\" [(ngModel)]=\"model.username\"  class=\"form-control\" placeholder=\"Username\">               \n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <label style=\"padding: 7px\">Email</label>  \n                    <input type=\"email\" id=\"email\" name=\"email\" [(ngModel)]=\"model.email\"  class=\"form-control\" placeholder=\"Email\"> \n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <label style=\"padding: 7px\">Password</label> \n                    <input type=\"password\" id=\"password\" name=\"password\" [(ngModel)]=\"model.password\"  class=\"form-control\" placeholder=\"password\">\n                  </div>\n                </div>          \n                <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <label for=\"exampleSelect1\">User Roles</label>\n                    <select class=\"form-control\" id=\"roleid\" name=\"roleID\" [(ngModel)]=\"model.roleID\">\n                      <option disabled selected=\"selected\" [value]=\"0\">Select Role</option>\n                      <option *ngFor=\"let role of roles; let i = index\"  [value]=\"role.roleID\">                    \n                        {{role.roleTitle}}\n                      </option>\n                    </select>\n                  </div>\n                </div>  \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"infoModal.hide()\">Close</button>        \n          <button type=\"submit\" class=\"btn btn-sm btn-success\">Submit</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <div bsModal #EdituserModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"EdituserPost()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Edit User</h4>\n          <button type=\"button\" class=\"close\" (click)=\"EdituserModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <label style=\"padding: 7px\">Username</label>\n                    <input type=\"text\" id=\"Username\" name=\"Username\" [(ngModel)]=\"mymodel.Username\"  class=\"form-control\" placeholder=\"Username\">               \n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <label style=\"padding: 7px\">Email</label>  \n                    <input type=\"email\" id=\"Email\" name=\"Email\" [(ngModel)]=\"mymodel.Email\"  class=\"form-control\" placeholder=\"Email\"> \n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <label style=\"padding: 7px\">Password</label> \n                    <input type=\"password\" id=\"Password\" name=\"Password\" [(ngModel)]=\"mymodel.Password\"  class=\"form-control\" placeholder=\"Password\">\n                  </div>\n                </div>          \n                <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <label for=\"exampleSelect1\">User Roles</label>\n                    <select class=\"form-control\" id=\"RoleID\" name=\"RoleID\" [(ngModel)]=\"mymodel.RoleID\">\n                      <option disabled selected=\"selected\" [value]=\"0\">Select Role</option>\n                      <option *ngFor=\"let role of roles; let i = index\"  [value]=\"role.roleID\">                    \n                        {{role.roleTitle}}\n                      </option>\n                    </select>\n                  </div>\n                </div>  \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"EdituserModal.hide()\">Close</button>        \n          <button type=\"submit\" class=\"btn btn-sm btn-success\">Submit</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <!--/.card-->\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Manage User\n          <button type=\"button\" class=\"btn btn-info mr-1\" style=\"float: right;\" data-toggle=\"modal\" (click)=\"infoModal.show()\">\n            Add User\n          </button>\n        </div>\n        <div class=\"card-body table-responsive-sm\">\n          <br>\n          <table class=\"table table-responsive-sm table-hover table-outline mb-0\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th class=\"text-center\"><i class=\"icon-people\"></i></th>\n                <th>User</th>\n                <th class=\"text-center\">Role</th>\n                <th class=\"text-center\">Email</th>\n                <th>Activity</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let user of users; let i = index\">\n                <td class=\"text-center\">\n                  <div class=\"avatar\">\n                    <img src=\"assets/images/User.png\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                    <span class=\"avatar-status badge-success\"></span>\n                  </div>\n                </td>\n                <td>\n                  <div>{{user.username}}</div>\n                  <div class=\"small text-muted\">\n                    <span>New</span> | Registered: {{user.createdDate | date:'MMM d, y, h:mm a'}}\n                  </div>\n                </td>\n                <td class=\"text-center\">\n                  {{user.rolename}}\n                </td>\n                <td class=\"text-center\">\n                  <div>{{user.email}}</div>\n                </td>\n                <td>\n                  <div class=\"small text-muted\">Last login</div>\n                  <strong>{{user.lastActive | date:'MMM d, y, h:mm:ss a'}}</strong>\n                </td>\n                <td>\n                  <span class=\"badge badge-danger\" style=\"cursor: pointer;\" (click)=\"EditUser(user.id)\">Edit</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <!-- <div *ngIf=\"roleid !== 9\">\n    <div class=\"app flex-row align-items-center\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-6\">\n            <div class=\"clearfix\">\n              <h1 class=\"float-left display-3 mr-4\">404</h1>\n              <h4 class=\"pt-3\">Oops! You're lost.</h4>\n              <p class=\"text-muted\">The page you are looking for was not found.</p>\n            </div>\n            <div class=\"input-prepend input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n  </div> -->");

/***/ }),

/***/ "./src/app/views/users/users-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/users/users-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.component */ "./src/app/views/users/users.component.ts");




var routes = [
    {
        path: '',
        component: _users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
        data: {
            title: 'users'
        }
    }
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/users/users.component.css":
/*!*************************************************!*\
  !*** ./src/app/views/users/users.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label {\r\n    width: 78px;\r\n}\r\ninput, select {\r\n    border: 1px solid #b3acac;\r\n    border-radius: 3px;\r\n}\r\nbutton {\r\n    background-color: #08ab9e;\r\n    border: #0b8076;\r\n    color: #fff;\r\n    border-radius: 0px;\r\n}\r\n.close {\r\n    background: transparent!important;\r\n}\r\nselect {\r\n    width: 50%!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgICB3aWR0aDogNzhweDtcclxufVxyXG5pbnB1dCwgc2VsZWN0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2FjYWM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOGFiOWU7XHJcbiAgICBib3JkZXI6ICMwYjgwNzY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG4uY2xvc2Uge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG59XHJcbnNlbGVjdCB7XHJcbiAgICB3aWR0aDogNTAlIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/users/users.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/role.service */ "./src/app/_services/role.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");








var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService, roleService, alertify, route, router, authService) {
        this.userService = userService;
        this.roleService = roleService;
        this.alertify = alertify;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.model = {};
        this.mymodel = {};
        this.roleid = Number(localStorage.getItem('RoleID'));
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.loadUsers();
        this.loadRoles();
    };
    UsersComponent.prototype.loadRoles = function () {
        var _this = this;
        return this.roleService.getRoles().subscribe(function (roles) {
            _this.roles = roles.filter(function (proj) { return (Number(proj.roleID) !== 12); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    UsersComponent.prototype.loadUsers = function () {
        var _this = this;
        return this.userService.getUsers().subscribe(function (users) {
            _this.users = users.filter(function (proj) { return (Number(proj.roleId) !== 12); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    UsersComponent.prototype.register = function () {
        var _this = this;
        if (!this.model.username) {
            this.alertify.error('Select username');
            return;
        }
        if (!this.model.email) {
            this.alertify.error('Write email');
            return;
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.model.email)) {
            this.alertify.error('enter valid email');
            return;
        }
        if (!this.model.password) {
            this.alertify.error('Select password');
            return;
        }
        if (!this.model.roleID) {
            this.alertify.error('Select role');
            return;
        }
        this.model.active = 1;
        this.model.mobile_no = 1111111111;
        this.authService.addinternaluser(this.model).subscribe(function (users) {
            _this.users = users;
            _this.model.username = '';
            _this.model.email = '';
            _this.model.password = '';
            _this.alertify.success('Registration Successful');
            _this.infoModal.hide();
        }, function (error) {
            if (error.error.Password !== undefined) {
                _this.alertify.error(error.error.Password[0]);
            }
            else {
                _this.alertify.error(error.error);
            }
        });
    };
    UsersComponent.prototype.EditUser = function (id) {
        var _this = this;
        this.EdituserModal.show();
        return this.userService.getUser(id).subscribe(function (user) {
            _this.mymodel.Id = user.id;
            _this.mymodel.Username = user.username;
            _this.mymodel.Email = user.email;
            _this.mymodel.Password = '';
            _this.mymodel.RoleID = user.roleId;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    UsersComponent.prototype.EdituserPost = function () {
        var _this = this;
        if (!this.mymodel.Username) {
            this.alertify.error('Enter username');
            return;
        }
        if (!this.mymodel.Email) {
            this.alertify.error('Write email');
            return;
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.mymodel.Email)) {
            this.alertify.error('Enter valid email');
            return;
        }
        if (!this.mymodel.Password) {
            this.alertify.error('Select password');
            return;
        }
        if (!this.mymodel.RoleID) {
            this.alertify.error('Select role');
            return;
        }
        this.authService.EdituserPost(this.mymodel).subscribe(function (users) {
            _this.users = users;
            _this.alertify.success('User Edited Successful');
            _this.EdituserModal.hide();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    UsersComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _services_role_service__WEBPACK_IMPORTED_MODULE_6__["RoleService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('infoModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], UsersComponent.prototype, "infoModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('EdituserModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], UsersComponent.prototype, "EdituserModal", void 0);
    UsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/users/users.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./users.component.css */ "./src/app/views/users/users.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _services_role_service__WEBPACK_IMPORTED_MODULE_6__["RoleService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/views/users/users.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/users/users.module.ts ***!
  \*********************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/views/users/users-routing.module.ts");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users.component */ "./src/app/views/users/users.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"]],
            imports: [
                _users_routing_module__WEBPACK_IMPORTED_MODULE_4__["UsersRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-users-users-module.js.map