(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-manage-hdd-manage-hdd-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/manage-hdd/manage-hdd.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/manage-hdd/manage-hdd.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\n    <!-- Button trigger modal -->\n    \n  </div>\n  <div bsModal #detailModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"AddHDD()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add HDD</h4>\n          <button type=\"button\" class=\"close\" (click)=\"detailModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body\">  \n                <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <label style=\"padding: 7px\">HDD</label>\n                    <input type=\"text\" id=\"RoleTitle\" name=\"Text\" [(ngModel)]=\"model.Text\"  class=\"form-control\" placeholder=\"HDD\">               \n                  </div>\n                </div> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"detailModal.hide()\">Close</button>        \n          <button type=\"submit\" class=\"btn btn-sm btn-success\">Submit</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <div bsModal #EditModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-info\" role=\"document\">\n    <form  #requestForm=\"ngForm\" (ngSubmit)=\"EditHDDPost()\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Edit HDD</h4>\n          <button type=\"button\" class=\"close\" (click)=\"EditModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">          \n        <div class=\"card\">\n            <div class=\"card-body\">  \n                <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <label style=\"padding: 7px\">HDD</label>\n                    <input type=\"text\" id=\"RoleTitle\" name=\"Text\" [(ngModel)]=\"model.Text\"  class=\"form-control\" placeholder=\"HDD\">               \n                  </div>\n                </div> \n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"EditModal.hide()\">Close</button>        \n          <button type=\"submit\" class=\"btn btn-sm btn-success\">Submit</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </form>\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n  <!--/.row-->\n  <div class=\"row\">\n    <div *ngIf=\"roleid === 9\" class=\"col-lg-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <i class=\"fa fa-align-justify\"></i> Manage HDD\n            <button *ngIf=\"roleid === 9\" type=\"button\" class=\"btn btn-info mr-1\" style=\"float: right;\" data-toggle=\"modal\" (click)=\"detailModal.show()\">\n              Add HDD\n            </button>\n          </div>\n          <div class=\"card-body table-responsive-sm\">\n            <table class=\"table table-responsive-sm table-hover table-outline mb-0\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th>Id</th>\n                  <th>HDD</th>\n                  <th>Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let hdd of hdds; let i = index\">                \n                    <td>{{hdd.id}}</td>\n                    <td>{{hdd.text}}</td>\n                    <td>                           \n                        <span class=\"badge badge-danger\" style=\"cursor: pointer;\" (click)=\"EditHDD(hdd.id, hdd.text)\">Edit</span>\n                    </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n  </div>\n    <!--/.col-->\n  <div *ngIf=\"roleid !== 9\">\n    <div class=\"app flex-row align-items-center\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-6\">\n            <div class=\"clearfix\">\n              <h1 class=\"float-left display-3 mr-4\">404</h1>\n              <h4 class=\"pt-3\">Oops! You're lost.</h4>\n              <p class=\"text-muted\">The page you are looking for was not found.</p>\n            </div>\n            <div class=\"input-prepend input-group\">\n              <div class=\"input-group-prepend\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n  </div>");

/***/ }),

/***/ "./src/app/views/manage-hdd/manage-hdd-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/manage-hdd/manage-hdd-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ManageHddRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageHddRoutingModule", function() { return ManageHddRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manage_hdd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-hdd.component */ "./src/app/views/manage-hdd/manage-hdd.component.ts");




var routes = [
    {
        path: '',
        component: _manage_hdd_component__WEBPACK_IMPORTED_MODULE_3__["ManageHddComponent"],
        data: {
            title: 'Manage HDD'
        }
    }
];
var ManageHddRoutingModule = /** @class */ (function () {
    function ManageHddRoutingModule() {
    }
    ManageHddRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ManageHddRoutingModule);
    return ManageHddRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/manage-hdd/manage-hdd.component.css":
/*!***********************************************************!*\
  !*** ./src/app/views/manage-hdd/manage-hdd.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label {\r\n    width: 78px;\r\n}\r\ninput, select {\r\n    border: 1px solid #b3acac;\r\n    border-radius: 3px;\r\n}\r\nbutton {\r\n    background-color: #08ab9e;\r\n    border: #0b8076;\r\n    color: #fff;\r\n    border-radius: 0px;\r\n}\r\n.close {\r\n    background: transparent!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFuYWdlLWhkZC9tYW5hZ2UtaGRkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbWFuYWdlLWhkZC9tYW5hZ2UtaGRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgICB3aWR0aDogNzhweDtcclxufVxyXG5pbnB1dCwgc2VsZWN0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2FjYWM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOGFiOWU7XHJcbiAgICBib3JkZXI6ICMwYjgwNzY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG4uY2xvc2Uge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/views/manage-hdd/manage-hdd.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/manage-hdd/manage-hdd.component.ts ***!
  \**********************************************************/
/*! exports provided: ManageHddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageHddComponent", function() { return ManageHddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/loadspecs.service */ "./src/app/_services/loadspecs.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");





var ManageHddComponent = /** @class */ (function () {
    function ManageHddComponent(loadspecsService, alertify) {
        this.loadspecsService = loadspecsService;
        this.alertify = alertify;
        this.model = {};
        this.roleid = Number(localStorage.getItem('RoleID'));
    }
    ManageHddComponent.prototype.ngOnInit = function () {
        this.loadHDDs();
    };
    ManageHddComponent.prototype.loadHDDs = function () {
        var _this = this;
        return this.loadspecsService.loadSpectDetails().subscribe(function (hdds) {
            _this.hdds = hdds.filter(function (proj) { return (proj.parentId === 2); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ManageHddComponent.prototype.AddHDD = function () {
        var _this = this;
        this.model.ParentId = 2;
        if (!this.model.Text) {
            this.alertify.error('Enter HDD');
            return;
        }
        this.loadspecsService.Addspecs(this.model).subscribe(function (hdds) {
            _this.hdds = hdds.filter(function (proj) { return (proj.parentId === 2); });
            _this.alertify.success('HDD Added Successful');
            _this.detailModal.hide();
            _this.model.Text = '';
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ManageHddComponent.prototype.EditHDD = function (id, Text) {
        this.model.Id = id;
        this.model.Text = Text;
        this.EditModal.show();
    };
    ManageHddComponent.prototype.EditHDDPost = function () {
        var _this = this;
        if (!this.model.Text) {
            this.alertify.error('Enter HDD');
            return;
        }
        this.loadspecsService.Editspecs(this.model).subscribe(function (hdds) {
            _this.hdds = hdds.filter(function (proj) { return (proj.parentId === 2); });
            _this.alertify.success('HDD Edited Successful');
            _this.EditModal.hide();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ManageHddComponent.ctorParameters = function () { return [
        { type: _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_2__["LoadspecsService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('detailModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], ManageHddComponent.prototype, "detailModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('EditModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], ManageHddComponent.prototype, "EditModal", void 0);
    ManageHddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-hdd',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./manage-hdd.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/manage-hdd/manage-hdd.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./manage-hdd.component.css */ "./src/app/views/manage-hdd/manage-hdd.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_loadspecs_service__WEBPACK_IMPORTED_MODULE_2__["LoadspecsService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], ManageHddComponent);
    return ManageHddComponent;
}());



/***/ }),

/***/ "./src/app/views/manage-hdd/manage-hdd.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/manage-hdd/manage-hdd.module.ts ***!
  \*******************************************************/
/*! exports provided: ManageHddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageHddModule", function() { return ManageHddModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _manage_hdd_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-hdd-routing.module */ "./src/app/views/manage-hdd/manage-hdd-routing.module.ts");
/* harmony import */ var _manage_hdd_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-hdd.component */ "./src/app/views/manage-hdd/manage-hdd.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_select2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-select2 */ "./node_modules/ng-select2/fesm5/ng-select2.js");








var ManageHddModule = /** @class */ (function () {
    function ManageHddModule() {
    }
    ManageHddModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_manage_hdd_component__WEBPACK_IMPORTED_MODULE_4__["ManageHddComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _manage_hdd_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageHddRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ng_select2__WEBPACK_IMPORTED_MODULE_7__["NgSelect2Module"]
            ]
        })
    ], ManageHddModule);
    return ManageHddModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-manage-hdd-manage-hdd-module.js.map