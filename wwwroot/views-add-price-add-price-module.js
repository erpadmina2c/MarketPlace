(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-add-price-add-price-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/add-price/add-price.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/add-price/add-price.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\n    <!-- Button trigger modal -->\n    <button type=\"button\" class=\"btn btn-info mr-1\" data-toggle=\"modal\" (click)=\"infoModal.show()\">\n        Add Price\n      </button>\n  </div>\n  <div bsModal #infoModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\"  style=\"max-width: 749px;\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"sendRequirementPost()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add Price</h4>\n          <button type=\"button\" class=\"close\" (click)=\"infoModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Make</label>\n                  <div class=\"col-md-8 col-form-label\">\n                     <ng-select2 [data]=\"makes\" [width]=\"200\"  name=\"make_id\"  [(ngModel)]=\"model.make_id\" (ngModelChange)=\"loadModels($event)\"></ng-select2>                                         \n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Model</label>  \n                  <div class=\"col-md-8 col-form-label\">  \n                    <ng-select2 [data]=\"models\"  [width]=\"200\" name=\"model_id\"  [(ngModel)]=\"model.model_id\"></ng-select2>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Processor</label> \n                  <div class=\"col-md-8 col-form-label\">\n                    <ng-select2 [data]=\"processors\"  [width]=\"200\" name=\"proc_id\"  [(ngModel)]=\"model.proc_id\"></ng-select2> \n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Supplier</label>\n                  <div class=\"col-md-8 col-form-label\">                     \n                    <ng-select2 [data]=\"suppliers\"  [width]=\"200\" name=\"supplier_id\"  [(ngModel)]=\"model.supplier_id\"></ng-select2>               \n                  </div>\n                </div> \n              </div>\n              <div class=\"col-md-6\">  \n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">HDD</label> \n                  <div class=\"col-md-8 col-form-label\">   \n                    <ng-select2 [data]=\"hdds\"  [width]=\"200\" name=\"hdd_id\"  [(ngModel)]=\"model.hdd_id\"></ng-select2>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">RAM</label> \n                  <div class=\"col-md-8 col-form-label\">   \n                    <ng-select2 [data]=\"rams\"  [width]=\"200\" name=\"ram_id\"  [(ngModel)]=\"model.ram_id\"></ng-select2>\n                  </div>\n                </div>\n                <div class=\"form-group row\">   \n                  <label class=\"col-md-4 col-form-label\">Price</label>\n                  <div class=\"col-md-8 col-form-label\">                 \n                    <input type=\"number\" id=\"price\" name=\"price\" [(ngModel)]=\"model.price\"  class=\"form-control\" placeholder=\"Price\">\n                  </div>\n                </div>  \n              </div> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"infoModal.hide()\">Close</button>        \n          <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"postingPrice\">Submit</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <!--/.card-->\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <br>\n          <table datatable [dtTrigger]=\"dtTrigger\" [dtOptions]=\"dtOptions\" class=\"table table-responsive-sm table-striped table-hover table-outline mb-0\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th>ID</th>\n                <th>Make</th>\n                <th>Model </th>\n                <th>Processor </th>\n                <th>HDD</th>\n                <th>RAM</th>\n                <th>Supplier Name</th>\n                <th>Price</th>\n                <th>Created Date</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let price of prices; let i = index\">\n                <td>{{ price.id}}</td>\n                <td>{{ price.make_name}}</td>\n                <td>{{ price.model_name}}</td>\n                <td>{{ price.proc_name}}</td>\n                <td>{{ price.hdd_name}}</td>\n                <td>{{ price.ram_name}}</td>\n                <td>{{ price.supplier_name}}</td>\n                <td>{{ price.price}}</td>\n                <td>{{price.created_at | date:'MMM d, y'}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <!--/.col-->\n  <!-- <div *ngIf=\"roleid === 5\">\n    <div class=\"app flex-row align-items-center\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-6\">\n            <div class=\"clearfix\">\n              <h1 class=\"float-left display-3 mr-4\">404</h1>\n              <h4 class=\"pt-3\">Oops! You're lost.</h4>\n              <p class=\"text-muted\">The page you are looking for was not found.</p>\n            </div>\n            <div class=\"input-prepend input-group\">\n              <div class=\"input-group-prepend\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n  </div> -->\n");

/***/ }),

/***/ "./src/app/views/add-price/add-price-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/add-price/add-price-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AddPriceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPriceRoutingModule", function() { return AddPriceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_price_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-price.component */ "./src/app/views/add-price/add-price.component.ts");




var routes = [
    {
        path: '',
        component: _add_price_component__WEBPACK_IMPORTED_MODULE_3__["AddPriceComponent"],
        data: {
            title: 'Add Price'
        }
    }
];
var AddPriceRoutingModule = /** @class */ (function () {
    function AddPriceRoutingModule() {
    }
    AddPriceRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AddPriceRoutingModule);
    return AddPriceRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/add-price/add-price.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/add-price/add-price.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FkZC1wcmljZS9hZGQtcHJpY2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/add-price/add-price.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/add-price/add-price.component.ts ***!
  \********************************************************/
/*! exports provided: AddPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPriceComponent", function() { return AddPriceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/loadspecs.service */ "./src/app/_services/loadspecs.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_requirement_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_services/requirement.service */ "./src/app/_services/requirement.service.ts");








var AddPriceComponent = /** @class */ (function () {
    function AddPriceComponent(loadspecsService, alertify, requirementservice) {
        this.loadspecsService = loadspecsService;
        this.alertify = alertify;
        this.requirementservice = requirementservice;
        this.model = {};
        this.roleid = Number(String(localStorage.getItem('RoleID')));
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 25,
            retrieve: true,
            order: [[0, 'asc']]
        };
        this.isDtInitialized = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    AddPriceComponent.prototype.ngOnInit = function () {
        this.loadMakes();
        this.loadProcessors();
        this.loadRAMs();
        this.loadHDDs();
        this.loadSuppliers();
        this.loadPrice();
    };
    AddPriceComponent.prototype.loadMakes = function () {
        var _this = this;
        return this.loadspecsService.getMakes().subscribe(function (partproducts) {
            _this.makes = partproducts.filter(function (proj) { return (proj.type === 1); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    AddPriceComponent.prototype.loadModels = function (value) {
        var _this = this;
        return this.loadspecsService.getModels().subscribe(function (partproducts) {
            _this.models = partproducts.filter(function (proj) { return (Number(proj.parentId) === Number(value)); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    AddPriceComponent.prototype.loadProcessors = function () {
        var _this = this;
        return this.loadspecsService.getProcessors().subscribe(function (processors) {
            _this.processors = processors;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    AddPriceComponent.prototype.loadRAMs = function () {
        var _this = this;
        return this.loadspecsService.loadSpectDetails().subscribe(function (rams) {
            _this.rams = rams.filter(function (proj) { return (proj.parentId === 1); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    AddPriceComponent.prototype.loadHDDs = function () {
        var _this = this;
        return this.loadspecsService.loadSpectDetails().subscribe(function (hdds) {
            _this.hdds = hdds.filter(function (proj) { return (proj.parentId === 2); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    AddPriceComponent.prototype.loadSuppliers = function () {
        var _this = this;
        return this.loadspecsService.loadSuppliers().subscribe(function (suppliers) {
            _this.suppliers = suppliers;
            console.log(_this.suppliers);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    AddPriceComponent.prototype.loadPrice = function () {
        var _this = this;
        return this.requirementservice.getPrice().subscribe(function (prices) {
            _this.prices = prices;
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
    AddPriceComponent.prototype.sendRequirementPost = function () {
        var _this = this;
        this.model.user_id = localStorage.getItem('UserId');
        if (this.model.make_id === null) {
            this.alertify.error('Select Make');
            return;
        }
        if (this.model.model_id === null) {
            this.alertify.error('Select Model');
            return;
        }
        if (this.model.proc_id === null) {
            this.alertify.error('Select Processor');
            return;
        }
        if (this.model.supplier_id === null) {
            this.alertify.error('Enter Supplier Name');
            return;
        }
        if (this.model.hdd_id === null) {
            this.alertify.error('Select HDD');
            return;
        }
        if (this.model.ram_id === null) {
            this.alertify.error('Select RAM');
            return;
        }
        if (!this.model.price) {
            this.alertify.error('Enter price');
            return;
        }
        document.getElementById('postingPrice').innerHTML = '<i class="fa fa-circle-o-notch mt-1 fa-lg fa-spin"></i> Sending...';
        document.getElementById('postingPrice').disabled = true;
        this.requirementservice.postPrice(this.model).subscribe(function () {
            _this.loadPrice();
            _this.model.make_id = null;
            _this.model.model_id = null;
            _this.model.proc_id = null;
            _this.model.hdd_id = null;
            _this.model.ram_id = null;
            _this.model.supplier_name = '';
            _this.model.price = '';
            document.getElementById('postingPrice').innerHTML = 'Submit';
            document.getElementById('postingPrice').disabled = false;
            _this.infoModal.hide();
            _this.alertify.success('Price Posted Successfull');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    AddPriceComponent.ctorParameters = function () { return [
        { type: _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_2__["LoadspecsService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
        { type: _services_requirement_service__WEBPACK_IMPORTED_MODULE_7__["RequirementService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('infoModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], AddPriceComponent.prototype, "infoModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"])
    ], AddPriceComponent.prototype, "dtElement", void 0);
    AddPriceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-price',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-price.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/add-price/add-price.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-price.component.css */ "./src/app/views/add-price/add-price.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_loadspecs_service__WEBPACK_IMPORTED_MODULE_2__["LoadspecsService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _services_requirement_service__WEBPACK_IMPORTED_MODULE_7__["RequirementService"]])
    ], AddPriceComponent);
    return AddPriceComponent;
}());



/***/ }),

/***/ "./src/app/views/add-price/add-price.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/add-price/add-price.module.ts ***!
  \*****************************************************/
/*! exports provided: AddPriceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPriceModule", function() { return AddPriceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_price_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-price-routing.module */ "./src/app/views/add-price/add-price-routing.module.ts");
/* harmony import */ var _add_price_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-price.component */ "./src/app/views/add-price/add-price.component.ts");
/* harmony import */ var ng_select2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-select2 */ "./node_modules/ng-select2/fesm5/ng-select2.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");









var AddPriceModule = /** @class */ (function () {
    function AddPriceModule() {
    }
    AddPriceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_add_price_component__WEBPACK_IMPORTED_MODULE_4__["AddPriceComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _add_price_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddPriceRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ng_select2__WEBPACK_IMPORTED_MODULE_5__["NgSelect2Module"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"]
            ]
        })
    ], AddPriceModule);
    return AddPriceModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-add-price-add-price-module.js.map