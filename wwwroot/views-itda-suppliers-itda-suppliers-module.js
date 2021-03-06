(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-itda-suppliers-itda-suppliers-module"],{

/***/ "./node_modules/angular-datatables/index.js":
/*!**************************************************!*\
  !*** ./node_modules/angular-datatables/index.js ***!
  \**************************************************/
/*! exports provided: DataTableDirective, DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"]; });

/* harmony import */ var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/angular-datatables.module */ "./node_modules/angular-datatables/src/angular-datatables.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DataTablesModule"]; });

/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-datatables/src/angular-datatables.directive.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.directive.js ***!
  \*****************************************************************************/
/*! exports provided: DataTableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return DataTableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */


var DataTableDirective = /** @class */ (function () {
    function DataTableDirective(el) {
        this.el = el;
        /**
           * The DataTable option you pass to configure your table.
           */
        this.dtOptions = {};
    }
    DataTableDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dtTrigger) {
            this.dtTrigger.subscribe(function () {
                _this.displayTable();
            });
        }
        else {
            this.displayTable();
        }
    };
    DataTableDirective.prototype.ngOnDestroy = function () {
        if (this.dtTrigger) {
            this.dtTrigger.unsubscribe();
        }
        if (this.dt) {
            this.dt.destroy(true);
        }
    };
    DataTableDirective.prototype.displayTable = function () {
        var _this = this;
        this.dtInstance = new Promise(function (resolve, reject) {
            Promise.resolve(_this.dtOptions).then(function (dtOptions) {
                // Using setTimeout as a "hack" to be "part" of NgZone
                setTimeout(function () {
                    _this.dt = $(_this.el.nativeElement).DataTable(dtOptions);
                    resolve(_this.dt);
                });
            });
        });
    };
    DataTableDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[datatable]'
                },] },
    ];
    /** @nocollapse */
    DataTableDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    DataTableDirective.propDecorators = {
        "dtOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dtTrigger": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return DataTableDirective;
}());

//# sourceMappingURL=angular-datatables.directive.js.map

/***/ }),

/***/ "./node_modules/angular-datatables/src/angular-datatables.module.js":
/*!**************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.module.js ***!
  \**************************************************************************/
/*! exports provided: DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return DataTablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */



var DataTablesModule = /** @class */ (function () {
    function DataTablesModule() {
    }
    DataTablesModule.forRoot = function () {
        return {
            ngModule: DataTablesModule
        };
    };
    DataTablesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]],
                    exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]
                },] },
    ];
    return DataTablesModule;
}());

//# sourceMappingURL=angular-datatables.module.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/itda-suppliers/itda-suppliers.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/itda-suppliers/itda-suppliers.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <div class=\"card  col-md-12\">\n        <div class=\"card-body table-responsive-sm\">\n          <br>\n          <table datatable [dtTrigger]=\"dtTrigger\" [dtOptions]=\"dtOptions\" class=\"table table-responsive-sm table-hover table-striped table-outline mb-0\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th class=\"text-center\">###</th>\n                <th class=\"text-center\"><i class=\"icon-people\"></i></th>\n                <th class=\"text-center\">Username</th>\n                <th>Contact Detail</th>\n                <th>Supplier Detail</th>\n                <th>Address</th>\n                <th>LastActive</th>\n                <th>Register Date</th>\n                <th>Status</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let user of users; let i = index\"  class=\"color_{{user.id}}\">\n                  <td class=\"text-center\">{{user.id}}</td>\n                  <td class=\"text-center\">\n                    <div class=\"avatar\">                   \n                      <img *ngIf=\"!user.profile_url\" src=\"assets/images/User.png\" class=\"img-avatar\" alt=\"{{ user.email}}\">\n                      <img *ngIf=\"user.profile_url\" src=\"/Resources/Profiles/{{ user.profile_url}}\" class=\"img-avatar\" alt=\"{{ user.email}}\">\n                      <span *ngIf=\"user.active === 1\" class=\"avatar-status badge-success\"></span>\n                      <span *ngIf=\"user.active === 0\" class=\"avatar-status badge-danger\"></span>\n                    </div>\n                  </td>\n                  <td class=\"text-center\">{{ user.user_name}}</td>\n                  <td>                      \n                    <div *ngIf=\"user.mobile_no\" class=\"small text-muted\"><strong>Mobile No: </strong>{{ user.mobile_no}}</div>\n                    <div *ngIf=\"user.tel_no\" class=\"small text-muted\"><strong>Telephone No: </strong>{{ user.tel_no}}</div>\n                    <div *ngIf=\"user.email\" class=\"small text-muted\"><strong>Email: </strong>{{ user.email}}</div>\n                  </td>\n                  <td>  \n                    <div *ngIf=\"user.company\" class=\"small text-muted\"><strong>Company Name: </strong>{{ user.company}}</div>\n                    <div *ngIf=\"user.reg_no\" class=\"small text-muted\"><strong>Reg No: </strong>{{ user.reg_no}}</div>\n                  </td>\n                  <td>  \n                    <div *ngIf=\"user.city\" class=\"small text-muted\"><strong>City: </strong>{{ user.city}}</div>\n                    <div *ngIf=\"user.country\" class=\"small text-muted\"><strong>Country: </strong>{{ user.country}}</div>\n                  </td>\n                  <td>{{ user.last_active | date:'MMM, d, y : h:mm a'}}</td>\n                  <td>{{ user.created_at | date:'MMM, d, y'}}</td>  \n                  <td>  \n                    <div *ngIf=\"user.active === 1\" class=\"small text-muted\"><strong>Status: </strong><span class=\"badge badge-success\">Active</span></div>\n                    <div *ngIf=\"user.active === 0\" class=\"small text-muted\"><strong>Status: </strong><span class=\"badge badge-pill badge-danger\">Inactive</span></div>\n                    <div *ngIf=\"user.city\" class=\"small text-muted\"><strong>Login Attempt: </strong>{{ user.log_count}}</div>\n                    <div *ngIf=\"user.country\" class=\"small text-muted\"><strong>ITAD: </strong>{{ user.itad_count}}</div>\n                  </td>  \n                  <td><a *ngIf=\"user.active === 0\" class=\"btn btn-primary\" id=\"postitad_{{user.id}}\" type=\"button\" (click)=\"ActivateUser(user.id)\">Activate</a></td>       \n                </tr>\n              </tbody>\n          </table>\n        </div>\n      </div>\n  </div>\n\n  \n\n\n");

/***/ }),

/***/ "./src/app/views/itda-suppliers/itda-suppliers-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/itda-suppliers/itda-suppliers-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ItdaSuppliersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItdaSuppliersRoutingModule", function() { return ItdaSuppliersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _itda_suppliers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./itda-suppliers.component */ "./src/app/views/itda-suppliers/itda-suppliers.component.ts");




var routes = [
    {
        path: '',
        component: _itda_suppliers_component__WEBPACK_IMPORTED_MODULE_3__["ItdaSuppliersComponent"],
        data: {
            title: 'ITAD Suppliers'
        }
    }
];
var ItdaSuppliersRoutingModule = /** @class */ (function () {
    function ItdaSuppliersRoutingModule() {
    }
    ItdaSuppliersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ItdaSuppliersRoutingModule);
    return ItdaSuppliersRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/itda-suppliers/itda-suppliers.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/views/itda-suppliers/itda-suppliers.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.btn {\r\n    background-color: rgb(4, 170, 157) !important;\r\n    color : #ffffff!important;\r\n    font-weight: bold;\r\n    border-radius: 0px;\r\n    border: rgb(4, 170, 157);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaXRkYS1zdXBwbGllcnMvaXRkYS1zdXBwbGllcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSw2Q0FBNkM7SUFDN0MseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvaXRkYS1zdXBwbGllcnMvaXRkYS1zdXBwbGllcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0LCAxNzAsIDE1NykgIWltcG9ydGFudDtcclxuICAgIGNvbG9yIDogI2ZmZmZmZiFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlcjogcmdiKDQsIDE3MCwgMTU3KTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/itda-suppliers/itda-suppliers.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/itda-suppliers/itda-suppliers.component.ts ***!
  \******************************************************************/
/*! exports provided: ItdaSuppliersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItdaSuppliersComponent", function() { return ItdaSuppliersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/loadspecs.service */ "./src/app/_services/loadspecs.service.ts");







var ItdaSuppliersComponent = /** @class */ (function () {
    function ItdaSuppliersComponent(authService, loadspecsService, alertify) {
        this.authService = authService;
        this.loadspecsService = loadspecsService;
        this.alertify = alertify;
        this.resetmodel = {};
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 25,
            retrieve: true,
            order: [[0, 'desc']]
        };
        this.isDtInitialized = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ItdaSuppliersComponent.prototype.ngOnInit = function () {
        this.loadITADSup();
    };
    ItdaSuppliersComponent.prototype.loadITADSup = function () {
        var _this = this;
        return this.loadspecsService.getITADSuppliers().subscribe(function (users) {
            _this.users = users;
            if (_this.isDtInitialized) {
                _this.dtElement.dtInstance.then(function (dtInstance) {
                    dtInstance.destroy();
                    _this.dtTrigger.next();
                });
            }
            else {
                _this.isDtInitialized = true;
                _this.dtTrigger.next();
            }
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ItdaSuppliersComponent.prototype.ActivateUser = function (id) {
        var _this = this;
        this.resetmodel.id = id;
        document.getElementById('postitad_' + id).innerHTML = '<i class="fa fa-circle-o-notch mt-1 fa-lg fa-spin"></i> approving...';
        document.getElementById('postitad_' + id).disabled = true;
        this.authService.activateuser(this.resetmodel).subscribe(function () {
            document.getElementById('postitad_' + id).innerHTML = 'Submit';
            document.getElementById('postitad_' + id).disabled = false;
            _this.loadITADSup();
            _this.alertify.success('Successfully Updated');
        }, function (error) {
            if (error.error.Password !== undefined) {
                _this.alertify.error(error.error.Password[0]);
            }
            else {
                _this.alertify.error(error.error);
            }
        });
    };
    ItdaSuppliersComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_6__["LoadspecsService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"])
    ], ItdaSuppliersComponent.prototype, "dtElement", void 0);
    ItdaSuppliersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-itda-suppliers',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./itda-suppliers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/itda-suppliers/itda-suppliers.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./itda-suppliers.component.css */ "./src/app/views/itda-suppliers/itda-suppliers.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_6__["LoadspecsService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], ItdaSuppliersComponent);
    return ItdaSuppliersComponent;
}());



/***/ }),

/***/ "./src/app/views/itda-suppliers/itda-suppliers.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/itda-suppliers/itda-suppliers.module.ts ***!
  \***************************************************************/
/*! exports provided: ItdaSuppliersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItdaSuppliersModule", function() { return ItdaSuppliersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _itda_suppliers_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./itda-suppliers-routing.module */ "./src/app/views/itda-suppliers/itda-suppliers-routing.module.ts");
/* harmony import */ var _itda_suppliers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./itda-suppliers.component */ "./src/app/views/itda-suppliers/itda-suppliers.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");







var ItdaSuppliersModule = /** @class */ (function () {
    function ItdaSuppliersModule() {
    }
    ItdaSuppliersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_itda_suppliers_component__WEBPACK_IMPORTED_MODULE_4__["ItdaSuppliersComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _itda_suppliers_routing_module__WEBPACK_IMPORTED_MODULE_3__["ItdaSuppliersRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
            ]
        })
    ], ItdaSuppliersModule);
    return ItdaSuppliersModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-itda-suppliers-itda-suppliers-module.js.map