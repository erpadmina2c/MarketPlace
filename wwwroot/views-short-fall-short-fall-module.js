(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-short-fall-short-fall-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/short-fall/short-fall.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/short-fall/short-fall.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div bsModal #infoModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-info\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" style=\"font-size:14px;font-family: monospace;\">Manage Setting</h4>\n        <button type=\"button\" class=\"close\" (click)=\"infoModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" style=\"background: #fff8dc78;\"> \n        <tabset>\n          <tab>\n            <ng-template tabHeading><i class=\"icon-settings\"></i> Manage Model</ng-template>                    \n            <div class=\"row\">\n              <span  class=\"col-6 row\" *ngFor=\"let activemodel of activemodels let i = index\">\n                <div class=\"col-8\">\n                  {{ activemodel.model_name}}\n                </div>\n                <label class=\"switch switch-label switch-outline-success-alt col-4\">\n                  <input type=\"checkbox\" class=\"switch-input\" [checked]=\"activemodel.model_status\" (click)=\"activateModel($event,activemodel.model_id)\">\n                  <span class=\"switch-slider\" data-checked=\"✓\" data-unchecked=\"✕\"></span>\n                </label>\n              </span>\n            </div>\n            <div class=\"modal-footer\" style=\"padding: .9rem 0rem 0rem 0rem;margin-top: 2rem;\">\n              <button type=\"button\" class=\"btn btn-sm btn-square btn-danger\" (click)=\"ResetModel()\"><i class=\"fa fa-undo mr-1\"></i>Reset</button> \n            </div>\n          </tab>\n          <tab>\n            <ng-template tabHeading><i class=\"icon-settings\"></i> Manage Processor</ng-template>                              \n            <div class=\"row\">\n              <span  class=\"col-6 row\" *ngFor=\"let activeproc of activeprocs let i = index\">\n                <div class=\"col-8\">\n                  {{ activeproc.proc_name}}\n                </div>\n                <label class=\"switch switch-label switch-outline-success-alt col-4\">\n                  <input type=\"checkbox\" class=\"switch-input\" [checked]=\"activeproc.proc_status\" (click)=\"activateProc($event,activeproc.proc_id)\">\n                  <span class=\"switch-slider\" data-checked=\"✓\" data-unchecked=\"✕\"></span>\n                </label>\n              </span>\n            </div>\n            <div class=\"modal-footer\" style=\"padding: .9rem 0rem 0rem 0rem;margin-top: 2rem;\">\n              <button type=\"button\" class=\"btn btn-sm btn-square btn-danger\" (click)=\"ResetProc()\"><i class=\"fa fa-undo mr-1\"></i>Reset</button> \n            </div>\n          </tab>\n        </tabset> \n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n<div class=\"card-body\">\n  <!--/.card-->\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <button type=\"button\" class=\"btn btn-square btn-sm btn-info mb-2\"  (click)=\"infoModal.show()\">\n            Setting <i class=\"icon-settings\"></i>\n          </button>\n          <br>\n          <table datatable [dtTrigger]=\"dtTrigger\" [dtOptions]=\"dtOptions\" class=\"table table-responsive-sm table-striped table-hover table-outline mb-0\">\n            <thead class=\"thead-light\">\n              <tr *ngFor=\"let item of items | slice:0:1; let i = index\">\n                <th>{{ item.make_name}}</th>\n                <th>{{ item.model_name}}</th>\n                <th>{{item.processor}}</th>\n                <th>{{ item.filtermonth1}}</th>\n                <th>{{ item.filtermonth2}}</th>\n                <th>{{ item.filtermonth3}}</th>\n                <!-- <th>{{ item.filtermonth4}}</th>\n                <th>{{ item.filtermonth5}}</th>\n                <th>{{ item.filtermonth6}}</th> -->\n                <th>{{ item.filtertotal}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of items | slice:1:1000; let i = index\">\n                <td>{{ item.make_name}}</td>\n                <td>{{ item.model_name}}</td>\n                <td>{{item.processor}} </td>\n                <td>{{ item.filtermonth1}}</td>\n                <td>{{ item.filtermonth2}}</td>\n                <td>{{ item.filtermonth3}}</td>\n                <!-- <td>{{ item.filtermonth4}}</td>\n                <td>{{ item.filtermonth5}}</td>\n                <td>{{ item.filtermonth6}}</td> -->\n                <td>{{ item.filtertotal}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <!--/.col-->\n  <!-- <div >\n    <div class=\"app flex-row align-items-center\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-6\">\n            <div class=\"clearfix\">\n              <h1 class=\"float-left display-3 mr-4\">404</h1>\n              <h4 class=\"pt-3\">Oops! You're lost.</h4>\n              <p class=\"text-muted\">The page you are looking for was not found.</p>\n            </div>\n            <div class=\"input-prepend input-group\">\n              <div class=\"input-group-prepend\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n  </div> -->\n");

/***/ }),

/***/ "./src/app/views/short-fall/short-fall-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/short-fall/short-fall-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ShortFallRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortFallRoutingModule", function() { return ShortFallRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _short_fall_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./short-fall.component */ "./src/app/views/short-fall/short-fall.component.ts");




var routes = [
    {
        path: '',
        component: _short_fall_component__WEBPACK_IMPORTED_MODULE_3__["ShortFallComponent"],
        data: {
            title: 'ShortFall'
        }
    }
];
var ShortFallRoutingModule = /** @class */ (function () {
    function ShortFallRoutingModule() {
    }
    ShortFallRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ShortFallRoutingModule);
    return ShortFallRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/short-fall/short-fall.component.css":
/*!***********************************************************!*\
  !*** ./src/app/views/short-fall/short-fall.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".switch-label .switch-input:checked ~ .switch-slider::before {\r\n    transform: translateX(18px);\r\n}\r\n.modal-header, .modal-footer {\r\n    padding: .3rem 1rem;\r\n}\r\n@media (min-width: 576px){\r\n    .modal-dialog {\r\n        max-width: 540px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc2hvcnQtZmFsbC9zaG9ydC1mYWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Nob3J0LWZhbGwvc2hvcnQtZmFsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXRjaC1sYWJlbCAuc3dpdGNoLWlucHV0OmNoZWNrZWQgfiAuc3dpdGNoLXNsaWRlcjo6YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOHB4KTtcclxufVxyXG4ubW9kYWwtaGVhZGVyLCAubW9kYWwtZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IC4zcmVtIDFyZW07XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXtcclxuICAgIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgICAgIG1heC13aWR0aDogNTQwcHg7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/short-fall/short-fall.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/short-fall/short-fall.component.ts ***!
  \**********************************************************/
/*! exports provided: ShortFallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortFallComponent", function() { return ShortFallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_requirement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/requirement.service */ "./src/app/_services/requirement.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_services/loadspecs.service */ "./src/app/_services/loadspecs.service.ts");








var ShortFallComponent = /** @class */ (function () {
    function ShortFallComponent(requirementservice, loadspecsService, alertify) {
        this.requirementservice = requirementservice;
        this.loadspecsService = loadspecsService;
        this.alertify = alertify;
        this.roleid = Number(String(localStorage.getItem('RoleID')));
        this.model = {};
        this.procmodel = {};
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 25,
            retrieve: true,
            order: [[1, 'desc']]
        };
        this.isDtInitialized = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ShortFallComponent.prototype.ngOnInit = function () {
        this.loadOrders();
        this.loadActiveModels();
        this.loadActiveprocs();
    };
    ShortFallComponent.prototype.loadOrders = function () {
        var _this = this;
        return this.requirementservice.getShortFalls().subscribe(function (items) {
            _this.items = items;
            console.log(_this.items);
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
    ShortFallComponent.prototype.loadActiveModels = function () {
        var _this = this;
        return this.loadspecsService.loadActiveModels(1).subscribe(function (activemodels) {
            _this.activemodels = activemodels;
            console.log(_this.activemodels);
        });
    };
    ShortFallComponent.prototype.loadActiveprocs = function () {
        var _this = this;
        return this.loadspecsService.loadActiveProc(1).subscribe(function (activeprocs) {
            _this.activeprocs = activeprocs;
        }, function (error) {
            console.log(error.error);
        });
    };
    ShortFallComponent.prototype.activateModel = function (event, id) {
        var _this = this;
        this.model.user_id = Number(localStorage.getItem('UserId'));
        this.model.model_id = id;
        this.model.s_type = 1;
        this.model.status = 0;
        if (event.target.checked) {
            this.model.status = 1;
        }
        this.requirementservice.activateModel(this.model).subscribe(function () {
            _this.loadOrders();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ShortFallComponent.prototype.activateProc = function (event, id) {
        var _this = this;
        this.procmodel.user_id = Number(localStorage.getItem('UserId'));
        this.procmodel.proc_id = id;
        this.procmodel.s_type = 1;
        this.procmodel.status = 0;
        if (event.target.checked) {
            this.procmodel.status = 1;
        }
        this.requirementservice.activateProc(this.procmodel).subscribe(function () {
            _this.loadOrders();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ShortFallComponent.prototype.ResetModel = function () {
        var _this = this;
        this.model.user_id = Number(localStorage.getItem('UserId'));
        this.model.model_id = 0;
        this.model.s_type = 1;
        this.model.status = 3;
        this.requirementservice.activateModel(this.model).subscribe(function () {
            _this.loadOrders();
            _this.loadActiveModels();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ShortFallComponent.prototype.ResetProc = function () {
        var _this = this;
        this.procmodel.user_id = Number(localStorage.getItem('UserId'));
        this.procmodel.proc_id = 0;
        this.procmodel.s_type = 1;
        this.procmodel.status = 3;
        this.requirementservice.activateProc(this.procmodel).subscribe(function () {
            _this.loadOrders();
            _this.loadActiveprocs();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ShortFallComponent.ctorParameters = function () { return [
        { type: _services_requirement_service__WEBPACK_IMPORTED_MODULE_2__["RequirementService"] },
        { type: _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_7__["LoadspecsService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('infoModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalDirective"])
    ], ShortFallComponent.prototype, "infoModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"])
    ], ShortFallComponent.prototype, "dtElement", void 0);
    ShortFallComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-short-fall',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./short-fall.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/short-fall/short-fall.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./short-fall.component.css */ "./src/app/views/short-fall/short-fall.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_requirement_service__WEBPACK_IMPORTED_MODULE_2__["RequirementService"], _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_7__["LoadspecsService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], ShortFallComponent);
    return ShortFallComponent;
}());



/***/ }),

/***/ "./src/app/views/short-fall/short-fall.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/short-fall/short-fall.module.ts ***!
  \*******************************************************/
/*! exports provided: ShortFallModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortFallModule", function() { return ShortFallModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _short_fall_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./short-fall-routing.module */ "./src/app/views/short-fall/short-fall-routing.module.ts");
/* harmony import */ var _short_fall_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./short-fall.component */ "./src/app/views/short-fall/short-fall.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");








var ShortFallModule = /** @class */ (function () {
    function ShortFallModule() {
    }
    ShortFallModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_short_fall_component__WEBPACK_IMPORTED_MODULE_4__["ShortFallComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _short_fall_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShortFallRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"]
            ]
        })
    ], ShortFallModule);
    return ShortFallModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-short-fall-short-fall-module.js.map