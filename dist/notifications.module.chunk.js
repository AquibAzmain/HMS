webpackJsonp(["notifications.module"],{

/***/ "../../../../../src/app/notifications/notification-list/notification-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notifications/notification-list/notification-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-body\" *ngFor=\"let notification of this.notifications;\">\r\n    <div *ngIf=\"notification.type==='text'\" class=\"card b-l-success business-info services\">\r\n      <div class=\"card-body\">\r\n        <h5>{{notification.title}}</h5> \r\n        <p>{{notification.text}}</p>\r\n        <button type=\"button\" class=\"btn bg-c-purple text-white\" (click)=\"seenNotification(notification)\">ঠিক আছে</button>\r\n        <!-- <button type=\"button\" class=\"btn text-white cancel-button\">বাতিল</button> -->\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"notification.type==='password'\" class=\"card b-l-success business-info services\">\r\n      <div class=\"card-body\">\r\n        <h5>{{notification.title}}</h5>\r\n        <p>{{notification.text}}</p>\r\n        <button type=\"button\" class=\"btn bg-c-purple text-white\" (click)=\"acceptNotification(notification)\">নিশ্চিত</button>\r\n        <button type=\"button\" class=\"btn text-white cancel-button\" (click)=\"rejectNotification(notification)\">বাতিল</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"notification.type==='leave'\" class=\"card b-l-success business-info services\">\r\n      <div class=\"card-body\">\r\n        <h5>{{notification.title}}</h5>\r\n        <p>{{notification.text}}</p>\r\n        <button type=\"button\" class=\"btn bg-c-purple text-white\" (click)=\"acceptNotification(notification)\">নিশ্চিত</button>\r\n        <button type=\"button\" class=\"btn text-white cancel-button\" (click)=\"rejectNotification(notification)\">বাতিল</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/notifications/notification-list/notification-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notification_service__ = __webpack_require__("../../../../../src/app/notifications/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationListComponent = (function () {
    function NotificationListComponent(notificationService) {
        this.notificationService = notificationService;
        this.notifications = [];
    }
    NotificationListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notificationService.getNotification()
            .subscribe(function (response) {
            console.log(response);
            _this.notifications = response;
        }, function (err) {
            console.log(err);
        });
        // let notification: Notification = new Notification();
        // notification.text = "Approve account?";
        // notification.type = 'decision';
        // this.notifications.push(notification);
        // let notification2: Notification = new Notification();
        // notification2.text = "room 23 is overflow";
        // notification2.type = 'text';
        // this.notifications.push(notification2);
        // setInterval(() => {
        //   
        // }, 5000);
    };
    NotificationListComponent.prototype.deleteNotification = function (notification) {
        var index = this.notifications.indexOf(notification);
        this.notifications.splice(index, 1);
    };
    NotificationListComponent.prototype.seenNotification = function (notification) {
        var _this = this;
        this.notificationService.seenNotification(notification)
            .subscribe(function (response) {
            _this.deleteNotification(notification);
        }, function (err) {
            console.log(err);
        });
    };
    NotificationListComponent.prototype.acceptNotification = function (notification) {
        var _this = this;
        this.notificationService.sendDecisionOfNotification(notification, "approved")
            .subscribe(function (response) {
            _this.deleteNotification(notification);
        }, function (err) {
            console.log(err);
        });
    };
    NotificationListComponent.prototype.rejectNotification = function (notification) {
        var _this = this;
        this.notificationService.sendDecisionOfNotification(notification, "declined")
            .subscribe(function (response) {
            _this.deleteNotification(notification);
        }, function (err) {
            console.log(err);
        });
    };
    return NotificationListComponent;
}());
NotificationListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-notification-list',
        template: __webpack_require__("../../../../../src/app/notifications/notification-list/notification-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/notifications/notification-list/notification-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__notification_service__["a" /* NotificationService */]) === "function" && _a || Object])
], NotificationListComponent);

var _a;
//# sourceMappingURL=notification-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notificationsRoutes", function() { return notificationsRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsModule", function() { return NotificationsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_list_notification_list_component__ = __webpack_require__("../../../../../src/app/notifications/notification-list/notification-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notification_service__ = __webpack_require__("../../../../../src/app/notifications/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var notificationsRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__notification_list_notification_list_component__["a" /* NotificationListComponent */],
        data: {
            breadcrumb: 'নোটিফিকেশন',
            icon: 'icofont icofont-notification bg-c-purple',
            status: true
        }
    }
];
var NotificationsModule = (function () {
    function NotificationsModule() {
    }
    return NotificationsModule;
}());
NotificationsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["g" /* RouterModule */].forChild(notificationsRoutes),
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__notification_service__["a" /* NotificationService */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__notification_list_notification_list_component__["a" /* NotificationListComponent */]]
    })
], NotificationsModule);

//# sourceMappingURL=notifications.module.js.map

/***/ })

});
//# sourceMappingURL=notifications.module.chunk.js.map