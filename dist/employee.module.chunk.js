webpackJsonp(["employee.module"],{

/***/ "../../../../../src/app/employee/employee-detail/basic-info/basic-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employee/employee-detail/basic-info/basic-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <p class=\"card-header-text\">সাধারণ তথ্যাবলী</p>\r\n    <button *ngIf=\"this.role == 'hallOfficer'\" id=\"edit-btn\" type=\"button\" class=\"btn btn-sm btn-success waves-effect waves-light f-right\" (click)=\"toggleEditProfile()\">\r\n      তথ্য সংশোধন\r\n      <i class=\"icofont {{ editProfileIcon }}\"></i>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <div class=\"view-info\" *ngIf=\"editProfile\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"general-info\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table m-0\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <th scope=\"row\">পূর্ণ নাম</th>\r\n                        <td>{{this.employee.name}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">যোগদান তারিখ</th>\r\n                        <td>{{this.employee.joining_date}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">ঠিকানা</th>\r\n                        <td>{{this.employee.address}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">মোবাইল</th>\r\n                        <td>{{this.employee.contact_number}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">পদমর্যাদা</th>\r\n                        <td>{{this.employee.job_title}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">ডিপার্টমেন্ট</th>\r\n                        <td>{{this.employee.department}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">ক্যাম্পাসের আবাসিক</th>\r\n                        <td>{{this.employee.campus_residency}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">অনুষ্ঠানে অংশগ্রহণ</th>\r\n                        <td>{{this.employee.event_participation}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <!-- end of table col-lg-6 -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- end of view-info-->\r\n    <div class=\"edit-info\" *ngIf=\"!editProfile\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"general-info\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table m-0\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <th scope=\"row\">পূর্ণ নাম</th>\r\n                        <td>\r\n                          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employee.name\" />\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">যোগদান তারিখ</th>\r\n                        <td>\r\n                          <input type=\"text\" placeholder=\"DD/MM/YYYY\" class=\"form-control\" #dp=\"bsDatepicker\" [bsValue]=\"bsValue\"\r\n                            [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-default' }\" \r\n                            bsDatepicker [(ngModel)]=\"employee.joining_date\">\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">ঠিকানা</th>\r\n                        <td>\r\n                          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employee.address\" />\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">মোবাইল </th>\r\n                        <td>\r\n                          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employee.contact_number\" />\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">পদমর্যাদা</th>\r\n                        <td>\r\n                          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employee.job_title\" />\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">ডিপার্টমেন্ট</th>\r\n                        <td>\r\n                          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employee.department\" />\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">ক্যাম্পাসের আবাসিক</th>\r\n                        <td>\r\n                          <select class=\"form-control\" [(ngModel)]=\"employee.campus_residency\">\r\n                            <option value=\"yes\">হ্যাঁ</option>\r\n                            <option value=\"no\">না</option>\r\n                          </select>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">অনুষ্ঠানে অংশগ্রহণ</th>\r\n                        <td>\r\n                          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employee.event_participation\" />\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                  <div class=\"text-center\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-success waves-effect waves-light m-r-20\" (click)=\"confirmUpdateEmployee()\">নিশ্চিত</a>\r\n                    <a href=\"javascript:;\" id=\"edit-cancel\" class=\"btn residence-button waves-effect\" (click)=\"toggleEditProfile()\">বাতিল</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- end of table col-lg-6 -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<ng2-toasty [position]=\"position\"></ng2-toasty>"

/***/ }),

/***/ "../../../../../src/app/employee/employee-detail/basic-info/basic-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Employee__ = __webpack_require__("../../../../../src/models/Employee.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employee_service__ = __webpack_require__("../../../../../src/app/employee/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BasicInfoComponent = (function () {
    function BasicInfoComponent(route, employeeService, router, toastyService) {
        this.route = route;
        this.employeeService = employeeService;
        this.router = router;
        this.toastyService = toastyService;
        this.position = 'bottom';
        this.editProfile = true;
        this.editProfileIcon = 'icofont-edit';
        this.role = localStorage.getItem('role'); //"hallOfficer";
        this.employee = new __WEBPACK_IMPORTED_MODULE_2__models_Employee__["a" /* Employee */]();
    }
    BasicInfoComponent.prototype.ngOnInit = function () {
        //console.log(employeeId);
        if ((this.role == "provost" || this.role == "hallOfficer")) {
            this.getEmployeeData();
        }
        else {
            this.router.navigate(['/dashboard']);
        }
    };
    BasicInfoComponent.prototype.getEmployeeData = function () {
        var _this = this;
        var employeeId = this.route.snapshot.paramMap.get('id');
        this.employeeService.getEmployeeById(employeeId)
            .subscribe(function (response) {
            _this.employee = response;
        }, function (err) {
            _this.errorToast('Operation not successful. Check your net connection.');
        });
    };
    BasicInfoComponent.prototype.toggleEditProfile = function () {
        this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
        this.editProfile = !this.editProfile;
        this.getEmployeeData();
    };
    BasicInfoComponent.prototype.confirmUpdateEmployee = function () {
        var _this = this;
        if (this.employee.joining_date != null) {
            this.employee.joining_date = this.formatDate(this.employee.joining_date);
        }
        if (this.employee.name == null || this.employee.contact_number == null || this.employee.job_title == null) {
            this.errorToast("");
            this.errorToast('Please Fillup Required Fields');
            console.log("error");
        }
        if (this.employee.name.length == 0 || this.employee.contact_number.length == 0 || this.employee.job_title.length == 0) {
            this.errorToast('Please Fillup Required Fields');
            console.log("error");
        }
        else if (this.employee.contact_number.match(/[a-z]/i)) {
            this.errorToast('Error in Mobile Number.');
        }
        else {
            this.employeeService.updateEmployee(this.employee)
                .subscribe(function (response) {
                _this.toggleEditProfile();
                _this.getEmployeeData();
                console.log(_this.employee);
                _this.successToast();
            }, function (err) {
                _this.errorToast('Operation not successful. Check your net connection.');
            });
        }
    };
    BasicInfoComponent.prototype.formatDate = function (date) {
        var day = date.getDate();
        var monthIndex = date.getMonth() + 1;
        var year = date.getFullYear();
        return day + '/' + monthIndex + '/' + year;
    };
    BasicInfoComponent.prototype.addToast = function (options) {
        if (options.closeOther) {
            this.toastyService.clearAll();
        }
        this.position = options.position ? options.position : this.position;
        var toastOptions = {
            title: options.title,
            msg: options.msg,
            showClose: options.showClose,
            timeout: options.timeout,
            theme: options.theme,
            onAdd: function (toast) {
                /* added */
            },
            onRemove: function (toast) {
                /* removed */
            }
        };
        switch (options.type) {
            case 'default':
                this.toastyService.default(toastOptions);
                break;
            case 'info':
                this.toastyService.info(toastOptions);
                break;
            case 'success':
                this.toastyService.success(toastOptions);
                break;
            case 'wait':
                this.toastyService.wait(toastOptions);
                break;
            case 'error':
                this.toastyService.error(toastOptions);
                break;
            case 'warning':
                this.toastyService.warning(toastOptions);
                break;
        }
    };
    BasicInfoComponent.prototype.successToast = function () {
        this.addToast({
            title: 'Success',
            msg: 'Operation successful.',
            timeout: 5000, theme: 'material',
            position: 'bottom',
            type: 'success'
        });
    };
    BasicInfoComponent.prototype.errorToast = function (message) {
        this.addToast({
            title: 'Error',
            msg: message,
            timeout: 5000, theme: 'material',
            position: 'bottom',
            type: 'error'
        });
    };
    return BasicInfoComponent;
}());
BasicInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'employee-basic-info',
        template: __webpack_require__("../../../../../src/app/employee/employee-detail/basic-info/basic-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/employee/employee-detail/basic-info/basic-info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__employee_service__["a" /* EmployeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__employee_service__["a" /* EmployeeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["b" /* ToastyService */]) === "function" && _d || Object])
], BasicInfoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=basic-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/employee/employee-detail/employee-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employee/employee-detail/employee-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page-header start -->\r\n\r\n<div class=\"page-header card\">\r\n  <div class=\"row align-items-end\">\r\n    <div class=\"col-lg-8\">\r\n      <div class=\"page-header-title\">\r\n        <span style=\"padding: 0px; margin: 0px\"><i class=\"icofont icofont-user bg-c-green\"></i></span>\r\n        <div class=\"d-inline\">\r\n          <span class=\"d-block\">\r\n            <h4>কর্মকর্তার নামঃ {{this.employee.name}}</h4>\r\n          </span>\r\n          <!-- <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"page-header-breadcrumb\">\r\n        <ul class=\"breadcrumb-title\">\r\n          <li class=\"breadcrumb-item\">\r\n            <a routerLink=\"/employee\"><i class=\"icofont icofont-arrow-left\"></i>\r\n              তালিকায় ফিরে যান</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Page-header end -->\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <employee-basic-info></employee-basic-info>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <app-leave-info></app-leave-info>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/employee/employee-detail/employee-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Employee__ = __webpack_require__("../../../../../src/models/Employee.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employee_service__ = __webpack_require__("../../../../../src/app/employee/employee.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeDetailComponent = (function () {
    function EmployeeDetailComponent(route, employeeService, router) {
        this.route = route;
        this.employeeService = employeeService;
        this.router = router;
        this.role = localStorage.getItem('role'); //"hallOfficer";
        this.employee = new __WEBPACK_IMPORTED_MODULE_1__models_Employee__["a" /* Employee */]();
    }
    EmployeeDetailComponent.prototype.ngOnInit = function () {
        //console.log(employeeId);
        if ((this.role == "provost" || this.role == "hallOfficer")) {
            this.getEmployeeData();
        }
        else {
            this.router.navigate(['/dashboard']);
        }
    };
    EmployeeDetailComponent.prototype.getEmployeeData = function () {
        var _this = this;
        var employeeId = this.route.snapshot.paramMap.get('id');
        this.employeeService.getEmployeeById(employeeId)
            .subscribe(function (response) {
            _this.employee = response;
        });
    };
    return EmployeeDetailComponent;
}());
EmployeeDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-employee-detail',
        template: __webpack_require__("../../../../../src/app/employee/employee-detail/employee-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/employee/employee-detail/employee-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__employee_service__["a" /* EmployeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__employee_service__["a" /* EmployeeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]) === "function" && _c || Object])
], EmployeeDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=employee-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/employee/employee-detail/leave-info/leave-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employee/employee-detail/leave-info/leave-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <p class=\"card-header-text\">ছুটি সংক্রান্ত তথ্যাবলী</p>\r\n    <button *ngIf=\"this.role == 'hallOfficer'\" id=\"edit-btn\" type=\"button\" class=\"btn btn-sm btn-success waves-effect waves-light f-right\" (click)=\"openAddLeaveModal(addLeave)\">\r\n      ছুটির আবেদন\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <div *ngIf =\"this.pendingLeave==true\" class=\"card b-l-success business-info services\">\r\n      <div class=\"card-body\">\r\n        <ul *ngFor=\"let leave of this.leaves; index as i;\">\r\n          <li *ngIf=\"leave.approval_status=='pending'\"><i class=\"icofont icofont-hour-glass\"></i> {{leave.date_from}} থেকে {{leave.date_to}} তারিখের ছুটি অনুমোদনের অপেক্ষায়\r\n            আছে।</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div *ngIf =\"this.casualLeave==true\" class=\"table-responsive\">\r\n      <table class=\"table table-striped table-bordered full-data-table\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\"\r\n        [mfRowsOnPage]=\"rowsOnPage\">\r\n        <thead>\r\n          <tr>\r\n            <th>ক্যাজুয়াল ছুটির তারিখ</th>\r\n            <th>ব্যাপ্তি</th>\r\n          </tr>\r\n          <tr>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let leave of this.leaves; index as i;\">\r\n            <td *ngIf=\"leave.approval_status=='approved' && leave.category =='casual'\" >{{leave.date_from}} - {{leave.date_to}}</td>\r\n            <td *ngIf=\"leave.approval_status=='approved' && leave.category =='casual'\">{{leave.days}}</td>\r\n          </tr>\r\n        </tbody>\r\n        <tfoot>\r\n          <tr>\r\n            <td colspan=\"7\"><span style=\"color: red\">এই বছরে সর্বমোট {{this.totalCasualLeave}} টি ক্যাজুয়াল ছুটি নিয়েছেন।</span>\r\n              <!-- <mfBootstrapPaginator class=\"pagination-main f-right\"></mfBootstrapPaginator> -->\r\n            </td>\r\n          </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n\r\n    <div *ngIf =\"this.sickLeave==true\" class=\"table-responsive\">\r\n      <table class=\"table table-striped table-bordered full-data-table\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\"\r\n        [mfRowsOnPage]=\"rowsOnPage\">\r\n        <thead>\r\n          <tr>\r\n            <th>অসুস্থতা ছুটির তারিখ</th>\r\n            <th>ছুটির ব্যাপ্তি</th>\r\n          </tr>\r\n          <tr>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let leave of this.leaves; index as i;\">\r\n            <td *ngIf=\"leave.approval_status=='approved' && leave.category =='sick'\" >{{leave.date_from}} - {{leave.date_to}}</td>\r\n            <td *ngIf=\"leave.approval_status=='approved' && leave.category =='sick'\">{{leave.days}}</td>\r\n          </tr>\r\n        </tbody>\r\n        <tfoot>\r\n          <tr>\r\n            <td colspan=\"7\"><span style=\"color: red\">এই বছরে সর্বমোট {{this.totalSickLeave}} টি অসুস্থতা ছুটি নিয়েছেন।</span>\r\n              <!-- <mfBootstrapPaginator class=\"pagination-main f-right\"></mfBootstrapPaginator> -->\r\n            </td>\r\n          </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n\r\n    <div *ngIf =\"this.entertainmentLeave==true\" class=\"table-responsive\">\r\n      <table class=\"table table-striped table-bordered full-data-table\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\"\r\n        [mfRowsOnPage]=\"rowsOnPage\">\r\n        <thead>\r\n          <tr>\r\n            <th>বিনোদন ছুটির তারিখ</th>\r\n            <th>ব্যাপ্তি</th>\r\n          </tr>\r\n          <tr>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let leave of this.leaves; index as i;\">\r\n            <td *ngIf=\"leave.approval_status=='approved' && leave.category =='entertainment'\" >{{leave.date_from}} - {{leave.date_to}}</td>\r\n            <td *ngIf=\"leave.approval_status=='approved' && leave.category =='entertainment'\">{{leave.days}}</td>\r\n          </tr>\r\n        </tbody>\r\n        <tfoot>\r\n          <tr>\r\n            <td colspan=\"7\">\r\n              <mfBootstrapPaginator class=\"pagination-main f-right\"></mfBootstrapPaginator>\r\n            </td>\r\n          </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n\r\n    \r\n\r\n    \r\n  </div>\r\n</div>\r\n\r\n\r\n<ng-template #addLeave>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title pull-left\">ছুটির আবেদন করুন</h5>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-4 col-form-label\">ছুটি শুরুর তারিখ<span style=\"color: red\">*</span></label>\r\n      <div class=\"col-sm-8\">\r\n        <input [maxDate]=\"leaveToBeAdded.date_to\" type=\"text\" placeholder=\"DD/MM/YYYY\" class=\"form-control\" #dp=\"bsDatepicker\" [bsValue]=\"bsValue\" [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-default' }\"\r\n          bsDatepicker [(ngModel)]=\"leaveToBeAdded.date_from\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-4 col-form-label\">ছুটি শেষের তারিখ<span style=\"color: red\">*</span></label>\r\n      <div class=\"col-sm-8\">\r\n        <input [minDate]=\"leaveToBeAdded.date_from\" type=\"text\" placeholder=\"DD/MM/YYYY\" class=\"form-control\" #dp=\"bsDatepicker\" [bsValue]=\"bsValue\" [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-default' }\"\r\n          bsDatepicker [(ngModel)]=\"leaveToBeAdded.date_to\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-4 col-form-label\">ছুটির ধরণ<span style=\"color: red\">*</span></label>\r\n      <div class=\"col-sm-8\">\r\n          <select class=\"form-control\" [(ngModel)]=\"leaveToBeAdded.category\">\r\n            <option value=\"sick\">Sick</option>\r\n            <option value=\"casual\">Casual</option>\r\n            <option value=\"entertainment\">Entertainment</option>\r\n          </select>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"this.confirmAddError == true\" class=\"form-group row\" style=\"color: red\">\r\n      <label class=\"col-sm-12 col-form-label\">*ঠিকমত ফর্ম পূরণ করুন</label>\r\n    </div>\r\n    <button type=\"button\" class=\"btn btn-success text-white\" (click)=\"confirmAddLeave()\">নিশ্চিত</button>\r\n    <button type=\"button\" class=\"btn text-white cancel-button f-right\" (click)=\"decline()\">বাতিল</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #deleteTemplate>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title pull-left\">তথ্য মুছে দিতে ইচ্ছুক?</h5>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"deleteModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <button type=\"button\" class=\"btn btn-success text-white\" (click)=\"confirmDelete()\">নিশ্চিত</button>\r\n    <button type=\"button\" class=\"btn text-white cancel-button f-right\" (click)=\"declineDelete()\">বাতিল</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng2-toasty [position]=\"position\"></ng2-toasty>"

/***/ }),

/***/ "../../../../../src/app/employee/employee-detail/leave-info/leave-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Leave__ = __webpack_require__("../../../../../src/models/Leave.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__employee_service__ = __webpack_require__("../../../../../src/app/employee/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LeaveInfoComponent = (function () {
    function LeaveInfoComponent(http, modalService, route, employeeService, router, toastyService) {
        this.http = http;
        this.modalService = modalService;
        this.route = route;
        this.employeeService = employeeService;
        this.router = router;
        this.toastyService = toastyService;
        this.position = 'bottom';
        this.rowsOnPage = 5;
        this.filterQuery = '';
        this.sortBy = '';
        this.sortOrder = 'desc';
        this.isCollapsed = true;
        this.bsValue = new Date();
        this.leaves = [];
        this.leaveToBeAdded = new __WEBPACK_IMPORTED_MODULE_3__models_Leave__["a" /* Leave */]();
        this.pendingLeave = false;
        this.casualLeave = false;
        this.entertainmentLeave = false;
        this.sickLeave = false;
        this.role = localStorage.getItem('role'); //"hallOfficer"; 
        this.confirmAddError = false;
        this.confirmUpdateError = false;
        this.totalSickLeave = 0;
        this.totalCasualLeave = 0;
    }
    LeaveInfoComponent.prototype.ngOnInit = function () {
        this.employeeId = this.route.snapshot.paramMap.get('id');
        console.log(this.role);
        if ((this.role == "provost" || this.role == "hallOfficer")) {
            this.getLeaveData();
        }
        else {
            this.router.navigate(['/dashboard']);
        }
        // let l = new Leave();
        // l.approval_status = "approved";
        // l.date_from ="11-2-18";
        // l.date_to ="9-2-18";
        // l.category = "sick";
        // this.leaves.push(l);
        // let l2 = new Leave();
        // l2.approval_status = "pending";
        // l2.date_from ="15-2-18";
        // l2.date_to ="19-2-18";
        // l2.category = "sick";
        // this.leaves.push(l2);
    };
    LeaveInfoComponent.prototype.getLeaveData = function () {
        var _this = this;
        this.employeeService.getLeaveList(this.employeeId)
            .subscribe(function (response) {
            console.log(response);
            _this.leaves = response;
            _this.checkPendingLeave();
            _this.checkCasualLeave();
            _this.checkEntertainmentLeave();
            _this.checkSickLeave();
            _this.getSickLeave();
            _this.getCasualLeave();
        }, function (err) {
            _this.errorToast();
        });
    };
    LeaveInfoComponent.prototype.getSickLeave = function () {
        var _this = this;
        this.employeeService.getNumberofSickLeaves(this.employeeId)
            .subscribe(function (response) {
            console.log(response);
            _this.totalSickLeave = response['days'];
        }, function (err) {
            _this.errorToast();
        });
    };
    LeaveInfoComponent.prototype.getCasualLeave = function () {
        var _this = this;
        this.employeeService.getNumberofCasualLeaves(this.employeeId)
            .subscribe(function (response) {
            console.log(response);
            _this.totalCasualLeave = response['days'];
        }, function (err) {
            _this.errorToast();
        });
    };
    LeaveInfoComponent.prototype.openUpdateLeaveModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    LeaveInfoComponent.prototype.openAddLeaveModal = function (template) {
        this.leaveToBeAdded = new __WEBPACK_IMPORTED_MODULE_3__models_Leave__["a" /* Leave */]();
        this.modalRef = this.modalService.show(template);
    };
    // public openModal(template: TemplateRef<any>, type: string) {
    //   this.modalRef = this.modalService.show(template);
    //   if(type=="add")this.modalHeader = "ছুটির আবেদন করুন";
    //   else this.modalHeader = "তথ্য সংশোধন";
    // }
    LeaveInfoComponent.prototype.confirm = function () {
        console.log('Confirmed!');
        this.modalRef.hide();
    };
    LeaveInfoComponent.prototype.decline = function () {
        this.getLeaveData();
        console.log('Declined!');
        this.modalRef.hide();
    };
    LeaveInfoComponent.prototype.confirmAddLeave = function () {
        var _this = this;
        if (this.leaveToBeAdded.category == null || this.leaveToBeAdded.date_from == null || this.leaveToBeAdded.date_to == null) {
            this.confirmAddError = true;
        }
        else {
            this.confirmAddError = false;
            this.modalRef.hide();
            this.leaveToBeAdded.approval_status = "pending";
            this.leaveToBeAdded.employee_id = this.employeeId;
            this.leaveToBeAdded.date_from = this.formatDate(this.leaveToBeAdded.date_from);
            this.leaveToBeAdded.date_to = this.formatDate(this.leaveToBeAdded.date_to);
            console.log(this.leaveToBeAdded);
            this.employeeService.addLeave(this.leaveToBeAdded)
                .subscribe(function (response) {
                console.log(_this.leaveToBeAdded);
                _this.successToast();
                _this.getLeaveData();
            }, function (err) {
                _this.errorToast();
            });
        }
    };
    LeaveInfoComponent.prototype.confirmUpdateLeave = function (leave) {
        var _this = this;
        console.log(leave.category);
        console.log(leave.date_from);
        console.log(leave.date_to);
        if (leave.category == null || leave.date_from == null || leave.date_to == null || leave.category.length == 0) {
            this.confirmUpdateError = true;
        }
        else {
            this.modalRef.hide();
            this.confirmUpdateError = false;
            if (leave.date_from != null)
                leave.date_from = this.formatDate(leave.date_from);
            if (leave.date_to != null)
                leave.date_to = this.formatDate(leave.date_to);
            this.employeeService.updateLeave(leave)
                .subscribe(function (response) {
                console.log(leave);
                _this.getLeaveData();
                _this.successToast();
            }, function (err) {
                _this.errorToast();
            });
        }
    };
    LeaveInfoComponent.prototype.openDeleteModal = function (template) {
        this.deleteModalRef = this.modalService.show(template);
    };
    // confirmDelete(): void {
    //   this.deleteModalRef.hide();
    // }
    LeaveInfoComponent.prototype.declineDelete = function () {
        this.deleteModalRef.hide();
    };
    LeaveInfoComponent.prototype.checkPendingLeave = function () {
        for (var i = 0; i < this.leaves.length; i++) {
            if (this.leaves[i].approval_status == "pending") {
                this.pendingLeave = true;
                console.log("pending ache!");
                break;
            }
        }
    };
    LeaveInfoComponent.prototype.checkSickLeave = function () {
        for (var i = 0; i < this.leaves.length; i++) {
            if (this.leaves[i].category == "sick" && this.leaves[i].approval_status == "approved") {
                this.sickLeave = true;
                console.log(" ache!");
                break;
            }
        }
    };
    LeaveInfoComponent.prototype.checkEntertainmentLeave = function () {
        for (var i = 0; i < this.leaves.length; i++) {
            if (this.leaves[i].category == "entertainment" && this.leaves[i].approval_status == "approved") {
                this.entertainmentLeave = true;
                console.log(" ache!");
                break;
            }
        }
    };
    LeaveInfoComponent.prototype.checkCasualLeave = function () {
        for (var i = 0; i < this.leaves.length; i++) {
            if (this.leaves[i].category == "casual" && this.leaves[i].approval_status == "approved") {
                this.casualLeave = true;
                console.log(" ache!");
                break;
            }
        }
    };
    LeaveInfoComponent.prototype.formatDate = function (date) {
        var day = date.getDate();
        var monthIndex = date.getMonth() + 1;
        var year = date.getFullYear();
        return day + '/' + monthIndex + '/' + year;
    };
    LeaveInfoComponent.prototype.addToast = function (options) {
        if (options.closeOther) {
            this.toastyService.clearAll();
        }
        this.position = options.position ? options.position : this.position;
        var toastOptions = {
            title: options.title,
            msg: options.msg,
            showClose: options.showClose,
            timeout: options.timeout,
            theme: options.theme,
            onAdd: function (toast) {
                /* added */
            },
            onRemove: function (toast) {
                /* removed */
            }
        };
        switch (options.type) {
            case 'default':
                this.toastyService.default(toastOptions);
                break;
            case 'info':
                this.toastyService.info(toastOptions);
                break;
            case 'success':
                this.toastyService.success(toastOptions);
                break;
            case 'wait':
                this.toastyService.wait(toastOptions);
                break;
            case 'error':
                this.toastyService.error(toastOptions);
                break;
            case 'warning':
                this.toastyService.warning(toastOptions);
                break;
        }
    };
    LeaveInfoComponent.prototype.successToast = function () {
        this.addToast({
            title: 'Success',
            msg: 'Operation successful.',
            timeout: 5000, theme: 'material',
            position: 'bottom',
            type: 'success'
        });
    };
    LeaveInfoComponent.prototype.errorToast = function () {
        this.addToast({
            title: 'Error',
            msg: 'Operation not successful. Check your net connection.',
            timeout: 5000, theme: 'material',
            position: 'bottom',
            type: 'error'
        });
    };
    return LeaveInfoComponent;
}());
LeaveInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-leave-info',
        template: __webpack_require__("../../../../../src/app/employee/employee-detail/leave-info/leave-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/employee/employee-detail/leave-info/leave-info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__employee_service__["a" /* EmployeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__employee_service__["a" /* EmployeeService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["f" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng2_toasty__["b" /* ToastyService */]) === "function" && _f || Object])
], LeaveInfoComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=leave-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/employee/employee-list/employee-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pointer {cursor: pointer;}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employee/employee-list/employee-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- student data table card start -->\r\n<div class=\"card\">\r\n  <div class=\"card-body contact-details\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-8\">\r\n        <div>\r\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"isCollapsed = !isCollapsed\">\r\n            সার্চ ও সর্ট\r\n          </button>\r\n\r\n          <div [collapse]=\"isCollapsed\" class=\"card card-block\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"filter\">নাম</label>\r\n                  <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employeeToBeSearched.name\"/>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"filter\">পদমর্যাদা</label>\r\n                  <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employeeToBeSearched.job_title\"/>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"filter\">ডিপার্টমেন্ট</label>\r\n                  <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employeeToBeSearched.department\"/>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"filter\">আবাসিক স্ট্যাটাস</label>\r\n                  <select class=\"form-control\" [(ngModel)]=\"employeeToBeSearched.campus_residency\">\r\n                    <option>--</option>\r\n                    <option value=\"yes\">Yes</option>\r\n                    <option value=\"no\">No</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"sel1\">\r\n                    <b>কিভাবে সর্ট করতে চান?</b>\r\n                  </label>\r\n                  <select class=\"form-control\" [(ngModel)]=\"employeeToBeSearched.sortBy\">\r\n                    <option value=\"name\">নাম</option>\r\n                    <option value=\"joining_date\">যোগদান তারিখ</option>\r\n                    <option value=\"department\">ডিপার্টমেন্ট</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-success\" (click)=\"searchSortEmployee(employeeToBeSearched)\">\r\n              নিশ্চিত করুন\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"this.role == 'hallOfficer'\" class=\"col-xs-12 col-sm-12 col-md-4\">\r\n        <button class=\"btn btn-success f-right\" (click)=\"openAddEmployeeModal(addEmployee)\">\r\n          <i class=\"icofont icofont-plus\"></i> নতুন কর্মকর্তা/কর্মচারী</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"table-responsive\" style=\"margin-top:30px\">\r\n      <table class=\"table table-striped table-bordered full-data-table\" [mfData]=\"employees | dataFilter : filterQuery\" #mf=\"mfDataTable\"\r\n        [mfRowsOnPage]=\"rowsOnPage\">\r\n        <thead>\r\n          <tr>\r\n            <th>নাম </th>\r\n            <th>যোগদান তারিখ</th>\r\n            <th>পদমর্যাদা</th>\r\n            <th>মোবাইল</th>\r\n            <th>ডিপার্টমেন্ট</th>\r\n            <th>ক্যাম্পাসে অবস্থান স্ট্যাটাস</th>\r\n            <th *ngIf=\"this.role == 'hallOfficer'\">অ্যাকশন</th>\r\n          </tr>\r\n          <tr>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let employee of mf.data; index as i;\">\r\n            <td class=\"pointer normal-link\" [routerLink]=\"['details/', employee.id]\">{{employee.name}}</td>\r\n            <td>{{employee.joining_date}}</td>\r\n            <td>{{employee.job_title}}</td>\r\n            <td>{{employee.contact_number}}</td>\r\n            <td>{{employee.department}}</td>\r\n            <td>{{employee.campus_residency}}</td>\r\n            <td *ngIf=\"this.role == 'hallOfficer'\">\r\n              <a (click)=\"openUpdateEmployeeModal(updateEmployee)\" href=\"javascript:;\" class=\"edit-delete-icon\">\r\n                <i class=\"icofont icofont-edit\"></i>\r\n              </a>&nbsp;&nbsp;\r\n              <ng-template #updateEmployee>\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title pull-left\">তথ্য সংশোধন</h5>\r\n                  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"decline()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">নাম<span style=\"color: red\">*</span></label>\r\n                    <div class=\"col-sm-8\">\r\n                      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employee.name\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">যোগদানের তারিখ</label>\r\n                    <div class=\"col-sm-8\">\r\n                      <input type=\"text\" [maxDate]=\"this.today\" placeholder=\"DD/MM/YYYY\" class=\"form-control\" #dp=\"bsDatepicker\" [bsValue]=\"bsValue\" \r\n                      [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-default' }\"\r\n                        bsDatepicker [(ngModel)]=\"employee.joining_date\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">ঠিকানা</label>\r\n                    <div class=\"col-sm-8\">\r\n                      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employee.address\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">মোবাইল<span style=\"color: red\">*</span></label>\r\n                    <div class=\"col-sm-8\">\r\n                      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employee.contact_number\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">পদমর্যাদা<span style=\"color: red\">*</span></label>\r\n                    <div class=\"col-sm-8\">\r\n                      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employee.job_title\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">ডিপার্টমেন্ট</label>\r\n                    <div class=\"col-sm-8\">\r\n                      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employee.department\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">ক্যাম্পাসের আবাসিক</label>\r\n                    <div class=\"col-sm-8\">\r\n                      <select [(ngModel)]=\"employee.campus_residency\" class=\"form-control\">\r\n                        <option value=\"yes\">হ্যাঁ</option>\r\n                        <option value=\"no\">না</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">অনুষ্ঠানে অংশগ্রহণ</label>\r\n                    <div class=\"col-sm-8\">\r\n                      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employee.event_participation\" />\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"this.confirmUpdateError == true\" class=\"form-group row\" style=\"color: red\">\r\n                    <label class=\"col-sm-12 col-form-label\">*ঠিকমত ফর্ম পূরণ করুন</label>\r\n                  </div>\r\n                  <button type=\"button\" class=\"btn btn-success text-white\" (click)=\"confirmUpdateEmployee(employee)\">নিশ্চিত</button>\r\n                  <button type=\"button\" class=\"btn text-white cancel-button f-right\" (click)=\"decline()\">বাতিল</button>\r\n                </div>\r\n              </ng-template>\r\n              <a (click)=\"openDeleteModal(deleteTemplate)\" href=\"javascript:;\" class=\"edit-delete-icon\">\r\n                <i class=\"icofont icofont-ui-delete\"></i>\r\n              </a>\r\n              <ng-template #deleteTemplate>\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title pull-left\">তথ্য মুছে দিতে ইচ্ছুক?</h5>\r\n                  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"deleteModalRef.hide()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <button type=\"button\" class=\"btn btn-success text-white\" (click)=\"confirmDelete(employee)\">নিশ্চিত</button>\r\n                  <button type=\"button\" class=\"btn text-white cancel-button f-right\" (click)=\"declineDelete()\">বাতিল</button>\r\n                </div>\r\n              </ng-template>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n        <tfoot>\r\n          <tr>\r\n            <td colspan=\"7\">\r\n              <mfBootstrapPaginator class=\"pagination-main f-right\"></mfBootstrapPaginator>\r\n            </td>\r\n          </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<ng-template #addEmployee>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title pull-left\">নতুন কর্মকর্তা/কর্মচারী যুক্ত করুন</h5>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-4 col-form-label\">নাম<span style=\"color: red\">*</span></label>\r\n      <div class=\"col-sm-8\">\r\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employeeToBeAdded.name\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-4 col-form-label\">যোগদানের তারিখ</label>\r\n      <div class=\"col-sm-8\">\r\n        <input type=\"text\" [maxDate]=\"this.today\" placeholder=\"DD/MM/YYYY\" class=\"form-control\" #dp=\"bsDatepicker\" [bsValue]=\"bsValue\" \r\n        [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-default' }\"\r\n          bsDatepicker [(ngModel)]=\"employeeToBeAdded.joining_date\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-4 col-form-label\">ঠিকানা</label>\r\n      <div class=\"col-sm-8\">\r\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employeeToBeAdded.address\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-4 col-form-label\">মোবাইল<span style=\"color: red\">*</span></label>\r\n      <div class=\"col-sm-8\">\r\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employeeToBeAdded.contact_number\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-4 col-form-label\">পদমর্যাদা<span style=\"color: red\">*</span></label>\r\n      <div class=\"col-sm-8\">\r\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employeeToBeAdded.job_title\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-4 col-form-label\">ডিপার্টমেন্ট</label>\r\n      <div class=\"col-sm-8\">\r\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employeeToBeAdded.department\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-4 col-form-label\">ক্যাম্পাসের আবাসিক</label>\r\n      <div class=\"col-sm-8\">\r\n        <select [(ngModel)]=\"employeeToBeAdded.campus_residency\" class=\"form-control\">\r\n          <option value=\"yes\">হ্যাঁ</option>\r\n          <option value=\"no\">না</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-4 col-form-label\">অনুষ্ঠানে অংশগ্রহণ</label>\r\n      <div class=\"col-sm-8\">\r\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employeeToBeAdded.event_participation\" />\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"this.confirmAddError == true\" class=\"form-group row\" style=\"color: red\">\r\n      <label class=\"col-sm-12 col-form-label\">*ঠিকমত ফর্ম পূরণ করুন</label>\r\n    </div>\r\n    <button type=\"button\" class=\"btn btn-success text-white\" (click)=\"confirmAddEmployee()\">নিশ্চিত</button>\r\n    <button type=\"button\" class=\"btn text-white cancel-button f-right\" (click)=\"decline()\">বাতিল</button>\r\n  </div>\r\n</ng-template>\r\n\r\n  <ng2-toasty [position]=\"position\"></ng2-toasty>"

/***/ }),

/***/ "../../../../../src/app/employee/employee-list/employee-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employee_service__ = __webpack_require__("../../../../../src/app/employee/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_Employee__ = __webpack_require__("../../../../../src/models/Employee.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EmployeeListComponent = (function () {
    function EmployeeListComponent(http, modalService, employeeService, router, toastyService) {
        this.http = http;
        this.modalService = modalService;
        this.employeeService = employeeService;
        this.router = router;
        this.toastyService = toastyService;
        this.position = 'bottom';
        this.employeeToBeSearched = new __WEBPACK_IMPORTED_MODULE_4__models_Employee__["a" /* Employee */]();
        //public data: any;
        this.rowsOnPage = 10;
        this.filterQuery = '';
        this.sortBy = '';
        this.sortOrder = 'desc';
        this.isCollapsed = true;
        this.bsValue = new Date();
        this.role = localStorage.getItem('role'); //"hallOfficer"; //admin hallOfficer
        this.employees = [];
        this.employeeToBeAdded = new __WEBPACK_IMPORTED_MODULE_4__models_Employee__["a" /* Employee */]();
        this.confirmAddError = false;
        this.confirmUpdateError = false;
        this.today = new Date();
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("token") == null) {
            this.router.navigate(['/authentication/login']);
            return;
        }
        if ((this.role == "provost" || this.role == "hallOfficer")) {
            this.today = new Date();
            this.getEmployeeData();
        }
        else {
            this.router.navigate(['/dashboard']);
        }
    };
    EmployeeListComponent.prototype.getEmployeeData = function () {
        var _this = this;
        this.employeeService.getEmployeeList()
            .subscribe(function (response) {
            _this.employees = response;
            console.log(_this.employees);
        }, function (err) {
            _this.errorToast('Operation not successful.');
        });
    };
    EmployeeListComponent.prototype.openUpdateEmployeeModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    EmployeeListComponent.prototype.openAddEmployeeModal = function (template) {
        this.employeeToBeAdded = new __WEBPACK_IMPORTED_MODULE_4__models_Employee__["a" /* Employee */]();
        this.modalRef = this.modalService.show(template);
    };
    EmployeeListComponent.prototype.confirmAddEmployee = function () {
        var _this = this;
        console.log(this.employees.length);
        if (this.employeeToBeAdded.name == null || this.employeeToBeAdded.contact_number == null || this.employeeToBeAdded.job_title == null) {
            this.confirmAddError = true;
            this.errorToast('Please Fillup Required Fields');
        }
        else if (this.employeeToBeAdded.contact_number.match(/[a-z]/i)) {
            this.confirmAddError = true;
            this.errorToast('Error in Mobile Number.');
        }
        else {
            this.confirmAddError = false;
            this.modalRef.hide();
            if (this.employeeToBeAdded.joining_date != null) {
                this.employeeToBeAdded.joining_date = this.formatDate(this.employeeToBeAdded.joining_date);
            }
            this.employeeService.addEmployee(this.employeeToBeAdded)
                .subscribe(function (response) {
                _this.successToast();
                _this.employeeToBeAdded = response;
                _this.employees.push(_this.employeeToBeAdded);
                _this.getEmployeeData();
            }, function (err) {
                _this.errorToast('Operation not successful. Check your net connection');
            });
        }
    };
    EmployeeListComponent.prototype.confirmUpdateEmployee = function (employee) {
        var _this = this;
        if (employee.name == null || employee.contact_number == null || employee.job_title == null) {
            this.confirmUpdateError = true;
            this.errorToast("");
            this.errorToast('Please Fillup Required Fields');
            console.log("error");
        }
        if (employee.name.length == 0 || employee.contact_number.length == 0 || employee.job_title.length == 0) {
            this.confirmUpdateError = true;
            this.errorToast('Please Fillup Required Fields');
            console.log("error");
        }
        else if (employee.contact_number.match(/[a-z]/i)) {
            this.confirmUpdateError = true;
            this.errorToast('Error in Mobile Number.');
        }
        else {
            this.confirmUpdateError = false;
            console.log(employee);
            this.modalRef.hide();
            if (employee.joining_date != null) {
                employee.joining_date = this.formatDate(employee.joining_date);
            }
            this.employeeService.updateEmployee(employee)
                .subscribe(function (response) {
                _this.getEmployeeData();
                // console.log(response);
                // console.log(employee);
                _this.successToast();
            }, function (err) {
                _this.errorToast('Operation not successful. Check your net connection');
            });
        }
    };
    // confirm(): void {
    //   console.log('Confirmed!');
    //   this.modalRef.hide();
    // }
    EmployeeListComponent.prototype.decline = function () {
        console.log('Declined!');
        this.modalRef.hide();
        this.getEmployeeData();
    };
    EmployeeListComponent.prototype.openDeleteModal = function (template) {
        this.deleteModalRef = this.modalService.show(template);
    };
    EmployeeListComponent.prototype.confirmDelete = function (employee) {
        var _this = this;
        console.log(employee);
        this.deleteModalRef.hide();
        this.employeeService.deleteEmployee(employee)
            .subscribe(function (response) {
            var index = _this.employees.indexOf(employee);
            _this.employees.splice(index, 1);
            _this.successToast();
        }, function (err) {
            _this.errorToast('Operation not successful.');
        });
    };
    EmployeeListComponent.prototype.declineDelete = function () {
        this.deleteModalRef.hide();
    };
    EmployeeListComponent.prototype.searchSortEmployee = function (employeeToBeSearched) {
        var _this = this;
        this.employeeService.searchSortEmployee(employeeToBeSearched)
            .subscribe(function (response) {
            _this.employees = response;
            _this.successToast();
        }, function (err) {
            _this.errorToast('Operation not successful.');
        });
    };
    EmployeeListComponent.prototype.formatDate = function (date) {
        var day = date.getDate();
        var monthIndex = date.getMonth() + 1;
        var year = date.getFullYear();
        return day + '/' + monthIndex + '/' + year;
    };
    EmployeeListComponent.prototype.addToast = function (options) {
        if (options.closeOther) {
            this.toastyService.clearAll();
        }
        this.position = options.position ? options.position : this.position;
        var toastOptions = {
            title: options.title,
            msg: options.msg,
            showClose: options.showClose,
            timeout: options.timeout,
            theme: options.theme,
            onAdd: function (toast) {
                /* added */
            },
            onRemove: function (toast) {
                /* removed */
            }
        };
        switch (options.type) {
            case 'default':
                this.toastyService.default(toastOptions);
                break;
            case 'info':
                this.toastyService.info(toastOptions);
                break;
            case 'success':
                this.toastyService.success(toastOptions);
                break;
            case 'wait':
                this.toastyService.wait(toastOptions);
                break;
            case 'error':
                this.toastyService.error(toastOptions);
                break;
            case 'warning':
                this.toastyService.warning(toastOptions);
                break;
        }
    };
    EmployeeListComponent.prototype.successToast = function () {
        this.addToast({
            title: 'Success',
            msg: 'Operation successful.',
            timeout: 5000, theme: 'material',
            position: 'bottom',
            type: 'success'
        });
    };
    EmployeeListComponent.prototype.errorToast = function (errorMessage) {
        this.addToast({
            title: 'Error',
            msg: errorMessage,
            timeout: 5000, theme: 'material',
            position: 'bottom',
            type: 'error'
        });
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-employee-list',
        template: __webpack_require__("../../../../../src/app/employee/employee-list/employee-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/employee/employee-list/employee-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__employee_service__["a" /* EmployeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__employee_service__["a" /* EmployeeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["f" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng2_toasty__["b" /* ToastyService */]) === "function" && _e || Object])
], EmployeeListComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=employee-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/employee/employee.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRoutes", function() { return EmployeeRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_list_employee_list_component__ = __webpack_require__("../../../../../src/app/employee/employee-list/employee-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employee_detail_employee_detail_component__ = __webpack_require__("../../../../../src/app/employee/employee-detail/employee-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__employee_detail_basic_info_basic_info_component__ = __webpack_require__("../../../../../src/app/employee/employee-detail/basic-info/basic-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__employee_detail_leave_info_leave_info_component__ = __webpack_require__("../../../../../src/app/employee/employee-detail/leave-info/leave-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_collapse__ = __webpack_require__("../../../../ngx-bootstrap/collapse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_datepicker__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__employee_service__ = __webpack_require__("../../../../../src/app/employee/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var EmployeeRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__employee_list_employee_list_component__["a" /* EmployeeListComponent */],
        data: {
            breadcrumb: 'কর্মকর্তা/কর্মচারী',
            icon: 'icofont icofont-user bg-c-green'
        }
    },
    {
        path: "details/:id",
        component: __WEBPACK_IMPORTED_MODULE_3__employee_detail_employee_detail_component__["a" /* EmployeeDetailComponent */],
        pathMatch: 'full'
    }
];
var EmployeeModule = (function () {
    function EmployeeModule() {
    }
    return EmployeeModule;
}());
EmployeeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* RouterModule */].forChild(EmployeeRoutes),
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_collapse__["a" /* CollapseModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_15_ng2_toasty__["a" /* ToastyModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__employee_service__["a" /* EmployeeService */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__employee_list_employee_list_component__["a" /* EmployeeListComponent */], __WEBPACK_IMPORTED_MODULE_6__employee_detail_leave_info_leave_info_component__["a" /* LeaveInfoComponent */], __WEBPACK_IMPORTED_MODULE_3__employee_detail_employee_detail_component__["a" /* EmployeeDetailComponent */], __WEBPACK_IMPORTED_MODULE_5__employee_detail_basic_info_basic_info_component__["a" /* BasicInfoComponent */]]
    })
], EmployeeModule);

//# sourceMappingURL=employee.module.js.map

/***/ }),

/***/ "../../../../../src/models/Employee.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Employee; });
var Employee = (function () {
    function Employee() {
    }
    return Employee;
}());

//# sourceMappingURL=Employee.js.map

/***/ }),

/***/ "../../../../../src/models/Leave.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Leave; });
var Leave = (function () {
    function Leave() {
    }
    return Leave;
}());

//# sourceMappingURL=Leave.js.map

/***/ })

});
//# sourceMappingURL=employee.module.chunk.js.map