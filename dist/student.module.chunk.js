webpackJsonp(["student.module"],{

/***/ "../../../../../src/app/student/student-detail/comments/comments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student/student-detail/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-7\" *ngIf=\"this.role == 'provost' || this.role == 'houseTutor'\">\r\n        <div class=\"m-t-15\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <p class=\"card-header-text\">ছাত্র সম্পর্কিত মন্তব্য</p>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <ul class=\"media-list\">\r\n                        <li class=\"media\" *ngFor=\"let item of this.comments;\">\r\n                            <div class=\"media-left\">\r\n                                <i class=\"icofont icofont-business-man-alt-1\"></i>\r\n                            </div>\r\n                            <div class=\"media-body\">\r\n                                <h6 class=\"media-heading\">{{item.user_name}}<span class=\"f-12 text-muted m-l-5\">{{item.date}}</span></h6>\r\n                                <p class=\"m-b-0\">{{item.comment}}</p>\r\n                                <!-- <div class=\"m-b-25\">\r\n                            <span><a href=\"javascript:;\" class=\"f-12\">সংশোধন</a> </span>\r\n                        </div> -->\r\n                                <hr>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                    <div class=\"md-float-material d-flex\">\r\n                        <div class=\"md-group-add-on p-relative col-lg-12\">\r\n                            <div class=\"input-group\">\r\n                                <!-- <span class=\"input-group-addon\"><i class=\"icofont icofont-comment\"></i></span> -->\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"মন্তব্য লিখুন\" [(ngModel)]=\"commentObject.comment\"\r\n                                    required>\r\n                                <button class=\"btn btn-danger\" [disabled]=\"!commentObject.comment\" (click)=\"postComment(commentObject)\"><i\r\n                                        class=\"icofont icofont-plus\"></i> নিশ্চিত করুন</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-md-5\">\r\n        <div class=\"m-t-15\">\r\n            <!-- personal card start -->\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <p class=\"card-header-text\">সংশ্লিষ্ট সোসাইটি/সংস্থা</p>\r\n                    <button id=\"edit-btn\" type=\"button\" class=\"btn btn-sm btn-danger waves-effect waves-light f-right\"\r\n                        (click)=openAddClubModal(add)>\r\n                        <i class=\"icofont icofont-plus\"></i> নতুন\r\n                    </button>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-striped table-bordered full-data-table\" [mfData]=\"data | dataFilter : filterQuery\"\r\n                            #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>সোসাইটি/সংস্থা</th>\r\n                                    <th>অ্যাকশন</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let item of clubList; index as i;\">\r\n                                    <td>{{item.club}}</td>\r\n                                    <td>\r\n                                        <a (click)=\"openUpdateClubModal(updateTemplate)\" href=\"javascript:;\" class=\"edit-delete-icon\">\r\n                                            <i class=\"icofont icofont-edit\"></i></a>&nbsp;&nbsp;\r\n                                        <ng-template #updateTemplate>\r\n                                            <div class=\"modal-header\">\r\n                                                <h5 class=\"modal-title pull-left\">তথ্য সংশোধন</h5>\r\n                                                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\"\r\n                                                    (click)=\"modalRef.hide()\">\r\n                                                    <span aria-hidden=\"true\">&times;</span>\r\n                                                </button>\r\n                                            </div>\r\n                                            <div class=\"modal-body\">\r\n                                                <div class=\"form-group row\">\r\n                                                    <label class=\"col-sm-4 col-form-label\">সোসাইটি/সংস্থা্র নাম</label>\r\n                                                    <div class=\"col-sm-8\">\r\n                                                        <input class=\"form-control\" type=\"text\" list=\"categoryList\"\r\n                                                            autocomplete=\"off\" [(ngModel)]=\"item.club\" required />\r\n                                                    </div>\r\n                                                    <div class=\"input-group-btn\">\r\n                                                        <div class=\"btn-group\" role=\"group\">\r\n                                                            <datalist id=\"categoryList\">\r\n                                                                <option *ngFor=\"let item of this.uniqueClubList\" value=\"{{item.club}}\">\r\n                                                            </datalist>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <button type=\"button\" class=\"btn btn-danger text-white\" (click)=\"confirmUpdateClub(item)\">নিশ্চিত</button>\r\n                                                <button type=\"button\" class=\"btn text-white cancel-button f-right\"\r\n                                                    (click)=\"decline()\">বাতিল</button>\r\n                                            </div>\r\n                                        </ng-template>\r\n                                        <a (click)=\"openDeleteModal(deleteTemplate)\" href=\"javascript:;\" class=\"edit-delete-icon\">\r\n                                            <i class=\"icofont icofont-ui-delete\"></i></a>\r\n                                        <ng-template #deleteTemplate>\r\n                                            <div class=\"modal-header\">\r\n                                                <h5 class=\"modal-title pull-left\">তথ্য মুছে দিতে ইচ্ছুক?</h5>\r\n                                                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\"\r\n                                                    (click)=\"deleteModalRef.hide()\">\r\n                                                    <span aria-hidden=\"true\">&times;</span>\r\n                                                </button>\r\n                                            </div>\r\n                                            <div class=\"modal-body\">\r\n                                                <button type=\"button\" class=\"btn btn-danger text-white\" (click)=\"confirmDeleteClub(item)\">নিশ্চিত</button>\r\n                                                <button type=\"button\" class=\"btn text-white cancel-button f-right\"\r\n                                                    (click)=\"declineDelete()\">বাতিল</button>\r\n                                            </div>\r\n                                        </ng-template>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"10\">\r\n                                        <mfBootstrapPaginator class=\"pagination-main f-right\"></mfBootstrapPaginator>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #add>\r\n    <div class=\"modal-header\">\r\n        <h5 class=\"modal-title pull-left\">নতুন সংশ্লিষ্ট সোসাইটি/সংস্থা যুক্ত করুন</h5>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-sm-4 col-form-label\">সোসাইটি/সংস্থা্র নাম<span style=\"color: red\">*</span></label>\r\n            <div class=\"col-sm-8\">\r\n                <input class=\"form-control\" type=\"text\" list=\"categoryList\" autocomplete=\"off\" [(ngModel)]=\"clubToBeAdded.club\"\r\n                    required />\r\n            </div>\r\n            <div class=\"input-group-btn\">\r\n                <div class=\"btn-group\" role=\"group\">\r\n                    <datalist id=\"categoryList\">\r\n                        <option *ngFor=\"let item of this.uniqueClubList.clubs\" value=\"{{item}}\">\r\n                    </datalist>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-danger text-white\" [disabled]=\"!clubToBeAdded.club\" (click)=\"confirmAddClub()\">নিশ্চিত</button>\r\n        <button type=\"button\" class=\"btn text-white cancel-button f-right\" (click)=\"decline()\">বাতিল</button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/student/student-detail/comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Student__ = __webpack_require__("../../../../../src/models/Student.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_service__ = __webpack_require__("../../../../../src/app/student/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_Remark__ = __webpack_require__("../../../../../src/models/Remark.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_StudentClub__ = __webpack_require__("../../../../../src/models/StudentClub.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CommentsComponent = (function () {
    function CommentsComponent(route, studentService, router, toastyService, modalService) {
        this.route = route;
        this.studentService = studentService;
        this.router = router;
        this.toastyService = toastyService;
        this.modalService = modalService;
        this.position = 'bottom';
        this.userName = localStorage.getItem('name');
        this.userID = localStorage.getItem('id');
        this.today = this.formatDate(new Date());
        this.role = localStorage.getItem('role');
        this.student = new __WEBPACK_IMPORTED_MODULE_2__models_Student__["a" /* Student */]();
        this.commentObject = new __WEBPACK_IMPORTED_MODULE_6__models_Remark__["a" /* Remark */]();
        this.comments = [];
        this.clubList = [];
    }
    CommentsComponent.prototype.ngOnInit = function () {
        if ((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer")) {
            this.getStudentData();
            this.getUserData();
            this.getComments();
            this.getUniqueClubData();
            this.getClubData();
        }
        else {
            this.router.navigate(['/dashboard']);
        }
    };
    CommentsComponent.prototype.getUserData = function () {
        var _this = this;
        this.studentService.getProfile()
            .subscribe(function (response) {
            console.log(response);
            _this.userData = response;
        }, function (error) {
            _this.errorToast();
        });
    };
    CommentsComponent.prototype.getComments = function () {
        var _this = this;
        var studentReg = this.route.snapshot.paramMap.get('id');
        this.studentService.getCommentList(studentReg)
            .subscribe(function (response) {
            console.log(response);
            _this.comments = response;
        }, function (error) {
            _this.errorToast();
        });
    };
    CommentsComponent.prototype.getUsername = function (userID) {
        var _this = this;
        this.studentService.getUserById(userID)
            .subscribe(function (response) {
            console.log(response.name);
        }, function (err) {
            _this.errorToast();
        });
    };
    CommentsComponent.prototype.getStudentData = function () {
        var _this = this;
        var studentReg = this.route.snapshot.paramMap.get('id');
        this.studentService.getStudentByReg(studentReg)
            .subscribe(function (response) {
            _this.student = response;
        }, function (error) {
            _this.errorToast();
        });
    };
    CommentsComponent.prototype.postComment = function (comment) {
        var _this = this;
        comment.registrationNumber = this.student.registrationNumber;
        comment.date = this.today;
        comment.user = this.userID;
        console.log(comment);
        this.studentService.addComment(comment)
            .subscribe(function (response) {
            _this.commentObject.comment = "";
            _this.successToast();
            _this.getComments();
        }, function (error) {
            _this.errorToast();
        });
    };
    CommentsComponent.prototype.formatDate = function (date) {
        var day = date.getDate();
        var monthIndex = date.getMonth() + 1;
        var year = date.getFullYear();
        return day + '/' + monthIndex + '/' + year;
    };
    CommentsComponent.prototype.confirmUpdateStudent = function () {
        var _this = this;
        this.studentService.updateStudent(this.student)
            .subscribe(function (response) {
            _this.getStudentData();
            _this.successToast();
        }, function (error) {
            _this.errorToast();
        });
    };
    CommentsComponent.prototype.getClubData = function () {
        var _this = this;
        var studentReg = this.route.snapshot.paramMap.get('id');
        this.studentService.getClubData(studentReg)
            .subscribe(function (response) {
            console.log(response);
            _this.clubList = response;
        }, function (error) {
            _this.errorToast();
        });
    };
    CommentsComponent.prototype.getUniqueClubData = function () {
        var _this = this;
        this.studentService.getUniqueClubList()
            .subscribe(function (response) {
            console.log(response);
            _this.uniqueClubList = response;
        }, function (error) {
            _this.errorToast();
        });
    };
    CommentsComponent.prototype.confirmAddClub = function () {
        var _this = this;
        this.modalRef.hide();
        var studentReg = this.route.snapshot.paramMap.get('id');
        this.clubToBeAdded.registrationNumber = studentReg;
        this.studentService.addClub(this.clubToBeAdded)
            .subscribe(function (response) {
            _this.getClubData();
            _this.getUniqueClubData();
            _this.successToast();
        }, function (error) {
            _this.errorDuplicateClubToast();
        });
    };
    CommentsComponent.prototype.confirmUpdateClub = function (club) {
        var _this = this;
        this.modalRef.hide();
        var studentReg = this.route.snapshot.paramMap.get('id');
        club.registrationNumber = studentReg;
        this.studentService.updateClub(club)
            .subscribe(function (response) {
            _this.getClubData();
            _this.successToast();
        }, function (error) {
            _this.errorToast();
        });
    };
    CommentsComponent.prototype.confirmDeleteClub = function (club) {
        var _this = this;
        this.deleteModalRef.hide();
        this.studentService.deleteClub(club)
            .subscribe(function (response) {
            _this.getClubData();
            _this.successToast();
        }, function (err) {
            _this.errorToast();
        });
    };
    CommentsComponent.prototype.openAddClubModal = function (template) {
        this.clubToBeAdded = new __WEBPACK_IMPORTED_MODULE_7__models_StudentClub__["a" /* StudentClub */]();
        this.modalRef = this.modalService.show(template);
    };
    CommentsComponent.prototype.openUpdateClubModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    CommentsComponent.prototype.openDeleteModal = function (template) {
        this.deleteModalRef = this.modalService.show(template);
    };
    CommentsComponent.prototype.decline = function () {
        console.log('Declined!');
        this.modalRef.hide();
        this.getClubData();
    };
    CommentsComponent.prototype.declineDelete = function () {
        this.deleteModalRef.hide();
    };
    CommentsComponent.prototype.addToast = function (options) {
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
    CommentsComponent.prototype.successToast = function () {
        this.addToast({
            title: 'Success',
            msg: 'Operation successful.',
            timeout: 5000, theme: 'material',
            position: 'bottom',
            type: 'success'
        });
    };
    CommentsComponent.prototype.errorToast = function () {
        this.addToast({
            title: 'Error',
            msg: 'Operation not successful.',
            timeout: 5000, theme: 'material',
            position: 'bottom',
            type: 'error'
        });
    };
    CommentsComponent.prototype.errorDuplicateClubToast = function () {
        this.addToast({
            title: 'Error',
            msg: 'Operation not successful. Same club/society in not allowed',
            timeout: 5000, theme: 'material',
            position: 'bottom',
            type: 'error'
        });
    };
    return CommentsComponent;
}());
CommentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-comments',
        template: __webpack_require__("../../../../../src/app/student/student-detail/comments/comments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/student/student-detail/comments/comments.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__student_service__["a" /* StudentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["b" /* ToastyService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _e || Object])
], CommentsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=comments.component.js.map

/***/ }),

/***/ "../../../../../src/app/student/student-detail/education-info/education-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student/student-detail/education-info/education-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-t-15\">\r\n  <!-- personal card start -->\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <p class=\"card-header-text\">শিক্ষা সম্পর্কিত তথ্যাবলী</p>\r\n      <button *ngIf=\"this.role == 'hallOfficer'\" id=\"edit-btn\" type=\"button\" class=\"btn btn-sm btn-danger waves-effect waves-light f-right\" (click)=\"toggleEditProfile()\">\r\n        তথ্য সংশোধন <i class=\"icofont {{ editProfileIcon }}\"></i>\r\n      </button>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"view-info\" *ngIf=\"editProfile\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <div class=\"general-info\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-12 col-xl-6\">\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table m-0\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <th scope=\"row\">ইউনিট</th>\r\n                          <td>{{this.student.unit}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th scope=\"row\">রেজিস্ট্রেশন নম্বর</th>\r\n                          <td>{{this.student.registrationNumber}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th scope=\"row\">শিক্ষাবর্ষ</th>\r\n                          <td>{{this.student.session}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th scope=\"row\">ক্লাস/বর্ষ</th>\r\n                          <td>{{this.student.class_year_semester}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th scope=\"row\">ক্লাস রোল</th>\r\n                          <td>{{this.student.roll}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th scope=\"row\">ডিপার্টমেন্ট</th>\r\n                          <td>{{this.student.subject_name}}</td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n                <!-- end of table col-lg-6 -->\r\n                <div class=\"col-lg-12 col-xl-6\">\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <th scope=\"row\">অ্যাডমিশন টেস্টের মার্ক</th>\r\n                          <td>{{this.student.admissionExamMarks}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th scope=\"row\">মাধ্যমিক (প্রতিষ্ঠান)</th>\r\n                          <td>{{this.student.sscInstitution}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th scope=\"row\">মাধ্যমিক (জিপিএ)</th>\r\n                          <td>{{this.student.sscGPA}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th scope=\"row\">উচ্চমাধ্যমিক (প্রতিষ্ঠান)</th>\r\n                          <td>{{this.student.hscInstitution}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th scope=\"row\">উচ্চমাধ্যমিক (জিপিএ)</th>\r\n                          <td>{{this.student.hscGPA}}</td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n                <div class=\"card-header\">\r\n                  <p class=\"card-header-text\">ছাত্রের বর্তমান স্ট্যাটাস</p>\r\n                </div>\r\n                <div class=\"col-lg-12 col-xl-12\"> </div>\r\n                <div class=\"col-lg-12 col-xl-6\">\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <th scope=\"row\">বর্তমান/প্রাক্তন</th>\r\n                          <td>{{this.student.alumni=='false'? 'বর্তমান': 'প্রাক্তন'}}</td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <!-- end of view-info -->\r\n      <div class=\"edit-info\" *ngIf=\"!editProfile\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <div class=\"general-info\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-12 col-xl-6\">\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table m-0\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <th scope=\"row\">ইউনিট</th>\r\n                          <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.unit\"/></td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th scope=\"row\">রেজিস্ট্রেশন নম্বর</th>\r\n                          <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.registrationNumber\" readonly/></td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th scope=\"row\">শিক্ষাবর্ষ</th>\r\n                          <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.session\"/></td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th scope=\"row\">ক্লাস/বর্ষ</th>\r\n                          <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.class_year_semester\"/></td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th scope=\"row\">ক্লাস রোল</th>\r\n                          <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.roll\"/></td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th scope=\"row\">ডিপার্টমেন্ট</th>\r\n                          <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.subject_name\"/></td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n                <!-- end of table col-lg-6 -->\r\n                <div class=\"col-lg-12 col-xl-6\">\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <th scope=\"row\">অ্যাডমিশন টেস্টের মার্ক</th>\r\n                          <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.admissionExamMarks\"/></td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th scope=\"row\">মাধ্যমিক (প্রতিষ্ঠান)</th>\r\n                          <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.sscInstitution\"/></td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th scope=\"row\">মাধ্যমিক (জিপিএ)</th>\r\n                          <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.sscGPA\"/></td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th scope=\"row\">উচ্চমাধ্যমিক (প্রতিষ্ঠান)</th>\r\n                          <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.hscInstitution\"/></td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th scope=\"row\">উচ্চমাধ্যমিক (জিপিএ)</th>\r\n                          <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.hscGPA\"/></td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n                <div class=\"card-header\">\r\n                  <p class=\"card-header-text\">ছাত্রের বর্তমান স্ট্যাটাস</p>\r\n                </div>\r\n                <div class=\"col-lg-12 col-xl-12\"> </div>\r\n                <div class=\"col-lg-12 col-xl-6\">\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <th scope=\"row\">বর্তমান/প্রাক্তন</th>\r\n                          <td>\r\n                          <td><select class=\"form-control\" [(ngModel)]=\"student.alumni\">\r\n                              <option value=\"false\">Current</option>\r\n                              <option value=\"true\">Alumni</option>\r\n                            </select>\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-12 col-xl-12\">\r\n                  <div class=\"text-center\">\r\n                    <a href=\"javascript:;\" class=\"btn btn-danger waves-effect waves-light m-r-20\" (click)=\"confirmUpdateStudent()\">নিশ্চিত</a>\r\n                    <a href=\"javascript:;\" id=\"edit-cancel\" class=\"btn residence-button waves-effect\" (click)=\"toggleEditProfile()\">বাতিল</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/student/student-detail/education-info/education-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Student__ = __webpack_require__("../../../../../src/models/Student.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_service__ = __webpack_require__("../../../../../src/app/student/student.service.ts");
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





var EducationInfoComponent = (function () {
    function EducationInfoComponent(route, studentService, router, toastyService) {
        this.route = route;
        this.studentService = studentService;
        this.router = router;
        this.toastyService = toastyService;
        this.editProfile = true;
        this.editProfileIcon = 'icofont-edit';
        this.position = 'bottom';
        this.role = localStorage.getItem('role');
        this.student = new __WEBPACK_IMPORTED_MODULE_2__models_Student__["a" /* Student */]();
    }
    EducationInfoComponent.prototype.ngOnInit = function () {
        if ((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer")) {
            this.getStudentData();
        }
        else {
            this.router.navigate(['/dashboard']);
        }
    };
    EducationInfoComponent.prototype.getStudentData = function () {
        var _this = this;
        var studentReg = this.route.snapshot.paramMap.get('id');
        this.studentService.getStudentByReg(studentReg)
            .subscribe(function (response) {
            _this.student = response;
        }, function (error) {
            _this.errorToast();
        });
    };
    EducationInfoComponent.prototype.confirmUpdateStudent = function () {
        var _this = this;
        this.studentService.updateStudent(this.student)
            .subscribe(function (response) {
            _this.toggleEditProfile();
            _this.getStudentData();
            _this.successToast();
        }, function (error) {
            _this.errorToast();
        });
    };
    EducationInfoComponent.prototype.toggleEditProfile = function () {
        this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
        this.editProfile = !this.editProfile;
    };
    EducationInfoComponent.prototype.addToast = function (options) {
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
    EducationInfoComponent.prototype.successToast = function () {
        this.addToast({
            title: 'Success',
            msg: 'Operation successful.',
            timeout: 5000, theme: 'material',
            position: 'bottom',
            type: 'success'
        });
    };
    EducationInfoComponent.prototype.errorToast = function () {
        this.addToast({
            title: 'Error',
            msg: 'Operation not successful.',
            timeout: 5000, theme: 'material',
            position: 'bottom',
            type: 'error'
        });
    };
    return EducationInfoComponent;
}());
EducationInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-education-info',
        template: __webpack_require__("../../../../../src/app/student/student-detail/education-info/education-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/student/student-detail/education-info/education-info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__student_service__["a" /* StudentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["b" /* ToastyService */]) === "function" && _d || Object])
], EducationInfoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=education-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/student/student-detail/personal-info/personal-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student/student-detail/personal-info/personal-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-t-15\">\r\n  <!-- personal card start -->\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <p class=\"card-header-text\">ব্যক্তিগত তথ্যাবলী</p>\r\n      <button *ngIf=\"this.role == 'hallOfficer'\" id=\"edit-btn\" type=\"button\" class=\"btn btn-sm btn-danger waves-effect waves-light f-right\" (click)=\"toggleEditProfile()\">\r\n        তথ্য সংশোধন <i class=\"icofont {{ editProfileIcon }}\"></i>\r\n      </button>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"view-info\" *ngIf=\"editProfile\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 col-xl-6\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table m-0\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <th scope=\"row\">পূর্ণ নাম</th>\r\n                        <td>{{this.student.name}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">পিতার নাম</th>\r\n                        <td>{{this.student.fathersName}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">মাতার নাম</th>\r\n                        <td>{{this.student.mothersName}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">অভিভাবকের বার্ষিক আয়</th>\r\n                        <td>{{this.student.legal_annual_income}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">জাতীয়তা</th>\r\n                        <td>{{this.student.nationality}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">লিঙ্গ</th>\r\n                        <td>{{this.student.gender}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <!-- end of table col-lg-6 -->\r\n              <div class=\"col-lg-12 col-xl-6\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <th scope=\"row\">জন্মতারিখ</th>\r\n                        <td>{{this.student.dateOfBirth}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">ধর্ম</th>\r\n                        <td>{{this.student.religion}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">NID</th>\r\n                        <td>{{this.student.NID}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">যোগাযোগের ঠিকানা</th>\r\n                        <td>{{this.student.contactAddress}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">স্থায়ী ঠিকানা</th>\r\n                        <td>{{this.student.permanentAddress}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">মোবাইল</th>\r\n                        <td>{{this.student.mobileNumber}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-header\">\r\n                <p class=\"card-header-text\">আইনগত অভিভাবকের তথ্যাবলী</p>\r\n              </div>\r\n              <div class=\"col-lg-12 col-xl-12\">\r\n\r\n              </div>\r\n              <div class=\"col-lg-12 col-xl-6\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <th scope=\"row\">নাম</th>\r\n                        <td>{{this.student.legal_guardian_name}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">ছাত্রের সাথে সম্পর্ক &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                        <td>{{this.student.legal_relation_with_student}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">ঠিকানা</th>\r\n                        <td>{{this.student.legal_address}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-12 col-xl-6\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <th scope=\"row\">মোবাইল</th>\r\n                        <td>{{this.student.legal_mobile_no}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">পেশা</th>\r\n                        <td>{{this.student.legal_profession}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">মাসিক আয় &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                        <td>{{this.student.legal_monthly_income}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-header\">\r\n                <p class=\"card-header-text\">স্থানীয় অভিভাবকের তথ্যাবলী</p>\r\n              </div>\r\n              <div class=\"col-lg-12 col-xl-12\">\r\n\r\n              </div>\r\n              <div class=\"col-lg-12 col-xl-6\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <th scope=\"row\">নাম</th>\r\n                        <td>{{this.student.local_guardian_name}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">ছাত্রের সাথে সম্পর্ক</th>\r\n                        <td>{{this.student.local_relation_with_student}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">ঠিকানা</th>\r\n                        <td>{{this.student.local_address}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-12 col-xl-6\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <th scope=\"row\">মোবাইল</th>\r\n                        <td>{{this.student.local_mobile_no}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">পেশা</th>\r\n                        <td>{{this.student.local_profession}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">মাসিক আয় &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                        <td>{{this.student.local_monthly_income}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <!-- end of view-info -->\r\n      <div class=\"edit-info\" *ngIf=\"!editProfile\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 col-xl-6\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table m-0\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <th scope=\"row\">পূর্ণ নাম</th>\r\n                        <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.name\"/></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">পিতার নাম</th>\r\n                        <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.fathersName\"/></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">মাতার নাম</th>\r\n                        <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.mothersName\"/></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">অভিভাবকের বার্ষিক আয়</th>\r\n                        <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.legal_annual_income\"/></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">জাতীয়তা</th>\r\n                        <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.nationality\"/></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">লিঙ্গ</th>\r\n                        <td><select class=\"form-control\" [(ngModel)]=\"student.gender\">\r\n                          <option value=\"Male\">Male</option>\r\n                          <option value=\"Female\">Female</option>\r\n                        </select></td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <!-- end of table col-lg-6 -->\r\n              <div class=\"col-lg-12 col-xl-6\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <th scope=\"row\">জন্মতারিখ</th>\r\n                        <td><input type=\"text\" placeholder=\"DD/MM/YYYY\" class=\"form-control\" #dp=\"bsDatepicker\" [bsValue]=\"bsValue\"\r\n                          [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-default' }\" bsDatepicker [(ngModel)]=\"student.dateOfBirth\"></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">ধর্ম</th>\r\n                        <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.religion\"/></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">NID</th>\r\n                        <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.NID\"/></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">যোগাযোগের ঠিকানা</th>\r\n                        <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.contactAddress\"/></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">স্থায়ী ঠিকানা</th>\r\n                        <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.permanentAddress\"/></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">মোবাইল</th>\r\n                        <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.mobileNumber\"/></td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-header\">\r\n                <p class=\"card-header-text\">আইনগত অভিভাবকের তথ্যাবলী</p>\r\n              </div>\r\n              <div class=\"col-lg-12 col-xl-12\">\r\n\r\n              </div>\r\n              <div class=\"col-lg-12 col-xl-6\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <th scope=\"row\">নাম</th>\r\n                        <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.legal_guardian_name\"/></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">ছাত্রের সাথে সম্পর্ক &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                        <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.legal_relation_with_student\"/></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">ঠিকানা</th>\r\n                        <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.legal_address\"/></td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-12 col-xl-6\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <th scope=\"row\">মোবাইল</th>\r\n                        <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.legal_mobile_no\"/></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">পেশা</th>\r\n                        <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.legal_profession\"/></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">মাসিক আয় &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                        <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.legal_monthly_income\"/></td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-header\">\r\n                <p class=\"card-header-text\">স্থানীয় অভিভাবকের তথ্যাবলী</p>\r\n              </div>\r\n              <div class=\"col-lg-12 col-xl-12\">\r\n\r\n              </div>\r\n              <div class=\"col-lg-12 col-xl-6\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <th scope=\"row\">নাম</th>\r\n                        <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.local_guardian_name\"/></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">ছাত্রের সাথে সম্পর্ক</th>\r\n                        <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.local_relation_with_student\"/></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">ঠিকানা</th>\r\n                        <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.local_address\"/></td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-12 col-xl-6\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <th scope=\"row\">মোবাইল</th>\r\n                        <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.local_mobile_no\"/></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">পেশা</th>\r\n                        <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.local_profession\"/></td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th scope=\"row\">মাসিক আয় &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                        <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.local_monthly_income\"/></td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-12 col-xl-12\">\r\n                <div class=\"text-center\">\r\n                  <a href=\"javascript:;\" class=\"btn btn-danger waves-effect waves-light m-r-20\" (click)=\"confirmUpdateStudent(student)\">নিশ্চিত</a>\r\n                  <a href=\"javascript:;\" id=\"edit-cancel\" class=\"btn residence-button waves-effect\" (click)=\"toggleEditProfile()\">বাতিল</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/student/student-detail/personal-info/personal-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Student__ = __webpack_require__("../../../../../src/models/Student.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_service__ = __webpack_require__("../../../../../src/app/student/student.service.ts");
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





var PersonalInfoComponent = (function () {
    function PersonalInfoComponent(route, studentService, router, toastyService) {
        this.route = route;
        this.studentService = studentService;
        this.router = router;
        this.toastyService = toastyService;
        this.position = 'bottom';
        this.role = localStorage.getItem('role');
        this.student = new __WEBPACK_IMPORTED_MODULE_2__models_Student__["a" /* Student */]();
        this.editProfile = true;
        this.editProfileIcon = 'icofont-edit';
        this.bsValue = new Date();
    }
    PersonalInfoComponent.prototype.ngOnInit = function () {
        if ((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer")) {
            this.getStudentData();
        }
        else {
            this.router.navigate(['/dashboard']);
        }
    };
    PersonalInfoComponent.prototype.getStudentData = function () {
        var _this = this;
        var studentReg = this.route.snapshot.paramMap.get('id');
        this.studentService.getStudentByReg(studentReg)
            .subscribe(function (response) {
            _this.student = response;
        }, function (error) {
            _this.errorToast();
        });
    };
    PersonalInfoComponent.prototype.confirmUpdateStudent = function () {
        var _this = this;
        if (this.student.dateOfBirth != null) {
            this.student.dateOfBirth = this.formatDate(this.student.dateOfBirth);
        }
        console.log(this.student);
        this.studentService.updateStudent(this.student)
            .subscribe(function (response) {
            _this.toggleEditProfile();
            _this.getStudentData();
            _this.successToast();
        }, function (error) {
            _this.errorToast();
        });
    };
    PersonalInfoComponent.prototype.formatDate = function (date) {
        var day = date.getDate();
        var monthIndex = date.getMonth() + 1;
        var year = date.getFullYear();
        return day + '/' + monthIndex + '/' + year;
    };
    PersonalInfoComponent.prototype.toggleEditProfile = function () {
        this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
        this.editProfile = !this.editProfile;
    };
    PersonalInfoComponent.prototype.addToast = function (options) {
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
    PersonalInfoComponent.prototype.successToast = function () {
        this.addToast({
            title: 'Success',
            msg: 'Operation successful.',
            timeout: 5000, theme: 'material',
            position: 'bottom',
            type: 'success'
        });
    };
    PersonalInfoComponent.prototype.errorToast = function () {
        this.addToast({
            title: 'Error',
            msg: 'Operation not successful.',
            timeout: 5000, theme: 'material',
            position: 'bottom',
            type: 'error'
        });
    };
    return PersonalInfoComponent;
}());
PersonalInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-personal-info',
        template: __webpack_require__("../../../../../src/app/student/student-detail/personal-info/personal-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/student/student-detail/personal-info/personal-info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__student_service__["a" /* StudentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["b" /* ToastyService */]) === "function" && _d || Object])
], PersonalInfoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=personal-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/student/student-detail/residence-info/residence-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student/student-detail/residence-info/residence-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <div class=\"m-t-15\">\r\n            <!-- personal card start -->\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <p class=\"card-header-text\">আবাসিক তথ্যাবলী</p>\r\n                    <button *ngIf=\"this.role == 'hallOfficer'\" id=\"edit-btn\" type=\"button\" class=\"btn btn-sm btn-danger waves-effect waves-light f-right\"\r\n                        (click)=\"toggleEditProfile()\">\r\n                        তথ্য সংশোধন <i class=\"icofont {{ editProfileIcon }}\"></i>\r\n                    </button>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"view-info\" *ngIf=\"editProfile\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-12\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-lg-12 col-xl-12\">\r\n                                        <div class=\"table-responsive\">\r\n                                            <table class=\"table m-0\">\r\n                                                <tbody>\r\n                                                    <tr>\r\n                                                        <th scope=\"row\">আবাসিক স্ট্যাটাস</th>\r\n                                                        <td>{{this.student.residentialStatus}}</td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <th scope=\"row\">হলের কক্ষ নম্বর</th>\r\n                                                        <td *ngIf=\"this.student.room_no!=-1\">{{this.student.room_no}}</td>\r\n                                                        <td *ngIf=\"this.student.room_no==-1\">N/A</td>\r\n                                                    </tr>\r\n                                                    <!-- <tr>\r\n                                                        <th scope=\"row\">সংশ্লিষ্ট সোসাইটি/সংস্থা</th>\r\n                                                        <td>{{this.student.affiliatedSocietiesOrOrganizations}}</td>\r\n                                                    </tr> -->\r\n                                                    <tr>\r\n                                                        <th scope=\"row\">হল অ্যাডমিশন ফি স্ট্যাটাস</th>\r\n                                                        <td *ngIf=\"this.student.admissionFeesStatus=='true'\">Paid</td>\r\n                                                        <td *ngIf=\"this.student.admissionFeesStatus=='false'\">Due</td>\r\n                                                        <!-- <i style=\"color:green\" class=\"icofont icofont-check-circled\"></i> -->\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- end of table col-lg-6 -->\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- end of view-info -->\r\n                    <div class=\"edit-info\" *ngIf=\"!editProfile\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-12\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-lg-12 col-xl-12\">\r\n                                        <div class=\"table-responsive\">\r\n                                            <table class=\"table m-0\">\r\n                                                <tbody>\r\n                                                    <tr>\r\n                                                        <th scope=\"row\">আবাসিক স্ট্যাটাস</th>\r\n                                                        <td><select class=\"form-control\" [(ngModel)]=\"student.residentialStatus\">\r\n                                                                <option value=\"Resident\">Resident</option>\r\n                                                                <option value=\"Doubler\">Doubler</option>\r\n                                                                <option value=\"Non-resident\">Non-resident</option>\r\n                                                            </select></td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <th scope=\"row\">হলের কক্ষ নম্বর</th>\r\n                                                        <td> <select class=\"form-control\" [(ngModel)]=\"student.room_no\">\r\n                                                                <option *ngFor=\"let x of this.rooms\" value=\"{{x.roomNumber}}\">{{x.roomNumber}}</option>\r\n                                                            </select></td>\r\n                                                    </tr>\r\n                                                    <!-- <tr>\r\n                                                        <th scope=\"row\">সংশ্লিষ্ট সোসাইটি/সংস্থা</th>\r\n                                                        <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"student.affiliatedSocietiesOrOrganizations\" /></td>\r\n                                                    </tr> -->\r\n                                                    <tr>\r\n                                                        <th scope=\"row\">হল অ্যাডমিশন ফি স্ট্যাটাস</th>\r\n                                                        <td><select class=\"form-control\" [(ngModel)]=\"student.admissionFeesStatus\">\r\n                                                                <option value=\"false\">Due</option>\r\n                                                                <option value=\"true\">Paid</option>\r\n                                                            </select></td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- end of table col-lg-6 -->\r\n                                    <div class=\"col-lg-12 col-xl-12\">\r\n                                        <div class=\"text-center\">\r\n                                            <a href=\"javascript:;\" class=\"btn btn-danger waves-effect waves-light m-r-20\"\r\n                                                (click)=\"confirmUpdateStudent()\">নিশ্চিত</a>\r\n                                            <a href=\"javascript:;\" id=\"edit-cancel\" class=\"btn residence-button waves-effect\"\r\n                                                (click)=\"toggleEditProfile()\">বাতিল</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"m-t-15\">\r\n            <!-- personal card start -->\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <p class=\"card-header-text\">বছরপ্রতি আবাসিক ফি স্ট্যাটাস</p>\r\n                    <button *ngIf=\"this.role == 'hallOfficer'\" id=\"edit-btn\" type=\"button\" class=\"btn btn-sm btn-danger waves-effect waves-light f-right\"\r\n                        (click)=openAddResidentialStatusModal(add)>\r\n                        <i class=\"icofont icofont-plus\"></i> নতুন বছর\r\n                    </button>\r\n                </div>\r\n                <div class=\"card-body contact-details\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-striped table-bordered full-data-table\" [mfData]=\"residentialList | dataFilter : filterQuery\"\r\n                            #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>বছর</th>\r\n                                    <th>স্ট্যাটাস</th>\r\n                                    <th *ngIf=\"this.role == 'hallOfficer'\">অ্যাকশন</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let item of residentialList; index as i;\">\r\n                                    <td>{{item.year}}</td>\r\n                                    <td>{{item.is_paid}}</td>\r\n                                    <td *ngIf=\"this.role == 'hallOfficer'\">\r\n                                        <a (click)=\"openUpdateResidentialStatusModal(updateTemplate)\" href=\"javascript:;\"\r\n                                            class=\"edit-delete-icon\">\r\n                                            <i class=\"icofont icofont-edit\"></i></a>&nbsp;&nbsp;\r\n                                        <ng-template #updateTemplate>\r\n                                            <div class=\"modal-header\">\r\n                                                <h5 class=\"modal-title pull-left\">তথ্য সংশোধন</h5>\r\n                                                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\"\r\n                                                    (click)=\"modalRef.hide()\">\r\n                                                    <span aria-hidden=\"true\">&times;</span>\r\n                                                </button>\r\n                                            </div>\r\n                                            <div class=\"modal-body\">\r\n                                                <div class=\"form-group row\">\r\n                                                    <label class=\"col-sm-4 col-form-label\">বছর</label>\r\n                                                    <div class=\"col-sm-8\">\r\n                                                        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.year\" readonly/>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"form-group row\">\r\n                                                    <label class=\"col-sm-4 col-form-label\">আবাসিক ফি স্ট্যাটাস</label>\r\n                                                    <div class=\"col-sm-8\">\r\n                                                        <select class=\"form-control\" [(ngModel)]=\"item.is_paid\">\r\n                                                            <option value=\"Paid\">Paid</option>\r\n                                                            <option value=\"Due\">Due</option>\r\n                                                        </select>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <button type=\"button\" class=\"btn btn-danger text-white\" (click)=\"confirmUpdateYear(item)\">নিশ্চিত</button>\r\n                                                <button type=\"button\" class=\"btn text-white cancel-button f-right\"\r\n                                                    (click)=\"decline()\">বাতিল</button>\r\n                                            </div>\r\n                                        </ng-template>\r\n                                        <a (click)=\"openDeleteModal(deleteTemplate)\" href=\"javascript:;\" class=\"edit-delete-icon\">\r\n                                            <i class=\"icofont icofont-ui-delete\"></i></a>\r\n                                        <ng-template #deleteTemplate>\r\n                                            <div class=\"modal-header\">\r\n                                                <h5 class=\"modal-title pull-left\">তথ্য মুছে দিতে ইচ্ছুক?</h5>\r\n                                                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\"\r\n                                                    (click)=\"deleteModalRef.hide()\">\r\n                                                    <span aria-hidden=\"true\">&times;</span>\r\n                                                </button>\r\n                                            </div>\r\n                                            <div class=\"modal-body\">\r\n                                                <button type=\"button\" class=\"btn btn-danger text-white\" (click)=\"confirmResidentialDelete(item)\">নিশ্চিত</button>\r\n                                                <button type=\"button\" class=\"btn text-white cancel-button f-right\"\r\n                                                    (click)=\"declineDelete()\">বাতিল</button>\r\n                                            </div>\r\n                                        </ng-template>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <td colspan=\"10\">\r\n                                        <mfBootstrapPaginator class=\"pagination-main f-right\"></mfBootstrapPaginator>\r\n                                    </td>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #add>\r\n    <div class=\"modal-header\">\r\n        <h5 class=\"modal-title pull-left\">নতুন বছর যুক্ত করুন</h5>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-sm-4 col-form-label\">বছর<span style=\"color: red\">*</span></label>\r\n            <div class=\"col-sm-8\">\r\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"residentialFeeToBeAdded.year\" required />\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <label class=\"col-sm-4 col-form-label\">আবাসিক ফি স্ট্যাটাস<span style=\"color: red\">*</span></label>\r\n            <div class=\"col-sm-8\">\r\n                <select class=\"form-control\" [(ngModel)]=\"residentialFeeToBeAdded.is_paid\">\r\n                    <option value=\"Paid\">Paid</option>\r\n                    <option value=\"Due\">Due</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-danger text-white\" [disabled]=\"!residentialFeeToBeAdded.year && !residentialFeeToBeAdded.is_paid\"\r\n            (click)=\"confirmAddYear()\">নিশ্চিত</button>\r\n        <button type=\"button\" class=\"btn text-white cancel-button f-right\" (click)=\"decline()\">বাতিল</button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/student/student-detail/residence-info/residence-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResidenceInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Student__ = __webpack_require__("../../../../../src/models/Student.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_service__ = __webpack_require__("../../../../../src/app/student/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_ResidentialFee__ = __webpack_require__("../../../../../src/models/ResidentialFee.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ResidenceInfoComponent = (function () {
    function ResidenceInfoComponent(route, studentService, router, toastyService, modalService) {
        this.route = route;
        this.studentService = studentService;
        this.router = router;
        this.toastyService = toastyService;
        this.modalService = modalService;
        this.editProfile = true;
        this.editProfileIcon = 'icofont-edit';
        this.position = 'bottom';
        this.role = localStorage.getItem('role');
        this.student = new __WEBPACK_IMPORTED_MODULE_2__models_Student__["a" /* Student */]();
        this.residentialList = [];
        this.residentialFeeToBeAdded = new __WEBPACK_IMPORTED_MODULE_6__models_ResidentialFee__["a" /* ResidentialFee */]();
    }
    ResidenceInfoComponent.prototype.ngOnInit = function () {
        if ((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer")) {
            this.getStudentData();
            this.getResidenceFeeStatusData();
            this.getRoomData();
        }
        else {
            this.router.navigate(['/dashboard']);
        }
    };
    ResidenceInfoComponent.prototype.getStudentData = function () {
        var _this = this;
        var studentReg = this.route.snapshot.paramMap.get('id');
        this.studentService.getStudentByReg(studentReg)
            .subscribe(function (response) {
            _this.student = response;
        }, function (error) {
            _this.errorToast();
        });
    };
    ResidenceInfoComponent.prototype.getResidenceFeeStatusData = function () {
        var _this = this;
        var studentReg = this.route.snapshot.paramMap.get('id');
        this.studentService.getResidenceFeeStatusData(studentReg)
            .subscribe(function (response) {
            console.log(response);
            _this.residentialList = response;
        }, function (error) {
            _this.errorToast();
        });
    };
    ResidenceInfoComponent.prototype.confirmUpdateStudent = function () {
        var _this = this;
        this.studentService.updateStudent(this.student)
            .subscribe(function (response) {
            _this.toggleEditProfile();
            _this.getStudentData();
            _this.successToast();
        }, function (error) {
            _this.errorToast();
        });
    };
    ResidenceInfoComponent.prototype.confirmUpdateYear = function (residenceFee) {
        var _this = this;
        this.modalRef.hide();
        var studentReg = this.route.snapshot.paramMap.get('id');
        residenceFee.registrationNumber = studentReg;
        this.studentService.updateResidentialFeeStatus(residenceFee)
            .subscribe(function (response) {
            _this.getResidenceFeeStatusData();
            _this.successToast();
        }, function (error) {
            _this.errorToast();
        });
    };
    ResidenceInfoComponent.prototype.confirmAddYear = function () {
        var _this = this;
        this.modalRef.hide();
        var studentReg = this.route.snapshot.paramMap.get('id');
        this.residentialFeeToBeAdded.registrationNumber = studentReg;
        this.studentService.addResidentialFeeStatus(this.residentialFeeToBeAdded)
            .subscribe(function (response) {
            _this.getResidenceFeeStatusData();
            _this.successToast();
        }, function (error) {
            _this.errorDuplicateYearToast();
        });
    };
    ResidenceInfoComponent.prototype.getRoomData = function () {
        var _this = this;
        this.studentService.getRoomList()
            .subscribe(function (response) {
            _this.rooms = response;
            console.log(_this.rooms);
        }, function (err) {
            _this.errorToast();
        });
    };
    ResidenceInfoComponent.prototype.openAddResidentialStatusModal = function (template) {
        this.residentialFeeToBeAdded = new __WEBPACK_IMPORTED_MODULE_6__models_ResidentialFee__["a" /* ResidentialFee */]();
        this.modalRef = this.modalService.show(template);
    };
    ResidenceInfoComponent.prototype.openUpdateResidentialStatusModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    ResidenceInfoComponent.prototype.openDeleteModal = function (template) {
        this.deleteModalRef = this.modalService.show(template);
    };
    ResidenceInfoComponent.prototype.decline = function () {
        console.log('Declined!');
        this.modalRef.hide();
        this.getResidenceFeeStatusData();
    };
    ResidenceInfoComponent.prototype.declineDelete = function () {
        this.deleteModalRef.hide();
    };
    ResidenceInfoComponent.prototype.confirmResidentialDelete = function (residence) {
        var _this = this;
        this.deleteModalRef.hide();
        this.studentService.deleteResidentialFeeStatus(residence)
            .subscribe(function (response) {
            _this.getResidenceFeeStatusData();
            _this.successToast();
        }, function (err) {
            _this.errorToast();
        });
    };
    ResidenceInfoComponent.prototype.toggleEditProfile = function () {
        this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
        this.editProfile = !this.editProfile;
    };
    ResidenceInfoComponent.prototype.addToast = function (options) {
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
    ResidenceInfoComponent.prototype.successToast = function () {
        this.addToast({
            title: 'Success',
            msg: 'Operation successful.',
            timeout: 5000, theme: 'material',
            position: 'bottom',
            type: 'success'
        });
    };
    ResidenceInfoComponent.prototype.errorToast = function () {
        this.addToast({
            title: 'Error',
            msg: 'Operation not successful.',
            timeout: 5000, theme: 'material',
            position: 'bottom',
            type: 'error'
        });
    };
    ResidenceInfoComponent.prototype.errorDuplicateYearToast = function () {
        this.addToast({
            title: 'Error',
            msg: 'Operation not successful. Same year in not allowed',
            timeout: 5000, theme: 'material',
            position: 'bottom',
            type: 'error'
        });
    };
    return ResidenceInfoComponent;
}());
ResidenceInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-residence-info',
        template: __webpack_require__("../../../../../src/app/student/student-detail/residence-info/residence-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/student/student-detail/residence-info/residence-info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__student_service__["a" /* StudentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["b" /* ToastyService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _e || Object])
], ResidenceInfoComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=residence-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/student/student-detail/student-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".normal-link{\r\n    color:red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student/student-detail/student-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page-header start -->\r\n\r\n<div class=\"page-header card\">\r\n  <div class=\"row align-items-end\">\r\n    <div class=\"col-lg-8\">\r\n      <div class=\"page-header-title\">\r\n        <span style=\"padding: 0px; margin: 0px\"><i class=\"icofont icofont-id bg-c-pink\"></i></span>\r\n        <div class=\"d-inline\">\r\n          <span class=\"d-block\">\r\n            <h4>ছাত্রঃ {{this.student.name}}</h4>\r\n          </span>\r\n          <!-- <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"page-header-breadcrumb\">\r\n        <ul class=\"breadcrumb-title\">\r\n          <li class=\"breadcrumb-item\">\r\n            <a routerLink=\"/student\"><i class=\"icofont icofont-arrow-left\"></i>\r\n              ছাত্র তালিকায় ফিরে যান</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Page-header end -->\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12\">\r\n    <div class=\"md-tabs\">\r\n      <ngb-tabset>\r\n        <ngb-tab title=\"ব্যক্তিগত তথ্যাবলী\">\r\n          <ng-template ngbTabContent>\r\n            <app-personal-info></app-personal-info>\r\n          </ng-template>\r\n        </ngb-tab>\r\n\r\n        <ngb-tab title=\"আবাসিক তথ্যাবলী\">\r\n          <ng-template ngbTabContent>\r\n            <app-residence-info></app-residence-info>\r\n          </ng-template>\r\n        </ngb-tab>\r\n\r\n        <ngb-tab title=\"শিক্ষা সম্পর্কিত তথ্যাবলী\">\r\n          <ng-template ngbTabContent>\r\n            <app-education-info></app-education-info>\r\n          </ng-template>\r\n        </ngb-tab>\r\n\r\n        <ngb-tab title=\"মন্তব্য\" *ngIf=\"role == 'provost' || role == 'houseTutor'\">\r\n          <ng-template ngbTabContent>\r\n            <app-comments></app-comments>\r\n          </ng-template>\r\n        </ngb-tab>\r\n      </ngb-tabset>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/student/student-detail/student-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Student__ = __webpack_require__("../../../../../src/models/Student.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_service__ = __webpack_require__("../../../../../src/app/student/student.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentDetailComponent = (function () {
    function StudentDetailComponent(route, studentService, router) {
        this.route = route;
        this.studentService = studentService;
        this.router = router;
        this.role = localStorage.getItem('role');
        this.student = new __WEBPACK_IMPORTED_MODULE_2__models_Student__["a" /* Student */]();
    }
    StudentDetailComponent.prototype.ngOnInit = function () {
        if ((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer")) {
            this.getStudentData();
        }
        else {
            this.router.navigate(['/dashboard']);
        }
    };
    StudentDetailComponent.prototype.getStudentData = function () {
        var _this = this;
        var studentReg = this.route.snapshot.paramMap.get('id');
        this.studentService.getStudentByReg(studentReg)
            .subscribe(function (response) {
            _this.student = response;
            console.log(response);
        });
    };
    return StudentDetailComponent;
}());
StudentDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-student-detail',
        template: __webpack_require__("../../../../../src/app/student/student-detail/student-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/student/student-detail/student-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__student_service__["a" /* StudentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]) === "function" && _c || Object])
], StudentDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=student-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/student/student-list/add-student/add-student.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student/student-list/add-student/add-student.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page-header start -->\r\n<div class=\"page-header card\">\r\n  <div class=\"row align-items-end\">\r\n    <div class=\"col-lg-8\">\r\n      <div class=\"page-header-title\">\r\n        <span style=\"padding: 0px; margin: 0px\"><i class=\"icofont icofont-id bg-c-pink\"></i></span>\r\n        <div class=\"d-inline\">\r\n          <span class=\"d-block\">\r\n            <h4>নতুন ছাত্র</h4>\r\n          </span>\r\n          <!-- <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"page-header-breadcrumb\">\r\n        <ul class=\"breadcrumb-title\">\r\n          <li class=\"breadcrumb-item\">\r\n            <a routerLink=\"/student\"><i class=\"icofont icofont-arrow-left\"></i>\r\n              ছাত্র তালিকায় ফিরে যান</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Page-header end -->\r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"row\">\r\n          <div class=\"card-header\">\r\n            <p class=\"card-header-text\">ব্যক্তিগত তথ্যাবলী</p>\r\n          </div>\r\n          <div class=\"col-lg-12 col-xl-12\"></div>\r\n          <div class=\"col-lg-12 col-xl-6\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table m-0\">\r\n                <tbody>\r\n                  <tr>\r\n                    <th scope=\"row\">পূর্ণ নাম<span style=\"color:red\">*</span>\r\n                    </th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.name\" /></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">রেজিস্ট্রেশন নম্বর<span style=\"color:red\">*</span>\r\n                    </th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.registrationNumber\" /></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">পিতার নাম</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.fathersName\" /></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">মাতার নাম</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.mothersName\" /></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">শিক্ষাবর্ষ</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.session\" /></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">অভিভাবকের বার্ষিক আয়</th>\r\n                    <td><input class=\"form-control\" type=\"number\" [(ngModel)]=\"studentToBeAdded.legal_annual_income\" /></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">জাতীয়তা</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.nationality\" /></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <!-- end of table col-lg-6 -->\r\n          <div class=\"col-lg-12 col-xl-6\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table\">\r\n                <tbody>\r\n                  <tr>\r\n                    <th scope=\"row\">জন্মতারিখ</th>\r\n                    <td><input type=\"text\" [maxDate]=\"this.today\" placeholder=\"DD/MM/YYYY\" class=\"form-control\" #dp=\"bsDatepicker\" [bsValue]=\"bsValue\"\r\n                        [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY', containerClass: 'theme-default' }\" bsDatepicker\r\n                        [(ngModel)]=\"studentToBeAdded.dateOfBirth\"></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">ধর্ম</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.religion\" /></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">NID</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.NID\" /></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">যোগাযোগের ঠিকানা</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.contactAddress\" /></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">স্থায়ী ঠিকানা</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.permanentAddress\" /></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">মোবাইল</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.mobileNumber\" /></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">লিঙ্গ</th>\r\n                    <td><select class=\"form-control\" [(ngModel)]=\"studentToBeAdded.gender\">\r\n                        <option value=\"Male\">Male</option>\r\n                        <option value=\"Female\">Female</option>\r\n                      </select></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-header\">\r\n            <p class=\"card-header-text\">আইনগত অভিভাবকের তথ্যাবলী</p>\r\n          </div>\r\n          <div class=\"col-lg-12 col-xl-12\">\r\n\r\n          </div>\r\n          <div class=\"col-lg-12 col-xl-6\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table\">\r\n                <tbody>\r\n                  <tr>\r\n                    <th scope=\"row\">নাম</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.legal_guardian_name\" /></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">ছাত্রের সাথে সম্পর্ক &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.legal_relation_with_student\" /></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">ঠিকানা</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.legal_address\" /></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-12 col-xl-6\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table\">\r\n                <tbody>\r\n                  <tr>\r\n                    <th scope=\"row\">মোবাইল</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.legal_mobile_no\" /></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">পেশা</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.legal_profession\" /></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">মাসিক আয় &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                    <td><input class=\"form-control\" type=\"number\" [(ngModel)]=\"studentToBeAdded.legal_monthly_income\" /></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-header\">\r\n            <p class=\"card-header-text\">স্থানীয় অভিভাবকের তথ্যাবলী</p>\r\n          </div>\r\n          <div class=\"col-lg-12 col-xl-12\">\r\n\r\n          </div>\r\n          <div class=\"col-lg-12 col-xl-6\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table\">\r\n                <tbody>\r\n                  <tr>\r\n                    <th scope=\"row\">নাম</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.local_guardian_name\" /></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">ছাত্রের সাথে সম্পর্ক</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.local_relation_with_student\" /></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">ঠিকানা</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.local_address\" /></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-12 col-xl-6\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table\">\r\n                <tbody>\r\n                  <tr>\r\n                    <th scope=\"row\">মোবাইল</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.local_mobile_no\" /></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">পেশা</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.local_profession\" /></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">মাসিক আয় &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.local_monthly_income\" /></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-header\">\r\n            <p class=\"card-header-text\">শিক্ষা সম্পর্কিত তথ্যাবলী</p>\r\n          </div>\r\n          <div class=\"col-lg-12 col-xl-12\"></div>\r\n          <div class=\"col-lg-12 col-xl-6\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table m-0\">\r\n                <tbody>\r\n                  <tr>\r\n                    <th scope=\"row\">ইউনিট</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.unit\" /></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">ক্লাস/বর্ষ</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.class_year_semester\" /></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">ক্লাস রোল</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.roll\" /></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">ডিপার্টমেন্ট</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.subject_name\" /></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">অ্যাডমিশন টেস্টের মার্ক</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.admissionExamMarks\" /></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <!-- end of table col-lg-6 -->\r\n          <div class=\"col-lg-12 col-xl-6\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table\">\r\n                <tbody>\r\n                  <tr>\r\n                    <th scope=\"row\">মাধ্যমিক (প্রতিষ্ঠান)</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.sscInstitution\" /></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">মাধ্যমিক (জিপিএ)</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.sscGPA\" /></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">উচ্চমাধ্যমিক (প্রতিষ্ঠান)</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.hscInstitution\" /></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">উচ্চমাধ্যমিক (জিপিএ)</th>\r\n                    <td><input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeAdded.hscGPA\" /></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-header\">\r\n            <p class=\"card-header-text\">ছাত্রের বর্তমান স্ট্যাটাস</p>\r\n          </div>\r\n          <div class=\"col-lg-12 col-xl-12\"> </div>\r\n          <div class=\"col-lg-12 col-xl-12\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table\">\r\n                <tbody>\r\n                  <tr>\r\n                    <th scope=\"row\">বর্তমান/প্রাক্তন</th>\r\n                    <td>\r\n                    <td><select class=\"form-control\" [(ngModel)]=\"studentToBeAdded.alumni\">\r\n                        <option value=\"false\">Current</option>\r\n                        <option value=\"true\">Alumni</option>\r\n                      </select>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-header\">\r\n            <p class=\"card-header-text\">আবাসিক তথ্যাবলী</p>\r\n          </div>\r\n          <div class=\"col-lg-12 col-xl-12\"></div>\r\n          <div class=\"col-lg-12 col-xl-6\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table m-0\">\r\n                <tbody>\r\n                  <tr>\r\n                    <th scope=\"row\">আবাসিক স্ট্যাটাস</th>\r\n                    <td><select class=\"form-control\" [(ngModel)]=\"studentToBeAdded.residentialStatus\">\r\n                        <option value=\"Non-resident\">Non-resident</option>\r\n                        <option value=\"Resident\">Resident</option>\r\n                        <option value=\"Doubler\">Doubler</option>\r\n                      </select></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">হলের কক্ষ নম্বর</th>\r\n                    <td><select class=\"form-control\" [(ngModel)]=\"studentToBeAdded.room_no\">\r\n                        <option *ngFor=\"let x of this.rooms\" value=\"{{x.roomNumber}}\">{{x.roomNumber}}</option>\r\n                    </select></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <!-- end of table col-lg-6 -->\r\n          <div class=\"col-lg-12 col-xl-6\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table\">\r\n                <tbody>\r\n                  <tr>\r\n                    <th scope=\"row\">হল অ্যাডমিশন ফি স্ট্যাটাস</th>\r\n                    <td><select class=\"form-control\" [(ngModel)]=\"studentToBeAdded.admissionFeesStatus\">\r\n                        <option value=\"false\">Due</option>\r\n                        <option value=\"true\">Paid</option>\r\n                      </select></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngIf=\"this.hasError == true\" class=\"form-group row\">\r\n            <label class=\"col-sm-12 col-form-label\" style=\"color:red\">&nbsp;&nbsp;*ঠিকমত ফর্ম পূরণ করুন</label>\r\n          </div>\r\n          <!-- <div class=\"card-header\">\r\n            <p class=\"card-header-text\">বছরপ্রতি আবাসিক ফি স্ট্যাটাস</p>\r\n          </div>\r\n          <div class=\"col-lg-12 col-xl-12\">\r\n          </div>\r\n          <div class=\"col-lg-12 col-xl-12\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table table-striped table-bordered table-hover\">\r\n                <tbody>\r\n                  <tr>\r\n                    <th scope=\"row\">বছর</th>\r\n                    <th scope=\"row\">স্ট্যাটাস</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td scope=\"row\">2015</td>\r\n                    <td scope=\"row\"><select class=\"form-control\">\r\n                        <option>Due</option>\r\n                        <option>Paid</option>\r\n                      </select></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td scope=\"row\">2016</td>\r\n                    <td scope=\"row\"><select class=\"form-control\">\r\n                        <option>Due</option>\r\n                        <option>Paid</option>\r\n                      </select></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td scope=\"row\">2017</td>\r\n                    <td scope=\"row\"><select class=\"form-control\">\r\n                        <option>Due</option>\r\n                        <option>Paid</option>\r\n                      </select></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td scope=\"row\">2018</td>\r\n                    <td scope=\"row\"><select class=\"form-control\">\r\n                        <option>Due</option>\r\n                        <option>Paid</option>\r\n                      </select></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"col-lg-12 col-xl-12\">\r\n            <div class=\"text-center\">\r\n              <a href=\"javascript:;\" class=\"btn btn-danger waves-effect waves-light m-r-20\" (click)=\"addStudent()\">নিশ্চিত</a>\r\n              <a href=\"javascript:;\" id=\"edit-cancel\" class=\"btn residence-button waves-effect\" (click)=\"navigateToList()\">ফিরে\r\n                যান</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng2-toasty [position]=\"position\"></ng2-toasty>"

/***/ }),

/***/ "../../../../../src/app/student/student-list/add-student/add-student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddStudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Student__ = __webpack_require__("../../../../../src/models/Student.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_service__ = __webpack_require__("../../../../../src/app/student/student.service.ts");
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





var AddStudentComponent = (function () {
    function AddStudentComponent(router, studentService, toastyService) {
        this.router = router;
        this.studentService = studentService;
        this.toastyService = toastyService;
        this.alumni = true;
        this.position = 'bottom';
        //role = localStorage.getItem('role');  //"hallOfficer"; //admin hallOfficer
        this.role = "hallOfficer";
        this.students = [];
        this.studentToBeAdded = new __WEBPACK_IMPORTED_MODULE_2__models_Student__["a" /* Student */]();
        this.today = new Date();
        this.hasError = false;
    }
    AddStudentComponent.prototype.ngOnInit = function () {
        this.getRoomData();
        this.today = new Date();
        console.log(this.today);
        this.hasError = false;
        if ((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer")) {
        }
        else {
            this.router.navigate(['/dashboard']);
        }
    };
    AddStudentComponent.prototype.addStudent = function () {
        var _this = this;
        console.log(this.studentToBeAdded);
        if (this.studentToBeAdded.dateOfBirth != null) {
            this.studentToBeAdded.dateOfBirth = this.formatDate(this.studentToBeAdded.dateOfBirth);
        }
        if (this.studentToBeAdded.room_no == null) {
            this.studentToBeAdded.room_no = -1;
        }
        if (this.studentToBeAdded.registrationNumber == null || this.studentToBeAdded.name == null) {
            this.hasError = true;
            this.requiredFillMissingToast();
        }
        else if (this.studentToBeAdded.registrationNumber.match(/[a-z]/i)) {
            this.errorToast('Error in Registration Number.');
        }
        else if (this.studentToBeAdded.mobileNumber != null && this.studentToBeAdded.mobileNumber.match(/[a-z]/i)) {
            this.errorToast('Error in Mobile Number.');
        }
        else if (this.studentToBeAdded.local_annual_income < 0) {
            this.errorToast('Error in Annual Income.');
        }
        else if (this.studentToBeAdded.legal_monthly_income < 0) {
            this.errorToast('Error in Monthly Income.');
        }
        else if (this.studentToBeAdded.sscGPA < 0 || this.studentToBeAdded.sscGPA > 5) {
            this.errorToast('Error in SSC GPA');
        }
        else if (this.studentToBeAdded.hscGPA < 0 || this.studentToBeAdded.hscGPA > 5) {
            this.errorToast('Error in HSC GPA');
        }
        else {
            this.hasError = false;
            this.studentService.addStudent(this.studentToBeAdded)
                .subscribe(function (response) {
                _this.successToast();
                _this.router.navigate(['/student/details/' + _this.studentToBeAdded.registrationNumber]);
            }, function (error) {
                _this.errorToast('Operation not successful.');
            });
        }
    };
    AddStudentComponent.prototype.navigateToList = function () {
        this.router.navigate(['/student']);
    };
    AddStudentComponent.prototype.formatDate = function (date) {
        var day = date.getDate();
        var monthIndex = date.getMonth() + 1;
        var year = date.getFullYear();
        return day + '/' + monthIndex + '/' + year;
    };
    AddStudentComponent.prototype.addToast = function (options) {
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
    AddStudentComponent.prototype.successToast = function () {
        this.addToast({
            title: 'Success',
            msg: 'Operation successful.',
            timeout: 5000, theme: 'material',
            position: 'bottom',
            type: 'success'
        });
        if (this.studentToBeAdded.room_no == -1) {
            this.studentToBeAdded.room_no = null;
        }
    };
    AddStudentComponent.prototype.errorToast = function (errorMessage) {
        this.addToast({
            title: 'Error',
            msg: errorMessage,
            timeout: 5000, theme: 'material',
            position: 'bottom',
            type: 'error'
        });
        if (this.studentToBeAdded.room_no == -1) {
            this.studentToBeAdded.room_no = null;
        }
    };
    AddStudentComponent.prototype.requiredFillMissingToast = function () {
        this.addToast({
            title: 'Error',
            msg: 'Name and registration number must be filled.',
            timeout: 5000, theme: 'material',
            position: 'bottom',
            type: 'error'
        });
        if (this.studentToBeAdded.room_no == -1) {
            this.studentToBeAdded.room_no = null;
        }
    };
    AddStudentComponent.prototype.getRoomData = function () {
        var _this = this;
        this.studentService.getRoomList()
            .subscribe(function (response) {
            _this.rooms = response;
            console.log(_this.rooms);
        }, function (err) {
            _this.errorToast("Error");
        });
    };
    return AddStudentComponent;
}());
AddStudentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-student',
        template: __webpack_require__("../../../../../src/app/student/student-list/add-student/add-student.component.html"),
        styles: [__webpack_require__("../../../../../src/app/student/student-list/add-student/add-student.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__student_service__["a" /* StudentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["b" /* ToastyService */]) === "function" && _c || Object])
], AddStudentComponent);

var _a, _b, _c;
//# sourceMappingURL=add-student.component.js.map

/***/ }),

/***/ "../../../../../src/app/student/student-list/student-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pointer {cursor: pointer;}\r\n\r\n.file-upload {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.file-upload__label {\r\n  padding: 1em 1em;\r\n  color: #fff;\r\n  background: rgb(104, 104, 104);\r\n  border-radius: .2em;\r\n  transition: background .3s;\r\n  cursor: pointer;\r\n}\r\n    \r\n.file-upload__input {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    font-size: 1;\r\n    width:0;\r\n    height: 100%;\r\n    opacity: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student/student-list/student-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- student data table card start -->\r\n<div class=\"card\">\r\n  <div class=\"card-body contact-details\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-10\">\r\n        <div>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"isCollapsed = !isCollapsed\">\r\n            সার্চ ও সর্ট\r\n          </button>\r\n          <!-- <button type=\"button\" class=\"btn btn-danger\" (click)=\"convertToPdf()\">\r\n            <i class=\"icofont icofont-download\"></i> ডাউনলোড\r\n          </button> -->\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"openReportModal(reportTemplate)\">\r\n            রিপোর্ট\r\n          </button>\r\n          <div [collapse]=\"isCollapsed\" class=\"card card-block\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"filter\">নাম</label>\r\n                  <input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeSearched.name\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"filter\">রেজিস্ট্রেশন নম্বর</label>\r\n                  <input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeSearched.registrationNumber\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"filter\">আবাসিক স্ট্যাটাস</label>\r\n                  <select class=\"form-control\" [(ngModel)]=\"studentToBeSearched.residentialStatus\">\r\n                    <option value=\"Non-resident\">Non-resident</option>\r\n                    <option value=\"Resident\">Resident</option>\r\n                    <option value=\"Doubler\">Doubler</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"sel1\">শ্রেণি/বর্ষ</label>\r\n                  <input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeSearched.class_year_semester\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"filter\">সংশ্লিষ্ট সোসাইটি/সংস্থা</label>\r\n                  <select class=\"form-control\" [(ngModel)]=\"studentToBeSearched.club\">\r\n                    <option *ngFor=\"let x of this.uniqueClubList\" value=\"{{x}}\">{{x}}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"filter\">হল অ্যাডমিশন ফি স্ট্যাটাস</label>\r\n                  <select class=\"form-control\" [(ngModel)]=\"studentToBeSearched.admissionFeesStatus\">\r\n                    <option value=\"false\">Due</option>\r\n                    <option value=\"true\">Paid</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"filter\">শিক্ষাবর্ষ</label>\r\n                  <input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeSearched.session\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"filter\">ছাত্রত্ব স্ট্যাটাস</label>\r\n                  <select class=\"form-control\" [(ngModel)]=\"studentToBeSearched.alumni\">\r\n                    <option>--</option>\r\n                    <option value=\"false\">বর্তমান</option>\r\n                    <option value=\"true\">প্রাক্তন</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"filter\">ডিপার্টমেন্ট</label>\r\n                  <input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeSearched.subject_name\" />\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"filter\">আবাসিক ফি স্ট্যাটাস</label>\r\n                  <select class=\"form-control\" [(ngModel)]=\"studentToBeSearched.res_fees\">\r\n                    <option value=\"Due\">Due</option>\r\n                    <option value=\"Paid\">Paid</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"sel1\"><b>কিভাবে সর্ট করতে চান?</b></label>\r\n                  <select class=\"form-control\" [(ngModel)]=\"studentToBeSearched.sort_by\">\r\n                    <option value=\"name\">নাম</option>\r\n                    <option value=\"session\">শিক্ষাবর্ষ</option>\r\n                    <option value=\"registrationNumber\">রেজিস্ট্রেশন নম্বর</option>\r\n                    <option value=\"class_year_semester\">শ্রেণি/বর্ষ</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-danger\" (click)=\"searchSortStudent(studentToBeSearched)\">\r\n              নিশ্চিত করুন\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-12 col-md-2\" *ngIf=\"role == 'hallOfficer'\">\r\n        <div class=\"btn-group\" dropdown>\r\n          <!-- <button id=\"button-basic\" type=\"button\" class=\"btn btn-danger f-right\" [routerLink]=\"['add_student/', 0]\">\r\n            <i class=\"icofont icofont-plus\"></i>\r\n            নতুন ছাত্র\r\n          </button> -->\r\n\r\n          <button id=\"button-basic\" dropdownToggle type=\"button\" class=\"btn btn-danger f-right\" aria-controls=\"dropdown-basic\">\r\n            <i class=\"icofont icofont-plus\"></i>\r\n            নতুন ছাত্র<span class=\"caret\"></span>\r\n          </button>\r\n          <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-basic\">\r\n            <li role=\"menuitem\"><a class=\"dropdown-item\" style=\"color:black\" [routerLink]=\"['add_student/', 0]\">নতুন\r\n                ছাত্রের ফর্ম</a></li>\r\n            <li role=\"menuitem\"><a class=\"dropdown-item pointer\" (click)=\"openFileUploadModal(fileUploadTemplate)\">ফাইল\r\n                আপলোড</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"table-responsive\" style=\"margin-top:30px\">\r\n      <table class=\"table table-striped table-bordered full-data-table\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\"\r\n        [mfRowsOnPage]=\"rowsOnPage\">\r\n        <thead>\r\n          <tr>\r\n            <th>নাম</th>\r\n            <th>রেজিস্ট্রেশন<br />নম্বর</th>\r\n            <th>শিক্ষাবর্ষ</th>\r\n            <th>আবাসিক<br />স্ট্যাটাস</th>\r\n            <th>কক্ষ</th>\r\n            <th>ডিপার্টমেন্ট</th>\r\n            <th>শ্রেণি/বর্ষ</th>\r\n            <th>মোবাইল<br />নম্বর</th>\r\n            <!-- <th>আবাসিক ফি <br />স্ট্যাটাস</th> -->\r\n            <th *ngIf=\"role == 'hallOfficer'\">অ্যাকশন</th>\r\n          </tr>\r\n          <tr>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of mf.data; index as i;\">\r\n            <td class=\"pointer normal-link\" [routerLink]=\"['details/', item.registrationNumber]\">{{item.name}}</td>\r\n            <td>{{item.registrationNumber}}</td>\r\n            <td>{{item.session}}</td>\r\n            <td>{{item.residentialStatus}}</td>\r\n            <td *ngIf=\"item.room_no==-1\">N/A</td>\r\n            <td *ngIf=\"item.room_no!=-1\">{{item.room_no}}</td>\r\n            <!-- <td>{{item.admissionFeesStatus ? 'Paid' : 'Due'}}</td> -->\r\n            <td>{{item.subject_name}}</td>\r\n            <td>{{item.class_year_semester}}</td>\r\n            <td>{{item.mobileNumber}}</td>\r\n            <!-- <td><p *ngFor=\"let i of item.residenceFeeStatusData\">{{i['year']}}: {{i['is_paid']}}</p></td> -->\r\n            <td *ngIf=\"role == 'hallOfficer'\">\r\n              <a (click)=\"openUpdateStudentModal(template)\" href=\"javascript:;\" class=\"edit-delete-icon\">\r\n                <i class=\"icofont icofont-edit\"></i></a>&nbsp;&nbsp;\r\n              <ng-template #template>\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title pull-left\">তথ্য সংশোধন</h5>\r\n                  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"decline()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">নাম</label>\r\n                    <div class=\"col-sm-8\">\r\n                      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.name\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">রেজিস্ট্রেশান নম্বর</label>\r\n                    <div class=\"col-sm-8\">\r\n                      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.registrationNumber\" readonly />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">শিক্ষাবর্ষ</label>\r\n                    <div class=\"col-sm-8\">\r\n                      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.session\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">আবাসিক স্ট্যাটাস</label>\r\n                    <div class=\"col-sm-8\">\r\n                      <select class=\"form-control\" [(ngModel)]=\"item.residentialStatus\">\r\n                        <option value=\"Resident\">Resident</option>\r\n                        <option value=\"Doubler\">Doubler</option>\r\n                        <option value=\"Non-resident\">Non-resident</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\" *ngIf=\"item.residentialStatus!='Non-resident'\">\r\n                    <label class=\"col-sm-4 col-form-label\">হলের কক্ষ নম্বর<span style=\"color:red\">*</span></label>\r\n                    <div class=\"col-sm-8\">\r\n                      <select class=\"form-control\" [(ngModel)]=\"item.room_no\" [required]='true'>\r\n                        <option *ngFor=\"let x of this.rooms\" value=\"{{x.roomNumber}}\">{{x.roomNumber}}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">ডিপার্টমেন্ট</label>\r\n                    <div class=\"col-sm-8\">\r\n                      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.subject_name\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">শ্রেণি/বর্ষ</label>\r\n                    <div class=\"col-sm-8\">\r\n                      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.class_year_semester\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group row\">\r\n                    <label class=\"col-sm-4 col-form-label\">মোবাইল নম্বর</label>\r\n                    <div class=\"col-sm-8\">\r\n                      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"item.mobileNumber\" />\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"this.hasError == true\" class=\"form-group row\">\r\n                    <label class=\"col-sm-12 col-form-label\" style=\"color:red\">&nbsp;&nbsp;*কক্ষ নম্বর পূরণ করুন</label>\r\n                  </div>\r\n                  <button type=\"button\" class=\"btn btn-danger text-white\" (click)=\"confirmUpdateStudent(item)\">নিশ্চিত</button>\r\n                  <button type=\"button\" class=\"btn text-white cancel-button f-right\" (click)=\"decline()\">বাতিল</button>\r\n                </div>\r\n              </ng-template>\r\n              <a (click)=\"openDeleteModal(deleteTemplate)\" href=\"javascript:;\" class=\"edit-delete-icon\">\r\n                <i class=\"icofont icofont-ui-delete\"></i></a>\r\n              <ng-template #deleteTemplate>\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title pull-left\">তথ্য মুছে দিতে ইচ্ছুক?</h5>\r\n                  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"deleteModalRef.hide()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <button type=\"button\" class=\"btn btn-danger text-white\" (click)=\"confirmDelete(item)\">নিশ্চিত</button>\r\n                  <button type=\"button\" class=\"btn text-white cancel-button f-right\" (click)=\"declineDelete()\">বাতিল</button>\r\n                </div>\r\n              </ng-template>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n        <tfoot>\r\n          <tr>\r\n            <td colspan=\"10\">\r\n              <mfBootstrapPaginator class=\"pagination-main f-right\"></mfBootstrapPaginator>\r\n            </td>\r\n          </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<ng2-toasty [position]=\"position\"></ng2-toasty>\r\n<ng-template #fileUploadTemplate>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title pull-left\">ফাইল আপলোড</h5>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"fileUploadModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <!-- <div class=\"modal-body\">\r\n    <div class=\"text-center\">\r\n      <label for=\"upload\" class=\"file-upload__label\">ফাইল নির্ধারণ করুন</label> (ফরম্যাটঃ .xlsx)\r\n      <input id=\"upload\" class=\"file-upload__input\" type=\"file\" name=\"file-upload\" ng2FileSelect [uploader]=\"uploader\">\r\n    </div>\r\n    <table class=\"table\">\r\n      <thead>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of uploader.queue\">\r\n          <td><strong>{{ item?.file?.name }}</strong></td>\r\n          <td class=\"text-center\">\r\n            <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\r\n            <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\r\n            <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\r\n          </td>\r\n          <td>\r\n            <button type=\"button\" class=\"btn btn-success btn-xs\" (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\r\n              <span class=\"glyphicon glyphicon-upload\"></span> আপলোড\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"item.remove()\">\r\n              <span class=\"glyphicon glyphicon-trash\"></span> ডিলিট\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div> -->\r\n\r\n  <div class=\"modal-body\">\r\n    <div class=\"text-center\">\r\n      <label for=\"upload\" class=\"file-upload__label\">ফাইল নির্ধারণ করুন</label> (ফরম্যাটঃ .xlsx)\r\n      <input id=\"upload\" class=\"file-upload__input\" type=\"file\" (change)=\"fileChange($event)\" accept=\".xls, .xlsx,.csv\">\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<button *ngIf=\"role == 'provost'\" type=\"button\" class=\"btn btn-xs\" style=\"background-color:brown; color:white\" (click)=\"getCleanUpData()\">\r\n  <span class=\"glyphicon glyphicon-upload\"></span> পুরাতন তথ্য মুছে দিন\r\n</button>\r\n\r\n\r\n<ng-template #reportTemplate>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title pull-left\">রিপোর্ট</h5>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"reportModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"modal-body\">\r\n    <div class=\"row\" style=\"overflow-y: scroll;height:450px;\">\r\n      <div class=\"col-md-6\">\r\n        <div>\r\n          <p><b>রিপোর্ট এ কোন কোন তথ্য দেখাতে চান?</b></p>\r\n          <input type=\"checkbox\" name=\"name\" [value]=\"name\" checked disabled> ছাত্রের নাম<br />\r\n          <input type=\"checkbox\" name=\"registrationNumber\" value=\"registrationNumber\" checked disabled> রেজিস্ট্রেশান\r\n          নম্বর<br />\r\n          <input type=\"checkbox\" (change)=\"change($event, session)\" [(ngModel)]=\"session\" value=\"session\"> শিক্ষাবর্ষ<br />\r\n          <input type=\"checkbox\" (change)=\"change($event, fathersName)\" [(ngModel)]=\"fathersName\" value=\"fathersName\">\r\n          পিতার নাম<br />\r\n          <input type=\"checkbox\" (change)=\"change($event, mothersName)\" [(ngModel)]=\"mothersName\" value=\"mothersName\">\r\n          মাতার নাম<br />\r\n          <input type=\"checkbox\" (change)=\"change($event, mobileNumber)\" [(ngModel)]=\"mobileNumber\" value=\"mobileNumber\">\r\n          মোবাইল নম্বর<br />\r\n          <input type=\"checkbox\" (change)=\"change($event, contactAddress)\" [(ngModel)]=\"contactAddress\" value=\"contactAddress\">\r\n          যোগাযোগের ঠিকানা<br />\r\n          <input type=\"checkbox\" (change)=\"change($event, permanentAddress)\" [(ngModel)]=\"permanentAddress\" value=\"permanentAddress\">\r\n          স্থায়ী ঠিকানা<br />\r\n          <input type=\"checkbox\" (change)=\"change($event, nationality)\" [(ngModel)]=\"nationality\" value=\"nationality\">\r\n          জাতীয়তা<br />\r\n          <input type=\"checkbox\" (change)=\"change($event, dateOfBirth)\" [(ngModel)]=\"dateOfBirth\" value=\"dateOfBirth\">\r\n          জন্ম তারিখ<br />\r\n          <input type=\"checkbox\" (change)=\"change($event, religion)\" [(ngModel)]=\"religion\" value=\"religion\"> ধর্ম<br />\r\n          <input type=\"checkbox\" (change)=\"change($event, gender)\" [(ngModel)]=\"gender\" value=\"gender\"> লিঙ্গ<br />\r\n          <input type=\"checkbox\" (change)=\"change($event, legal_guardian_name)\" [(ngModel)]=\"legal_guardian_name\" value=\"legal_guardian_name\">\r\n          আইনগত অভিভাবকের নাম<br />\r\n          <input type=\"checkbox\" (change)=\"change($event, legal_mobile_no)\" [(ngModel)]=\"legal_mobile_no\" value=\"legal_mobile_no\">\r\n          আইনগত অভিভাবকের মোবাইল<br />\r\n          <input type=\"checkbox\" (change)=\"change($event, local_guardian_name)\" [(ngModel)]=\"local_guardian_name\" value=\"local_guardian_name\">\r\n          স্থানীয় অভিভাবকের নাম<br />\r\n          <input type=\"checkbox\" (change)=\"change($event, local_mobile_no)\" [(ngModel)]=\"local_mobile_no\" value=\"local_mobile_no\">\r\n          স্থানীয় অভিভাবকের মোবাইল<br />\r\n          <input type=\"checkbox\" (change)=\"change($event, admissionExamMarks)\" [(ngModel)]=\"admissionExamMarks\" value=\"admissionExamMarks\">\r\n          অ্যাডমিশন মার্ক<br />\r\n          <input type=\"checkbox\" (change)=\"change($event, NID)\" [(ngModel)]=\"NID\" value=\"NID\"> NID<br /><br />\r\n          <p>আবাসিক তথ্য</p>\r\n          <input type=\"checkbox\" (change)=\"change($event, residentialStatus)\" [(ngModel)]=\"residentialStatus\" value=\"residentialStatus\">\r\n          আবাসিক স্ট্যাটাস<br />\r\n          <input type=\"checkbox\" (change)=\"change($event, admissionFeesStatus)\" [(ngModel)]=\"admissionFeesStatus\" value=\"admissionFeesStatus\">\r\n          অ্যাডমিশন ফি স্ট্যাটাস<br />\r\n          <!-- <input type=\"checkbox\" (change)=\"change($event, residenceFeeStatusData)\" [(ngModel)]=\"residenceFeeStatusData\" value=\"residenceFeeStatusData\">\r\n          আবাসিক ফি স্ট্যাটাস<br /> -->\r\n          <input type=\"checkbox\" (change)=\"change($event, alumni)\" [(ngModel)]=\"alumni\" value=\"alumni\"> ছাত্রের\r\n          স্ট্যাটাস<br />\r\n          <input type=\"checkbox\" (change)=\"change($event, room_no)\" [(ngModel)]=\"room_no\" value=\"room_no\"> কক্ষ নম্বর<br /><br />\r\n          <p>শিক্ষা সম্পর্কিত তথ্য</p>\r\n          <input type=\"checkbox\" (change)=\"change($event, subject_name)\" [(ngModel)]=\"subject_name\" value=\"subject_name\">\r\n          ডিপার্টমেন্ট<br />\r\n          <input type=\"checkbox\" (change)=\"change($event, class_year_semester)\" [(ngModel)]=\"class_year_semester\" value=\"class_year_semester\">\r\n          শ্রেণি/বর্ষ<br />\r\n          <input type=\"checkbox\" (change)=\"change($event, roll)\" [(ngModel)]=\"roll\" value=\"roll\"> রোল<br />\r\n          <input type=\"checkbox\" (change)=\"change($event, cgpa)\" [(ngModel)]=\"cgpa\" value=\"cgpa\"> সিজিপিএ<br />\r\n          <input type=\"checkbox\" (change)=\"change($event, unit)\" [(ngModel)]=\"unit\" value=\"unit\"> ইউনিট<br />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <p><b>রিপোর্ট কিভাবে ফিল্টার করতে চান?</b></p>\r\n        <div class=\"form-group\">\r\n          <label for=\"filter\">আবাসিক স্ট্যাটাস</label>\r\n          <select class=\"form-control\" [(ngModel)]=\"studentToBeFiltered.residentialStatus\">\r\n            <option value=\"Non-resident\">Non-resident</option>\r\n            <option value=\"Resident\">Resident</option>\r\n            <option value=\"Doubler\">Doubler</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"sel1\">শ্রেণি/বর্ষ</label>\r\n          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeFiltered.class_year_semester\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"filter\">শিক্ষাবর্ষ</label>\r\n          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeFiltered.session\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"filter\">সংশ্লিষ্ট সোসাইটি/সংস্থা</label>\r\n          <select class=\"form-control\" [(ngModel)]=\"studentToBeFiltered.club\">\r\n            <option *ngFor=\"let x of this.uniqueClubList\" value=\"{{x}}\">{{x}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"filter\">ছাত্রত্ব স্ট্যাটাস</label>\r\n          <select class=\"form-control\" [(ngModel)]=\"studentToBeFiltered.alumni\">\r\n            <option value=\"false\">বর্তমান</option>\r\n            <option value=\"true\">প্রাক্তন</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"filter\">ডিপার্টমেন্ট</label>\r\n          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"studentToBeFiltered.subject_name\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"filter\">হল অ্যাডমিশন ফি স্ট্যাটাস</label>\r\n          <select class=\"form-control\" [(ngModel)]=\"studentToBeFiltered.admissionFeesStatus\">\r\n            <option value=\"false\">Due</option>\r\n            <option value=\"true\">Paid</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"filter\">আবাসিক ফি স্ট্যাটাস</label>\r\n          <select class=\"form-control\" [(ngModel)]=\"studentToBeFiltered.res_fees\">\r\n            <option value=\"Due\">Due</option>\r\n            <option value=\"Paid\">Paid</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"sel1\"><b>কিভাবে সর্ট করতে চান?</b></label>\r\n          <select class=\"form-control\" [(ngModel)]=\"studentToBeFiltered.sort_by\">\r\n            <option value=\"name\">নাম</option>\r\n            <option value=\"session\">শিক্ষাবর্ষ</option>\r\n            <option value=\"registrationNumber\">রেজিস্ট্রেশন নম্বর</option>\r\n            <option value=\"class_year_semester\">শ্রেণি/বর্ষ</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button type=\"button\" class=\"btn btn-danger text-white\" (click)=\"downloadCSV(studentToBeFiltered)\"><i class=\"icofont icofont-download\"></i>\r\n      ডাউনলোড</button>\r\n    <button type=\"button\" class=\"btn text-white cancel-button f-right\" (click)=\"reportModalRef.hide()\">বাতিল</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- <form method=\"POST\" action=\"10.100.106.17:5000/api/upload\" enctype=\"multipart/form-data\">\r\n  <input type=\"file\" name=\"pic\" accept=\".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\">\r\n  <button type=\"submit\">submit</button>\r\n</form> -->"

/***/ }),

/***/ "../../../../../src/app/student/student-list/student-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_service__ = __webpack_require__("../../../../../src/app/student/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_Server__ = __webpack_require__("../../../../../src/utils/Server.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_Student__ = __webpack_require__("../../../../../src/models/Student.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular5_csv_Angular5_csv__ = __webpack_require__("../../../../angular5-csv/Angular5-csv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular5_csv_Angular5_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular5_csv_Angular5_csv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var URL = __WEBPACK_IMPORTED_MODULE_5__utils_Server__["a" /* Server */].API_ENDPOINT + 'excel';
var StudentListComponent = (function () {
    function StudentListComponent(http, modalService, studentService, toastyService, router) {
        this.http = http;
        this.modalService = modalService;
        this.studentService = studentService;
        this.toastyService = toastyService;
        this.router = router;
        this.position = 'bottom';
        this.role = localStorage.getItem('role'); //"hallOfficer"; //admin hallOfficer
        //role = "hallOfficer";
        this.studentToBeSearched = new __WEBPACK_IMPORTED_MODULE_6__models_Student__["a" /* Student */]();
        this.studentToBeFiltered = new __WEBPACK_IMPORTED_MODULE_6__models_Student__["a" /* Student */]();
        this.rowsOnPage = 10;
        this.filterQuery = '';
        this.sortBy = '';
        this.sortOrder = 'desc';
        this.isCollapsed = true;
        this.selectedValue = ['name', 'registrationNumber'];
        this.bsValue = new Date();
        this.today = new Date();
        this.options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            headers: this.selectedValue
        };
    }
    StudentListComponent.prototype.ngOnInit = function () {
        this.today = new Date();
        if ((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer")) {
            this.getStudentList();
            this.getUniqueClubData();
            this.getRoomData();
        }
        else {
            this.router.navigate(['/dashboard']);
        }
    };
    StudentListComponent.prototype.getUniqueClubData = function () {
        var _this = this;
        this.studentService.getUniqueClubList()
            .subscribe(function (response) {
            _this.uniqueClubList = response['clubs'];
            console.log(_this.uniqueClubList);
        }, function (error) {
            _this.errorToast();
        });
    };
    StudentListComponent.prototype.getResidenceFeeStatusData = function (studentReg) {
        var _this = this;
        this.studentService.getResidenceFeeStatusData(studentReg)
            .subscribe(function (response) {
            console.log(response);
            _this.residentialList = response;
        }, function (error) {
            _this.errorToast();
        });
    };
    StudentListComponent.prototype.getRoomData = function () {
        var _this = this;
        this.studentService.getRoomList()
            .subscribe(function (response) {
            _this.rooms = response;
            console.log(_this.rooms);
        }, function (err) {
            _this.errorToast();
        });
    };
    StudentListComponent.prototype.downloadCSV = function (item) {
        var _this = this;
        var filteredStudent;
        this.studentService.searchSortStudent(item)
            .subscribe(function (response) {
            _this.successToast();
            filteredStudent = response;
            // let i = 0;
            // filteredStudent.forEach(stu=> {
            //   this.studentService.getResidenceFeeStatusData(stu.registrationNumber)
            //   .subscribe((response) => {
            //     filteredStudent[i]['residenceFeeStatusData']  = response
            //     i = i + 1;
            //   }, error => {
            //   });
            // });
            var filteredData = new Array();
            filteredStudent.forEach(function (std) {
                var temp = {};
                _this.selectedValue.forEach(function (val) {
                    // if(val == 'residenceFeeStatusData')
                    // {
                    //   let tempStr = "";
                    //   console.log(std[0].residenceFeeStatusData);
                    //   for(let i =0;i<std[val].length; i++){
                    //     tempStr += std[val][i]['year'] + ": " + std[val][i]['is_paid'] + ";";
                    //   }
                    //   temp[val] = tempStr;
                    // }
                    // else{
                    temp[val] = std[val];
                });
                filteredData.push(temp);
            });
            //console.log(filteredData);
            new __WEBPACK_IMPORTED_MODULE_7_angular5_csv_Angular5_csv__["Angular5Csv"](filteredData, "student_report_" + _this.today, _this.options);
        }, function (error) {
            _this.errorToast();
        });
    };
    StudentListComponent.prototype.confirmDelete = function (student) {
        var _this = this;
        console.log(student);
        this.deleteModalRef.hide();
        this.studentService.deleteStudent(student)
            .subscribe(function (response) {
            _this.successToast();
            var index = _this.data.indexOf(student);
            _this.data.splice(index, 1);
        }, function (error) {
            _this.errorToast();
        });
    };
    StudentListComponent.prototype.getCleanUpData = function () {
        var _this = this;
        this.studentService.getCleanUpData()
            .subscribe(function (response) {
            _this.getStudentList();
            console.log(response);
            _this.alumniStudent = response;
            var doc = new jsPDF();
            var col = ["Name", "Reg. No.", "Session", "Status", "Room", "Department", "Class/Year", "Mobile"];
            var rows = [];
            for (var key in _this.alumniStudent) {
                var temp = [_this.alumniStudent[key]['name'], _this.alumniStudent[key]['registrationNumber'], _this.alumniStudent[key]['session'], _this.alumniStudent[key]['residentialStatus'], _this.alumniStudent[key]['room'], _this.alumniStudent[key]['subject_name'], _this.alumniStudent[key]['class_year_semester'], _this.alumniStudent[key]['mobileNumber']];
                rows.push(temp);
            }
            doc.autoTable(col, rows);
            doc.save('alumni_student_list.pdf');
        }, function (error) {
            _this.errorViewToast();
        });
    };
    StudentListComponent.prototype.getStudentList = function () {
        var _this = this;
        this.studentService.getStudentList()
            .subscribe(function (response) {
            _this.data = response;
            // let i = 0;
            // this.data.forEach(stu=> {
            //   this.studentService.getResidenceFeeStatusData(stu.registrationNumber)
            //   .subscribe((response) => {
            //     this.data[i]['residenceFeeStatusData']  = response
            //     i = i + 1;
            //     console.log(this.data)
            //   }, error => {
            //   });
            // })
            // this.residentialList = this.getResidenceFeeStatusData(this.data.)
        }, function (error) {
            _this.errorViewToast();
        });
    };
    StudentListComponent.prototype.confirmUpdateStudent = function (student) {
        var _this = this;
        if (student.room_no == 0) {
            student.room_no = -1;
        }
        if (student.residentialStatus == 'Non-resident') {
            student.room_no = -1;
        }
        if (student.residentialStatus != 'Non-resident' && student.room_no == -1) {
            this.hasError = true;
        }
        else {
            this.modalRef.hide();
            this.studentService.updateStudent(student)
                .subscribe(function (response) {
                _this.successToast();
                _this.getStudentList();
            }, function (error) {
                _this.errorToast();
            });
        }
    };
    StudentListComponent.prototype.openModal = function (template, type) {
        this.modalRef = this.modalService.show(template);
        if (type == "add")
            this.modalHeader = "";
        else
            this.modalHeader = "তথ্য সংশোধন";
    };
    StudentListComponent.prototype.openUpdateStudentModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    StudentListComponent.prototype.openFileUploadModal = function (template) {
        this.fileUploadModalRef = this.modalService.show(template);
    };
    StudentListComponent.prototype.openReportModal = function (template) {
        this.reportModalRef = this.modalService.show(template);
    };
    StudentListComponent.prototype.change = function (e, type) {
        if (type) {
            this.selectedValue.push(e.target.defaultValue);
        }
        else {
            var index = this.selectedValue.indexOf(e.target.defaultValue);
            this.selectedValue.splice(index, 1);
        }
    };
    StudentListComponent.prototype.confirm = function () {
        console.log('Confirmed!');
        this.modalRef.hide();
    };
    StudentListComponent.prototype.decline = function () {
        console.log('Declined!');
        this.modalRef.hide();
        this.getStudentList();
    };
    StudentListComponent.prototype.openDeleteModal = function (template) {
        this.deleteModalRef = this.modalService.show(template);
    };
    StudentListComponent.prototype.declineDelete = function () {
        this.deleteModalRef.hide();
    };
    StudentListComponent.prototype.searchSortStudent = function (student) {
        var _this = this;
        this.studentService.searchSortStudent(student)
            .subscribe(function (response) {
            _this.successToast();
            _this.data = response;
        }, function (error) {
            _this.errorToast();
        });
    };
    StudentListComponent.prototype.addToast = function (options) {
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
    StudentListComponent.prototype.successToast = function () {
        this.addToast({
            title: 'Success',
            msg: 'Operation successful.',
            timeout: 5000, theme: 'material',
            position: 'bottom',
            type: 'success'
        });
    };
    StudentListComponent.prototype.errorToast = function () {
        this.addToast({
            title: 'Error',
            msg: 'Operation not successful.',
            timeout: 5000, theme: 'material',
            position: 'bottom',
            type: 'error'
        });
    };
    StudentListComponent.prototype.errorFileToast = function (title) {
        this.addToast({
            title: 'Error',
            msg: title,
            timeout: 5000, theme: 'material',
            position: 'bottom',
            type: 'error'
        });
    };
    StudentListComponent.prototype.errorViewToast = function () {
        this.addToast({
            title: 'Error',
            msg: 'Check Internet Connection.',
            timeout: 5000, theme: 'material',
            position: 'bottom',
            type: 'error'
        });
    };
    StudentListComponent.prototype.convertToPdf = function () {
        var doc = new jsPDF();
        var col = ["Name", "Reg. No.", "Session", "Status", "Room", "Department", "Class/Year", "Mobile"];
        var rows = [];
        for (var key in this.data) {
            if (this.data[key]['room_no'] == 0) {
                this.data[key]['room_no'] = null;
            }
            var temp = [this.data[key]['name'], this.data[key]['registrationNumber'], this.data[key]['session'], this.data[key]['residentialStatus'], this.data[key]['room_no'], this.data[key]['subject_name'], this.data[key]['class_year_semester'], this.data[key]['mobileNumber']];
            rows.push(temp);
        }
        doc.autoTable(col, rows);
        doc.save('student_list.pdf');
    };
    StudentListComponent.prototype.fileChange = function (event) {
        var _this = this;
        var tempData = new FormData();
        this.fileUploadModalRef.hide();
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            console.log(file);
            //tempData.append("name", 'mou');
            var temp = {};
            temp['excel'] = file;
            tempData.append('excel', file);
            console.log(tempData.get('excel'));
            this.studentService.uploadFile(tempData)
                .subscribe(function (response) {
                console.log(response);
                if (response['status'] == 'done') {
                    _this.successToast();
                    _this.getStudentList();
                }
                // else this.errorFileToast(response['message']);
            }, function (error) {
                var errorMessage = JSON.parse(error.error);
                // console.log(errorMessage['message'])
                _this.errorFileToast(errorMessage['message']);
            });
        }
    };
    return StudentListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], StudentListComponent.prototype, "fileInput", void 0);
StudentListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-student-list',
        template: __webpack_require__("../../../../../src/app/student/student-list/student-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/student/student-list/student-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__student_service__["a" /* StudentService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["b" /* ToastyService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["f" /* Router */]) === "function" && _f || Object])
], StudentListComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=student-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/student/student.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentRoutes", function() { return StudentRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentModule", function() { return StudentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_list_student_list_component__ = __webpack_require__("../../../../../src/app/student/student-list/student-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_detail_student_detail_component__ = __webpack_require__("../../../../../src/app/student/student-detail/student-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student_detail_education_info_education_info_component__ = __webpack_require__("../../../../../src/app/student/student-detail/education-info/education-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_detail_personal_info_personal_info_component__ = __webpack_require__("../../../../../src/app/student/student-detail/personal-info/personal-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__student_detail_residence_info_residence_info_component__ = __webpack_require__("../../../../../src/app/student/student-detail/residence-info/residence-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__student_detail_comments_comments_component__ = __webpack_require__("../../../../../src/app/student/student-detail/comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_collapse__ = __webpack_require__("../../../../ngx-bootstrap/collapse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_datepicker__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__student_list_add_student_add_student_component__ = __webpack_require__("../../../../../src/app/student/student-list/add-student/add-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__student_service__ = __webpack_require__("../../../../../src/app/student/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var StudentRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__student_list_student_list_component__["a" /* StudentListComponent */],
        data: {
            breadcrumb: 'বর্তমান ছাত্র',
            icon: 'icofont icofont-id bg-c-pink'
        }
    },
    {
        path: "details/:id",
        component: __WEBPACK_IMPORTED_MODULE_3__student_detail_student_detail_component__["a" /* StudentDetailComponent */],
        pathMatch: 'full',
    },
    {
        path: "add_student/:id",
        component: __WEBPACK_IMPORTED_MODULE_16__student_list_add_student_add_student_component__["a" /* AddStudentComponent */],
        pathMatch: 'full',
    }
];
var StudentModule = (function () {
    function StudentModule() {
    }
    return StudentModule;
}());
StudentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["g" /* RouterModule */].forChild(StudentRoutes),
            __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_collapse__["a" /* CollapseModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_18_ng2_toasty__["a" /* ToastyModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_19_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__student_service__["a" /* StudentService */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__student_list_student_list_component__["a" /* StudentListComponent */],
            __WEBPACK_IMPORTED_MODULE_3__student_detail_student_detail_component__["a" /* StudentDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_4__student_detail_education_info_education_info_component__["a" /* EducationInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_5__student_detail_personal_info_personal_info_component__["a" /* PersonalInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_6__student_detail_residence_info_residence_info_component__["a" /* ResidenceInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_16__student_list_add_student_add_student_component__["a" /* AddStudentComponent */],
            __WEBPACK_IMPORTED_MODULE_7__student_detail_comments_comments_component__["a" /* CommentsComponent */]
        ]
    })
], StudentModule);

//# sourceMappingURL=student.module.js.map

/***/ }),

/***/ "../../../../../src/models/Remark.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Remark; });
var Remark = (function () {
    function Remark() {
    }
    return Remark;
}());

//# sourceMappingURL=Remark.js.map

/***/ }),

/***/ "../../../../../src/models/ResidentialFee.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResidentialFee; });
var ResidentialFee = (function () {
    function ResidentialFee() {
    }
    return ResidentialFee;
}());

//# sourceMappingURL=ResidentialFee.js.map

/***/ }),

/***/ "../../../../../src/models/Student.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Student; });
var Student = (function () {
    function Student() {
    }
    return Student;
}());

//# sourceMappingURL=Student.js.map

/***/ }),

/***/ "../../../../../src/models/StudentClub.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentClub; });
var StudentClub = (function () {
    function StudentClub() {
    }
    return StudentClub;
}());

//# sourceMappingURL=StudentClub.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/dropdown/bs-dropdown-container.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.state.js");


var BsDropdownContainerComponent = (function () {
    function BsDropdownContainerComponent(_state, cd, _renderer, _element) {
        var _this = this;
        this._state = _state;
        this.cd = cd;
        this._renderer = _renderer;
        this.isOpen = false;
        this._subscription = _state.isOpenChange.subscribe(function (value) {
            _this.isOpen = value;
            var dropdown = _element.nativeElement.querySelector('.dropdown-menu');
            if (dropdown) {
                _this._renderer.setElementClass(dropdown, 'show', true);
                if (dropdown.classList.contains('dropdown-menu-right')) {
                    _this._renderer.setElementStyle(dropdown, 'left', 'auto');
                    _this._renderer.setElementStyle(dropdown, 'right', '0');
                }
                if (_this.direction === 'up') {
                    _this._renderer.setElementStyle(dropdown, 'top', 'auto');
                    _this._renderer.setElementStyle(dropdown, 'transform', 'translateY(-101%)');
                }
            }
            _this.cd.markForCheck();
            _this.cd.detectChanges();
        });
    }
    Object.defineProperty(BsDropdownContainerComponent.prototype, "direction", {
        get: function () {
            return this._state.direction;
        },
        enumerable: true,
        configurable: true
    });
    BsDropdownContainerComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    BsDropdownContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-dropdown-container',
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        style: 'display:block;position: absolute;'
                    },
                    template: "\n    <div [class.dropup]=\"direction === 'up'\"\n         [class.dropdown]=\"direction === 'down'\"\n         [class.show]=\"isOpen\"\n         [class.open]=\"isOpen\"><ng-content></ng-content></div>\n  "
                },] },
    ];
    /** @nocollapse */
    BsDropdownContainerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__["a" /* BsDropdownState */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    return BsDropdownContainerComponent;
}());

//# sourceMappingURL=bs-dropdown-container.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/dropdown/bs-dropdown-menu.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownMenuDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.state.js");


var BsDropdownMenuDirective = (function () {
    function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
    BsDropdownMenuDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[bsDropdownMenu],[dropdownMenu]',
                    exportAs: 'bs-dropdown-menu'
                },] },
    ];
    /** @nocollapse */
    BsDropdownMenuDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__["a" /* BsDropdownState */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
    ]; };
    return BsDropdownMenuDirective;
}());

//# sourceMappingURL=bs-dropdown-menu.directive.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/dropdown/bs-dropdown-toggle.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownToggleDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.state.js");


var BsDropdownToggleDirective = (function () {
    function BsDropdownToggleDirective(_state, _element) {
        var _this = this;
        this._state = _state;
        this._element = _element;
        this.isDisabled = null;
        this._subscriptions = [];
        // sync is open value with state
        this._subscriptions.push(this._state
            .isOpenChange.subscribe(function (value) { return _this.isOpen = value; }));
        // populate disabled state
        this._subscriptions.push(this._state
            .isDisabledChange
            .subscribe(function (value) { return _this.isDisabled = value || null; }));
    }
    BsDropdownToggleDirective.prototype.onClick = function () {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit();
    };
    BsDropdownToggleDirective.prototype.onDocumentClick = function (event) {
        if (this._state.autoClose && event.button !== 2 &&
            !this._element.nativeElement.contains(event.target)) {
            this._state.toggleClick.emit(false);
        }
    };
    BsDropdownToggleDirective.prototype.onEsc = function () {
        if (this._state.autoClose) {
            this._state.toggleClick.emit(false);
        }
    };
    BsDropdownToggleDirective.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    BsDropdownToggleDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[bsDropdownToggle],[dropdownToggle]',
                    exportAs: 'bs-dropdown-toggle',
                    host: {
                        '[attr.aria-haspopup]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    BsDropdownToggleDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__["a" /* BsDropdownState */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    BsDropdownToggleDirective.propDecorators = {
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.disabled',] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.aria-expanded',] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
        'onDocumentClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['document:click', ['$event'],] },],
        'onEsc': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keyup.esc',] },],
    };
    return BsDropdownToggleDirective;
}());

//# sourceMappingURL=bs-dropdown-toggle.directive.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/dropdown/bs-dropdown.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

/** Default dropdown configuration */
var BsDropdownConfig = (function () {
    function BsDropdownConfig() {
        /** default dropdown auto closing behavior */
        this.autoClose = true;
    }
    BsDropdownConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BsDropdownConfig.ctorParameters = function () { return []; };
    return BsDropdownConfig;
}());

//# sourceMappingURL=bs-dropdown.config.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/dropdown/bs-dropdown.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_loader__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_config__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_container_component__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_state__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.state.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_ng2_bootstrap_config__ = __webpack_require__("../../../../ngx-bootstrap/utils/ng2-bootstrap-config.js");







var BsDropdownDirective = (function () {
    function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._config = _config;
        this._state = _state;
        // todo: move to component loader
        this._isInlineOpen = false;
        this._subscriptions = [];
        this._isInited = false;
        // create dropdown component loader
        this._dropdown = this._cis
            .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_state__["a" /* BsDropdownState */], useValue: this._state });
        this.onShown = this._dropdown.onShown;
        this.onHidden = this._dropdown.onHidden;
        this.isOpenChange = this._state.isOpenChange;
        // set initial dropdown state from config
        this._state.autoClose = this._config.autoClose;
    }
    Object.defineProperty(BsDropdownDirective.prototype, "autoClose", {
        get: function () {
            return this._state.autoClose;
        },
        /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         */
        set: function (value) {
            if (typeof value === 'boolean') {
                this._state.autoClose = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
        get: function () { return this._isDisabled; },
        /**
         * Disables dropdown toggle and hides dropdown menu if opened
         */
        set: function (value) {
            this._isDisabled = value;
            this._state.isDisabledChange.emit(value);
            if (value) {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: function () {
            if (this._showInline) {
                return this._isInlineOpen;
            }
            return this._dropdown.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
        get: function () {
            return !Object(__WEBPACK_IMPORTED_MODULE_6__utils_ng2_bootstrap_config__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "_showInline", {
        get: function () {
            return !this.container;
        },
        enumerable: true,
        configurable: true
    });
    ;
    BsDropdownDirective.prototype.ngOnInit = function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        // attach DOM listeners
        this._dropdown.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state
            .toggleClick.subscribe(function (value) { return _this.toggle(value); }));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state
            .isDisabledChange
            .filter(function (value) { return value === true; })
            .subscribe(function (value) { return _this.hide(); }));
    };
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen || this.isDisabled) {
            return;
        }
        if (this._showInline) {
            if (!this._inlinedMenu) {
                this._state.dropdownMenu
                    .then(function (dropdownMenu) {
                    _this._dropdown.attachInline(dropdownMenu.viewContainer, dropdownMenu.templateRef);
                    _this._inlinedMenu = _this._dropdown._inlineViewRef;
                    _this.addBs4Polyfills();
                });
            }
            this.addBs4Polyfills();
            this._isInlineOpen = true;
            this.onShown.emit(true);
            this._state.isOpenChange.emit(true);
            return;
        }
        this._state.dropdownMenu
            .then(function (dropdownMenu) {
            // check direction in which dropdown should be opened
            var _dropup = _this.dropup === true ||
                (typeof _this.dropup !== 'undefined' && _this.dropup !== false);
            _this._state.direction = _dropup ? 'up' : 'down';
            var _placement = _this.placement ||
                (_dropup ? 'top left' : 'bottom left');
            // show dropdown
            _this._dropdown
                .attach(__WEBPACK_IMPORTED_MODULE_4__bs_dropdown_container_component__["a" /* BsDropdownContainerComponent */])
                .to(_this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement
            });
            _this._state.isOpenChange.emit(true);
        });
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.hide = function () {
        if (!this.isOpen) {
            return;
        }
        if (this._showInline) {
            this.removeShowClass();
            this._isInlineOpen = false;
            this.onHidden.emit(true);
        }
        else {
            this._dropdown.hide();
        }
        this._state.isOpenChange.emit(false);
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.toggle = function (value) {
        if (this.isOpen || value === false) {
            return this.hide();
        }
        return this.show();
    };
    BsDropdownDirective.prototype.ngOnDestroy = function () {
        // clean up subscriptions and destroy dropdown
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
        this._dropdown.dispose();
    };
    BsDropdownDirective.prototype.addBs4Polyfills = function () {
        if (!Object(__WEBPACK_IMPORTED_MODULE_6__utils_ng2_bootstrap_config__["a" /* isBs3 */])()) {
            this.addShowClass();
            this.checkRightAlignment();
            this.checkDropup();
        }
    };
    BsDropdownDirective.prototype.addShowClass = function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.setElementClass(this._inlinedMenu.rootNodes[0], 'show', true);
        }
    };
    BsDropdownDirective.prototype.removeShowClass = function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.setElementClass(this._inlinedMenu.rootNodes[0], 'show', false);
        }
    };
    BsDropdownDirective.prototype.checkRightAlignment = function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            var isRightAligned = this._inlinedMenu.rootNodes[0].classList.contains('dropdown-menu-right');
            this._renderer.setElementStyle(this._inlinedMenu.rootNodes[0], 'left', isRightAligned ? 'auto' : '0');
            this._renderer.setElementStyle(this._inlinedMenu.rootNodes[0], 'right', isRightAligned ? '0' : 'auto');
        }
    };
    BsDropdownDirective.prototype.checkDropup = function () {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            // a little hack to not break support of bootstrap 4 beta
            var top_1 = getComputedStyle(this._inlinedMenu.rootNodes[0])['top'];
            var topAuto = top_1 === 'auto' || top_1 === '100%';
            this._renderer.setElementStyle(this._inlinedMenu.rootNodes[0], 'top', this.dropup ? 'auto' : '100%');
            this._renderer.setElementStyle(this._inlinedMenu.rootNodes[0], 'transform', this.dropup && !topAuto ? 'translateY(-101%)' : 'translateY(0)');
        }
    };
    BsDropdownDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[bsDropdown],[dropdown]',
                    exportAs: 'bs-dropdown',
                    providers: [__WEBPACK_IMPORTED_MODULE_5__bs_dropdown_state__["a" /* BsDropdownState */]],
                    host: {
                        '[class.dropup]': 'dropup',
                        '[class.open]': 'isOpen',
                        '[class.show]': 'isOpen && isBs4'
                    }
                },] },
    ];
    /** @nocollapse */
    BsDropdownDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_2__component_loader__["a" /* ComponentLoaderFactory */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_config__["a" /* BsDropdownConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_state__["a" /* BsDropdownState */], },
    ]; };
    BsDropdownDirective.propDecorators = {
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dropup': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'autoClose': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isOpenChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return BsDropdownDirective;
}());

//# sourceMappingURL=bs-dropdown.directive.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/dropdown/bs-dropdown.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__positioning__ = __webpack_require__("../../../../ngx-bootstrap/positioning/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_container_component__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_menu_directive__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown-menu.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_toggle_directive__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown-toggle.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bs_dropdown_config__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bs_dropdown_directive__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bs_dropdown_state__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.state.js");









var BsDropdownModule = (function () {
    function BsDropdownModule() {
    }
    BsDropdownModule.forRoot = function (config) {
        return {
            ngModule: BsDropdownModule, providers: [
                __WEBPACK_IMPORTED_MODULE_1__component_loader__["a" /* ComponentLoaderFactory */],
                __WEBPACK_IMPORTED_MODULE_2__positioning__["a" /* PositioningService */],
                __WEBPACK_IMPORTED_MODULE_8__bs_dropdown_state__["a" /* BsDropdownState */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__bs_dropdown_config__["a" /* BsDropdownConfig */], useValue: config ? config : { autoClose: true } }
            ]
        };
    };
    ;
    BsDropdownModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_menu_directive__["a" /* BsDropdownMenuDirective */],
                        __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_toggle_directive__["a" /* BsDropdownToggleDirective */],
                        __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_container_component__["a" /* BsDropdownContainerComponent */],
                        __WEBPACK_IMPORTED_MODULE_7__bs_dropdown_directive__["a" /* BsDropdownDirective */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_menu_directive__["a" /* BsDropdownMenuDirective */],
                        __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_toggle_directive__["a" /* BsDropdownToggleDirective */],
                        __WEBPACK_IMPORTED_MODULE_7__bs_dropdown_directive__["a" /* BsDropdownDirective */]
                    ],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_3__bs_dropdown_container_component__["a" /* BsDropdownContainerComponent */]]
                },] },
    ];
    /** @nocollapse */
    BsDropdownModule.ctorParameters = function () { return []; };
    return BsDropdownModule;
}());

//# sourceMappingURL=bs-dropdown.module.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/dropdown/bs-dropdown.state.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var BsDropdownState = (function () {
    function BsDropdownState() {
        var _this = this;
        this.direction = 'down';
        this.isOpenChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isDisabledChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toggleClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dropdownMenu = new Promise(function (resolve) {
            _this.resolveDropdownMenu = resolve;
        });
    }
    BsDropdownState.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BsDropdownState.ctorParameters = function () { return []; };
    return BsDropdownState;
}());

//# sourceMappingURL=bs-dropdown.state.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/dropdown/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bs_dropdown_directive__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.directive.js");
/* unused harmony reexport BsDropdownDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_menu_directive__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown-menu.directive.js");
/* unused harmony reexport BsDropdownMenuDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bs_dropdown_toggle_directive__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown-toggle.directive.js");
/* unused harmony reexport BsDropdownToggleDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_container_component__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown-container.component.js");
/* unused harmony reexport BsDropdownContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_state__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.state.js");
/* unused harmony reexport BsDropdownState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_config__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.config.js");
/* unused harmony reexport BsDropdownConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bs_dropdown_module__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__bs_dropdown_module__["a"]; });







//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=student.module.chunk.js.map