(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-short-fall-details-short-fall-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/short-fall-details/short-fall-details.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/short-fall-details/short-fall-details.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\n    <!--/.card-->\n    <div class=\"row\">\n      <div class=\"col-md-10\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <br>\n            <table datatable [dtTrigger]=\"dtTrigger\" [dtOptions]=\"dtOptions\" class=\"table table-responsive-sm table-striped table-hover table-outline mb-0\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th>Make</th>\n                  <th>Model</th>\n                  <th>Processor</th>\n                  <th>OrderQty</th>\n                  <th>Total Qty</th>\n                  <th>InTransit Qty</th>\n                  <th>Available Stock</th>\n                  <th>Required Qty</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of items; let i = index\">\n                  <td>{{ item.make_name}}</td>\n                  <td>{{ item.model_name}}</td>\n                  <td>{{item.processor}} </td>\n                  <td>{{ item.o_qty}}</td>\n                  <td>{{ item.approved_qty}}</td>\n                  <td>{{ item.intransit_qty}}</td>\n                  <td>{{ item.available_qty}}</td>\n                  <td>{{item.required_qty}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div><!--/.col-->\n    </div><!--/.row-->\n    <!--/.col-->\n    <!-- <div >\n      <div class=\"app flex-row align-items-center\">\n        <div class=\"container\">\n          <div class=\"row justify-content-center\">\n            <div class=\"col-md-6\">\n              <div class=\"clearfix\">\n                <h1 class=\"float-left display-3 mr-4\">404</h1>\n                <h4 class=\"pt-3\">Oops! You're lost.</h4>\n                <p class=\"text-muted\">The page you are looking for was not found.</p>\n              </div>\n              <div class=\"input-prepend input-group\">\n                <div class=\"input-group-prepend\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      \n    </div> -->\n  ");

/***/ }),

/***/ "./src/app/views/short-fall-details/short-fall-details-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/short-fall-details/short-fall-details-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ShortFallDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortFallDetailsRoutingModule", function() { return ShortFallDetailsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _short_fall_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./short-fall-details.component */ "./src/app/views/short-fall-details/short-fall-details.component.ts");




var routes = [
    {
        path: '',
        component: _short_fall_details_component__WEBPACK_IMPORTED_MODULE_3__["ShortFallDetailsComponent"],
        data: {
            title: 'Short Fall Details'
        }
    }
];
var ShortFallDetailsRoutingModule = /** @class */ (function () {
    function ShortFallDetailsRoutingModule() {
    }
    ShortFallDetailsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ShortFallDetailsRoutingModule);
    return ShortFallDetailsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/short-fall-details/short-fall-details.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/views/short-fall-details/short-fall-details.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table.dataTable thead th, table.dataTable thead td {\r\n    padding: 10px 8px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc2hvcnQtZmFsbC1kZXRhaWxzL3Nob3J0LWZhbGwtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvc2hvcnQtZmFsbC1kZXRhaWxzL3Nob3J0LWZhbGwtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUuZGF0YVRhYmxlIHRoZWFkIHRoLCB0YWJsZS5kYXRhVGFibGUgdGhlYWQgdGQge1xyXG4gICAgcGFkZGluZzogMTBweCA4cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/short-fall-details/short-fall-details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/short-fall-details/short-fall-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: ShortFallDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortFallDetailsComponent", function() { return ShortFallDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_requirement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/requirement.service */ "./src/app/_services/requirement.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");






var ShortFallDetailsComponent = /** @class */ (function () {
    function ShortFallDetailsComponent(requirementservice, alertify) {
        this.requirementservice = requirementservice;
        this.alertify = alertify;
        this.roleid = Number(String(localStorage.getItem('RoleID')));
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 25,
            retrieve: true,
            order: [[0, 'desc']]
        };
        this.isDtInitialized = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ShortFallDetailsComponent.prototype.ngOnInit = function () {
        this.loadShortFalldetails();
    };
    ShortFallDetailsComponent.prototype.loadShortFalldetails = function () {
        var _this = this;
        return this.requirementservice.getShortFalldetails().subscribe(function (items) {
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
    ShortFallDetailsComponent.ctorParameters = function () { return [
        { type: _services_requirement_service__WEBPACK_IMPORTED_MODULE_4__["RequirementService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"])
    ], ShortFallDetailsComponent.prototype, "dtElement", void 0);
    ShortFallDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-short-fall-details',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./short-fall-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/short-fall-details/short-fall-details.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./short-fall-details.component.css */ "./src/app/views/short-fall-details/short-fall-details.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_requirement_service__WEBPACK_IMPORTED_MODULE_4__["RequirementService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]])
    ], ShortFallDetailsComponent);
    return ShortFallDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/short-fall-details/short-fall-details.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/short-fall-details/short-fall-details.module.ts ***!
  \***********************************************************************/
/*! exports provided: ShortFallDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortFallDetailsModule", function() { return ShortFallDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _short_fall_details_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./short-fall-details-routing.module */ "./src/app/views/short-fall-details/short-fall-details-routing.module.ts");
/* harmony import */ var _short_fall_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./short-fall-details.component */ "./src/app/views/short-fall-details/short-fall-details.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");






var ShortFallDetailsModule = /** @class */ (function () {
    function ShortFallDetailsModule() {
    }
    ShortFallDetailsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_short_fall_details_component__WEBPACK_IMPORTED_MODULE_4__["ShortFallDetailsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _short_fall_details_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShortFallDetailsRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"]
            ]
        })
    ], ShortFallDetailsModule);
    return ShortFallDetailsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-short-fall-details-short-fall-details-module.js.map