(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-stocks-stocks-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/stocks/stocks.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/stocks/stocks.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\n  <!-- Button trigger modal -->\n  <button *ngIf=\"roleid===4 || roleid===2\" type=\"button\" class=\"btn btn-info mr-1\" data-toggle=\"modal\" (click)=\"infoModal.show()\">\n      Add Stock\n    </button>\n</div>\n<div bsModal #ChatModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 47%;\">  \n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">ChatBox</h4>\n        <button type=\"button\" class=\"close\" (click)=\"ChatModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">          \n      <div *ngFor=\"let chat of chats\">\n        <div *ngIf=\"chat.u_Id !== userid \" class=\"card\" style=\"width: 86%;background: #80808057;border-radius: 27px;\"> \n          <div class=\"row\"><div class=\"col-md-2\">\n            <img class=\"img-circle\" style=\"width: 100%;padding: 6px;\" src=\"assets/images/User.png\"></div>\n            <div class=\"col-md-10\">\n              <h5 style=\"margin: 6px 0px;border-bottom: 1px solid #bdb2b263\">{{ chat.userName}}</h5>\n              <p>{{ chat.text}}</p>\n            <p><small>{{ chat.createdDate | date:'MMM d, h:mm a'}}</small></p></div></div>\n          </div>\n         <div *ngIf=\"chat.u_Id === userid\" class=\"card\"  style=\"width: 86%;background: #80808057;border-radius: 27px;float:right;\"> \n          <div class=\"row\">\n            <div class=\"col-md-10\">\n              <h5 style=\"text-align:right;margin: 6px 0px;border-bottom: 1px solid #bdb2b263\">{{ chat.userName}}</h5>\n              <p style=\"padding-left:20px;\">{{ chat.text}}</p>\n              <p style=\"text-align:right;\"><small>{{ chat.createdDate | date:'h:mm a'}}</small></p>\n            </div>\n            <div class=\"col-md-2\">\n              <img class=\"img-circle\" style=\"width: 100%;padding: 6px;\" src=\"assets/images/User.png\">\n            </div>\n          </div>\n          </div>\n        </div>\n      </div>\n      <form  #requestForm=\"ngForm\" (ngSubmit)=\"sendMessagePost()\">\n        <div class=\"modal-footer\">\n          <input type=\"hidden\"  name=\"Ref_Id\" [(ngModel)]=\"model.Ref_Id\">\n          <textarea name=\"\"   name=\"Text\" [(ngModel)]=\"model.Text\" cols=\"95\" rows=\"2\"></textarea>       \n          <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"SendSMS\">Send</button>\n        </div>\n    </form>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n<div bsModal #infoModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 47%;\">\n  <form  #requestForm=\"ngForm\" (ngSubmit)=\"sendRequirementPost()\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add Stock</h4>\n        <button type=\"button\" class=\"close\" (click)=\"infoModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">          \n      <div class=\"card\">\n          <div class=\"card-body row\">\n            <div class=\"col-md-6\">              \n              <div class=\"form-group row\">\n                <div class=\"input-group\">\n                  <label class=\"col-md-4 col-form-label\">Make</label>\n                  <div class=\"col-md-8 col-form-label\">\n                    <ng-select2 [data]=\"makes\" [width]=\"200\"  name=\"MakeId\"  [(ngModel)]=\"model.MakeId\" (ngModelChange)=\"loadModels($event)\"></ng-select2>                                                                           \n                  </div>                  \n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <div class=\"input-group\">\n                  <label class=\"col-md-4 col-form-label\">Model</label>  \n                  <div class=\"col-md-8 col-form-label\"> \n                    <ng-select2 [data]=\"models\"  [width]=\"200\" name=\"ModelId\"  [(ngModel)]=\"model.ModelId\"></ng-select2> </div> \n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <div class=\"input-group\">\n                  <label class=\"col-md-4 col-form-label\">Processor</label>    \n                  <div class=\"col-md-8 col-form-label\">\n                    <ng-select2 [data]=\"processors\"  [width]=\"200\" name=\"ProcessorId\"  [(ngModel)]=\"model.ProcessorId\"></ng-select2>  </div> \n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <div class=\"input-group\">                    \n                  <label class=\"col-md-4 col-form-label\">Qty</label>\n                  <div class=\"col-md-8 col-form-label\">\n                    <input type=\"number\" id=\"qty\" name=\"Qty\" [(ngModel)]=\"model.Qty\"  class=\"form-control\" placeholder=\"Qty\"></div>\n                </div>\n              </div>              \n              <div class=\"form-group row\">\n                <div class=\"input-group\">                    \n                  <label class=\"col-md-4 col-form-label\">Price</label>\n                  <div class=\"col-md-8 col-form-label\">\n                    <input type=\"number\" id=\"price\" name=\"Price\" [(ngModel)]=\"model.Price\"  class=\"form-control\" placeholder=\"Price\"></div>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-4 col-form-label\">Supplier</label>\n                <div class=\"col-md-8 col-form-label\">                    \n                  <input type=\"text\" id=\"Cname\" name=\"Cname\" [(ngModel)]=\"model.Cname\"  class=\"form-control\" placeholder=\"Supplier Name\">\n                </div>\n              </div> \n            </div>            \n            <div class=\"col-md-6\">    \n              <div class=\"form-group row\">\n                <label class=\"col-md-4 col-form-label\">RAM</label> \n                <div class=\"col-md-8 col-form-label\">   \n                  <ng-select2 [data]=\"rams\"  [width]=\"200\" name=\"Ram\"  [(ngModel)]=\"model.Ram\"></ng-select2>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-4 col-form-label\">HDD</label> \n                <div class=\"col-md-8 col-form-label\">   \n                  <ng-select2 [data]=\"hdds\"  [width]=\"200\" name=\"Hdd\"  [(ngModel)]=\"model.Hdd\"></ng-select2>\n                </div>\n              </div> \n              <div class=\"form-group row\">\n                <label class=\"col-md-4 col-form-label\">Type</label> \n                <div class=\"col-md-8 col-form-label\">   \n                  <select width=\"200\" name=\"req_type\"  [(ngModel)]=\"model.req_type\" style=\"width:200px;height: 32px;\">\n                    <option value=\"1\">Reman</option>\n                    <option value=\"2\">Refurb</option>\n                    <option value=\"3\">Silver</option>\n                    <option value=\"4\">Filter Stock</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-md-4 col-form-label\">Generation</label> \n                <div class=\"col-md-8 col-form-label\">   \n                  <ng-select2 [data]=\"generations\"  [width]=\"200\" name=\"gen_id\"  [(ngModel)]=\"model.gen_id\"></ng-select2>\n                </div>\n              </div>\n              <!-- <div class=\"form-group row\">\n                <label class=\"col-md-4 col-form-label\">Location</label> \n                <div class=\"col-md-8 col-form-label\">   \n                  <ng-select2 [data]=\"locations\"  [width]=\"200\" name=\"loc_id\"  [(ngModel)]=\"model.loc_id\"></ng-select2>\n                </div>\n              </div> -->\n              <div class=\"form-group row\">\n                <label class=\"col-md-4 col-form-label\" for=\"inline-radios\">Adapter</label>\n                <div class=\"col-md-8 col-form-label\">\n                  <div class=\"form-check form-check-inline mr-1\" id=\"inline-radios\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"Adapter\" [(ngModel)]=\"model.Adapter\" id=\"inlineRadio1\" value=\"1\">\n                    <label class=\"form-check-label\" for=\"inlineRadio1\" style=\"width:100%;\">Yes</label>\n                  </div>\n                  <div class=\"form-check form-check-inline mr-1\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"Adapter\" [(ngModel)]=\"model.Adapter\" id=\"inlineRadio2\" value=\"2\">\n                    <label class=\"form-check-label\" for=\"inlineRadio2\" style=\"width:100%;\">No</label>\n                  </div>\n                </div>\n              </div>               \n              <div class=\"form-group row\">\n                <div class=\"input-group\">                    \n                  <label class=\"col-md-4 col-form-label\">Comment</label>\n                  <div class=\"col-md-8 col-form-label\">                \n                    <textarea class=\"form-control\" name=\"Comment\" [(ngModel)]=\"model.Comment\" id=\"Comment\" placeholder=\"Comment\" rows=\"3\"></textarea>\n                  </div>\n                </div>\n              </div>  \n            </div> \n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"infoModal.hide()\">Close</button>        \n        <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"postingrequest\">Submit</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </form>\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n<div bsModal #ApproveModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-info\" role=\"document\">\n  <form  #requestForm=\"ngForm\" (ngSubmit)=\"ApproveDeals()\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Approve Deals</h4>\n        <button type=\"button\" class=\"close\" (click)=\"ApproveModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">          \n      <div class=\"card\">\n          <div class=\"card-body\">\n              <div class=\"form-group\">\n              <div class=\"input-group\">                    \n                <label >Req##</label>                \n                <span id=\"Id\" style=\"padding: 7px\" style=\"width: 346px;border: 1px solid #b3acac;border-radius: 3px;padding: 8px;background: #75717140;\">{{model.requestID}}</span>\n              </div>\n              </div>\n              <div class=\"form-group\">\n              <div class=\"input-group\">                    \n                <label >Total Qty</label>                \n                <span id=\"Id\" style=\"padding: 7px\" style=\"width: 346px;border: 1px solid #b3acac;border-radius: 3px;padding: 8px;background: #75717140;\">{{model.tqty}}</span>\n              </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"input-group\">                    \n                  <label style=\"padding: 7px\">Qty</label>\n                  <input type=\"number\" id=\"qty\" name=\"Qty\" [(ngModel)]=\"model.Qty\"  class=\"form-control\" placeholder=\"Qty\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"input-group\">                    \n                  <label style=\"padding: 7px\">Comment</label>\n                  <textarea class=\"form-control\" name=\"Comment\" [(ngModel)]=\"model.Comment\" id=\"Comment\" rows=\"3\"></textarea>\n                </div>\n              </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-sm btn-secondary\"(click)=\"ApproveModal.hide()\">Close</button>        \n        <button type=\"submit\" class=\"btn btn-sm btn-success\"  id=\"ApproveMydeal\" >Submit</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </form>\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n<div bsModal #editModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-info\" role=\"document\">\n  <form  #requestForm=\"ngForm\" (ngSubmit)=\"EditReqDataPost()\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Edit Stock</h4>\n        <button type=\"button\" class=\"close\" (click)=\"editModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">          \n      <div class=\"card\">\n          <div class=\"card-body\">\n              <div class=\"form-group\">\n              <div class=\"input-group\">                    \n                <label >Req##</label>                \n                <span id=\"Id\" style=\"padding: 7px\" style=\"width: 346px;border: 1px solid #b3acac;border-radius: 3px;padding: 8px;background: #75717140;\">{{editmodel.requestID}}</span>\n              </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"input-group\">                    \n                  <label >Current Qty</label>                \n                  <span id=\"Id\" style=\"padding: 7px\" style=\"width: 346px;border: 1px solid #b3acac;border-radius: 3px;padding: 8px;background: #75717140;\">{{editmodel.tqty}}</span>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"input-group\">                    \n                  <label>Qty</label>\n                  <input type=\"number\" id=\"qty\" name=\"Qty\" [(ngModel)]=\"editmodel.Qty\"  class=\"form-control\" placeholder=\"Qty\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"input-group mb-3\">              \n                    <label >Price</label>\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"  style=\"background: #75717140;border: 1px solid #b3acac;\">\n                        $\n                      </span>\n                    </div>\n                    <span id=\"Id\" style=\"padding: 7px\" style=\"width:74%;border: 1px solid #b3acac;border-radius: 3px;padding: 8px;background: #75717140;\">{{editmodel.tprice}}</span>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"input-group mb-3\">              \n                    <label >NewPrice</label>\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"  style=\"background: #75717140;border: 1px solid #b3acac;\">\n                        $\n                      </span>\n                    </div>                    \n                  <input type=\"number\" id=\"Price\" name=\"Price\" [(ngModel)]=\"editmodel.Price\"  class=\"form-control\" placeholder=\"Price\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"input-group\">                    \n                  <label style=\"padding: 7px\">Comment</label>\n                  <textarea class=\"form-control\" name=\"Comment\" [(ngModel)]=\"editmodel.Comment\" id=\"Comment\" rows=\"3\"></textarea>\n                </div>\n              </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-sm btn-secondary\"(click)=\"editModal.hide()\">Close</button>        \n        <button type=\"submit\" class=\"btn btn-sm btn-success\"  id=\"EditStockData\" >Submit</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </form>\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n<!--/.card-->\n<div class=\"row\" *ngIf=\"roleid !== 5\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <br>\n        <table datatable [dtTrigger]=\"dtTrigger\" [dtOptions]=\"dtOptions\" class=\"table table-responsive-sm table-hover table-striped table-outline mb-0\">\n          <thead class=\"thead-light\">\n            <tr>\n              <!-- <th class=\"text-center\"><i class=\"icon-people\"></i></th> -->\n              <th class=\"text-center\" style=\"width: 12%;\">RequestID</th>\n              <th>Detail</th>\n              <th>Specification </th>\n              <th>Qty</th>\n              <th>Price</th>\n              <th style=\"width: 20%;\">Comment</th>\n              <th *ngIf=\"roleid===1 || roleid===2 || roleid===4\">Supplier</th>\n              <th>Type</th>\n              <!-- <th style=\"width: 8.8%;\" class=\"text-center\">Location</th> -->\n              <th>Created By</th>\n              <th>Created Date</th>\n              <th *ngIf=\"roleid !==9\">Action</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let requirement of requirements; let i = index\" class=\"color_{{requirement.status}}{{roleid}}\" >\n              <!-- <td class=\"text-center\">\n                <div class=\"avatar\">background: #2967f361;\n                  <img src=\"assets/img/avatars/1.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                  <span class=\"avatar-status badge-success\"></span>\n                </div>\n              </td> -->\n              <td class=\"text-center\">\n                <div  style=\"position: absolute;\">{{ requirement.requestID}}</div>\n                <div class=\"avatar\">\n                  <i class=\"cui-speech icons font-2xl d-block\" title=\"Need More Info\" style=\"cursor: pointer;color: #21355C;font-weight: bold;\"  (click)=\"openChatModal(requirement.id)\"></i>                  \n                  <span *ngIf=\"requirement.chatCount > 0\">\n                    <span *ngIf=\"requirement.chatCount > requirement.chatviewcount\" class=\"avatar-status badge-success\" style=\" width: 22px; height: 24px; background: #de7575; right: -5px; top: -13px; \">{{ requirement.chatCount}}</span>\n                    <span *ngIf=\"requirement.chatCount <=  requirement.chatviewcount\" class=\"avatar-status badge-success\" style=\" width: 22px; height: 24px; background: green; right: -5px; top: -13px; \">{{ requirement.chatCount}}</span>\n                  </span>                  \n                </div>\n              </td>\n              <td>\n                <div *ngIf=\"requirement.makeName\" class=\"small text-muted\"><strong>Make: </strong>{{ requirement.makeName}}</div>\n                <div *ngIf=\"requirement.modelName\" class=\"small text-muted\"><strong>Model: </strong>{{ requirement.modelName}}</div>\n                <div *ngIf=\"requirement.processor\" class=\"small text-muted\"><strong>Processor: </strong>{{ requirement.processor}}</div>\n                <div *ngIf=\"requirement.genName\" class=\"small text-muted\"><strong>GEN: </strong>{{ requirement.genName}}</div>\n              </td>\n              <td>\n                <div *ngIf=\"requirement.hddName\" class=\"small text-muted\"><strong>HDD: </strong>{{ requirement.hddName}}</div>\n                <div *ngIf=\"requirement.ramName\" class=\"small text-muted\"><strong>RAM: </strong>{{ requirement.ramName}}</div>\n                <div *ngIf=\"requirement.adapter === 1\" class=\"small text-muted\"><strong>Adapter: </strong>Yes</div>\n                <div *ngIf=\"requirement.adapter === 2\" class=\"small text-muted\"><strong>Adapter: </strong>No</div>\n              </td>\n              <td>{{ requirement.qty}}</td>\n              <td>${{ requirement.price}}</td>\n              <td>{{ requirement.comment}}</td>\n              <td *ngIf=\"roleid===1 || roleid===2 || roleid===4\">{{ requirement.cname}}</td>\n              <td>{{ requirement.typeName}}</td>\n              <!-- <td class=\"text-center\">{{ requirement.reqlocation}}</td> -->\n              <td>{{ requirement.username}}</td>\n              <td>{{requirement.createdDate | date:'MMM d, y'}}</td>\n              <td  *ngIf=\"roleid===3 || roleid===1 || roleid === 8\">               \n                <button *ngIf=\"requirement.status !==2\" class=\"btn btn-square btn-sm btn-danger\" type=\"button\" id=\"Reject_{{requirement.requestID}}\" (click)=\"RejectStock(requirement.requestID)\">\n                  <i class=\"fa fa-check-circle-o fa-lg\"></i> Reject\n                </button>                  \n                <button *ngIf=\"requirement.status !==2\"  class=\"btn btn-square btn-sm btn-success\" type=\"button\" data-toggle=\"modal\" (click)=\"openApproveModal(requirement.requestID, requirement.qty)\">\n                  <i class=\"fa fa-check-circle-o fa-lg\"></i> Approve\n                </button>            \n                <button *ngIf=\"requirement.status !==2 && roleid===3  || requirement.status !==2 && roleid === 8 || roleid !==1\"  type=\"reset\"  class=\"btn btn-square btn-sm btn-dark\" (click)=\"OpenshareModal(requirement.requestID)\">\n                  <i class=\"fa fa-share-square\" style=\"font-size:18px\"></i>\n                </button>\n              </td>\n              <td *ngIf=\"roleid===4 || roleid===2\" id=\"Req_{{requirement.requestID}}\">  \n                <button *ngIf=\"requirement.username=== this.LoginUser && requirement.status !==2\" type=\"submit\" class=\"btn btn-square btn-sm btn-info\" (click)=\"EditRequirement(requirement.requestID,requirement.qty, requirement.price)\">\n                  <i class=\"fa fa-dot-circle-o\"></i> Edit\n                </button> \n                <span style=\"font-weight:bold;color:red;font-style:italic;\" *ngIf=\"requirement.username=== this.LoginUser && requirement.status ===2\">Rejected</span>            \n                <button *ngIf=\"requirement.username=== this.LoginUser\" type=\"submit\" class=\"btn btn-square btn-sm btn-danger\" (click)=\"CloseRequirement(requirement.requestID)\">\n                  <i class=\"fa fa-dot-circle-o\"></i> Close\n                </button>    \n              </td>\n              \n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div><!--/.col-->\n</div><!--/.row-->\n<div bsModal #shareModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-info\" role=\"document\">\n  <form  #shareForm=\"ngForm\"  (ngSubmit)=\"ShareReqPost()\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Share Deal</h4>\n        <button type=\"button\" class=\"close\" (click)=\"shareModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">    \n        <div class=\"card\">\n            <div class=\"card-body\">\n              <div class=\"form-group\">\n                <div class=\"input-group\">\n                  <label style=\"padding: 8px\">RequestID</label>                    \n                  <input type=\"text\" id=\"ReqNo1\" name=\"ReqNo1\"  [(ngModel)]=\"pmodel.ReqNo1\"  class=\"form-control\" disabled>\n                </div>\n              </div>                 \n                <div class=\"form-group\">\n                  <div class=\"input-group\">                    \n                    <label style=\"padding: 7px\">Qty</label>\n                    <input type=\"number\" id=\"s_qty\" name=\"s_qty\" [(ngModel)]=\"pmodel.s_qty\"  class=\"form-control\" placeholder=\"Qty\">\n                  </div>\n                </div>                                  \n                <div class=\"form-group\">\n                  <div class=\"input-group\">                    \n                    <label style=\"padding: 7px\">Price</label>                    \n                    <select class=\"form-control\" id=\"r_cur\" name=\"r_cur\" placeholder=\"Select Currency\" [(ngModel)]=\"pmodel.r_cur\">\n                     <option disabled selected=\"selected\" [value]=\"0\">Select Currency</option>                        \n                     <option [value]=\"1\">GBP</option>                        \n                     <option [value]=\"2\">USD</option>                        \n                     <option [value]=\"3\">Euro</option>                        \n                   </select>\n                   <input type=\"number\" id=\"s_price\" name=\"s_price\" [(ngModel)]=\"pmodel.s_price\"  class=\"form-control\" placeholder=\"Price\">\n                     </div>\n                </div>                  \n                <div class=\"form-group\">\n                  <div class=\"input-group\">                    \n                    <label style=\"padding: 7px\">Comment</label>\n                    <textarea id=\"s_comment\" name=\"s_comment\" [(ngModel)]=\"pmodel.s_comment\"  class=\"form-control\" placeholder=\"Comment\"></textarea>\n                  </div>\n                </div>                \n                <div class=\"form-group row\">\n                  <label class=\"col-md-2 col-form-label\"></label>\n                  <div class=\"col-md-9 col-form-label\">\n                    <div class=\"form-check\">\n                      <input class=\"form-check-input\" type=\"checkbox\" [checked]=\"isEmail\" (change)=\"allNonTrades($event)\">\n                      <label class=\"form-check-label\" for=\"emailcheckbox\">\n                        Email\n                      </label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\" *ngIf=\"isEmail\">\n                   <div class=\"input-group\">\n                     <label style=\"padding: 7px\">User Type</label>\n                     <select class=\"form-control\" id=\"type\" name=\"type\" placeholder=\"Select Type\" [(ngModel)]=\"pmodel.type\" (ngModelChange)=\"loadPurchaseUser($event)\">\n                       <option disabled selected=\"selected\" [value]=\"0\">Select Type</option>                        \n                       <option [value]=\"1\">Internal</option>                        \n                       <option [value]=\"2\">External</option>                        \n                     </select>\n                   </div>\n                 </div>\n                <div class=\"form-group\" *ngIf=\"isEmail\">\n                  <div class=\"input-group\">\n                    <label>Select Email</label>\n                    <ng-select2 [data]=\"pusers\" [placeholder]=\"'Select Email'\" name=\"options\" [(ngModel)]=\"pmodel.options\" [width]=\"340\" [options]=\"options\"></ng-select2>                  \n                  </div>\n                </div>\n            </div>\n          </div>      \n      </div>\n      <div class=\"modal-footer\">\n        <!-- <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"shareModal.hide()\">Close</button>         -->\n        <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"ShareReq\">Share</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </form>\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n<div *ngIf=\"roleid === 5\">\n  <div class=\"app flex-row align-items-center\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-6\">\n          <div class=\"clearfix\">\n            <h1 class=\"float-left display-3 mr-4\">404</h1>\n            <h4 class=\"pt-3\">Oops! You're lost.</h4>\n            <p class=\"text-muted\">The page you are looking for was not found.</p>\n          </div>\n          <div class=\"input-prepend input-group\">\n            <div class=\"input-group-prepend\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>  \n</div>");

/***/ }),

/***/ "./src/app/views/stocks/stocks-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/stocks/stocks-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: StocksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksRoutingModule", function() { return StocksRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stocks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stocks.component */ "./src/app/views/stocks/stocks.component.ts");




var routes = [
    {
        path: '',
        component: _stocks_component__WEBPACK_IMPORTED_MODULE_3__["StocksComponent"],
        data: {
            title: 'Stocks'
        }
    }
];
var StocksRoutingModule = /** @class */ (function () {
    function StocksRoutingModule() {
    }
    StocksRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StocksRoutingModule);
    return StocksRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/stocks/stocks.component.css":
/*!***************************************************!*\
  !*** ./src/app/views/stocks/stocks.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label {\r\n    width: 75px;\r\n}\r\ninput, select, textarea {\r\n    border: 1px solid #b3acac;\r\n    border-radius: 3px;\r\n}\r\n.color_83 {\r\n    background: #60a5e099!important;\r\n}\r\n.avatar {\r\n    left: 24%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3RvY2tzL3N0b2Nrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N0b2Nrcy9zdG9ja3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG59XHJcbmlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2FjYWM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLmNvbG9yXzgzIHtcclxuICAgIGJhY2tncm91bmQ6ICM2MGE1ZTA5OSFpbXBvcnRhbnQ7XHJcbn1cclxuLmF2YXRhciB7XHJcbiAgICBsZWZ0OiAyNCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/stocks/stocks.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/stocks/stocks.component.ts ***!
  \**************************************************/
/*! exports provided: StocksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksComponent", function() { return StocksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/loadspecs.service */ "./src/app/_services/loadspecs.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_requirement_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/requirement.service */ "./src/app/_services/requirement.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");








var StocksComponent = /** @class */ (function () {
    function StocksComponent(loadspecsService, alertify, requirementservice) {
        this.loadspecsService = loadspecsService;
        this.alertify = alertify;
        this.requirementservice = requirementservice;
        this.pmodel = {};
        this.model = {};
        this.isEmail = false;
        this.editmodel = {};
        this.chatmodel = {};
        this.aprovals = {};
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 25,
            retrieve: true,
            order: [[0, 'desc']]
        };
        this.isDtInitialized = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.roleid = Number(localStorage.getItem('RoleID'));
        this.userid = Number(localStorage.getItem('UserId'));
        this.LoginUser = localStorage.getItem('LoginUser');
    }
    StocksComponent.prototype.ngOnInit = function () {
        this.options = {
            multiple: true,
            theme: 'classic',
            closeOnSelect: false,
            width: '348'
        };
        this.loadMakes();
        this.loadGenerations();
        this.loadProcessors();
        this.loadLocations();
        this.loadRAMs();
        this.loadHDDs();
        this.loadRequirements();
    };
    StocksComponent.prototype.loadLocations = function () {
        var _this = this;
        return this.loadspecsService.loadLocations().subscribe(function (locations) {
            _this.locations = locations.filter(function (proj) { return (proj.status === 1); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    StocksComponent.prototype.loadMakes = function () {
        var _this = this;
        return this.loadspecsService.getMakes().subscribe(function (partproducts) {
            _this.makes = partproducts.filter(function (proj) { return (proj.type === 1); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    StocksComponent.prototype.loadGenerations = function () {
        var _this = this;
        return this.loadspecsService.getGenerations().subscribe(function (generations) {
            _this.generations = generations;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    StocksComponent.prototype.loadModels = function (value) {
        var _this = this;
        return this.loadspecsService.getModels().subscribe(function (partproducts) {
            _this.models = partproducts.filter(function (proj) { return (Number(proj.parentId) === Number(value)); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    StocksComponent.prototype.loadProcessors = function () {
        var _this = this;
        return this.loadspecsService.getProcessors().subscribe(function (processors) {
            _this.processors = processors;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    StocksComponent.prototype.loadRAMs = function () {
        var _this = this;
        return this.loadspecsService.loadSpectDetails().subscribe(function (rams) {
            _this.rams = rams.filter(function (proj) { return (proj.parentId === 1); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    StocksComponent.prototype.loadHDDs = function () {
        var _this = this;
        return this.loadspecsService.loadSpectDetails().subscribe(function (hdds) {
            _this.hdds = hdds.filter(function (proj) { return (proj.parentId === 2); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    StocksComponent.prototype.loadRequirements = function () {
        var _this = this;
        return this.requirementservice.getRequirements().subscribe(function (requirements) {
            if (Number(localStorage.getItem('RoleID')) === 4) {
                _this.requirements = requirements.filter(function (proj) { return (Number(proj.type) === 1 && Number(proj.flag) === 0
                    && Number(proj.status) !== 2 && Number(proj.userId) === Number(localStorage.getItem('UserId'))); });
            }
            else {
                _this.requirements = requirements.filter(function (proj) { return (Number(proj.type) === 1 && Number(proj.status) !== 2
                    && Number(proj.flag) === 0); });
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
            console.log(_this.requirements);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    StocksComponent.prototype.sendRequirementPost = function () {
        var _this = this;
        this.model.status = 0;
        this.model.Type = 1;
        this.model['userId'] = localStorage.getItem('UserId');
        if (this.model.MakeId === '0') {
            this.alertify.error('Select Make');
            return;
        }
        if (this.model.ModelId === '0') {
            this.alertify.error('Select Model');
            return;
        }
        if (this.model.ProcessorId === '0') {
            this.alertify.error('Select Processor');
            return;
        }
        if (this.model.Ram === null) {
            this.alertify.error('Select RAM');
            return;
        }
        if (this.model.Hdd === null) {
            this.alertify.error('Select HDD');
            return;
        }
        if (this.model.gen_id === null) {
            this.alertify.error('Select Generation');
            return;
        }
        if (!this.model.Qty) {
            this.alertify.error('Enter Qty');
            return;
        }
        if (!this.model.Cname) {
            this.alertify.error('Enter Supplier Name');
            return;
        }
        if (!this.model.Price) {
            this.alertify.error('Enter Price');
            return;
        }
        if (!this.model.Comment) {
            this.alertify.error('Enter Comment');
            return;
        }
        if (!this.model.Adapter) {
            this.alertify.error('Select Adapter');
            return;
        }
        document.getElementById('postingrequest').innerHTML = '<i class="fa fa-circle-o-notch mt-1 fa-lg fa-spin"></i> Sending...';
        document.getElementById('postingrequest').disabled = true;
        this.requirementservice.sendRequirementPost(this.model).subscribe(function (requirements) {
            if (Number(localStorage.getItem('RoleID')) === 4) {
                _this.requirements = requirements.filter(function (proj) { return (Number(proj.type) === 1 && Number(proj.flag) === 0
                    && Number(proj.status) !== 2 && Number(proj.userId) === Number(localStorage.getItem('UserId'))); });
            }
            else {
                _this.requirements = requirements.filter(function (proj) { return (Number(proj.type) === 1 && Number(proj.status) !== 2 &&
                    Number(proj.flag) === 0); });
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
            _this.model.MakeId = '0';
            _this.model.ModelId = '0';
            _this.model.ProcessorId = '0';
            _this.model.Ram = '0';
            _this.model.Hdd = '0';
            _this.model.req_type = '0';
            _this.model.Qty = '';
            _this.model.Cname = '';
            document.getElementById('postingrequest').innerHTML = 'Submit';
            document.getElementById('postingrequest').disabled = false;
            _this.infoModal.hide();
            _this.alertify.success('Deal Added Successfull');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    StocksComponent.prototype.openChatModal = function (id) {
        var _this = this;
        this.model.Ref_Id = id;
        this.chatmodel.ref_id = id;
        this.chatmodel.user_id = this.userid;
        return this.requirementservice.viewChats(this.chatmodel).subscribe(function (chats) {
            _this.chats = chats.filter(function (proj) { return (Number(proj.status) === 0 && proj.ref_Id === id); });
            _this.loadRequirements();
            _this.ChatModal.show();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    StocksComponent.prototype.sendMessagePost = function () {
        var _this = this;
        this.model.U_Id = Number(localStorage.getItem('UserId'));
        if (!this.model.Text) {
            this.alertify.error('Enter Comment');
            return;
        }
        document.getElementById('SendSMS').innerHTML = '<i class="fa fa-circle-o-notch mt-1 fa-lg fa-spin"></i> Sending...';
        document.getElementById('SendSMS').disabled = true;
        this.requirementservice.sendChatPost(this.model).subscribe(function (chats) {
            _this.chats = chats.filter(function (proj) { return (Number(proj.status) === 0 && proj.ref_Id === _this.model.Ref_Id); });
            _this.loadRequirements();
            _this.model.Text = '';
            document.getElementById('SendSMS').innerHTML = 'Send';
            document.getElementById('SendSMS').disabled = false;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    StocksComponent.prototype.EditRequirement = function (id, qty, price) {
        this.editmodel.requestID = id;
        this.editmodel.tqty = qty;
        this.editmodel.tprice = price;
        this.editModal.show();
    };
    StocksComponent.prototype.EditReqDataPost = function () {
        var _this = this;
        if (!this.editmodel.Qty) {
            this.alertify.error('Enter Qty');
            return;
        }
        if (!this.editmodel.Price) {
            this.alertify.error('Enter Price');
            return;
        }
        console.log(this.editmodel);
        document.getElementById('EditStockData').innerHTML = '<i class="fa fa-circle-o-notch mt-1 fa-lg fa-spin"></i> Sending...';
        document.getElementById('EditStockData').disabled = true;
        this.requirementservice.EditReqDataPost(this.editmodel).subscribe(function (requirements) {
            if (Number(localStorage.getItem('RoleID')) === 4) {
                _this.requirements = requirements.filter(function (proj) { return (Number(proj.type) === 1 && Number(proj.flag) === 0
                    && Number(proj.status) !== 2 && Number(proj.userId) === Number(localStorage.getItem('UserId'))); });
            }
            else {
                _this.requirements = requirements.filter(function (proj) { return (Number(proj.type) === 1 && Number(proj.status) !== 2 &&
                    Number(proj.flag) === 0); });
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
            _this.editmodel.Qty = '';
            _this.editmodel.Price = '';
            _this.editmodel.Comment = '';
            _this.editModal.hide();
            document.getElementById('EditStockData').innerHTML = 'Submit';
            document.getElementById('EditStockData').disabled = false;
            _this.alertify.success('Stock Edited Successfuly');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    StocksComponent.prototype.openApproveModal = function (id, qty) {
        this.model.requestID = id;
        this.model.tqty = qty;
        this.ApproveModal.show();
    };
    StocksComponent.prototype.ApproveDeals = function () {
        var _this = this;
        this.aprovals.app_by = Number(localStorage.getItem('UserId'));
        if (!this.model.Qty) {
            this.alertify.error('Enter Qty');
            return;
        }
        if (this.model.tqty < this.model.Qty) {
            this.alertify.error('Check Qty');
            return;
        }
        if (!this.model.Comment) {
            this.alertify.error('Enter Comment');
            return;
        }
        this.aprovals.Comment = this.model.Comment;
        this.aprovals.Qty = this.model.Qty;
        this.aprovals.requestID = this.model.requestID;
        document.getElementById('ApproveMydeal').innerHTML = '<i class="fa fa-circle-o-notch mt-1 fa-lg fa-spin"></i> Sending...';
        document.getElementById('ApproveMydeal').disabled = true;
        this.requirementservice.ApproveDeals(this.aprovals).subscribe(function (requirements) {
            if (Number(localStorage.getItem('RoleID')) === 4) {
                _this.requirements = requirements.filter(function (proj) { return (Number(proj.type) === 1 && Number(proj.flag) === 0
                    && Number(proj.status) !== 2 && Number(proj.userId) === Number(localStorage.getItem('UserId'))); });
            }
            else {
                _this.requirements = requirements.filter(function (proj) { return (Number(proj.type) === 1 && Number(proj.status) !== 2 &&
                    Number(proj.flag) === 0); });
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
            _this.model.Qty = '';
            _this.model.Comment = '';
            _this.ApproveModal.hide();
            document.getElementById('ApproveMydeal').innerHTML = 'Submit';
            document.getElementById('ApproveMydeal').disabled = false;
            _this.alertify.success('Deal Approved Successfuly');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    StocksComponent.prototype.CloseRequirement = function (Id) {
        var _this = this;
        this.model = { RequestID: Id, Status: 1 };
        this.requirementservice.CloseRequirement(this.model).subscribe(function () {
            document.getElementById('Req_' + Id).innerHTML = '<span style="font-weight:bold;color:green;font-style:italic;font-size:15px">Closed</span>';
            _this.alertify.success('Stock Closed');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    StocksComponent.prototype.loadPurchaseUser = function (value) {
        var _this = this;
        return this.loadspecsService.getMyPurchaseUsers().subscribe(function (pusers) {
            _this.pusers = pusers.filter(function (proj) { return (Number(proj.type) === Number(value)); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    StocksComponent.prototype.OpenshareModal = function (id) {
        this.pmodel.ReqNo1 = id;
        this.shareModal.show();
        this.isEmail = false;
    };
    StocksComponent.prototype.ShareReqPost = function () {
        var _this = this;
        this.pmodel.s_flag = this.isEmail;
        this.pmodel.emp_id = this.userid;
        if (!this.pmodel.s_qty) {
            this.alertify.error('Enter Qty');
            return;
        }
        if (!this.pmodel.r_cur) {
            this.alertify.error('Enter Currency');
            return;
        }
        if (!this.pmodel.s_price) {
            this.alertify.error('Enter Price');
            return;
        }
        if (!this.pmodel.options && this.isEmail) {
            this.alertify.error('Select Email');
            return;
        }
        console.log(this.pmodel);
        document.getElementById('ShareReq').innerHTML = '<i class="fa fa-circle-o-notch mt-1 fa-lg fa-spin"></i> Sending...';
        document.getElementById('ShareReq').disabled = true;
        this.requirementservice.ShareReqPost(this.pmodel).subscribe(function () {
            _this.pmodel.options = null;
            _this.shareModal.hide();
            _this.loadRequirements();
            document.getElementById('ShareReq').innerHTML = 'Send';
            document.getElementById('ShareReq').disabled = false;
            _this.alertify.success('Deal has been Shared Successfull');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    StocksComponent.prototype.RejectStock = function (requestID) {
        var _this = this;
        this.model = { RequestID: requestID, Status: 2, UserId: Number(localStorage.getItem('UserId')) };
        document.getElementById('Reject_' + requestID).innerHTML = '<i class="fa fa-circle-o-notch mt-1 fa-lg fa-spin"></i> Sending...';
        document.getElementById('Reject_' + requestID).disabled = true;
        this.requirementservice.RejectStock(this.model).subscribe(function () {
            _this.loadRequirements();
            document.getElementById('Reject_' + requestID).innerHTML = 'Reject';
            document.getElementById('Reject_' + requestID).disabled = false;
            _this.alertify.success('Deal has been Shared Successfull');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    StocksComponent.prototype.allNonTrades = function (event) {
        var checked = event.target.checked;
        this.isEmail = checked;
    };
    StocksComponent.ctorParameters = function () { return [
        { type: _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_3__["LoadspecsService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] },
        { type: _services_requirement_service__WEBPACK_IMPORTED_MODULE_5__["RequirementService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"])
    ], StocksComponent.prototype, "dtElement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('infoModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], StocksComponent.prototype, "infoModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ApproveModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], StocksComponent.prototype, "ApproveModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('shareModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], StocksComponent.prototype, "shareModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], StocksComponent.prototype, "editModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ChatModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], StocksComponent.prototype, "ChatModal", void 0);
    StocksComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stocks',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./stocks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/stocks/stocks.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./stocks.component.css */ "./src/app/views/stocks/stocks.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_loadspecs_service__WEBPACK_IMPORTED_MODULE_3__["LoadspecsService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"],
            _services_requirement_service__WEBPACK_IMPORTED_MODULE_5__["RequirementService"]])
    ], StocksComponent);
    return StocksComponent;
}());



/***/ }),

/***/ "./src/app/views/stocks/stocks.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/stocks/stocks.module.ts ***!
  \***********************************************/
/*! exports provided: StocksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksModule", function() { return StocksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _stocks_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stocks-routing.module */ "./src/app/views/stocks/stocks-routing.module.ts");
/* harmony import */ var _stocks_stocks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stocks/stocks.component */ "./src/app/views/stocks/stocks.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_select2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-select2 */ "./node_modules/ng-select2/fesm5/ng-select2.js");









var StocksModule = /** @class */ (function () {
    function StocksModule() {
    }
    StocksModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_stocks_stocks_component__WEBPACK_IMPORTED_MODULE_5__["StocksComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _stocks_routing_module__WEBPACK_IMPORTED_MODULE_4__["StocksRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ng_select2__WEBPACK_IMPORTED_MODULE_8__["NgSelect2Module"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
            ]
        })
    ], StocksModule);
    return StocksModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-stocks-stocks-module.js.map