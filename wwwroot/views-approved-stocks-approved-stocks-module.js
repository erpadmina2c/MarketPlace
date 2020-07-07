(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-approved-stocks-approved-stocks-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/approved-stocks/approved-stocks.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/approved-stocks/approved-stocks.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <!--/.card-->\n  <div class=\"row\" *ngIf=\"roleid !== 5\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <br>\n          <table datatable [dtTrigger]=\"dtTrigger\" [dtOptions]=\"dtOptions\" class=\"table table-striped\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th>Deal ID</th>\n                <th>PO</th>\n                <th>Detail</th>\n                <th>Specification</th>\n                <th>Stock Qty</th>\n                <th>Stock Status</th>\n                <th>Price</th>\n                <th *ngIf=\"roleid === 1  || roleid===2\">Supplier</th>\n                <th>Type</th>\n                <th>Comment</th>\n                <th>Modify Date</th>\n                <th *ngIf=\"roleid === 4 || roleid === 2 || roleid === 6 || roleid === 7 || roleid === 8\">Action</th>\n              </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let offer of offers; let i = index\">\n                  <td>\n                    <div>{{ offer.deal_id}}</div>\n                    <div class=\"small text-muted\"><span>Ref</span> | {{ offer.requestID}} </div>\n                  </td>\n                  <td>{{ offer.ponum}}</td>\n                  <td>\n                    <div *ngIf=\"offer.makeName\" class=\"small text-muted\"><strong>Make: </strong>{{ offer.makeName}}</div>\n                    <div *ngIf=\"offer.modelName\" class=\"small text-muted\"><strong>Model: </strong>{{ offer.modelName}}</div>\n                    <div *ngIf=\"offer.processor\" class=\"small text-muted\"><strong>Processor: </strong>{{ offer.processor}}</div>\n                  </td>\n                  <td>\n                    <div *ngIf=\"offer.ramname\" class=\"small text-muted\"><strong>HDD: </strong>{{ offer.ramname}}</div>\n                    <div *ngIf=\"offer.hddname\" class=\"small text-muted\"><strong>RAM: </strong>{{ offer.hddname}}</div>\n                    <div *ngIf=\"offer.adapter === 1\" class=\"small text-muted\"><strong>Adapter: </strong>Yes</div>\n                    <div *ngIf=\"offer.adapter === 2\" class=\"small text-muted\"><strong>Adapter: </strong>No</div>\n                  </td>\n                  <td>\n                    <div *ngIf=\"offer.appby\" class=\"small text-muted\"><strong>Approved Qty: </strong>{{ offer.qty}}</div>\n                    <div *ngIf=\"offer.rejby\" class=\"small text-muted\"><strong>Rejected  Qty: </strong>{{ offer.qty}}</div>\n                    <div *ngIf=\"offer.purchaseby\" class=\"small text-muted\"><strong>Purchased  Qty: </strong>{{ offer.purchaseqty}}</div>\n                    <div *ngIf=\"offer.receiveby\" class=\"small text-muted\"><strong>Received  Qty: </strong>{{ offer.receiveqty}}</div>\n                    <div *ngIf=\"offer.dispatchby\" class=\"small text-muted\"><strong>Dispatched  Qty: </strong>{{ offer.dispatchqty}}</div>\n                  </td> \n                  <td>\n                    <div>\n                        <div  class=\"small text-muted\" style=\"color: green!important;\">\n                          <strong>Created by:</strong>\n                          <span style=\"color:#222;font-style:italic;font-weight:bold;\"> {{offer.username}}</span>\n                        </div>                        \n                    </div>\n                    <div *ngIf=\"offer.appby\">\n                        <div  class=\"small text-muted\" style=\"color: green!important;\">\n                          <strong>Approved by:</strong>\n                          <span style=\"color:#222;font-style:italic;font-weight:bold;\"> {{offer.appby}}</span>\n                        </div>                        \n                    </div>\n                    <div *ngIf=\"offer.rejby\">\n                        <div  class=\"small text-muted\" style=\"color: red!important;\">\n                          <strong>Rejected by:</strong>\n                          <span style=\"color:#222;font-style:italic;font-weight:bold;\"> {{offer.rejby}}</span>\n                        </div>\n                    </div>\n                    <div *ngIf=\"offer.purchaseby\">\n                        <div  class=\"small text-muted\" style=\"color: green!important;\">\n                          <strong>Purchased by:</strong>\n                          <span style=\"color:#222;font-style:italic;font-weight:bold;\"> {{offer.purchaseby}}</span>\n                        </div>\n                    </div>\n                    <div *ngIf=\"offer.poby\">\n                        <div  class=\"small text-muted\" style=\"color: green!important;\">\n                          <strong>PO updated by:</strong>\n                          <span style=\"color:#222;font-style:italic;font-weight:bold;\"> {{offer.poby}}</span>\n                        </div>\n                    </div>\n                    <div *ngIf=\"offer.receiveby\">\n                        <div  class=\"small text-muted\" style=\"color: green!important;\">\n                          <strong>Received by:</strong>\n                          <span style=\"color:#222;font-style:italic;font-weight:bold;\"> {{offer.receiveby}}</span>\n                        </div>\n                    </div>\n                    <div *ngIf=\"offer.dispatchby\">\n                        <div  class=\"small text-muted\" style=\"color: green!important;\">\n                          <strong>Dispatched by:</strong>\n                          <span style=\"color:#222;font-style:italic;font-weight:bold;\"> {{offer.dispatchby}}</span>\n                        </div>\n                    </div>\n                   </td>\n                  <td>${{ offer.price }}</td>\n                  <td *ngIf=\"roleid === 1  || roleid===2\">\n                    <div *ngIf=\"offer.c_type === 1\">{{ offer.c_name }}</div>\n                  </td>\n                  <td>{{ offer.projectName }}</td>\n                  <td>{{ offer.reason }}</td>\n                  <td> {{offer.createdDate | date:'MMM d, y'}} </td>\n                  <td *ngIf=\"roleid === 4 || roleid === 2 || roleid === 6 || roleid === 7 || roleid === 8\" id=\"Dealsoffer_{{offer.id}}\"> \n                    <!-- <button *ngIf=\"offer.username=== this.LoginUser\" (click)=\"CloseDeals(offer.id,3,1,'Closed')\" class=\"btn btn-sm btn-danger\"  id=\"Closed_{{offer.id}}\" type=\"button\">\n                      <i class=\"fa fa-check-circle-o fa-lg\"></i> Close\n                    </button> -->\n                    <button *ngIf=\"offer.username=== this.LoginUser && offer.qty !== offer.purchaseqty && offer.appby\" (click)=\"OpenUpdateDeals(offer.deal_id,offer.id,5,0,offer.qty)\" class=\"btn btn-sm btn-success\" id=\"Purchased_{{offer.id}}\" type=\"button\">\n                      <i class=\"fa fa-check-circle-o fa-lg\"></i> Purchase\n                    </button>\n                    <button *ngIf=\"roleid=== 7 && offer.purchaseqty !== offer.receiveqty\" (click)=\"OpenUpdateDeals(offer.deal_id,offer.id,8,0,offer.purchaseqty-offer.receiveqty)\" class=\"btn btn-sm btn-info\" id=\"Received_{{offer.id}}\" type=\"button\">\n                      <i class=\"fa fa-check-circle-o fa-lg\"></i> Receive\n                    </button>\n                    <button *ngIf=\"roleid=== 8 && !offer.dispatchby\" (click)=\"CloseDeals(offer.id,9,0,'Dispatched')\" class=\"btn btn-sm btn-info\" id=\"Dispatched_{{offer.id}}\" type=\"button\">\n                      <i class=\"fa fa-check-circle-o fa-lg\"></i> Dispatch\n                    </button>\n                    <button *ngIf=\"roleid === 6 && !offer.ponum\" (click)=\"OpenPO(offer.id,offer.deal_id)\" class=\"btn btn-sm btn-info\" id=\"Pbutton_{{offer.id}}\" type=\"button\">\n                      <i class=\"fa fa-check-circle-o fa-lg\"></i> Update PO\n                    </button>\n                    <!-- <button class=\"btn btn-sm btn-danger\"  type=\"reset\">\n                      <i class=\"fa fa-close fa-lg\"></i> Re-Open\n                    </button> -->\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div *ngIf=\"roleid === 5\">\n    <div class=\"app flex-row align-items-center\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-6\">\n            <div class=\"clearfix\">\n              <h1 class=\"float-left display-3 mr-4\">404</h1>\n              <h4 class=\"pt-3\">Oops! You're lost.</h4>\n              <p class=\"text-muted\">The page you are looking for was not found.</p>\n            </div>\n            <div class=\"input-prepend input-group\">\n              <div class=\"input-group-prepend\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>  \n  </div>\n  <div bsModal #UpdateDealModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\">\n    <form  #shareForm=\"ngForm\"  (ngSubmit)=\"UpdateDealPost()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Update</h4>\n          <button type=\"button\" class=\"close\" (click)=\"UpdateDealModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">    \n          <div class=\"card\">\n              <div class=\"card-body\">\n                <div class=\"form-group\">\n                  <div class=\"input-group row\">\n                    <label style=\"padding: 8px\" class=\"col-md-4\">Deal ID</label>                    \n                    <input type=\"hidden\" id=\"Id\" name=\"Id\"  [(ngModel)]=\"udmodel.Id\"  class=\"form-control\" disabled>\n                    <input type=\"hidden\" id=\"Status\" name=\"Status\"  [(ngModel)]=\"udmodel.Status\"  class=\"form-control\" disabled>\n                    <input type=\"hidden\" id=\"cQty\" name=\"cQty\"  [(ngModel)]=\"udmodel.cQty\"  class=\"form-control\" disabled>\n                    <input type=\"text\" id=\"ReqNo1\" name=\"ReqNo1\"  [(ngModel)]=\"udmodel.ReqNo1\"  class=\"form-control\" disabled>\n                  </div>\n                </div>                 \n                  <div class=\"form-group\">\n                    <div class=\"input-group row\">                    \n                      <label style=\"padding: 7px\"  class=\"col-md-4\">Qty</label>\n                      <input type=\"number\" id=\"Qty\" name=\"Qty\" [(ngModel)]=\"udmodel.Qty\"  class=\"form-control\" placeholder=\"Qty\">\n                    </div>\n                  </div> \n              </div>\n            </div>      \n        </div>\n        <div class=\"modal-footer\">\n          <!-- <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"shareModal.hide()\">Close</button>         -->\n          <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"UDButton\">Update</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <div bsModal #poModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\">\n    <form  #shareForm=\"ngForm\"  (ngSubmit)=\"UpdatePOPost()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Update PO</h4>\n          <button type=\"button\" class=\"close\" (click)=\"poModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">    \n          <div class=\"card\">\n              <div class=\"card-body\">\n                <div class=\"form-group\">\n                  <div class=\"input-group row\">\n                    <label style=\"padding: 8px\" class=\"col-md-4\">Deal ID</label>                    \n                    <input type=\"hidden\" id=\"id\" name=\"id\"  [(ngModel)]=\"pmodel.id\"  class=\"form-control\" disabled>\n                    <input type=\"text\" id=\"ReqNo1\" name=\"ReqNo1\"  [(ngModel)]=\"pmodel.ReqNo1\"  class=\"form-control\" disabled>\n                  </div>\n                </div>                 \n                  <div class=\"form-group\">\n                    <div class=\"input-group row\">                    \n                      <label style=\"padding: 7px\"  class=\"col-md-4\">PO Number</label>\n                      <input type=\"text\" id=\"p_num\" name=\"p_num\" [(ngModel)]=\"pmodel.p_num\"  class=\"form-control\" placeholder=\"PO Number\">\n                    </div>\n                  </div> \n              </div>\n            </div>      \n        </div>\n        <div class=\"modal-footer\">\n          <!-- <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"shareModal.hide()\">Close</button>         -->\n          <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"POButton\">Update</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->");

/***/ }),

/***/ "./src/app/views/approved-stocks/approved-stocks-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/approved-stocks/approved-stocks-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ApprovedStocksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovedStocksRoutingModule", function() { return ApprovedStocksRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _approved_stocks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./approved-stocks.component */ "./src/app/views/approved-stocks/approved-stocks.component.ts");




var routes = [
    {
        path: '',
        component: _approved_stocks_component__WEBPACK_IMPORTED_MODULE_3__["ApprovedStocksComponent"],
        data: {
            title: 'approvedstock'
        }
    }
];
var ApprovedStocksRoutingModule = /** @class */ (function () {
    function ApprovedStocksRoutingModule() {
    }
    ApprovedStocksRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ApprovedStocksRoutingModule);
    return ApprovedStocksRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/approved-stocks/approved-stocks.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/approved-stocks/approved-stocks.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FwcHJvdmVkLXN0b2Nrcy9hcHByb3ZlZC1zdG9ja3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/approved-stocks/approved-stocks.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/approved-stocks/approved-stocks.component.ts ***!
  \********************************************************************/
/*! exports provided: ApprovedStocksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovedStocksComponent", function() { return ApprovedStocksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_requirement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/requirement.service */ "./src/app/_services/requirement.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");







var ApprovedStocksComponent = /** @class */ (function () {
    function ApprovedStocksComponent(alertify, requirementservice) {
        this.alertify = alertify;
        this.requirementservice = requirementservice;
        this.model = {};
        this.pmodel = {};
        this.udmodel = {};
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 25,
            retrieve: true,
            order: [[0, 'desc']]
        };
        this.isDtInitialized = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.roleid = Number(localStorage.getItem('RoleID'));
        this.LoginUser = localStorage.getItem('LoginUser');
    }
    ApprovedStocksComponent.prototype.ngOnInit = function () {
        this.loadDeals();
    };
    ApprovedStocksComponent.prototype.loadDeals = function () {
        var _this = this;
        return this.requirementservice.getOffers().subscribe(function (offers) {
            if (_this.roleid === 4) {
                _this.offers = offers.filter(function (proj) { return (proj.status !== 0 && proj.qty !== proj.dispatchqty
                    && proj.empId === Number(localStorage.getItem('UserId'))); });
            }
            else if (_this.roleid === 7) {
                _this.offers = offers.filter(function (proj) { return (proj.status !== 0 && proj.purchaseqty !== proj.receiveqty
                    && proj.purchaseby !== null); });
            }
            else if (_this.roleid === 8) {
                _this.offers = offers.filter(function (proj) { return (proj.status !== 0 && proj.receiveqty !== proj.dispatchqty
                    && proj.receiveby !== null); });
            }
            else {
                _this.offers = offers.filter(function (proj) { return (proj.status !== 0 && proj.qty !== proj.dispatchqty); });
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
    ApprovedStocksComponent.prototype.OpenUpdateDeals = function (ReqNo1, Id, Status, flag, cQty) {
        this.udmodel.Id = Id;
        this.udmodel.ReqNo1 = ReqNo1;
        this.udmodel.Status = Status;
        this.udmodel.flag = flag;
        this.udmodel.cQty = cQty;
        this.UpdateDealModal.show();
    };
    ApprovedStocksComponent.prototype.UpdateDealPost = function () {
        var _this = this;
        if (!this.udmodel.Qty) {
            this.alertify.error('Enter Qty');
            return;
        }
        if (this.udmodel.Qty > this.udmodel.cQty) {
            this.alertify.error('Invalid Qty');
            return;
        }
        console.log(this.udmodel);
        this.model = { Id: this.udmodel.Id, Status: this.udmodel.Status, Qty: this.udmodel.Qty, Flag: this.udmodel.flag,
            EmpId: Number(localStorage.getItem('UserId')) };
        console.log(this.model);
        document.getElementById('UDButton').innerHTML = '<i class="fa fa-circle-o-notch mt-1 fa-lg fa-spin"></i> Sending...';
        document.getElementById('UDButton').disabled = true;
        this.requirementservice.CloseDeals(this.model).subscribe(function () {
            _this.loadDeals();
            document.getElementById('UDButton').innerHTML = 'Submit';
            document.getElementById('UDButton').disabled = false;
            _this.alertify.success('Deal UpdateD');
            _this.UpdateDealModal.hide();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ApprovedStocksComponent.prototype.CloseDeals = function (Id, Status, flag, buttonid) {
        var _this = this;
        this.model = { Id: Id, Status: Status, Flag: flag, EmpId: Number(localStorage.getItem('UserId')) };
        document.getElementById(buttonid + '_' + Id).innerHTML = '<i class="fa fa-circle-o-notch mt-1 fa-lg fa-spin"></i> Processing...';
        document.getElementById(buttonid + '_' + Id).disabled = true;
        console.log(this.model);
        this.requirementservice.CloseDeals(this.model).subscribe(function () {
            _this.loadDeals();
            _this.alertify.success('Deal ' + buttonid);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ApprovedStocksComponent.prototype.OpenPO = function (id, req) {
        this.pmodel.id = id;
        this.pmodel.ReqNo1 = req;
        this.infoModal.show();
    };
    ApprovedStocksComponent.prototype.UpdatePOPost = function () {
        var _this = this;
        this.pmodel.po_by = Number(localStorage.getItem('UserId'));
        if (!this.pmodel.p_num) {
            this.alertify.error('Enter PO Number');
            return;
        }
        document.getElementById('POButton').innerHTML = '<i class="fa fa-circle-o-notch mt-1 fa-lg fa-spin"></i> Sending...';
        document.getElementById('POButton').disabled = true;
        this.requirementservice.UpdatePOPost(this.pmodel).subscribe(function () {
            document.getElementById('POButton').innerHTML = 'Submit';
            document.getElementById('POButton').disabled = false;
            _this.loadDeals();
            _this.infoModal.hide();
            _this.alertify.success('PO Number Updated Successfully');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ApprovedStocksComponent.ctorParameters = function () { return [
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
        { type: _services_requirement_service__WEBPACK_IMPORTED_MODULE_2__["RequirementService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"])
    ], ApprovedStocksComponent.prototype, "dtElement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('poModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], ApprovedStocksComponent.prototype, "infoModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('UpdateDealModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], ApprovedStocksComponent.prototype, "UpdateDealModal", void 0);
    ApprovedStocksComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-approved-stocks',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./approved-stocks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/approved-stocks/approved-stocks.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./approved-stocks.component.css */ "./src/app/views/approved-stocks/approved-stocks.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"], _services_requirement_service__WEBPACK_IMPORTED_MODULE_2__["RequirementService"]])
    ], ApprovedStocksComponent);
    return ApprovedStocksComponent;
}());



/***/ }),

/***/ "./src/app/views/approved-stocks/approved-stocks.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/approved-stocks/approved-stocks.module.ts ***!
  \*****************************************************************/
/*! exports provided: ApprovedStocksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovedStocksModule", function() { return ApprovedStocksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _approved_stocks_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./approved-stocks-routing.module */ "./src/app/views/approved-stocks/approved-stocks-routing.module.ts");
/* harmony import */ var _approved_stocks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./approved-stocks.component */ "./src/app/views/approved-stocks/approved-stocks.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");








var ApprovedStocksModule = /** @class */ (function () {
    function ApprovedStocksModule() {
    }
    ApprovedStocksModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_approved_stocks_component__WEBPACK_IMPORTED_MODULE_5__["ApprovedStocksComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _approved_stocks_routing_module__WEBPACK_IMPORTED_MODULE_4__["ApprovedStocksRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
                angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ]
        })
    ], ApprovedStocksModule);
    return ApprovedStocksModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-approved-stocks-approved-stocks-module.js.map