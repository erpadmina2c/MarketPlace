(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-commit-purchase-commit-purchase-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/commit-purchase/commit-purchase.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/commit-purchase/commit-purchase.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\n    <!-- Button trigger modal -->\n    <button type=\"button\" class=\"btn btn-info mr-1\" data-toggle=\"modal\" (click)=\"infoModal.show()\">\n        Add PO\n      </button>\n  </div>\n  <div bsModal #infoModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 47%;\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"sendPurchaseOrderPost()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add Purchase Order</h4>\n          <button type=\"button\" class=\"close\" (click)=\"infoModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body row\">\n              <div class=\"col-md-6\">              \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">\n                    <label class=\"col-md-4 col-form-label\">UAE PO</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <input type=\"text\" id=\"po_num\" name=\"po_num\" [(ngModel)]=\"model.po_num\"  class=\"form-control\" placeholder=\"Enter UAE PO Number\">\n                    </div>                  \n                  </div>\n                </div>                 \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">\n                    <label class=\"col-md-4 col-form-label\">UK PO</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <input type=\"text\" id=\"uk_po_num\" name=\"uk_po_num\" [(ngModel)]=\"model.uk_po_num\"  class=\"form-control\" placeholder=\"Enter UK PO Number\">\n                    </div>                  \n                  </div>\n                </div>          \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">\n                    <label class=\"col-md-4 col-form-label\">Make</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <ng-select2 [data]=\"makes\" [width]=\"250\"  name=\"make_id\"  [(ngModel)]=\"model.make_id\" (ngModelChange)=\"loadModels($event)\"></ng-select2>                                                                           \n                    </div>                  \n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <div class=\"input-group\">\n                    <label class=\"col-md-4 col-form-label\">Model</label>  \n                    <div class=\"col-md-8 col-form-label\"> \n                      <ng-select2 [data]=\"models\"  [width]=\"250\" name=\"model_id\"  [(ngModel)]=\"model.model_id\"></ng-select2> </div> \n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <div class=\"input-group\">\n                    <label class=\"col-md-4 col-form-label\">Processor</label>    \n                    <div class=\"col-md-8 col-form-label\">\n                      <ng-select2 [data]=\"processors\"  [width]=\"250\" name=\"proc_id\"  [(ngModel)]=\"model.proc_id\"></ng-select2>  </div> \n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Supplier</label>\n                  <div class=\"col-md-8 col-form-label\">                    \n                    <input type=\"text\" id=\"s_name\" name=\"s_name\" [(ngModel)]=\"model.s_name\"  class=\"form-control\" placeholder=\"Supplier Name\">\n                  </div>\n                </div> \n              </div>            \n              <div class=\"col-md-6\">    \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">Qty</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <input type=\"number\" id=\"cpo_qty\" name=\"cpo_qty\" [(ngModel)]=\"model.cpo_qty\"  class=\"form-control\" placeholder=\"Qty\"></div>\n                  </div>\n                </div>              \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">Price</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <input type=\"number\" id=\"cpo_price\" name=\"cpo_price\" [(ngModel)]=\"model.cpo_price\"  class=\"form-control\" placeholder=\"Price\"></div>\n                  </div>\n                </div>      \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">ETA<span style=\"color: red;\">*</span></label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <input class=\"form-control\" id=\"date-input\" type=\"date\" name=\"cpo_eta\" [(ngModel)]=\"model.cpo_eta\" placeholder=\"date\">\n                    </div>\n                  </div>\n                </div>         \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">PED<span style=\"color: red;\">**</span></label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <input class=\"form-control\" id=\"date-input\" type=\"date\" name=\"cpo_ped\" [(ngModel)]=\"model.cpo_ped\" placeholder=\"date\">\n                    </div>\n                  </div>\n                </div>          \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">Comment</label>\n                    <div class=\"col-md-8 col-form-label\">                \n                      <textarea class=\"form-control\" name=\"comment\" [(ngModel)]=\"model.comment\" id=\"Comment\" placeholder=\"Comment\" rows=\"3\"></textarea>\n                    </div>\n                  </div>\n                </div>  \n              </div> \n            </div>\n          </div>\n          <span style=\"color: red;float: right;\">*<span style=\"color:black;font-style:italic;font-family:system-ui;font-weight: 500;\"> Expected Delivery Date</span></span><br>\n          <span style=\"color: red;float: right;\">**<span style=\"color:black;font-style:italic;font-family:system-ui;font-weight: 500;\"> Payment Expected Date</span></span>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"infoModal.hide()\">Close</button>        \n          <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"postingrequest\">Submit</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <div bsModal #UpdatePOModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"UpdateCPOPost()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header bgcolor_{{updatemodel.cpo_status}}\">\n          <h4 class=\"modal-title\">Mark PO as\n            <span *ngIf=\"updatemodel.cpo_status == 3\">Confirmed</span>\n            <span *ngIf=\"updatemodel.cpo_status == 5\">Cancelled</span></h4>\n          <button type=\"button\" class=\"close\" (click)=\"UpdatePOModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body row\">           \n              <div class=\"col-md-12\">             \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">Comment</label>\n                    <div class=\"col-md-8 col-form-label\">                \n                      <textarea class=\"form-control\" name=\"comment\" [(ngModel)]=\"updatemodel.comment\" id=\"Comment\" placeholder=\"Comment\" rows=\"3\"></textarea>\n                    </div>\n                  </div>\n                </div>  \n              </div> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"UpdatePOModal.hide()\">Close</button>        \n          <button *ngIf=\"updatemodel.cpo_status !== 6\" type=\"submit\" class=\"btn btn-sm btn-success\" id=\"postingrequest\">Confirm</button>\n          <button *ngIf=\"updatemodel.cpo_status == 6\" type=\"submit\" class=\"btn btn-sm btn-danger\" id=\"postingrequest\">Cancel</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal --><div bsModal #RecievePO=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"ReceiveCPOPost()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Mark PO as Received</h4>\n          <button type=\"button\" class=\"close\" (click)=\"RecievePO.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body row\">           \n              <div class=\"col-md-12\">             \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">Receive Date</label>\n                    <div class=\"col-md-8 col-form-label\">                \n                      <input class=\"form-control\" id=\"date-input\" type=\"date\" name=\"receive_date\" [(ngModel)]=\"updatemodel.receive_date\" placeholder=\"date\">\n                    </div>\n                  </div>\n                </div>  \n              </div> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"RecievePO.hide()\">Close</button>        \n          <button type=\"submit\" class=\"btn btn-sm btn-success\">Update</button>\n         </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <div bsModal #EditPOModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 47%;\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"EditPurchaseOrderPost()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Edit Purchase Order</h4>\n          <button type=\"button\" class=\"close\" (click)=\"EditPOModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body row\">\n              <div class=\"col-md-6\">            \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">UAE PO</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <input type=\"text\" id=\"po_num\" name=\"po_num\" [(ngModel)]=\"mymodel.po_num\"  class=\"form-control\" placeholder=\"Purchase Order Number\"></div>\n                  </div>\n                </div>             \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">UK PO</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <input type=\"text\" id=\"uk_po_num\" name=\"uk_po_num\" [(ngModel)]=\"mymodel.uk_po_num\"  class=\"form-control\" placeholder=\"Purchase Order Number\"></div>\n                  </div>\n                </div>           \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">\n                    <label class=\"col-md-4 col-form-label\">Make</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <ng-select2 [data]=\"makes\" [width]=\"200\" disabled=\"disabled\" name=\"make_id\"  [(ngModel)]=\"mymodel.make_id\" (ngModelChange)=\"loadModels($event)\"></ng-select2>                                                                           \n                    </div>                  \n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <div class=\"input-group\">\n                    <label class=\"col-md-4 col-form-label\">Model</label>  \n                    <div class=\"col-md-8 col-form-label\"> \n                      <ng-select2 [data]=\"models\"  [width]=\"200\" disabled=\"disabled\" name=\"model_id\"  [(ngModel)]=\"mymodel.model_id\"></ng-select2> </div> \n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <div class=\"input-group\">\n                    <label class=\"col-md-4 col-form-label\">Processor</label>    \n                    <div class=\"col-md-8 col-form-label\">\n                      <ng-select2 [data]=\"processors\"  [width]=\"200\" disabled=\"disabled\" name=\"proc_id\"  [(ngModel)]=\"mymodel.proc_id\"></ng-select2>  </div> \n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Supplier</label>\n                  <div class=\"col-md-8 col-form-label\">                    \n                    <input type=\"text\" id=\"s_name\" name=\"s_name\" [(ngModel)]=\"mymodel.s_name\"  class=\"form-control\" placeholder=\"Supplier Name\">\n                  </div>\n                </div> \n              </div>            \n              <div class=\"col-md-6\">   \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">Qty</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <input type=\"number\" id=\"cpo_qty\" name=\"cpo_qty\" [(ngModel)]=\"mymodel.cpo_qty\"  class=\"form-control\" placeholder=\"Qty\"></div>\n                  </div>\n                </div>              \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">Price</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <input type=\"number\" id=\"cpo_price\" name=\"cpo_price\" [(ngModel)]=\"mymodel.cpo_price\"  class=\"form-control\" placeholder=\"Price\"></div>\n                  </div>\n                </div>         \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">ETA</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <input class=\"form-control\" id=\"date-input\" type=\"date\" name=\"cpo_eta\" [(ngModel)]=\"mymodel.cpo_eta\" placeholder=\"date\">\n                    </div>\n                  </div>\n                </div>         \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">PED</label>\n                    <div class=\"col-md-8 col-form-label\">\n                      <input class=\"form-control\" id=\"date-input\" type=\"date\" name=\"cpo_ped\" [(ngModel)]=\"mymodel.cpo_ped\" placeholder=\"date\">\n                    </div>\n                  </div>\n                </div> \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">Comment</label>\n                    <div class=\"col-md-8 col-form-label\">                \n                      <textarea class=\"form-control\" name=\"comment\" [(ngModel)]=\"mymodel.comment\" id=\"Comment\" placeholder=\"Comment\" rows=\"3\"></textarea>\n                    </div>\n                  </div>\n                </div>  \n              </div> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"EditPOModal.hide()\">Close</button>        \n          <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"editingrequest\">Update</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <!--/.card-->\n  <!--/.card-->\n  <div class=\"row\" *ngIf=\"roleid !== 5\">\n    <div class=\"col-md-12\">\n      <form name=\"demo\">\n      <div  class=\"row\" style=\"background: #062736;margin-right:0px;margin-left:0px;padding-top: 8px;\">        \n        <span  class=\"col-2 row\">\n          <div class=\"col-8\" style=\"color: #08ab9e;\">\n            All PO\n          </div>\n          <label class=\"switch switch-label switch-outline-success-alt col-4\">\n            <input type=\"checkbox\" class=\"switch-input\" name=\"order\" [checked]='check1' (click)=\"activateModel($event,0)\">\n            <span class=\"switch-slider\" data-checked=\"✓\" data-unchecked=\"✕\"></span>\n          </label>\n        </span>\n        <span  class=\"col-2 row\">\n          <div class=\"col-8\" style=\"color: #08ab9e;\">\n            In-Discussion PO\n          </div>\n          <label class=\"switch switch-label switch-outline-success-alt col-4\">\n            <input type=\"checkbox\" class=\"switch-input\" name=\"order1\" [checked]='check2' (click)=\"activateModel($event,1)\">\n            <span class=\"switch-slider\" data-checked=\"✓\" data-unchecked=\"✕\"></span>\n          </label>\n        </span>      \n        <span  class=\"col-2 row\">\n          <div class=\"col-7\"  style=\"color: #08ab9e;\">\n            In-Transit PO\n          </div>\n          <label class=\"switch switch-label switch-outline-success-alt col-4\">\n            <input type=\"checkbox\" class=\"switch-input\" name=\"order2\" [checked]='check3' (click)=\"activateModel($event,3)\">\n            <span class=\"switch-slider\" data-checked=\"✓\" data-unchecked=\"✕\"></span>\n          </label>\n        </span>    \n        <span  class=\"col-2 row\">\n          <div class=\"col-7\"  style=\"color: #08ab9e;\">\n            Received PO\n          </div>\n          <label class=\"switch switch-label switch-outline-success-alt col-4\">\n            <input type=\"checkbox\" class=\"switch-input\" name=\"order2\" [checked]='check4' (click)=\"activateModel($event,4)\">\n            <span class=\"switch-slider\" data-checked=\"✓\" data-unchecked=\"✕\"></span>\n          </label>\n        </span> \n      </div>\n    </form>\n      <div class=\"card\">\n        <div class=\"card-body table-responsive-sm\">\n          <br>\n          <table datatable [dtTrigger]=\"dtTrigger\" [dtOptions]=\"dtOptions\" class=\"table table-responsive-sm table-hover table-striped table-outline mb-0\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th class=\"text-center\" style=\"width: 100px;\">###</th>\n                <th class=\"text-center\" style=\"width: 6%;\">UAE_PO</th>\n                <th class=\"text-center\" style=\"width: 6%;\">UK/US_PO</th>\n                <th>Model</th>\n                <th>Processor</th>\n                <th>Qty</th>\n                <th>Price</th>\n                <th >Supplier</th>\n                <th style=\"width: 20%;\">Comment</th>\n                <th>ETA</th>\n                <th>Status</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let poorder of poorders; let i = index\"  class=\"color_{{poorder.cpo_status}}\">\n                  <td class=\"text-center\">\n                    <span style=\"display: none;\">{{ poorder.id }}</span>\n                    <button style=\"position: absolute;\" type=\"submit\" class=\"btn btn-square btn-sm btn-secondary\" (click)=\"CheckDetails(poorder.id)\">\n                      <i class=\"fa fa-info \"></i>\n                    </button> \n                    <div class=\"avatar\" *ngIf=\"poorder.chat1 === 0\"></div>\n                    <div class=\"avatar\" *ngIf=\"poorder.chat1 === 1\">\n                      <i class=\"cui-speech icons font-2xl d-block\" title=\"Need More Info\" style=\"cursor: pointer;color: #21355C;font-weight: bold;\"  (click)=\"openChatModal(poorder.id)\"></i>\n                      <span *ngIf=\"poorder.chatCount > 0\">\n                        <span *ngIf=\"poorder.chatCount > poorder.chatviewcount\" class=\"avatar-status badge-success\" style=\" width: 22px; height: 24px; background: #de7575; right: -5px; top: -13px; \">{{ poorder.chatCount}}</span>\n                        <span *ngIf=\"poorder.chatCount <=  poorder.chatviewcount\" class=\"avatar-status badge-success\" style=\" width: 22px; height: 24px; background: green; right: -5px; top: -13px; \">{{ poorder.chatCount}}</span>\n                      </span> \n                    </div>\n                  </td>\n                  <td class=\"text-center\">\n                    {{ poorder.po_num}}\n                  </td>\n                  <td class=\"text-center\">\n                    {{ poorder.uk_po_num}}\n                  </td>\n                  <td>{{ poorder.model_name}}</td>\n                  <td>{{ poorder.proc_name}}</td>\n                  <td>{{ poorder.cpo_qty}}</td>\n                  <td>${{ poorder.cpo_price}}</td>\n                  <td>{{ poorder.s_name}}</td>\n                  <td>{{ poorder.comment}}</td>\n                  <td>{{poorder.cpo_eta | date:'MMM, d, y'}}</td>\n                  <td>\n                    <span *ngIf=\"poorder.cpo_status === 1\" style=\"color:#642bd2;font-weight:bold;\n                    font-style: italic;font-family:monospace;font-size: 1.1rem;\">In-Discussion</span>\n                    <span *ngIf=\"poorder.cpo_status === 3\" style=\"color:#804f1e;font-weight:bold;\n                    font-style: italic;font-family:monospace;font-size: 1.1rem;\">In-Transit</span>\n                    <span *ngIf=\"poorder.cpo_status === 4\" style=\"color:green;font-weight:bold;\n                    font-style: italic;font-family:monospace;font-size: 1.1rem;\">Received</span>\n                    <span *ngIf=\"poorder.cpo_status === 5\" style=\"color:red;font-weight:bold;\n                    font-style: italic;font-family:monospace;font-size: 1.1rem;\">CANCELLED</span>\n                  </td>\n                  <td>                     \n                    <button *ngIf=\"poorder.cpo_status !== 5\" type=\"submit\" class=\"btn btn-square btn-sm btn-info\" (click)=\"EditPO(poorder.id)\">\n                      <i class=\"fa fa fa-edit\"></i>\n                    </button>                 \n                    <!-- <button *ngIf=\"poorder.cpo_status === 1\" type=\"submit\" class=\"btn btn-square btn-sm btn-info\" (click)=\"UpdateCPOModal(poorder.id,3)\">\n                      <i class=\"fa fa-dot-circle-o\"></i> In-discussion\n                    </button>                  -->\n                    <button *ngIf=\"poorder.cpo_status === 1 && poorder.cpo_status !== 5\" type=\"submit\" class=\"btn btn-square btn-sm btn-success\" (click)=\"UpdateCPOModal(poorder.id,3)\">\n                      <i class=\"fa fa-check-square-o\"></i>\n                    </button>                  \n                    <button *ngIf=\"poorder.cpo_status === 3 && poorder.cpo_status !== 5\" type=\"submit\" class=\"btn btn-square btn-sm btn-dark\" (click)=\"ReceiveCPOModal(poorder.id,4)\">\n                      <i class=\"fa fa-arrow-circle-down\"></i>\n                    </button>              \n                    <button *ngIf=\"poorder.cpo_status !== 4 && poorder.cpo_status !== 5\" type=\"submit\" class=\"btn btn-square btn-sm btn-danger\" (click)=\"UpdateCPOModal(poorder.id,5)\">\n                      <i class=\"fa fa-times-rectangle-o\"></i>\n                    </button>                     \n                  </td>\n                  \n                </tr>\n              </tbody>\n          </table>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div bsModal #CPLDetails=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 1250px;\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">PO Detail</h4>\n          <button type=\"button\" class=\"close\" (click)=\"CPLDetails.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body row\">           \n              <table class=\"table table-responsive-sm table-hover table-striped table-outline mb-0\">\n                <thead class=\"thead-light\">\n                  <tr>\n                    <th class=\"text-center\">UAE PO</th>\n                    <th class=\"text-center\">UK PO</th>\n                    <th>Qty</th>\n                    <th>Price</th>\n                    <th>ReceiveDate</th>\n                    <th>ETA</th>\n                    <th>PaymentDate</th>\n                    <th style=\"width:15%;\">Comment</th>\n                    <th>Updated By</th>\n                    <th>Updated Date</th>\n                    <th style=\"background:#0000ff36;\">Action</th>\n                  </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let cplorderdetail of cplorderdetails; let i = index\">\n                      <td>{{ cplorderdetail.po_num}}</td>\n                      <td>{{ cplorderdetail.uk_po_num}}</td>\n                      <td>{{ cplorderdetail.cpol_qty}}</td>\n                      <td>${{ cplorderdetail.cpol_price}}</td>\n                      <td>{{ cplorderdetail.receive_date | date:'MMM d, y'}}</td>\n                      <td>{{ cplorderdetail.cpo_eta | date:'MMM d, y'}}</td>\n                      <td>{{ cplorderdetail.cpo_ped | date:'MMM d, y'}}</td>\n                      <td>{{ cplorderdetail.cpol_comment}}</td>\n                      <td>{{ cplorderdetail.cpol_username}}</td>\n                      <td>{{cplorderdetail.cpol_created_at | date:'MMM d, y'}}</td>\n                      <td style=\"background:#0000ff36;\">{{ cplorderdetail.cpol_flag}}</td>                 \n                    </tr>\n                  </tbody>\n              </table> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"CPLDetails.hide()\">Close</button> \n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <div *ngIf=\"roleid === 5\">\n    <div class=\"app flex-row align-items-center\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-6\">\n            <div class=\"clearfix\">\n              <h1 class=\"float-left display-3 mr-4\">404</h1>\n              <h4 class=\"pt-3\">Oops! You're lost.</h4>\n              <p class=\"text-muted\">The page you are looking for was not found.</p>\n            </div>\n            <div class=\"input-prepend input-group\">\n              <div class=\"input-group-prepend\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>  \n  </div>\n  <div bsModal #ChatModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 47%;\">  \n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">ChatBox</h4>\n          <button type=\"button\" class=\"close\" (click)=\"ChatModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div *ngFor=\"let chat of chats\">\n          <div *ngIf=\"chat.u_Id !== userid \" class=\"card\" style=\"width: 86%;background: #80808057;border-radius: 27px;\"> \n            <div class=\"row\"><div class=\"col-md-2\">\n              <img class=\"img-circle\" style=\"width: 100%;padding: 6px;\" src=\"assets/images/User.png\"></div>\n              <div class=\"col-md-10\">\n                <h5 style=\"margin: 6px 0px;border-bottom: 1px solid #bdb2b263\">{{ chat.userName}}</h5>\n                <p>{{ chat.text}}</p>\n              <p><small>{{ chat.createdDate | date:'MMM d, h:mm a'}}</small></p></div></div>\n            </div>\n           <div *ngIf=\"chat.u_Id === userid\" class=\"card\"  style=\"width: 86%;background: #80808057;border-radius: 27px;float:right;\"> \n            <div class=\"row\">\n              <div class=\"col-md-10\">\n                <h5 style=\"text-align:right;margin: 6px 0px;border-bottom: 1px solid #bdb2b263\">{{ chat.userName}}</h5>\n                <p style=\"padding-left:20px;\">{{ chat.text}}</p>\n                <p style=\"text-align:right;\"><small>{{ chat.createdDate | date:'h:mm a'}}</small></p>\n              </div>\n              <div class=\"col-md-2\">\n                <img class=\"img-circle\" style=\"width: 100%;padding: 6px;\" src=\"assets/images/User.png\">\n              </div>\n            </div>\n            </div>\n          </div>\n        </div>\n        <form  #requestForm=\"ngForm\" (ngSubmit)=\"sendMessagePost()\">\n          <div class=\"modal-footer\">\n            <input type=\"hidden\"  name=\"Ref_Id\" [(ngModel)]=\"model.Ref_Id\">\n            <textarea name=\"\"   name=\"Text\" [(ngModel)]=\"model.Text\" cols=\"95\" rows=\"2\"></textarea>       \n            <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"SendSMS\">Send</button>\n          </div>\n      </form>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->");

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
/* harmony default export */ __webpack_exports__["default"] = (".bgcolor_5 {\r\n    background: #f86c6b!important;\r\n}\r\n.bgcolor_3 {\r\n    background: #4dbd74!important;\r\n}\r\n.avatar {\r\n    left: 24%;\r\n}\r\n.color_4 {\r\n    background: #23a5454a!important;\r\n}\r\n.color_3 {\r\n    background: #23a5454a!important;\r\n}\r\n.color_5 {\r\n    background: #f86c6b3b!important\r\n}\r\nbutton {\r\n    background-color: #08ab9e;\r\n    border: #0b8076;\r\n    color: #fff;\r\n}\r\n.close {\r\n    background: transparent!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29tbWl0LXB1cmNoYXNlL2NvbW1pdC1wdXJjaGFzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsV0FBVztBQUNmO0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckMiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9jb21taXQtcHVyY2hhc2UvY29tbWl0LXB1cmNoYXNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdjb2xvcl81IHtcclxuICAgIGJhY2tncm91bmQ6ICNmODZjNmIhaW1wb3J0YW50O1xyXG59XHJcbi5iZ2NvbG9yXzMge1xyXG4gICAgYmFja2dyb3VuZDogIzRkYmQ3NCFpbXBvcnRhbnQ7XHJcbn1cclxuLmF2YXRhciB7XHJcbiAgICBsZWZ0OiAyNCU7XHJcbn1cclxuLmNvbG9yXzQge1xyXG4gICAgYmFja2dyb3VuZDogIzIzYTU0NTRhIWltcG9ydGFudDtcclxufVxyXG4uY29sb3JfMyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjNhNTQ1NGEhaW1wb3J0YW50O1xyXG59XHJcbi5jb2xvcl81IHtcclxuICAgIGJhY2tncm91bmQ6ICNmODZjNmIzYiFpbXBvcnRhbnRcclxufVxyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4YWI5ZTtcclxuICAgIGJvcmRlcjogIzBiODA3NjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5jbG9zZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

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
        this.chatmodel = {};
        this.roleid = Number(localStorage.getItem('RoleID'));
        this.userid = Number(localStorage.getItem('UserId'));
        this.filter1 = {};
        this.filter2 = {};
        this.filter3 = {};
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 25,
            retrieve: true,
            order: [[0, 'desc']],
            dom: 'lBfrtip',
            buttons: [
                {
                    extend: 'excel',
                    title: 'Data export',
                    exportOptions: {
                        columns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                    }
                },
                {
                    extend: 'csv',
                    title: 'Order_Data',
                    exportOptions: {
                        columns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                    }
                }
            ]
        };
        this.isDtInitialized = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    CommitPurchaseComponent.prototype.ngOnInit = function () {
        this.check1 = true;
        this.check2 = false;
        this.check3 = false;
        this.check4 = false;
        this.filter1 = 0;
        this.filter2 = 0;
        this.filter3 = 0;
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
            console.log('ji');
            console.log(_this.filter1 + ' ' + _this.filter2 + ' ' + _this.filter3);
            console.log('ki');
            if (_this.filter1 === 1 || _this.filter2 === 3 || _this.filter2 === 4) {
                console.log('1');
                _this.poorders = poorders.filter(function (proj) { return (proj.cpo_status === _this.filter1 || proj.cpo_status === _this.filter2
                    || proj.cpo_status === _this.filter3); });
            }
            else {
                console.log('2');
                _this.poorders = poorders;
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
        if (!this.model.cpo_ped) {
            this.alertify.error('Select Payment Expected Date');
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
        this.mymodel.cpo_ped = this.datepipe.transform(this.mymodel.cpo_ped, 'yyyy-MM-dd');
        this.mymodel.cpo_ped = this.datepipe.transform(this.mymodel.cpo_ped, 'yyyy-MM-dd');
        this.mymodel.comment = '';
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
    CommitPurchaseComponent.prototype.ReceiveCPOModal = function (id, cpo_status) {
        this.updatemodel.id = id;
        this.updatemodel.cpo_status = cpo_status;
        console.log(this.updatemodel);
        this.RecievePO.show();
    };
    CommitPurchaseComponent.prototype.UpdateCPOPost = function () {
        var _this = this;
        this.updatemodel['updated_by'] = localStorage.getItem('UserId');
        console.log(this.updatemodel);
        if (!this.updatemodel.comment) {
            this.alertify.error('Enter Comment');
            return;
        }
        this.requirementservice.UpdateCPOPost(this.updatemodel).subscribe(function (poorders) {
            _this.loadPurchaseOrders();
            _this.updatemodel = {};
            _this.UpdatePOModal.hide();
            _this.alertify.success('PO EDITED Successfully');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CommitPurchaseComponent.prototype.ReceiveCPOPost = function () {
        var _this = this;
        this.updatemodel['updated_by'] = localStorage.getItem('UserId');
        if (!this.updatemodel.receive_date) {
            this.alertify.error('Select Receiving Date');
            return;
        }
        this.requirementservice.ReceiveCPOPost(this.updatemodel).subscribe(function (poorders) {
            _this.loadPurchaseOrders();
            _this.updatemodel = {};
            _this.RecievePO.hide();
            _this.alertify.success('PO Received Successfully');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CommitPurchaseComponent.prototype.EditPurchaseOrderPost = function () {
        var _this = this;
        this.mymodel['updated_by'] = localStorage.getItem('UserId');
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
        if (this.mymodel.cpo_qty == null) {
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
        this.requirementservice.EditCommitPurchaseOrderPost(this.mymodel).subscribe(function (poorders) {
            _this.loadPurchaseOrders();
            _this.mymodel = {};
            _this.EditPOModal.hide();
            _this.alertify.success('CPO EDITED Successfully');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CommitPurchaseComponent.prototype.activateModel = function (event, type) {
        var _this = this;
        return this.requirementservice.getCommitPurchaseOrders().subscribe(function (poorders) {
            console.log(type);
            if (type === 0) {
                if (event.target.checked === true) {
                    _this.poorders = poorders;
                    _this.check1 = true;
                    _this.check2 = false;
                    _this.check3 = false;
                    _this.check4 = false;
                }
                else {
                    _this.poorders = poorders.filter(function (proj) { return (proj.cpo_status === 111); });
                    _this.check1 = false;
                    _this.check2 = false;
                    _this.check3 = false;
                    _this.check4 = false;
                }
            }
            if (type === 1) {
                _this.filter1 = type;
                _this.check1 = false;
                _this.check2 = true;
                if (event.target.checked === false) {
                    _this.filter1 = 0;
                    _this.check2 = false;
                }
                _this.poorders = poorders.filter(function (proj) { return (proj.cpo_status === _this.filter1 || proj.cpo_status === _this.filter2
                    || proj.cpo_status === _this.filter3); });
            }
            if (type === 3) {
                _this.filter2 = type;
                _this.check1 = false;
                _this.check3 = true;
                if (event.target.checked === false) {
                    _this.filter2 = 0;
                    _this.check3 = false;
                }
                _this.poorders = poorders.filter(function (proj) { return (proj.cpo_status === _this.filter1 || proj.cpo_status === _this.filter2
                    || proj.cpo_status === _this.filter3); });
            }
            if (type === 4) {
                _this.filter3 = type;
                _this.check1 = false;
                _this.check4 = true;
                if (event.target.checked === false) {
                    _this.filter3 = 0;
                    _this.check4 = false;
                }
                _this.poorders = poorders.filter(function (proj) { return (proj.cpo_status === _this.filter1 || proj.cpo_status === _this.filter2
                    || proj.cpo_status === _this.filter3); });
            }
            console.log(_this.filter1);
            console.log(_this.filter2);
            console.log(_this.filter3);
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
    CommitPurchaseComponent.prototype.openChatModal = function (id) {
        var _this = this;
        this.model.Ref_Id = id;
        this.chatmodel.ref_id = id;
        this.chatmodel.user_id = this.userid;
        this.chatmodel.type = 0;
        return this.requirementservice.ShortfallpoviewChats(this.chatmodel).subscribe(function (chats) {
            _this.chats = chats.filter(function (proj) { return (Number(proj.status) === 0 && proj.ref_Id === id); });
            console.log('s');
            console.log(_this.chats);
            _this.loadPurchaseOrders();
            _this.ChatModal.show();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CommitPurchaseComponent.prototype.sendMessagePost = function () {
        var _this = this;
        this.model.U_Id = Number(localStorage.getItem('UserId'));
        this.model.type = 0;
        if (!this.model.Text) {
            this.alertify.error('Enter Comment');
            return;
        }
        this.requirementservice.sendShortfalllPOChatPost(this.model).subscribe(function (chats) {
            _this.chats = chats.filter(function (proj) { return (Number(proj.status) === 0 && proj.ref_Id === _this.model.Ref_Id); });
            _this.loadPurchaseOrders();
            _this.model.Text = '';
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('RecievePO'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], CommitPurchaseComponent.prototype, "RecievePO", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('CPLDetails'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], CommitPurchaseComponent.prototype, "CPLDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ChatModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], CommitPurchaseComponent.prototype, "ChatModal", void 0);
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