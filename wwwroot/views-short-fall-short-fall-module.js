(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-short-fall-short-fall-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/short-fall/short-fall.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/short-fall/short-fall.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\n  <!--/.card-->\n  <div class=\"row\">\n    <div class=\"col-md-10\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <br>\n          <table datatable [dtTrigger]=\"dtTrigger\" [dtOptions]=\"dtOptions\" class=\"table table-responsive-sm table-striped table-hover table-outline mb-0\">\n            <thead class=\"thead-light\">\n              <tr *ngFor=\"let item of items | slice:0:1; let i = index\">\n                <th>{{ item.make_name}}</th>\n                <th>{{ item.model_name}}</th>\n                <th>{{item.processor}}</th>\n                <th>{{ item.filtermonth1}}</th>\n                <th>{{ item.filtermonth2}}</th>\n                <th>{{ item.filtermonth3}}</th>\n                <th>{{ item.filtermonth4}}</th>\n                <th>{{ item.filtermonth5}}</th>\n                <th>{{ item.filtermonth6}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of items | slice:1:1000; let i = index\">\n                <td>{{ item.make_name}}</td>\n                <td>{{ item.model_name}}</td>\n                <td>{{item.processor}} </td>\n                <td>{{ item.filtermonth1}}</td>\n                <td>{{ item.filtermonth2}}</td>\n                <td>{{ item.filtermonth3}}</td>\n                <td>{{ item.filtermonth4}}</td>\n                <td>{{ item.filtermonth5}}</td>\n                <td>{{ item.filtermonth6}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <!--/.col-->\n  <!-- <div >\n    <div class=\"app flex-row align-items-center\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-6\">\n            <div class=\"clearfix\">\n              <h1 class=\"float-left display-3 mr-4\">404</h1>\n              <h4 class=\"pt-3\">Oops! You're lost.</h4>\n              <p class=\"text-muted\">The page you are looking for was not found.</p>\n            </div>\n            <div class=\"input-prepend input-group\">\n              <div class=\"input-group-prepend\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n  </div> -->\n");

/***/ }),

/***/ "./src/app/views/short-fall/short-fall-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/short-fall/short-fall-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ShortFallRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortFallRoutingModule", function() { return ShortFallRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _short_fall_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./short-fall.component */ "./src/app/views/short-fall/short-fall.component.ts");




var routes = [
    {
        path: '',
        component: _short_fall_component__WEBPACK_IMPORTED_MODULE_3__["ShortFallComponent"],
        data: {
            title: 'ShortFall'
        }
    }
];
var ShortFallRoutingModule = /** @class */ (function () {
    function ShortFallRoutingModule() {
    }
    ShortFallRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ShortFallRoutingModule);
    return ShortFallRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/short-fall/short-fall.component.css":
/*!***********************************************************!*\
  !*** ./src/app/views/short-fall/short-fall.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Nob3J0LWZhbGwvc2hvcnQtZmFsbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/views/short-fall/short-fall.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/short-fall/short-fall.component.ts ***!
  \**********************************************************/
/*! exports provided: ShortFallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortFallComponent", function() { return ShortFallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_requirement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/requirement.service */ "./src/app/_services/requirement.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");






var ShortFallComponent = /** @class */ (function () {
    function ShortFallComponent(requirementservice, alertify) {
        this.requirementservice = requirementservice;
        this.alertify = alertify;
        this.roleid = Number(String(localStorage.getItem('RoleID')));
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 25,
            retrieve: true,
            order: [[1, 'desc']]
        };
        this.isDtInitialized = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ShortFallComponent.prototype.ngOnInit = function () {
        this.loadOrders();
    };
    ShortFallComponent.prototype.loadOrders = function () {
        var _this = this;
        return this.requirementservice.getShortFalls().subscribe(function (items) {
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
    ShortFallComponent.ctorParameters = function () { return [
        { type: _services_requirement_service__WEBPACK_IMPORTED_MODULE_2__["RequirementService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"])
    ], ShortFallComponent.prototype, "dtElement", void 0);
    ShortFallComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-short-fall',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./short-fall.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/short-fall/short-fall.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./short-fall.component.css */ "./src/app/views/short-fall/short-fall.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_requirement_service__WEBPACK_IMPORTED_MODULE_2__["RequirementService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], ShortFallComponent);
    return ShortFallComponent;
}());



/***/ }),

/***/ "./src/app/views/short-fall/short-fall.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/short-fall/short-fall.module.ts ***!
  \*******************************************************/
/*! exports provided: ShortFallModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortFallModule", function() { return ShortFallModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _short_fall_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./short-fall-routing.module */ "./src/app/views/short-fall/short-fall-routing.module.ts");
/* harmony import */ var _short_fall_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./short-fall.component */ "./src/app/views/short-fall/short-fall.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");






var ShortFallModule = /** @class */ (function () {
    function ShortFallModule() {
    }
    ShortFallModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_short_fall_component__WEBPACK_IMPORTED_MODULE_4__["ShortFallComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _short_fall_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShortFallRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"]
            ]
        })
    ], ShortFallModule);
    return ShortFallModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-short-fall-short-fall-module.js.map