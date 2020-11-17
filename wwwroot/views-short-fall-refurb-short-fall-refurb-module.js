(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-short-fall-refurb-short-fall-refurb-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/short-fall-refurb/short-fall-refurb.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/short-fall-refurb/short-fall-refurb.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div bsModal #infoModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 1116px;\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\" style=\"font-size:14px;font-family: monospace;\">Manage Setting</h4>\n          <button type=\"button\" class=\"close\" (click)=\"infoModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\" style=\"background: #fff8dc78;\"> \n          <tabset>\n            <tab>\n              <ng-template tabHeading><i class=\"icon-settings\"></i> Manage Model</ng-template>                    \n              <div class=\"row\">\n                <span  class=\"col-3 row\" *ngFor=\"let activemodel of activemodels let i = index\">\n                  <div class=\"col-8\">\n                    {{ activemodel.model_name}}\n                  </div>\n                  <label class=\"switch switch-label switch-outline-success-alt col-4\">\n                    <input type=\"checkbox\" class=\"switch-input\" [checked]=\"activemodel.model_status\" (click)=\"activateModel($event,activemodel.model_id)\">\n                    <span class=\"switch-slider\" data-checked=\"✓\" data-unchecked=\"✕\"></span>\n                  </label>\n                </span>\n              </div>\n              <div class=\"modal-footer\" style=\"padding: .9rem 0rem 0rem 0rem;margin-top: 2rem;\">\n                <button type=\"button\" class=\"btn btn-sm btn-square btn-danger\" (click)=\"ResetModel()\"><i class=\"fa fa-undo mr-1\"></i>Reset</button> \n                <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"infoModal.hide()\">Close</button>\n              </div>\n            </tab>\n            <tab>\n              <ng-template tabHeading><i class=\"icon-settings\"></i> Manage Processor</ng-template>                              \n              <div class=\"row\">\n                <span  class=\"col-3 row\" *ngFor=\"let activeproc of activeprocs let i = index\">\n                  <div class=\"col-8\">\n                    {{ activeproc.proc_name}}\n                  </div>\n                  <label class=\"switch switch-label switch-outline-success-alt col-4\">\n                    <input type=\"checkbox\" class=\"switch-input\" [checked]=\"activeproc.proc_status\" (click)=\"activateProc($event,activeproc.proc_id)\">\n                    <span class=\"switch-slider\" data-checked=\"✓\" data-unchecked=\"✕\"></span>\n                  </label>\n                </span>\n              </div>\n              <div class=\"modal-footer\" style=\"padding: .9rem 0rem 0rem 0rem;margin-top: 2rem;\">\n                <button type=\"button\" class=\"btn btn-sm btn-square btn-danger\" (click)=\"ResetProc()\"><i class=\"fa fa-undo mr-1\"></i>Reset</button> \n                <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"infoModal.hide()\">Close</button>\n              </div>\n            </tab>\n          </tabset> \n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <div class=\"card-body\">\n    <!--/.card-->\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <button type=\"button\" class=\"btn btn-square btn-sm btn-info mb-2\"  (click)=\"infoModal.show()\">\n              Setting <i class=\"icon-settings\"></i>\n            </button>\n            <br>\n            <table datatable [dtTrigger]=\"dtTrigger\" [dtOptions]=\"dtOptions\" class=\"table table-responsive-sm table-striped table-hover table-outline mb-0\">\n              <thead class=\"thead-light\">\n                <tr *ngFor=\"let item of items | slice:0:1; let i = index\">\n                  <th>{{ item.make_name}}</th>\n                  <th>{{ item.model_name}}</th>\n                  <th>{{item.processor}}</th>\n                  <th>{{ item.filtermonth1}}</th>\n                  <th>{{ item.filtermonth2}}</th>\n                  <th>{{ item.filtermonth3}}</th>\n                  <!-- <th>{{ item.filtermonth4}}</th>\n                  <th>{{ item.filtermonth5}}</th>\n                  <th>{{ item.filtermonth6}}</th> -->\n                  <th>{{ item.filtertotal}}</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of items | slice:1:1000; let i = index\">\n                  <td>{{ item.make_name}}</td>\n                  <td>{{ item.model_name}}</td>\n                  <td>{{item.processor}} </td>\n                  <td>{{ item.filtermonth1}}</td>\n                  <td>{{ item.filtermonth2}}</td>\n                  <td>{{ item.filtermonth3}}</td>\n                  <!-- <td>{{ item.filtermonth4}}</td>\n                  <td>{{ item.filtermonth5}}</td>\n                  <td>{{ item.filtermonth6}}</td> -->\n                  <td>{{ item.filtertotal}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div><!--/.col-->\n    </div><!--/.row-->\n    <!--/.col-->\n  ");

/***/ }),

/***/ "./src/app/views/short-fall-refurb/short-fall-refurb-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/short-fall-refurb/short-fall-refurb-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ShortFallRefurbRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortFallRefurbRoutingModule", function() { return ShortFallRefurbRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _short_fall_refurb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./short-fall-refurb.component */ "./src/app/views/short-fall-refurb/short-fall-refurb.component.ts");




var routes = [
    {
        path: '',
        component: _short_fall_refurb_component__WEBPACK_IMPORTED_MODULE_3__["ShortFallRefurbComponent"],
        data: {
            title: 'ShortFall'
        }
    }
];
var ShortFallRefurbRoutingModule = /** @class */ (function () {
    function ShortFallRefurbRoutingModule() {
    }
    ShortFallRefurbRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ShortFallRefurbRoutingModule);
    return ShortFallRefurbRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/short-fall-refurb/short-fall-refurb.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/views/short-fall-refurb/short-fall-refurb.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 576px){\r\n    .modal-dialog {\r\n        max-width: 540px;\r\n    }\r\n}\r\nbutton {\r\n    background-color: #08ab9e;\r\n    border: #0b8076;\r\n    color: #fff;\r\n}\r\n.close {\r\n    background: transparent!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc2hvcnQtZmFsbC1yZWZ1cmIvc2hvcnQtZmFsbC1yZWZ1cmIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsV0FBVztBQUNmO0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckMiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9zaG9ydC1mYWxsLXJlZnVyYi9zaG9ydC1mYWxsLXJlZnVyYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXtcclxuICAgIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgICAgIG1heC13aWR0aDogNTQwcHg7XHJcbiAgICB9XHJcbn1cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOGFiOWU7XHJcbiAgICBib3JkZXI6ICMwYjgwNzY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uY2xvc2Uge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/views/short-fall-refurb/short-fall-refurb.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/short-fall-refurb/short-fall-refurb.component.ts ***!
  \************************************************************************/
/*! exports provided: ShortFallRefurbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortFallRefurbComponent", function() { return ShortFallRefurbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_requirement_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/requirement.service */ "./src/app/_services/requirement.service.ts");
/* harmony import */ var _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/loadspecs.service */ "./src/app/_services/loadspecs.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");








var ShortFallRefurbComponent = /** @class */ (function () {
    function ShortFallRefurbComponent(requirementservice, loadspecsService, alertify) {
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
    ShortFallRefurbComponent.prototype.ngOnInit = function () {
        this.loadOrders();
        this.loadActiveModels();
        this.loadActiveprocs();
    };
    ShortFallRefurbComponent.prototype.loadOrders = function () {
        var _this = this;
        return this.requirementservice.getShortFallRefurb().subscribe(function (items) {
            _this.items = items;
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
    ShortFallRefurbComponent.prototype.loadActiveModels = function () {
        var _this = this;
        return this.loadspecsService.loadActiveModels(3).subscribe(function (activemodels) {
            _this.activemodels = activemodels;
            console.log(_this.activemodels);
        });
    };
    ShortFallRefurbComponent.prototype.loadActiveprocs = function () {
        var _this = this;
        return this.loadspecsService.loadActiveProc(3).subscribe(function (activeprocs) {
            _this.activeprocs = activeprocs;
        }, function (error) {
            console.log(error.error);
        });
    };
    ShortFallRefurbComponent.prototype.activateModel = function (event, id) {
        var _this = this;
        this.model.user_id = Number(localStorage.getItem('UserId'));
        this.model.model_id = id;
        this.model.s_type = 3;
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
    ShortFallRefurbComponent.prototype.activateProc = function (event, id) {
        var _this = this;
        this.procmodel.user_id = Number(localStorage.getItem('UserId'));
        this.procmodel.proc_id = id;
        this.procmodel.s_type = 3;
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
    ShortFallRefurbComponent.prototype.ResetModel = function () {
        var _this = this;
        this.model.user_id = Number(localStorage.getItem('UserId'));
        this.model.model_id = 0;
        this.model.s_type = 3;
        this.model.status = 3;
        this.requirementservice.activateModel(this.model).subscribe(function () {
            _this.loadOrders();
            _this.loadActiveModels();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ShortFallRefurbComponent.prototype.ResetProc = function () {
        var _this = this;
        this.procmodel.user_id = Number(localStorage.getItem('UserId'));
        this.procmodel.proc_id = 0;
        this.procmodel.s_type = 3;
        this.procmodel.status = 3;
        this.requirementservice.activateProc(this.procmodel).subscribe(function () {
            _this.loadOrders();
            _this.loadActiveprocs();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ShortFallRefurbComponent.ctorParameters = function () { return [
        { type: _services_requirement_service__WEBPACK_IMPORTED_MODULE_5__["RequirementService"] },
        { type: _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_6__["LoadspecsService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_7__["AlertifyService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('infoModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], ShortFallRefurbComponent.prototype, "infoModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], ShortFallRefurbComponent.prototype, "dtElement", void 0);
    ShortFallRefurbComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-short-fall-refurb',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./short-fall-refurb.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/short-fall-refurb/short-fall-refurb.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./short-fall-refurb.component.css */ "./src/app/views/short-fall-refurb/short-fall-refurb.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_requirement_service__WEBPACK_IMPORTED_MODULE_5__["RequirementService"], _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_6__["LoadspecsService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_7__["AlertifyService"]])
    ], ShortFallRefurbComponent);
    return ShortFallRefurbComponent;
}());



/***/ }),

/***/ "./src/app/views/short-fall-refurb/short-fall-refurb.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/short-fall-refurb/short-fall-refurb.module.ts ***!
  \*********************************************************************/
/*! exports provided: ShortFallRefurbModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortFallRefurbModule", function() { return ShortFallRefurbModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _short_fall_refurb_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./short-fall-refurb-routing.module */ "./src/app/views/short-fall-refurb/short-fall-refurb-routing.module.ts");
/* harmony import */ var _short_fall_refurb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./short-fall-refurb.component */ "./src/app/views/short-fall-refurb/short-fall-refurb.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");








var ShortFallRefurbModule = /** @class */ (function () {
    function ShortFallRefurbModule() {
    }
    ShortFallRefurbModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_short_fall_refurb_component__WEBPACK_IMPORTED_MODULE_4__["ShortFallRefurbComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _short_fall_refurb_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShortFallRefurbRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"]
            ]
        })
    ], ShortFallRefurbModule);
    return ShortFallRefurbModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-short-fall-refurb-short-fall-refurb-module.js.map