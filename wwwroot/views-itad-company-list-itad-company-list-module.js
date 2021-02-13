(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-itad-company-list-itad-company-list-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/itad-company-list/itad-company-list.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/itad-company-list/itad-company-list.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <div class=\"card  col-md-12\">\n        <div class=\"card-body table-responsive-sm\">\n          <br>\n          <table datatable [dtTrigger]=\"dtTrigger\" [dtOptions]=\"dtOptions\" class=\"table table-responsive-sm table-hover table-striped table-outline mb-0\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th class=\"text-center\">###</th>\n                <th class=\"text-center\"><i class=\"icon-people\"></i>Company Name</th>\n                <th class=\"text-center\">Company Detail</th>\n                <th>Company Addess</th>\n                <th>Specification</th>\n                <th>Main Contact</th>\n                <th>Marketing Contact</th>\n                <th>Comments</th>\n                <th>Joining date</th>\n                <th>Detail</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let itadcomlist of itadcomlists; let i = index\"  class=\"color_{{itadcomlist.id}}\">\n                  <td class=\"text-center\">{{itadcomlist.id}}</td>\n                  <td class=\"text-center\">{{ itadcomlist.com_name}}</td>\n                  <td>                      \n                    <div *ngIf=\"itadcomlist.com_tel\" class=\"small\"><strong>Telephone: </strong>{{ itadcomlist.com_tel}}</div>\n                    <div *ngIf=\"itadcomlist.com_domain\" class=\"small\"><strong>Domain: </strong><a href=\"{{ itadcomlist.com_domain}}\" target=\"_blank\" >{{ itadcomlist.com_domain}}</a></div>\n                  </td>\n                  <td>  \n                    <div *ngIf=\"itadcomlist.com_street\" class=\"small\"><strong>Street: </strong>{{ itadcomlist.com_street}}</div>\n                    <div *ngIf=\"itadcomlist.com_city\" class=\"small\"><strong>City: </strong>{{ itadcomlist.com_city}}</div>\n                    <div *ngIf=\"itadcomlist.country\" class=\"small\"><strong>Country: </strong>{{ itadcomlist.country}}</div>\n                  </td>\n                  <td>  \n                    <div *ngIf=\"itadcomlist.branch_num\" class=\"small\"><strong>Locations: </strong>{{ itadcomlist.branch_num}}</div>\n                    <div *ngIf=\"itadcomlist.laptop_num\" class=\"small\"><strong>Laptop assets: </strong>{{ itadcomlist.laptop_num}} PA</div>\n                    <div *ngIf=\"itadcomlist.desk_num\" class=\"small\"><strong>Desktop assets: </strong>{{ itadcomlist.desk_num}} PA</div>\n                    <div *ngIf=\"itadcomlist.monitor_num\" class=\"small\"><strong>Monitor assets: </strong>{{ itadcomlist.monitor_num}} PA</div>\n                    <div *ngIf=\"itadcomlist.div_revenue\" class=\"small\"><strong>Division Revenue: </strong>{{ itadcomlist.div_revenue}} PA</div>\n                    <div *ngIf=\"itadcomlist.staff_num\" class=\"small\"><strong>Number of staff: </strong>{{ itadcomlist.staff_num}}</div>\n                  </td>\n                  <td>  \n                    <div *ngIf=\"itadcomlist.con_name\" class=\"small\"><strong>Name: </strong>{{ itadcomlist.con_name}}</div>\n                    <div *ngIf=\"itadcomlist.con_email\" class=\"small\"><strong>Email: </strong><a href=\"mailto:{{itadcomlist.con_email}}\">{{ itadcomlist.con_email}}</a></div>\n                    <div *ngIf=\"itadcomlist.con_tel\" class=\"small\"><strong>Telephone: </strong>{{ itadcomlist.con_tel}}</div>\n                    <div *ngIf=\"itadcomlist.con_mob\" class=\"small\"><strong>Mobile: </strong>{{ itadcomlist.con_mob}}</div>\n                    <div *ngIf=\"itadcomlist.status\" class=\"small\"><strong>status: </strong>{{ itadcomlist.status}}</div>\n                  </td>\n                  <td>  \n                    <div *ngIf=\"itadcomlist.mar_con_name\" class=\"small\"><strong>Marketing Name: </strong>{{ itadcomlist.mar_con_name}}</div>\n                    <div *ngIf=\"itadcomlist.mar_con_email\" class=\"small\"><strong>Marketing Email: </strong><a href=\"mailto:{{itadcomlist.mar_con_email}}\">{{ itadcomlist.mar_con_email}}</a></div>\n                    <div *ngIf=\"itadcomlist.mar_con_tel\" class=\"small\"><strong>Marketing Telephone: </strong>{{ itadcomlist.mar_con_tel}}</div>\n                  </td>\n                  <td>{{ itadcomlist.comments}}</td>         \n                  <td>{{ itadcomlist.created_at | date:'MMM, d, y'}}</td>\n                  <td>\n                    <a class=\"btn btn-primary\" type=\"button\" id=\"postitad_{{itadcomlist.id}}\" (click)=\"ViewCompanyDetails(itadcomlist.id)\">view suppliers</a>\n                  </td>\n                  <td>\n                    <a *ngIf=\"itadcomlist.status === 0\" class=\"btn btn-primary\" type=\"button\" id=\"postitad_{{itadcomlist.id}}\" (click)=\"ApproveCompany(itadcomlist.id)\">Approve</a>\n                    <a *ngIf=\"itadcomlist.status === 0\" class=\"btn btn-danger\" type=\"button\" id=\"postitad1_{{itadcomlist.id}}\" (click)=\"RejectCompany(itadcomlist.id)\">Reject</a>\n                    <span *ngIf=\"itadcomlist.status === 1\" style=\"color:green;font-style:italic;font-weight:bold;\">Approved</span>\n                    <span *ngIf=\"itadcomlist.status === 2\" style=\"color:red;font-style:italic;font-weight:bold;\">Rejected</span>\n                  </td>\n                </tr>\n              </tbody>\n          </table>\n        </div>\n      </div>\n  </div>\n  <div bsModal #supplierlist=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 1500px;\">\n    <form  #shareForm=\"ngForm\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Supplier List</h4>\n          <button type=\"button\" class=\"close\" (click)=\"supplierlist.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">    \n          <div class=\"card\">\n            <div class=\"card-body table-responsive-sm\">\n              <br>\n              <table class=\"table table-responsive-sm table-hover table-striped table-outline mb-0\">\n                <thead class=\"thead-light\">\n                  <tr>\n                    <th class=\"text-center\">###</th>\n                    <th class=\"text-center\"><i class=\"icon-people\"></i></th>\n                    <th class=\"text-center\">Username</th>\n                    <th>Contact Detail</th>\n                    <th>Supplier Detail</th>\n                    <th>Address</th>\n                    <th>LastActive</th>\n                    <th>Register Date</th>\n                    <th>Status</th>\n                    <th>Action</th>\n                  </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let user of users; let i = index\"  class=\"color_{{user.id}}\">\n                      <td class=\"text-center\">{{user.id}}</td>\n                      <td class=\"text-center\">\n                        <div class=\"avatar\">                   \n                          <img *ngIf=\"!user.profile_url\" src=\"assets/images/User.png\" class=\"img-avatar\" alt=\"{{ user.email}}\">\n                          <img *ngIf=\"user.profile_url\" src=\"/Resources/Profiles/{{ user.profile_url}}\" class=\"img-avatar\" alt=\"{{ user.email}}\">\n                          <span *ngIf=\"user.active === 1\" class=\"avatar-status badge-success\"></span>\n                          <span *ngIf=\"user.active === 0\" class=\"avatar-status badge-danger\"></span>\n                        </div>\n                      </td>\n                      <td class=\"text-center\">{{ user.user_name}}</td>\n                      <td>                      \n                        <div *ngIf=\"user.mobile_no\" class=\"small text-muted\"><strong>Mobile No: </strong>{{ user.mobile_no}}</div>\n                        <div *ngIf=\"user.tel_no\" class=\"small text-muted\"><strong>Telephone No: </strong>{{ user.tel_no}}</div>\n                        <div *ngIf=\"user.email\" class=\"small text-muted\"><strong>Email: </strong>{{ user.email}}</div>\n                      </td>\n                      <td>  \n                        <div *ngIf=\"user.company\" class=\"small text-muted\"><strong>Company Name: </strong>{{ user.company}}</div>\n                        <div *ngIf=\"user.reg_no\" class=\"small text-muted\"><strong>Reg No: </strong>{{ user.reg_no}}</div>\n                      </td>\n                      <td>  \n                        <div *ngIf=\"user.city\" class=\"small text-muted\"><strong>City: </strong>{{ user.city}}</div>\n                        <div *ngIf=\"user.country\" class=\"small text-muted\"><strong>Country: </strong>{{ user.country}}</div>\n                      </td>\n                      <td>{{ user.last_active | date:'MMM, d, y : h:mm a'}}</td>\n                      <td>{{ user.created_at | date:'MMM, d, y'}}</td>  \n                      <td>  \n                        <div *ngIf=\"user.active === 1\" class=\"small text-muted\"><strong>Status: </strong><span class=\"badge badge-success\">Active</span></div>\n                        <div *ngIf=\"user.active === 0\" class=\"small text-muted\"><strong>Status: </strong><span class=\"badge badge-pill badge-danger\">Inactive</span></div>\n                        <div *ngIf=\"user.city\" class=\"small text-muted\"><strong>Login Attempt: </strong>{{ user.log_count}}</div>\n                        <div *ngIf=\"user.country\" class=\"small text-muted\"><strong>ITAD: </strong>{{ user.itad_count}}</div>\n                      </td>  \n                      <td><a *ngIf=\"user.active === 0\" class=\"btn btn-primary\" id=\"postitad_{{user.id}}\" type=\"button\" (click)=\"ActivateUser(user.id)\">Activate</a></td>       \n                    </tr>\n                  </tbody>\n              </table>\n            </div>\n            </div>      \n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"supplierlist.hide()\">Close</button> \n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n\n  \n\n\n");

/***/ }),

/***/ "./src/app/views/itad-company-list/itad-company-list-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/itad-company-list/itad-company-list-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ItadCompanyListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItadCompanyListRoutingModule", function() { return ItadCompanyListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _itad_company_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./itad-company-list.component */ "./src/app/views/itad-company-list/itad-company-list.component.ts");




var routes = [{
        path: '',
        component: _itad_company_list_component__WEBPACK_IMPORTED_MODULE_3__["ItadCompanyListComponent"],
        data: {
            title: 'Itad Company List'
        }
    }];
var ItadCompanyListRoutingModule = /** @class */ (function () {
    function ItadCompanyListRoutingModule() {
    }
    ItadCompanyListRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ItadCompanyListRoutingModule);
    return ItadCompanyListRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/itad-company-list/itad-company-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/views/itad-company-list/itad-company-list.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.btn {\r\n    background-color: rgb(4, 170, 157) !important;\r\n    color : #ffffff!important;\r\n    font-weight: bold;\r\n    border-radius: 0px;\r\n    border: rgb(4, 170, 157);\r\n}\r\n.ajs-header{\r\n    background-color: #062736 !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaXRhZC1jb21wYW55LWxpc3QvaXRhZC1jb21wYW55LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSw2Q0FBNkM7SUFDN0MseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9pdGFkLWNvbXBhbnktbGlzdC9pdGFkLWNvbXBhbnktbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQsIDE3MCwgMTU3KSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3IgOiAjZmZmZmZmIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyOiByZ2IoNCwgMTcwLCAxNTcpO1xyXG59XHJcbi5hanMtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2MjczNiAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/views/itad-company-list/itad-company-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/itad-company-list/itad-company-list.component.ts ***!
  \************************************************************************/
/*! exports provided: ItadCompanyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItadCompanyListComponent", function() { return ItadCompanyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_services/loadspecs.service */ "./src/app/_services/loadspecs.service.ts");








var ItadCompanyListComponent = /** @class */ (function () {
    function ItadCompanyListComponent(authService, loadspecsService, alertify) {
        this.authService = authService;
        this.loadspecsService = loadspecsService;
        this.alertify = alertify;
        this.model = {};
        this.resetmodel = {};
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 25,
            retrieve: true,
            order: [[0, 'desc']]
        };
        this.isDtInitialized = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ItadCompanyListComponent.prototype.ngOnInit = function () {
        this.loadITADCompanyLists();
    };
    ItadCompanyListComponent.prototype.loadITADCompanyLists = function () {
        var _this = this;
        return this.loadspecsService.getITADCompanyList().subscribe(function (itadcomlists) {
            _this.itadcomlists = itadcomlists;
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
    ItadCompanyListComponent.prototype.ApproveCompany = function (id) {
        var _this = this;
        this.model = { id: id };
        document.getElementById('postitad_' + id).innerHTML = '<i class="fa fa-circle-o-notch mt-1 fa-lg fa-spin"></i> approving...';
        document.getElementById('postitad_' + id).disabled = true;
        this.loadspecsService.ApproveCompany(this.model).subscribe(function () {
            _this.model.model = _this.model;
            _this.loadITADCompanyLists();
            document.getElementById('postitad_' + id).innerHTML = 'Submit';
            document.getElementById('postitad_' + id).disabled = false;
            _this.alertify.success('Company approved Successfully');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ItadCompanyListComponent.prototype.ViewCompanyDetails = function (id) {
        var _this = this;
        return this.loadspecsService.getITADSuppliers().subscribe(function (users) {
            _this.users = users.filter(function (proj) { return (Number(proj.companyId) === id); });
            if (_this.users.length > 0) {
                _this.supplierlist.show();
            }
            else {
                _this.alertify.error('No Suppliers Registered Yet');
            }
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ItadCompanyListComponent.prototype.RejectCompany = function (id) {
        var _this = this;
        this.model = { id: id };
        document.getElementById('postitad1_' + id).innerHTML = '<i class="fa fa-circle-o-notch mt-1 fa-lg fa-spin"></i> Rejecting...';
        document.getElementById('postitad1_' + id).disabled = true;
        this.loadspecsService.RejectCompany(this.model).subscribe(function () {
            _this.model.model = _this.model;
            _this.loadITADCompanyLists();
            document.getElementById('postitad_' + id).innerHTML = 'Submit';
            document.getElementById('postitad_' + id).disabled = false;
            _this.alertify.success('Company Rejected Successfully');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ItadCompanyListComponent.prototype.ActivateUser = function (id) {
        var _this = this;
        this.resetmodel.id = id;
        document.getElementById('postitad_' + id).innerHTML = '<i class="fa fa-circle-o-notch mt-1 fa-lg fa-spin"></i> approving...';
        document.getElementById('postitad_' + id).disabled = true;
        this.authService.activateuser(this.resetmodel).subscribe(function () {
            document.getElementById('postitad_' + id).innerHTML = 'Submit';
            document.getElementById('postitad_' + id).disabled = false;
            // this.ViewCompanyDetails();
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
    ItadCompanyListComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_7__["LoadspecsService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('supplierlist'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], ItadCompanyListComponent.prototype, "supplierlist", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"])
    ], ItadCompanyListComponent.prototype, "dtElement", void 0);
    ItadCompanyListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-itad-company-list',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./itad-company-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/itad-company-list/itad-company-list.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./itad-company-list.component.css */ "./src/app/views/itad-company-list/itad-company-list.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_7__["LoadspecsService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]])
    ], ItadCompanyListComponent);
    return ItadCompanyListComponent;
}());



/***/ }),

/***/ "./src/app/views/itad-company-list/itad-company-list.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/itad-company-list/itad-company-list.module.ts ***!
  \*********************************************************************/
/*! exports provided: ItadCompanyListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItadCompanyListModule", function() { return ItadCompanyListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _itad_company_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./itad-company-list-routing.module */ "./src/app/views/itad-company-list/itad-company-list-routing.module.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _itad_company_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./itad-company-list.component */ "./src/app/views/itad-company-list/itad-company-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var ItadCompanyListModule = /** @class */ (function () {
    function ItadCompanyListModule() {
    }
    ItadCompanyListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_itad_company_list_component__WEBPACK_IMPORTED_MODULE_6__["ItadCompanyListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _itad_company_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["ItadCompanyListRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ]
        })
    ], ItadCompanyListModule);
    return ItadCompanyListModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-itad-company-list-itad-company-list-module.js.map