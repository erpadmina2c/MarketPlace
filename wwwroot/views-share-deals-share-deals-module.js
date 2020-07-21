(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-share-deals-share-deals-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/share-deals/share-deals.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/share-deals/share-deals.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div *ngIf=\"roleid ==1 || roleid ==3 || roleid ==8 || roleid ==5 || roleid ==9\" class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <br>\n          <table datatable [dtTrigger]=\"dtTrigger\" [dtOptions]=\"dtOptions\" class=\"table table-responsive-sm table-hover table-striped table-outline mb-0\">\n            <thead class=\"thead-light\">\n              <tr>\n                <!-- <th class=\"text-center\"><i class=\"icon-people\"></i></th> -->\n                <th>RequestID</th>\n                <th>Details</th>\n                <th>Specification </th>\n                <th *ngIf=\"roleid ==1 || roleid ==3\">Price</th>\n                <th *ngIf=\"roleid ==1 || roleid ==3\">Qty</th>\n                <th *ngIf=\"roleid ==1 || roleid ==3\">Created By</th>\n                <th *ngIf=\"roleid ==1 || roleid ==3\">Created Date</th>\n                <th>Shared By</th>\n                <th *ngIf=\"roleid ==1 || roleid ==3\">SharedWith</th>\n                <th>Shared Qty</th>\n                <th>Shared Price</th>\n                <th>Comment</th>\n                <th>Shared Date</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let shareddatalist of shareddatalists; let i = index\">\n                <!-- <td class=\"text-center\">\n                  <div class=\"avatar\">\n                    <img src=\"assets/img/avatars/1.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                    <span class=\"avatar-status badge-success\"></span>\n                  </div>\n                </td> -->\n                <td>\n                  <div>{{ shareddatalist.s_id}}</div>\n                  <div class=\"small text-muted\"><span>Ref</span> | {{ shareddatalist.requestID}} </div>\n                </td>\n                <td>\n                  <div *ngIf=\"shareddatalist.makeName\" class=\"small text-muted\"><strong>Make: </strong>{{ shareddatalist.makeName}}</div>\n                  <div *ngIf=\"shareddatalist.modelName\" class=\"small text-muted\"><strong>Model: </strong>{{ shareddatalist.modelName}}</div>\n                  <div *ngIf=\"shareddatalist.processor\" class=\"small text-muted\"><strong>Processor: </strong>{{ shareddatalist.processor}}</div>\n                </td>\n                <td>\n                  <div *ngIf=\"shareddatalist.hddName\" class=\"small text-muted\"><strong>HDD: </strong>{{ shareddatalist.hddName}}</div>\n                  <div *ngIf=\"shareddatalist.ramName\" class=\"small text-muted\"><strong>RAM: </strong>{{ shareddatalist.ramName}}</div>\n                  <div *ngIf=\"shareddatalist.adapter === 1\" class=\"small text-muted\"><strong>Adapter: </strong>Yes</div>\n                  <div *ngIf=\"shareddatalist.adapter === 2\" class=\"small text-muted\"><strong>Adapter: </strong>No</div>\n                </td>\n                <td  *ngIf=\"roleid ==1 || roleid ==3\">\n                  {{ shareddatalist.price}}\n                </td>\n                <td *ngIf=\"roleid ==1 || roleid ==3\">\n                  {{ shareddatalist.qty}}\n                </td>\n                <td *ngIf=\"roleid ==1 || roleid ==3\">\n                  {{ shareddatalist.username}}\n                </td>\n                <td *ngIf=\"roleid ==1 || roleid ==3\">\n                  {{shareddatalist.createdDate | date:'MMM d, y'}}\n                </td>\n                <td>\n                  {{ shareddatalist.shared_by}}\n                </td>\n                <td *ngIf=\"roleid ==1 || roleid ==3\">\n                  {{ shareddatalist.sharedwith}}\n                </td>\n                <td>\n                  {{ shareddatalist.s_qty}}\n                </td>\n                <td>\n                  {{ shareddatalist.s_currency}}{{ shareddatalist.s_price}}\n                </td>\n                <td>\n                  {{ shareddatalist.comment}}\n                </td>\n                <td>\n                  {{shareddatalist.shared_date | date:'MMM d, y'}}\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div *ngIf=\"roleid !== 1 && roleid !== 3 && roleid !== 8 && roleid !== 5 &&  roleid !==9\">\n    <div class=\"app flex-row align-items-center\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-6\">\n            <div class=\"clearfix\">\n              <h1 class=\"float-left display-3 mr-4\">404</h1>\n              <h4 class=\"pt-3\">Oops! You're lost.</h4>\n              <p class=\"text-muted\">The page you are looking for was not found.</p>\n            </div>\n            <div class=\"input-prepend input-group\">\n              <div class=\"input-group-prepend\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div> \n  </div>  ");

/***/ }),

/***/ "./src/app/views/share-deals/share-deals-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/share-deals/share-deals-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ShareDealsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareDealsRoutingModule", function() { return ShareDealsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _share_deals_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./share-deals.component */ "./src/app/views/share-deals/share-deals.component.ts");




var routes = [
    {
        path: '',
        component: _share_deals_component__WEBPACK_IMPORTED_MODULE_3__["ShareDealsComponent"],
        data: {
            title: 'Shared Deals'
        }
    }
];
var ShareDealsRoutingModule = /** @class */ (function () {
    function ShareDealsRoutingModule() {
    }
    ShareDealsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ShareDealsRoutingModule);
    return ShareDealsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/share-deals/share-deals.component.css":
/*!*************************************************************!*\
  !*** ./src/app/views/share-deals/share-deals.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3NoYXJlLWRlYWxzL3NoYXJlLWRlYWxzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/share-deals/share-deals.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/share-deals/share-deals.component.ts ***!
  \************************************************************/
/*! exports provided: ShareDealsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareDealsComponent", function() { return ShareDealsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_requirement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/requirement.service */ "./src/app/_services/requirement.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ShareDealsComponent = /** @class */ (function () {
    function ShareDealsComponent(requirementservice, alertify) {
        this.requirementservice = requirementservice;
        this.alertify = alertify;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 25,
            retrieve: true,
            order: [[0, 'desc']]
        };
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.roleid = Number(String(localStorage.getItem('RoleID')));
    }
    ShareDealsComponent.prototype.ngOnInit = function () {
        this.loadSharedData();
    };
    ShareDealsComponent.prototype.loadSharedData = function () {
        var _this = this;
        return this.requirementservice.loadSharedData().subscribe(function (shareddatalists) {
            console.log(shareddatalists);
            _this.shareddatalists = shareddatalists.filter(function (proj) { return (Number(proj.flag) === 0); });
            _this.dtTrigger.next();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ShareDealsComponent.ctorParameters = function () { return [
        { type: _services_requirement_service__WEBPACK_IMPORTED_MODULE_2__["RequirementService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] }
    ]; };
    ShareDealsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-share-deals',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./share-deals.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/share-deals/share-deals.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./share-deals.component.css */ "./src/app/views/share-deals/share-deals.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_requirement_service__WEBPACK_IMPORTED_MODULE_2__["RequirementService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], ShareDealsComponent);
    return ShareDealsComponent;
}());



/***/ }),

/***/ "./src/app/views/share-deals/share-deals.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/share-deals/share-deals.module.ts ***!
  \*********************************************************/
/*! exports provided: ShareDealsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareDealsModule", function() { return ShareDealsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _share_deals_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./share-deals-routing.module */ "./src/app/views/share-deals/share-deals-routing.module.ts");
/* harmony import */ var _share_deals_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./share-deals.component */ "./src/app/views/share-deals/share-deals.component.ts");






var ShareDealsModule = /** @class */ (function () {
    function ShareDealsModule() {
    }
    ShareDealsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_share_deals_component__WEBPACK_IMPORTED_MODULE_5__["ShareDealsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _share_deals_routing_module__WEBPACK_IMPORTED_MODULE_4__["ShareDealsRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
            ]
        })
    ], ShareDealsModule);
    return ShareDealsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-share-deals-share-deals-module.js.map