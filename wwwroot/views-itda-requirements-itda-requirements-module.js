(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-itda-requirements-itda-requirements-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/itda-requirements/itda-requirements.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/itda-requirements/itda-requirements.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>      \n    <div class=\"card  col-md-12\">\n        <div class=\"card-body table-responsive-sm\">\n          <div class=\"col-md-2 ml-auto\" style=\"text-align: right;\">\n              <button type=\"button\" class=\"btn btn-info mr-1\" data-toggle=\"modal\" (click)=\"infoModal.show()\" style=\"background: #08AB9E;border-color: #079288;color: #fff\">\n                  Add Requirement\n              </button>\n          </div>\n          <br>\n          <table datatable [dtTrigger]=\"dtTrigger\" [dtOptions]=\"dtOptions\" class=\"table table-responsive-sm table-hover table-striped table-outline mb-0\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th  style=\"display: none;\">###</th>\n                <th class=\"text-center\" style=\"width: 7.6%;\">###</th>\n                <th class=\"text-center\" style=\"width: 7.6%;\">Type</th>\n                <th class=\"text-center\" style=\"width: 7.6%;\">Title</th>\n                <th style=\"width: 7.6%;\">Detail</th>\n                <th style=\"width: 7.6%;\">Qty</th>\n                <th style=\"width: 7.6%;\">Price</th>\n                <th style=\"width: 7.6%;\">Availability Date</th>\n                <th style=\"width: 7.6%;\">CreatedBy</th>\n                <th style=\"width: 7.6%;\">Comment</th>\n                <th style=\"width: 7.6%;\">Created Date</th>\n                <th style=\"width: 12%;\">Action</th>\n              </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let itadlist of itadlists; let i = index\"  class=\"color_{{itadlist.id}}\">\n                  <td style=\"display: none;\"><span>{{ itadlist.id }}</span></td>\n                  <td class=\"text-center\">\n                    <span style=\"display: none;\">{{ itadlist.id }}</span>\n                    <div class=\"avatar\" *ngIf=\"itadlist.id\"></div>\n                    <div class=\"avatar\">\n                      <i class=\"cui-speech icons font-2xl d-block\" title=\"Need More Info\" style=\"cursor: pointer;color: #21355C;font-weight: bold;\"  (click)=\"openChatModal(itadlist.id)\"></i>\n                      <span *ngIf=\"itadlist.chatCount > 0\">\n                        <span *ngIf=\"itadlist.chatCount > itadlist.chatviewcount\" class=\"avatar-status badge-success\" style=\" width: 22px; height: 24px; background: #de7575; right: -5px; top: -13px; \">{{ itadlist.chatCount}}</span>\n                        <span *ngIf=\"itadlist.chatCount <=  itadlist.chatviewcount\" class=\"avatar-status badge-success\" style=\" width: 22px; height: 24px; background: green; right: -5px; top: -13px; \">{{ itadlist.chatCount}}</span>\n                      </span> \n                    </div>\n                  </td>\n                  <td class=\"text-center\">\n                    <span *ngIf=\"itadlist.p_type === 1\">Laptop</span>\n                    <span *ngIf=\"itadlist.p_type === 2\">Desktop</span>\n                    <span *ngIf=\"itadlist.p_type === 3\">Monitor</span>\n                    <span *ngIf=\"itadlist.p_type === 4\">Upload</span>\n                  </td>\n                  <td class=\"text-center\">\n                    {{ itadlist.p_title}}\n                  </td>\n                  <td>                      \n                    <div *ngIf=\"!itadlist.make_name\">Mix</div>\n                    <div *ngIf=\"itadlist.make_name\" class=\"small text-muted\"><strong>Make: </strong>{{ itadlist.make_name}}</div>\n                    <div *ngIf=\"itadlist.model_name\" class=\"small text-muted\"><strong>Model: </strong>{{ itadlist.model_name}}</div>\n                    <div *ngIf=\"itadlist.gen_name\" class=\"small text-muted\"><strong>GEN: </strong>{{ itadlist.gen_name}}</div>\n                    <div *ngIf=\"itadlist.cpu_name\" class=\"small text-muted\"><strong>CPU: </strong>{{ itadlist.cpu_name}}</div>\n                    <div *ngIf=\"itadlist.lang_name\" class=\"small text-muted\"><strong>KB lang: </strong>{{ itadlist.lang_name}}</div>\n                  </td>\n                  <td>{{ itadlist.qty}}</td>\n                  <td>{{ itadlist.itad_cur}}{{ itadlist.price}}</td>\n                  <td>{{itadlist.p_eta | date:'MMM, d, y'}}</td>\n                  <td>{{ itadlist.username}}</td>\n                  <td>{{ itadlist.comment}}</td>\n                  <td>{{itadlist.created_at | date:'MMM, d, y'}}</td>     \n                  <td>        \n                    <button class=\"btn btn-square btn-sm\" (click)=\"OpenEmaiModal(itadlist.id,itadlist.user_id,itadlist.p_title)\">\n                      <i class=\"fa fa-envelope-open-o\" style=\"font-size:18px\"></i> send email\n                    </button>\n                  </td>              \n                </tr>\n              </tbody>\n          </table>\n        </div>\n      </div>\n      <div bsModal #infoModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 47%;\">\n            <form  #requestForm=\"ngForm\" (ngSubmit)=\"sendPurchaseOrderPost()\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Add Requirement</h4>\n                <button type=\"button\" class=\"close\" (click)=\"infoModal.hide()\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n                </div>\n                <div class=\"modal-body\">          \n                <div class=\"card\">\n                    <div class=\"card-body row\">\n                        <div class=\"form-group col-md-12\">\n                            <div class=\"col-md-12 col-form-label\"  style=\"text-align: center;\">\n                                <div class=\"form-check form-check-inline mr-1 color_tab_{{model.ptype_id == 1 ? '1' : '0'}}\" id=\"inline-radios\" style=\"padding:2px 31px;border:1px solid;\">\n                                <input class=\"form-check-input\" type=\"radio\"  name=\"ptype_id\" [(ngModel)]=\"model.ptype_id\" id=\"inlineRadio1\" value=\"1\">\n                                <label class=\"form-check-label\" for=\"inlineRadio1\" style=\"width:100%;\">Laptop</label>\n                                </div>\n                                <div class=\"form-check form-check-inline mr-1 color_tab_{{model.ptype_id == 2 ? '2' : '0'}}\"  style=\"padding:2px 31px;border:1px solid;\">\n                                <input class=\"form-check-input\" type=\"radio\" name=\"ptype_id\" [(ngModel)]=\"model.ptype_id\" id=\"inlineRadio2\" value=\"2\">\n                                <label class=\"form-check-label\" for=\"inlineRadio2\" style=\"width:100%;\">Desktop</label>\n                                </div>\n                                <div class=\"form-check form-check-inline mr-1 color_tab_{{model.ptype_id == 3 ? '3' : '0'}}\" style=\"padding:2px 31px;border:1px solid;\"> \n                                <input class=\"form-check-input\" type=\"radio\" name=\"ptype_id\" [(ngModel)]=\"model.ptype_id\" id=\"inlineRadio3\" value=\"3\">\n                                <label class=\"form-check-label\" for=\"inlineRadio3\" style=\"width:100%;\">Monitor</label>\n                                </div>\n                            </div>\n                        </div>\n                    <div class=\"col-md-6\">            \n                        <div class=\"form-group row\">\n                        <div class=\"input-group\">                    \n                            <label class=\"col-md-4 col-form-label\">Title</label>\n                            <div class=\"col-md-8 col-form-label\">\n                            <input type=\"text\" id=\"p_title\" name=\"p_title\" [(ngModel)]=\"model.p_title\"  class=\"form-control\" placeholder=\"Enter Title\"></div>\n                        </div>\n                        </div>             \n                        <div class=\"form-group row\">\n                        <div class=\"input-group\">\n                            <label class=\"col-md-4 col-form-label\">Make</label>\n                            <div class=\"col-md-8 col-form-label\">\n                            <ng-select2 [data]=\"makes\" [width]=\"250\"  name=\"make_id\"  [(ngModel)]=\"model.make_id\" (ngModelChange)=\"loadModels($event)\"></ng-select2>                                                                           \n                            </div>                  \n                        </div>\n                        </div>\n                        <div class=\"form-group row\">\n                        <div class=\"input-group\">\n                            <label class=\"col-md-4 col-form-label\">Model</label>  \n                            <div class=\"col-md-8 col-form-label\">\n                              <input type=\"text\" id=\"model_name\" name=\"model_name\" [(ngModel)]=\"model.model_name\"  class=\"form-control\" placeholder=\"Enter Model\">\n                            </div> \n                        </div>\n                        </div>\n                        <div class=\"form-group row\" *ngIf=\"model.ptype_id != 3\">\n                        <div class=\"input-group\">\n                            <label class=\"col-md-4 col-form-label\" >CPU</label>    \n                            <div class=\"col-md-8 col-form-label\">\n                                <ng-select2 [data]=\"processors\"  [width]=\"250\" name=\"cpu_id\"  [(ngModel)]=\"model.cpu_id\"></ng-select2> \n                            </div> \n                        </div>\n                        </div>  \n                    </div>            \n                    <div class=\"col-md-6\"> \n                        <div class=\"form-group row laptop\" *ngIf=\"model.ptype_id == 1\">\n                        <label class=\"col-md-4 col-form-label\">KB language</label> \n                        <div class=\"col-md-8 col-form-label\">\n                          <input type=\"text\" id=\"lang_name\" name=\"lang_name\" [(ngModel)]=\"model.lang_name\"  class=\"form-control\" placeholder=\"Enter KB language\">\n                        </div>\n                        </div> \n                        <div class=\"form-group row form_factor\" *ngIf=\"model.ptype_id == 2\">\n                        <div class=\"input-group\">                    \n                            <label class=\"col-md-4 col-form-label\">Form Factor</label>\n                            <div class=\"col-md-8 col-form-label\">\n                            <input type=\"text\" id=\"form_factor\" name=\"form_factor\" [(ngModel)]=\"model.form_factor\"  class=\"form-control\" placeholder=\"Form Factor\"></div>\n                        </div>\n                        </div>\n                        <div class=\"form-group row\">\n                        <div class=\"input-group\">                    \n                            <label class=\"col-md-4 col-form-label\">Qty</label>\n                            <div class=\"col-md-8 col-form-label\">\n                            <input type=\"number\" id=\"po_qty\" name=\"po_qty\" [(ngModel)]=\"model.po_qty\" [min]=\"0\" class=\"form-control\" placeholder=\"Qty\"></div>\n                        </div>\n                        </div>           \n                        <div class=\"form-group row\">\n                        <div class=\"input-group\">                    \n                            <label class=\"col-md-4 col-form-label\">Target Price</label>\n                            <div class=\"input-group col-md-8\">\n                            <ng-select2 [data]=\"currency\"  [width]=\"60\"  name=\"itad_cur\"  [(ngModel)]=\"model.itad_cur\"></ng-select2>\n                            <input type=\"number\" id=\"po_price\" name=\"po_price\" [(ngModel)]=\"model.po_price\" [min]=\"0\"  class=\"form-control\" placeholder=\"Price\">\n                          </div>\n                        </div>\n                        </div>         \n                        <div class=\"form-group row\">\n                        <div class=\"input-group\">                    \n                            <label class=\"col-md-4 col-form-label\">Availability By</label>\n                            <div class=\"col-md-8 col-form-label\">\n                            <input class=\"form-control\" id=\"date-input\" type=\"date\" min=\"{{this.today}}\" name=\"p_eta\" [(ngModel)]=\"model.p_eta\" placeholder=\"date\">\n                            </div>\n                        </div>\n                        </div>               \n                        <div class=\"form-group row\">\n                        <div class=\"input-group\">                    \n                            <label class=\"col-md-4 col-form-label\">Comment</label>\n                            <div class=\"col-md-8 col-form-label\">                \n                            <textarea class=\"form-control\" name=\"comment\" [(ngModel)]=\"model.comment\" id=\"Comment\" placeholder=\"Comment\" rows=\"3\"></textarea>\n                            </div>\n                        </div>\n                        </div>  \n                    </div> \n                    </div>\n                </div>\n                </div>\n                <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"infoModal.hide()\">Close</button>        \n                <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"postitad\">Submit</button>\n                </div>\n            </div><!-- /.modal-content -->\n            </form>\n        </div><!-- /.modal-dialog -->\n      </div>\n</div>\n\n<div bsModal #ChatModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 47%;\">  \n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Admin Chats</h4>\n        <button type=\"button\" class=\"close\" (click)=\"ChatModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">          \n      <div *ngFor=\"let chat of chats\">\n        <div *ngIf=\"chat.u_Id !== userid \" class=\"card\" style=\"width: 86%;background: #80808057;border-radius: 27px;\"> \n          <div class=\"row\"><div class=\"col-md-2\">\n            <img class=\"img-circle\" style=\"width: 100%;padding: 6px;\" src=\"assets/images/User.png\"></div>\n            <div class=\"col-md-10\">\n              <h5 style=\"margin: 6px 0px;border-bottom: 1px solid #bdb2b263\">{{ chat.userName}}</h5>\n              <p>{{ chat.text}}</p>\n            <p><small>{{ chat.createdDate | date:'MMM d, h:mm a'}}</small></p></div></div>\n          </div>\n         <div *ngIf=\"chat.u_Id === userid\" class=\"card\"  style=\"width: 86%;background: #80808057;border-radius: 27px;float:right;\"> \n          <div class=\"row\">\n            <div class=\"col-md-10\">\n              <h5 style=\"text-align:right;margin: 6px 0px;border-bottom: 1px solid #bdb2b263\">{{ chat.userName}}</h5>\n              <p style=\"padding-left:20px;\">{{ chat.text}}</p>\n              <p style=\"text-align:right;\"><small>{{ chat.createdDate | date:'h:mm a'}}</small></p>\n            </div>\n            <div class=\"col-md-2\">\n              <img class=\"img-circle\" style=\"width: 100%;padding: 6px;\" src=\"assets/images/User.png\">\n            </div>\n          </div>\n          </div>\n        </div>\n      </div>\n      <form  #requestForm=\"ngForm\" (ngSubmit)=\"sendMessagePost()\">\n        <div class=\"modal-footer\">\n          <input type=\"hidden\"  name=\"Ref_Id\" [(ngModel)]=\"model.Ref_Id\">\n          <textarea name=\"\"   name=\"Text\" [(ngModel)]=\"model.Text\" cols=\"95\" rows=\"2\"></textarea>       \n          <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"SendSMS\">Send</button>\n        </div>\n    </form>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n<div bsModal #emailsendModel=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 1000px;\">\n  <form  #shareForm=\"ngForm\" (ngSubmit)=\"SendEmail()\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Send Email</h4>\n        <button type=\"button\" class=\"close\" (click)=\"emailsendModel.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">    \n        <div class=\"card\">\n            <div class=\"card-body\">\n              <div class=\"form-group\">\n                <div class=\"input-group\">\n                  <label style=\"padding: 8px;width: 10%;\">Email: </label> \n                  <input type=\"text\" id=\"email\" name=\"email\"  [(ngModel)]=\"companydetail.email\"  class=\"form-control\" disabled>\n                </div>\n              </div>                    \n                <div class=\"form-group\">\n                  <div class=\"input-group\">                    \n                    <label style=\"padding: 8px;width: 10%;\">Subject</label>    \n                    <input type=\"text\" id=\"subject\" name=\"subject\"  [(ngModel)]=\"companydetail.subject\"  class=\"form-control\" disabled>\n                  </div>\n                </div>  \n                <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <label style=\"padding: 8px;width: 10%;\">Text</label>  \n                    <!-- <input type=\"text\" id=\"r_cur\" name=\"r_cur\"  [(ngModel)]=\"pmodel.r_cur\"  class=\"form-control\"> -->\n                    <ckeditor [editor]=\"Editor\" name=\"text\" required [(ngModel)]=\"companydetail.text\" style=\"width: 90%;\" ></ckeditor>\n                  </div>\n                </div>\n            </div>\n          </div>      \n      </div>\n      <div class=\"modal-footer\">\n        <!-- <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"emailsendModel.hide()\">Close</button>-->        \n        <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"SendEmail\">Send</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </form>\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n");

/***/ }),

/***/ "./src/app/views/itda-requirements/itda-requirements-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/itda-requirements/itda-requirements-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ItdaRequirementsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItdaRequirementsRoutingModule", function() { return ItdaRequirementsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _itda_requirements_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./itda-requirements.component */ "./src/app/views/itda-requirements/itda-requirements.component.ts");




var routes = [
    {
        path: '',
        component: _itda_requirements_component__WEBPACK_IMPORTED_MODULE_3__["ItdaRequirementsComponent"],
        data: {
            title: 'Circular Required'
        }
    }
];
var ItdaRequirementsRoutingModule = /** @class */ (function () {
    function ItdaRequirementsRoutingModule() {
    }
    ItdaRequirementsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ItdaRequirementsRoutingModule);
    return ItdaRequirementsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/itda-requirements/itda-requirements.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/views/itda-requirements/itda-requirements.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nbutton {\r\n    background-color: #08ab9e;\r\n    color: #fff;\r\n    border: 0;\r\n}\r\n.close {\r\n    background: transparent!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaXRkYS1yZXF1aXJlbWVudHMvaXRkYS1yZXF1aXJlbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFNBQVM7QUFDYjtBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvaXRkYS1yZXF1aXJlbWVudHMvaXRkYS1yZXF1aXJlbWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4YWI5ZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcbi5jbG9zZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/itda-requirements/itda-requirements.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/itda-requirements/itda-requirements.component.ts ***!
  \************************************************************************/
/*! exports provided: ItdaRequirementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItdaRequirementsComponent", function() { return ItdaRequirementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/loadspecs.service */ "./src/app/_services/loadspecs.service.ts");
/* harmony import */ var _services_requirement_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_services/requirement.service */ "./src/app/_services/requirement.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_9__);










var ItdaRequirementsComponent = /** @class */ (function () {
    function ItdaRequirementsComponent(loadspecsService, alertify, userService, requirementservice) {
        this.loadspecsService = loadspecsService;
        this.alertify = alertify;
        this.userService = userService;
        this.requirementservice = requirementservice;
        this.today = {};
        this.model = {};
        this.itadmodel = {};
        this.companydetail = {};
        this.chatmodel = {};
        this.ToDate = new Date();
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_9__;
        this.userid = Number(localStorage.getItem('UserId'));
        this.roleid = Number(localStorage.getItem('RoleID'));
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
                        columns: [2, 3, 4, 5, 6, 7, 8, 9, 10]
                    }
                },
                {
                    extend: 'csv',
                    title: 'Order_Data',
                    exportOptions: {
                        columns: [2, 3, 4, 5, 6, 7, 8, 9, 10]
                    }
                }
            ]
        };
        this.isDtInitialized = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ItdaRequirementsComponent.prototype.ngOnInit = function () {
        this.model.itad_cur = '2';
        this.today = new Date().toISOString().split('T')[0];
        this.loadMakes();
        this.loadProcessors();
        this.loadSpecs();
        this.loadITAD();
        this.loadcurrency();
    };
    ItdaRequirementsComponent.prototype.loadMakes = function () {
        var _this = this;
        return this.loadspecsService.getMakes().subscribe(function (partproducts) {
            _this.makes = partproducts.filter(function (proj) { return (proj.type === 1); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ItdaRequirementsComponent.prototype.loadProcessors = function () {
        var _this = this;
        return this.loadspecsService.getProcessors().subscribe(function (processors) {
            _this.processors = processors;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ItdaRequirementsComponent.prototype.loadSpecs = function () {
        var _this = this;
        return this.loadspecsService.loadSpectDetails().subscribe(function (rams) {
            _this.rams = rams.filter(function (proj) { return (proj.parentId === 1); });
            _this.hdds = rams.filter(function (proj) { return (proj.parentId === 2); });
            _this.kebs = rams.filter(function (proj) { return (proj.parentId === 3); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ItdaRequirementsComponent.prototype.loadModels = function (value) {
        var _this = this;
        return this.loadspecsService.getModels().subscribe(function (partproducts) {
            _this.models = partproducts.filter(function (proj) { return (Number(proj.parentId) === Number(value)); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ItdaRequirementsComponent.prototype.loadcurrency = function () {
        var _this = this;
        return this.loadspecsService.getcurrency().subscribe(function (currency) {
            _this.currency = currency;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ItdaRequirementsComponent.prototype.loadITAD = function () {
        var _this = this;
        return this.requirementservice.getITAD().subscribe(function (itadlists) {
            if (_this.roleid === 12) {
                _this.itadlists = itadlists.filter(function (proj) { return (proj.stock_type === 'Circular'); });
            }
            else {
                _this.itadlists = itadlists.filter(function (proj) { return (proj.stock_type === 'Circular'); });
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
    ItdaRequirementsComponent.prototype.sendPurchaseOrderPost = function () {
        var _this = this;
        if (!this.model.ptype_id) {
            this.alertify.error('Enter product type');
            return;
        }
        if (!this.model.p_title) {
            this.alertify.error('Enter product title');
            return;
        }
        if (!this.model.p_title.trim()) {
            this.alertify.error('Invalid product title');
            return;
        }
        if (this.model.make_id === null) {
            this.alertify.error('Select Make');
            return;
        }
        if (!this.model.model_name) {
            this.alertify.error('Enter Model');
            return;
        }
        if (!this.model.model_name.trim()) {
            this.alertify.error('Invalid Model');
            return;
        }
        if (this.model.ptype_id === '1' && this.model.cpu_id === null || this.model.ptype_id === '2' && this.model.cpu_id === null) {
            this.alertify.error('Select CPU');
            return;
        }
        if (this.model.ptype_id === '1' && !this.model.lang_name) {
            this.alertify.error('Enter KB Language');
            return;
        }
        if (this.model.ptype_id === '1' && !this.model.lang_name.trim()) {
            this.alertify.error('Invalid KB Language');
            return;
        }
        if (this.model.ptype_id === '2' && !this.model.form_factor) {
            this.alertify.error('Enter form factor');
            return;
        }
        if (this.model.ptype_id === '2' && !this.model.form_factor.trim()) {
            this.alertify.error('Invalid form factor');
            return;
        }
        if (!this.model.po_qty) {
            this.alertify.error('Enter Qty');
            return;
        }
        if (this.model.po_qty < 1) {
            this.alertify.error('Invalid Qty: qty should be more than zero');
            return;
        }
        if (!this.model.po_price) {
            this.alertify.error('Enter price');
            return;
        }
        if (this.model.po_price < 0) {
            this.alertify.error('Invalid price: price qty should be more than zero');
            return;
        }
        if (!this.model.p_eta) {
            this.alertify.error('Select ETA');
            return;
        }
        if ((new Date(this.model.p_eta)).setHours(0, 0, 0, 0) < this.ToDate.setHours(0, 0, 0, 0)) {
            this.alertify.error('The ETA must be bigger or equal to today\'s date');
            return false;
        }
        if (this.model.ptype_id === '1') {
            this.itadmodel.cpu_id = this.model.cpu_id;
            this.itadmodel.lang_name = this.model.lang_name;
        }
        if (this.model.ptype_id === '2') {
            this.itadmodel.cpu_id = this.model.cpu_id;
            this.itadmodel.form_factor = this.model.form_factor;
        }
        this.itadmodel.model_name = this.model.model_name;
        this.itadmodel.make_id = this.model.make_id;
        this.itadmodel.p_title = this.model.p_title;
        this.itadmodel.p_type = this.model.ptype_id;
        this.itadmodel.qty = this.model.po_qty;
        this.itadmodel.itad_cur = this.model.itad_cur;
        this.itadmodel.price = this.model.po_price;
        this.itadmodel.p_eta = this.model.p_eta;
        this.itadmodel.comment = this.model.comment;
        this.itadmodel.user_id = this.userid;
        this.itadmodel.stock_type = 'Circular';
        document.getElementById('postitad').innerHTML = '<i class="fa fa-circle-o-notch mt-1 fa-lg fa-spin"></i> Sending...';
        document.getElementById('postitad').disabled = true;
        this.requirementservice.sendITADPost(this.itadmodel).subscribe(function (itadlist) {
            _this.model = {};
            _this.model.make_id = null;
            _this.model.cpu_id = null;
            document.getElementById('postitad').innerHTML = 'Submit';
            document.getElementById('postitad').disabled = false;
            _this.infoModal.hide();
            _this.alertify.success('ITAD requirement successfully added.');
            _this.loadITAD();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ItdaRequirementsComponent.prototype.openChatModal = function (id) {
        var _this = this;
        this.model.Ref_Id = id;
        this.chatmodel.ref_id = id;
        this.chatmodel.user_id = this.userid;
        this.chatmodel.type = 4;
        return this.requirementservice.ITADviewChats(this.chatmodel).subscribe(function (chats) {
            _this.chats = chats.filter(function (proj) { return (Number(proj.status) === 0 && proj.ref_Id === id); });
            _this.loadITAD();
            _this.ChatModal.show();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ItdaRequirementsComponent.prototype.sendMessagePost = function () {
        var _this = this;
        this.model.U_Id = Number(localStorage.getItem('UserId'));
        this.model.type = 4;
        if (!this.model.Text) {
            this.alertify.error('Enter Comment');
            return;
        }
        this.requirementservice.sendShortfalllChatPost(this.model).subscribe(function (chats) {
            _this.chats = chats.filter(function (proj) { return (Number(proj.status) === 0 && proj.ref_Id === _this.model.Ref_Id); });
            _this.loadITAD();
            _this.model.Text = '';
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ItdaRequirementsComponent.prototype.OpenEmaiModal = function (id, user_id, p_title) {
        var _this = this;
        return this.userService.getUsers().subscribe(function (users) {
            _this.users = users.filter(function (proj) { return (proj.id === user_id); });
            _this.companydetail.email = _this.users[0].email;
            _this.companydetail.subject = 'RE: ' + p_title;
            _this.companydetail.username = _this.users[0].username;
            _this.companydetail.text = '';
            _this.emailsendModel.show();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ItdaRequirementsComponent.prototype.SendEmail = function () {
        var _this = this;
        this.companydetail.user_id = Number(localStorage.getItem('UserId'));
        if (!this.companydetail.text) {
            this.alertify.error('Write Email');
            return;
        }
        this.requirementservice.SendEmail(this.companydetail).subscribe(function () {
            _this.emailsendModel.hide();
            _this.alertify.success('Email has been sent successfully.');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ItdaRequirementsComponent.ctorParameters = function () { return [
        { type: _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_6__["LoadspecsService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
        { type: _services_requirement_service__WEBPACK_IMPORTED_MODULE_7__["RequirementService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('infoModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], ItdaRequirementsComponent.prototype, "infoModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('uploadfile'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], ItdaRequirementsComponent.prototype, "uploadfile", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ChatModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], ItdaRequirementsComponent.prototype, "ChatModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('emailsendModel'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], ItdaRequirementsComponent.prototype, "emailsendModel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"])
    ], ItdaRequirementsComponent.prototype, "dtElement", void 0);
    ItdaRequirementsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-itda-requirements',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./itda-requirements.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/itda-requirements/itda-requirements.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./itda-requirements.component.css */ "./src/app/views/itda-requirements/itda-requirements.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_loadspecs_service__WEBPACK_IMPORTED_MODULE_6__["LoadspecsService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _services_requirement_service__WEBPACK_IMPORTED_MODULE_7__["RequirementService"]])
    ], ItdaRequirementsComponent);
    return ItdaRequirementsComponent;
}());



/***/ }),

/***/ "./src/app/views/itda-requirements/itda-requirements.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/itda-requirements/itda-requirements.module.ts ***!
  \*********************************************************************/
/*! exports provided: ItdaRequirementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItdaRequirementsModule", function() { return ItdaRequirementsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _itda_requirements_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./itda-requirements-routing.module */ "./src/app/views/itda-requirements/itda-requirements-routing.module.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _itda_requirements_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./itda-requirements.component */ "./src/app/views/itda-requirements/itda-requirements.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_select2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-select2 */ "./node_modules/ng-select2/fesm5/ng-select2.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js");










var ItdaRequirementsModule = /** @class */ (function () {
    function ItdaRequirementsModule() {
    }
    ItdaRequirementsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_itda_requirements_component__WEBPACK_IMPORTED_MODULE_5__["ItdaRequirementsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _itda_requirements_routing_module__WEBPACK_IMPORTED_MODULE_3__["ItdaRequirementsRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ng_select2__WEBPACK_IMPORTED_MODULE_7__["NgSelect2Module"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"]
            ]
        })
    ], ItdaRequirementsModule);
    return ItdaRequirementsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-itda-requirements-itda-requirements-module.js.map