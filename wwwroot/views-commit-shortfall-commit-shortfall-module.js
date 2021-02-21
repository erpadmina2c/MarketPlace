(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-commit-shortfall-commit-shortfall-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/commit-shortfall/commit-shortfall.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/commit-shortfall/commit-shortfall.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div class=\"card-body\">\n    <!--/.card-->\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <form name=\"demo\">\n        <div  class=\"row\" style=\"background: #062736;margin-right:0px;margin-left:0px;padding-top: 8px;\">        \n          <span  class=\"col-2 row\">\n            <div class=\"col-8\" style=\"color: #08ab9e;\">\n              In-Discussion Order\n            </div>\n            <label class=\"switch switch-label switch-outline-success-alt col-4\">\n              <input type=\"checkbox\" class=\"switch-input\" (click)=\"activateModel($event,'InOrder')\">\n              <span class=\"switch-slider\" data-checked=\"✓\" data-unchecked=\"✕\"></span>\n            </label>\n          </span>      \n          <!-- <span  class=\"col-2 row\">\n            <div class=\"col-7\"  style=\"color: #FFF;\">\n              Confirmed Order\n            </div>\n            <label class=\"switch switch-label switch-outline-success-alt col-4\">\n              <input type=\"checkbox\" class=\"switch-input\" [checked]='true' (click)=\"activateModel($event,'COrder')\">\n              <span class=\"switch-slider\" data-checked=\"✓\" data-unchecked=\"✕\"></span>\n            </label>\n          </span>  -->\n          <span  class=\"col-2 row\">\n            <div class=\"col-8\" style=\"color: #08ab9e;\">\n              In-Discussion PO\n            </div>\n            <label class=\"switch switch-label switch-outline-success-alt col-4\">\n              <input type=\"checkbox\" class=\"switch-input\"  (click)=\"activateModel($event,'InPurchase')\">\n              <span class=\"switch-slider\" data-checked=\"✓\" data-unchecked=\"✕\"></span>\n            </label>\n          </span>      \n          <!-- <span  class=\"col-2 row\">\n            <div class=\"col-7\"  style=\"color: #FFF;\">\n              Confirmed PO\n            </div>\n            <label class=\"switch switch-label switch-outline-success-alt col-4\">\n              <input type=\"checkbox\" class=\"switch-input\" [checked]='true' (click)=\"activateModel($event,'CPurchase',4)\">\n              <span class=\"switch-slider\" data-checked=\"✓\" data-unchecked=\"✕\"></span>\n            </label>\n          </span>  -->\n        </div>\n      </form>\n        <div class=\"card\">\n          <div class=\"card-body table-responsive-sm\">\n            <table datatable [dtTrigger]=\"dtTrigger\" [dtOptions]=\"dtOptions\" class=\"table table-responsive-sm table-striped table-hover table-outline mb-0\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th>ModelName</th>\n                  <th>Processor</th>\n                  <th>{{currentmonth }}</th>\n                  <th>{{ nextmonth }}</th>\n                  <th>{{ postnextmonth }}</th>\n                  <th>Total</th>\n                  <th class=\"text-center\" >Detail</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of items let i = index\">\n                  <td>{{ item.model_name}}</td>\n                  <td>{{ item.proc_name}}</td>\n                  <td>{{ item.filtermonth1}}</td>\n                  <td>{{ item.filtermonth2}}</td>\n                  <td>{{ item.filtermonth3}}</td>\n                  <td>{{ item.filtertotal}}</td>\n                  <td class=\"text-center\">\n                    <button type=\"submit\" class=\"btn btn-square btn-sm btn-secondary\" (click)=\"CheckCODetails(item.model_name, item.proc_name)\">\n                      <i class=\"fa fa-dot-circle-o\"></i> Order Detail\n                    </button> \n                    <button type=\"submit\" class=\"btn btn-square btn-sm btn-secondary\" (click)=\"CheckCPODetails(item.model_name, item.proc_name)\">\n                      <i class=\"fa fa-dot-circle-o\"></i> PO Detail\n                    </button>  \n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div><!--/.col-->\n    </div><!--/.row-->\n    <!--/.col--><div bsModal #CPODetails=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 1100px;\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\"> {{currentcpomodel}} ({{ currentcpoproc }}) - PO Detail</h4>\n          <button type=\"button\" class=\"close\" (click)=\"CPODetails.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body row\">           \n              <table datatable [dtTrigger]=\"dtTrigger1\" [dtOptions]=\"dtOptions\" class=\"table table-responsive-sm table-hover table-striped table-outline mb-0\">\n                <thead class=\"thead-light\">\n                  <tr>\n                    <th class=\"text-center\">###</th>\n                    <th class=\"text-center\" style=\"width: 10%;\">UK PO</th>\n                    <th class=\"text-center\" style=\"width: 10%;\">UAE PO</th>\n                    <th>Qty</th>\n                    <th>Price</th>\n                    <th style=\"width: 20%;\">Comment</th>\n                    <th >Supplier</th>\n                    <th>Created By</th>\n                    <th>ETA</th>\n                    <th>PED</th>\n                    <th>Created Date</th>\n                  </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let poorder of poorders; let i = index\"  class=\"color_{{poorder.cpo_status}}\">\n                      <td class=\"text-center\">\n                        <span style=\"display: none;\">{{ poorder.id }}</span>\n                        <button type=\"submit\" class=\"btn btn-square btn-sm btn-secondary\" (click)=\"CheckCOPLDetails(poorder.id, poorder.po_num)\">\n                          <i class=\"fa fa-dot-circle-o\"></i> Details\n                        </button>  \n                      </td>\n                      <td class=\"text-center\">{{ poorder.po_num}}</td>\n                      <td class=\"text-center\">{{ poorder.uk_po_num}}</td>\n                      <td>{{ poorder.cpo_qty}}</td>\n                      <td>${{ poorder.cpo_price}}</td>\n                      <td>{{ poorder.comment}}</td>\n                      <td>{{ poorder.s_name}}</td>\n                      <td>{{ poorder.user_name}}</td>\n                      <td>{{poorder.cpo_eta | date:'MMM d, y'}}</td>\n                      <td>{{poorder.cpo_ped | date:'MMM d, y'}}</td>\n                      <td>{{poorder.created_at | date:'MMM d, y'}}</td>                      \n                    </tr>\n                  </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"CPODetails.hide()\">Close</button> \n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <div bsModal #CODetails=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 1025px;\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\"> {{ currentcomodel }} ({{ currentcoproc }}) - Order Detail</h4>\n          <button type=\"button\" class=\"close\" (click)=\"CODetails.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body row\">           \n              <table datatable [dtTrigger]=\"dtTrigger2\" [dtOptions]=\"dtOptions\" class=\"table table-responsive-sm table-striped table-hover table-outline mb-0\">\n                <thead class=\"thead-light\">\n                  <tr>\n                    <th class=\"text-center\">###</th>\n                    <th>OrderNo</th>\n                    <th>Qty</th>\n                    <th>Customer Name</th>\n                    <th>Type</th>\n                    <th>EDD</th>\n                    <th>Comment</th>\n                    <th>Created By</th>\n                    <th>Created Date</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let order of orders; let i = index\" class=\"color_{{order.co_status}}\">\n                    <td class=\"text-center\">\n                      <button type=\"submit\" class=\"btn btn-square btn-sm btn-secondary\" (click)=\"CheckDetails(order.id, order.o_num)\">\n                        <i class=\"fa fa-dot-circle-o\"></i> Details\n                      </button>  \n                    </td>\n                    <td>{{ order.o_num}}</td>\n                    <td>{{ order.co_qty}}</td>\n                    <td>{{ order.c_name}}</td>                    \n                    <td *ngIf=\"order.o_type === 0\">No Assigned</td>\n                    <td *ngIf=\"order.o_type === 1\">Reman</td>\n                    <td *ngIf=\"order.o_type === 2\">Refurb</td>\n                    <td *ngIf=\"order.o_type === 3\">Silver</td>\n                    <td *ngIf=\"order.o_type === 4\">Filter Stock</td>\n                    <td>{{order.co_edd | date:'MMM d, y'}}</td>\n                    <td>{{ order.comment}}</td>\n                    <td>{{ order.username}}</td>\n                    <td>{{order.created_at | date:'MMM d, y'}}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"CODetails.hide()\">Close</button> \n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <div bsModal #COLDetails=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 1048px;\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">{{ selectedconum }} Detail</h4>\n          <button type=\"button\" class=\"close\" (click)=\"COLDetails.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body row\">           \n              <table class=\"table table-responsive-sm table-hover table-striped table-outline mb-0\">\n                <thead class=\"thead-light\">\n                  <tr>\n                    <th class=\"text-center\">Order Number</th>\n                    <th>Qty</th>\n                    <th>Comment</th>\n                    <th>Type</th>\n                    <th>EDD</th>\n                    <th>Updated By</th>\n                    <th>Updated Date</th>\n                    <th style=\"background:#0000ff36;\">Action</th>\n                  </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let coldetail of coldetails; let i = index\">\n                      <td>\n                        {{ coldetail.o_num}}\n                      </td>\n                      <td>{{ coldetail.col_qty}}</td>\n                      <td>{{ coldetail.col_comment}}</td>                \n                      <td *ngIf=\"coldetail.o_type === 0\">No Assigned</td>\n                      <td *ngIf=\"coldetail.o_type === 1\">Reman</td>\n                      <td *ngIf=\"coldetail.o_type === 2\">Refurb</td>\n                      <td *ngIf=\"coldetail.o_type === 3\">Silver</td>\n                      <td *ngIf=\"coldetail.o_type === 4\">Filter Stock</td>\n                      <td>{{coldetail.co_edd | date:'MMM d, y'}}</td>\n                      <td>{{ coldetail.col_flag}}</td>\n                      <td>{{ coldetail.col_username}}</td>\n                      <td style=\"background:#0000ff36;\">{{coldetail.col_created_at | date:'MMM d, y'}}</td>                      \n                    </tr>\n                  </tbody>\n              </table> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"COLDetails.hide()\">Close</button> \n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <div bsModal #CPOLDetails=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 1148px;\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">{{ selectedponum }} Detail</h4>\n          <button type=\"button\" class=\"close\" (click)=\"CPOLDetails.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body row\">           \n              <table class=\"table table-responsive-sm table-hover table-striped table-outline mb-0\">\n                <thead class=\"thead-light\">\n                  <tr>\n                    <th class=\"text-center\">UAE PO</th>\n                    <th class=\"text-center\">UK PO</th>\n                    <th>Qty</th>\n                    <th>Price</th>\n                    <th>ReceiveDate</th>\n                    <th>ETA</th>\n                    <th>Payement Date</th>\n                    <th>Comment</th>\n                    <th>Updated By</th>\n                    <th>Updated Date</th>\n                    <th style=\"background:#0000ff36;\">Action</th>\n                  </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let cplorderdetail of cplorderdetails; let i = index\">\n                      <td>{{ cplorderdetail.po_num}}</td>\n                      <td>{{ cplorderdetail.uk_po_num}}</td>\n                      <td>{{ cplorderdetail.cpol_qty}}</td>\n                      <td>${{ cplorderdetail.cpol_price}}</td>\n                      <td>{{cplorderdetail.receive_date | date:'MMM d, y'}}</td> \n                      <td>{{cplorderdetail.cpo_eta | date:'MMM d, y'}}</td> \n                      <td>{{cplorderdetail.cpo_ped | date:'MMM d, y'}}</td> \n                      <td>{{ cplorderdetail.cpol_comment}}</td>\n                      <td>{{ cplorderdetail.cpol_username}}</td>\n                      <td>{{cplorderdetail.cpol_created_at | date:'MMM d, y'}}</td>    \n                      <td style=\"background:#0000ff36;\">{{ cplorderdetail.cpol_flag}}</td>                  \n                    </tr>\n                  </tbody>\n              </table> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"CPOLDetails.hide()\">Close</button> \n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  ");

/***/ }),

/***/ "./src/app/views/commit-shortfall/commit-shortfall-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/commit-shortfall/commit-shortfall-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: CommitShortfallRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitShortfallRoutingModule", function() { return CommitShortfallRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _commit_shortfall_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commit-shortfall.component */ "./src/app/views/commit-shortfall/commit-shortfall.component.ts");




var routes = [
    {
        path: '',
        component: _commit_shortfall_component__WEBPACK_IMPORTED_MODULE_3__["CommitShortfallComponent"],
        data: {
            title: 'Commit ShortFall'
        }
    }
];
var CommitShortfallRoutingModule = /** @class */ (function () {
    function CommitShortfallRoutingModule() {
    }
    CommitShortfallRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CommitShortfallRoutingModule);
    return CommitShortfallRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/commit-shortfall/commit-shortfall.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/commit-shortfall/commit-shortfall.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".color_4 {\r\n    background: #98989861!important;\r\n}\r\n.color_3 {\r\n    background: #98989861!important;\r\n}\r\n.color_5 {\r\n    background: #f86c6b!important\r\n}\r\nbutton {\r\n    background-color: #08ab9e;\r\n    color: #fff;\r\n}\r\n.close {\r\n    background: transparent!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29tbWl0LXNob3J0ZmFsbC9jb21taXQtc2hvcnRmYWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLCtCQUErQjtBQUNuQztBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvY29tbWl0LXNob3J0ZmFsbC9jb21taXQtc2hvcnRmYWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3JfNCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTg5ODk4NjEhaW1wb3J0YW50O1xyXG59XHJcbi5jb2xvcl8zIHtcclxuICAgIGJhY2tncm91bmQ6ICM5ODk4OTg2MSFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbG9yXzUge1xyXG4gICAgYmFja2dyb3VuZDogI2Y4NmM2YiFpbXBvcnRhbnRcclxufVxyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4YWI5ZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5jbG9zZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/commit-shortfall/commit-shortfall.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/commit-shortfall/commit-shortfall.component.ts ***!
  \**********************************************************************/
/*! exports provided: CommitShortfallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitShortfallComponent", function() { return CommitShortfallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _services_requirement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/requirement.service */ "./src/app/_services/requirement.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");







var CommitShortfallComponent = /** @class */ (function () {
    function CommitShortfallComponent(requirementservice, alertify) {
        this.requirementservice = requirementservice;
        this.alertify = alertify;
        this.currentmonth = {};
        this.nextmonth = {};
        this.postnextmonth = {};
        this.mymodel = {};
        this.type1 = {};
        this.type2 = {};
        this.currentcomodel = {};
        this.currentcpomodel = {};
        this.currentcoproc = {};
        this.currentcpoproc = {};
        this.selectedconum = {};
        this.selectedponum = {};
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 25,
            retrieve: true,
            order: [[0, 'desc']],
            destroy: true
        };
        this.isDtInitialized = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.dtTrigger1 = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.dtTrigger2 = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    CommitShortfallComponent.prototype.ngOnInit = function () {
        var date = new Date(); // 2009-11-10
        var date1 = new Date(date.getFullYear(), date.getMonth() + 2, 0);
        var date2 = new Date(date.getFullYear(), date.getMonth() + 3, 0);
        this.currentmonth = date.toLocaleString('en-GB', { month: 'long' });
        this.nextmonth = date1.toLocaleString('en-GB', { month: 'long' });
        this.postnextmonth = date2.toLocaleString('en-GB', { month: 'long' });
        this.mymodel.inorder = 0;
        this.mymodel.inpo = 0;
        this.loadOrders();
    };
    CommitShortfallComponent.prototype.loadOrders = function () {
        var _this = this;
        return this.requirementservice.getCommitShortFalldetails(0, 0).subscribe(function (items) {
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
    CommitShortfallComponent.prototype.activateModel = function (event, flag) {
        var _this = this;
        this.mymodel.status = 0;
        if (event.target.checked) {
            this.mymodel.status = 1;
        }
        if (flag === 'InOrder') {
            this.mymodel.inorder = this.mymodel.status;
        }
        else if (flag === 'InPurchase') {
            this.mymodel.inpo = this.mymodel.status;
        }
        this.type1 = this.mymodel.inorder;
        this.type2 = this.mymodel.inpo;
        return this.requirementservice.getCommitShortFalldetails(this.type1, this.type2)
            .subscribe(function (items) {
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
    CommitShortfallComponent.prototype.CheckCPODetails = function (modelname, proc_name) {
        var _this = this;
        this.currentcpomodel = modelname;
        this.currentcpoproc = proc_name;
        return this.requirementservice.getCommitPurchaseOrders().subscribe(function (poorders) {
            _this.poorders = poorders.filter(function (proj) { return (proj.model_name === modelname) && (proj.proc_name === proc_name); });
            if (_this.isDtInitialized) {
                _this.dtElement.dtInstance.then(function (dtInstance) {
                    dtInstance.destroy();
                    _this.dtTrigger1.next();
                });
            }
            else {
                _this.isDtInitialized = true;
                _this.dtTrigger1.next();
            }
            _this.CPODetails.show();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CommitShortfallComponent.prototype.CheckCOPLDetails = function (id, co_num) {
        var _this = this;
        this.selectedponum = co_num;
        return this.requirementservice.getCPODetails(id).subscribe(function (cplorderdetails) {
            _this.cplorderdetails = cplorderdetails;
            _this.CPOLDetails.show();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CommitShortfallComponent.prototype.CheckCODetails = function (modelname, proc_name) {
        var _this = this;
        this.currentcomodel = modelname;
        this.currentcoproc = proc_name;
        return this.requirementservice.getCommitOrders().subscribe(function (orders) {
            _this.orders = orders.filter(function (proj) { return (proj.modelName === modelname) && (proj.processor === proc_name); });
            if (_this.isDtInitialized) {
                _this.dtElement.dtInstance.then(function (dtInstance) {
                    dtInstance.destroy();
                    _this.dtTrigger2.next();
                });
            }
            else {
                _this.isDtInitialized = true;
                _this.dtTrigger2.next();
            }
            _this.CODetails.show();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CommitShortfallComponent.prototype.CheckDetails = function (id, co_num) {
        var _this = this;
        this.selectedconum = co_num;
        return this.requirementservice.getCODetails(id).subscribe(function (coldetails) {
            _this.coldetails = coldetails;
            _this.COLDetails.show();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CommitShortfallComponent.ctorParameters = function () { return [
        { type: _services_requirement_service__WEBPACK_IMPORTED_MODULE_3__["RequirementService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"])
    ], CommitShortfallComponent.prototype, "dtElement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('CPODetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalDirective"])
    ], CommitShortfallComponent.prototype, "CPODetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('CODetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalDirective"])
    ], CommitShortfallComponent.prototype, "CODetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('COLDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalDirective"])
    ], CommitShortfallComponent.prototype, "COLDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('CPOLDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalDirective"])
    ], CommitShortfallComponent.prototype, "CPOLDetails", void 0);
    CommitShortfallComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-commit-shortfall',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./commit-shortfall.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/commit-shortfall/commit-shortfall.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./commit-shortfall.component.css */ "./src/app/views/commit-shortfall/commit-shortfall.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_requirement_service__WEBPACK_IMPORTED_MODULE_3__["RequirementService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]])
    ], CommitShortfallComponent);
    return CommitShortfallComponent;
}());



/***/ }),

/***/ "./src/app/views/commit-shortfall/commit-shortfall.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/commit-shortfall/commit-shortfall.module.ts ***!
  \*******************************************************************/
/*! exports provided: CommitShortfallModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitShortfallModule", function() { return CommitShortfallModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _commit_shortfall_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commit-shortfall-routing.module */ "./src/app/views/commit-shortfall/commit-shortfall-routing.module.ts");
/* harmony import */ var _commit_shortfall_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commit-shortfall.component */ "./src/app/views/commit-shortfall/commit-shortfall.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var CommitShortfallModule = /** @class */ (function () {
    function CommitShortfallModule() {
    }
    CommitShortfallModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_commit_shortfall_component__WEBPACK_IMPORTED_MODULE_4__["CommitShortfallComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _commit_shortfall_routing_module__WEBPACK_IMPORTED_MODULE_3__["CommitShortfallRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"]
            ]
        })
    ], CommitShortfallModule);
    return CommitShortfallModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-commit-shortfall-commit-shortfall-module.js.map