(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-requirements-requirements-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/requirements/requirements.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/requirements/requirements.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\r\n    <!-- Button trigger modal -->\r\n    <button *ngIf=\"roleid === 3 || roleid === 11 || roleid === 8\" type=\"button\" class=\"btn btn-info mr-1\" data-toggle=\"modal\" (click)=\"infoModal.show()\">\r\n        Add Requirement\r\n      </button>\r\n  </div>\r\n  <div bsModal #infoModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-info\" role=\"document\"  style=\"max-width: 749px;\">\r\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"sendRequirementPost()\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Add Requirement</h4>\r\n          <button type=\"button\" class=\"close\" (click)=\"infoModal.hide()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">          \r\n        <div class=\"card\">\r\n            <div class=\"card-body row\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\">Make</label>\r\n                  <div class=\"col-md-8 col-form-label\">\r\n                     <ng-select2 [data]=\"makes\" [width]=\"200\"  name=\"MakeId\"  [(ngModel)]=\"model.MakeId\" (ngModelChange)=\"loadModels($event)\"></ng-select2>                                         \r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\">Model</label>  \r\n                  <div class=\"col-md-8 col-form-label\">  \r\n                    <ng-select2 [data]=\"models\"  [width]=\"200\" name=\"ModelId\"  [(ngModel)]=\"model.ModelId\"></ng-select2>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\">Processor</label> \r\n                  <div class=\"col-md-8 col-form-label\">\r\n                    <ng-select2 [data]=\"processors\"  [width]=\"200\" name=\"ProcessorId\"  [(ngModel)]=\"model.ProcessorId\"></ng-select2> \r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\">Customer</label>\r\n                  <div class=\"col-md-8 col-form-label\">                    \r\n                    <input type=\"text\" id=\"Cname\" name=\"Cname\" [(ngModel)]=\"model.Cname\"  class=\"form-control\" placeholder=\"Customer Name\">\r\n                  </div>\r\n                </div> \r\n                <div class=\"form-group row\">   \r\n                  <label class=\"col-md-4 col-form-label\">Qty</label>\r\n                  <div class=\"col-md-8 col-form-label\">                 \r\n                    <input type=\"number\" id=\"qty\" name=\"Qty\" [(ngModel)]=\"model.Qty\"  class=\"form-control\" placeholder=\"Qty\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">  \r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\">RAM</label> \r\n                  <div class=\"col-md-8 col-form-label\">   \r\n                    <ng-select2 [data]=\"rams\"  [width]=\"200\" name=\"Ram\"  [(ngModel)]=\"model.Ram\"></ng-select2>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\">HDD</label> \r\n                  <div class=\"col-md-8 col-form-label\">   \r\n                    <ng-select2 [data]=\"hdds\"  [width]=\"200\" name=\"Hdd\"  [(ngModel)]=\"model.Hdd\"></ng-select2>\r\n                  </div>\r\n                </div> \r\n                <!-- <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\">Location</label> \r\n                  <div class=\"col-md-8 col-form-label\">   \r\n                    <ng-select2 [data]=\"locations\"  [width]=\"200\" name=\"loc_id\"  [(ngModel)]=\"model.loc_id\"></ng-select2>\r\n                  </div>\r\n                </div> -->\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\">Type</label> \r\n                  <div class=\"col-md-8 col-form-label\">   \r\n                    <select width=\"200\" name=\"req_type\"  [(ngModel)]=\"model.req_type\" style=\"width:200px;height:28px;\">\r\n                      <option value=\"1\">Reman</option>\r\n                      <option value=\"2\">Refurb</option>\r\n                      <option value=\"3\">Silver</option>\r\n                      <option value=\"4\">Filter Stock</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\">Generation</label> \r\n                  <div class=\"col-md-8 col-form-label\">   \r\n                    <ng-select2 [data]=\"generations\"  [width]=\"200\" name=\"loc_id\"  [(ngModel)]=\"model.gen_id\"></ng-select2>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-md-4 col-form-label\" for=\"inline-radios\">Adapter</label>\r\n                  <div class=\"col-md-8 col-form-label\">\r\n                    <div class=\"form-check form-check-inline mr-1\" id=\"inline-radios\">\r\n                      <input class=\"form-check-input\" type=\"radio\" name=\"Adapter\" [(ngModel)]=\"model.Adapter\" id=\"inlineRadio11\" value=\"1\">\r\n                      <label class=\"form-check-label\" for=\"inlineRadio11\" style=\"width:100%;\">Yes</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline mr-1\">\r\n                      <input class=\"form-check-input\" type=\"radio\" name=\"Adapter\" [(ngModel)]=\"model.Adapter\" id=\"inlineRadio12\" value=\"2\">\r\n                      <label class=\"form-check-label\" for=\"inlineRadio12\" style=\"width:100%;\">No</label>\r\n                    </div>\r\n                  </div>\r\n                </div>   \r\n              </div> \r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"infoModal.hide()\">Close</button>        \r\n          <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"postingrequest\">Submit</button>\r\n        </div>\r\n      </div><!-- /.modal-content -->\r\n    </form>\r\n    </div><!-- /.modal-dialog -->\r\n  </div><!-- /.modal -->\r\n\r\n  <div bsModal #ChatModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 47%;\">  \r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">ChatBox</h4>\r\n          <button type=\"button\" class=\"close\" (click)=\"ChatModal.hide()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">          \r\n        <div *ngFor=\"let chat of chats\">\r\n          <div *ngIf=\"chat.u_Id !== userid \" class=\"card\" style=\"width: 86%;background: #80808057;border-radius: 27px;\"> \r\n            <div class=\"row\"><div class=\"col-md-2\">\r\n              <img class=\"img-circle\" style=\"width: 100%;padding: 6px;\" src=\"assets/images/User.png\"></div>\r\n              <div class=\"col-md-10\">\r\n                <h5 style=\"margin: 6px 0px;border-bottom: 1px solid #bdb2b263\">{{ chat.userName}}</h5>\r\n                <p>{{ chat.text}}</p>\r\n              <p><small>{{ chat.createdDate | date:'MMM d, h:mm a'}}</small></p></div></div>\r\n            </div>\r\n           <div *ngIf=\"chat.u_Id === userid\" class=\"card\"  style=\"width: 86%;background: #80808057;border-radius: 27px;float:right;\"> \r\n            <div class=\"row\">\r\n              <div class=\"col-md-10\">\r\n                <h5 style=\"text-align:right;margin: 6px 0px;border-bottom: 1px solid #bdb2b263\">{{ chat.userName}}</h5>\r\n                <p style=\"padding-left:20px;\">{{ chat.text}}</p>\r\n                <p style=\"text-align:right;\"><small>{{ chat.createdDate | date:'h:mm a'}}</small></p>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <img class=\"img-circle\" style=\"width: 100%;padding: 6px;\" src=\"assets/images/User.png\">\r\n              </div>\r\n            </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <form  #requestForm=\"ngForm\" (ngSubmit)=\"sendMessagePost()\">\r\n          <div class=\"modal-footer\">\r\n            <input type=\"hidden\"  name=\"Ref_Id\" [(ngModel)]=\"model.Ref_Id\">\r\n            <textarea name=\"\"   name=\"Text\" [(ngModel)]=\"model.Text\" cols=\"95\" rows=\"2\"></textarea>       \r\n            <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"SendSMS\">Send</button>\r\n          </div>\r\n      </form>\r\n      </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n  </div><!-- /.modal -->\r\n  <!--/.card-->\r\n  <div class=\"row\" *ngIf=\"roleid !==5\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body table-responsive-sm\">\r\n          <br>\r\n          <table datatable [dtTrigger]=\"dtTrigger\" [dtOptions]=\"dtOptions\" class=\"table table-responsive-sm table-striped table-hover table-outline mb-0\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <!-- <th class=\"text-center\"><i class=\"icon-people\"></i></th> -->\r\n                <th class=\"text-center\" style=\"width: 130px;\">RequestID</th>\r\n                <th>Detail</th>\r\n                <th>Specification </th>\r\n                <th *ngIf=\"roleid == 1 || roleid == 3 || roleid === 11 || roleid ==9 || roleid === 8\">Customer Name</th>\r\n                <th>Qty</th>\r\n                <th>Type</th>\r\n                <th>Created By</th>\r\n                <th>Created Date</th>\r\n                <th *ngIf=\"roleid !==1 && roleid !==9\" >Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let requirement of requirements; let i = index\">\r\n                <td class=\"text-center\">\r\n                  <div  style=\"position: absolute;\">{{ requirement.requestID}}</div>\r\n                  <div class=\"avatar\">\r\n                    <i class=\"cui-speech icons font-2xl d-block\" title=\"Need More Info\" style=\"cursor: pointer;color: #21355C;font-weight: bold;\"  (click)=\"openChatModal(requirement.id)\"></i>\r\n                    <span *ngIf=\"requirement.chatCount > 0\">\r\n                      <span *ngIf=\"requirement.chatCount > requirement.chatviewcount\" class=\"avatar-status badge-success\" style=\" width: 22px; height: 24px; background: #de7575; right: -5px; top: -13px; \">{{ requirement.chatCount}}</span>\r\n                      <span *ngIf=\"requirement.chatCount <=  requirement.chatviewcount\" class=\"avatar-status badge-success\" style=\" width: 22px; height: 24px; background: green; right: -5px; top: -13px; \">{{ requirement.chatCount}}</span>\r\n                    </span> \r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div *ngIf=\"requirement.makeName\" class=\"small text-muted\"><strong>Make: </strong>{{ requirement.makeName}}</div>\r\n                  <div *ngIf=\"requirement.modelName\" class=\"small text-muted\"><strong>Model: </strong>{{ requirement.modelName}}</div>\r\n                  <div *ngIf=\"requirement.processor\" class=\"small text-muted\"><strong>Processor: </strong>{{ requirement.processor}}</div>\r\n                  <div *ngIf=\"requirement.genName\" class=\"small text-muted\"><strong>GEN: </strong>{{ requirement.genName}}</div>\r\n                </td>\r\n                <td>\r\n                  <div *ngIf=\"requirement.hddName\" class=\"small text-muted\"><strong>HDD: </strong>{{ requirement.hddName}}</div>\r\n                  <div *ngIf=\"requirement.ramName\" class=\"small text-muted\"><strong>RAM: </strong>{{ requirement.ramName}}</div>\r\n                  <div *ngIf=\"requirement.adapter === 1\" class=\"small text-muted\"><strong>Adapter: </strong>Yes</div>\r\n                  <div *ngIf=\"requirement.adapter === 2\" class=\"small text-muted\"><strong>Adapter: </strong>No</div>\r\n                </td>\r\n                <td *ngIf=\"roleid == 1 || roleid === 11 || roleid == 3 ||  roleid ==9 || roleid === 8\">{{ requirement.cname}}</td>\r\n                <td>{{ requirement.qty}}</td>\r\n                <td>{{ requirement.typeName}}</td>\r\n                <td>{{ requirement.username}}</td>\r\n                <td>{{requirement.createdDate | date:'MMM d, y'}}</td>\r\n                <td *ngIf=\"roleid !== 1 &&  roleid !==9\" id=\"Req_{{requirement.requestID}}\">                  \r\n                  <button *ngIf=\"roleid === 11 && requirement.username=== this.LoginUser|| roleid === 3 && requirement.username=== this.LoginUser|| roleid === 8 &&  requirement.username=== this.LoginUser\" type=\"submit\" class=\"btn btn-square btn-sm btn-success\" (click)=\"CloseRequirement(requirement.requestID)\"><i class=\"fa fa-dot-circle-o\"></i> Close</button>                \r\n                  <button *ngIf=\"roleid === 4 || roleid === 2\" type=\"submit\" class=\"btn btn-square btn-sm btn-primary\" (click)=\"OpenstockModal(requirement.requestID)\"><i class=\"fa fa-dot-circle-o\"></i> Add Deals</button>\r\n                  <button *ngIf=\"roleid === 11 || roleid === 3 || roleid === 8\" type=\"reset\"  class=\"btn btn-square btn-sm btn-secondary\" (click)=\"OpendetailModal(requirement.requestID)\">\r\n                    <i class=\"fa fa-dot-circle-o\"></i>\r\n                    view Deals<span *ngIf=\"requirement.dealCount > 0\" class=\"badge badge-pill badge-danger\">{{ requirement.dealCount }}</span>\r\n                  </button>\r\n              </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n  <div bsModal #stockModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 1530px;\">\r\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"sendDealsPost()\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Add Deals</h4>\r\n          <button type=\"button\" class=\"close\" (click)=\"stockModal.hide()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <table class=\"table table-bordered table-striped table-sm\" style=\"border: none;\">\r\n          <thead>\r\n            <tr>\r\n              <th>ReqNo#</th>\r\n              <th>Make</th>\r\n              <th>Model</th>\r\n              <th>Processor</th>\r\n              <th>RAM</th>\r\n              <th>HDD</th>\r\n              <th>Adapter</th> \r\n              <th>Qty</th>\r\n              <th>Price</th>\r\n              <th>Comment</th>\r\n              <th>Action</th>             \r\n            </tr>\r\n          </thead>\r\n          <tbody #table>\r\n            <tr *ngFor=\"let mydeal of mydeals; let i = index\">\r\n              <td>{{ mydeal.requestID }}</td>\r\n              <td>{{ mydeal.makeName }}</td>\r\n              <td>{{ mydeal.modelName }}</td>\r\n              <td>{{ mydeal.processor }}</td>\r\n              <td>{{ mydeal.ramname }}</td>\r\n              <td>{{ mydeal.hddname }}</td>\r\n              <td>\r\n                <span *ngIf=\"mydeal.adapter == 1\">Yes</span>\r\n                <span *ngIf=\"mydeal.adapter == 2\">No</span>\r\n              </td>\r\n              <td>{{ mydeal.qty }}</td>\r\n              <td>${{ mydeal.price }}</td>\r\n              <td>{{ mydeal.comment }}</td>\r\n              <td><i class=\"cui-circle-x icons font-2xl d-block mt-2 ml-2\" (click)=\"Remove(mydeal.id)\" style=\"color: red;cursor: pointer;\"></i></td>\r\n            </tr>            \r\n          </tbody>\r\n          <tfoot >\r\n            <tr>\r\n              <td style=\"border: none;\">\r\n                <input type=\"text\" id=\"ReqNo1\" name=\"ReqNo1\"  [(ngModel)]=\"model.ReqNo1\"  class=\"form-control\" disabled>\r\n              </td>\r\n              <td style=\"border: none;\">\r\n                <input type=\"text\" id=\"MakeId1\" name=\"MakeId1\" [(ngModel)]=\"model.MakeId1\"  class=\"form-control\" disabled> \r\n              </td>\r\n              <td style=\"border: none;\">\r\n                <input type=\"text\" id=\"ModelId1\" name=\"ModelId1\" [(ngModel)]=\"model.ModelId1\"  class=\"form-control\" disabled> \r\n              </td>\r\n              <td style=\"border: none;\">\r\n                <input type=\"text\" id=\"ProcessorId1\" name=\"ProcessorId1\" [(ngModel)]=\"model.ProcessorId1\"  class=\"form-control\" disabled> \r\n              </td>\r\n              <td style=\"border: none;\">                  \r\n                <ng-select2 [data]=\"rams\"  [width]=\"100\" name=\"Ram\"  [(ngModel)]=\"model.Ram\"></ng-select2>\r\n              </td>\r\n              <td style=\"border: none;\">                  \r\n                <ng-select2 [data]=\"hdds\"  [width]=\"100\" name=\"Hdd\"  [(ngModel)]=\"model.Hdd\"></ng-select2>\r\n              </td>\r\n              <td style=\"border: none;\">\r\n                <div class=\"form-check form-check-inline mr-1\" id=\"inline-radios\">\r\n                  <input class=\"form-check-input\" type=\"radio\" name=\"Adapter\" [(ngModel)]=\"model.Adapter\" id=\"inlineRadio1\" value=\"1\">\r\n                  <label class=\"form-check-label\" for=\"inlineRadio1\" style=\"width:100%;\">Yes</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline mr-1\">\r\n                  <input class=\"form-check-input\" type=\"radio\" name=\"Adapter\" [(ngModel)]=\"model.Adapter\" id=\"inlineRadio2\" value=\"2\">\r\n                  <label class=\"form-check-label\" for=\"inlineRadio2\" style=\"width:100%;\">No</label>\r\n                </div>\r\n              </td> \r\n              <td style=\"border: none;\">\r\n                <input type=\"number\" id=\"qty1\" name=\"Qty1\" [(ngModel)]=\"model.Qty1\"  class=\"form-control\">\r\n              </td>\r\n              <td style=\"border: none;\">\r\n                <input type=\"number\" id=\"price1\" name=\"price1\" [(ngModel)]=\"model.price1\"  class=\"form-control\">\r\n              </td>\r\n                <td style=\"border: none;\">\r\n                  <textarea class=\"form-control\" name=\"Comment1\" [(ngModel)]=\"model.Comment1\" id=\"Comment1\" rows=\"3\"></textarea>\r\n                </td>\r\n                <td style=\"border: none;\">       \r\n                  <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"AddmyDeal\">Add</button>\r\n                </td>  \r\n            </tr>\r\n          </tfoot>\r\n        </table>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"stockModal.hide()\">Close</button> \r\n        </div>\r\n      </div><!-- /.modal-content -->\r\n    </form>\r\n    </div><!-- /.modal-dialog -->\r\n  </div><!-- /.modal -->\r\n  <div bsModal #detailModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 1487px;\">\r\n    <form  #requestForm=\"ngForm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Deals</h4>\r\n          <button type=\"button\" class=\"close\" (click)=\"detailModal.hide()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">          \r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <table class=\"table table-striped\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>RequestID</th>\r\n                    <th>Detail</th>\r\n                    <th>Specification </th>\r\n                    <th>Qty</th>\r\n                    <th>Price</th>\r\n                    <th>Comment</th>\r\n                    <th>CreatedBy</th>\r\n                    <th>CreatedDate</th>\r\n                    <th>Write Comment</th>\r\n                    <th *ngIf=\"roleid === 3 || roleid === 11 || roleid === 8\" >Action</th>\r\n                  </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let offer of offers; let i = index\">\r\n                      <td>{{ offer.requestID }}</td>\r\n                      <td>\r\n                        <div *ngIf=\"offer.makeName\" class=\"small text-muted\"><strong>Make: </strong>{{ offer.makeName}}</div>\r\n                        <div *ngIf=\"offer.modelName\" class=\"small text-muted\"><strong>Model: </strong>{{ offer.modelName}}</div>\r\n                        <div *ngIf=\"offer.processor\" class=\"small text-muted\"><strong>Processor: </strong>{{ offer.processor}}</div>\r\n                      </td>\r\n                      <td>\r\n                        <div *ngIf=\"offer.ramname\" class=\"small text-muted\"><strong>HDD: </strong>{{ offer.ramname}}</div>\r\n                        <div *ngIf=\"offer.hddname\" class=\"small text-muted\"><strong>RAM: </strong>{{ offer.hddname}}</div>\r\n                        <div *ngIf=\"offer.adapter === 1\" class=\"small text-muted\"><strong>Adapter: </strong>Yes</div>\r\n                        <div *ngIf=\"offer.adapter === 2\" class=\"small text-muted\"><strong>Adapter: </strong>No</div>\r\n                      </td>\r\n                      <td>{{ offer.qty }}</td>\r\n                      <td>${{ offer.price }}</td>\r\n                      <td>{{ offer.comment }}</td>\r\n                      <td>{{ offer.username }}</td>\r\n                      <td>{{offer.createdDate | date:'MMM d, y, h:mm a'}} </td>\r\n                      <td> \r\n                        <textarea type=\"text\" #ref name=\"WriteComment\" value = \"\" class=\"form-control\"></textarea> </td>\r\n                      <td id=\"Dealsoffer_{{offer.id}}\"> \r\n                        <button *ngIf=\"roleid === 11  || roleid === 3  || roleid === 8\" class=\"btn btn-sm btn-success\"  (click)=\"ApproveDeals(offer.id,ref.value)\" type=\"button\">\r\n                          <i class=\"fa fa-check-circle-o fa-lg\"></i> Approve\r\n                        </button>\r\n                        <button *ngIf=\"roleid === 11  || roleid === 3  || roleid === 8\" class=\"btn btn-sm btn-danger\"  (click)=\"RejectDeals(offer.id,ref.value)\"  type=\"reset\">\r\n                          <i class=\"fa fa-close fa-lg\"></i> Reject\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"detailModal.hide()\">Close</button>        \r\n          <!-- <button type=\"submit\" class=\"btn btn-sm btn-success\">Submit</button> -->\r\n        </div>\r\n      </div><!-- /.modal-content -->\r\n    </form>\r\n    </div><!-- /.modal-dialog -->\r\n  </div><!-- /.modal -->\r\n  <!--/.col-->\r\n  <div *ngIf=\"roleid === 5\">\r\n    <div class=\"app flex-row align-items-center\">\r\n      <div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"clearfix\">\r\n              <h1 class=\"float-left display-3 mr-4\">404</h1>\r\n              <h4 class=\"pt-3\">Oops! You're lost.</h4>\r\n              <p class=\"text-muted\">The page you are looking for was not found.</p>\r\n            </div>\r\n            <div class=\"input-prepend input-group\">\r\n              <div class=\"input-group-prepend\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n  </div>\r\n");

/***/ }),

/***/ "./src/app/views/requirements/requirements-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/requirements/requirements-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RequirementsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequirementsRoutingModule", function() { return RequirementsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _requirements_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./requirements.component */ "./src/app/views/requirements/requirements.component.ts");




var routes = [
    {
        path: '',
        component: _requirements_component__WEBPACK_IMPORTED_MODULE_3__["RequirementsComponent"],
        data: {
            title: 'Requirements'
        }
    }
];
var RequirementsRoutingModule = /** @class */ (function () {
    function RequirementsRoutingModule() {
    }
    RequirementsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RequirementsRoutingModule);
    return RequirementsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/requirements/requirements.component.css":
/*!***************************************************************!*\
  !*** ./src/app/views/requirements/requirements.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input, select, textarea {\r\n    border: 1px solid #b3acac;\r\n    border-radius: 3px;\r\n}\r\nthead{    \r\n    background: #21355C;\r\n    color: #fff;\r\n}\r\n.avatar {\r\n    left: 24%;\r\n}\r\nbutton {\r\n    background-color: #08ab9e;\r\n    border: #0b8076;\r\n    color: #fff;\r\n}\r\n.close {\r\n    background: transparent!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmVxdWlyZW1lbnRzL3JlcXVpcmVtZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcmVxdWlyZW1lbnRzL3JlcXVpcmVtZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IzYWNhYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG50aGVhZHsgICAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjMjEzNTVDO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmF2YXRhciB7XHJcbiAgICBsZWZ0OiAyNCU7XHJcbn1cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOGFiOWU7XHJcbiAgICBib3JkZXI6ICMwYjgwNzY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uY2xvc2Uge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/views/requirements/requirements.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/requirements/requirements.component.ts ***!
  \**************************************************************/
/*! exports provided: RequirementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequirementsComponent", function() { return RequirementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/loadspecs.service */ "./src/app/_services/loadspecs.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_requirement_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/requirement.service */ "./src/app/_services/requirement.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");








var RequirementsComponent = /** @class */ (function () {
    function RequirementsComponent(loadspecsService, alertify, requirementservice, renderer) {
        this.loadspecsService = loadspecsService;
        this.alertify = alertify;
        this.requirementservice = requirementservice;
        this.renderer = renderer;
        this.chatmodel = {};
        this.model = {};
        this.deals = {};
        this.roleid = Number(String(localStorage.getItem('RoleID')));
        this.userid = Number(localStorage.getItem('UserId'));
        this.LoginUser = localStorage.getItem('LoginUser');
        this.data = [];
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 25,
            retrieve: true,
            order: [[0, 'desc']]
        };
        this.isDtInitialized = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    RequirementsComponent.prototype.ngOnInit = function () {
        this.loadMakes();
        this.loadGenerations();
        this.loadLocations();
        this.loadRAMs();
        this.loadHDDs();
        this.loadProcessors();
        this.loadRequirements();
    };
    RequirementsComponent.prototype.loadLocations = function () {
        var _this = this;
        return this.loadspecsService.loadLocations().subscribe(function (locations) {
            _this.locations = locations.filter(function (proj) { return (proj.status === 1); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    RequirementsComponent.prototype.loadMakes = function () {
        var _this = this;
        return this.loadspecsService.getMakes().subscribe(function (partproducts) {
            _this.makes = partproducts.filter(function (proj) { return (proj.type === 1); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    RequirementsComponent.prototype.loadGenerations = function () {
        var _this = this;
        return this.loadspecsService.getGenerations().subscribe(function (generations) {
            _this.generations = generations;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    RequirementsComponent.prototype.loadModels = function (value) {
        var _this = this;
        return this.loadspecsService.getModels().subscribe(function (partproducts) {
            _this.models = partproducts.filter(function (proj) { return (Number(proj.parentId) === Number(value)); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    RequirementsComponent.prototype.loadRAMs = function () {
        var _this = this;
        return this.loadspecsService.loadSpectDetails().subscribe(function (rams) {
            _this.rams = rams.filter(function (proj) { return (proj.parentId === 1); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    RequirementsComponent.prototype.loadHDDs = function () {
        var _this = this;
        return this.loadspecsService.loadSpectDetails().subscribe(function (hdds) {
            _this.hdds = hdds.filter(function (proj) { return (proj.parentId === 2); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    RequirementsComponent.prototype.loadProcessors = function () {
        var _this = this;
        return this.loadspecsService.getProcessors().subscribe(function (processors) {
            _this.processors = processors;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    RequirementsComponent.prototype.loadRequirements = function () {
        var _this = this;
        return this.requirementservice.getRequirements().subscribe(function (requirements) {
            _this.requirements = requirements.filter(function (proj) { return (Number(proj.type) === 0) && Number(proj.flag) === 0; });
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
    RequirementsComponent.prototype.OpenstockModal = function (id) {
        var _this = this;
        return this.requirementservice.getRequirements().subscribe(function (requirement) {
            _this.requirement = requirement.filter(function (proj) { return (proj.requestID === id); });
            _this.model.ReqNo1 = _this.requirement[0].requestID;
            _this.model.MakeId1 = _this.requirement[0].makeName;
            _this.model.ModelId1 = _this.requirement[0].modelName;
            _this.model.ProcessorId1 = _this.requirement[0].processor;
            return _this.requirementservice.getOffers().subscribe(function (offers) {
                _this.mydeals = offers.filter(function (proj) { return (proj.requestID === id && proj.status === 0
                    && proj.empId === Number(localStorage.getItem('UserId'))); });
                _this.stockModal.show();
            }, function (error) {
                _this.alertify.error(error);
            });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    RequirementsComponent.prototype.openChatModal = function (id) {
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
    RequirementsComponent.prototype.sendMessagePost = function () {
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
    RequirementsComponent.prototype.sendDealsPost = function () {
        var _this = this;
        this.deals.EmpId = localStorage.getItem('UserId');
        if (this.model.RamType === null) {
            this.alertify.error('Select Ram Type');
            return;
        }
        if (this.model.Ram === null) {
            this.alertify.error('Select RAM');
            return;
        }
        if (this.model.Hddtype === null) {
            this.alertify.error('Select HDD Type');
            return;
        }
        if (this.model.Hdd === null) {
            this.alertify.error('Select HDD');
            return;
        }
        if (this.model.Adapter === undefined) {
            this.alertify.error('Select Adapter');
            return;
        }
        if (!this.model.Qty1) {
            this.alertify.error('Enter Qty');
            return;
        }
        if (!this.model.price1) {
            this.alertify.error('Enter price');
            return;
        }
        if (!this.model.Comment1) {
            this.alertify.error('Enter Comment');
            return;
        }
        document.getElementById('AddmyDeal').innerHTML = '<i class="fa fa-circle-o-notch mt-1 fa-lg fa-spin"></i> Sending...';
        document.getElementById('AddmyDeal').disabled = true;
        this.deals.RequestId = this.model.ReqNo1;
        this.deals.Qty = this.model.Qty1;
        this.deals.Price = this.model.price1;
        this.deals.Comment = this.model.Comment1;
        this.deals.Hddtype = this.model.Hddtype;
        this.deals.Hdd = this.model.Hdd;
        this.deals.RamType = this.model.RamType;
        this.deals.Ram = this.model.Ram;
        this.deals.Adapter = this.model.Adapter;
        this.requirementservice.sendDealsPost(this.deals).subscribe(function (offers) {
            _this.mydeals = offers.filter(function (proj) { return (proj.requestID === _this.model.ReqNo1 && proj.status === 0
                && proj.empId === Number(localStorage.getItem('UserId'))); });
            _this.model.Qty1 = '';
            _this.model.price1 = '';
            _this.model.Comment1 = '';
            document.getElementById('AddmyDeal').innerHTML = 'Add';
            document.getElementById('AddmyDeal').disabled = false;
            _this.alertify.success('Deals Posted Successfull');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    RequirementsComponent.prototype.OpendetailModal = function (id) {
        var _this = this;
        return this.requirementservice.getOffers().subscribe(function (offers) {
            _this.offers = offers.filter(function (proj) { return (proj.requestID === id && proj.status === 0); });
            _this.detailModal.show();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    RequirementsComponent.prototype.ApproveDeals = function (Id, value) {
        var _this = this;
        this.model = { Id: Id, Status: 1, Comment: value, app_by: Number(localStorage.getItem('UserId')) };
        document.getElementById('Dealsoffer_' + Id).innerHTML = '<span style="font-weight:bold;color:green;font-style:italic;font-size:15px">Approved</span>';
        this.requirementservice.ApproveRejectDealDeals(this.model).subscribe(function () {
            _this.loadRequirements();
            _this.alertify.success('Deal Approved');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    RequirementsComponent.prototype.Remove = function (Id) {
        var _this = this;
        this.alertify.confirm('are you sure ?', function () {
            _this.deals.Id = Id;
            _this.requirementservice.RemoveDealsPost(_this.deals).subscribe(function (offers) {
                _this.mydeals = offers.filter(function (proj) { return (proj.requestID === _this.model.ReqNo1 && proj.status === 0
                    && proj.empId === Number(localStorage.getItem('UserId'))); });
                _this.loadRequirements();
                _this.alertify.success('Deals Removed Successfull');
            }, function (error) {
                _this.alertify.error(error);
            });
        });
    };
    RequirementsComponent.prototype.RejectDeals = function (Id, value) {
        var _this = this;
        this.model = { Id: Id, Status: 2, Comment: value, app_by: Number(localStorage.getItem('UserId')) };
        document.getElementById('Dealsoffer_' + Id).innerHTML = '<span style="font-weight:bold;color:red;font-style:italic;font-size:15px">Rejected</span>';
        this.requirementservice.ApproveRejectDealDeals(this.model).subscribe(function () {
            _this.loadRequirements();
            _this.alertify.error('Deal Reject');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    RequirementsComponent.prototype.sendRequirementPost = function () {
        var _this = this;
        this.model.status = 0;
        this.model['userId'] = localStorage.getItem('UserId');
        if (this.model.MakeId === null) {
            this.alertify.error('Select Make');
            return;
        }
        if (this.model.ModelId === null) {
            this.alertify.error('Select Model');
            return;
        }
        if (this.model.ProcessorId === null) {
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
        if (!this.model.Cname) {
            this.alertify.error('Enter Customer Name');
            return;
        }
        if (!this.model.Qty) {
            this.alertify.error('Enter Qty');
            return;
        }
        if (!this.model.req_type) {
            this.alertify.error('Select Type');
            return;
        }
        if (!this.model.Adapter) {
            this.alertify.error('Select Adapter');
            return;
        }
        // if (this.model.loc_id === null) {
        //   this.alertify.error('Select Location');
        //   return;
        // }
        document.getElementById('postingrequest').innerHTML = '<i class="fa fa-circle-o-notch mt-1 fa-lg fa-spin"></i> Sending...';
        document.getElementById('postingrequest').disabled = true;
        this.requirementservice.sendRequirementPost(this.model).subscribe(function (requirements) {
            _this.requirements = requirements.filter(function (proj) { return (Number(proj.type) === 0) && Number(proj.flag) === 0; });
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
            _this.alertify.success('Request Sent Successfull');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    RequirementsComponent.prototype.CloseRequirement = function (Id) {
        var _this = this;
        this.model = { RequestID: Id, Status: 1 };
        this.requirementservice.CloseRequirement(this.model).subscribe(function () {
            document.getElementById('Req_' + Id).innerHTML = '<span style="font-weight:bold;color:green;font-style:italic;font-size:15px">Closed</span>';
            _this.alertify.success('Requirement Closed');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    RequirementsComponent.ctorParameters = function () { return [
        { type: _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_3__["LoadspecsService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] },
        { type: _services_requirement_service__WEBPACK_IMPORTED_MODULE_5__["RequirementService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"])
    ], RequirementsComponent.prototype, "dtElement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('infoModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], RequirementsComponent.prototype, "infoModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stockModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], RequirementsComponent.prototype, "stockModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('detailModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], RequirementsComponent.prototype, "detailModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ChatModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], RequirementsComponent.prototype, "ChatModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('table'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RequirementsComponent.prototype, "table", void 0);
    RequirementsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-requirements',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./requirements.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/requirements/requirements.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./requirements.component.css */ "./src/app/views/requirements/requirements.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_loadspecs_service__WEBPACK_IMPORTED_MODULE_3__["LoadspecsService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"],
            _services_requirement_service__WEBPACK_IMPORTED_MODULE_5__["RequirementService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], RequirementsComponent);
    return RequirementsComponent;
}());



/***/ }),

/***/ "./src/app/views/requirements/requirements.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/requirements/requirements.module.ts ***!
  \***********************************************************/
/*! exports provided: RequirementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequirementsModule", function() { return RequirementsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _requirements_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./requirements-routing.module */ "./src/app/views/requirements/requirements-routing.module.ts");
/* harmony import */ var _requirements_requirements_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../requirements/requirements.component */ "./src/app/views/requirements/requirements.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_select2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-select2 */ "./node_modules/ng-select2/fesm5/ng-select2.js");









var RequirementsModule = /** @class */ (function () {
    function RequirementsModule() {
    }
    RequirementsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_requirements_requirements_component__WEBPACK_IMPORTED_MODULE_6__["RequirementsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _requirements_routing_module__WEBPACK_IMPORTED_MODULE_5__["RequirementsRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ng_select2__WEBPACK_IMPORTED_MODULE_8__["NgSelect2Module"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"]
            ]
        })
    ], RequirementsModule);
    return RequirementsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-requirements-requirements-module.js.map