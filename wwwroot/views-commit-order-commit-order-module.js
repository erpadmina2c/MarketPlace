(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-commit-order-commit-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/commit-order/commit-order.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/commit-order/commit-order.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\n    <!-- Button trigger modal -->\n    <button type=\"button\" class=\"btn btn-info mr-1\" data-toggle=\"modal\" (click)=\"infoModal.show()\">\n        Add Order\n      </button>\n  </div>\n  <div bsModal #infoModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\"  style=\"max-width: 749px;\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"addOrder()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add Order</h4>\n          <button type=\"button\" class=\"close\" (click)=\"infoModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body row\">\n              <div class=\"col-md-6\">  \n                <div class=\"form-group row\">   \n                  <label class=\"col-md-4 col-form-label\">Order Number</label>\n                  <div class=\"col-md-8 col-form-label\">                 \n                    <input type=\"text\" id=\"o_num\" name=\"o_num\" [(ngModel)]=\"model.o_num\"  class=\"form-control\" placeholder=\"Order Number\">\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Make</label>\n                  <div class=\"col-md-8 col-form-label\">\n                     <ng-select2 [data]=\"makes\" [width]=\"200\"  name=\"make_id\"  [(ngModel)]=\"model.make_id\" (ngModelChange)=\"loadModels($event)\"></ng-select2>                                         \n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Model</label>  \n                  <div class=\"col-md-8 col-form-label\">  \n                    <ng-select2 [data]=\"models\"  [width]=\"200\" name=\"model_id\"  [(ngModel)]=\"model.model_id\"></ng-select2>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Processor</label> \n                  <div class=\"col-md-8 col-form-label\">\n                    <ng-select2 [data]=\"processors\"  [width]=\"200\" name=\"proc_id\"  [(ngModel)]=\"model.proc_id\"></ng-select2> \n                  </div>\n                </div>  \n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Type</label> \n                  <div class=\"col-md-8 col-form-label\">   \n                    <select width=\"200\" name=\"req_type\"  [(ngModel)]=\"model.o_type\" style=\"width:200px;height:28px;\">\n                      <option value=\"0\">Select Type</option>\n                      <option value=\"1\">Reman</option>\n                      <option value=\"2\">Refurb</option>\n                      <option value=\"3\">Silver</option>\n                      <option value=\"4\">Filter Stock</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">  \n                <div class=\"form-group row\">   \n                  <label class=\"col-md-4 col-form-label\">Qty</label>\n                  <div class=\"col-md-8 col-form-label\">                 \n                    <input type=\"number\" id=\"o_qty\" name=\"o_qty\" [(ngModel)]=\"model.co_qty\"  class=\"form-control\" placeholder=\"Qty\">\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-4 col-form-label\">Customer</label>\n                  <div class=\"col-md-8 col-form-label\">                    \n                    <input type=\"text\" id=\"c_name\" name=\"c_name\" [(ngModel)]=\"model.c_name\"  class=\"form-control\" placeholder=\"Customer Name\">\n                  </div>\n                </div>  \n                <div class=\"form-group row\">   \n                  <label class=\"col-md-4 col-form-label\">EDD</label>\n                  <div class=\"col-md-8 col-form-label\">                 \n                    <input class=\"form-control\" id=\"date-input\" type=\"date\" name=\"co_edd\" [(ngModel)]=\"model.co_edd\" placeholder=\"date\">\n                  </div>\n                </div>\n                <div class=\"form-group row\">   \n                  <label class=\"col-md-4 col-form-label\">Comment</label>\n                  <div class=\"col-md-8 col-form-label\">                 \n                    <textarea type=\"text\" id=\"comment\" name=\"comment\" [(ngModel)]=\"model.comment\"  class=\"form-control\" placeholder=\"comment \"></textarea>\n                  </div>\n                </div>\n              </div> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"infoModal.hide()\">Close</button>        \n          <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"postingrequest\">Submit</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <div bsModal #editOrder=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"EditOrderPost()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Edit Order</h4>\n          <button type=\"button\" class=\"close\" (click)=\"editOrder.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n          <div class=\"card-body row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group row\">   \n                <label class=\"col-md-4 col-form-label\">Order Number</label>\n                <div class=\"col-md-8 col-form-label\">                 \n                  <input type=\"text\" id=\"o_num\" name=\"o_num\" [(ngModel)]=\"editmodel.o_num\"  class=\"form-control\" placeholder=\"Order Number\">\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-4 col-form-label\">Make</label>\n                <div class=\"col-md-8 col-form-label\">\n                   <ng-select2 [data]=\"makes\" [width]=\"200\"  name=\"make_id\" disabled=\"disabled\" [(ngModel)]=\"editmodel.make_id\"></ng-select2>                                         \n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-4 col-form-label\">Model</label>  \n                <div class=\"col-md-8 col-form-label\">  \n                  <ng-select2 [data]=\"models\"  [width]=\"200\" name=\"model_id\" disabled=\"disabled\" [(ngModel)]=\"editmodel.model_id\"></ng-select2>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-4 col-form-label\">Processor</label> \n                <div class=\"col-md-8 col-form-label\">\n                  <ng-select2 [data]=\"processors\"  [width]=\"200\" name=\"proc_id\" disabled=\"disabled\"  [(ngModel)]=\"editmodel.proc_id\"></ng-select2> \n                </div>\n              </div> \n              <div class=\"form-group row\">\n                <label class=\"col-md-4 col-form-label\">Type</label> \n                <div class=\"col-md-8 col-form-label\">   \n                  <select width=\"200\" name=\"req_type\"  [(ngModel)]=\"editmodel.o_type\" style=\"width:200px;height:28px;\">\n                    <option value=\"0\">Select Type</option>\n                    <option value=\"1\">Reman</option>\n                    <option value=\"2\">Refurb</option>\n                    <option value=\"3\">Silver</option>\n                    <option value=\"4\">Filter Stock</option>\n                  </select>\n                </div>\n              </div> \n            </div>\n            <div class=\"col-md-6\">  \n              <div class=\"form-group row\">   \n                <label class=\"col-md-4 col-form-label\">Qty</label>\n                <div class=\"col-md-8 col-form-label\">                 \n                  <input type=\"number\" id=\"o_qty\" name=\"o_qty\" [(ngModel)]=\"editmodel.co_qty\"  class=\"form-control\" placeholder=\"Qty\">\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-4 col-form-label\">Customer</label>\n                <div class=\"col-md-8 col-form-label\">                    \n                  <input type=\"text\" id=\"c_name\" name=\"c_name\" [(ngModel)]=\"editmodel.c_name\"  class=\"form-control\" placeholder=\"Customer Name\">\n                </div>\n              </div>  \n              <div class=\"form-group row\">   \n                <label class=\"col-md-4 col-form-label\">EDD</label>\n                <div class=\"col-md-8 col-form-label\">                 \n                  <input class=\"form-control\" id=\"date-input\" type=\"date\" name=\"co_edd\" [(ngModel)]=\"editmodel.co_edd\" placeholder=\"date\">\n                </div>\n              </div>\n              <div class=\"form-group row\">   \n                <label class=\"col-md-4 col-form-label\">Comment</label>\n                <div class=\"col-md-8 col-form-label\">                 \n                  <textarea type=\"text\" id=\"comment\" name=\"comment\" [(ngModel)]=\"editmodel.comment\"  class=\"form-control\" placeholder=\"comment \"></textarea>\n                </div>\n              </div>\n            </div> \n          </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"editOrder.hide()\">Close</button>        \n          <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"postingrequest\">Update</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n\n  <!--/.card-->\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form name=\"demo\">\n      <div  class=\"row\" style=\"background: #21355C;margin-right:0px;margin-left:0px;padding-top: 8px;\">       \n        <span  class=\"col-2 row\" style=\"margin-right:0px;margin-left:0px;\">\n          <div class=\"col-8\" style=\"color: #FFF;padding: 0px;\">\n            All Order\n          </div>\n          <label class=\"switch switch-label switch-outline-success-alt col-3\" style=\"padding: 0px;\">\n            <input type=\"checkbox\" class=\"switch-input\" name=\"order1\" [checked]='check1' (click)=\"activateModel($event,0)\">\n            <span class=\"switch-slider\" data-checked=\"✓\" data-unchecked=\"✕\"></span>\n          </label>\n        </span>\n        <span  class=\"col-2 row\" style=\"margin-right:0px;margin-left:0px;\">\n          <div class=\"col-8\" style=\"color: #FFF;padding: 0px;\">\n            In-Discussion Order\n          </div>\n          <label class=\"switch switch-label switch-outline-success-alt col-3\" style=\"padding: 0px;\">\n            <input type=\"checkbox\" class=\"switch-input\" name=\"order2\" [checked]='check2' (click)=\"activateModel($event,1)\">\n            <span class=\"switch-slider\" data-checked=\"✓\" data-unchecked=\"✕\"></span>\n          </label>\n        </span>      \n        <span  class=\"col-2 row\" style=\"margin-right:0px;margin-left:0px;\">\n          <div class=\"col-7\"  style=\"color: #FFF;padding: 0px;\">\n            Confirmed Order\n          </div>\n          <label class=\"switch switch-label switch-outline-success-alt col-3\" style=\"padding: 0px;\">\n            <input type=\"checkbox\" class=\"switch-input\" name=\"order3\" [checked]='check3' (click)=\"activateModel($event,3)\">\n            <span class=\"switch-slider\" data-checked=\"✓\" data-unchecked=\"✕\"></span>\n          </label>\n        </span>      \n        <span  class=\"col-2 row\" style=\"margin-right:0px;margin-left:0px;\"></span> \n        <span  class=\"col-2 row\" style=\"margin-right:0px;margin-left:0px;\"></span> \n        <span  class=\"col-1 row\" style=\"margin-right:0px;margin-left:0px;\">\n          <div class=\"col-6\"  style=\"color: #FFF;padding: 0px;\">\n            Booked\n          </div>\n          <label class=\"switch switch-label switch-outline-success-alt col-6\" style=\"padding: 0px;\">\n            <input type=\"checkbox\" class=\"switch-input\" name=\"order4\" [checked]='check4' (click)=\"activateModel($event,5)\">\n            <span class=\"switch-slider\" data-checked=\"✓\" data-unchecked=\"✕\"></span>\n          </label>\n        </span>\n        <span  class=\"col-1 row\" style=\"margin-right:0px;margin-left:0px;\">\n          <div class=\"col-6\"  style=\"color: #FFF;padding: 0px;\">\n            Closed\n          </div>\n          <label class=\"switch switch-label switch-outline-success-alt col-6\" style=\"padding: 0px;\">\n            <input type=\"checkbox\" class=\"switch-input\" name=\"order5\" [checked]='check5' (click)=\"activateModel($event,6)\">\n            <span class=\"switch-slider\" data-checked=\"✓\" data-unchecked=\"✕\"></span>\n          </label>\n        </span>\n        <!-- <span  class=\"col-2 row\" style=\"margin-right:0px;margin-left:0px;\">\n          <div class=\"col-5\"  style=\"color: #FFF;padding: 0px;\">\n            Closed Order\n          </div>\n          <label class=\"switch switch-label switch-outline-success-alt col-3\" style=\"padding: 0px;\">\n            <input type=\"checkbox\" class=\"switch-input\" name=\"order4\" [checked]='check4' (click)=\"activateModel($event,5)\">\n            <span class=\"switch-slider\" data-checked=\"✓\" data-unchecked=\"✕\"></span>\n          </label>\n        </span> -->\n      </div>\n    </form>\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <br>\n          <table datatable [dtTrigger]=\"dtTrigger\" [dtOptions]=\"dtOptions\" class=\"table table-responsive-sm table-striped table-hover table-outline mb-0\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th class=\"text-center\" style=\"width: 120px;\">###</th>\n                <th>OrderNo</th>\n                <th>Model</th>\n                <th>Processor</th>\n                <th>Qty</th>\n                <th>Customer Name</th>\n                <th>Type</th>\n                <th>EDD</th>\n                <th>EDDFull</th>\n                <th>Comment</th>\n                <th>Status</th>\n                <th>Action</th>\n                <th>Booking</th>\n                <th>Closing</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let order of orders; let i = index\" class=\"color_{{order.co_status}}\">\n                <td class=\"text-center\">\n                  <span style=\"display: none;\">{{ order.id }}</span>\n                  <button style=\"position: absolute;\" type=\"submit\" class=\"btn btn-square btn-sm btn-secondary\" (click)=\"CheckDetails(order.id)\">\n                    <i class=\"fa fa-info \"></i>\n                  </button> \n                  <div class=\"avatar\"  *ngIf=\"order.chat1 === 0 && order.chat2 === 0\"></div> \n                  <div class=\"avatar\" *ngIf=\"order.chat1 === 1\">\n                    <i class=\"cui-speech icons font-2xl d-block\" title=\"Need More Info\" style=\"cursor: pointer;color: #21355C;font-weight: bold;\"  (click)=\"openChatModal(order.id)\"></i>\n                    <span *ngIf=\"order.chatCount > 0\">\n                      <span *ngIf=\"order.chatCount > order.chatviewcount\" class=\"avatar-status badge-success\" style=\" width: 22px; height: 24px; background: #de7575; right: -5px; top: -13px; \">{{ order.chatCount}}</span>\n                      <span *ngIf=\"order.chatCount <=  order.chatviewcount\" class=\"avatar-status badge-success\" style=\" width: 22px; height: 24px; background: green; right: -5px; top: -13px; \">{{ order.chatCount}}</span>\n                    </span> \n                  </div>\n                  <div class=\"avatar\" *ngIf=\"order.chat2 === 1\">\n                    <i class=\"icon-envelope-letter icons font-2xl d-block xxx\" title=\"Need More Info\" style=\"cursor: pointer;color: #a94393;font-weight: bold;\"  (click)=\"openUserChatModal(order.id)\"></i>\n                    <span *ngIf=\"order.userchatCount > 0\">\n                      <span *ngIf=\"order.userchatCount > order.userchatviewcount\" class=\"avatar-status badge-success\" style=\" width: 22px; height: 24px; background: #de7575; right: -5px; top: -13px; \">{{ order.userchatCount}}</span>\n                      <span *ngIf=\"order.userchatCount <=  order.userchatviewcount\" class=\"avatar-status badge-success\" style=\" width: 22px; height: 24px; background: green; right: -5px; top: -13px; \">{{ order.userchatCount}}</span>\n                    </span> \n                  </div>\n                </td>\n                <td>{{ order.o_num}}</td>\n                <td>{{order.modelName}} </td>\n                <td>{{ order.processor}}</td>\n                <td>{{ order.co_qty}}</td>\n                <td>{{ order.c_name}}</td>\n                <td *ngIf=\"order.o_type === 0\">No Assigned</td>\n                <td *ngIf=\"order.o_type === 1\">Reman</td>\n                <td *ngIf=\"order.o_type === 2\">Refurb</td>\n                <td *ngIf=\"order.o_type === 3\">Silver</td>\n                <td *ngIf=\"order.o_type === 4\">Filter Stock</td>\n                <td>{{order.co_edd | date:'MMMM'}}</td>\n                <td>{{order.co_edd | date:'MMMM, d, y'}}</td>\n                <td>{{ order.comment}}</td>\n                <td>\n                  <span *ngIf=\"order.co_status === 1\" style=\"color:#642bd2;font-weight:bold;\n                  font-style: italic;font-family:monospace;font-size: 1.1rem;\">In-Discussion</span>\n                  <span *ngIf=\"order.co_status === 3\" style=\"color:green;font-weight:bold;\n                  font-style: italic;font-family:monospace;font-size: 1.1rem;\">CONFIRMED</span>\n                  <span *ngIf=\"order.co_status === 5\" style=\"color:red;font-weight:bold;\n                  font-style: italic;font-family:monospace;font-size: 1.1rem;\">CANCELLED</span>\n                </td>\n                <td>       \n                  <button *ngIf=\"order.co_status !== 5\" class=\"btn btn-square btn-sm btn-info\" (click)=\"EditOrder(order.id,order.co_edd)\" type=\"button\">\n                    <i class=\"fa fa fa-edit\"></i>\n                  </button>                \n                  <button *ngIf=\"order.co_status !== 3 && order.co_status !== 5\" type=\"submit\" class=\"btn btn-square btn-sm btn-success\" (click)=\"UpdateCPOModal(order.id,3)\">\n                    <i class=\"fa fa-check-square-o\"></i>\n                  </button>  \n                  <button *ngIf=\"order.co_status !== 3 && order.co_status !== 5\" type=\"submit\" class=\"btn btn-square btn-sm btn-danger\" (click)=\"UpdateCPOModal(order.id,5)\">\n                    <i class=\"fa fa-times-rectangle-o\"></i>\n                  </button>                 \n                </td>\n                <td>                  \n                  <button *ngIf=\"order.booked_status === 0 && order.co_status !== 5\" type=\"submit\" class=\"btn btn-square btn-sm btn-primary\" (click)=\"BookCPOModal(order.id,1)\">\n                    Book\n                  </button> \n                  <span *ngIf=\"order.booked_status === 1\" style=\"color:green;font-weight:bold;\n                  font-style: italic;font-family:monospace;font-size: 1.1rem;\">Booked</span>   \n                </td>\n                <td>                             \n                  <button *ngIf=\"order.close_status === 0 && order.co_status !== 5\" type=\"submit\" class=\"btn btn-square btn-sm btn-dark\" (click)=\"CloseCPOModal(order.id,1)\">\n                    Close\n                  </button> \n                  <span *ngIf=\"order.close_status === 1\" style=\"color:#c11616;font-weight:bold;\n                  font-style: italic;font-family:monospace;font-size: 1.1rem;\">Closed</span> \n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <!--/.col-->\n  <!-- <div *ngIf=\"roleid !== 1 &&  roleid !==9\">\n    <div class=\"app flex-row align-items-center\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-6\">\n            <div class=\"clearfix\">\n              <h1 class=\"float-left display-3 mr-4\">404</h1>\n              <h4 class=\"pt-3\">Oops! You're lost.</h4>\n              <p class=\"text-muted\">The page you are looking for was not found.</p>\n            </div>\n            <div class=\"input-prepend input-group\">\n              <div class=\"input-group-prepend\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>    \n  </div> -->\n\n  <div bsModal #UpdatePOModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"UpdateCOPost()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header bgcolor_{{updatemodel.co_status}}\">\n          <h4 class=\"modal-title\">Mark Order as\n            <span *ngIf=\"updatemodel.co_status == 3\">Confirmed</span>\n            <span *ngIf=\"updatemodel.co_status == 5\">Cancelled</span>\n          </h4>\n          <button type=\"button\" class=\"close\" (click)=\"UpdatePOModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body row\">           \n              <div class=\"col-md-12\">             \n                <div class=\"form-group row\">\n                  <div class=\"input-group\">                    \n                    <label class=\"col-md-4 col-form-label\">Comment</label>\n                    <div class=\"col-md-8 col-form-label\">                \n                      <textarea class=\"form-control\" name=\"comment\" [(ngModel)]=\"updatemodel.comment\" id=\"Comment\" placeholder=\"Comment\" rows=\"3\"></textarea>\n                    </div>\n                  </div>\n                </div>  \n              </div> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"UpdatePOModal.hide()\">Close</button>        \n          <button type=\"submit\" *ngIf=\"updatemodel.co_status == 3\" class=\"btn btn-sm btn-success\" id=\"postingrequest\">Confirm</button>\n          <button type=\"submit\" *ngIf=\"updatemodel.co_status == 5\" class=\"btn btn-sm btn-danger\" id=\"postingrequest\">Cancel</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <div bsModal #COLDetails=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 1000px;\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Order Detail</h4>\n          <button type=\"button\" class=\"close\" (click)=\"COLDetails.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body row\">           \n              <table class=\"table table-responsive-sm table-hover table-striped table-outline mb-0\">\n                <thead class=\"thead-light\">\n                  <tr>\n                    <th class=\"text-center\">Order Number</th>\n                    <th>Qty</th>\n                    <th>Customer</th>\n                    <th>Comment</th>\n                    <th>Type</th>\n                    <th>EDD</th>\n                    <th>Updated By</th>\n                    <th>Updated Date</th>\n                    <th style=\"background:#0000ff36;\">Action</th>\n                  </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let coldetail of coldetails; let i = index\">\n                      <td>\n                        {{ coldetail.o_num}}\n                      </td>\n                      <td>{{ coldetail.col_qty}}</td>\n                      <td>{{ coldetail.c_name}}</td> \n                      <td>{{ coldetail.col_comment}}</td> \n                      <td *ngIf=\"coldetail.o_type === 1\">Reman</td>\n                      <td *ngIf=\"coldetail.o_type === 2\">Refurb</td>\n                      <td *ngIf=\"coldetail.o_type === 3\">Silver</td>\n                      <td *ngIf=\"coldetail.o_type === 4\">Filter Stock</td>\n                      <td>{{coldetail.co_edd | date:'MMM d, y'}}</td> \n                      <td>{{ coldetail.col_username}}</td>\n                      <td>{{coldetail.col_created_at | date:'MMM d, y'}}</td>   \n                      <td style=\"background:#0000ff36;\">{{ coldetail.col_flag}}</td>                   \n                    </tr>\n                  </tbody>\n              </table> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"COLDetails.hide()\">Close</button> \n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <div bsModal #ChatModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 47%;\">  \n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Admin Chats</h4>\n          <button type=\"button\" class=\"close\" (click)=\"ChatModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div *ngFor=\"let chat of chats\">\n          <div *ngIf=\"chat.u_Id !== userid \" class=\"card\" style=\"width: 86%;background: #80808057;border-radius: 27px;\"> \n            <div class=\"row\"><div class=\"col-md-2\">\n              <img class=\"img-circle\" style=\"width: 100%;padding: 6px;\" src=\"assets/images/User.png\"></div>\n              <div class=\"col-md-10\">\n                <h5 style=\"margin: 6px 0px;border-bottom: 1px solid #bdb2b263\">{{ chat.userName}}</h5>\n                <p>{{ chat.text}}</p>\n              <p><small>{{ chat.createdDate | date:'MMM d, h:mm a'}}</small></p></div></div>\n            </div>\n           <div *ngIf=\"chat.u_Id === userid\" class=\"card\"  style=\"width: 86%;background: #80808057;border-radius: 27px;float:right;\"> \n            <div class=\"row\">\n              <div class=\"col-md-10\">\n                <h5 style=\"text-align:right;margin: 6px 0px;border-bottom: 1px solid #bdb2b263\">{{ chat.userName}}</h5>\n                <p style=\"padding-left:20px;\">{{ chat.text}}</p>\n                <p style=\"text-align:right;\"><small>{{ chat.createdDate | date:'h:mm a'}}</small></p>\n              </div>\n              <div class=\"col-md-2\">\n                <img class=\"img-circle\" style=\"width: 100%;padding: 6px;\" src=\"assets/images/User.png\">\n              </div>\n            </div>\n            </div>\n          </div>\n        </div>\n        <form  #requestForm=\"ngForm\" (ngSubmit)=\"sendMessagePost()\">\n          <div class=\"modal-footer\">\n            <input type=\"hidden\"  name=\"Ref_Id\" [(ngModel)]=\"model.Ref_Id\">\n            <textarea name=\"\"   name=\"Text\" [(ngModel)]=\"model.Text\" cols=\"95\" rows=\"2\"></textarea>       \n            <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"SendSMS\">Send</button>\n          </div>\n      </form>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <div bsModal #UserChatModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 47%;\">  \n      <div class=\"modal-content\">\n        <div class=\"modal-header\" style=\"background: #a94393!important;\">\n          <h4 class=\"modal-title\">User Chats</h4>\n          <button type=\"button\" class=\"close\" (click)=\"UserChatModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div *ngFor=\"let chat of chats\">\n          <div *ngIf=\"chat.u_Id !== userid \" class=\"card\" style=\"width: 86%;background: #80808057;border-radius: 27px;\"> \n            <div class=\"row\"><div class=\"col-md-2\">\n              <img class=\"img-circle\" style=\"width: 100%;padding: 6px;\" src=\"assets/images/User.png\"></div>\n              <div class=\"col-md-10\">\n                <h5 style=\"margin: 6px 0px;border-bottom: 1px solid #bdb2b263\">{{ chat.userName}}</h5>\n                <p>{{ chat.text}}</p>\n              <p><small>{{ chat.createdDate | date:'MMM d, h:mm a'}}</small></p></div></div>\n            </div>\n           <div *ngIf=\"chat.u_Id === userid\" class=\"card\"  style=\"width: 86%;background: #80808057;border-radius: 27px;float:right;\"> \n            <div class=\"row\">\n              <div class=\"col-md-10\">\n                <h5 style=\"text-align:right;margin: 6px 0px;border-bottom: 1px solid #bdb2b263\">{{ chat.userName}}</h5>\n                <p style=\"padding-left:20px;\">{{ chat.text}}</p>\n                <p style=\"text-align:right;\"><small>{{ chat.createdDate | date:'h:mm a'}}</small></p>\n              </div>\n              <div class=\"col-md-2\">\n                <img class=\"img-circle\" style=\"width: 100%;padding: 6px;\" src=\"assets/images/User.png\">\n              </div>\n            </div>\n            </div>\n          </div>\n        </div>\n        <form  #requestForm=\"ngForm\" (ngSubmit)=\"sendUserMessagePost()\">\n          <div class=\"modal-footer\">\n            <input type=\"hidden\"  name=\"Ref_Id\" [(ngModel)]=\"model.Ref_Id\">\n            <textarea name=\"\"   name=\"Text\" [(ngModel)]=\"model.Text\" cols=\"95\" rows=\"2\"></textarea>       \n            <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"SendSMS\">Send</button>\n          </div>\n      </form>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 576px){\r\n    .modal-dialog {\r\n        max-width: 726px;\r\n        margin: 1.75rem auto;\r\n    }\r\n}\r\n.bgcolor_5 {\r\n    background: #f86c6b!important;\r\n}\r\n.bgcolor_3 {\r\n    background: #4dbd74!important;\r\n}\r\n.avatar {\r\n    left: 24%;\r\n}\r\n.color_4 {\r\n    background: #23a5454a!important;\r\n}\r\n.color_3 {\r\n    background: #23a5454a!important;\r\n}\r\n.color_5 {\r\n    background: #f86c6b3b!important\r\n}\r\n.switch-label .switch-input:checked ~ .switch-slider::before {\r\n    transform: translateX(28px);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29tbWl0LW9yZGVyL2NvbW1pdC1vcmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsb0JBQW9CO0lBQ3hCO0FBQ0o7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9jb21taXQtb3JkZXIvY29tbWl0LW9yZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1xyXG4gICAgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA3MjZweDtcclxuICAgICAgICBtYXJnaW46IDEuNzVyZW0gYXV0bztcclxuICAgIH1cclxufVxyXG4uYmdjb2xvcl81IHtcclxuICAgIGJhY2tncm91bmQ6ICNmODZjNmIhaW1wb3J0YW50O1xyXG59XHJcbi5iZ2NvbG9yXzMge1xyXG4gICAgYmFja2dyb3VuZDogIzRkYmQ3NCFpbXBvcnRhbnQ7XHJcbn1cclxuLmF2YXRhciB7XHJcbiAgICBsZWZ0OiAyNCU7XHJcbn1cclxuLmNvbG9yXzQge1xyXG4gICAgYmFja2dyb3VuZDogIzIzYTU0NTRhIWltcG9ydGFudDtcclxufVxyXG4uY29sb3JfMyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjNhNTQ1NGEhaW1wb3J0YW50O1xyXG59XHJcbi5jb2xvcl81IHtcclxuICAgIGJhY2tncm91bmQ6ICNmODZjNmIzYiFpbXBvcnRhbnRcclxufVxyXG4uc3dpdGNoLWxhYmVsIC5zd2l0Y2gtaW5wdXQ6Y2hlY2tlZCB+IC5zd2l0Y2gtc2xpZGVyOjpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI4cHgpO1xyXG59Il19 */");

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
        this.chatmodel = {};
        this.roleid = Number(String(localStorage.getItem('RoleID')));
        this.userid = Number(localStorage.getItem('UserId'));
        this.filter1 = {};
        this.filter2 = {};
        this.filter3 = {};
        this.filter4 = {};
        this.filter5 = {};
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
        this.model.req_type = '0';
        this.check1 = true;
        this.check2 = false;
        this.check3 = false;
        this.check4 = false;
        this.check5 = false;
        this.filter1 = 1;
        this.filter2 = 0;
        this.filter3 = 0;
        this.filter4 = 0;
        this.filter5 = 0;
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
            _this.orders = orders.filter(function (proj) { return (proj.close_status === 0); });
            if (_this.filter1 === 1) {
                if (_this.filter4 === 0 && _this.filter5 === 0) {
                    _this.orders = orders.filter(function (proj) { return (proj.close_status === _this.filter5); });
                }
                else if (_this.filter4 === 1 && _this.filter5 === 0) {
                    _this.orders = orders.filter(function (proj) { return (proj.booked_status === _this.filter4 && proj.close_status === _this.filter5); });
                }
                else if (_this.filter4 === 0 && _this.filter5 === 1) {
                    _this.orders = orders;
                }
                else if (_this.filter4 === 1 && _this.filter5 === 1) {
                    _this.orders = orders.filter(function (proj) { return (proj.booked_status === _this.filter4); });
                }
            }
            else if (_this.filter2 === 1 || _this.filter3 === 3) {
                if (_this.filter4 === 0 && _this.filter5 === 0) {
                    _this.orders = orders.filter(function (proj) { return (proj.co_status === _this.filter2 && proj.close_status === _this.filter5
                        || proj.co_status === _this.filter3 && proj.close_status === _this.filter5); });
                }
                else if (_this.filter4 === 1 && _this.filter5 === 0) {
                    _this.orders = orders.filter(function (proj) { return (proj.co_status === _this.filter2 && proj.booked_status === _this.filter4 &&
                        proj.close_status === _this.filter5 || proj.co_status === _this.filter3 && proj.booked_status === _this.filter4
                        && proj.close_status === _this.filter5); });
                }
                else if (_this.filter4 === 0 && _this.filter5 === 1) {
                    _this.orders = orders.filter(function (proj) { return (proj.co_status === _this.filter2 || proj.co_status === _this.filter3); });
                }
                else if (_this.filter4 === 1 && _this.filter5 === 1) {
                    _this.orders = orders.filter(function (proj) { return (proj.co_status === _this.filter2 && proj.booked_status === _this.filter4 ||
                        proj.co_status === _this.filter3 && proj.booked_status === _this.filter4); });
                }
            }
            else {
                _this.orders = orders.filter(function (proj) { return (proj.booked_status === 100); });
            }
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
        console.log(this.model);
        if (!this.model.o_num) {
            this.alertify.error('Enter Order Number');
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
        if (this.model.o_type === '0') {
            this.alertify.error('Select Type');
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
            _this.model.o_num = '';
            _this.model.c_name = '';
            _this.model.comment = '';
            _this.model.o_type = '0';
            _this.infoModal.hide();
            _this.alertify.success('Order Created Successfully');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CommitOrderComponent.prototype.EditOrder = function (id, date) {
        this.editmodel = this.orders.filter(function (proj) { return (Number(proj.id) === Number(id)); })[0];
        this.editmodel.co_edd = this.datepipe.transform(this.editmodel.co_edd, 'yyyy-MM-dd');
        this.editmodel.comment = '';
        this.loadModels(this.editmodel.make_id);
        this.editOrder.show();
    };
    CommitOrderComponent.prototype.EditOrderPost = function (id, date) {
        var _this = this;
        if (this.editmodel.o_type === '0') {
            this.alertify.error('Select Type');
            return;
        }
        if (!this.editmodel.co_edd) {
            this.alertify.error('Select EDD');
            return;
        }
        if (!this.editmodel.c_name) {
            this.alertify.error('Customer Name');
            return;
        }
        if (!this.editmodel.co_qty) {
            this.alertify.error('Enter Qty');
            return;
        }
        if (!this.editmodel.c_name) {
            this.alertify.error('Enter Customer Name');
            return;
        }
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
            _this.alertify.success('Order Edited Successfully');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CommitOrderComponent.prototype.BookCPOModal = function (id, co_status) {
        var _this = this;
        this.updatemodel['updated_by'] = localStorage.getItem('UserId');
        this.updatemodel.id = id;
        this.updatemodel.co_status = co_status;
        this.requirementservice.BookCOPost(this.updatemodel).subscribe(function (orders) {
            _this.loadOrders();
            _this.updatemodel = {};
            _this.UpdatePOModal.hide();
            _this.alertify.success('Order Booked Successfully');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CommitOrderComponent.prototype.CloseCPOModal = function (id, co_status) {
        var _this = this;
        this.updatemodel['updated_by'] = localStorage.getItem('UserId');
        this.updatemodel.id = id;
        this.updatemodel.co_status = co_status;
        this.requirementservice.CloseCOPost(this.updatemodel).subscribe(function (orders) {
            _this.loadOrders();
            _this.updatemodel = {};
            _this.UpdatePOModal.hide();
            _this.alertify.success('Order Closed Successfully');
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
        console.log(type);
        return this.requirementservice.getCommitOrders().subscribe(function (orders) {
            if (type === 0) {
                _this.check1 = false;
                _this.check2 = false;
                _this.check3 = false;
                _this.check4 = false;
                _this.check5 = false;
                _this.filter1 = 1;
                if (event.target.checked === true) {
                    _this.check1 = true;
                    _this.orders = orders.filter(function (proj) { return (proj.close_status === 0); });
                    _this.filter2 = 0;
                    _this.filter3 = 0;
                    _this.filter4 = 0;
                    _this.filter5 = 0;
                }
                else {
                    _this.check1 = false;
                    _this.orders = orders.filter(function (proj) { return (proj.co_status === 100); });
                    _this.filter1 = 0;
                    _this.filter2 = 0;
                    _this.filter3 = 0;
                    _this.filter4 = 0;
                    _this.filter5 = 0;
                }
            }
            if (type === 1) {
                _this.check1 = false;
                _this.filter1 = 0;
                _this.check2 = true;
                _this.filter2 = type;
                if (event.target.checked === false) {
                    _this.filter2 = 0;
                    _this.check2 = false;
                }
                if (_this.filter4 === 0 && _this.filter5 === 0) {
                    _this.orders = orders.filter(function (proj) { return (proj.co_status === _this.filter2 && proj.close_status === _this.filter5 ||
                        proj.co_status === _this.filter3 && proj.close_status === _this.filter5); });
                }
                else if (_this.filter4 === 1 && _this.filter5 === 0) {
                    _this.orders = orders.filter(function (proj) { return (proj.co_status === _this.filter2 && proj.booked_status === _this.filter4 &&
                        proj.close_status === _this.filter5 || proj.co_status === _this.filter3 && proj.close_status === _this.filter5
                        && proj.booked_status === _this.filter4); });
                }
                else if (_this.filter4 === 0 && _this.filter5 === 1) {
                    _this.orders = orders.filter(function (proj) { return (proj.co_status === _this.filter2 || proj.co_status === _this.filter3); });
                }
                else {
                    _this.check2 = false;
                    _this.orders = orders.filter(function (proj) { return (proj.co_status === _this.filter2 && proj.booked_status === _this.filter4
                        || proj.co_status === _this.filter3 && proj.booked_status === _this.filter4); });
                }
            }
            if (type === 3) {
                _this.check1 = false;
                _this.filter1 = 0;
                _this.check3 = true;
                _this.filter3 = type;
                if (event.target.checked === false) {
                    _this.filter3 = 0;
                    _this.check3 = false;
                }
                if (_this.filter4 === 0 && _this.filter5 === 0) {
                    _this.orders = orders.filter(function (proj) { return (proj.co_status === _this.filter2 && proj.close_status === _this.filter5
                        || proj.close_status === _this.filter5 && proj.co_status === _this.filter3); });
                }
                else if (_this.filter4 === 1 && _this.filter5 === 0) {
                    _this.orders = orders.filter(function (proj) { return (proj.co_status === _this.filter2 && proj.booked_status === _this.filter4 &&
                        proj.close_status === _this.filter5 || proj.co_status === _this.filter3 && proj.booked_status === _this.filter4
                        && proj.close_status === _this.filter5); });
                }
                else if (_this.filter4 === 0 && _this.filter5 === 1) {
                    _this.orders = orders.filter(function (proj) { return (proj.co_status === _this.filter2 || proj.co_status === _this.filter3); });
                }
                else {
                    _this.orders = orders.filter(function (proj) { return (proj.co_status === _this.filter2 && proj.booked_status === _this.filter4
                        || proj.co_status === _this.filter3 && proj.booked_status === _this.filter4
                            && proj.close_status === _this.filter5); });
                }
            }
            if (type === 5) {
                _this.filter4 = 1;
                _this.check4 = true;
                console.log(_this.filter1);
                if (_this.filter1 === 1) {
                    if (event.target.checked === false) {
                        _this.filter4 = 0;
                        _this.check4 = false;
                        _this.orders = orders;
                        if (_this.filter5 === 1) {
                            _this.orders = orders;
                        }
                        else if (_this.filter5 === 0) {
                            _this.orders = orders.filter(function (proj) { return (proj.close_status === _this.filter5); });
                        }
                    }
                    if (event.target.checked === true) {
                        if (_this.filter5 === 1) {
                            _this.orders = orders.filter(function (proj) { return (proj.booked_status === _this.filter4); });
                        }
                        else if (_this.filter5 === 0) {
                            _this.orders = orders.filter(function (proj) { return (proj.booked_status === _this.filter4 && proj.close_status === _this.filter5); });
                        }
                    }
                }
                else if (_this.filter2 === 1 || _this.filter3 === 3) {
                    if (event.target.checked === false) {
                        _this.filter4 = 0;
                        _this.check4 = false;
                        if (_this.filter5 === 1) {
                            _this.orders = orders.filter(function (proj) { return (proj.co_status === _this.filter3 || proj.co_status === _this.filter2); });
                        }
                        else if (_this.filter5 === 0) {
                            _this.orders = orders.filter(function (proj) { return (proj.co_status === _this.filter2 && proj.close_status === _this.filter5
                                || proj.co_status === _this.filter3 && proj.close_status === _this.filter5); });
                        }
                    }
                    if (event.target.checked === true) {
                        if (_this.filter5 === 1) {
                            _this.orders = orders.filter(function (proj) { return (proj.co_status === _this.filter2 && proj.booked_status === _this.filter4
                                || proj.co_status === _this.filter3 && proj.booked_status === _this.filter4); });
                        }
                        else if (_this.filter5 === 0) {
                            _this.orders = orders.filter(function (proj) { return (proj.co_status === _this.filter2 && proj.booked_status === _this.filter4
                                && proj.close_status === _this.filter5 || proj.co_status === _this.filter3 && proj.booked_status === _this.filter4
                                && proj.close_status === _this.filter5); });
                        }
                    }
                }
                else {
                    if (event.target.checked === false) {
                        _this.filter4 = 0;
                        _this.check4 = false;
                        _this.orders = orders.filter(function (proj) { return (proj.co_status === 100); });
                    }
                    if (event.target.checked === true) {
                        _this.orders = orders.filter(function (proj) { return (proj.co_status === 100); });
                    }
                }
            }
            if (type === 6) {
                _this.filter5 = 1;
                _this.check5 = true;
                console.log(_this.filter1);
                if (_this.filter1 === 1) {
                    if (event.target.checked === false) {
                        _this.filter5 = 0;
                        _this.check5 = false;
                        if (_this.filter4 === 1) {
                            _this.orders = orders.filter(function (proj) { return (proj.booked_status === _this.filter4 && proj.close_status === _this.filter5); });
                        }
                        else if (_this.filter4 === 0) {
                            _this.orders = orders.filter(function (proj) { return (proj.close_status === _this.filter5); });
                        }
                    }
                    if (event.target.checked === true) {
                        _this.check5 = true;
                        if (_this.filter4 === 1) {
                            _this.orders = orders.filter(function (proj) { return (proj.booked_status === _this.filter4); });
                        }
                        else if (_this.filter4 === 0) {
                            _this.orders = orders;
                        }
                    }
                }
                else if (_this.filter2 === 1 || _this.filter3 === 3) {
                    if (event.target.checked === false) {
                        _this.filter5 = 0;
                        _this.check5 = false;
                        if (_this.filter4 === 1) {
                            _this.orders = orders.filter(function (proj) { return (proj.co_status === _this.filter2 && proj.booked_status === _this.filter4
                                && proj.close_status === _this.filter5 || proj.co_status === _this.filter3 && proj.booked_status === _this.filter4
                                && proj.close_status === _this.filter5); });
                        }
                        else if (_this.filter5 === 0) {
                            _this.orders = orders.filter(function (proj) { return (proj.co_status === _this.filter3 && proj.close_status === _this.filter5
                                || proj.co_status === _this.filter2 && proj.close_status === _this.filter5); });
                        }
                    }
                    if (event.target.checked === true) {
                        if (_this.filter4 === 1) {
                            _this.orders = orders.filter(function (proj) { return (proj.co_status === _this.filter2 && proj.booked_status === _this.filter4
                                || proj.co_status === _this.filter3 && proj.booked_status === _this.filter4); });
                        }
                        else if (_this.filter4 === 0) {
                            _this.orders = orders.filter(function (proj) { return (proj.co_status === _this.filter2 || proj.co_status === _this.filter3); });
                        }
                    }
                }
                else {
                    if (event.target.checked === false) {
                        _this.filter5 = 0;
                        _this.check5 = false;
                        _this.orders = orders.filter(function (proj) { return (proj.co_status === 100); });
                    }
                    if (event.target.checked === true) {
                        _this.orders = orders.filter(function (proj) { return (proj.co_status === 100); });
                    }
                }
            }
            console.log(_this.check1 + 'check1');
            console.log(_this.check2 + 'check2');
            console.log(_this.check3 + 'check3');
            console.log(_this.check4 + 'check4');
            console.log(_this.check5 + 'check5');
            console.log(_this.filter1 + 'filter1');
            console.log(_this.filter2 + 'filter2');
            console.log(_this.filter3 + 'filter3');
            console.log(_this.filter4 + 'filter4');
            console.log(_this.filter5 + 'filter5');
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
    CommitOrderComponent.prototype.openChatModal = function (id) {
        var _this = this;
        this.model.Ref_Id = id;
        this.chatmodel.ref_id = id;
        this.chatmodel.user_id = this.userid;
        this.chatmodel.type = 1;
        return this.requirementservice.ShortfallorderviewChats(this.chatmodel).subscribe(function (chats) {
            _this.chats = chats.filter(function (proj) { return (Number(proj.status) === 0 && proj.ref_Id === id); });
            console.log('s');
            console.log(_this.chats);
            _this.loadOrders();
            _this.ChatModal.show();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CommitOrderComponent.prototype.sendMessagePost = function () {
        var _this = this;
        this.model.U_Id = Number(localStorage.getItem('UserId'));
        this.model.type = 1;
        if (!this.model.Text) {
            this.alertify.error('Enter Comment');
            return;
        }
        this.requirementservice.sendShortfalllChatPost(this.model).subscribe(function (chats) {
            _this.chats = chats.filter(function (proj) { return (Number(proj.status) === 0 && proj.ref_Id === _this.model.Ref_Id); });
            _this.loadOrders();
            _this.model.Text = '';
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CommitOrderComponent.prototype.openUserChatModal = function (id) {
        var _this = this;
        this.model.Ref_Id = id;
        this.chatmodel.ref_id = id;
        this.chatmodel.user_id = this.userid;
        this.chatmodel.type = 2;
        return this.requirementservice.ShortfallorderviewChats(this.chatmodel).subscribe(function (chats) {
            _this.chats = chats.filter(function (proj) { return (Number(proj.status) === 0 && proj.ref_Id === id); });
            _this.loadOrders();
            _this.UserChatModal.show();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    CommitOrderComponent.prototype.sendUserMessagePost = function () {
        var _this = this;
        this.model.U_Id = Number(localStorage.getItem('UserId'));
        this.model.type = 2;
        if (!this.model.Text) {
            this.alertify.error('Enter Comment');
            return;
        }
        this.requirementservice.sendShortfalllChatPost(this.model).subscribe(function (chats) {
            _this.chats = chats.filter(function (proj) { return (Number(proj.status) === 0 && proj.ref_Id === _this.model.Ref_Id); });
            _this.loadOrders();
            _this.model.Text = '';
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ChatModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalDirective"])
    ], CommitOrderComponent.prototype, "ChatModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('UserChatModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalDirective"])
    ], CommitOrderComponent.prototype, "UserChatModal", void 0);
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