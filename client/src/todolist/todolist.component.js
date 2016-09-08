System.register(['ng2-ui-auth', '../formComponents/ngMessages', '@angular/router', '@angular/core', '@angular/forms'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ng2_ui_auth_1, ngMessages_1, router_1, core_1, forms_1;
    var TodolistComponent;
    return {
        setters:[
            function (ng2_ui_auth_1_1) {
                ng2_ui_auth_1 = ng2_ui_auth_1_1;
            },
            function (ngMessages_1_1) {
                ngMessages_1 = ngMessages_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            /**
             * Created by Merav on 23/08/2016.
             */
            TodolistComponent = (function () {
                function TodolistComponent(auth, router, element, renderer, fb, jwtHttp) {
                    this.auth = auth;
                    this.router = router;
                    this.element = element;
                    this.renderer = renderer;
                    this.fb = fb;
                    this.jwtHttp = jwtHttp;
                    this.addTaskUrl = '/api/helloWorld3';
                    this.delTaskUrl = '/api/helloWorld4';
                    this.getTaskUrl = '/api/helloWorld2';
                }
                TodolistComponent.prototype.back = function () {
                    this.router.navigate(['/main']);
                };
                TodolistComponent.prototype.addTodolist = function () {
                    var _this = this;
                    console.log(this.form.value);
                    this.jwtHttp.post(this.addTaskUrl, this.form.value).subscribe(function () {
                        return _this.getTasks();
                    });
                };
                TodolistComponent.prototype.deleteTask = function (index) {
                    var _this = this;
                    this.form.value.index = index;
                    console.log(this.form.value.index);
                    this.jwtHttp.post(this.delTaskUrl, this.form.value).subscribe(function () {
                        return _this.getTasks();
                    });
                };
                TodolistComponent.prototype.getTasks = function () {
                    var _this = this;
                    this.jwtHttp.get(this.getTaskUrl).map(function (response) { return response.json(); })
                        .subscribe(function (result) { return _this.tasks = result; });
                };
                TodolistComponent.prototype.ngAfterContentInit = function () {
                    this.renderer.setElementClass(this.element.nativeElement, 'app', true);
                };
                TodolistComponent.prototype.ngOnInit = function () {
                    this.getTasks();
                    this.form = this.fb.group({
                        tasks: new forms_1.FormControl(''),
                        index: new forms_1.FormControl(''),
                    });
                };
                TodolistComponent = __decorate([
                    core_1.Component({
                        selector: 'app-todolist',
                        templateUrl: './src/todolist/todolist.html',
                        directives: [ngMessages_1.NgMessages, router_1.ROUTER_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [ng2_ui_auth_1.Auth, router_1.Router, core_1.ElementRef, core_1.Renderer, forms_1.FormBuilder, ng2_ui_auth_1.JwtHttp])
                ], TodolistComponent);
                return TodolistComponent;
            }());
            exports_1("TodolistComponent", TodolistComponent);
        }
    }
});
//# sourceMappingURL=todolist.component.js.map