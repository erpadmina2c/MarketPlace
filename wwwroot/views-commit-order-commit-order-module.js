(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-commit-order-commit-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/commit-order/commit-order.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/commit-order/commit-order.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\n    <!-- Button trigger modal -->\n    <button type=\"button\" class=\"btn btn-info mr-1\" data-toggle=\"modal\" (click)=\"infoModal.show()\">\n        Add Order\n      </button>\n  </div>\n  <div bsModal #infoModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\"  style=\"max-width: 749px;\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"addOrder()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add Order</h4>\n          <button type=\"button\" class=\"close\" (click)=\"infoModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Make</label>\n                  <div class=\"col-md-8 col-form-label\">\n                     <ng-select2 [data]=\"makes\" [width]=\"200\"  name=\"make_id\"  [(ngModel)]=\"model.make_id\" (ngModelChange)=\"loadModels($event)\"></ng-select2>                                         \n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Model</label>  \n                  <div class=\"col-md-8 col-form-label\">  \n                    <ng-select2 [data]=\"models\"  [width]=\"200\" name=\"model_id\"  [(ngModel)]=\"model.model_id\"></ng-select2>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Processor</label> \n                  <div class=\"col-md-8 col-form-label\">\n                    <ng-select2 [data]=\"processors\"  [width]=\"200\" name=\"proc_id\"  [(ngModel)]=\"model.proc_id\"></ng-select2> \n                  </div>\n                </div>  \n                <div class=\"form-group row\">   \n                  <label class=\"col-md-4 col-form-label\">EDD</label>\n                  <div class=\"col-md-8 col-form-label\">                 \n                    <input class=\"form-control\" id=\"date-input\" type=\"date\" name=\"co_edd\" [(ngModel)]=\"model.co_edd\" placeholder=\"date\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">  \n                <div class=\"form-group row\">   \n                  <label class=\"col-md-4 col-form-label\">Qty</label>\n                  <div class=\"col-md-8 col-form-label\">                 \n                    <input type=\"number\" id=\"o_qty\" name=\"o_qty\" [(ngModel)]=\"model.co_qty\"  class=\"form-control\" placeholder=\"Qty\">\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Customer</label>\n                  <div class=\"col-md-8 col-form-label\">                    \n                    <input type=\"text\" id=\"c_name\" name=\"c_name\" [(ngModel)]=\"model.c_name\"  class=\"form-control\" placeholder=\"Customer Name\">\n                  </div>\n                </div>  \n                <div class=\"form-group row\">   \n                  <label class=\"col-md-4 col-form-label\">Comment</label>\n                  <div class=\"col-md-8 col-form-label\">                 \n                    <textarea type=\"text\" id=\"comment\" name=\"comment\" [(ngModel)]=\"model.comment\"  class=\"form-control\" placeholder=\"comment \"></textarea>\n                  </div>\n                </div>\n              </div> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"infoModal.hide()\">Close</button>        \n          <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"postingrequest\">Submit</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <div bsModal #editOrder=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"EditOrderPost()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Edit Order</h4>\n          <button type=\"button\" class=\"close\" (click)=\"editOrder.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n          <div class=\"card-body row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group row\">\n                <label class=\"col-md-4 col-form-label\">Make</label>\n                <div class=\"col-md-8 col-form-label\">\n                   <ng-select2 [data]=\"makes\" [width]=\"200\"  name=\"make_id\" disabled=\"disabled\" [(ngModel)]=\"editmodel.make_id\"></ng-select2>                                         \n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-4 col-form-label\">Model</label>  \n                <div class=\"col-md-8 col-form-label\">  \n                  <ng-select2 [data]=\"models\"  [width]=\"200\" name=\"model_id\" disabled=\"disabled\" [(ngModel)]=\"editmodel.model_id\"></ng-select2>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-4 col-form-label\">Processor</label> \n                <div class=\"col-md-8 col-form-label\">\n                  <ng-select2 [data]=\"processors\"  [width]=\"200\" name=\"proc_id\" disabled=\"disabled\"  [(ngModel)]=\"editmodel.proc_id\"></ng-select2> \n                </div>\n              </div>  \n              <div class=\"form-group row\">   \n                <label class=\"col-md-4 col-form-label\">EDD</label>\n                <div class=\"col-md-8 col-form-label\">                 \n                  <input class=\"form-control\" id=\"date-input\" type=\"date\" name=\"co_edd\" [(ngModel)]=\"editmodel.co_edd\" placeholder=\"date\">\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6\">  \n              <div class=\"form-group row\">   \n                <label class=\"col-md-4 col-form-label\">Qty</label>\n                <div class=\"col-md-8 col-form-label\">                 \n                  <input type=\"number\" id=\"o_qty\" name=\"o_qty\" [(ngModel)]=\"editmodel.co_qty\"  class=\"form-control\" placeholder=\"Qty\">\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-4 col-form-label\">Customer</label>\n                <div class=\"col-md-8 col-form-label\">                    \n                  <input type=\"text\" id=\"c_name\" name=\"c_name\" disabled=\"disabled\" [(ngModel)]=\"editmodel.c_name\"  class=\"form-control\" placeholder=\"Customer Name\">\n                </div>\n              </div>  \n              <div class=\"form-group row\">   \n                <label class=\"col-md-4 col-form-label\">Comment</label>\n                <div class=\"col-md-8 col-form-label\">                 \n                  <textarea type=\"text\" id=\"comment\" name=\"comment\" [(ngModel)]=\"editmodel.comment\"  class=\"form-control\" placeholder=\"comment \"></textarea>\n                </div>\n              </div>\n            </div> \n          </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"editOrder.hide()\">Close</button>        \n          <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"postingrequest\">Update</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n\n  <!--/.card-->\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form name=\"demo\">\n      <div  class=\"row\" style=\"background: #21355C;margin-right:0px;margin-left:0px;padding-top: 8px;\">       \n        <span  class=\"col-2 row\">\n          <div class=\"col-8\" style=\"color: #FFF;\">\n            All Order\n          </div>\n          <label class=\"switch switch-label switch-outline-success-alt col-4\">\n            <input type=\"checkbox\" class=\"switch-input\" name=\"order\" [checked]='check1' (click)=\"activateModel($event,0)\">\n            <span class=\"switch-slider\" data-checked=\"✓\" data-unchecked=\"✕\"></span>\n          </label>\n        </span>\n        <span  class=\"col-2 row\">\n          <div class=\"col-8\" style=\"color: #FFF;\">\n            In-Discussion Order\n          </div>\n          <label class=\"switch switch-label switch-outline-success-alt col-4\">\n            <input type=\"checkbox\" class=\"switch-input\" name=\"order1\" [checked]='check2' (click)=\"activateModel($event,1)\">\n            <span class=\"switch-slider\" data-checked=\"✓\" data-unchecked=\"✕\"></span>\n          </label>\n        </span>      \n        <span  class=\"col-2 row\">\n          <div class=\"col-7\"  style=\"color: #FFF;\">\n            Confirmed Order\n          </div>\n          <label class=\"switch switch-label switch-outline-success-alt col-4\">\n            <input type=\"checkbox\" class=\"switch-input\" name=\"order3\" [checked]='check3' (click)=\"activateModel($event,2)\">\n            <span class=\"switch-slider\" data-checked=\"✓\" data-unchecked=\"✕\"></span>\n          </label>\n        </span>  \n      </div>\n    </form>\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <br>\n          <table datatable [dtTrigger]=\"dtTrigger\" [dtOptions]=\"dtOptions\" class=\"table table-responsive-sm table-striped table-hover table-outline mb-0\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th class=\"text-center\">###</th>\n                <th>OrderNo</th>\n                <th>Make</th>\n                <th>Model</th>\n                <th>Processor</th>\n                <th>Qty</th>\n                <th>Customer Name</th>\n                <th>Created By</th>\n                <th>Created Date</th>\n                <th>EDD</th>\n                <th>Comment</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let order of orders; let i = index\">\n                <td class=\"text-center\">\n                  <button type=\"submit\" class=\"btn btn-square btn-sm btn-secondary\" (click)=\"CheckDetails(order.id)\">\n                    <i class=\"fa fa-dot-circle-o\"></i> Details\n                  </button>  \n                </td>\n                <td>{{ order.co_num}}</td>\n                <td>{{ order.makeName}}</td>\n                <td>{{order.modelName}} </td>\n                <td>{{ order.processor}}</td>\n                <td>{{ order.co_qty}}</td>\n                <td>{{ order.c_name}}</td>\n                <td>{{ order.username}}</td>\n                <td>{{order.created_at | date:'MMM d, y'}}</td>\n                <td>{{order.co_edd | date:'MMM d, y'}}</td>\n                <td>{{ order.comment}}</td>\n                <td>       \n                  <button class=\"btn btn-square btn-sm btn-danger\" (click)=\"EditOrder(order.id,order.co_edd)\" type=\"button\">\n                    <i class=\"cui-pencil\"></i> Edit\n                  </button>                \n                  <!-- <button *ngIf=\"order.co_status === 1\" type=\"submit\" class=\"btn btn-square btn-sm btn-info\" (click)=\"UpdateCPOModal(order.id,3)\">\n                    <i class=\"fa fa-dot-circle-o\"></i> In-discussion\n                  </button>                  -->\n                  <button *ngIf=\"order.co_status !== 4\" type=\"submit\" class=\"btn btn-square btn-sm btn-success\" (click)=\"UpdateCPOModal(order.id,4)\">\n                    <i class=\"fa fa-dot-circle-o\"></i> CONFIRM\n                  </button> \n                  <span *ngIf=\"order.co_status === 4\" style=\"color:green;font-weight:bold;\n                  font-style: italic;font-family:monospace;font-size: 1.1rem;\">CONFIRMED</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <!--/.col-->\n  <!-- <div *ngIf=\"roleid !== 1 &&  roleid !==9\">\n    <div class=\"app flex-row align-items-center\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-6\">\n            <div class=\"clearfix\">\n              <h1 class=\"float-left display-3 mr-4\">404</h1>\n              <h4 class=\"pt-3\">Oops! You're lost.</h4>\n              <p class=\"text-muted\">The page you are looking for was not found.</p>\n            </div>\n            <div class=\"input-prepend input-group\">\n              <div class=\"input-group-prepend\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>    \n  </div> -->\n\n  <div bsModal #UpdatePOModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"UpdateCOPost()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Mark Order as <span *ngIf=\"updatemodel.co_status == 3\">In-discussion</span><span *ngIf=\"updatemodel.co_status == 4\">Complete</span></h4>\n          <button type=\"button\" class=\"close\" (click)=\"UpdatePOModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body row\">           \n              <div class=\"col-md-12\">             \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">Comment</label>\n                    <div class=\"col-md-8 col-form-label\">                \n                      <textarea class=\"form-control\" name=\"comment\" [(ngModel)]=\"updatemodel.comment\" id=\"Comment\" placeholder=\"Comment\" rows=\"3\"></textarea>\n                    </div>\n                  </div>\n                </div>  \n              </div> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"UpdatePOModal.hide()\">Close</button>        \n          <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"postingrequest\">Update</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <div bsModal #COLDetails=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 748px;\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Order Detail</h4>\n          <button type=\"button\" class=\"close\" (click)=\"COLDetails.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body row\">           \n              <table class=\"table table-responsive-sm table-hover table-striped table-outline mb-0\">\n                <thead class=\"thead-light\">\n                  <tr>\n                    <th class=\"text-center\">CO Number</th>\n                    <th>Qty</th>\n                    <th>Comment</th>\n                    <th>Action</th>\n                    <th>Updated By</th>\n                    <th>Updated Date</th>\n                  </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let coldetail of coldetails; let i = index\">\n                      <td>\n                        {{ coldetail.col_num}}\n                      </td>\n                      <td>{{ coldetail.col_qty}}</td>\n                      <td>{{ coldetail.col_comment}}</td>\n                      <td>{{ coldetail.col_flag}}</td>\n                      <td>{{ coldetail.col_username}}</td>\n                      <td>{{coldetail.col_created_at | date:'MMM d, y'}}</td>                      \n                    </tr>\n                  </tbody>\n              </table> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"COLDetails.hide()\">Close</button> \n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n");

/***/ }),

/***/ "./src/app/views/commit-order/commit-order-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/commit-order/commit-order-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CommitOrderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitOrderRoutingModule", function() { return CommitOrderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _commit_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commit-order.component */ "./src/app/views/commit-order/commit-order.component.ts");




var routes = [
    {
        path: '',
        component: _commit_order_component__WEBPACK_IMPORTED_MODULE_3__["CommitOrderComponent"],
        data: {
            title: 'Commit Orders'
        }
    }
];
var CommitOrderRoutingModule = /** @class */ (function () {
    function CommitOrderRoutingModule() {
    }
    CommitOrderRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CommitOrderRoutingModule);
    return CommitOrderRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/commit-order/commit-order.component.css":
/*!***************************************************************!*\
  !*** ./src/app/views/commit-order/commit-order.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 576px){\r\n    .modal-dialog {\r\n        max-width: 726px;\r\n        margin: 1.75rem auto;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29tbWl0LW9yZGVyL2NvbW1pdC1vcmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsb0JBQW9CO0lBQ3hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9jb21taXQtb3JkZXIvY29tbWl0LW9yZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1xyXG4gICAgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA3MjZweDtcclxuICAgICAgICBtYXJnaW46IDEuNzVyZW0gYXV0bztcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/commit-order/commit-order.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/commit-order/commit-order.component.ts ***!
  \**************************************************************/
/*! exports provided: CommitOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitOrderComponent", function() { return CommitOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_requirement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/requirement.service */ "./src/app/_services/requirement.service.ts");
/* harmony import */ var _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/loadspecs.service */ "./src/app/_services/loadspecs.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");









var CommitOrderComponent = /** @class */ (function () {
    function CommitOrderComponent(loadspecsService, alertify, requirementservice, datepipe) {
        this.loadspecsService = loadspecsService;
        this.alertify = alertify;
        this.requirementservice = requirementservice;
        this.datepipe = datepipe;
        this.model = {};
        this.mymodel = {};
        this.editmodel = {};
        this.updatemodel = {};
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
    CommitOrderComponent.prototype.ngOnInit = function () {
        this.check1 = true;
        this.check2 = false;
        this.check3 = false;
        this.loadMakes();
        this.loadProcessors();
        this.loadOrders();
    };
    CommitOrderComponent.prototype.loadMakes = function () {
        var _this = this;
        return this.loadspecsService.getMakes().subscribe(function (partproducts) {
            _this.makes = partproducts.filter(function (proj) { return (proj.type === 1); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CommitOrderComponent.prototype.loadModels = function (value) {
        var _this = this;
        return this.loadspecsService.getModels().subscribe(function (partproducts) {
            _this.models = partproducts.filter(function (proj) { return (Number(proj.parentId) === Number(value)); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CommitOrderComponent.prototype.loadProcessors = function () {
        var _this = this;
        return this.loadspecsService.getProcessors().subscribe(function (processors) {
            _this.processors = processors;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CommitOrderComponent.prototype.loadOrders = function () {
        var _this = this;
        return this.requirementservice.getCommitOrders().subscribe(function (orders) {
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
    CommitOrderComponent.prototype.addOrder = function () {
        var _this = this;
        this.model.emp_id = localStorage.getItem('UserId');
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
        if (!this.model.co_edd) {
            this.alertify.error('Select EDD');
            return;
        }
        if (!this.model.co_qty) {
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
        this.requirementservice.addCommitOrder(this.model).subscribe(function (orders) {
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
            _this.model.make_id = null;
            _this.model.model_id = null;
            _this.model.proc_id = null;
            _this.model.co_edd = '';
            _this.model.c_name = '';
            _this.model.comment = '';
            document.getElementById('postingrequest').innerHTML = 'Submit';
            document.getElementById('postingrequest').disabled = false;
            _this.infoModal.hide();
            _this.alertify.success('Order Created Successfully');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CommitOrderComponent.prototype.EditOrder = function (id, date) {
        this.editmodel = this.orders.filter(function (proj) { return (Number(proj.id) === Number(id)); })[0];
        console.log(this.editmodel);
        this.editmodel.co_edd = this.datepipe.transform(this.editmodel.co_edd, 'yyyy-MM-dd');
        console.log(this.editmodel.co_edd);
        this.loadModels(this.editmodel.make_id);
        this.editOrder.show();
    };
    CommitOrderComponent.prototype.EditOrderPost = function (id, date) {
        var _this = this;
        this.editmodel.updated_by = Number(localStorage.getItem('UserId'));
        console.log(this.editmodel);
        this.requirementservice.EditCommitOrderPost(this.editmodel).subscribe(function () {
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
    CommitOrderComponent.prototype.UpdateCPOModal = function (id, co_status) {
        this.updatemodel.id = id;
        this.updatemodel.co_status = co_status;
        console.log(this.updatemodel);
        this.UpdatePOModal.show();
    };
    CommitOrderComponent.prototype.UpdateCOPost = function () {
        var _this = this;
        this.updatemodel['updated_by'] = localStorage.getItem('UserId');
        console.log(this.updatemodel);
        if (!this.updatemodel.comment) {
            this.alertify.error('Enter Comment');
            return;
        }
        this.requirementservice.UpdateCOPost(this.updatemodel).subscribe(function (orders) {
            _this.loadOrders();
            _this.updatemodel = {};
            _this.UpdatePOModal.hide();
            _this.alertify.success('CO EDITED Successfully');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CommitOrderComponent.prototype.CheckDetails = function (id) {
        var _this = this;
        return this.requirementservice.getCODetails(id).subscribe(function (coldetails) {
            _this.coldetails = coldetails;
            console.log(_this.coldetails);
            _this.COLDetails.show();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CommitOrderComponent.prototype.activateModel = function (event, type) {
        var _this = this;
        if (event.target.checked === false) {
            event.target.checked = true;
        }
        return this.requirementservice.getCommitOrders().subscribe(function (orders) {
            if (type === 2) {
                _this.orders = orders.filter(function (proj) { return (proj.co_status === 4); });
                _this.check1 = false;
                _this.check2 = false;
                _this.check3 = true;
            }
            else if (type === 1) {
                _this.orders = orders.filter(function (proj) { return (proj.co_status !== 4); });
                _this.check1 = false;
                _this.check2 = true;
                _this.check3 = false;
            }
            else {
                _this.orders = orders;
                _this.check1 = true;
                _this.check2 = false;
                _this.check3 = false;
            }
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
    CommitOrderComponent.ctorParameters = function () { return [
        { type: _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_4__["LoadspecsService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"] },
        { type: _services_requirement_service__WEBPACK_IMPORTED_MODULE_3__["RequirementService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"])
    ], CommitOrderComponent.prototype, "dtElement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('infoModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalDirective"])
    ], CommitOrderComponent.prototype, "infoModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editOrder'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalDirective"])
    ], CommitOrderComponent.prototype, "editOrder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('UpdatePOModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalDirective"])
    ], CommitOrderComponent.prototype, "UpdatePOModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('COLDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalDirective"])
    ], CommitOrderComponent.prototype, "COLDetails", void 0);
    CommitOrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-commit-order',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./commit-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/commit-order/commit-order.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./commit-order.component.css */ "./src/app/views/commit-order/commit-order.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_loadspecs_service__WEBPACK_IMPORTED_MODULE_4__["LoadspecsService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"],
            _services_requirement_service__WEBPACK_IMPORTED_MODULE_3__["RequirementService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
    ], CommitOrderComponent);
    return CommitOrderComponent;
}());



/***/ }),

/***/ "./src/app/views/commit-order/commit-order.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/commit-order/commit-order.module.ts ***!
  \***********************************************************/
/*! exports provided: CommitOrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitOrderModule", function() { return CommitOrderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _commit_order_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commit-order-routing.module */ "./src/app/views/commit-order/commit-order-routing.module.ts");
/* harmony import */ var _commit_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commit-order.component */ "./src/app/views/commit-order/commit-order.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ng_select2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-select2 */ "./node_modules/ng-select2/fesm5/ng-select2.js");









var CommitOrderModule = /** @class */ (function () {
    function CommitOrderModule() {
    }
    CommitOrderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_commit_order_component__WEBPACK_IMPORTED_MODULE_4__["CommitOrderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _commit_order_routing_module__WEBPACK_IMPORTED_MODULE_3__["CommitOrderRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ng_select2__WEBPACK_IMPORTED_MODULE_8__["NgSelect2Module"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"]
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
            ]
        })
    ], CommitOrderModule);
    return CommitOrderModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-commit-order-commit-order-module.js.map