(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-make-model-make-model-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/make-model/make-model.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/make-model/make-model.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--/.row-->\n<div class=\"row\" *ngIf=\"roleid === 9\">\n    <div class=\"col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Manage Make\n          <button *ngIf=\"roleid === 9\" type=\"button\" class=\"btn btn-info mr-1\" style=\"float: right;\" data-toggle=\"modal\" (click)=\"makeModal.show()\">\n            Add Make\n          </button>\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-sm\">\n            <thead>\n              <tr>\n                <th>Id</th>\n                <th>MakeName</th>\n                <th>Status</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let make of makes\">\n                <td>{{ make.id }}</td>\n                <td>{{ make.text }}</td>\n                <td style=\"color: green;\">Active</td>\n                <td>\n                    <button class=\"btn btn-square btn-sm btn-danger\" type=\"button\">\n                      <i class=\"cui-pencil\"></i> Edit\n                    </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->    \n    <div class=\"col-lg-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <i class=\"fa fa-align-justify\"></i> Manage Model\n            <button *ngIf=\"roleid === 9\" type=\"button\" class=\"btn btn-info mr-1\" style=\"float: right;\" data-toggle=\"modal\" (click)=\"modelModal.show()\">\n              Add Model\n            </button>\n          </div>\n          <div class=\"card-body\">\n            <table class=\"table table-sm\">\n              <thead>\n                <tr>\n                  <th>Id</th>\n                  <th>MakeName</th>\n                  <th>ModelName</th>\n                  <th>Status</th>\n                  <th>Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let model of models\">\n                    <td>{{ model.id }}</td>\n                    <td>{{ model.ptext }}</td>\n                    <td>{{ model.text }}</td>\n                    <td style=\"color: green;\">Active</td>\n                    <td>\n                        <button class=\"btn btn-square btn-sm btn-danger\" type=\"button\">\n                          <i class=\"cui-pencil\"></i> Edit\n                        </button>\n                    </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n</div>\n\n    <!--/.col-->\n    <div *ngIf=\"roleid !== 9\">\n        <div class=\"app flex-row align-items-center\">\n          <div class=\"container\">\n            <div class=\"row justify-content-center\">\n              <div class=\"col-md-6\">\n                <div class=\"clearfix\">\n                  <h1 class=\"float-left display-3 mr-4\">404</h1>\n                  <h4 class=\"pt-3\">Oops! You're lost.</h4>\n                  <p class=\"text-muted\">The page you are looking for was not found.</p>\n                </div>\n                <div class=\"input-prepend input-group\">\n                  <div class=\"input-group-prepend\">\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        \n      </div>\n<div bsModal #makeModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"makeModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"AddMake()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add Make</h4>\n          <button type=\"button\" class=\"close\" (click)=\"makeModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body\">  \n                <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <label style=\"padding: 7px\">Make</label>\n                    <input type=\"text\" id=\"ProductName\" name=\"ProductName\" [(ngModel)]=\"model.ProductName\"  class=\"form-control\" placeholder=\"Make\">               \n                  </div>\n                </div> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"makeModal.hide()\">Close</button>        \n          <button type=\"submit\" class=\"btn btn-sm btn-success\">Submit</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  \n  <div bsModal #modelModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"modelModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"AddModel()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Edit HDD</h4>\n          <button type=\"button\" class=\"close\" (click)=\"modelModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body\">  \n                <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <label style=\"padding: 7px\">Make</label>\n                    <ng-select2 [data]=\"makes\" [width]=\"343\"  name=\"ParentId\"  [(ngModel)]=\"model.ParentId\"></ng-select2>              \n                  </div>\n                </div> \n                <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <label style=\"padding: 7px\">Model</label>\n                    <input type=\"text\" id=\"ProductName\" name=\"ProductName\" [(ngModel)]=\"model.ProductName\"  class=\"form-control\" placeholder=\"Model\">               \n                  </div>\n                </div> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"modelModal.hide()\">Close</button>        \n          <button type=\"submit\" class=\"btn btn-sm btn-success\">Submit</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->");

/***/ }),

/***/ "./src/app/views/make-model/make-model-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/make-model/make-model-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MakeModelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeModelRoutingModule", function() { return MakeModelRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _make_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./make-model.component */ "./src/app/views/make-model/make-model.component.ts");




var routes = [
    {
        path: '',
        component: _make_model_component__WEBPACK_IMPORTED_MODULE_3__["MakeModelComponent"],
        data: {
            title: 'Manage Make Model'
        }
    }
];
var MakeModelRoutingModule = /** @class */ (function () {
    function MakeModelRoutingModule() {
    }
    MakeModelRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MakeModelRoutingModule);
    return MakeModelRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/make-model/make-model.component.css":
/*!***********************************************************!*\
  !*** ./src/app/views/make-model/make-model.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label {\r\n    width: 78px;\r\n}\r\ninput, select {\r\n    border: 1px solid #b3acac;\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFrZS1tb2RlbC9tYWtlLW1vZGVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9tYWtlLW1vZGVsL21ha2UtbW9kZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICAgIHdpZHRoOiA3OHB4O1xyXG59XHJcbmlucHV0LCBzZWxlY3Qge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IzYWNhYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/make-model/make-model.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/make-model/make-model.component.ts ***!
  \**********************************************************/
/*! exports provided: MakeModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeModelComponent", function() { return MakeModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/loadspecs.service */ "./src/app/_services/loadspecs.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");





var MakeModelComponent = /** @class */ (function () {
    function MakeModelComponent(loadspecsService, alertify) {
        this.loadspecsService = loadspecsService;
        this.alertify = alertify;
        this.model = {};
        this.roleid = Number(localStorage.getItem('RoleID'));
    }
    MakeModelComponent.prototype.ngOnInit = function () {
        this.loadMakes();
        this.loadModels();
    };
    MakeModelComponent.prototype.loadMakes = function () {
        var _this = this;
        return this.loadspecsService.getMakes().subscribe(function (partproducts) {
            _this.makes = partproducts;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MakeModelComponent.prototype.loadModels = function () {
        var _this = this;
        return this.loadspecsService.getModels().subscribe(function (partproducts) {
            _this.models = partproducts;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MakeModelComponent.prototype.AddMake = function () {
        var _this = this;
        this.model.ParentId = 0;
        this.model.Type = 1;
        if (!this.model.ProductName) {
            this.alertify.error('Enter Make');
            return;
        }
        this.loadspecsService.AddMake(this.model).subscribe(function (partproducts) {
            _this.makes = partproducts;
            _this.alertify.success('Make Added Successful');
            _this.makeModal.hide();
            _this.model.ProductName = '';
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MakeModelComponent.prototype.AddModel = function () {
        var _this = this;
        this.model.Type = 2;
        if (!this.model.ParentId) {
            this.alertify.error('Select Make');
            return;
        }
        if (!this.model.ProductName) {
            this.alertify.error('Enter Model');
            return;
        }
        this.loadspecsService.AddModel(this.model).subscribe(function (partproducts) {
            _this.models = partproducts;
            _this.alertify.success('Model Added Successful');
            _this.modelModal.hide();
            _this.model.ProductName = '';
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MakeModelComponent.ctorParameters = function () { return [
        { type: _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_2__["LoadspecsService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('makeModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], MakeModelComponent.prototype, "makeModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modelModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], MakeModelComponent.prototype, "modelModal", void 0);
    MakeModelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-make-model',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./make-model.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/make-model/make-model.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./make-model.component.css */ "./src/app/views/make-model/make-model.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_loadspecs_service__WEBPACK_IMPORTED_MODULE_2__["LoadspecsService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], MakeModelComponent);
    return MakeModelComponent;
}());



/***/ }),

/***/ "./src/app/views/make-model/make-model.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/make-model/make-model.module.ts ***!
  \*******************************************************/
/*! exports provided: MakeModelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeModelModule", function() { return MakeModelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _make_model_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./make-model-routing.module */ "./src/app/views/make-model/make-model-routing.module.ts");
/* harmony import */ var _make_model_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./make-model.component */ "./src/app/views/make-model/make-model.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ng_select2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-select2 */ "./node_modules/ng-select2/fesm5/ng-select2.js");








var MakeModelModule = /** @class */ (function () {
    function MakeModelModule() {
    }
    MakeModelModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_make_model_component__WEBPACK_IMPORTED_MODULE_4__["MakeModelComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _make_model_routing_module__WEBPACK_IMPORTED_MODULE_3__["MakeModelRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ng_select2__WEBPACK_IMPORTED_MODULE_7__["NgSelect2Module"]
            ]
        })
    ], MakeModelModule);
    return MakeModelModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-make-model-make-model-module.js.map