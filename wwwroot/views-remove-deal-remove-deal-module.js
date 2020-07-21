(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-remove-deal-remove-deal-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/remove-deal/remove-deal.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/remove-deal/remove-deal.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\n    <!--/.card-->\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <br>\n            <table datatable [dtTrigger]=\"dtTrigger\" [dtOptions]=\"dtOptions\" class=\"table table-responsive-sm table-striped table-hover table-outline mb-0\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th class=\"text-center\" style=\"width: 130px;\">RequestID</th>\n                  <th>Detail</th>\n                  <th>Specification </th>\n                  <th  *ngIf=\"roleid == 1 || roleid == 9\">Supplier Name</th>\n                  <th>Qty</th>\n                  <th>Price</th>\n                  <th>Type</th>\n                  <th>Comments</th>\n                  <th>Created By</th>\n                  <th>Created Date</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of items; let i = index\">  \n                  <td class=\"text-center\">\n                    <div  style=\"position: absolute;\">{{ item.req_id}}</div>\n                    <div class=\"avatar\">\n                      <i class=\"cui-speech icons font-2xl d-block\" title=\"Need More Info\" style=\"cursor: pointer;color: #21355C;font-weight: bold;\"  (click)=\"openChatModal(item.id)\"></i>\n                      <span *ngIf=\"item.chat_count > 0\">\n                        <span  class=\"avatar-status badge-success\" style=\" width: 22px; height: 24px; background: green; right: -5px; top: -13px; \">{{ item.chat_count}}</span>\n                      </span> \n                    </div>\n                  </td> \n                  <td>\n                    <div *ngIf=\"item.make_name\" class=\"small text-muted\"><strong>Make: </strong>{{ item.make_name}}</div>\n                    <div *ngIf=\"item.model_name\" class=\"small text-muted\"><strong>Model: </strong>{{ item.model_name}}</div>\n                    <div *ngIf=\"item.processor\" class=\"small text-muted\"><strong>Processor: </strong>{{ item.processor}}</div>\n                    <div *ngIf=\"item.gen_name\" class=\"small text-muted\"><strong>GEN: </strong>{{ item.gen_name}}</div>\n                  </td>\n                  <td>\n                    <div *ngIf=\"item.hdd_name\" class=\"small text-muted\"><strong>HDD: </strong>{{ item.hdd_name}}</div>\n                    <div *ngIf=\"item.ram_name\" class=\"small text-muted\"><strong>RAM: </strong>{{ item.ram_name}}</div>\n                    <div *ngIf=\"item.adp_name\" class=\"small text-muted\"><strong>Adapter: </strong>{{ item.adp_name}}</div>\n                  </td>\n                  <td  *ngIf=\"roleid == 1 || roleid == 9\">{{ item.c_name}}</td>\n                  <td>{{ item.qty}}</td>\n                  <td>{{item.price}} </td>\n                  <td>{{item.type_name}} </td>\n                  <td>\n                    <div *ngIf=\"item.comment\">{{item.comment}}</div>\n                    <div *ngIf=\"item.comment\" class=\"small text-muted\"><span style=\"font-style: italic;\">{{item.user_name}}</span></div>\n                     <div *ngIf=\"item.deal_comment\">{{item.deal_comment}}</div>\n                    <div *ngIf=\"item.deal_comment\" class=\"small text-muted\"><span style=\"font-style: italic;\">Imran</span></div>\n                    <div *ngIf=\"item.deal_reason\">{{item.deal_reason}}</div>\n                    <div *ngIf=\"item.deal_reason\" class=\"small text-muted\"><span style=\"font-style: italic;\">Lawrence</span></div>\n                  </td>\n                  <td>{{item.user_name}} </td>\n                  <td>{{ item.created_at | date:'MMM d, y'}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div><!--/.col-->\n    </div><!--/.row-->\n    <!--/.col-->\n    <!-- <div *ngIf=\"roleid !== 1  && roleid !==9\">\n      <div class=\"app flex-row align-items-center\">\n        <div class=\"container\">\n          <div class=\"row justify-content-center\">\n            <div class=\"col-md-6\">\n              <div class=\"clearfix\">\n                <h1 class=\"float-left display-3 mr-4\">404</h1>\n                <h4 class=\"pt-3\">Oops! You're lost.</h4>\n                <p class=\"text-muted\">The page you are looking for was not found.</p>\n              </div>\n              <div class=\"input-prepend input-group\">\n                <div class=\"input-group-prepend\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      \n    </div> -->\n  <div bsModal #ChatModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\" style=\"max-width: 47%;\">  \n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">ChatBox</h4>\n          <button type=\"button\" class=\"close\" (click)=\"ChatModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div *ngFor=\"let chat of chats\">\n          <div *ngIf=\"chat.u_Id !== userid \" class=\"card\" style=\"width: 86%;background: #80808057;border-radius: 27px;\"> \n            <div class=\"row\"><div class=\"col-md-2\">\n              <img class=\"img-circle\" style=\"width: 100%;padding: 6px;\" src=\"assets/images/User.png\"></div>\n              <div class=\"col-md-10\">\n                <h5 style=\"margin: 6px 0px;border-bottom: 1px solid #bdb2b263\">{{ chat.userName}}</h5>\n                <p>{{ chat.text}}</p>\n              <p><small>{{ chat.createdDate | date:'MMM d, h:mm a'}}</small></p></div></div>\n            </div>\n           <div *ngIf=\"chat.u_Id === userid\" class=\"card\"  style=\"width: 86%;background: #80808057;border-radius: 27px;float:right;\"> \n            <div class=\"row\">\n              <div class=\"col-md-10\">\n                <h5 style=\"text-align:right;margin: 6px 0px;border-bottom: 1px solid #bdb2b263\">{{ chat.userName}}</h5>\n                <p style=\"padding-left:20px;\">{{ chat.text}}</p>\n                <p style=\"text-align:right;\"><small>{{ chat.createdDate | date:'h:mm a'}}</small></p>\n              </div>\n              <div class=\"col-md-2\">\n                <img class=\"img-circle\" style=\"width: 100%;padding: 6px;\" src=\"assets/images/User.png\">\n              </div>\n            </div>\n            </div>\n          </div>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  ");

/***/ }),

/***/ "./src/app/views/remove-deal/remove-deal-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/remove-deal/remove-deal-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: RemoveDealRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveDealRoutingModule", function() { return RemoveDealRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _remove_deal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remove-deal.component */ "./src/app/views/remove-deal/remove-deal.component.ts");




var routes = [
    {
        path: '',
        component: _remove_deal_component__WEBPACK_IMPORTED_MODULE_3__["RemoveDealComponent"],
        data: {
            title: 'Removed Deals'
        }
    }
];
var RemoveDealRoutingModule = /** @class */ (function () {
    function RemoveDealRoutingModule() {
    }
    RemoveDealRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RemoveDealRoutingModule);
    return RemoveDealRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/remove-deal/remove-deal.component.css":
/*!*************************************************************!*\
  !*** ./src/app/views/remove-deal/remove-deal.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.avatar {\r\n    left: 24%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmVtb3ZlLWRlYWwvcmVtb3ZlLWRlYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9yZW1vdmUtZGVhbC9yZW1vdmUtZGVhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5hdmF0YXIge1xyXG4gICAgbGVmdDogMjQlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/views/remove-deal/remove-deal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/remove-deal/remove-deal.component.ts ***!
  \************************************************************/
/*! exports provided: RemoveDealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveDealComponent", function() { return RemoveDealComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_requirement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/requirement.service */ "./src/app/_services/requirement.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");







var RemoveDealComponent = /** @class */ (function () {
    function RemoveDealComponent(requirementservice, alertify) {
        this.requirementservice = requirementservice;
        this.alertify = alertify;
        this.roleid = Number(String(localStorage.getItem('RoleID')));
        this.userid = Number(localStorage.getItem('UserId'));
        this.model = {};
        this.chatmodel = {};
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 25,
            retrieve: true,
            order: [[0, 'desc']]
        };
        this.isDtInitialized = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    RemoveDealComponent.prototype.ngOnInit = function () {
        this.loadDeals();
    };
    RemoveDealComponent.prototype.loadDeals = function () {
        var _this = this;
        return this.requirementservice.getRemoveddeals().subscribe(function (items) {
            _this.items = items;
            console.log(_this.items);
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
    RemoveDealComponent.prototype.openChatModal = function (id) {
        var _this = this;
        this.model.Ref_Id = id;
        this.chatmodel.ref_id = id;
        this.chatmodel.user_id = this.userid;
        return this.requirementservice.viewChats(this.chatmodel).subscribe(function (chats) {
            _this.chats = chats.filter(function (proj) { return (Number(proj.status) === 0 && proj.ref_Id === id); });
            _this.ChatModal.show();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    RemoveDealComponent.ctorParameters = function () { return [
        { type: _services_requirement_service__WEBPACK_IMPORTED_MODULE_4__["RequirementService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ChatModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalDirective"])
    ], RemoveDealComponent.prototype, "ChatModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"])
    ], RemoveDealComponent.prototype, "dtElement", void 0);
    RemoveDealComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-remove-deal',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./remove-deal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/remove-deal/remove-deal.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./remove-deal.component.css */ "./src/app/views/remove-deal/remove-deal.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_requirement_service__WEBPACK_IMPORTED_MODULE_4__["RequirementService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]])
    ], RemoveDealComponent);
    return RemoveDealComponent;
}());



/***/ }),

/***/ "./src/app/views/remove-deal/remove-deal.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/remove-deal/remove-deal.module.ts ***!
  \*********************************************************/
/*! exports provided: RemoveDealModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveDealModule", function() { return RemoveDealModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _remove_deal_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remove-deal-routing.module */ "./src/app/views/remove-deal/remove-deal-routing.module.ts");
/* harmony import */ var _remove_deal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remove-deal.component */ "./src/app/views/remove-deal/remove-deal.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");







var RemoveDealModule = /** @class */ (function () {
    function RemoveDealModule() {
    }
    RemoveDealModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_remove_deal_component__WEBPACK_IMPORTED_MODULE_4__["RemoveDealComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _remove_deal_routing_module__WEBPACK_IMPORTED_MODULE_3__["RemoveDealRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot()
            ]
        })
    ], RemoveDealModule);
    return RemoveDealModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-remove-deal-remove-deal-module.js.map