function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent(titleService, sharedService) {
        _classCallCheck(this, AboutComponent);

        this.titleService = titleService;
        this.sharedService = sharedService;
        this.title = 'About';
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.titleService.setTitle("".concat(this.title, " - ").concat(this.title, "-").concat(this.sharedService.blogtitle));
        }
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]));
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 6,
      vars: 0,
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "the site is developed using angular and is being deployed by githubpages!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Email: sohambanerjee4abc@hotmail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Twitter: https://twitter.com/putul_banerjee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
        }, {
          type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./article-list/article-list.component */
    "./src/app/article-list/article-list.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _article_article_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./article/article.component */
    "./src/app/article/article.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");
    /* harmony import */


    var _views_views_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./views/views.component */
    "./src/app/views/views.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user-register/user-register.component */
    "./src/app/user-register/user-register.component.ts");
    /* harmony import */


    var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./user-login/user-login.component */
    "./src/app/user-login/user-login.component.ts");
    /* harmony import */


    var _vendors_register_vendors_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./vendors-register/vendors-register.component */
    "./src/app/vendors-register/vendors-register.component.ts");
    /* harmony import */


    var _vendor_login_vendor_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./vendor-login/vendor-login.component */
    "./src/app/vendor-login/vendor-login.component.ts");
    /* harmony import */


    var _vendor_profile_vendor_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./vendor-profile/vendor-profile.component */
    "./src/app/vendor-profile/vendor-profile.component.ts");
    /* harmony import */


    var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./user-profile/user-profile.component */
    "./src/app/user-profile/user-profile.component.ts");
    /* harmony import */


    var _electronics_electronics_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./electronics/electronics.component */
    "./src/app/electronics/electronics.component.ts");
    /* harmony import */


    var _men_men_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./men/men.component */
    "./src/app/men/men.component.ts");
    /* harmony import */


    var _fashion_fashion_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./fashion/fashion.component */
    "./src/app/fashion/fashion.component.ts");
    /* harmony import */


    var _women_women_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./women/women.component */
    "./src/app/women/women.component.ts");
    /* harmony import */


    var _home_apll_home_apll_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./home-apll/home-apll.component */
    "./src/app/home-apll/home-apll.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    }, {
      path: 'views',
      component: _views_views_component__WEBPACK_IMPORTED_MODULE_6__["ViewsComponent"]
    }, {
      path: 'user_register',
      component: _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_8__["UserRegisterComponent"]
    }, {
      path: 'user_login',
      component: _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_9__["UserLoginComponent"]
    }, {
      path: 'user_profile',
      component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_13__["UserProfileComponent"]
    }, {
      path: 'vendor_register',
      component: _vendors_register_vendors_register_component__WEBPACK_IMPORTED_MODULE_10__["VendorsRegisterComponent"]
    }, {
      path: 'vendor_login',
      component: _vendor_login_vendor_login_component__WEBPACK_IMPORTED_MODULE_11__["VendorLoginComponent"]
    }, {
      path: 'vendor_profile',
      component: _vendor_profile_vendor_profile_component__WEBPACK_IMPORTED_MODULE_12__["VendorProfileComponent"]
    }, {
      path: 'electronics',
      component: _electronics_electronics_component__WEBPACK_IMPORTED_MODULE_14__["ElectronicsComponent"]
    }, {
      path: 'fashion',
      component: _fashion_fashion_component__WEBPACK_IMPORTED_MODULE_16__["FashionComponent"]
    }, {
      path: 'men',
      component: _men_men_component__WEBPACK_IMPORTED_MODULE_15__["MenComponent"]
    }, {
      path: 'women',
      component: _women_women_component__WEBPACK_IMPORTED_MODULE_17__["WomenComponent"]
    }, {
      path: 'home_apll',
      component: _home_apll_home_apll_component__WEBPACK_IMPORTED_MODULE_18__["HomeApllComponent"]
    }, {
      path: '404',
      component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]
    }, {
      path: 'articles',
      component: _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_2__["ArticleListComponent"]
    }, {
      path: ':key',
      component: _article_article_component__WEBPACK_IMPORTED_MODULE_4__["ArticleComponent"]
    }, {
      path: '**',
      component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        initialNavigation: 'enabled'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            initialNavigation: 'enabled'
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'hello-world';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }
      },
      directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./article-list/article-list.component */
    "./src/app/article-list/article-list.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _article_article_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./article/article.component */
    "./src/app/article/article.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _views_views_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./views/views.component */
    "./src/app/views/views.component.ts");
    /* harmony import */


    var _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./user-register/user-register.component */
    "./src/app/user-register/user-register.component.ts");
    /* harmony import */


    var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./user-login/user-login.component */
    "./src/app/user-login/user-login.component.ts");
    /* harmony import */


    var _vendors_register_vendors_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./vendors-register/vendors-register.component */
    "./src/app/vendors-register/vendors-register.component.ts");
    /* harmony import */


    var _vendor_login_vendor_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./vendor-login/vendor-login.component */
    "./src/app/vendor-login/vendor-login.component.ts");
    /* harmony import */


    var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./user-profile/user-profile.component */
    "./src/app/user-profile/user-profile.component.ts");
    /* harmony import */


    var _vendor_profile_vendor_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./vendor-profile/vendor-profile.component */
    "./src/app/vendor-profile/vendor-profile.component.ts");
    /* harmony import */


    var _electronics_electronics_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./electronics/electronics.component */
    "./src/app/electronics/electronics.component.ts");
    /* harmony import */


    var _fashion_fashion_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./fashion/fashion.component */
    "./src/app/fashion/fashion.component.ts");
    /* harmony import */


    var _men_men_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./men/men.component */
    "./src/app/men/men.component.ts");
    /* harmony import */


    var _women_women_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./women/women.component */
    "./src/app/women/women.component.ts");
    /* harmony import */


    var _home_apll_home_apll_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./home-apll/home-apll.component */
    "./src/app/home-apll/home-apll.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
        appId: 'serverApp'
      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_7__["ArticleListComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _article_article_component__WEBPACK_IMPORTED_MODULE_9__["ArticleComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"], _views_views_component__WEBPACK_IMPORTED_MODULE_12__["ViewsComponent"], _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_13__["UserRegisterComponent"], _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_14__["UserLoginComponent"], _vendors_register_vendors_register_component__WEBPACK_IMPORTED_MODULE_15__["VendorsRegisterComponent"], _vendor_login_vendor_login_component__WEBPACK_IMPORTED_MODULE_16__["VendorLoginComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_17__["UserProfileComponent"], _vendor_profile_vendor_profile_component__WEBPACK_IMPORTED_MODULE_18__["VendorProfileComponent"], _electronics_electronics_component__WEBPACK_IMPORTED_MODULE_19__["ElectronicsComponent"], _fashion_fashion_component__WEBPACK_IMPORTED_MODULE_20__["FashionComponent"], _men_men_component__WEBPACK_IMPORTED_MODULE_21__["MenComponent"], _women_women_component__WEBPACK_IMPORTED_MODULE_22__["WomenComponent"], _home_apll_home_apll_component__WEBPACK_IMPORTED_MODULE_23__["HomeApllComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_7__["ArticleListComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _article_article_component__WEBPACK_IMPORTED_MODULE_9__["ArticleComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"], _views_views_component__WEBPACK_IMPORTED_MODULE_12__["ViewsComponent"], _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_13__["UserRegisterComponent"], _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_14__["UserLoginComponent"], _vendors_register_vendors_register_component__WEBPACK_IMPORTED_MODULE_15__["VendorsRegisterComponent"], _vendor_login_vendor_login_component__WEBPACK_IMPORTED_MODULE_16__["VendorLoginComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_17__["UserProfileComponent"], _vendor_profile_vendor_profile_component__WEBPACK_IMPORTED_MODULE_18__["VendorProfileComponent"], _electronics_electronics_component__WEBPACK_IMPORTED_MODULE_19__["ElectronicsComponent"], _fashion_fashion_component__WEBPACK_IMPORTED_MODULE_20__["FashionComponent"], _men_men_component__WEBPACK_IMPORTED_MODULE_21__["MenComponent"], _women_women_component__WEBPACK_IMPORTED_MODULE_22__["WomenComponent"], _home_apll_home_apll_component__WEBPACK_IMPORTED_MODULE_23__["HomeApllComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
            appId: 'serverApp'
          }), _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/article-list/article-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/article-list/article-list.component.ts ***!
    \********************************************************/

  /*! exports provided: ArticleListComponent */

  /***/
  function srcAppArticleListArticleListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function () {
      return ArticleListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");
    /* harmony import */


    var _article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../article.service */
    "./src/app/article.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function ArticleListComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Continue reading");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var article_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", article_r1.imageurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", article_r1.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, article_r1.date));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", article_r1.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", article_r1.key, "");
      }
    }

    var ArticleListComponent = /*#__PURE__*/function () {
      function ArticleListComponent(titleService, sharedService, articleService) {
        _classCallCheck(this, ArticleListComponent);

        this.titleService = titleService;
        this.sharedService = sharedService;
        this.articleService = articleService;
        this.articles = [];
      }

      _createClass(ArticleListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.titleService.setTitle("".concat(this.sharedService.blogtitle));
          this.getArticles();
        }
      }, {
        key: "getArticles",
        value: function getArticles() {
          var _this = this;

          this.articleService.getArticles().subscribe(function (articles) {
            return _this.articles = articles;
          });
        }
      }]);

      return ArticleListComponent;
    }();

    ArticleListComponent.ɵfac = function ArticleListComponent_Factory(t) {
      return new (t || ArticleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"]));
    };

    ArticleListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ArticleListComponent,
      selectors: [["app-article-list"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], [1, "card"], [1, "card-body"], [3, "src"], [1, "meta-info"], [3, "innerHtml"], [1, "continue-reading", 3, "routerLink"]],
      template: function ArticleListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ArticleListComponent_div_0_Template, 14, 7, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articles);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: [".card[_ngcontent-%COMP%] {\n  border: 1px solid #0f7bd3;\n  border-radius: 4px;\n  margin-top: 15px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 15px;\n  background: #80b5c7;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-height: 200px;\n}\n\n.meta-info[_ngcontent-%COMP%] {\n  color: #741c1c;\n  margin-top: -28px;\n  font-size: 14px;\n}\n\n.continue-reading[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #7a2121;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS1saXN0L0Q6XFxjb2RlXFxCbG9ncG9zdC9zcmNcXGFwcFxcYXJ0aWNsZS1saXN0XFxhcnRpY2xlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FydGljbGUtbGlzdC9hcnRpY2xlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUtbGlzdC9hcnRpY2xlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE1LCAxMjMsIDIxMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBiYWNrZ3JvdW5kOiAjODBiNWM3O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4ubWV0YS1pbmZvIHtcclxuICBjb2xvcjogcmdiKDExNiwgMjgsIDI4KTtcclxuICBtYXJnaW4tdG9wOiAtMjhweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jb250aW51ZS1yZWFkaW5nIHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgY29sb3I6IHJnYigxMjIsIDMzLCAzMyk7XHJcbn1cclxuIiwiLmNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGY3YmQzO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5jYXJkLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjODBiNWM3O1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuaW1nIHtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG59XG5cbi5tZXRhLWluZm8ge1xuICBjb2xvcjogIzc0MWMxYztcbiAgbWFyZ2luLXRvcDogLTI4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNvbnRpbnVlLXJlYWRpbmcge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjN2EyMTIxO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-article-list',
          templateUrl: './article-list.component.html',
          styleUrls: ['./article-list.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
        }, {
          type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
        }, {
          type: _article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/article.service.ts":
  /*!************************************!*\
    !*** ./src/app/article.service.ts ***!
    \************************************/

  /*! exports provided: ArticleService */

  /***/
  function srcAppArticleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleService", function () {
      return ArticleService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _mock_articles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./mock-articles */
    "./src/app/mock-articles.ts");

    var ArticleService = /*#__PURE__*/function () {
      function ArticleService() {
        _classCallCheck(this, ArticleService);
      }

      _createClass(ArticleService, [{
        key: "getArticles",
        value: function getArticles() {
          var articles = _mock_articles__WEBPACK_IMPORTED_MODULE_2__["ARTICLES"];
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(articles);
        }
      }, {
        key: "getArticle",
        value: function getArticle(key) {
          var articles = _mock_articles__WEBPACK_IMPORTED_MODULE_2__["ARTICLES"].filter(function (a) {
            return a.key === key;
          });

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(articles[0]);
        }
      }]);

      return ArticleService;
    }();

    ArticleService.ɵfac = function ArticleService_Factory(t) {
      return new (t || ArticleService)();
    };

    ArticleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ArticleService,
      factory: ArticleService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/article.ts":
  /*!****************************!*\
    !*** ./src/app/article.ts ***!
    \****************************/

  /*! exports provided: Article */

  /***/
  function srcAppArticleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Article", function () {
      return Article;
    });

    var Article = function Article() {
      _classCallCheck(this, Article);

      this.title = '';
      this.content = '';
      this.key = '';
      this.date = new Date();
      this.description = '';
      this.imageurl = '';
    };
    /***/

  },

  /***/
  "./src/app/article/article.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/article/article.component.ts ***!
    \**********************************************/

  /*! exports provided: ArticleComponent */

  /***/
  function srcAppArticleArticleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleComponent", function () {
      return ArticleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../article */
    "./src/app/article.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../article.service */
    "./src/app/article.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ArticleComponent = /*#__PURE__*/function () {
      function ArticleComponent(route, articleService, router, titleService, sharedService, meta) {
        _classCallCheck(this, ArticleComponent);

        this.route = route;
        this.articleService = articleService;
        this.router = router;
        this.titleService = titleService;
        this.sharedService = sharedService;
        this.meta = meta;
        this.article = new _article__WEBPACK_IMPORTED_MODULE_1__["Article"]();
      }

      _createClass(ArticleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.route.params.subscribe(function (params) {
            var key = params.key;

            _this2.articleService.getArticle(key).subscribe(function (article) {
              if (article === undefined) {
                _this2.router.navigateByUrl('404');

                return;
              }

              _this2.article = article;

              _this2.titleService.setTitle("".concat(_this2.sharedService.blogtitle));

              _this2.meta.addTags([{
                name: 'description',
                content: _this2.article.description
              }, {
                property: 'og:title',
                content: "".concat(_this2.article.title, "-").concat(_this2.sharedService.blogtitle)
              }, {
                property: 'og:type',
                content: 'website'
              }, {
                property: 'og:url',
                content: _this2.sharedService.bseurl + _this2.article.key
              }, {
                property: 'og:image',
                content: _this2.article.imageurl
              }, {
                property: 'og:description',
                content: _this2.article.description
              }, {
                property: 'og:site_name',
                content: _this2.sharedService.blogtitle
              }]);
            });
          });
        }
      }]);

      return ArticleComponent;
    }();

    ArticleComponent.ɵfac = function ArticleComponent_Factory(t) {
      return new (t || ArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"]));
    };

    ArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ArticleComponent,
      selectors: [["app-article"]],
      decls: 9,
      vars: 6,
      consts: [[1, "article"], [1, "article-image"], [3, "src"], [1, "title"], [1, "meta-info"], [3, "innerHtml"]],
      template: function ArticleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.article.imageurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.article.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, ctx.article.date), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.article.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
      styles: [".card[_ngcontent-%COMP%] {\r\n  border: 1px solid rgb(245, 8, 8);\r\n  border-radius: 4px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  padding: 14px;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n  font-size: 32px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  max-height: 200px;\r\n  background: #80b5c7;\r\n}\r\n\r\n.meta-info[_ngcontent-%COMP%] {\r\n  color: grey;\r\n  margin-top: -28px;\r\n  font-size: 14px;\r\n}\r\n\r\n.continue-reading[_ngcontent-%COMP%] {\r\n  font-style: italic;\r\n  color: grey;\r\n}\r\n\r\n.article[_ngcontent-%COMP%] {\r\n  max-width: 720px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.article-image[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 15px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-size: 57px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  line-height: 1.5em;\r\n  font-size: 21px;\r\n  background: #80b5c7;\r\n  padding: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0NSwgOCwgOCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMTRweDtcclxufVxyXG5cclxuaDMge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICBiYWNrZ3JvdW5kOiAjODBiNWM3O1xyXG59XHJcblxyXG4ubWV0YS1pbmZvIHtcclxuICBjb2xvcjogZ3JleTtcclxuICBtYXJnaW4tdG9wOiAtMjhweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jb250aW51ZS1yZWFkaW5nIHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbi5hcnRpY2xlIHtcclxuICBtYXgtd2lkdGg6IDcyMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uYXJ0aWNsZS1pbWFnZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiA1N3B4O1xyXG59XHJcbnAge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICBmb250LXNpemU6IDIxcHg7XHJcbiAgYmFja2dyb3VuZDogIzgwYjVjNztcclxuICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-article',
          templateUrl: './article.component.html',
          styleUrls: ['./article.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
        }, {
          type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/electronics/electronics.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/electronics/electronics.component.ts ***!
    \******************************************************/

  /*! exports provided: ElectronicsComponent */

  /***/
  function srcAppElectronicsElectronicsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElectronicsComponent", function () {
      return ElectronicsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ElectronicsComponent = /*#__PURE__*/function () {
      function ElectronicsComponent() {
        _classCallCheck(this, ElectronicsComponent);
      }

      _createClass(ElectronicsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ElectronicsComponent;
    }();

    ElectronicsComponent.ɵfac = function ElectronicsComponent_Factory(t) {
      return new (t || ElectronicsComponent)();
    };

    ElectronicsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ElectronicsComponent,
      selectors: [["app-electronics"]],
      decls: 2,
      vars: 0,
      template: function ElectronicsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "electronics works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZWN0cm9uaWNzL2VsZWN0cm9uaWNzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ElectronicsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-electronics',
          templateUrl: './electronics.component.html',
          styleUrls: ['./electronics.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/fashion/fashion.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/fashion/fashion.component.ts ***!
    \**********************************************/

  /*! exports provided: FashionComponent */

  /***/
  function srcAppFashionFashionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FashionComponent", function () {
      return FashionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FashionComponent = /*#__PURE__*/function () {
      function FashionComponent() {
        _classCallCheck(this, FashionComponent);
      }

      _createClass(FashionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FashionComponent;
    }();

    FashionComponent.ɵfac = function FashionComponent_Factory(t) {
      return new (t || FashionComponent)();
    };

    FashionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FashionComponent,
      selectors: [["app-fashion"]],
      decls: 2,
      vars: 0,
      template: function FashionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "fashion works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhc2hpb24vZmFzaGlvbi5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FashionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fashion',
          templateUrl: './fashion.component.html',
          styleUrls: ['./fashion.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 5,
      vars: 0,
      consts: [["routerLink", "/vendor_register", 1, "nav-item"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \xA9 Soham_Banerjee ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Vendor's portal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0Q6XFxjb2RlXFxCbG9ncG9zdC9zcmNcXGFwcFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCJwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home-apll/home-apll.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/home-apll/home-apll.component.ts ***!
    \**************************************************/

  /*! exports provided: HomeApllComponent */

  /***/
  function srcAppHomeApllHomeApllComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeApllComponent", function () {
      return HomeApllComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeApllComponent = /*#__PURE__*/function () {
      function HomeApllComponent() {
        _classCallCheck(this, HomeApllComponent);
      }

      _createClass(HomeApllComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeApllComponent;
    }();

    HomeApllComponent.ɵfac = function HomeApllComponent_Factory(t) {
      return new (t || HomeApllComponent)();
    };

    HomeApllComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeApllComponent,
      selectors: [["app-home-apll"]],
      decls: 2,
      vars: 0,
      template: function HomeApllComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home-apll works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtYXBsbC9ob21lLWFwbGwuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeApllComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-apll',
          templateUrl: './home-apll.component.html',
          styleUrls: ['./home-apll.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 31,
      vars: 0,
      consts: [[1, "heading"], [1, "img"], ["src", "https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"], [1, "card-body"], [1, "comm"], ["href", "https://www.marxists.org/archive/marx/works/1848/communist-manifesto/ch01.htm"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Welcome to LaraShopee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Welcome to our website where, you can browse through a variety of product ranges! Affordable prices and offers available! Enjoy shopping! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Visit our product ranges and go through them to have a nice time!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " you can provide us with suggestions on how to improve the functionality of our site! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Sell your products effortlessly Visit the vendor's portal to register and start selling ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Provide as much as you want your privacy completely in your hands! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "REMEMBER IT'S NOT YOUR SITE IT'S ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "OUR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " SITE!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".card[_ngcontent-%COMP%] {\r\n  border: 1px solid rgb(15, 123, 211);\r\n  border-radius: 4px;\r\n  margin-top: 15px;\r\n}\r\n.heading[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n.comm[_ngcontent-%COMP%] {\r\n  color: red;\r\n  padding: 30px;\r\n  text-align: center;\r\n}\r\n.card-body[_ngcontent-%COMP%] {\r\n  padding: 15px;\r\n  background: #80b5c7;\r\n}\r\nh3[_ngcontent-%COMP%] {\r\n  font-size: 32px;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n  max-height: 200px;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  \r\n}\r\n.meta-info[_ngcontent-%COMP%] {\r\n  color: rgb(116, 28, 28);\r\n  margin-top: -28px;\r\n  font-size: 14px;\r\n}\r\n.continue-reading[_ngcontent-%COMP%] {\r\n  font-style: italic;\r\n  color: rgb(122, 33, 33);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCOztBQUVwQjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE1LCAxMjMsIDIxMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuLmhlYWRpbmcge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29tbSB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICM4MGI1Yzc7XHJcbn1cclxuXHJcbmgzIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIFxyXG59XHJcblxyXG4ubWV0YS1pbmZvIHtcclxuICBjb2xvcjogcmdiKDExNiwgMjgsIDI4KTtcclxuICBtYXJnaW4tdG9wOiAtMjhweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jb250aW51ZS1yZWFkaW5nIHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgY29sb3I6IHJnYigxMjIsIDMzLCAzMyk7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/men/men.component.ts":
  /*!**************************************!*\
    !*** ./src/app/men/men.component.ts ***!
    \**************************************/

  /*! exports provided: MenComponent */

  /***/
  function srcAppMenMenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenComponent", function () {
      return MenComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MenComponent = /*#__PURE__*/function () {
      function MenComponent() {
        _classCallCheck(this, MenComponent);
      }

      _createClass(MenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenComponent;
    }();

    MenComponent.ɵfac = function MenComponent_Factory(t) {
      return new (t || MenComponent)();
    };

    MenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenComponent,
      selectors: [["app-men"]],
      decls: 2,
      vars: 0,
      template: function MenComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "men works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbi9tZW4uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-men',
          templateUrl: './men.component.html',
          styleUrls: ['./men.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mock-articles.ts":
  /*!**********************************!*\
    !*** ./src/app/mock-articles.ts ***!
    \**********************************/

  /*! exports provided: ARTICLES */

  /***/
  function srcAppMockArticlesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ARTICLES", function () {
      return ARTICLES;
    });

    var ARTICLES = [{
      id: 1,
      title: "It's me Banerjee",
      content: "<p>Hello All,</p><p>I’m Banerjee. I Code for change and do it cause it is the only thing i believe i can do!</p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      description: 'Get to know me a bit!',
      key: 'my-first-article',
      date: new Date(),
      imageurl: 'https://cdn0.iconfinder.com/data/icons/team-and-management-glyph/160/coding-team-512.png'
    }, {
      id: 2,
      content: " So I hang myself today. The rope around my neck will finally snap my head and choke my breath. At least it's the best I could ever do. I remember now memories forcing back my thoughts but the fact remains still even in the raging winds of my mind. It looks like there could be another choice, a hope perhaps to change the present and maybe find a fault with my endeavor. My paranoid self forced me to live in with the ever changing theme of this world and now it's guilt that makes up the background of my mind. I infact carry  logic and reasoning with equal thought and now even when both of them are hanging on a barbed wire I find my adrenaline rush the better option among the few choices. I make my condition a little more sadistic, a little optimistic and a Little psychis and I find that the very beautiful reason to live is the biggest lie and the truth of death is is the exact reason for why we continue to dig graves in midst of dreams. To reduce the effect of a person's will to live, you just have to give him options to choose, to decide and to think about the consequences of them and it will break what they withhold the most in their life. I like those who speak about life, it's joy, it's beauty and it's meaning. I find these topics rather interesting in front of the gloomy speeches about ways to prevent suicidal thoughts. These topics gives us a viewpoint of what's ahead of us making us feel sober by the end of the day and the endless craze for it drives you into a utter dystopia making the miracle cure rush into your mind like a imperative order from heaven and it barely needs any psychological resistance to even check out with the reality. The time waits for its own purpose steering sheeps in search of green maidens. All I can say that when these ropes sanp open your spinal cord and choke your body, it will seem like a foolish decision at first but in the grasp of pain as your lights grow dimmer and the world finally bows out to your act, it will finally make sense to logic why it never could take the place of magic. The world crumbles below the belief of a better life as one disappears among the crowded heaven. The reasoning to every action is a measure made by the society to cover the stain with a painkiller. You may pull away from the horizon and try to make sense in the open sky but the synonym to our lives had never been created. The deserted roads and the travellers walking are just pitiful of their own companions. Sympathy had lost the way with mercy following it's trail long before your ego made place in this world. Now at the end when someone tries to symphatise with a dead body, it feels foolish to me that he too like me is a rat that makes trap for another rat. The ending might makes deceptive conclusion but who cares when you now feel you know that  you will be 'AT REST'. Even fading into time is an optimistic thinking and now that you are sure you will never be inside a troubled heart and a restless mind seeking your life as their inspiration..<p>Akash Biswas</p>",
      title: 'Sitting Thoughts',
      description: 'views about the people and world',
      key: 'sitting-thoughts-1',
      date: new Date(),
      imageurl: 'https://image.flaticon.com/icons/png/512/62/62113.png'
    }, {
      id: 3,
      content: '<p> A spectre is haunting Europe — the spectre of communism. All the powers of old Europe have entered into a holy alliance to exorcise this spectre: Pope and Tsar, Metternich and Guizot, French Radicals and German police-spies.Where is the party in opposition that has not been decried as communistic by its opponents in power? </p> Where is the opposition that has not hurled back the branding reproach of communism, against the more advanced opposition parties, as well as against its reactionary adversaries?',
      title: 'Ideologies',
      description: 'views about the people and world',
      key: 'the-second-article',
      date: new Date(),
      imageurl: 'https://cdn0.iconfinder.com/data/icons/education-213/64/brain-mind-smart-think-intelligence-512.png'
    }];
    /***/
  },

  /***/
  "./src/app/nav-bar/nav-bar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/nav-bar/nav-bar.component.ts ***!
    \**********************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavBarComponent = /*#__PURE__*/function () {
      function NavBarComponent() {
        _classCallCheck(this, NavBarComponent);
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
      return new (t || NavBarComponent)();
    };

    NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavBarComponent,
      selectors: [["app-nav-bar"]],
      decls: 23,
      vars: 0,
      consts: [[1, "title"], ["routerLink", ""], [1, "navbar"], [1, "dropdown"], [1, "nav-item"], [1, "dropdown-content"], ["href", "/electronics"], ["href", "/men"], ["href", "/women"], ["href", "/home_apll"], ["routerLink", "/articles", 1, "nav-item"], ["routerLink", "/user_register", 1, "nav-item"], ["routerLink", "/about", 1, "nav-item"]],
      template: function NavBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "LaraShopee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Electronics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Men");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Women");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Home Appliances");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Articles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sign up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".title[_ngcontent-%COMP%] {\n  font-size: 2em;\n  text-align: center;\n  border-bottom: 1px solid #003d99;\n  padding: 0.7rem;\n}\n\n.title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black !important;\n  text-decoration: none !important;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  text-align: center;\n  color: #0147a1;\n  background: #8ac5d8;\n  border-bottom: 1px solid #003d99;\n  padding: 0.5rem;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 1em;\n  text-decoration: none;\n  color: #681717;\n  background-color: #8ac5d8;\n}\n\n.nav-item[_ngcontent-%COMP%]:visited, .nav-item[_ngcontent-%COMP%]:active, .nav-item[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  color: #641c1c;\n}\n\n.nav-item[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n\n\n.dropbtn[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  color: white;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-decoration: none;\n  color: #681717;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #0fa4df;\n  min-width: 160px;\n  z-index: 1;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #1747e6;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n  background-color: #3e8e41;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9EOlxcY29kZVxcQmxvZ3Bvc3Qvc3JjXFxhcHBcXG5hdi1iYXJcXG5hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0UsdUJBQUE7RUFDQSxnQ0FBQTtBQ0VGOztBRENBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQ0VGOztBRENBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0VGOztBRENBOzs7RUFHRSxxQkFBQTtFQUVBLGNBQUE7QUNDRjs7QURDQTtFQUNFLDBCQUFBO0FDRUY7O0FEQ0Esb0JBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNFRjs7QURDQSxrRUFBQTs7QUFDQTtFQUVFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUEseUNBQUE7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBRUEsVUFBQTtBQ0FGOztBREdBLDhCQUFBOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0EsNENBQUE7O0FBQ0E7RUFBMkIseUJBQUE7QUNDM0I7O0FEQ0Esb0NBQUE7O0FBQ0E7RUFBbUMsY0FBQTtBQ0duQzs7QUREQSwwRkFBQTs7QUFDQTtFQUEwQix5QkFBQTtBQ0sxQiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAzZDk5O1xyXG4gIHBhZGRpbmc6IDAuN3JlbTtcclxufVxyXG4udGl0bGUgYSB7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMDE0N2ExO1xyXG4gIGJhY2tncm91bmQ6ICM4YWM1ZDg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDNkOTk7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG4ubmF2LWl0ZW0ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjNjgxNzE3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YWM1ZDg7XHJcbn1cclxuXHJcbi5uYXYtaXRlbTp2aXNpdGVkLFxyXG4ubmF2LWl0ZW06YWN0aXZlLFxyXG4ubmF2LWl0ZW06Zm9jdXMge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgY29sb3I6ICM2NDFjMWM7XHJcbn1cclxuLm5hdi1pdGVtOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLyogRHJvcGRvd24gQnV0dG9uICovXHJcbi5kcm9wYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFRoZSBjb250YWluZXIgPGRpdj4gLSBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cclxuLmRyb3Bkb3duIHtcclxuICBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICAgXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjNjgxNzE3O1xyXG59XHJcblxyXG4vKiBEcm9wZG93biBDb250ZW50IChIaWRkZW4gYnkgRGVmYXVsdCkgKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZmE0ZGY7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICBcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4vKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXHJcbi5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogcmdiKDIzLCA3MSwgMjMwKTt9XHJcblxyXG4vKiBTaG93IHRoZSBkcm9wZG93biBtZW51IG9uIGhvdmVyICovXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7ZGlzcGxheTogYmxvY2s7fVxyXG5cclxuLyogQ2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBkcm9wZG93biBidXR0b24gd2hlbiB0aGUgZHJvcGRvd24gY29udGVudCBpcyBzaG93biAqL1xyXG4uZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge2JhY2tncm91bmQtY29sb3I6ICMzZThlNDE7fVxyXG4iLCIudGl0bGUge1xuICBmb250LXNpemU6IDJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwM2Q5OTtcbiAgcGFkZGluZzogMC43cmVtO1xufVxuXG4udGl0bGUgYSB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm5hdmJhciB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMTQ3YTE7XG4gIGJhY2tncm91bmQ6ICM4YWM1ZDg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAzZDk5O1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5uYXYtaXRlbSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNjgxNzE3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGFjNWQ4O1xufVxuXG4ubmF2LWl0ZW06dmlzaXRlZCxcbi5uYXYtaXRlbTphY3RpdmUsXG4ubmF2LWl0ZW06Zm9jdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNjQxYzFjO1xufVxuXG4ubmF2LWl0ZW06aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLyogRHJvcGRvd24gQnV0dG9uICovXG4uZHJvcGJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi8qIFRoZSBjb250YWluZXIgPGRpdj4gLSBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cbi5kcm9wZG93biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzY4MTcxNztcbn1cblxuLyogRHJvcGRvd24gQ29udGVudCAoSGlkZGVuIGJ5IERlZmF1bHQpICovXG4uZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmYTRkZjtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgei1pbmRleDogMTtcbn1cblxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc0N2U2O1xufVxuXG4vKiBTaG93IHRoZSBkcm9wZG93biBtZW51IG9uIGhvdmVyICovXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogQ2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBkcm9wZG93biBidXR0b24gd2hlbiB0aGUgZHJvcGRvd24gY29udGVudCBpcyBzaG93biAqL1xuLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-bar',
          templateUrl: './nav-bar.component.html',
          styleUrls: ['./nav-bar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/not-found/not-found.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/not-found/not-found.component.ts ***!
    \**************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };

    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 4,
      vars: 0,
      consts: [["routerLink", "/articles"]],
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The page doesn't exist!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back to articles!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found',
          templateUrl: './not-found.component.html',
          styleUrls: ['./not-found.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared.service.ts":
  /*!***********************************!*\
    !*** ./src/app/shared.service.ts ***!
    \***********************************/

  /*! exports provided: SharedService */

  /***/
  function srcAppSharedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedService", function () {
      return SharedService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SharedService = function SharedService() {
      _classCallCheck(this, SharedService);

      this.blogtitle = 'Blogpost';
      this.bseurl = 'http://localhost:4200';
    };

    SharedService.ɵfac = function SharedService_Factory(t) {
      return new (t || SharedService)();
    };

    SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SharedService,
      factory: SharedService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-login/user-login.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/user-login/user-login.component.ts ***!
    \****************************************************/

  /*! exports provided: UserLoginComponent */

  /***/
  function srcAppUserLoginUserLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function () {
      return UserLoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["../user_profile"];
    };

    var UserLoginComponent = /*#__PURE__*/function () {
      function UserLoginComponent() {
        _classCallCheck(this, UserLoginComponent);
      }

      _createClass(UserLoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserLoginComponent;
    }();

    UserLoginComponent.ɵfac = function UserLoginComponent_Factory(t) {
      return new (t || UserLoginComponent)();
    };

    UserLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserLoginComponent,
      selectors: [["app-user-login"]],
      decls: 18,
      vars: 2,
      consts: [[1, "card-body"], [1, ""], ["for", "email"], ["type", "email", "id", "email", "name", "email"], ["for", "password"], ["type", "password", "id", "password", "name", "password"], ["type", "button", "value", "Login", 1, "btn", 3, "routerLink"]],
      template: function UserLoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: [".card[_ngcontent-%COMP%] {\n  border: 1px solid #0f7bd3;\n  border-radius: 4px;\n  margin-top: 15px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 15px;\n  background: #40a3c4;\n  border-radius: 4px;\n  width: 300px;\n  margin-top: 15px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 27px;\n  text-align: left;\n}\n\nimg[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.meta-info[_ngcontent-%COMP%] {\n  color: #741c1c;\n  margin-top: -28px;\n  font-size: 14px;\n}\n\n.continue-reading[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #31087e;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1sb2dpbi9EOlxcY29kZVxcQmxvZ3Bvc3Qvc3JjXFxhcHBcXHVzZXItbG9naW5cXHVzZXItbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXItbG9naW4vdXNlci1sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBR0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUU7RUFFRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBRE1FO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0hKOztBRE1FO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbG9naW4vdXNlci1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNSwgMTIzLCAyMTEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgXHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDBhM2M0OyAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGltZyB7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLm1ldGEtaW5mbyB7XHJcbiAgICBjb2xvcjogcmdiKDExNiwgMjgsIDI4KTtcclxuICAgIG1hcmdpbi10b3A6IC0yOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGludWUtcmVhZGluZyB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBjb2xvcjogcmdiKDQ5LCA4LCAxMjYpO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgIiwiLmNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGY3YmQzO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjNDBhM2M0O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAyN3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLm1ldGEtaW5mbyB7XG4gIGNvbG9yOiAjNzQxYzFjO1xuICBtYXJnaW4tdG9wOiAtMjhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29udGludWUtcmVhZGluZyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICMzMTA4N2U7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-login',
          templateUrl: './user-login.component.html',
          styleUrls: ['./user-login.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-profile/user-profile.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/user-profile/user-profile.component.ts ***!
    \********************************************************/

  /*! exports provided: UserProfileComponent */

  /***/
  function srcAppUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
      return UserProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UserProfileComponent = /*#__PURE__*/function () {
      function UserProfileComponent() {
        _classCallCheck(this, UserProfileComponent);
      }

      _createClass(UserProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserProfileComponent;
    }();

    UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) {
      return new (t || UserProfileComponent)();
    };

    UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserProfileComponent,
      selectors: [["app-user-profile"]],
      decls: 2,
      vars: 0,
      template: function UserProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "user-profile works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-profile',
          templateUrl: './user-profile.component.html',
          styleUrls: ['./user-profile.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-register/user-register.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/user-register/user-register.component.ts ***!
    \**********************************************************/

  /*! exports provided: UserRegisterComponent */

  /***/
  function srcAppUserRegisterUserRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRegisterComponent", function () {
      return UserRegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["../user_login"];
    };

    var UserRegisterComponent = /*#__PURE__*/function () {
      function UserRegisterComponent() {
        _classCallCheck(this, UserRegisterComponent);
      }

      _createClass(UserRegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserRegisterComponent;
    }();

    UserRegisterComponent.ɵfac = function UserRegisterComponent_Factory(t) {
      return new (t || UserRegisterComponent)();
    };

    UserRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserRegisterComponent,
      selectors: [["app-user-register"]],
      decls: 34,
      vars: 2,
      consts: [[1, "card-body"], [1, ""], ["for", "name"], ["type", "text", "id", "name", "name", "name"], ["for", "email"], ["type", "email", "id", "email", "name", "email"], ["for", "mobile"], ["type", "number", "id", "mobile", "name", "mobile"], ["for", "password"], ["type", "password", "id", "password", "name", "password"], ["type", "button"], ["type", "button", "value", "Login", 1, "btn", 3, "routerLink"]],
      template: function UserRegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Enter details to continue registration:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Mobile number:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Already Have an account?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: [".card[_ngcontent-%COMP%] {\n  border: 1px solid #0f7bd3;\n  border-radius: 4px;\n  margin-top: 15px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 15px;\n  background: #40a3c4;\n  border-radius: 4px;\n  width: 300px;\n  margin-top: 15px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 27px;\n  text-align: left;\n}\n\nimg[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.meta-info[_ngcontent-%COMP%] {\n  color: #741c1c;\n  margin-top: -28px;\n  font-size: 14px;\n}\n\n.continue-reading[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #31087e;\n  text-align: left;\n}\n\n.button[_ngcontent-%COMP%] {\n  transition-duration: 0.4s;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background-color: #d81b1b;\n  \n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1yZWdpc3Rlci9EOlxcY29kZVxcQmxvZ3Bvc3Qvc3JjXFxhcHBcXHVzZXItcmVnaXN0ZXJcXHVzZXItcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXItcmVnaXN0ZXIvdXNlci1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBR0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUU7RUFFRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBRE1FO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0hKOztBRE1FO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURLRTtFQUNFLHlCQUFBO0FDRko7O0FES0U7RUFDRSx5QkFBQTtFQUEyQixVQUFBO0VBQzNCLFlBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcmVnaXN0ZXIvdXNlci1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNSwgMTIzLCAyMTEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgXHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDBhM2M0OyAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGltZyB7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLm1ldGEtaW5mbyB7XHJcbiAgICBjb2xvcjogcmdiKDExNiwgMjgsIDI4KTtcclxuICAgIG1hcmdpbi10b3A6IC0yOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGludWUtcmVhZGluZyB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBjb2xvcjogcmdiKDQ5LCA4LCAxMjYpO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgLmJ1dHRvbiB7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkODFiMWI7IC8qIEdyZWVuICovXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfSIsIi5jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBmN2JkMztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZDogIzQwYTNjNDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5tZXRhLWluZm8ge1xuICBjb2xvcjogIzc0MWMxYztcbiAgbWFyZ2luLXRvcDogLTI4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNvbnRpbnVlLXJlYWRpbmcge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjMzEwODdlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYnV0dG9uIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkODFiMWI7XG4gIC8qIEdyZWVuICovXG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-register',
          templateUrl: './user-register.component.html',
          styleUrls: ['./user-register.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/vendor-login/vendor-login.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/vendor-login/vendor-login.component.ts ***!
    \********************************************************/

  /*! exports provided: VendorLoginComponent */

  /***/
  function srcAppVendorLoginVendorLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VendorLoginComponent", function () {
      return VendorLoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["../vendor_profile"];
    };

    var VendorLoginComponent = /*#__PURE__*/function () {
      function VendorLoginComponent() {
        _classCallCheck(this, VendorLoginComponent);
      }

      _createClass(VendorLoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VendorLoginComponent;
    }();

    VendorLoginComponent.ɵfac = function VendorLoginComponent_Factory(t) {
      return new (t || VendorLoginComponent)();
    };

    VendorLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VendorLoginComponent,
      selectors: [["app-vendor-login"]],
      decls: 18,
      vars: 2,
      consts: [[1, "card-body"], [1, ""], ["for", "email"], ["type", "email", "id", "email", "name", "email"], ["for", "password"], ["type", "password", "id", "password", "name", "password"], ["type", "button", "value", "Login", 1, "btn", 3, "routerLink"]],
      template: function VendorLoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Vendor Login:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: [".card[_ngcontent-%COMP%] {\n  border: 1px solid #0f7bd3;\n  border-radius: 4px;\n  margin-top: 15px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 15px;\n  background: #40a3c4;\n  border-radius: 4px;\n  width: 300px;\n  margin-top: 15px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 27px;\n  text-align: left;\n}\n\nimg[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.meta-info[_ngcontent-%COMP%] {\n  color: #741c1c;\n  margin-top: -28px;\n  font-size: 14px;\n}\n\n.continue-reading[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #31087e;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yLWxvZ2luL0Q6XFxjb2RlXFxCbG9ncG9zdC9zcmNcXGFwcFxcdmVuZG9yLWxvZ2luXFx2ZW5kb3ItbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZlbmRvci1sb2dpbi92ZW5kb3ItbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUdFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElFO0VBRUUsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURNRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNISjs7QURNRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC92ZW5kb3ItbG9naW4vdmVuZG9yLWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE1LCAxMjMsIDIxMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1ib2R5IHtcclxuICBcclxuICAgIFxyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICM0MGEzYzQ7ICAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAubWV0YS1pbmZvIHtcclxuICAgIGNvbG9yOiByZ2IoMTE2LCAyOCwgMjgpO1xyXG4gICAgbWFyZ2luLXRvcDogLTI4cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250aW51ZS1yZWFkaW5nIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGNvbG9yOiByZ2IoNDksIDgsIDEyNik7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICAiLCIuY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZjdiZDM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICM0MGEzYzQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuaDMge1xuICBmb250LXNpemU6IDI3cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ubWV0YS1pbmZvIHtcbiAgY29sb3I6ICM3NDFjMWM7XG4gIG1hcmdpbi10b3A6IC0yOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jb250aW51ZS1yZWFkaW5nIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogIzMxMDg3ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VendorLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vendor-login',
          templateUrl: './vendor-login.component.html',
          styleUrls: ['./vendor-login.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/vendor-profile/vendor-profile.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/vendor-profile/vendor-profile.component.ts ***!
    \************************************************************/

  /*! exports provided: VendorProfileComponent */

  /***/
  function srcAppVendorProfileVendorProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VendorProfileComponent", function () {
      return VendorProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var VendorProfileComponent = /*#__PURE__*/function () {
      function VendorProfileComponent() {
        _classCallCheck(this, VendorProfileComponent);
      }

      _createClass(VendorProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VendorProfileComponent;
    }();

    VendorProfileComponent.ɵfac = function VendorProfileComponent_Factory(t) {
      return new (t || VendorProfileComponent)();
    };

    VendorProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VendorProfileComponent,
      selectors: [["app-vendor-profile"]],
      decls: 2,
      vars: 0,
      template: function VendorProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "vendor-profile works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci1wcm9maWxlL3ZlbmRvci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VendorProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vendor-profile',
          templateUrl: './vendor-profile.component.html',
          styleUrls: ['./vendor-profile.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/vendors-register/vendors-register.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/vendors-register/vendors-register.component.ts ***!
    \****************************************************************/

  /*! exports provided: VendorsRegisterComponent */

  /***/
  function srcAppVendorsRegisterVendorsRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VendorsRegisterComponent", function () {
      return VendorsRegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["../vendor_login"];
    };

    var VendorsRegisterComponent = /*#__PURE__*/function () {
      function VendorsRegisterComponent() {
        _classCallCheck(this, VendorsRegisterComponent);
      }

      _createClass(VendorsRegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VendorsRegisterComponent;
    }();

    VendorsRegisterComponent.ɵfac = function VendorsRegisterComponent_Factory(t) {
      return new (t || VendorsRegisterComponent)();
    };

    VendorsRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VendorsRegisterComponent,
      selectors: [["app-vendors-register"]],
      decls: 75,
      vars: 2,
      consts: [[1, "card-body"], [1, ""], ["for", "name"], ["type", "text", "id", "name", "name", "name"], ["for", "email"], ["type", "email", "id", "email", "name", "email"], ["for", "mobile"], ["type", "number", "id", "mobile", "name", "mobile"], ["for", "password"], ["type", "password", "id", "password", "name", "password"], ["for", "address"], ["type", "text", "id", "address", "name", "address"], ["for", "town"], ["type", "text", "id", "town", "name", "town"], ["for", "state"], ["type", "text", "id", "state", "name", "state"], ["for", "country"], ["type", "text", "id", "Country", "name", "Country"], ["for", "pin"], ["type", "number", "id", "pin", "name", "pin"], ["for", "device_type"], ["id", "device_type", "name", "device_type"], ["value", "android"], ["value", "iOS"], ["value", "windows"], ["value", "linux"], ["type", "submit"], ["type", "button"], ["type", "button", "value", "Login", 1, "btn", 3, "routerLink"]],
      template: function VendorsRegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Enter details to continue registration:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Mobile number:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Address:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "town:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "State:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Country:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "PIN:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Device type:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "select", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Android");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Apple iOS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Windows");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Linux");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Already Have an account?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: [".card[_ngcontent-%COMP%] {\n  border: 1px solid #0f7bd3;\n  border-radius: 4px;\n  margin-top: 15px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 15px;\n  background: #40a3c4;\n  border-radius: 4px;\n  width: 300px;\n  margin-top: 15px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 27px;\n  text-align: left;\n}\n\nimg[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.meta-info[_ngcontent-%COMP%] {\n  color: #741c1c;\n  margin-top: -28px;\n  font-size: 14px;\n}\n\n.continue-reading[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #31087e;\n  text-align: left;\n}\n\n.button[_ngcontent-%COMP%] {\n  transition-duration: 0.4s;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background-color: #d81b1b;\n  \n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9ycy1yZWdpc3Rlci9EOlxcY29kZVxcQmxvZ3Bvc3Qvc3JjXFxhcHBcXHZlbmRvcnMtcmVnaXN0ZXJcXHZlbmRvcnMtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZlbmRvcnMtcmVnaXN0ZXIvdmVuZG9ycy1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBR0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUU7RUFFRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBRE1FO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0hKOztBRE1FO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURLRTtFQUNFLHlCQUFBO0FDRko7O0FES0U7RUFDRSx5QkFBQTtFQUEyQixVQUFBO0VBQzNCLFlBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvcnMtcmVnaXN0ZXIvdmVuZG9ycy1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNSwgMTIzLCAyMTEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgXHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDBhM2M0OyAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGltZyB7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLm1ldGEtaW5mbyB7XHJcbiAgICBjb2xvcjogcmdiKDExNiwgMjgsIDI4KTtcclxuICAgIG1hcmdpbi10b3A6IC0yOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGludWUtcmVhZGluZyB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBjb2xvcjogcmdiKDQ5LCA4LCAxMjYpO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgLmJ1dHRvbiB7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkODFiMWI7IC8qIEdyZWVuICovXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfSIsIi5jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBmN2JkMztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZDogIzQwYTNjNDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5tZXRhLWluZm8ge1xuICBjb2xvcjogIzc0MWMxYztcbiAgbWFyZ2luLXRvcDogLTI4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNvbnRpbnVlLXJlYWRpbmcge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjMzEwODdlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYnV0dG9uIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkODFiMWI7XG4gIC8qIEdyZWVuICovXG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VendorsRegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vendors-register',
          templateUrl: './vendors-register.component.html',
          styleUrls: ['./vendors-register.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/views.component.ts":
  /*!******************************************!*\
    !*** ./src/app/views/views.component.ts ***!
    \******************************************/

  /*! exports provided: ViewsComponent */

  /***/
  function srcAppViewsViewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewsComponent", function () {
      return ViewsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ViewsComponent_section_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewsComponent_section_3_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.removeAddress(i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Article name: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewsComponent_section_3_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var address_r1 = ctx.$implicit;
          return address_r1.address = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Date: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewsComponent_section_3_Template_input_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var address_r1 = ctx.$implicit;
          return address_r1.street = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Author name: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewsComponent_section_3_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var address_r1 = ctx.$implicit;
          return address_r1.city = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Content: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewsComponent_section_3_Template_input_ngModelChange_26_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var address_r1 = ctx.$implicit;
          return address_r1.country = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var address_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Article number : ", i_r2 + 1, ":- ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "address_", address_r1.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", address_r1.address);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "street_", address_r1.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", address_r1.street);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "city_", address_r1.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", address_r1.city);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "country_", address_r1.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", address_r1.country);
      }
    }

    var ViewsComponent = /*#__PURE__*/function () {
      function ViewsComponent() {
        _classCallCheck(this, ViewsComponent);

        this.addresses = [{
          id: 1,
          address: '',
          street: '',
          city: '',
          country: ''
        }];
      }

      _createClass(ViewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addAddress",
        value: function addAddress() {
          this.addresses.push({
            id: this.addresses.length + 1,
            address: '',
            street: '',
            city: '',
            country: ''
          });
        }
      }, {
        key: "removeAddress",
        value: function removeAddress(i) {
          this.addresses.splice(i, 1);
        }
      }, {
        key: "logValue",
        value: function logValue() {
          console.log(this.addresses);
        }
      }]);

      return ViewsComponent;
    }();

    ViewsComponent.ɵfac = function ViewsComponent_Factory(t) {
      return new (t || ViewsComponent)();
    };

    ViewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ViewsComponent,
      selectors: [["app-root"]],
      decls: 10,
      vars: 1,
      consts: [[1, "card-body"], [1, "img"], ["src", "https://lh3.googleusercontent.com/proxy/O7HRwzr-A2uhuOMJxXnPUbsQLT-Pfr5dkPeJ2uPvgbNmQEdwEfW54oznTvgyQyNqMsnx4BFkLpJU7pdz3rFlsltKLXjr9D5OjvsSU1jLZ7ykY3fqBi7AeBMKOZZj9trAUmT_H6sZEMbOQ1GAf_V5ZTG1Ogo2"], ["class", "container border mb-4 p-3", 4, "ngFor", "ngForOf"], [1, "continue-reading"], ["type", "button", 1, "btn", "btn-primary", "mb-2", 3, "click"], ["type", "submit", "value", "Submit", 1, "btn", "btn-success"], [1, "container", "border", "mb-4", "p-3"], [1, ""], [1, "col-6", "text-center"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["type", "text", "placeholder", "Enter article name here", 1, "form-control", 3, "ngModel", "name", "ngModelChange"], ["type", "date", 1, "form-control", 3, "ngModel", "name", "ngModelChange"], ["type", "text", "placeholder", "enter your name", 1, "form-control", 3, "ngModel", "name", "ngModelChange"], ["type", "text", "placeholder", "Your content", 1, "form-control", 3, "ngModel", "name", "ngModelChange"]],
      template: function ViewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewsComponent_section_3_Template, 28, 9, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewsComponent_Template_button_click_5_listener() {
            return ctx.addAddress();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add Article");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.addresses);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      styles: [".card[_ngcontent-%COMP%] {\n  border: 1px solid #0f7bd3;\n  border-radius: 4px;\n  margin-top: 15px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  text-align: center;\n  display: grid;\n  grid-column-gap: 50px;\n  padding: 15px;\n  background: #80b5c7;\n  border: 1px solid #0f7bd3;\n  border-radius: 4px;\n  margin-top: 15px;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 27px;\n  text-align: left;\n}\n\nimg[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.meta-info[_ngcontent-%COMP%] {\n  color: #741c1c;\n  margin-top: -28px;\n  font-size: 14px;\n}\n\n.continue-reading[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #31087e;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvRDpcXGNvZGVcXEJsb2dwb3N0L3NyY1xcYXBwXFx2aWV3c1xcdmlld3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3ZpZXdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFFRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBRElFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0RKOztBRElFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3ZpZXdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE1LCAxMjMsIDIxMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1ib2R5IHtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtY29sdW1uLWdhcDogNTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODBiNWM3O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE1LCAxMjMsIDIxMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICBpbWcge1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5tZXRhLWluZm8ge1xyXG4gICAgY29sb3I6IHJnYigxMTYsIDI4LCAyOCk7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjhweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRpbnVlLXJlYWRpbmcge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY29sb3I6IHJnYig0OSwgOCwgMTI2KTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gICIsIi5jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBmN2JkMztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWNvbHVtbi1nYXA6IDUwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICM4MGI1Yzc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZjdiZDM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDI3cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ubWV0YS1pbmZvIHtcbiAgY29sb3I6ICM3NDFjMWM7XG4gIG1hcmdpbi10b3A6IC0yOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jb250aW51ZS1yZWFkaW5nIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogIzMxMDg3ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './views.component.html',
          styleUrls: ['./views.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/women/women.component.ts":
  /*!******************************************!*\
    !*** ./src/app/women/women.component.ts ***!
    \******************************************/

  /*! exports provided: WomenComponent */

  /***/
  function srcAppWomenWomenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WomenComponent", function () {
      return WomenComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WomenComponent = /*#__PURE__*/function () {
      function WomenComponent() {
        _classCallCheck(this, WomenComponent);
      }

      _createClass(WomenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WomenComponent;
    }();

    WomenComponent.ɵfac = function WomenComponent_Factory(t) {
      return new (t || WomenComponent)();
    };

    WomenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WomenComponent,
      selectors: [["app-women"]],
      decls: 2,
      vars: 0,
      template: function WomenComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "women works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvbWVuL3dvbWVuLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WomenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-women',
          templateUrl: './women.component.html',
          styleUrls: ['./women.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    document.addEventListener('DOMContentLoaded', function () {
      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\code\Blogpost\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map