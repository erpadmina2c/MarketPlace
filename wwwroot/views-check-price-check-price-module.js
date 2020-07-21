(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-check-price-check-price-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/check-price/check-price.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/check-price/check-price.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <br>\n          <form  #requestForm=\"ngForm\" (ngSubmit)=\"SearchAveragePrice()\">\n            <table class=\"table table-responsive-sm table-striped table-hover table-outline mb-0\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th>Make</th>\n                  <th>Model </th>\n                  <th>Processor </th>\n                  <th>HDD</th>\n                  <th>RAM</th>\n                  <th>Supplier Name</th>\n                  <th>Action</th>\n                </tr>\n                <tr>\n                  <th><ng-select2 [data]=\"makes\" [width]=\"200\"  name=\"make_id\"  [(ngModel)]=\"mymodel.make_id\" (ngModelChange)=\"loadModels($event)\"></ng-select2></th>\n                  <th><ng-select2 [data]=\"models\"  [width]=\"200\" name=\"model_id\"  [(ngModel)]=\"mymodel.model_id\"></ng-select2></th>\n                  <th><ng-select2 [data]=\"processors\"  [width]=\"200\" name=\"proc_id\"  [(ngModel)]=\"mymodel.proc_id\"></ng-select2> </th>\n                  <th><ng-select2 [data]=\"hdds\"  [width]=\"200\" name=\"hdd_id\"  [(ngModel)]=\"mymodel.hdd_id\"></ng-select2></th>\n                  <th><ng-select2 [data]=\"rams\"  [width]=\"200\" name=\"ram_id\"  [(ngModel)]=\"mymodel.ram_id\"></ng-select2></th>\n                  <th><ng-select2 [data]=\"suppliers\"  [width]=\"200\" name=\"supplier_id\"  [(ngModel)]=\"mymodel.supplier_id\"></ng-select2></th>\n                  <th><button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"postingPrice\">Search</button></th>\n                </tr>\n              </thead>\n            </table>\n          </form>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->  \n  <div class=\"row\" *ngIf=\"prices\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <br>\n          <form  #requestForm=\"ngForm\" (ngSubmit)=\"SearchAveragePrice()\">\n            <table class=\"table table-responsive-sm table-striped table-hover table-outline mb-0\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th>Make</th>\n                  <th>Model </th>\n                  <th>Processor </th>\n                  <th>HDD</th>\n                  <th>RAM</th>\n                  <th>Supplier Name</th>\n                  <th>Avg. Price</th>\n                </tr>\n                <tr>\n                  <td>{{prices.make_name}}</td>\n                  <td>{{prices.model_name}}</td>\n                  <td>{{prices.proc_name}}</td>\n                  <td>{{prices.hdd_name}}</td>\n                  <td>{{prices.ram_name}}</td>\n                  <td>{{prices.supplier_name}}</td>\n                  <td>{{prices.avg_price}}</td>\n                  </tr>\n              </thead>\n            </table>\n          </form>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->  \n  <div>\n   <div class=\"container\" *ngIf=\"prices == null\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-4\">\n            <div class=\"clearfix\">\n              <h4 class=\"pt-3\">Result Not Found</h4>\n              <p class=\"text-muted\">The result you are looking for was not found.</p>\n            </div>\n            <div class=\"input-prepend input-group\">\n              <div class=\"input-group-prepend\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>    \n  </div>");

/***/ }),

/***/ "./src/app/views/check-price/check-price-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/check-price/check-price-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CheckPriceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckPriceRoutingModule", function() { return CheckPriceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _check_price_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check-price.component */ "./src/app/views/check-price/check-price.component.ts");




var routes = [
    {
        path: '',
        component: _check_price_component__WEBPACK_IMPORTED_MODULE_3__["CheckPriceComponent"],
        data: {
            title: 'Check Price'
        }
    }
];
var CheckPriceRoutingModule = /** @class */ (function () {
    function CheckPriceRoutingModule() {
    }
    CheckPriceRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CheckPriceRoutingModule);
    return CheckPriceRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/check-price/check-price.component.css":
/*!*************************************************************!*\
  !*** ./src/app/views/check-price/check-price.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NoZWNrLXByaWNlL2NoZWNrLXByaWNlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/check-price/check-price.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/check-price/check-price.component.ts ***!
  \************************************************************/
/*! exports provided: CheckPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckPriceComponent", function() { return CheckPriceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/loadspecs.service */ "./src/app/_services/loadspecs.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_requirement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/requirement.service */ "./src/app/_services/requirement.service.ts");





var CheckPriceComponent = /** @class */ (function () {
    function CheckPriceComponent(loadspecsService, alertify, requirementservice) {
        this.loadspecsService = loadspecsService;
        this.alertify = alertify;
        this.requirementservice = requirementservice;
        this.model = {};
        this.mymodel = {};
        this.roleid = Number(String(localStorage.getItem('RoleID')));
    }
    CheckPriceComponent.prototype.ngOnInit = function () {
        this.loadMakes();
        this.loadProcessors();
        this.loadRAMs();
        this.loadHDDs();
        this.loadSuppliers();
    };
    CheckPriceComponent.prototype.loadMakes = function () {
        var _this = this;
        return this.loadspecsService.getMakes().subscribe(function (partproducts) {
            _this.makes = partproducts.filter(function (proj) { return (proj.type === 1); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CheckPriceComponent.prototype.loadModels = function (value) {
        var _this = this;
        return this.loadspecsService.getModels().subscribe(function (partproducts) {
            _this.models = partproducts.filter(function (proj) { return (Number(proj.parentId) === Number(value)); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CheckPriceComponent.prototype.loadProcessors = function () {
        var _this = this;
        return this.loadspecsService.getProcessors().subscribe(function (processors) {
            _this.processors = processors;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CheckPriceComponent.prototype.loadRAMs = function () {
        var _this = this;
        return this.loadspecsService.loadSpectDetails().subscribe(function (rams) {
            _this.rams = rams.filter(function (proj) { return (proj.parentId === 1); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CheckPriceComponent.prototype.loadHDDs = function () {
        var _this = this;
        return this.loadspecsService.loadSpectDetails().subscribe(function (hdds) {
            _this.hdds = hdds.filter(function (proj) { return (proj.parentId === 2); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CheckPriceComponent.prototype.loadSuppliers = function () {
        var _this = this;
        return this.loadspecsService.loadSuppliers().subscribe(function (suppliers) {
            _this.suppliers = suppliers;
            console.log(_this.suppliers);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CheckPriceComponent.prototype.SearchAveragePrice = function () {
        var _this = this;
        if (this.mymodel.make_id === null) {
            this.alertify.error('Select Make');
            return;
        }
        if (this.mymodel.model_id === null) {
            this.alertify.error('Select Model');
            return;
        }
        if (this.mymodel.proc_id === null) {
            this.alertify.error('Select Processor');
            return;
        }
        if (this.mymodel.hdd_id === null) {
            this.alertify.error('Select HDD');
            return;
        }
        if (this.mymodel.ram_id === null) {
            this.alertify.error('Select RAM');
            return;
        }
        if (this.mymodel.supplier_id === null) {
            this.alertify.error('Enter Supplier Name');
            return;
        }
        this.requirementservice.searchAveragePrice(this.mymodel).subscribe(function (prices) {
            _this.prices = prices;
            _this.mymodel.make_id = null;
            _this.mymodel.model_id = null;
            _this.mymodel.proc_id = null;
            _this.mymodel.hdd_id = null;
            _this.mymodel.ram_id = null;
            _this.mymodel.supplier_id = null;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CheckPriceComponent.ctorParameters = function () { return [
        { type: _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_2__["LoadspecsService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
        { type: _services_requirement_service__WEBPACK_IMPORTED_MODULE_4__["RequirementService"] }
    ]; };
    CheckPriceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-check-price',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./check-price.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/check-price/check-price.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./check-price.component.css */ "./src/app/views/check-price/check-price.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_loadspecs_service__WEBPACK_IMPORTED_MODULE_2__["LoadspecsService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _services_requirement_service__WEBPACK_IMPORTED_MODULE_4__["RequirementService"]])
    ], CheckPriceComponent);
    return CheckPriceComponent;
}());



/***/ }),

/***/ "./src/app/views/check-price/check-price.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/check-price/check-price.module.ts ***!
  \*********************************************************/
/*! exports provided: CheckPriceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckPriceModule", function() { return CheckPriceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _check_price_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check-price-routing.module */ "./src/app/views/check-price/check-price-routing.module.ts");
/* harmony import */ var _check_price_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./check-price.component */ "./src/app/views/check-price/check-price.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_select2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-select2 */ "./node_modules/ng-select2/fesm5/ng-select2.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");









var CheckPriceModule = /** @class */ (function () {
    function CheckPriceModule() {
    }
    CheckPriceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_check_price_component__WEBPACK_IMPORTED_MODULE_4__["CheckPriceComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _check_price_routing_module__WEBPACK_IMPORTED_MODULE_3__["CheckPriceRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ng_select2__WEBPACK_IMPORTED_MODULE_7__["NgSelect2Module"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"]
            ]
        })
    ], CheckPriceModule);
    return CheckPriceModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-check-price-check-price-module.js.map