(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/profile/profile.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/profile/profile.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" style=\"width:94%;margin:auto;\">\n    <div class=\"col-lg-2 adjust\">\n        <div class=\"card\">\n            <form  #requestForm=\"ngForm\">\n                <div class=\"card-header\">Edit Picture</div>\n                <div class=\"card-body mt-2\" style=\"text-align: center;min-height: 300px;padding: 0px;\">                  \n                <img *ngIf=\"!mymodel.photoUrl\" src=\"assets/images/User.png\" alt=\"{{ mymodel.Email}}\" width=\"200\" height=\"200\">   \n                <img *ngIf=\"mymodel.photoUrl\" src=\"/Resources/Profiles/{{ mymodel.photoUrl}}\" width=\"200\" height=\"250\" alt=\"{{ mymodel.Email}}\">                       \n                <div class=\"form-group\">\n                    <div class=\"col-lg-12 row\">\n                    <div class=\"col-lg-12\">\n                        <input type=\"file\" #file placeholder=\"choose file\" (change)=\"uploadFile(file.files)\" style=\"display: none;\">\n                        <button type=\"button\" class=\"btn btn-success mt-2\" (click)=\"file.click()\">Choose Picture...</button>\n                    </div>    \n                    <div class=\"col-lg-12 {{mycolor}}\" style=\"font-family:monospace;font-weight:bold;font-size:18px;\">\n                        <span class=\"upload\" *ngIf=\"progress > 0\">\n                        {{progress}}%\n                        </span>\n                        <span class=\"upload\" *ngIf=\"message\">\n                        {{message}}\n                        </span>\n                    </div>\n                    </div>\n                </div> \n                </div>\n                <div class=\"card-header\">        \n                </div>\n            </form>\n        </div>  \n        </div> \n        <div class=\"col-lg-10 adjust\">\n        <div class=\"card\">\n            <form  #requestForm=\"ngForm\" (ngSubmit)=\"EdituserPost()\">\n                <div class=\"card-header\">Edit Password</div>\n                <div class=\"card-body\" style=\"min-height: 307px;\">\n                    <div class=\"form-group\">\n                        <div class=\"input-group\">\n                            <label style=\"padding: 7px\">Username</label>\n                            <input type=\"text\" id=\"Username\" name=\"Username\" [(ngModel)]=\"mymodel.Username\"  class=\"form-control\" disabled placeholder=\"Username\">               \n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"input-group\">\n                            <label style=\"padding: 7px\">Email</label>  \n                            <input type=\"email\" id=\"Email\" name=\"Email\" [(ngModel)]=\"mymodel.Email\"  class=\"form-control\" disabled placeholder=\"Email\"> \n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"input-group\">\n                            <label style=\"padding: 7px\">Password</label> \n                            <input type=\"password\" id=\"Password\" name=\"Password\" [(ngModel)]=\"mymodel.Password\" autocomplete=\"on\"  class=\"form-control\" placeholder=\"Password\">\n                        </div>\n                    </div> \n                </div>\n                <div class=\"card-header\">        \n                    <button type=\"submit\" class=\"btn btn-sm btn-success ft-r\">Update Password</button>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"col-lg-12 adjust\">\n        <div class=\"card\">\n            <form  #requestForm=\"ngForm\" (ngSubmit)=\"EdituserInfoPost()\">\n                <div class=\"card-header\">Edit Info</div>\n                <div class=\"card-body\">\n                    <div class=\"form-group\">\n                        <div class=\"input-group\">\n                            <label style=\"padding: 7px\">Company</label>\n                            <input type=\"text\" id=\"Company\" name=\"Company\" [(ngModel)]=\"mymodel.Company\"  class=\"form-control\" placeholder=\"Company\">               \n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"input-group\">\n                            <label style=\"padding: 7px\">Reg No</label>  \n                            <input type=\"text\" id=\"Reg_no\" name=\"Reg_no\" [(ngModel)]=\"mymodel.Reg_no\"  class=\"form-control\" placeholder=\"Reg_no\"> \n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"input-group\">\n                            <label style=\"padding: 7px\">Mobile</label> \n                            <input type=\"text\" id=\"mobile_no\" name=\"mobile_no\" [(ngModel)]=\"mymodel.mobile_no\"  class=\"form-control\" placeholder=\"Mobile\">\n                        </div>\n                    </div> \n                    <div class=\"form-group\">\n                        <div class=\"input-group\">\n                            <label style=\"padding: 7px\">Telephone No</label> \n                            <input type=\"text\" id=\"tel_no\" name=\"tel_no\" [(ngModel)]=\"mymodel.tel_no\"  class=\"form-control\" placeholder=\"Enter Telephone\">\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"input-group\">\n                            <label style=\"padding: 7px\">City</label>  \n                            <input type=\"text\" id=\"City\" name=\"City\" [(ngModel)]=\"mymodel.City\"  class=\"form-control\" placeholder=\"City\"> \n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"input-group\">\n                            <label style=\"padding: 7px\">Country</label>  \n                            <select name=\"loc_id\"  class=\"form-control\" [(ngModel)]=\"mymodel.Country\" style=\"width: 355px;height: 34px;\" aria-placeholder=\"Select Country\">\n                                <option value=\"{{location.text}}\" *ngFor=\"let location of locations; let i = index\">{{location.text}}</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-header\">        \n                    <button type=\"submit\" class=\"btn btn-sm btn-success ft-r\">Update Info</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/views/profile/profile-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.component */ "./src/app/views/profile/profile.component.ts");




var routes = [
    {
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
        data: {
            title: 'Profile'
        }
    }
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/profile/profile.component.css":
/*!*****************************************************!*\
  !*** ./src/app/views/profile/profile.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label {\r\n    width: 148px;\r\n}\r\ninput, select {\r\n    border: 1px solid #b3acac;\r\n    border-radius: 3px;\r\n}\r\n.ft-r {\r\n    float: right;\r\n}\r\n.card-header {    \r\n    height: 50px;\r\n    background: #062736!important;\r\n    color: #08ab9e!important;\r\n}\r\nbutton {\r\n    background-color: #08ab9e;\r\n    color: #fff;\r\n}\r\n.notdone {\r\n    color: green;\r\n}\r\n.completedone {\r\n    color: green;\r\n}\r\n.card {\r\n    margin: 1px;\r\n}\r\n.adjust {\r\n    padding: 2px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgICB3aWR0aDogMTQ4cHg7XHJcbn1cclxuaW5wdXQsIHNlbGVjdCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjNhY2FjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi5mdC1yIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4uY2FyZC1oZWFkZXIgeyAgICBcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwNjI3MzYhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwOGFiOWUhaW1wb3J0YW50O1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDhhYjllO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLm5vdGRvbmUge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcbi5jb21wbGV0ZWRvbmUge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcbi5jYXJkIHtcclxuICAgIG1hcmdpbjogMXB4O1xyXG59XHJcbi5hZGp1c3Qge1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/views/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_services/loadspecs.service */ "./src/app/_services/loadspecs.service.ts");








var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, alertify, authService, http, loadspecsService) {
        var _this = this;
        this.userService = userService;
        this.alertify = alertify;
        this.authService = authService;
        this.http = http;
        this.loadspecsService = loadspecsService;
        this.mymodel = {};
        this.mycolor = {};
        this.userid = Number(localStorage.getItem('UserId'));
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + 'requests/';
        this.UploadFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.uploadFile = function (files) {
            if (files.length === 0) {
                return;
            }
            var fileToUpload = files[0];
            var formData = new FormData();
            formData.append('file', fileToUpload, fileToUpload.name);
            if (!(fileToUpload.type.indexOf('image') !== -1)) {
                _this.mycolor = 'notdone';
                _this.message = 'Invalid file type';
                return;
            }
            console.log(fileToUpload.type.indexOf('image') !== -1);
            _this.http.post(_this.baseUrl + 'upload_profile/' + _this.userid + '/', formData, { reportProgress: true, observe: 'events' })
                .subscribe(function (event) {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].UploadProgress) {
                    _this.progress = Math.round(100 * event.loaded / event.total);
                }
                else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].Response) {
                    _this.loadUser(_this.userid);
                    _this.mycolor = 'completedone';
                    _this.message = 'Upload success';
                    _this.UploadFinished.emit(event.body);
                    _this.mymodel = event.body;
                    console.log(_this.mymodel.fileName);
                    localStorage.setItem('Attachment', _this.mymodel.fileName);
                    _this.uploadedimg = fileToUpload.name;
                }
            });
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.mymodel.Country = '0';
        this.loadLocations();
        this.loadUser(this.userid);
    };
    ProfileComponent.prototype.loadLocations = function () {
        var _this = this;
        return this.loadspecsService.loadLocations().subscribe(function (locations) {
            _this.locations = locations.filter(function (proj) { return (proj.status === 1); });
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ProfileComponent.prototype.loadUser = function (id) {
        var _this = this;
        return this.userService.getUser(id).subscribe(function (user) {
            console.log(user);
            _this.mymodel.Id = user.id;
            _this.mymodel.Username = user.username;
            _this.mymodel.Email = user.email;
            _this.mymodel.Company = user.company;
            _this.mymodel.Reg_no = user.reg_no;
            _this.mymodel.mobile_no = user.mobile_no;
            _this.mymodel.tel_no = user.tel_no;
            _this.mymodel.City = user.city;
            _this.mymodel.Country = user.country;
            _this.mymodel.photoUrl = user.photoUrl;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ProfileComponent.prototype.EdituserPost = function () {
        var _this = this;
        if (!this.mymodel.Email) {
            this.alertify.error('Write email');
            return;
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.mymodel.Email)) {
            this.alertify.error('enter valid email');
            return;
        }
        if (!this.mymodel.Password) {
            this.alertify.error('Select password');
            return;
        }
        console.log(this.mymodel);
        this.authService.EdituserPost(this.mymodel).subscribe(function (users) {
            _this.alertify.success('User Edited Successful');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ProfileComponent.prototype.EdituserInfoPost = function () {
        var _this = this;
        if (!this.mymodel.Company) {
            this.alertify.error('Write Company');
            return;
        }
        if (!this.mymodel.Reg_no) {
            this.alertify.error('Write Regno');
            return;
        }
        if (!this.mymodel.mobile_no) {
            this.alertify.error('Write mobile');
            return;
        }
        if (!this.mymodel.City) {
            this.alertify.error('Write City');
            return;
        }
        if (!this.mymodel.Country) {
            this.alertify.error('Write Country');
            return;
        }
        console.log(this.mymodel);
        this.authService.EdituserInfoPost(this.mymodel).subscribe(function (users) {
            _this.alertify.success('User Edited Successful');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_7__["LoadspecsService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ProfileComponent.prototype, "UploadFinished", void 0);
    ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/profile/profile.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.component.css */ "./src/app/views/profile/profile.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _services_loadspecs_service__WEBPACK_IMPORTED_MODULE_7__["LoadspecsService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/views/profile/profile-routing.module.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.component */ "./src/app/views/profile/profile.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-profile-profile-module.js.map