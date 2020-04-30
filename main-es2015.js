(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");




class AboutComponent {
    constructor(titleService, sharedService) {
        this.titleService = titleService;
        this.sharedService = sharedService;
        this.title = 'About';
    }
    ngOnInit() {
        this.titleService.setTitle(`${this.title} - ${this.title}-${this.sharedService.blogtitle}`);
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 6, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "the site is developed using angular and is being deployed by githubpages!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Email: sohambanerjee4abc@hotmail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Twitter: https://twitter.com/putul_banerjee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss'],
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }, { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-list/article-list.component */ "./src/app/article-list/article-list.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _views_views_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/views.component */ "./src/app/views/views.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");










const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'views', component: _views_views_component__WEBPACK_IMPORTED_MODULE_6__["ViewsComponent"] },
    { path: '404', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] },
    { path: 'articles', component: _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_2__["ArticleListComponent"] },
    { path: ':key', component: _article_article_component__WEBPACK_IMPORTED_MODULE_4__["ArticleComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                initialNavigation: 'enabled',
            }),
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        initialNavigation: 'enabled',
                    }),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'hello-world';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./article-list/article-list.component */ "./src/app/article-list/article-list.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _views_views_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/views.component */ "./src/app/views/views.component.ts");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_7__["ArticleListComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
        _article_article_component__WEBPACK_IMPORTED_MODULE_9__["ArticleComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"],
        _views_views_component__WEBPACK_IMPORTED_MODULE_12__["ViewsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_7__["ArticleListComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                    _article_article_component__WEBPACK_IMPORTED_MODULE_9__["ArticleComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"],
                    _views_views_component__WEBPACK_IMPORTED_MODULE_12__["ViewsComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/article-list/article-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/article-list/article-list.component.ts ***!
  \********************************************************/
/*! exports provided: ArticleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return ArticleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../article.service */ "./src/app/article.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







function ArticleListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const article_r1 = ctx.$implicit;
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
} }
class ArticleListComponent {
    constructor(titleService, sharedService, articleService) {
        this.titleService = titleService;
        this.sharedService = sharedService;
        this.articleService = articleService;
        this.articles = [];
    }
    ngOnInit() {
        this.titleService.setTitle(`${this.sharedService.blogtitle}`);
        this.getArticles();
    }
    getArticles() {
        this.articleService
            .getArticles()
            .subscribe((articles) => (this.articles = articles));
    }
}
ArticleListComponent.ɵfac = function ArticleListComponent_Factory(t) { return new (t || ArticleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"])); };
ArticleListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleListComponent, selectors: [["app-article-list"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "card"], [1, "card-body"], [3, "src"], [1, "meta-info"], [3, "innerHtml"], [1, "continue-reading", 3, "routerLink"]], template: function ArticleListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ArticleListComponent_div_0_Template, 14, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".card[_ngcontent-%COMP%] {\n  border: 1px solid #0f7bd3;\n  border-radius: 4px;\n  margin-top: 15px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 15px;\n  background: #80b5c7;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-height: 200px;\n}\n\n.meta-info[_ngcontent-%COMP%] {\n  color: #741c1c;\n  margin-top: -28px;\n  font-size: 14px;\n}\n\n.continue-reading[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #7a2121;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS1saXN0L0s6XFxnaXRodWJcXEJsb2dwb3N0L3NyY1xcYXBwXFxhcnRpY2xlLWxpc3RcXGFydGljbGUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXJ0aWNsZS1saXN0L2FydGljbGUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXJ0aWNsZS1saXN0L2FydGljbGUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTUsIDEyMywgMjExKTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICM4MGI1Yzc7XHJcbn1cclxuXHJcbmgzIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5tZXRhLWluZm8ge1xyXG4gIGNvbG9yOiByZ2IoMTE2LCAyOCwgMjgpO1xyXG4gIG1hcmdpbi10b3A6IC0yOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNvbnRpbnVlLXJlYWRpbmcge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBjb2xvcjogcmdiKDEyMiwgMzMsIDMzKTtcclxufVxyXG4iLCIuY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZjdiZDM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmNhcmQtYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICM4MGI1Yzc7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuXG5pbWcge1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbn1cblxuLm1ldGEtaW5mbyB7XG4gIGNvbG9yOiAjNzQxYzFjO1xuICBtYXJnaW4tdG9wOiAtMjhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29udGludWUtcmVhZGluZyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICM3YTIxMjE7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article-list',
                templateUrl: './article-list.component.html',
                styleUrls: ['./article-list.component.scss'],
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }, { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }, { type: _article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/article.service.ts":
/*!************************************!*\
  !*** ./src/app/article.service.ts ***!
  \************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _mock_articles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-articles */ "./src/app/mock-articles.ts");




class ArticleService {
    constructor() { }
    getArticles() {
        const articles = _mock_articles__WEBPACK_IMPORTED_MODULE_2__["ARTICLES"];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(articles);
    }
    getArticle(key) {
        const articles = _mock_articles__WEBPACK_IMPORTED_MODULE_2__["ARTICLES"].filter((a) => a.key === key);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(articles[0]);
    }
}
ArticleService.ɵfac = function ArticleService_Factory(t) { return new (t || ArticleService)(); };
ArticleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArticleService, factory: ArticleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/article.ts":
/*!****************************!*\
  !*** ./src/app/article.ts ***!
  \****************************/
/*! exports provided: Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
class Article {
    constructor() {
        this.title = '';
        this.content = '';
        this.key = '';
        this.date = new Date();
        this.description = '';
        this.imageurl = '';
    }
}


/***/ }),

/***/ "./src/app/article/article.component.ts":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../article */ "./src/app/article.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../article.service */ "./src/app/article.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








class ArticleComponent {
    constructor(route, articleService, router, titleService, sharedService, meta) {
        this.route = route;
        this.articleService = articleService;
        this.router = router;
        this.titleService = titleService;
        this.sharedService = sharedService;
        this.meta = meta;
        this.article = new _article__WEBPACK_IMPORTED_MODULE_1__["Article"]();
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            const key = params.key;
            this.articleService.getArticle(key).subscribe((article) => {
                if (article === undefined) {
                    this.router.navigateByUrl('404');
                    return;
                }
                this.article = article;
                this.titleService.setTitle(`${this.sharedService.blogtitle}`);
                this.meta.addTags([
                    { name: 'description', content: this.article.description },
                    {
                        property: 'og:title',
                        content: `${this.article.title}-${this.sharedService.blogtitle}`,
                    },
                    { property: 'og:type', content: 'website' },
                    {
                        property: 'og:url',
                        content: this.sharedService.bseurl + this.article.key,
                    },
                    {
                        property: 'og:image',
                        content: this.article.imageurl,
                    },
                    {
                        property: 'og:description',
                        content: this.article.description,
                    },
                    {
                        property: 'og:site_name',
                        content: this.sharedService.blogtitle,
                    },
                ]);
            });
        });
    }
}
ArticleComponent.ɵfac = function ArticleComponent_Factory(t) { return new (t || ArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"])); };
ArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleComponent, selectors: [["app-article"]], decls: 9, vars: 6, consts: [[1, "article"], [1, "article-image"], [3, "src"], [1, "title"], [1, "meta-info"], [3, "innerHtml"]], template: function ArticleComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.article.imageurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.article.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, ctx.article.date), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.article.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".card[_ngcontent-%COMP%] {\r\n  border: 1px solid rgb(245, 8, 8);\r\n  border-radius: 4px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  padding: 15px;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n  font-size: 32px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  max-height: 200px;\r\n  background: #80b5c7;\r\n}\r\n\r\n.meta-info[_ngcontent-%COMP%] {\r\n  color: grey;\r\n  margin-top: -28px;\r\n  font-size: 14px;\r\n}\r\n\r\n.continue-reading[_ngcontent-%COMP%] {\r\n  font-style: italic;\r\n  color: grey;\r\n}\r\n\r\n.article[_ngcontent-%COMP%] {\r\n  max-width: 720px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.article-image[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-size: 57px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  line-height: 1.5em;\r\n  font-size: 21px;\r\n  background: #80b5c7;\r\n  padding: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjQ1LCA4LCA4KTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICM4MGI1Yzc7XHJcbn1cclxuXHJcbi5tZXRhLWluZm8ge1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIG1hcmdpbi10b3A6IC0yOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNvbnRpbnVlLXJlYWRpbmcge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuLmFydGljbGUge1xyXG4gIG1heC13aWR0aDogNzIwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5hcnRpY2xlLWltYWdlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiA1N3B4O1xyXG59XHJcbnAge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICBmb250LXNpemU6IDIxcHg7XHJcbiAgYmFja2dyb3VuZDogIzgwYjVjNztcclxuICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article',
                templateUrl: './article.component.html',
                styleUrls: ['./article.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }, { type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] }]; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A9 Soham_Banerjee\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0s6XFxnaXRodWJcXEJsb2dwb3N0L3NyY1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsInAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 30, vars: 0, consts: [[1, "heading"], [1, "img"], ["src", "https://image.flaticon.com/icons/svg/1085/1085808.svg"], [1, "card-body"], [1, "comm"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Welcome to Blogpost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Welcome to our website where you can post your writing and can share it effortlessly with the world!: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Visit our articles and go through them to have a nice time!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " you can provide us with suggestions on how to improve the functionality of our site! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " publish your articles anonymously as we only see content not the person behind it! ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "OUR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " SITE!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card[_ngcontent-%COMP%] {\r\n  border: 1px solid rgb(15, 123, 211);\r\n  border-radius: 4px;\r\n  margin-top: 15px;\r\n}\r\n.heading[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n.comm[_ngcontent-%COMP%] {\r\n  color: red;\r\n  padding: 30px;\r\n  text-align: center;\r\n}\r\n.card-body[_ngcontent-%COMP%] {\r\n  padding: 15px;\r\n  background: #80b5c7;\r\n}\r\nh3[_ngcontent-%COMP%] {\r\n  font-size: 32px;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n  max-height: 200px;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 50%;\r\n}\r\n.meta-info[_ngcontent-%COMP%] {\r\n  color: rgb(116, 28, 28);\r\n  margin-top: -28px;\r\n  font-size: 14px;\r\n}\r\n.continue-reading[_ngcontent-%COMP%] {\r\n  font-style: italic;\r\n  color: rgb(122, 33, 33);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE1LCAxMjMsIDIxMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuLmhlYWRpbmcge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29tbSB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICM4MGI1Yzc7XHJcbn1cclxuXHJcbmgzIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5tZXRhLWluZm8ge1xyXG4gIGNvbG9yOiByZ2IoMTE2LCAyOCwgMjgpO1xyXG4gIG1hcmdpbi10b3A6IC0yOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNvbnRpbnVlLXJlYWRpbmcge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBjb2xvcjogcmdiKDEyMiwgMzMsIDMzKTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/mock-articles.ts":
/*!**********************************!*\
  !*** ./src/app/mock-articles.ts ***!
  \**********************************/
/*! exports provided: ARTICLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLES", function() { return ARTICLES; });
const ARTICLES = [
    {
        id: 1,
        title: "It's me Banerjee",
        content: "<p>Hello All,</p><p>I’m Banerjee. I Code for change and do it cause it is the only thing i believe i can do!</p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        description: 'Get to know me a bit!',
        key: 'my-first-article',
        date: new Date(),
        imageurl: 'https://cdn0.iconfinder.com/data/icons/team-and-management-glyph/160/coding-team-512.png',
    },
    {
        id: 2,
        content: '<p> A spectre is haunting Europe — the spectre of communism. All the powers of old Europe have entered into a holy alliance to exorcise this spectre: Pope and Tsar, Metternich and Guizot, French Radicals and German police-spies.Where is the party in opposition that has not been decried as communistic by its opponents in power? </p> Where is the opposition that has not hurled back the branding reproach of communism, against the more advanced opposition parties, as well as against its reactionary adversaries?',
        title: 'Ideologies',
        description: 'views about the people and world',
        key: 'the-second-article',
        date: new Date(),
        imageurl: 'https://cdn0.iconfinder.com/data/icons/education-213/64/brain-mind-smart-think-intelligence-512.png',
    },
];


/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NavBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 11, vars: 0, consts: [[1, "title"], ["routerLink", ""], [1, "navbar"], ["routerLink", "/articles", 1, "nav-item"], ["routerLink", "/views", 1, "nav-item"], ["routerLink", "/about", 1, "nav-item"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Blogpost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Your Views");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".title[_ngcontent-%COMP%] {\n  font-size: 2em;\n  text-align: center;\n  border-bottom: 1px solid #003d99;\n  padding: 0.7rem;\n}\n\n.title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black !important;\n  text-decoration: none !important;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  text-align: center;\n  color: #0147a1;\n  background: #8ac5d8;\n  border-bottom: 1px solid #003d99;\n  padding: 0.5rem;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-decoration: none;\n  color: #681717;\n}\n\n.nav-item[_ngcontent-%COMP%]:visited, .nav-item[_ngcontent-%COMP%]:active, .nav-item[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  color: #641c1c;\n}\n\n.nav-item[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9LOlxcZ2l0aHViXFxCbG9ncG9zdC9zcmNcXGFwcFxcbmF2LWJhclxcbmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx1QkFBQTtFQUNBLGdDQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQ0E7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDRUY7O0FEQ0E7OztFQUdFLHFCQUFBO0VBQ0EsY0FBQTtBQ0VGOztBREFBO0VBQ0UsMEJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAzZDk5O1xyXG4gIHBhZGRpbmc6IDAuN3JlbTtcclxufVxyXG4udGl0bGUgYSB7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMDE0N2ExO1xyXG4gIGJhY2tncm91bmQ6ICM4YWM1ZDg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDNkOTk7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG4ubmF2LWl0ZW0ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjNjgxNzE3O1xyXG59XHJcblxyXG4ubmF2LWl0ZW06dmlzaXRlZCxcclxuLm5hdi1pdGVtOmFjdGl2ZSxcclxuLm5hdi1pdGVtOmZvY3VzIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICM2NDFjMWM7XHJcbn1cclxuLm5hdi1pdGVtOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4iLCIudGl0bGUge1xuICBmb250LXNpemU6IDJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwM2Q5OTtcbiAgcGFkZGluZzogMC43cmVtO1xufVxuXG4udGl0bGUgYSB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm5hdmJhciB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMTQ3YTE7XG4gIGJhY2tncm91bmQ6ICM4YWM1ZDg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAzZDk5O1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5uYXYtaXRlbSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM2ODE3MTc7XG59XG5cbi5uYXYtaXRlbTp2aXNpdGVkLFxuLm5hdi1pdGVtOmFjdGl2ZSxcbi5uYXYtaXRlbTpmb2N1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM2NDFjMWM7XG59XG5cbi5uYXYtaXRlbTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 4, vars: 0, consts: [["routerLink", "/articles"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The page doesn't exist!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back to articles!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared.service.ts":
/*!***********************************!*\
  !*** ./src/app/shared.service.ts ***!
  \***********************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SharedService {
    constructor() {
        this.blogtitle = 'Blogpost';
        this.bseurl = 'http://localhost:4200';
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(); };
SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/views.component.ts":
/*!******************************************!*\
  !*** ./src/app/views/views.component.ts ***!
  \******************************************/
/*! exports provided: ViewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsComponent", function() { return ViewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const _c0 = function () { return { standalone: true }; };
class ViewsComponent {
    constructor() {
        this.submitPayload = [];
        this.submitPayload1 = [];
    }
    ngOnInit() { }
}
ViewsComponent.ɵfac = function ViewsComponent_Factory(t) { return new (t || ViewsComponent)(); };
ViewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewsComponent, selectors: [["app-views"]], decls: 135, vars: 33, consts: [[1, "card"], ["for", "fname"], ["type", "text", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "lname"], ["for", "email"], ["for", "password"], ["type", "password", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "state"], [3, "ngModel", "ngModelOptions", "ngModelChange"], ["value", "Andhra Pradesh"], ["value", "Andaman and Nicobar Islands"], ["value", "Arunachal Pradesh"], ["value", "Assam"], ["value", "Bihar"], ["value", "Chandigarh"], ["value", "Chhattisgarh"], ["value", "Dadar and Nagar Haveli"], ["value", "Daman and Diu"], ["value", "Delhi"], ["value", "Lakshadweep"], ["value", "Puducherry"], ["value", "Goa"], ["value", "Gujarat"], ["value", "Haryana"], ["value", "Himachal Pradesh"], ["value", "Jammu and Kashmir"], ["value", "Jharkhand"], ["value", "Karnataka"], ["value", "Kerala"], ["value", "Madhya Pradesh"], ["value", "Maharashtra"], ["value", "Manipur"], ["value", "Meghalaya"], ["value", "Mizoram"], ["value", "Nagaland"], ["value", "Odisha"], ["value", "Punjab"], ["value", "Rajasthan"], ["value", "Sikkim"], ["value", "Tamil Nadu"], ["value", "Telangana"], ["value", "Tripura"], ["value", "Uttar Pradesh"], ["value", "Uttarakhand"], ["value", "West Bengal"], ["for", "Gender"], ["type", "radio", "value", "male", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "radio", "value", "female", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "radio", "value", "other", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "radio", "value", "chagol!", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "date"], ["type", "date", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "urviews"], ["type", "text", 2, "height", "200px", "width", "350px", "font-size", "14pt", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "submit"]], template: function ViewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "First name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewsComponent_Template_input_ngModelChange_5_listener($event) { return ctx.firstName1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Last name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewsComponent_Template_input_ngModelChange_10_listener($event) { return ctx.lastName1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewsComponent_Template_input_ngModelChange_15_listener($event) { return ctx.email1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewsComponent_Template_input_ngModelChange_20_listener($event) { return ctx.password1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Your State:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewsComponent_Template_select_ngModelChange_25_listener($event) { return ctx.state = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Andhra Pradesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Andaman and Nicobar Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Arunachal Pradesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Assam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Bihar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Chandigarh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Chhattisgarh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Dadar and Nagar Haveli");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Daman and Diu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Delhi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Lakshadweep");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Puducherry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Goa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Gujarat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Haryana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Himachal Pradesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Jammu and Kashmir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Jharkhand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Karnataka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Kerala");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Madhya Pradesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Maharashtra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Manipur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Meghalaya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Mizoram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Nagaland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Odisha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Punjab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Rajasthan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Sikkim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Tamil Nadu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Telangana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Tripura");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Uttar Pradesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Uttarakhand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "West Bengal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Your Gender:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewsComponent_Template_input_ngModelChange_103_listener($event) { return ctx.Gender = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewsComponent_Template_input_ngModelChange_107_listener($event) { return ctx.Gender = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewsComponent_Template_input_ngModelChange_111_listener($event) { return ctx.Gender = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewsComponent_Template_input_ngModelChange_115_listener($event) { return ctx.Gender = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Chagol!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Date of birth:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewsComponent_Template_input_ngModelChange_123_listener($event) { return ctx.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Your say regarding the website:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewsComponent_Template_input_ngModelChange_129_listener($event) { return ctx.urviews = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.firstName1)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lastName1)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email1)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password1)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.state)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Gender)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Gender)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Gender)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Gender)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.urviews)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"]], styles: ["o[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 800px;\n  font-family: arial, Arial, Helvetica, sans-serif;\n}\n\n.card[_ngcontent-%COMP%] {\n  max-width: 500px;\n  padding: 10px 20px;\n  background: #52d4ff;\n  margin: 10px auto;\n  padding: 20px;\n  background: #80b5c7;\n  border-radius: 8px;\n  font-family: arial, Arial, Helvetica, sans-serif;\n  text-align: center;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 15px;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-height: 200px;\n}\n\n.meta-info[_ngcontent-%COMP%] {\n  color: grey;\n  margin-top: -28px;\n  font-size: 14px;\n}\n\n.continue-reading[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvSzpcXGdpdGh1YlxcQmxvZ3Bvc3Qvc3JjXFxhcHBcXHZpZXdzXFx2aWV3cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3Mvdmlld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0RBQUE7QUNFRjs7QURBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEQUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQ0dGOztBREFBO0VBQ0UsZUFBQTtBQ0dGOztBREFBO0VBQ0UsaUJBQUE7QUNHRjs7QURBQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNHRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvdmlld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJvIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBmb250LWZhbWlseTogYXJpYWwsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmNhcmQge1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICM1MmQ0ZmY7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjODBiNWM3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LWZhbWlseTogYXJpYWwsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbmgzIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5tZXRhLWluZm8ge1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIG1hcmdpbi10b3A6IC0yOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNvbnRpbnVlLXJlYWRpbmcge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBjb2xvcjogZ3JleTtcclxufVxyXG4iLCJvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogODAwcHg7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLmNhcmQge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6ICM1MmQ0ZmY7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjODBiNWM3O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDMycHg7XG59XG5cbmltZyB7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xufVxuXG4ubWV0YS1pbmZvIHtcbiAgY29sb3I6IGdyZXk7XG4gIG1hcmdpbi10b3A6IC0yOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jb250aW51ZS1yZWFkaW5nIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogZ3JleTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-views',
                templateUrl: './views.component.html',
                styleUrls: ['./views.component.scss'],
            }]
    }], function () { return []; }, null); })();
function submitbnr() {
    var psd = '1';
    this.enc = crypto_js__WEBPACK_IMPORTED_MODULE_1__["DES"].encrypt(this.password1, psd);
    var dec = crypto_js__WEBPACK_IMPORTED_MODULE_1__["DES"].decrypt(this.enc, psd);
    let newdata = [];
    newdata = [
        {
            firstname1: this.firstName1,
            lastname1: this.lastName1,
            email1: this.email1,
            password1: this.enc,
            state: this.state,
            date: this.date,
            decrypted: dec,
            Gender: this.Gender,
        },
    ];
    this.submitPayload1.push(newdata);
    console.log(this.submitPayload1);
    // console.log(this.obj)
    alert('thank you for your records!');
}
function clearArray() {
    this.submitPayload = [];
    this.submitPayload1 = [];
    alert('Blank');
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! K:\github\Blogpost\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map