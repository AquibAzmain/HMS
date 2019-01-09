webpackJsonp(["users.module"],{

/***/ "../../../../../src/app/users/user-list/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- student data table card start -->\r\n<div class=\"card\">\r\n  <div class=\"card-body contact-details\">\r\n    <p class=\"card-header-text\">সিস্টেম ব্যবহারকারীদের তালিকা</p>\r\n    <button class=\"btn btn-danger f-right\" (click)=\"openModal(template, 'add')\"><i class=\"icofont icofont-plus\"></i>\r\n      নতুন ব্যবহারকারী</button>\r\n    <div class=\"table-responsive\" style=\"padding-top:30px\">\r\n      <div class=\"alert alert-success alert-dismissible\" role=\"alert\" *ngIf=\"message !== ''\">\r\n        {{message}}\r\n      </div>\r\n      <div class=\"alert alert-danger alert-dismissible\" role=\"alert\" *ngIf=\"errorMessage !== ''\">\r\n        {{errorMessage}}\r\n      </div>\r\n      <table class=\"table table-striped table-bordered full-data-table\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\"\r\n        [mfRowsOnPage]=\"rowsOnPage\">\r\n        <thead>\r\n          <tr>\r\n            <th>\r\n              নাম\r\n            </th>\r\n            <th>\r\n              মোবাইল নাম্বার\r\n            </th>\r\n            <th>\r\n              ভূমিকা\r\n            </th>\r\n            <th>\r\n              অ্যাকাউন্ট\r\n            </th>\r\n            <th>\r\n              অ্যাকশন\r\n            </th>\r\n          </tr>\r\n\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of mf.data; index as i;\">\r\n            <td>{{item.name}}</td>\r\n            <td>{{item.mobile_number}}</td>\r\n            <td>{{item.role}}</td>\r\n            <td>{{item.status}}</td>\r\n            <td>\r\n              <a (click)=\"openUpdateUserModal(updateUser, item)\" href=\"javascript:;\" class=\"edit-delete-icon\">\r\n                <i class=\"icofont icofont-edit\"></i>\r\n              </a>&nbsp;&nbsp;\r\n              <ng-template #updateUser>\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title pull-left\">তথ্য সংশোধন</h5>\r\n                  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"updateModalRef.hide()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">ভূমিকা</label>\r\n                    <div class=\"col-sm-8\">\r\n                      <select class=\"form-control\" name=\"role\" [(ngModel)]=\"editUser.role\" required>\r\n                        <option value=\"houseTutor\">House Tutor</option>\r\n                        <option value=\"provost\">Provost</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <button type=\"button\" class=\"btn btn-danger text-white\" (click)=\"confirmUpdateUser()\">নিশ্চিত</button>\r\n                  <button type=\"button\" class=\"btn text-white cancel-button f-right\" (click)=\"declineUpdate()\">বাতিল</button>\r\n                </div>\r\n              </ng-template>\r\n              <a (click)=\"openDeleteModal(deleteTemplate, item)\" href=\"javascript:;\" class=\"edit-delete-icon\">\r\n                <i class=\"icofont icofont-ui-delete\"></i></a>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n        <tfoot>\r\n          <tr>\r\n            <td colspan=\"7\">\r\n              <mfBootstrapPaginator class=\"pagination-main f-right\"></mfBootstrapPaginator>\r\n            </td>\r\n          </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<ng-template #template>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title pull-left\">{{modalHeader}}</h5>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"alert alert-danger alert-dismissible\" role=\"alert\" *ngIf=\"errorMessageModal !== ''\">\r\n    {{errorMessageModal}}\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-4 col-form-label\">নাম</label>\r\n      <div class=\"col-sm-8\">\r\n        <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"createUserData.name\" required />\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-4 col-form-label\">মোবাইল</label>\r\n      <div class=\"col-sm-8\">\r\n        <input class=\"form-control\" type=\"text\" name=\"mobile\" [(ngModel)]=\"createUserData.mobile_number\" required />\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-4 col-form-label\">পাসওয়ার্ড</label>\r\n      <div class=\"col-sm-8\">\r\n        <input class=\"form-control\" type=\"password\"  name=\"password\" [(ngModel)]=\"createUserData.password\" required />\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-4 col-form-label\">আবার পাসওয়ার্ড দিন</label>\r\n      <div class=\"col-sm-8\">\r\n        <input class=\"form-control\" type=\"password\" name=\"confirmPassword\" [(ngModel)]=\"createUserData.confirm_password\" required/>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-4 col-form-label\">ভূমিকা</label>\r\n      <div class=\"col-sm-8\">\r\n        <select class=\"form-control\" name=\"role\" [(ngModel)]=\"createUserData.role\" required>\r\n          <option value=\"houseTutor\">House Tutor</option>\r\n          <option value=\"hallOfficer\">Hall officer</option>\r\n          <option value=\"accountant\">Accountant</option>\r\n          <!--option value=\"admin\">Admin</option-->\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <button type=\"button\" class=\"btn btn-danger text-white\" (click)=\"confirm()\">নিশ্চিত</button>\r\n    <button type=\"button\" class=\"btn text-white cancel-button f-right\" (click)=\"decline()\">বাতিল</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #deleteTemplate>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title pull-left\">অ্যাকাউন্টটি বন্ধ করে দিতে ইচ্ছুক?</h5>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"deleteModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <button type=\"button\" class=\"btn btn-danger text-white\" (click)=\"confirmDelete()\">নিশ্চিত</button>\r\n    <button type=\"button\" class=\"btn text-white cancel-button f-right\" (click)=\"declineDelete()\">বাতিল</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/users/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
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





var UserListComponent = (function () {
    function UserListComponent(http, modalService, userService, router) {
        this.http = http;
        this.modalService = modalService;
        this.userService = userService;
        this.router = router;
        this.rowsOnPage = 10;
        this.filterQuery = '';
        this.sortBy = '';
        this.sortOrder = 'desc';
        this.message = '';
        this.errorMessage = '';
        this.errorMessageModal = '';
        this.deleteUser = {
            mobile_number: null
        };
        this.role = localStorage.getItem('role');
        this.editUser = {
            mobile_number: null,
            role: null
        };
        this.createUserData = {
            name: null,
            mobile_number: null,
            password: null,
            confirm_password: null,
            role: null
        };
    }
    UserListComponent.prototype.ngOnInit = function () {
        if ((this.role == "admin")) {
            this.loadUsers();
        }
        else {
            this.router.navigate(['/dashboard']);
        }
    };
    UserListComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (resp) {
            _this.data = resp;
        }, function (err) {
            _this.router.navigate(['/dashboard']);
        });
    };
    UserListComponent.prototype.openModal = function (template, type) {
        this.errorMessage = '';
        this.message = '';
        this.modalRef = this.modalService.show(template);
        if (type == "add")
            this.modalHeader = "নতুন ব্যবহারকারী যুক্ত করুন";
        else
            this.modalHeader = "তথ্য সংশোধন";
    };
    UserListComponent.prototype.openUpdateUserModal = function (template, user) {
        this.errorMessage = '';
        this.message = '';
        this.editUser.mobile_number = user.mobile_number;
        this.updateModalRef = this.modalService.show(template);
    };
    UserListComponent.prototype.confirmUpdateUser = function () {
        var _this = this;
        console.log(this.editUser.role);
        this.userService.editUserRole(this.editUser).subscribe(function (resp) {
            _this.message = "User role updated successfully.";
            _this.loadUsers();
        }, function (err) {
            err = JSON.parse(err.error);
            _this.message = '';
            _this.errorMessage = err.status;
        });
        this.updateModalRef.hide();
    };
    UserListComponent.prototype.declineUpdate = function () {
        this.updateModalRef.hide();
    };
    UserListComponent.prototype.confirm = function () {
        var _this = this;
        this.errorMessageModal = '';
        console.log('Confirmed!');
        console.log(this.createUserData.name);
        if (this.createUserData.name == null || this.createUserData.name == "" ||
            this.createUserData.mobile_number == null || this.createUserData.mobile_number == "" ||
            this.createUserData.password == null || this.createUserData.password == "" ||
            this.createUserData.confirm_password == null || this.createUserData.confirm_password == "" ||
            this.createUserData.role == null) {
            this.errorMessageModal = "Please fill all the fields.";
            return;
        }
        if (this.createUserData.password != this.createUserData.confirm_password) {
            this.errorMessageModal = "Password and Confirm Password do not Match.";
            return;
        }
        this.userService.createUser(this.createUserData).subscribe(function (resp) {
            _this.errorMessage = '';
            _this.message = "User Created Successfully.";
            _this.loadUsers();
            _this.modalRef.hide();
        }, function (err) {
            err = JSON.parse(err.error);
            _this.message = '';
            _this.errorMessageModal = "Duplicate Mobile Number.";
            _this.errorMessage = err.status;
        });
    };
    UserListComponent.prototype.decline = function () {
        this.errorMessageModal = '';
        console.log('Declined!');
        this.modalRef.hide();
    };
    UserListComponent.prototype.openDeleteModal = function (template, item) {
        this.errorMessage = '';
        this.message = '';
        this.deleteUser.mobile_number = item.mobile_number;
        this.deleteModalRef = this.modalService.show(template);
    };
    UserListComponent.prototype.confirmDelete = function () {
        var _this = this;
        this.userService.editUserStatus(this.deleteUser).subscribe(function (resp) {
            _this.errorMessage = '';
            _this.message = "User status edited successfully.";
            _this.loadUsers();
        }, function (err) {
            _this.message = '';
            _this.errorMessage = JSON.parse(err.error).status;
        });
        this.deleteModalRef.hide();
    };
    UserListComponent.prototype.declineDelete = function () {
        this.deleteModalRef.hide();
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-list',
        template: __webpack_require__("../../../../../src/app/users/user-list/user-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/user-list/user-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["f" /* Router */]) === "function" && _d || Object])
], UserListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
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



var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.token = localStorage.getItem('token');
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token })
        };
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__utils_Server__["a" /* Server */].API_ENDPOINT + 'users', this.httpOptions);
    };
    UserService.prototype.createUser = function (userInfo) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__utils_Server__["a" /* Server */].API_ENDPOINT + 'register', userInfo, this.httpOptions);
    };
    UserService.prototype.editUserRole = function (userInfo) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__utils_Server__["a" /* Server */].API_ENDPOINT + "change_role", userInfo, this.httpOptions);
    };
    UserService.prototype.editUserStatus = function (userInfo) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__utils_Server__["a" /* Server */].API_ENDPOINT + "change_status", userInfo, this.httpOptions);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutes", function() { return UserRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_collapse__ = __webpack_require__("../../../../ngx-bootstrap/collapse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_datepicker__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_list_user_list_component__ = __webpack_require__("../../../../../src/app/users/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var UserRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_10__user_list_user_list_component__["a" /* UserListComponent */],
        data: {
            breadcrumb: 'সিস্টেম ব্যবহারকারী',
            icon: 'icofont icofont-ui-user-group bg-c-pink'
        }
    }
];
var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["g" /* RouterModule */].forChild(UserRoutes),
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_collapse__["a" /* CollapseModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot()
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_10__user_list_user_list_component__["a" /* UserListComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_11__user_service__["a" /* UserService */]]
    })
], UsersModule);

//# sourceMappingURL=users.module.js.map

/***/ })

});
//# sourceMappingURL=users.module.chunk.js.map