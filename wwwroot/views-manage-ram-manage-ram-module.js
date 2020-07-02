(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-manage-ram-manage-ram-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/manage-ram/manage-ram.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/manage-ram/manage-ram.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\n    <!-- Button trigger modal -->\n    \n  </div>\n  <div bsModal #detailModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"AddRAM()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add RAM</h4>\n          <button type=\"button\" class=\"close\" (click)=\"detailModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body\">  \n                <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <label style=\"padding: 7px\">RAM</label>\n                    <input type=\"text\" id=\"RoleTitle\" name=\"Text\" [(ngModel)]=\"model.Text\"  class=\"form-control\" placeholder=\"RAM\">               \n                  </div>\n                </div> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"detailModal.hide()\">Close</button>        \n          <button type=\"submit\" class=\"btn btn-sm btn-success\">Submit</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <div bsModal #EditModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"EditRAMPost()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Edit RAM</h4>\n          <button type=\"button\" class=\"close\" (click)=\"EditModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body\">  \n                <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <label style=\"padding: 7px\">RAM</label>\n                    <input type=\"text\" id=\"RoleTitle\" name=\"Text\" [(ngModel)]=\"model.Text\"  class=\"form-control\" placeholder=\"RAM\">               \n                  </div>\n                </div> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"EditModal.hide()\">Close</button>        \n          <button type=\"submit\" class=\"btn btn-sm btn-success\">Submit</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <!--/.row-->\n  <div class=\"row\">\n    <div *ngIf=\"roleid === 9\" class=\"col-lg-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <i class=\"fa fa-align-justify\"></i> Manage RAM\n            <button *ngIf=\"roleid === 9\" type=\"button\" class=\"btn btn-info mr-1\" style=\"float: right;\" data-toggle=\"modal\" (click)=\"detailModal.show()\">\n              Add RAM\n            </button>\n          </div>\n          <div class=\"card-body\">\n            <table class=\"table table-sm\">\n              <thead>\n                <tr>\n                  <th>Id</th>\n                  <th>RAM</th>\n                  <th>Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let ram of rams; let i = index\">                \n                    <td>{{ram.id}}</td>\n                    <td>{{ram.text}}</td>\n                    <td>                           \n                        <span class=\"badge badge-danger\" style=\"cursor: pointer;\" (click)=\"EditRAM(ram.id, ram.text)\">Edit</span>\n                    </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    <!--/.col-->    \n  </div>\n  <div *ngIf=\"roleid !== 9\">\n    <div class=\"app flex-row align-items-center\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-6\">\n            <div class=\"clearfix\">\n              <h1 class=\"float-left display-3 mr-4\">404</h1>\n              <h4 class=\"pt-3\">Oops! You're lost.</h4>\n              <p class=\"text-muted\">The page you are looking for was not found.</p>\n            </div>\n            <div class=\"input-prepend input-group\">\n              <div class=\"input-group-prepend\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n  </div>");

/***/ }),

/***/ "./src/app/views/manage-ram/manage-ram-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/manage-ram/manage-ram-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ManageRamRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageRamRoutingModule", function() { return ManageRamRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manage_ram_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-ram.component */ "./src/app/views/manage-ram/manage-ram.component.ts");




var routes = [
    {
        path: '',
        component: _manage_ram_component__WEBPACK_IMPORTED_MODULE_3__["ManageRamComponent"],
        data: {
            title: 'Manage Ram'
        }
    }
];
var ManageRamRoutingModule = /** @class */ (function () {
    function ManageRamRoutingModule() {
    }
    ManageRamRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ManageRamRoutingModule);
    return ManageRamRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/manage-ram/manage-ram.component.css":
/*!***********************************************************!*\
  !*** ./src/app/views/manage-ram/manage-ram.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label {\r\n    width: 78px;\r\n}\r\ninput, select {\r\n    border: 1px solid #b3acac;\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFuYWdlLXJhbS9tYW5hZ2UtcmFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9tYW5hZ2UtcmFtL21hbmFnZS1yYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICAgIHdpZHRoOiA3OHB4O1xyXG59XHJcbmlucHV0LCBzZWxlY3Qge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IzYWNhYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/manage-ram/manage-ram.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/manage-ram/manage-ram.component.ts ***!
  \**********************************************************/
/*! exports provided: ManageRamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageRamComponent", function() { return ManageRamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/loadspecs.service */ "./src/app/_services/loadspecs.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");





var ManageRamComponent = /** @class */ (function () {
    function ManageRamComponent(loadspecsService, alertify) {
        this.loadspecsService = loadspecsService;
        this.alertify = alertify;
        this.model = {};
        this.roleid = Number(localStorage.getItem('RoleID'));
    }
    ManageRamComponent.prototype.ngOnInit = function () {
        this.loadRAM();
    };
    ManageRamComponent.prototype.loadRAM = function () {
        var _this = this;
        return this.loadspecsService.loadSpectDetails().subscribe(function (rams) {
            _this.rams = rams.filter(function (proj) { return (proj.parentId === 1); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ManageRamComponent.prototype.AddRAM = function () {
        var _this = this;
        this.model.ParentId = 1;
        if (!this.model.Text) {
            this.alertify.error('Enter RAM');
            return;
        }
        this.loadspecsService.Addspecs(this.model).subscribe(function (rams) {
            _this.rams = rams.filter(function (proj) { return (proj.parentId === 1); });
            _this.alertify.success('RAM Added Successful');
            _this.detailModal.hide();
            _this.model.Text = '';
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ManageRamComponent.prototype.EditRAM = function (id, Text) {
        this.model.Id = id;
        this.model.Text = Text;
        this.EditModal.show();
    };
    ManageRamComponent.prototype.EditRAMPost = function () {
        var _this = this;
        if (!this.model.Text) {
            this.alertify.error('Enter RAM');
            return;
        }
        this.loadspecsService.Editspecs(this.model).subscribe(function (rams) {
            _this.rams = rams.filter(function (proj) { return (proj.parentId === 1); });
            _this.alertify.success('RAM Edited Successful');
            _this.EditModal.hide();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ManageRamComponent.ctorParameters = function () { return [
        { type: _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_3__["LoadspecsService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('detailModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], ManageRamComponent.prototype, "detailModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('EditModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], ManageRamComponent.prototype, "EditModal", void 0);
    ManageRamComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-ram',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./manage-ram.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/manage-ram/manage-ram.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./manage-ram.component.css */ "./src/app/views/manage-ram/manage-ram.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_loadspecs_service__WEBPACK_IMPORTED_MODULE_3__["LoadspecsService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], ManageRamComponent);
    return ManageRamComponent;
}());



/***/ }),

/***/ "./src/app/views/manage-ram/manage-ram.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/manage-ram/manage-ram.module.ts ***!
  \*******************************************************/
/*! exports provided: ManageRamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageRamModule", function() { return ManageRamModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _manage_ram_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-ram-routing.module */ "./src/app/views/manage-ram/manage-ram-routing.module.ts");
/* harmony import */ var _manage_ram_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-ram.component */ "./src/app/views/manage-ram/manage-ram.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var ManageRamModule = /** @class */ (function () {
    function ManageRamModule() {
    }
    ManageRamModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_manage_ram_component__WEBPACK_IMPORTED_MODULE_4__["ManageRamComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _manage_ram_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageRamRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ]
        })
    ], ManageRamModule);
    return ManageRamModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-manage-ram-manage-ram-module.js.map