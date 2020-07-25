(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-reserve-order-reserve-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reserve-order/reserve-order.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/reserve-order/reserve-order.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\n    <!-- Button trigger modal -->\n    <button type=\"button\" class=\"btn btn-info mr-1\" data-toggle=\"modal\" (click)=\"infoModal.show()\">\n        Add Order\n      </button>\n  </div>\n  <div bsModal #infoModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\"  style=\"max-width: 749px;\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"addOrder()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add Order</h4>\n          <button type=\"button\" class=\"close\" (click)=\"infoModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Make</label>\n                  <div class=\"col-md-8 col-form-label\">\n                     <ng-select2 [data]=\"makes\" [width]=\"200\"  name=\"make_id\"  [(ngModel)]=\"model.make_id\" (ngModelChange)=\"loadModels($event)\"></ng-select2>                                         \n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Model</label>  \n                  <div class=\"col-md-8 col-form-label\">  \n                    <ng-select2 [data]=\"models\"  [width]=\"200\" name=\"model_id\"  [(ngModel)]=\"model.model_id\"></ng-select2>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Processor</label> \n                  <div class=\"col-md-8 col-form-label\">\n                    <ng-select2 [data]=\"processors\"  [width]=\"200\" name=\"processor_id\"  [(ngModel)]=\"model.processor_id\"></ng-select2> \n                  </div>\n                </div>  \n                <div class=\"form-group row\">   \n                  <label class=\"col-md-4 col-form-label\">EDD</label>\n                  <div class=\"col-md-8 col-form-label\">                 \n                    <input class=\"form-control\" id=\"date-input\" type=\"date\" name=\"e_edd\" [(ngModel)]=\"model.e_edd\" placeholder=\"date\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">   \n                <div class=\"form-group row\">   \n                  <label class=\"col-md-4 col-form-label\">Order</label>\n                  <div class=\"col-md-8 col-form-label\">                 \n                    <input type=\"text\" id=\"o_num\" name=\"o_num\" [(ngModel)]=\"model.o_num\"  class=\"form-control\" placeholder=\"Order Number\">\n                  </div>\n                </div>\n                <div class=\"form-group row\">   \n                  <label class=\"col-md-4 col-form-label\">Qty</label>\n                  <div class=\"col-md-8 col-form-label\">                 \n                    <input type=\"number\" id=\"o_qty\" name=\"o_qty\" [(ngModel)]=\"model.o_qty\"  class=\"form-control\" placeholder=\"Qty\">\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Customer</label>\n                  <div class=\"col-md-8 col-form-label\">                    \n                    <input type=\"text\" id=\"c_name\" name=\"c_name\" [(ngModel)]=\"model.c_name\"  class=\"form-control\" placeholder=\"Customer Name\">\n                  </div>\n                </div> \n              </div> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"infoModal.hide()\">Close</button>        \n          <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"postingrequest\">Submit</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <div bsModal #editOrder=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"EditOrderPost()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Edit Order</h4>\n          <button type=\"button\" class=\"close\" (click)=\"editOrder.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group row\">   \n                  <label class=\"col-md-2 col-form-label\">EDD</label>\n                  <div class=\"col-md-10 col-form-label\">                 \n                    <input type=\"number\" name=\"id\" [(ngModel)]=\"editmodel.id\">\n                    <input class=\"form-control\" style=\"border:1px solid #222;\" id=\"date-input\" type=\"date\" name=\"e_edd\" [(ngModel)]=\"editmodel.e_edd\" placeholder=\"date\">\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"editOrder.hide()\">Close</button>        \n          <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"postingrequest\">Submit</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n\n  <!--/.card-->\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <br>\n          <table datatable [dtTrigger]=\"dtTrigger\" [dtOptions]=\"dtOptions\" class=\"table table-responsive-sm table-striped table-hover table-outline mb-0\">\n            <thead class=\"thead-light\">\n              <tr>\n                <!-- <th class=\"text-center\"><i class=\"icon-people\"></i></th> -->\n                <th>OrderNo</th>\n                <th>Make</th>\n                <th>Model</th>\n                <th>Processor</th>\n                <th>Qty</th>\n                <th>Customer Name</th>\n                <th>Created By</th>\n                <th>Created Date</th>\n                <th>EDD</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let order of orders; let i = index\">\n                <td>{{ order.o_num}}</td>\n                <td>{{ order.makeName}}</td>\n                <td>{{order.modelName}} </td>\n                <td>{{ order.processor}}</td>\n                <td>{{ order.o_qty}}</td>\n                <td>{{ order.c_name}}</td>\n                <td>{{ order.username}}</td>\n                <td>{{order.created_at | date:'MMM d, y'}}</td>\n                <td>{{order.e_edd | date:'MMM d, y'}}</td>\n                <td>\n                  <button class=\"btn btn-square btn-sm btn-danger\" (click)=\"EditOrder(order.id,order.e_edd)\" type=\"button\">\n                    <i class=\"cui-pencil\"></i> Edit\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <!--/.col-->\n  <!-- <div *ngIf=\"roleid !== 1 &&  roleid !==9\">\n    <div class=\"app flex-row align-items-center\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-6\">\n            <div class=\"clearfix\">\n              <h1 class=\"float-left display-3 mr-4\">404</h1>\n              <h4 class=\"pt-3\">Oops! You're lost.</h4>\n              <p class=\"text-muted\">The page you are looking for was not found.</p>\n            </div>\n            <div class=\"input-prepend input-group\">\n              <div class=\"input-group-prepend\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>    \n  </div> -->\n");

/***/ }),

/***/ "./src/app/views/reserve-order/reserve-order-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/reserve-order/reserve-order-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ReserveOrderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReserveOrderRoutingModule", function() { return ReserveOrderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reserve_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reserve-order.component */ "./src/app/views/reserve-order/reserve-order.component.ts");




var routes = [
    {
        path: '',
        component: _reserve_order_component__WEBPACK_IMPORTED_MODULE_3__["ReserveOrderComponent"],
        data: {
            title: 'Orders'
        }
    }
];
var ReserveOrderRoutingModule = /** @class */ (function () {
    function ReserveOrderRoutingModule() {
    }
    ReserveOrderRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ReserveOrderRoutingModule);
    return ReserveOrderRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/reserve-order/reserve-order.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/views/reserve-order/reserve-order.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Jlc2VydmUtb3JkZXIvcmVzZXJ2ZS1vcmRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/reserve-order/reserve-order.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/reserve-order/reserve-order.component.ts ***!
  \****************************************************************/
/*! exports provided: ReserveOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReserveOrderComponent", function() { return ReserveOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/loadspecs.service */ "./src/app/_services/loadspecs.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _services_requirement_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_services/requirement.service */ "./src/app/_services/requirement.service.ts");









var ReserveOrderComponent = /** @class */ (function () {
    function ReserveOrderComponent(loadspecsService, alertify, requirementservice, datepipe) {
        this.loadspecsService = loadspecsService;
        this.alertify = alertify;
        this.requirementservice = requirementservice;
        this.datepipe = datepipe;
        this.model = {};
        this.editmodel = {};
        this.roleid = Number(String(localStorage.getItem('RoleID')));
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 25,
            retrieve: true,
            order: [[0, 'desc']]
        };
        this.isDtInitialized = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    ReserveOrderComponent.prototype.ngOnInit = function () {
        this.loadMakes();
        this.loadProcessors();
        this.loadOrders();
    };
    ReserveOrderComponent.prototype.loadMakes = function () {
        var _this = this;
        return this.loadspecsService.getMakes().subscribe(function (partproducts) {
            _this.makes = partproducts.filter(function (proj) { return (proj.type === 1); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ReserveOrderComponent.prototype.loadModels = function (value) {
        var _this = this;
        return this.loadspecsService.getModels().subscribe(function (partproducts) {
            _this.models = partproducts.filter(function (proj) { return (Number(proj.parentId) === Number(value)); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ReserveOrderComponent.prototype.loadProcessors = function () {
        var _this = this;
        return this.loadspecsService.getProcessors().subscribe(function (processors) {
            _this.processors = processors;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ReserveOrderComponent.prototype.loadOrders = function () {
        var _this = this;
        return this.requirementservice.getOrderss().subscribe(function (orders) {
            _this.orders = orders;
            console.log(_this.orders);
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
    ReserveOrderComponent.prototype.addOrder = function () {
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
        if (this.model.processor_id === null) {
            this.alertify.error('Select Processor');
            return;
        }
        if (!this.model.e_edd) {
            this.alertify.error('Select EDD');
            return;
        }
        if (!this.model.o_num) {
            this.alertify.error('Enter Order Number');
            return;
        }
        if (!this.model.o_qty) {
            this.alertify.error('Enter Qty');
            return;
        }
        if (!this.model.c_name) {
            this.alertify.error('Enter Customer Name');
            return;
        }
        console.log(this.model);
        document.getElementById('postingrequest').innerHTML = '<i class="fa fa-circle-o-notch mt-1 fa-lg fa-spin"></i> Sending...';
        document.getElementById('postingrequest').disabled = true;
        this.requirementservice.addOrder(this.model).subscribe(function (orders) {
            _this.loadOrders();
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
            _this.model.make_id = '0';
            _this.model.model_id = '0';
            _this.model.processor_id = '0';
            _this.model.o_qty = '';
            _this.model.o_num = '';
            _this.model.c_name = '';
            document.getElementById('postingrequest').innerHTML = 'Submit';
            document.getElementById('postingrequest').disabled = false;
            _this.infoModal.hide();
            _this.alertify.success('Order Created Successfully');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ReserveOrderComponent.prototype.EditOrder = function (id, date) {
        var latest_date = this.datepipe.transform(date, 'yyyy-MM-dd');
        this.editmodel.id = id;
        this.editmodel.e_edd = latest_date;
        this.editOrder.show();
    };
    ReserveOrderComponent.prototype.EditOrderPost = function (id, date) {
        var _this = this;
        this.editmodel.updated_by = Number(localStorage.getItem('UserId'));
        this.requirementservice.EditOrderPost(this.editmodel).subscribe(function () {
            _this.loadOrders();
            _this.editmodel.id = '';
            _this.editmodel.e_edd = '';
            _this.editmodel.updated_by = '';
            _this.editOrder.hide();
            _this.alertify.success('Order Edited Successfully');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ReserveOrderComponent.ctorParameters = function () { return [
        { type: _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_3__["LoadspecsService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] },
        { type: _services_requirement_service__WEBPACK_IMPORTED_MODULE_8__["RequirementService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"])
    ], ReserveOrderComponent.prototype, "dtElement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('infoModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalDirective"])
    ], ReserveOrderComponent.prototype, "infoModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editOrder'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalDirective"])
    ], ReserveOrderComponent.prototype, "editOrder", void 0);
    ReserveOrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reserve-order',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./reserve-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reserve-order/reserve-order.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./reserve-order.component.css */ "./src/app/views/reserve-order/reserve-order.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_loadspecs_service__WEBPACK_IMPORTED_MODULE_3__["LoadspecsService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"],
            _services_requirement_service__WEBPACK_IMPORTED_MODULE_8__["RequirementService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
    ], ReserveOrderComponent);
    return ReserveOrderComponent;
}());



/***/ }),

/***/ "./src/app/views/reserve-order/reserve-order.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/reserve-order/reserve-order.module.ts ***!
  \*************************************************************/
/*! exports provided: ReserveOrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReserveOrderModule", function() { return ReserveOrderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _reserve_order_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reserve-order-routing.module */ "./src/app/views/reserve-order/reserve-order-routing.module.ts");
/* harmony import */ var _reserve_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reserve-order.component */ "./src/app/views/reserve-order/reserve-order.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_select2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-select2 */ "./node_modules/ng-select2/fesm5/ng-select2.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");









var ReserveOrderModule = /** @class */ (function () {
    function ReserveOrderModule() {
    }
    ReserveOrderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_reserve_order_component__WEBPACK_IMPORTED_MODULE_4__["ReserveOrderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _reserve_order_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReserveOrderRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ng_select2__WEBPACK_IMPORTED_MODULE_7__["NgSelect2Module"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"]
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
            ]
        })
    ], ReserveOrderModule);
    return ReserveOrderModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-reserve-order-reserve-order-module.js.map