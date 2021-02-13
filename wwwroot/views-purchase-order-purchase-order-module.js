(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-purchase-order-purchase-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/purchase-order/purchase-order.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/purchase-order/purchase-order.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <div bsModal #infoModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 47%;\">\r\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"sendPurchaseOrderPost()\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Add Purchase Order</h4>\r\n          <button type=\"button\" class=\"close\" (click)=\"infoModal.hide()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">          \r\n        <div class=\"card\">\r\n            <div class=\"card-body row\">\r\n              <div class=\"col-md-6\">            \r\n                <div class=\"form-group row\">\r\n                  <div class=\"input-group\">                    \r\n                    <label class=\"col-md-4 col-form-label\">PO Number</label>\r\n                    <div class=\"col-md-8 col-form-label\">\r\n                      <input type=\"text\" id=\"po_num\" name=\"po_num\" [(ngModel)]=\"model.po_num\"  class=\"form-control\" placeholder=\"Purchase Order Number\"></div>\r\n                  </div>\r\n                </div>             \r\n                <div class=\"form-group row\">\r\n                  <div class=\"input-group\">\r\n                    <label class=\"col-md-4 col-form-label\">Make</label>\r\n                    <div class=\"col-md-8 col-form-label\">\r\n                      <ng-select2 [data]=\"makes\" [width]=\"200\"  name=\"make_id\"  [(ngModel)]=\"model.make_id\" (ngModelChange)=\"loadModels($event)\"></ng-select2>                                                                           \r\n                    </div>                  \r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <div class=\"input-group\">\r\n                    <label class=\"col-md-4 col-form-label\">Model</label>  \r\n                    <div class=\"col-md-8 col-form-label\"> \r\n                      <ng-select2 [data]=\"models\"  [width]=\"200\" name=\"model_id\"  [(ngModel)]=\"model.model_id\"></ng-select2> </div> \r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <div class=\"input-group\">\r\n                    <label class=\"col-md-4 col-form-label\">Processor</label>    \r\n                    <div class=\"col-md-8 col-form-label\">\r\n                      <ng-select2 [data]=\"processors\"  [width]=\"200\" name=\"proc_id\"  [(ngModel)]=\"model.proc_id\"></ng-select2>  </div> \r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <div class=\"input-group\">                    \r\n                    <label class=\"col-md-4 col-form-label\">Qty</label>\r\n                    <div class=\"col-md-8 col-form-label\">\r\n                      <input type=\"number\" id=\"po_qty\" name=\"po_qty\" [(ngModel)]=\"model.po_qty\"  class=\"form-control\" placeholder=\"Qty\"></div>\r\n                  </div>\r\n                </div>              \r\n                <div class=\"form-group row\">\r\n                  <div class=\"input-group\">                    \r\n                    <label class=\"col-md-4 col-form-label\">Price</label>\r\n                    <div class=\"col-md-8 col-form-label\">\r\n                      <input type=\"number\" id=\"po_price\" name=\"po_price\" [(ngModel)]=\"model.po_price\"  class=\"form-control\" placeholder=\"Price\"></div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\">Supplier</label>\r\n                  <div class=\"col-md-8 col-form-label\">                    \r\n                    <input type=\"text\" id=\"s_name\" name=\"s_name\" [(ngModel)]=\"model.s_name\"  class=\"form-control\" placeholder=\"Supplier Name\">\r\n                  </div>\r\n                </div> \r\n              </div>            \r\n              <div class=\"col-md-6\">    \r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\">RAM</label> \r\n                  <div class=\"col-md-8 col-form-label\">   \r\n                    <ng-select2 [data]=\"rams\"  [width]=\"200\" name=\"ram_id\"  [(ngModel)]=\"model.ram_id\"></ng-select2>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\">HDD</label> \r\n                  <div class=\"col-md-8 col-form-label\">   \r\n                    <ng-select2 [data]=\"hdds\"  [width]=\"200\" name=\"hdd_id\"  [(ngModel)]=\"model.hdd_id\"></ng-select2>\r\n                  </div>\r\n                </div> \r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\">Type</label> \r\n                  <div class=\"col-md-8 col-form-label\">   \r\n                    <select width=\"200\" name=\"po_type\"  [(ngModel)]=\"model.po_type\" style=\"width:200px;height: 32px;\">\r\n                      <option value=\"1\">Reman</option>\r\n                      <option value=\"2\">Refurb</option>\r\n                      <option value=\"3\">Silver</option>\r\n                      <option value=\"4\">Filter Stock</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\">Generation</label> \r\n                  <div class=\"col-md-8 col-form-label\">   \r\n                    <ng-select2 [data]=\"generations\"  [width]=\"200\" name=\"gen_id\"  [(ngModel)]=\"model.gen_id\"></ng-select2>\r\n                  </div>\r\n                </div>           \r\n                <div class=\"form-group row\">\r\n                  <div class=\"input-group\">                    \r\n                    <label class=\"col-md-4 col-form-label\">ETA</label>\r\n                    <div class=\"col-md-8 col-form-label\">\r\n                      <input class=\"form-control\" id=\"date-input\" type=\"date\" name=\"po_eta\" [(ngModel)]=\"model.po_eta\" placeholder=\"date\">\r\n                    </div>\r\n                  </div>\r\n                </div> \r\n                <!-- <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\">Location</label> \r\n                  <div class=\"col-md-8 col-form-label\">   \r\n                    <ng-select2 [data]=\"locations\"  [width]=\"200\" name=\"loc_id\"  [(ngModel)]=\"model.loc_id\"></ng-select2>\r\n                  </div>\r\n                </div> -->\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\" for=\"inline-radios\">Adapter</label>\r\n                  <div class=\"col-md-8 col-form-label\">\r\n                    <div class=\"form-check form-check-inline mr-1\" id=\"inline-radios\">\r\n                      <input class=\"form-check-input\" type=\"radio\" name=\"adp_id\" [(ngModel)]=\"model.adp_id\" id=\"inlineRadio1\" value=\"1\">\r\n                      <label class=\"form-check-label\" for=\"inlineRadio1\" style=\"width:100%;\">Yes</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline mr-1\">\r\n                      <input class=\"form-check-input\" type=\"radio\" name=\"adp_id\" [(ngModel)]=\"model.adp_id\" id=\"inlineRadio2\" value=\"2\">\r\n                      <label class=\"form-check-label\" for=\"inlineRadio2\" style=\"width:100%;\">No</label>\r\n                    </div>\r\n                  </div>\r\n                </div>               \r\n                <div class=\"form-group row\">\r\n                  <div class=\"input-group\">                    \r\n                    <label class=\"col-md-4 col-form-label\">Comment</label>\r\n                    <div class=\"col-md-8 col-form-label\">                \r\n                      <textarea class=\"form-control\" name=\"comment\" [(ngModel)]=\"model.comment\" id=\"Comment\" placeholder=\"Comment\" rows=\"3\"></textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>  \r\n              </div> \r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"infoModal.hide()\">Close</button>        \r\n          <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"postingrequest\">Submit</button>\r\n        </div>\r\n      </div><!-- /.modal-content -->\r\n    </form>\r\n    </div><!-- /.modal-dialog -->\r\n  </div><!-- /.modal -->\r\n  <div bsModal #EditPOModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 47%;\">\r\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"EditPurchaseOrderPost()\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Edit Purchase Order</h4>\r\n          <button type=\"button\" class=\"close\" (click)=\"EditPOModal.hide()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">          \r\n        <div class=\"card\">\r\n            <div class=\"card-body row\">\r\n              <div class=\"col-md-6\">            \r\n                <div class=\"form-group row\">\r\n                  <div class=\"input-group\">                    \r\n                    <label class=\"col-md-4 col-form-label\">PO Number</label>\r\n                    <div class=\"col-md-8 col-form-label\">\r\n                      <input type=\"text\" id=\"po_num\" name=\"po_num\" [(ngModel)]=\"mymodel.po_num\"  class=\"form-control\" placeholder=\"Purchase Order Number\"></div>\r\n                  </div>\r\n                </div>             \r\n                <div class=\"form-group row\">\r\n                  <div class=\"input-group\">\r\n                    <label class=\"col-md-4 col-form-label\">Make</label>\r\n                    <div class=\"col-md-8 col-form-label\">\r\n                      <ng-select2 [data]=\"makes\" [width]=\"200\"  name=\"make_id\"  [(ngModel)]=\"mymodel.make_id\" (ngModelChange)=\"loadModels($event)\"></ng-select2>                                                                           \r\n                    </div>                  \r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <div class=\"input-group\">\r\n                    <label class=\"col-md-4 col-form-label\">Model</label>  \r\n                    <div class=\"col-md-8 col-form-label\"> \r\n                      <ng-select2 [data]=\"models\"  [width]=\"200\" name=\"model_id\"  [(ngModel)]=\"mymodel.model_id\"></ng-select2> </div> \r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <div class=\"input-group\">\r\n                    <label class=\"col-md-4 col-form-label\">Processor</label>    \r\n                    <div class=\"col-md-8 col-form-label\">\r\n                      <ng-select2 [data]=\"processors\"  [width]=\"200\" name=\"proc_id\"  [(ngModel)]=\"mymodel.proc_id\"></ng-select2>  </div> \r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <div class=\"input-group\">                    \r\n                    <label class=\"col-md-4 col-form-label\">Qty</label>\r\n                    <div class=\"col-md-8 col-form-label\">\r\n                      <input type=\"number\" id=\"po_qty\" name=\"po_qty\" [(ngModel)]=\"mymodel.po_qty\"  class=\"form-control\" placeholder=\"Qty\"></div>\r\n                  </div>\r\n                </div>              \r\n                <div class=\"form-group row\">\r\n                  <div class=\"input-group\">                    \r\n                    <label class=\"col-md-4 col-form-label\">Price</label>\r\n                    <div class=\"col-md-8 col-form-label\">\r\n                      <input type=\"number\" id=\"po_price\" name=\"po_price\" [(ngModel)]=\"mymodel.po_price\"  class=\"form-control\" placeholder=\"Price\"></div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\">Supplier</label>\r\n                  <div class=\"col-md-8 col-form-label\">                    \r\n                    <input type=\"text\" id=\"s_name\" name=\"s_name\" [(ngModel)]=\"mymodel.s_name\"  class=\"form-control\" placeholder=\"Supplier Name\">\r\n                  </div>\r\n                </div> \r\n              </div>            \r\n              <div class=\"col-md-6\">    \r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\">RAM</label> \r\n                  <div class=\"col-md-8 col-form-label\">   \r\n                    <ng-select2 [data]=\"rams\"  [width]=\"200\" name=\"ram_id\"  [(ngModel)]=\"mymodel.ram_id\"></ng-select2>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\">HDD</label> \r\n                  <div class=\"col-md-8 col-form-label\">   \r\n                    <ng-select2 [data]=\"hdds\"  [width]=\"200\" name=\"hdd_id\"  [(ngModel)]=\"mymodel.hdd_id\"></ng-select2>\r\n                  </div>\r\n                </div> \r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\">Type</label> \r\n                  <div class=\"col-md-8 col-form-label\">   \r\n                    <select width=\"200\" name=\"po_type\"  [(ngModel)]=\"mymodel.po_type\" style=\"width:200px;height: 32px;\">\r\n                      <option value=\"1\">Reman</option>\r\n                      <option value=\"2\">Refurb</option>\r\n                      <option value=\"3\">Silver</option>\r\n                      <option value=\"4\">Filter Stock</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\">Generation</label> \r\n                  <div class=\"col-md-8 col-form-label\">   \r\n                    <ng-select2 [data]=\"generations\"  [width]=\"200\" name=\"gen_id\"  [(ngModel)]=\"mymodel.gen_id\"></ng-select2>\r\n                  </div>\r\n                </div>           \r\n                <div class=\"form-group row\">\r\n                  <div class=\"input-group\">                    \r\n                    <label class=\"col-md-4 col-form-label\">ETA</label>\r\n                    <div class=\"col-md-8 col-form-label\">\r\n                      <input class=\"form-control\" id=\"date-input\" type=\"date\" name=\"po_eta\" [(ngModel)]=\"mymodel.po_eta\" placeholder=\"date\">\r\n                    </div>\r\n                  </div>\r\n                </div> \r\n                <!-- <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\" for=\"inline-radios\">Adapter</label>\r\n                  <div class=\"col-md-8 col-form-label\">\r\n                    <div class=\"form-check form-check-inline mr-1\" id=\"inline-radios\">\r\n                      <input class=\"form-check-input\" type=\"radio\" name=\"adp_id\" [checked]=\"mymodel.adp_id == 1\" [(ngModel)]=\"mymodel.adp_id\" id=\"inlineRadio1\" value='1'>\r\n                      <label class=\"form-check-label\" for=\"inlineRadio1\" style=\"width:100%;\">Yes</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline mr-1\">\r\n                      <input class=\"form-check-input\" type=\"radio\" name=\"adp_id\" [checked]=\"mymodel.adp_id == 2\" [(ngModel)]=\"mymodel.adp_id\" id=\"inlineRadio2\" value='2'>\r\n                      <label class=\"form-check-label\" for=\"inlineRadio2\" style=\"width:100%;\">No</label>\r\n                    </div>\r\n                  </div>\r\n                </div>                -->\r\n                <div class=\"form-group row\">\r\n                  <div class=\"input-group\">                    \r\n                    <label class=\"col-md-4 col-form-label\">Comment</label>\r\n                    <div class=\"col-md-8 col-form-label\">                \r\n                      <textarea class=\"form-control\" name=\"comment\" [(ngModel)]=\"mymodel.comment\" id=\"Comment\" placeholder=\"Comment\" rows=\"3\"></textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>  \r\n              </div> \r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"EditPOModal.hide()\">Close</button>        \r\n          <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"editingrequest\">Submit</button>\r\n        </div>\r\n      </div><!-- /.modal-content -->\r\n    </form>\r\n    </div><!-- /.modal-dialog -->\r\n  </div><!-- /.modal -->\r\n  <!--/.card-->\r\n  <!--/.card-->\r\n  <div class=\"row\" *ngIf=\"roleid !== 5\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body table-responsive-sm\">\r\n          <div class=\"col-md-3 ml-auto\" style=\"text-align: right;\" >            \r\n    <button type=\"button\" class=\"btn btn-info mr-1\" data-toggle=\"modal\" (click)=\"infoModal.show()\">\r\n      Add PO\r\n    </button>\r\n          </div>\r\n          <br>\r\n          <table datatable [dtTrigger]=\"dtTrigger\" [dtOptions]=\"dtOptions\" class=\"table table-responsive-sm table-hover table-striped table-outline mb-0\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <!-- <th class=\"text-center\"><i class=\"icon-people\"></i></th> -->\r\n                <th class=\"text-center\" style=\"width: 12%;\">PO Number</th>\r\n                <th>Detail</th>\r\n                <th>Specification </th>\r\n                <th>Qty</th>\r\n                <th>Price</th>\r\n                <th style=\"width: 20%;\">Comment</th>\r\n                <th *ngIf=\"roleid===1 || roleid===2 || roleid===4\">Supplier</th>\r\n                <th>Type</th>\r\n                <!-- <th style=\"width: 8.8%;\" class=\"text-center\">Location</th> -->\r\n                <th>Created By</th>\r\n                <th>ETA</th>\r\n                <th>Created Date</th>\r\n                <th>FromMarketPlace</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let poorder of poorders; let i = index\">\r\n                  <!-- <td class=\"text-center\">\r\n                    <div class=\"avatar\">background: #2967f361;\r\n                      <img src=\"assets/img/avatars/1.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                      <span class=\"avatar-status badge-success\"></span>\r\n                    </div>\r\n                  </td> -->\r\n                  <td class=\"text-center\">\r\n                    {{ poorder.po_num}}\r\n                  </td>\r\n                  <td>\r\n                    <div *ngIf=\"poorder.make_name\" class=\"small text-muted\"><strong>Make: </strong>{{ poorder.make_name}}</div>\r\n                    <div *ngIf=\"poorder.model_name\" class=\"small text-muted\"><strong>Model: </strong>{{ poorder.model_name}}</div>\r\n                    <div *ngIf=\"poorder.proc_name\" class=\"small text-muted\"><strong>Processor: </strong>{{ poorder.proc_name}}</div>\r\n                    <div *ngIf=\"poorder.gen_name\" class=\"small text-muted\"><strong>GEN: </strong>{{ poorder.gen_name}}</div>\r\n                  </td>\r\n                  <td>\r\n                    <div *ngIf=\"poorder.hdd_name\" class=\"small text-muted\"><strong>HDD: </strong>{{ poorder.hdd_name}}</div>\r\n                    <div *ngIf=\"poorder.ram_name\" class=\"small text-muted\"><strong>RAM: </strong>{{ poorder.ram_name}}</div>\r\n                    <div *ngIf=\"poorder.adp_name\" class=\"small text-muted\"><strong>Adapter: </strong>{{ poorder.adp_name}}</div>\r\n                  </td>\r\n                  <td>{{ poorder.po_qty}}</td>\r\n                  <td>${{ poorder.po_price}}</td>\r\n                  <td>{{ poorder.comment}}</td>\r\n                  <td *ngIf=\"roleid===1 || roleid===2 || roleid===4\">{{ poorder.s_name}}</td>\r\n                  <td>{{ poorder.type_name}}</td>\r\n                  <!-- <td class=\"text-center\">{{ requirement.reqlocation}}</td> -->\r\n                  <td>{{ poorder.user_name}}</td>\r\n                  <td>{{poorder.po_eta | date:'MMM d, y'}}</td>\r\n                  <td>{{poorder.created_at | date:'MMM d, y'}}</td>\r\n                  <td class=\"text-center\">\r\n                    <span *ngIf=\"poorder.ref_id===0\">No</span>\r\n                    <span *ngIf=\"poorder.ref_id!==0\">yes</span>\r\n                  </td>\r\n                  <td>                     \r\n                    <button type=\"submit\" class=\"btn btn-square btn-sm btn-info\" (click)=\"EditPO(poorder.id)\">\r\n                      <i class=\"fa fa-dot-circle-o\"></i> Edit\r\n                    </button> \r\n                  </td>\r\n                  \r\n                </tr>\r\n              </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n  <div *ngIf=\"roleid === 5\">\r\n    <div class=\"app flex-row align-items-center\">\r\n      <div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"clearfix\">\r\n              <h1 class=\"float-left display-3 mr-4\">404</h1>\r\n              <h4 class=\"pt-3\">Oops! You're lost.</h4>\r\n              <p class=\"text-muted\">The page you are looking for was not found.</p>\r\n            </div>\r\n            <div class=\"input-prepend input-group\">\r\n              <div class=\"input-group-prepend\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>  \r\n  </div>");

/***/ }),

/***/ "./src/app/views/purchase-order/purchase-order-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/purchase-order/purchase-order-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: PurchaseOrderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderRoutingModule", function() { return PurchaseOrderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _purchase_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purchase-order.component */ "./src/app/views/purchase-order/purchase-order.component.ts");




var routes = [
    {
        path: '',
        component: _purchase_order_component__WEBPACK_IMPORTED_MODULE_3__["PurchaseOrderComponent"],
        data: {
            title: 'Purchase Orders'
        }
    }
];
var PurchaseOrderRoutingModule = /** @class */ (function () {
    function PurchaseOrderRoutingModule() {
    }
    PurchaseOrderRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PurchaseOrderRoutingModule);
    return PurchaseOrderRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/purchase-order/purchase-order.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/views/purchase-order/purchase-order.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".select2-container {\r\n    width: 220px!important;\r\n}\r\ninput, select, textarea {\r\n    border: 1px solid #b3acac;\r\n    border-radius: 3px;\r\n}\r\nbutton {\r\n    background-color: #08ab9e;\r\n    color: #fff;\r\n}\r\n.close {\r\n    background: transparent!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcHVyY2hhc2Utb3JkZXIvcHVyY2hhc2Utb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcHVyY2hhc2Utb3JkZXIvcHVyY2hhc2Utb3JkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3QyLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMjIwcHghaW1wb3J0YW50O1xyXG59XHJcbmlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2FjYWM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOGFiOWU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uY2xvc2Uge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/views/purchase-order/purchase-order.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/purchase-order/purchase-order.component.ts ***!
  \******************************************************************/
/*! exports provided: PurchaseOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderComponent", function() { return PurchaseOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/loadspecs.service */ "./src/app/_services/loadspecs.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_requirement_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_services/requirement.service */ "./src/app/_services/requirement.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");









var PurchaseOrderComponent = /** @class */ (function () {
    function PurchaseOrderComponent(loadspecsService, alertify, requirementservice, datepipe) {
        this.loadspecsService = loadspecsService;
        this.alertify = alertify;
        this.requirementservice = requirementservice;
        this.datepipe = datepipe;
        this.model = {};
        this.mymodel = {};
        this.roleid = Number(localStorage.getItem('RoleID'));
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 25,
            retrieve: true,
            order: [[0, 'desc']]
        };
        this.isDtInitialized = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    PurchaseOrderComponent.prototype.ngOnInit = function () {
        this.loadMakes();
        this.loadGenerations();
        this.loadProcessors();
        this.loadRAMs();
        this.loadHDDs();
        this.loadPurchaseOrders();
    };
    PurchaseOrderComponent.prototype.loadMakes = function () {
        var _this = this;
        return this.loadspecsService.getMakes().subscribe(function (partproducts) {
            _this.makes = partproducts.filter(function (proj) { return (proj.type === 1); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    PurchaseOrderComponent.prototype.loadGenerations = function () {
        var _this = this;
        return this.loadspecsService.getGenerations().subscribe(function (generations) {
            _this.generations = generations;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    PurchaseOrderComponent.prototype.loadModels = function (value) {
        var _this = this;
        return this.loadspecsService.getModels().subscribe(function (partproducts) {
            _this.models = partproducts.filter(function (proj) { return (Number(proj.parentId) === Number(value)); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    PurchaseOrderComponent.prototype.loadProcessors = function () {
        var _this = this;
        return this.loadspecsService.getProcessors().subscribe(function (processors) {
            _this.processors = processors;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    PurchaseOrderComponent.prototype.loadRAMs = function () {
        var _this = this;
        return this.loadspecsService.loadSpectDetails().subscribe(function (rams) {
            _this.rams = rams.filter(function (proj) { return (proj.parentId === 1); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    PurchaseOrderComponent.prototype.loadHDDs = function () {
        var _this = this;
        return this.loadspecsService.loadSpectDetails().subscribe(function (hdds) {
            _this.hdds = hdds.filter(function (proj) { return (proj.parentId === 2); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    PurchaseOrderComponent.prototype.loadPurchaseOrders = function () {
        var _this = this;
        return this.requirementservice.getPurchaseOrders().subscribe(function (poorders) {
            _this.poorders = poorders;
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
    PurchaseOrderComponent.prototype.sendPurchaseOrderPost = function () {
        var _this = this;
        this.model['emp_id'] = localStorage.getItem('UserId');
        if (!this.model.po_num) {
            this.alertify.error('Enter PO Number');
            return;
        }
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
        if (!this.model.po_qty) {
            this.alertify.error('Enter Qty');
            return;
        }
        if (!this.model.po_price) {
            this.alertify.error('Enter Price');
            return;
        }
        if (!this.model.s_name) {
            this.alertify.error('Enter Supplier Name');
            return;
        }
        if (this.model.ram_id === null) {
            this.alertify.error('Select RAM');
            return;
        }
        if (this.model.hdd_id === null) {
            this.alertify.error('Select HDD');
            return;
        }
        if (!this.model.adp_id) {
            this.alertify.error('Select Adapter');
            return;
        }
        if (!this.model.gen_id) {
            this.alertify.error('Select Generation');
            return;
        }
        if (!this.model.po_eta) {
            this.alertify.error('Select Expected Delivery Date');
            return;
        }
        if (!this.model.po_type) {
            this.alertify.error('Select Type');
            return;
        }
        if (!this.model.comment) {
            this.alertify.error('Enter Comment');
            return;
        }
        document.getElementById('postingrequest').innerHTML = '<i class="fa fa-circle-o-notch mt-1 fa-lg fa-spin"></i> Sending...';
        document.getElementById('postingrequest').disabled = true;
        this.requirementservice.sendPurchaseOrderPost(this.model).subscribe(function (poorders) {
            _this.loadPurchaseOrders();
            _this.model.make_id = null;
            _this.model.model_id = null;
            _this.model.proc_id = null;
            _this.model.po_num = '';
            _this.model.po_qty = '';
            _this.model.po_price = '';
            _this.model.s_name = '';
            _this.model.ram_id = null;
            _this.model.hdd_id = null;
            _this.model.adp_id = '';
            _this.model.gen_id = '';
            _this.model.po_type = '';
            _this.model.comment = '';
            document.getElementById('postingrequest').innerHTML = 'Submit';
            document.getElementById('postingrequest').disabled = false;
            _this.infoModal.hide();
            _this.alertify.success('PO Added Successfully');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    PurchaseOrderComponent.prototype.EditPO = function (id) {
        this.mymodel = this.poorders.filter(function (proj) { return (Number(proj.id) === Number(id)); })[0];
        this.mymodel.po_eta = this.datepipe.transform(this.mymodel.po_eta, 'yyyy-MM-dd');
        this.loadModels(this.mymodel.make_id);
        this.EditPOModal.show();
    };
    PurchaseOrderComponent.prototype.EditPurchaseOrderPost = function () {
        var _this = this;
        this.mymodel['updated_by'] = localStorage.getItem('UserId');
        if (!this.mymodel.po_num) {
            this.alertify.error('Enter PO Number');
            return;
        }
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
        if (!this.mymodel.po_qty) {
            this.alertify.error('Enter Qty');
            return;
        }
        if (!this.mymodel.po_price) {
            this.alertify.error('Enter Price');
            return;
        }
        if (!this.mymodel.s_name) {
            this.alertify.error('Enter Supplier Name');
            return;
        }
        if (this.mymodel.ram_id === null) {
            this.alertify.error('Select RAM');
            return;
        }
        if (this.mymodel.hdd_id === null) {
            this.alertify.error('Select HDD');
            return;
        }
        if (!this.mymodel.adp_id) {
            this.alertify.error('Select Adapter');
            return;
        }
        if (!this.mymodel.gen_id) {
            this.alertify.error('Select Generation');
            return;
        }
        if (!this.mymodel.po_eta) {
            this.alertify.error('Select Expected Delivery Date');
            return;
        }
        if (!this.mymodel.po_type) {
            this.alertify.error('Select Type');
            return;
        }
        if (!this.mymodel.comment) {
            this.alertify.error('Enter Comment');
            return;
        }
        document.getElementById('editingrequest').innerHTML = '<i class="fa fa-circle-o-notch mt-1 fa-lg fa-spin"></i> Sending...';
        document.getElementById('editingrequest').disabled = true;
        this.requirementservice.EditPurchaseOrderPost(this.mymodel).subscribe(function (poorders) {
            _this.loadPurchaseOrders();
            _this.mymodel = {};
            document.getElementById('editingrequest').innerHTML = 'Submit';
            document.getElementById('editingrequest').disabled = false;
            _this.EditPOModal.hide();
            _this.alertify.success('PO EDITED Successfully');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    PurchaseOrderComponent.ctorParameters = function () { return [
        { type: _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_3__["LoadspecsService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] },
        { type: _services_requirement_service__WEBPACK_IMPORTED_MODULE_7__["RequirementService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('infoModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], PurchaseOrderComponent.prototype, "infoModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('EditPOModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], PurchaseOrderComponent.prototype, "EditPOModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"])
    ], PurchaseOrderComponent.prototype, "dtElement", void 0);
    PurchaseOrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purchase-order',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./purchase-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/purchase-order/purchase-order.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./purchase-order.component.css */ "./src/app/views/purchase-order/purchase-order.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_loadspecs_service__WEBPACK_IMPORTED_MODULE_3__["LoadspecsService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"],
            _services_requirement_service__WEBPACK_IMPORTED_MODULE_7__["RequirementService"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]])
    ], PurchaseOrderComponent);
    return PurchaseOrderComponent;
}());



/***/ }),

/***/ "./src/app/views/purchase-order/purchase-order.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/purchase-order/purchase-order.module.ts ***!
  \***************************************************************/
/*! exports provided: PurchaseOrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderModule", function() { return PurchaseOrderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _purchase_order_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purchase-order-routing.module */ "./src/app/views/purchase-order/purchase-order-routing.module.ts");
/* harmony import */ var _purchase_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./purchase-order.component */ "./src/app/views/purchase-order/purchase-order.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_select2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-select2 */ "./node_modules/ng-select2/fesm5/ng-select2.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");









var PurchaseOrderModule = /** @class */ (function () {
    function PurchaseOrderModule() {
    }
    PurchaseOrderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_purchase_order_component__WEBPACK_IMPORTED_MODULE_4__["PurchaseOrderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _purchase_order_routing_module__WEBPACK_IMPORTED_MODULE_3__["PurchaseOrderRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ng_select2__WEBPACK_IMPORTED_MODULE_7__["NgSelect2Module"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"]
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
            ]
        })
    ], PurchaseOrderModule);
    return PurchaseOrderModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-purchase-order-purchase-order-module.js.map