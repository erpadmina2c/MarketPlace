(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-purchase-order-purchase-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/purchase-order/purchase-order.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/purchase-order/purchase-order.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\n    <!-- Button trigger modal -->\n    <button type=\"button\" class=\"btn btn-info mr-1\" data-toggle=\"modal\" (click)=\"infoModal.show()\">\n        Add PO\n      </button>\n  </div>\n  <div bsModal #infoModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 47%;\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"sendPurchaseOrderPost()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add Purchase Order</h4>\n          <button type=\"button\" class=\"close\" (click)=\"infoModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body row\">\n              <div class=\"col-md-6\">            \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">PO Number</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <input type=\"text\" id=\"po_num\" name=\"po_num\" [(ngModel)]=\"model.po_num\"  class=\"form-control\" placeholder=\"Purchase Order Number\"></div>\n                  </div>\n                </div>             \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">\n                    <label class=\"col-md-4 col-form-label\">Make</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <ng-select2 [data]=\"makes\" [width]=\"200\"  name=\"make_id\"  [(ngModel)]=\"model.make_id\" (ngModelChange)=\"loadModels($event)\"></ng-select2>                                                                           \n                    </div>                  \n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <div class=\"input-group\">\n                    <label class=\"col-md-4 col-form-label\">Model</label>  \n                    <div class=\"col-md-8 col-form-label\"> \n                      <ng-select2 [data]=\"models\"  [width]=\"200\" name=\"model_id\"  [(ngModel)]=\"model.model_id\"></ng-select2> </div> \n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <div class=\"input-group\">\n                    <label class=\"col-md-4 col-form-label\">Processor</label>    \n                    <div class=\"col-md-8 col-form-label\">\n                      <ng-select2 [data]=\"processors\"  [width]=\"200\" name=\"proc_id\"  [(ngModel)]=\"model.proc_id\"></ng-select2>  </div> \n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">Qty</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <input type=\"number\" id=\"po_qty\" name=\"po_qty\" [(ngModel)]=\"model.po_qty\"  class=\"form-control\" placeholder=\"Qty\"></div>\n                  </div>\n                </div>              \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">Price</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <input type=\"number\" id=\"po_price\" name=\"po_price\" [(ngModel)]=\"model.po_price\"  class=\"form-control\" placeholder=\"Price\"></div>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Supplier</label>\n                  <div class=\"col-md-8 col-form-label\">                    \n                    <input type=\"text\" id=\"s_name\" name=\"s_name\" [(ngModel)]=\"model.s_name\"  class=\"form-control\" placeholder=\"Supplier Name\">\n                  </div>\n                </div> \n              </div>            \n              <div class=\"col-md-6\">    \n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">RAM</label> \n                  <div class=\"col-md-8 col-form-label\">   \n                    <ng-select2 [data]=\"rams\"  [width]=\"200\" name=\"ram_id\"  [(ngModel)]=\"model.ram_id\"></ng-select2>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">HDD</label> \n                  <div class=\"col-md-8 col-form-label\">   \n                    <ng-select2 [data]=\"hdds\"  [width]=\"200\" name=\"hdd_id\"  [(ngModel)]=\"model.hdd_id\"></ng-select2>\n                  </div>\n                </div> \n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Type</label> \n                  <div class=\"col-md-8 col-form-label\">   \n                    <select width=\"200\" name=\"po_type\"  [(ngModel)]=\"model.po_type\" style=\"width:200px;height: 32px;\">\n                      <option value=\"1\">Reman</option>\n                      <option value=\"2\">Refurb</option>\n                      <option value=\"3\">Silver</option>\n                      <option value=\"4\">Filter Stock</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Generation</label> \n                  <div class=\"col-md-8 col-form-label\">   \n                    <ng-select2 [data]=\"generations\"  [width]=\"200\" name=\"gen_id\"  [(ngModel)]=\"model.gen_id\"></ng-select2>\n                  </div>\n                </div>           \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">ETA</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <input class=\"form-control\" id=\"date-input\" type=\"date\" name=\"po_eta\" [(ngModel)]=\"model.po_eta\" placeholder=\"date\">\n                    </div>\n                  </div>\n                </div> \n                <!-- <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Location</label> \n                  <div class=\"col-md-8 col-form-label\">   \n                    <ng-select2 [data]=\"locations\"  [width]=\"200\" name=\"loc_id\"  [(ngModel)]=\"model.loc_id\"></ng-select2>\n                  </div>\n                </div> -->\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\" for=\"inline-radios\">Adapter</label>\n                  <div class=\"col-md-8 col-form-label\">\n                    <div class=\"form-check form-check-inline mr-1\" id=\"inline-radios\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"adp_id\" [(ngModel)]=\"model.adp_id\" id=\"inlineRadio1\" value=\"1\">\n                      <label class=\"form-check-label\" for=\"inlineRadio1\" style=\"width:100%;\">Yes</label>\n                    </div>\n                    <div class=\"form-check form-check-inline mr-1\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"adp_id\" [(ngModel)]=\"model.adp_id\" id=\"inlineRadio2\" value=\"2\">\n                      <label class=\"form-check-label\" for=\"inlineRadio2\" style=\"width:100%;\">No</label>\n                    </div>\n                  </div>\n                </div>               \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">Comment</label>\n                    <div class=\"col-md-8 col-form-label\">                \n                      <textarea class=\"form-control\" name=\"comment\" [(ngModel)]=\"model.comment\" id=\"Comment\" placeholder=\"Comment\" rows=\"3\"></textarea>\n                    </div>\n                  </div>\n                </div>  \n              </div> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"infoModal.hide()\">Close</button>        \n          <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"postingrequest\">Submit</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <div bsModal #EditPOModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 47%;\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"sendPurchaseOrderPost()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Edit Purchase Order</h4>\n          <button type=\"button\" class=\"close\" (click)=\"EditPOModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body row\">\n              <div class=\"col-md-6\">            \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">PO Number</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <input type=\"text\" id=\"po_num\" name=\"po_num\" [(ngModel)]=\"mymodel.po_num\"  class=\"form-control\" placeholder=\"Purchase Order Number\"></div>\n                  </div>\n                </div>             \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">\n                    <label class=\"col-md-4 col-form-label\">Make</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <ng-select2 [data]=\"makes\" [width]=\"200\"  name=\"make_id\"  [(ngModel)]=\"mymodel.make_id\" (ngModelChange)=\"loadModels($event)\"></ng-select2>                                                                           \n                    </div>                  \n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <div class=\"input-group\">\n                    <label class=\"col-md-4 col-form-label\">Model</label>  \n                    <div class=\"col-md-8 col-form-label\"> \n                      <ng-select2 [data]=\"models\"  [width]=\"200\" name=\"model_id\"  [(ngModel)]=\"mymodel.model_id\"></ng-select2> </div> \n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <div class=\"input-group\">\n                    <label class=\"col-md-4 col-form-label\">Processor</label>    \n                    <div class=\"col-md-8 col-form-label\">\n                      <ng-select2 [data]=\"processors\"  [width]=\"200\" name=\"proc_id\"  [(ngModel)]=\"mymodel.proc_id\"></ng-select2>  </div> \n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">Qty</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <input type=\"number\" id=\"po_qty\" name=\"po_qty\" [(ngModel)]=\"mymodel.po_qty\"  class=\"form-control\" placeholder=\"Qty\"></div>\n                  </div>\n                </div>              \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">Price</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <input type=\"number\" id=\"po_price\" name=\"po_price\" [(ngModel)]=\"mymodel.po_price\"  class=\"form-control\" placeholder=\"Price\"></div>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Supplier</label>\n                  <div class=\"col-md-8 col-form-label\">                    \n                    <input type=\"text\" id=\"s_name\" name=\"s_name\" [(ngModel)]=\"mymodel.s_name\"  class=\"form-control\" placeholder=\"Supplier Name\">\n                  </div>\n                </div> \n              </div>            \n              <div class=\"col-md-6\">    \n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">RAM</label> \n                  <div class=\"col-md-8 col-form-label\">   \n                    <ng-select2 [data]=\"rams\"  [width]=\"200\" name=\"ram_id\"  [(ngModel)]=\"mymodel.ram_id\"></ng-select2>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">HDD</label> \n                  <div class=\"col-md-8 col-form-label\">   \n                    <ng-select2 [data]=\"hdds\"  [width]=\"200\" name=\"hdd_id\"  [(ngModel)]=\"mymodel.hdd_id\"></ng-select2>\n                  </div>\n                </div> \n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Type</label> \n                  <div class=\"col-md-8 col-form-label\">   \n                    <select width=\"200\" name=\"po_type\"  [(ngModel)]=\"mymodel.po_type\" style=\"width:200px;height: 32px;\">\n                      <option value=\"1\">Reman</option>\n                      <option value=\"2\">Refurb</option>\n                      <option value=\"3\">Silver</option>\n                      <option value=\"4\">Filter Stock</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Generation</label> \n                  <div class=\"col-md-8 col-form-label\">   \n                    <ng-select2 [data]=\"generations\"  [width]=\"200\" name=\"gen_id\"  [(ngModel)]=\"mymodel.gen_id\"></ng-select2>\n                  </div>\n                </div>           \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">ETA</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <input class=\"form-control\" id=\"date-input\" type=\"date\" name=\"po_eta\" [(ngModel)]=\"mymodel.po_eta\" placeholder=\"date\">\n                    </div>\n                  </div>\n                </div> \n                <!-- <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Location</label> \n                  <div class=\"col-md-8 col-form-label\">   \n                    <ng-select2 [data]=\"locations\"  [width]=\"200\" name=\"loc_id\"  [(ngModel)]=\"model.loc_id\"></ng-select2>\n                  </div>\n                </div> -->\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\" for=\"inline-radios\">Adapter</label>\n                  <div class=\"col-md-8 col-form-label\">\n                    <div class=\"form-check form-check-inline mr-1\" id=\"inline-radios\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"adp_id\" [(ngModel)]=\"mymodel.adp_id\" id=\"inlineRadio1\" value=\"1\">\n                      <label class=\"form-check-label\" for=\"inlineRadio1\" style=\"width:100%;\">Yes</label>\n                    </div>\n                    <div class=\"form-check form-check-inline mr-1\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"adp_id\" [(ngModel)]=\"mymodel.adp_id\" id=\"inlineRadio2\" value=\"2\">\n                      <label class=\"form-check-label\" for=\"inlineRadio2\" style=\"width:100%;\">No</label>\n                    </div>\n                  </div>\n                </div>               \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">Comment</label>\n                    <div class=\"col-md-8 col-form-label\">                \n                      <textarea class=\"form-control\" name=\"comment\" [(ngModel)]=\"mymodel.comment\" id=\"Comment\" placeholder=\"Comment\" rows=\"3\"></textarea>\n                    </div>\n                  </div>\n                </div>  \n              </div> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"EditPOModal.hide()\">Close</button>        \n          <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"postingrequest\">Submit</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <!--/.card-->\n  <!--/.card-->\n  <div class=\"row\" *ngIf=\"roleid !== 5\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <br>\n          <table datatable [dtTrigger]=\"dtTrigger\" [dtOptions]=\"dtOptions\" class=\"table table-responsive-sm table-hover table-striped table-outline mb-0\">\n            <thead class=\"thead-light\">\n              <tr>\n                <!-- <th class=\"text-center\"><i class=\"icon-people\"></i></th> -->\n                <th class=\"text-center\" style=\"width: 12%;\">PO Number</th>\n                <th>Detail</th>\n                <th>Specification </th>\n                <th>Qty</th>\n                <th>Price</th>\n                <th style=\"width: 20%;\">Comment</th>\n                <th *ngIf=\"roleid===1 || roleid===2 || roleid===4\">Supplier</th>\n                <th>Type</th>\n                <!-- <th style=\"width: 8.8%;\" class=\"text-center\">Location</th> -->\n                <th>Created By</th>\n                <th>ETA</th>\n                <th>Created Date</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let poorder of poorders; let i = index\">\n                  <!-- <td class=\"text-center\">\n                    <div class=\"avatar\">background: #2967f361;\n                      <img src=\"assets/img/avatars/1.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                      <span class=\"avatar-status badge-success\"></span>\n                    </div>\n                  </td> -->\n                  <td class=\"text-center\">\n                    {{ poorder.po_num}}\n                  </td>\n                  <td>\n                    <div *ngIf=\"poorder.make_name\" class=\"small text-muted\"><strong>Make: </strong>{{ poorder.make_name}}</div>\n                    <div *ngIf=\"poorder.model_name\" class=\"small text-muted\"><strong>Model: </strong>{{ poorder.model_name}}</div>\n                    <div *ngIf=\"poorder.proc_name\" class=\"small text-muted\"><strong>Processor: </strong>{{ poorder.proc_name}}</div>\n                    <div *ngIf=\"poorder.gen_name\" class=\"small text-muted\"><strong>GEN: </strong>{{ poorder.gen_name}}</div>\n                  </td>\n                  <td>\n                    <div *ngIf=\"poorder.hdd_name\" class=\"small text-muted\"><strong>HDD: </strong>{{ poorder.hdd_name}}</div>\n                    <div *ngIf=\"poorder.ram_name\" class=\"small text-muted\"><strong>RAM: </strong>{{ poorder.ram_name}}</div>\n                    <div *ngIf=\"poorder.adp_name\" class=\"small text-muted\"><strong>Adapter: </strong>{{ poorder.adp_name}}</div>\n                  </td>\n                  <td>{{ poorder.po_qty}}</td>\n                  <td>${{ poorder.po_price}}</td>\n                  <td>{{ poorder.comment}}</td>\n                  <td *ngIf=\"roleid===1 || roleid===2 || roleid===4\">{{ poorder.s_name}}</td>\n                  <td>{{ poorder.type_name}}</td>\n                  <!-- <td class=\"text-center\">{{ requirement.reqlocation}}</td> -->\n                  <td>{{ poorder.user_name}}</td>\n                  <td>{{poorder.po_eta | date:'MMM d, y'}}</td>\n                  <td>{{poorder.created_at | date:'MMM d, y'}}</td>\n                  <td>                     \n                    <button type=\"submit\" class=\"btn btn-square btn-sm btn-info\" (click)=\"EditPO(poorder.id)\">\n                      <i class=\"fa fa-dot-circle-o\"></i> Edit\n                    </button> \n                  </td>\n                  \n                </tr>\n              </tbody>\n          </table>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div *ngIf=\"roleid === 5\">\n    <div class=\"app flex-row align-items-center\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-6\">\n            <div class=\"clearfix\">\n              <h1 class=\"float-left display-3 mr-4\">404</h1>\n              <h4 class=\"pt-3\">Oops! You're lost.</h4>\n              <p class=\"text-muted\">The page you are looking for was not found.</p>\n            </div>\n            <div class=\"input-prepend input-group\">\n              <div class=\"input-group-prepend\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>  \n  </div>");

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
/* harmony default export */ __webpack_exports__["default"] = (".select2-container {\r\n    width: 220px!important;\r\n}\r\ninput, select, textarea {\r\n    border: 1px solid #b3acac;\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcHVyY2hhc2Utb3JkZXIvcHVyY2hhc2Utb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3B1cmNoYXNlLW9yZGVyL3B1cmNoYXNlLW9yZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0Mi1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDIyMHB4IWltcG9ydGFudDtcclxufVxyXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjNhY2FjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59Il19 */");

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








var PurchaseOrderComponent = /** @class */ (function () {
    function PurchaseOrderComponent(loadspecsService, alertify, requirementservice) {
        this.loadspecsService = loadspecsService;
        this.alertify = alertify;
        this.requirementservice = requirementservice;
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
            console.log(_this.poorders);
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
            _this.alertify.success('PO Added Successfull');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    PurchaseOrderComponent.prototype.EditPO = function (id) {
        this.mymodel = this.poorders.filter(function (proj) { return (Number(proj.id) === Number(id)); })[0];
        this.loadModels(this.mymodel.make_id);
        this.EditPOModal.show();
    };
    PurchaseOrderComponent.ctorParameters = function () { return [
        { type: _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_3__["LoadspecsService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] },
        { type: _services_requirement_service__WEBPACK_IMPORTED_MODULE_7__["RequirementService"] }
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
            _services_requirement_service__WEBPACK_IMPORTED_MODULE_7__["RequirementService"]])
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
            ]
        })
    ], PurchaseOrderModule);
    return PurchaseOrderModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-purchase-order-purchase-order-module.js.map