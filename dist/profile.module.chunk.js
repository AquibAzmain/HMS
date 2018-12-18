webpackJsonp(["profile.module"],{

/***/ "../../../../../src/app/profile/profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutes", function() { return ProfileRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/profile/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_collapse__ = __webpack_require__("../../../../ngx-bootstrap/collapse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_service__ = __webpack_require__("../../../../../src/app/profile/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ProfileRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__user_profile_user_profile_component__["a" /* UserProfileComponent */],
        data: {
            breadcrumb: 'প্রোফাইল',
            icon: 'icofont icofont-justify-all bg-c-blue'
        }
    }
];
var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["g" /* RouterModule */].forChild(ProfileRoutes),
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_collapse__["a" /* CollapseModule */],
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot()
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__user_profile_user_profile_component__["a" /* UserProfileComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_10__profile_service__["a" /* ProfileService */]]
    })
], ProfileModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_Server__ = __webpack_require__("../../../../../src/utils/Server.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
        this.token = localStorage.getItem('token');
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token })
        };
    }
    ProfileService.prototype.getProfile = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__utils_Server__["a" /* Server */].API_ENDPOINT + 'profile', this.httpOptions);
    };
    ProfileService.prototype.editProfile = function (user_info) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__utils_Server__["a" /* Server */].API_ENDPOINT + 'profile', user_info, this.httpOptions);
    };
    ProfileService.prototype.changePassword = function (passwords) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__utils_Server__["a" /* Server */].API_ENDPOINT + 'change_password', passwords, this.httpOptions);
    };
    return ProfileService;
}());
ProfileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ProfileService);

var _a;
//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ "../../../../../src/app/profile/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-t-15\">\r\n  <!-- personal card start -->\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-3\"></div>\r\n    <div class=\"col-xl-6\">\r\n      <div class=\"card\">\r\n        <div class=\"alert alert-success alert-dismissible\" role=\"alert\" *ngIf=\"successMessage !== ''\">\r\n          {{successMessage}}\r\n        </div>\r\n        <div class=\"alert alert-danger alert-dismissible\" role=\"alert\" *ngIf=\"errorMessage !== ''\">\r\n          {{errorMessage}}\r\n        </div>\r\n        <div class=\"card-header\">\r\n          <button id=\"edit-btn\" type=\"button\" class=\"btn btn-sm bg-c-blue text-white waves-effect waves-light\" (click)=\"toggleEditProfile()\">\r\n            তথ্য সংশোধন <i class=\"icofont {{ editProfileIcon }}\"></i>\r\n          </button>\r\n          <button id=\"edit-btn\" type=\"button\" class=\"btn btn-sm bg-c-blue text-white waves-effect waves-light f-right\" (click)=\"openModal(template, 'add')\">\r\n            পাসওয়ার্ড পরিবর্তন</button>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"view-info\" *ngIf=\"editProfile\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 col-xl-12\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table m-0\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <th scope=\"row\">নাম</th>\r\n                        <td>{{user_info.name}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">মোবাইল নম্বর</th>\r\n                        <td>{{user_info.mobile_number}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- end of view-info -->\r\n          <div class=\"edit-info\" *ngIf=\"!editProfile\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 col-xl-12\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table m-0\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <th scope=\"row\">নাম</th>\r\n                        <td><input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"update_user_info.name\"/></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">মোবাইল নম্বর</th>\r\n                        <td><input class=\"form-control\" type=\"text\" name=\"mobile_number\" [(ngModel)]=\"update_user_info.mobile_number\" /></td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <!-- end of table col-lg-6 -->\r\n              <div class=\"col-lg-12 col-xl-12\">\r\n                <div class=\"text-center\">\r\n                  <a href=\"javascript:;\" class=\"btn btn-sm bg-c-blue text-white waves-effect waves-light m-r-20\" (click)=\"editUserInfo()\">নিশ্চিত</a>\r\n                  <a href=\"javascript:;\" id=\"edit-cancel\" class=\"btn btn-sm residence-button waves-effect\" (click)=\"toggleEditProfile()\">বাতিল</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #template>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title pull-left\">পাসওয়ার্ড পরিবর্তন</h5>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-6 col-form-label\">পুরাতন পাসওয়ার্ড</label>\r\n      <div class=\"col-sm-6\">\r\n        <input class=\"form-control\" type=\"password\" [(ngModel)]=\"passwords.old_password\" required/>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-6 col-form-label\" >নতুন পাসওয়ার্ড</label>\r\n      <div class=\"col-sm-6\">\r\n        <input class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"passwords.new_password\" required/>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-6 col-form-label\">পুনরায় নতুন পাসওয়ার্ড</label>\r\n      <div class=\"col-sm-6\">\r\n        <input class=\"form-control\" type=\"password\" name=\"confirmPassword\" [(ngModel)]=\"confirmPassword\" required/>\r\n      </div>\r\n    </div>\r\n    <div class=\"alert alert-warning alert-dismissible\" role=\"alert\" *ngIf=\"errorMessageInPasswordChange !== ''\">\r\n      {{errorMessageInPasswordChange}}\r\n    </div>\r\n    <button type=\"button\" class=\"btn bg-c-blue text-white\" (click)=\"confirm()\">নিশ্চিত</button>\r\n    <button type=\"button\" class=\"btn text-white cancel-button f-right\" (click)=\"decline()\">বাতিল</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/profile/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_service__ = __webpack_require__("../../../../../src/app/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserProfileComponent = (function () {
    function UserProfileComponent(http, modalService, profileService, router) {
        this.http = http;
        this.modalService = modalService;
        this.profileService = profileService;
        this.router = router;
        this.user_info = {
            name: null,
            mobile_number: null
        };
        this.successMessage = '';
        this.errorMessage = '';
        this.editProfile = true;
        this.editProfileIcon = 'icofont-edit';
        this.passwords = { old_password: null, new_password: null };
        this.errorMessageInPasswordChange = '';
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getProfile().subscribe(function (resp) {
            _this.user_info.name = resp["name"];
            _this.user_info.mobile_number = resp["mobile_number"];
        }, function (err) {
            _this.router.navigate(['/dashboard']);
        });
    };
    UserProfileComponent.prototype.editUserInfo = function () {
        var _this = this;
        this.successMessage = '';
        this.errorMessage = '';
        this.profileService.editProfile(this.update_user_info).subscribe(function (resp) {
            _this.errorMessage = '';
            _this.successMessage = "User info updated successfully.";
        }, function (err) {
            _this.errorMessage = JSON.parse(err.error).status;
        });
    };
    UserProfileComponent.prototype.toggleEditProfile = function () {
        this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
        this.editProfile = !this.editProfile;
        this.update_user_info = this.user_info;
        this.successMessage = '';
        this.errorMessage = '';
    };
    UserProfileComponent.prototype.openModal = function (template, type) {
        this.errorMessageInPasswordChange = '';
        this.modalRef = this.modalService.show(template);
        if (type == "add")
            this.modalHeader = "নতুন সম্পদ যুক্ত করুন";
        else
            this.modalHeader = "তথ্য সংশোধন";
    };
    UserProfileComponent.prototype.confirm = function () {
        var _this = this;
        this.successMessage = '';
        this.errorMessageInPasswordChange = '';
        this.errorMessage = '';
        console.log('Confirmed!');
        if (this.confirmPassword != this.passwords.new_password) {
            this.errorMessageInPasswordChange = "password does not matched.";
            return;
        }
        this.profileService.changePassword(this.passwords).subscribe(function (resp) {
            _this.successMessage = JSON.parse(JSON.stringify(resp)).status;
            _this.editUserInfo = null;
            _this.modalRef.hide();
        }, function (err) {
            _this.errorMessageInPasswordChange = JSON.parse(err.error).status;
        });
    };
    UserProfileComponent.prototype.decline = function () {
        this.successMessage = '';
        this.errorMessage = '';
        this.errorMessageInPasswordChange = '';
        console.log('Declined!');
        this.modalRef.hide();
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__("../../../../../src/app/profile/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/user-profile/user-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__profile_service__["a" /* ProfileService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["f" /* Router */]) === "function" && _d || Object])
], UserProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-profile.component.js.map

/***/ })

});
//# sourceMappingURL=profile.module.chunk.js.map