(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-commit-purchase-commit-purchase-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/commit-purchase/commit-purchase.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/commit-purchase/commit-purchase.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\n    <!-- Button trigger modal -->\n    <button type=\"button\" class=\"btn btn-info mr-1\" data-toggle=\"modal\" (click)=\"infoModal.show()\">\n        Add PO\n      </button>\n  </div>\n  <div bsModal #infoModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 47%;\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"sendPurchaseOrderPost()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add Purchase Order</h4>\n          <button type=\"button\" class=\"close\" (click)=\"infoModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body row\">\n              <div class=\"col-md-6\">              \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">\n                    <label class=\"col-md-4 col-form-label\">Make</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <ng-select2 [data]=\"makes\" [width]=\"200\"  name=\"make_id\"  [(ngModel)]=\"model.make_id\" (ngModelChange)=\"loadModels($event)\"></ng-select2>                                                                           \n                    </div>                  \n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <div class=\"input-group\">\n                    <label class=\"col-md-4 col-form-label\">Model</label>  \n                    <div class=\"col-md-8 col-form-label\"> \n                      <ng-select2 [data]=\"models\"  [width]=\"200\" name=\"model_id\"  [(ngModel)]=\"model.model_id\"></ng-select2> </div> \n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <div class=\"input-group\">\n                    <label class=\"col-md-4 col-form-label\">Processor</label>    \n                    <div class=\"col-md-8 col-form-label\">\n                      <ng-select2 [data]=\"processors\"  [width]=\"200\" name=\"proc_id\"  [(ngModel)]=\"model.proc_id\"></ng-select2>  </div> \n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Supplier</label>\n                  <div class=\"col-md-8 col-form-label\">                    \n                    <input type=\"text\" id=\"s_name\" name=\"s_name\" [(ngModel)]=\"model.s_name\"  class=\"form-control\" placeholder=\"Supplier Name\">\n                  </div>\n                </div> \n              </div>            \n              <div class=\"col-md-6\">    \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">Qty</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <input type=\"number\" id=\"cpo_qty\" name=\"cpo_qty\" [(ngModel)]=\"model.cpo_qty\"  class=\"form-control\" placeholder=\"Qty\"></div>\n                  </div>\n                </div>              \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">Price</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <input type=\"number\" id=\"cpo_price\" name=\"cpo_price\" [(ngModel)]=\"model.cpo_price\"  class=\"form-control\" placeholder=\"Price\"></div>\n                  </div>\n                </div>      \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">ETA</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <input class=\"form-control\" id=\"date-input\" type=\"date\" name=\"cpo_eta\" [(ngModel)]=\"model.cpo_eta\" placeholder=\"date\">\n                    </div>\n                  </div>\n                </div>             \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">Comment</label>\n                    <div class=\"col-md-8 col-form-label\">                \n                      <textarea class=\"form-control\" name=\"comment\" [(ngModel)]=\"model.comment\" id=\"Comment\" placeholder=\"Comment\" rows=\"3\"></textarea>\n                    </div>\n                  </div>\n                </div>  \n              </div> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"infoModal.hide()\">Close</button>        \n          <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"postingrequest\">Submit</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <div bsModal #UpdatePOModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"UpdateCPOPost()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Mark PO as <span *ngIf=\"updatemodel.cpo_status == 3\">In-discussion</span><span *ngIf=\"updatemodel.cpo_status == 4\">Complete</span></h4>\n          <button type=\"button\" class=\"close\" (click)=\"UpdatePOModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body row\">           \n              <div class=\"col-md-12\">             \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">Comment</label>\n                    <div class=\"col-md-8 col-form-label\">                \n                      <textarea class=\"form-control\" name=\"comment\" [(ngModel)]=\"updatemodel.comment\" id=\"Comment\" placeholder=\"Comment\" rows=\"3\"></textarea>\n                    </div>\n                  </div>\n                </div>  \n              </div> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"UpdatePOModal.hide()\">Close</button>        \n          <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"postingrequest\">Update</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <div bsModal #EditPOModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 47%;\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"EditPurchaseOrderPost()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Edit Purchase Order</h4>\n          <button type=\"button\" class=\"close\" (click)=\"EditPOModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body row\">\n              <div class=\"col-md-6\">            \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">PO Number</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <input type=\"text\" id=\"cpo_num\" disabled=\"disabled\" name=\"cpo_num\" [(ngModel)]=\"mymodel.cpo_num\"  class=\"form-control\" placeholder=\"Purchase Order Number\"></div>\n                  </div>\n                </div>             \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">\n                    <label class=\"col-md-4 col-form-label\">Make</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <ng-select2 [data]=\"makes\" [width]=\"200\" disabled=\"disabled\" name=\"make_id\"  [(ngModel)]=\"mymodel.make_id\" (ngModelChange)=\"loadModels($event)\"></ng-select2>                                                                           \n                    </div>                  \n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <div class=\"input-group\">\n                    <label class=\"col-md-4 col-form-label\">Model</label>  \n                    <div class=\"col-md-8 col-form-label\"> \n                      <ng-select2 [data]=\"models\"  [width]=\"200\" disabled=\"disabled\" name=\"model_id\"  [(ngModel)]=\"mymodel.model_id\"></ng-select2> </div> \n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <div class=\"input-group\">\n                    <label class=\"col-md-4 col-form-label\">Processor</label>    \n                    <div class=\"col-md-8 col-form-label\">\n                      <ng-select2 [data]=\"processors\"  [width]=\"200\" disabled=\"disabled\" name=\"proc_id\"  [(ngModel)]=\"mymodel.proc_id\"></ng-select2>  </div> \n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Supplier</label>\n                  <div class=\"col-md-8 col-form-label\">                    \n                    <input type=\"text\" id=\"s_name\" name=\"s_name\" [(ngModel)]=\"mymodel.s_name\"  class=\"form-control\" placeholder=\"Supplier Name\">\n                  </div>\n                </div> \n              </div>            \n              <div class=\"col-md-6\">   \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">Qty</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <input type=\"number\" id=\"cpo_qty\" name=\"cpo_qty\" [(ngModel)]=\"mymodel.cpo_qty\"  class=\"form-control\" placeholder=\"Qty\"></div>\n                  </div>\n                </div>              \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">Price</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <input type=\"number\" id=\"cpo_price\" name=\"cpo_price\" [(ngModel)]=\"mymodel.cpo_price\"  class=\"form-control\" placeholder=\"Price\"></div>\n                  </div>\n                </div>         \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">ETA</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <input class=\"form-control\" id=\"date-input\" type=\"date\" name=\"cpo_eta\" [(ngModel)]=\"mymodel.cpo_eta\" placeholder=\"date\">\n                    </div>\n                  </div>\n                </div> \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">Comment</label>\n                    <div class=\"col-md-8 col-form-label\">                \n                      <textarea class=\"form-control\" name=\"comment\" [(ngModel)]=\"mymodel.comment\" id=\"Comment\" placeholder=\"Comment\" rows=\"3\"></textarea>\n                    </div>\n                  </div>\n                </div>  \n              </div> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"EditPOModal.hide()\">Close</button>        \n          <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"editingrequest\">Update</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <!--/.card-->\n  <!--/.card-->\n  <div class=\"row\" *ngIf=\"roleid !== 5\">\n    <div class=\"col-md-12\">\n      <form name=\"demo\">\n      <div  class=\"row\" style=\"background: #21355C;margin-right:0px;margin-left:0px;padding-top: 8px;\">        \n        <span  class=\"col-2 row\">\n          <div class=\"col-8\" style=\"color: #FFF;\">\n            All PO\n          </div>\n          <label class=\"switch switch-label switch-outline-success-alt col-4\">\n            <input type=\"checkbox\" class=\"switch-input\" name=\"order\" [checked]='check1' (click)=\"activateModel($event,0)\">\n            <span class=\"switch-slider\" data-checked=\"✓\" data-unchecked=\"✕\"></span>\n          </label>\n        </span>\n        <span  class=\"col-2 row\">\n          <div class=\"col-8\" style=\"color: #FFF;\">\n            In-Discussion PO\n          </div>\n          <label class=\"switch switch-label switch-outline-success-alt col-4\">\n            <input type=\"checkbox\" class=\"switch-input\" name=\"order1\" [checked]='check2' (click)=\"activateModel($event,1)\">\n            <span class=\"switch-slider\" data-checked=\"✓\" data-unchecked=\"✕\"></span>\n          </label>\n        </span>      \n        <span  class=\"col-2 row\">\n          <div class=\"col-7\"  style=\"color: #FFF;\">\n            Confirmed PO\n          </div>\n          <label class=\"switch switch-label switch-outline-success-alt col-4\">\n            <input type=\"checkbox\" class=\"switch-input\" name=\"order2\" [checked]='check3' (click)=\"activateModel($event,2)\">\n            <span class=\"switch-slider\" data-checked=\"✓\" data-unchecked=\"✕\"></span>\n          </label>\n        </span> \n      </div>\n    </form>\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <br>\n          <table datatable [dtTrigger]=\"dtTrigger\" [dtOptions]=\"dtOptions\" class=\"table table-responsive-sm table-hover table-striped table-outline mb-0\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th class=\"text-center\">###</th>\n                <th class=\"text-center\" style=\"width: 12%;\">CPO Number</th>\n                <th>Detail</th>\n                <th>Qty</th>\n                <th>Price</th>\n                <th >Supplier</th>\n                <th style=\"width: 20%;\">Comment</th>\n                <th>Created By</th>\n                <th>ETA</th>\n                <th>Created Date</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let poorder of poorders; let i = index\">\n                  <td class=\"text-center\">\n                    <button type=\"submit\" class=\"btn btn-square btn-sm btn-secondary\" (click)=\"CheckDetails(poorder.id)\">\n                      <i class=\"fa fa-dot-circle-o\"></i> Details\n                    </button>  \n                  </td>\n                  <td class=\"text-center\">\n                    {{ poorder.cpo_num}}\n                  </td>\n                  <td>\n                    <div *ngIf=\"poorder.make_name\" class=\"small text-muted\"><strong>Make: </strong>{{ poorder.make_name}}</div>\n                    <div *ngIf=\"poorder.model_name\" class=\"small text-muted\"><strong>Model: </strong>{{ poorder.model_name}}</div>\n                    <div *ngIf=\"poorder.proc_name\" class=\"small text-muted\"><strong>Processor: </strong>{{ poorder.proc_name}}</div>\n                  </td>\n                  <td>{{ poorder.cpo_qty}}</td>\n                  <td>${{ poorder.cpo_price}}</td>\n                  <td>{{ poorder.s_name}}</td>\n                  <td>{{ poorder.comment}}</td>\n                  <td>{{ poorder.user_name}}</td>\n                  <td>{{poorder.cpo_eta | date:'MMM d, y'}}</td>\n                  <td>{{poorder.created_at | date:'MMM d, y'}}</td>\n                  <td>                     \n                    <button type=\"submit\" class=\"btn btn-square btn-sm btn-danger\" (click)=\"EditPO(poorder.id)\">\n                      <i class=\"fa fa-dot-circle-o\"></i> EDIT\n                    </button>                 \n                    <!-- <button *ngIf=\"poorder.cpo_status === 1\" type=\"submit\" class=\"btn btn-square btn-sm btn-info\" (click)=\"UpdateCPOModal(poorder.id,3)\">\n                      <i class=\"fa fa-dot-circle-o\"></i> In-discussion\n                    </button>                  -->\n                    <button *ngIf=\"poorder.cpo_status !== 4\" type=\"submit\" class=\"btn btn-square btn-sm btn-success\" (click)=\"UpdateCPOModal(poorder.id,4)\">\n                      <i class=\"fa fa-dot-circle-o\"></i> CONFIRM\n                    </button> \n                    <span *ngIf=\"poorder.cpo_status === 4\" style=\"color:green;font-weight:bold;\n                    font-style: italic;font-family:monospace;font-size: 1.1rem;\">CONFIRMED</span>\n                  </td>\n                  \n                </tr>\n              </tbody>\n          </table>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div bsModal #CPLDetails=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 748px;\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">CPO Detail</h4>\n          <button type=\"button\" class=\"close\" (click)=\"CPLDetails.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body row\">           \n              <table class=\"table table-responsive-sm table-hover table-striped table-outline mb-0\">\n                <thead class=\"thead-light\">\n                  <tr>\n                    <th class=\"text-center\">CPO Number</th>\n                    <th>Qty</th>\n                    <th>Price</th>\n                    <th>Comment</th>\n                    <th>Action</th>\n                    <th>Updated By</th>\n                    <th>Updated Date</th>\n                  </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let cplorderdetail of cplorderdetails; let i = index\">\n                      <td>\n                        {{ cplorderdetail.cpol_num}}\n                      </td>\n                      <td>{{ cplorderdetail.cpol_qty}}</td>\n                      <td>${{ cplorderdetail.cpol_price}}</td>\n                      <td>{{ cplorderdetail.cpol_comment}}</td>\n                      <td>{{ cplorderdetail.cpol_flag}}</td>\n                      <td>{{ cplorderdetail.cpol_username}}</td>\n                      <td>{{cplorderdetail.cpol_created_at | date:'MMM d, y'}}</td>                      \n                    </tr>\n                  </tbody>\n              </table> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"CPLDetails.hide()\">Close</button> \n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <div *ngIf=\"roleid === 5\">\n    <div class=\"app flex-row align-items-center\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-6\">\n            <div class=\"clearfix\">\n              <h1 class=\"float-left display-3 mr-4\">404</h1>\n              <h4 class=\"pt-3\">Oops! You're lost.</h4>\n              <p class=\"text-muted\">The page you are looking for was not found.</p>\n            </div>\n            <div class=\"input-prepend input-group\">\n              <div class=\"input-group-prepend\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>  \n  </div>");

/***/ }),

/***/ "./src/app/views/commit-purchase/commit-purchase-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/commit-purchase/commit-purchase-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: CommitPurchaseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitPurchaseRoutingModule", function() { return CommitPurchaseRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _commit_purchase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commit-purchase.component */ "./src/app/views/commit-purchase/commit-purchase.component.ts");




var routes = [
    {
        path: '',
        component: _commit_purchase_component__WEBPACK_IMPORTED_MODULE_3__["CommitPurchaseComponent"],
        data: {
            title: 'Commit Purchase'
        }
    }
];
var CommitPurchaseRoutingModule = /** @class */ (function () {
    function CommitPurchaseRoutingModule() {
    }
    CommitPurchaseRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CommitPurchaseRoutingModule);
    return CommitPurchaseRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/commit-purchase/commit-purchase.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/commit-purchase/commit-purchase.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbW1pdC1wdXJjaGFzZS9jb21taXQtcHVyY2hhc2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/commit-purchase/commit-purchase.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/commit-purchase/commit-purchase.component.ts ***!
  \********************************************************************/
/*! exports provided: CommitPurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitPurchaseComponent", function() { return CommitPurchaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/loadspecs.service */ "./src/app/_services/loadspecs.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_requirement_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_services/requirement.service */ "./src/app/_services/requirement.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");









var CommitPurchaseComponent = /** @class */ (function () {
    function CommitPurchaseComponent(loadspecsService, alertify, requirementservice, datepipe) {
        this.loadspecsService = loadspecsService;
        this.alertify = alertify;
        this.requirementservice = requirementservice;
        this.datepipe = datepipe;
        this.model = {};
        this.mymodel = {};
        this.updatemodel = {};
        this.roleid = Number(localStorage.getItem('RoleID'));
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 25,
            retrieve: true,
            order: [[0, 'desc']]
        };
        this.isDtInitialized = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    CommitPurchaseComponent.prototype.ngOnInit = function () {
        this.check1 = true;
        this.check2 = false;
        this.check3 = false;
        this.loadMakes();
        this.loadProcessors();
        this.loadPurchaseOrders();
    };
    CommitPurchaseComponent.prototype.loadMakes = function () {
        var _this = this;
        return this.loadspecsService.getMakes().subscribe(function (partproducts) {
            _this.makes = partproducts.filter(function (proj) { return (proj.type === 1); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CommitPurchaseComponent.prototype.loadModels = function (value) {
        var _this = this;
        return this.loadspecsService.getModels().subscribe(function (partproducts) {
            _this.models = partproducts.filter(function (proj) { return (Number(proj.parentId) === Number(value)); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CommitPurchaseComponent.prototype.loadProcessors = function () {
        var _this = this;
        return this.loadspecsService.getProcessors().subscribe(function (processors) {
            _this.processors = processors;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CommitPurchaseComponent.prototype.loadPurchaseOrders = function () {
        var _this = this;
        return this.requirementservice.getCommitPurchaseOrders().subscribe(function (poorders) {
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
    CommitPurchaseComponent.prototype.sendPurchaseOrderPost = function () {
        var _this = this;
        this.model['emp_id'] = localStorage.getItem('UserId');
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
        if (!this.model.cpo_qty) {
            this.alertify.error('Enter Qty');
            return;
        }
        if (!this.model.cpo_price) {
            this.alertify.error('Enter Price');
            return;
        }
        if (!this.model.s_name) {
            this.alertify.error('Enter Supplier Name');
            return;
        }
        if (!this.model.cpo_eta) {
            this.alertify.error('Select Expected Delivery Date');
            return;
        }
        if (!this.model.comment) {
            this.alertify.error('Enter Comment');
            return;
        }
        document.getElementById('postingrequest').innerHTML = '<i class="fa fa-circle-o-notch mt-1 fa-lg fa-spin"></i> Sending...';
        document.getElementById('postingrequest').disabled = true;
        this.requirementservice.sendCommitPurchaseOrderPost(this.model).subscribe(function (poorders) {
            _this.loadPurchaseOrders();
            _this.model.make_id = null;
            _this.model.model_id = null;
            _this.model.proc_id = null;
            _this.model.cpo_num = '';
            _this.model.cpo_qty = '';
            _this.model.cpo_price = '';
            _this.model.s_name = '';
            _this.model.comment = '';
            document.getElementById('postingrequest').innerHTML = 'Submit';
            document.getElementById('postingrequest').disabled = false;
            _this.infoModal.hide();
            _this.alertify.success('CPO Added Successfully');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CommitPurchaseComponent.prototype.CheckDetails = function (id) {
        var _this = this;
        return this.requirementservice.getCPODetails(id).subscribe(function (cplorderdetails) {
            _this.cplorderdetails = cplorderdetails;
            console.log(_this.cplorderdetails);
            _this.CPLDetails.show();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CommitPurchaseComponent.prototype.EditPO = function (id) {
        this.mymodel = this.poorders.filter(function (proj) { return (Number(proj.id) === Number(id)); })[0];
        this.mymodel.cpo_eta = this.datepipe.transform(this.mymodel.cpo_eta, 'yyyy-MM-dd');
        console.log(this.mymodel);
        this.loadModels(this.mymodel.make_id);
        this.EditPOModal.show();
    };
    CommitPurchaseComponent.prototype.UpdateCPOModal = function (id, cpo_status) {
        this.updatemodel.id = id;
        this.updatemodel.cpo_status = cpo_status;
        console.log(this.updatemodel);
        this.UpdatePOModal.show();
    };
    CommitPurchaseComponent.prototype.UpdateCPOPost = function () {
        var _this = this;
        this.updatemodel['updated_by'] = localStorage.getItem('UserId');
        console.log(this.updatemodel);
        if (!this.updatemodel.comment) {
            this.alertify.error('Enter Comment');
            return;
        }
        document.getElementById('editingrequest').innerHTML = '<i class="fa fa-circle-o-notch mt-1 fa-lg fa-spin"></i> Sending...';
        document.getElementById('editingrequest').disabled = true;
        this.requirementservice.UpdateCPOPost(this.updatemodel).subscribe(function (poorders) {
            _this.loadPurchaseOrders();
            _this.mymodel = {};
            document.getElementById('editingrequest').innerHTML = 'Submit';
            document.getElementById('editingrequest').disabled = false;
            _this.UpdatePOModal.hide();
            _this.alertify.success('CPO EDITED Successfully');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CommitPurchaseComponent.prototype.EditPurchaseOrderPost = function () {
        var _this = this;
        this.mymodel['updated_by'] = localStorage.getItem('UserId');
        if (!this.mymodel.cpo_num) {
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
        if (!this.mymodel.cpo_qty) {
            this.alertify.error('Enter Qty');
            return;
        }
        if (!this.mymodel.cpo_price) {
            this.alertify.error('Enter Price');
            return;
        }
        if (!this.mymodel.s_name) {
            this.alertify.error('Enter Supplier Name');
            return;
        }
        if (!this.mymodel.cpo_eta) {
            this.alertify.error('Select Expected Delivery Date');
            return;
        }
        if (!this.mymodel.comment) {
            this.alertify.error('Enter Comment');
            return;
        }
        document.getElementById('editingrequest').innerHTML = '<i class="fa fa-circle-o-notch mt-1 fa-lg fa-spin"></i> Sending...';
        document.getElementById('editingrequest').disabled = true;
        this.requirementservice.EditCommitPurchaseOrderPost(this.mymodel).subscribe(function (poorders) {
            _this.loadPurchaseOrders();
            _this.mymodel = {};
            document.getElementById('editingrequest').innerHTML = 'Submit';
            document.getElementById('editingrequest').disabled = false;
            _this.EditPOModal.hide();
            _this.alertify.success('CPO EDITED Successfully');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CommitPurchaseComponent.prototype.activateModel = function (event, type) {
        var _this = this;
        if (event.target.checked === false) {
            event.target.checked = true;
        }
        return this.requirementservice.getCommitPurchaseOrders().subscribe(function (poorders) {
            if (type === 2) {
                _this.check1 = false;
                _this.check2 = false;
                _this.check3 = true;
                _this.poorders = poorders.filter(function (proj) { return (proj.cpo_status === 4); });
            }
            else if (type === 1) {
                _this.check1 = false;
                _this.check2 = true;
                _this.check3 = false;
                _this.poorders = poorders.filter(function (proj) { return (proj.cpo_status !== 4); });
            }
            else {
                _this.check1 = true;
                _this.check2 = false;
                _this.check3 = false;
                _this.poorders = poorders;
            }
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
    CommitPurchaseComponent.ctorParameters = function () { return [
        { type: _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_5__["LoadspecsService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"] },
        { type: _services_requirement_service__WEBPACK_IMPORTED_MODULE_7__["RequirementService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('infoModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], CommitPurchaseComponent.prototype, "infoModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('EditPOModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], CommitPurchaseComponent.prototype, "EditPOModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('UpdatePOModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], CommitPurchaseComponent.prototype, "UpdatePOModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('CPLDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], CommitPurchaseComponent.prototype, "CPLDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], CommitPurchaseComponent.prototype, "dtElement", void 0);
    CommitPurchaseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-commit-purchase',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./commit-purchase.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/commit-purchase/commit-purchase.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./commit-purchase.component.css */ "./src/app/views/commit-purchase/commit-purchase.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_loadspecs_service__WEBPACK_IMPORTED_MODULE_5__["LoadspecsService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"],
            _services_requirement_service__WEBPACK_IMPORTED_MODULE_7__["RequirementService"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]])
    ], CommitPurchaseComponent);
    return CommitPurchaseComponent;
}());



/***/ }),

/***/ "./src/app/views/commit-purchase/commit-purchase.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/commit-purchase/commit-purchase.module.ts ***!
  \*****************************************************************/
/*! exports provided: CommitPurchaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitPurchaseModule", function() { return CommitPurchaseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _commit_purchase_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commit-purchase-routing.module */ "./src/app/views/commit-purchase/commit-purchase-routing.module.ts");
/* harmony import */ var _commit_purchase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commit-purchase.component */ "./src/app/views/commit-purchase/commit-purchase.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ng_select2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-select2 */ "./node_modules/ng-select2/fesm5/ng-select2.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var CommitPurchaseModule = /** @class */ (function () {
    function CommitPurchaseModule() {
    }
    CommitPurchaseModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_commit_purchase_component__WEBPACK_IMPORTED_MODULE_4__["CommitPurchaseComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _commit_purchase_routing_module__WEBPACK_IMPORTED_MODULE_3__["CommitPurchaseRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ng_select2__WEBPACK_IMPORTED_MODULE_6__["NgSelect2Module"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"]
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
            ]
        })
    ], CommitPurchaseModule);
    return CommitPurchaseModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-commit-purchase-commit-purchase-module.js.map