import {Auth, JwtHttp} from 'ng2-ui-auth';
import {NgMessages} from '../formComponents/ngMessages';
import {EmailValidator} from '../formComponents/customValidators';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {Component, Renderer, AfterContentInit, OnInit, ElementRef} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';


/**
 * Created by Merav on 23/08/2016.
 */

@Component({
    selector: 'app-todolist',
    templateUrl: './src/todolist/todolist.html',
    directives: [NgMessages, ROUTER_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
})
export class TodolistComponent implements AfterContentInit, OnInit {
    form: FormGroup;
    tasks: Observable<string[]>;
    private addTaskUrl = '/api/helloWorld3';  
    private delTaskUrl = '/api/helloWorld4';   
    private getTaskUrl = '/api/helloWorld2'; 

back(){
 this.router.navigate(['/main']);
}

addTodolist() {
      console.log(this.form.value);
     this.jwtHttp.post(this.addTaskUrl,this.form.value).subscribe(() => 
            this.getTasks());        
}

deleteTask(index){
    this.form.value.index=index;
    console.log( this.form.value.index);
     this.jwtHttp.post(this.delTaskUrl,this.form.value).subscribe(() => 
            this.getTasks());        
}

getTasks(){
    this.jwtHttp.get(this.getTaskUrl).map((response) => response.json())
                .subscribe(result => this.tasks=result);
}

 ngAfterContentInit(): any {
        this.renderer.setElementClass(this.element.nativeElement, 'app', true);
 }

ngOnInit() {
     this.getTasks();
     this.form = this.fb.group({
          tasks: new FormControl(''),
          index: new FormControl(''),
          });
}

constructor(private auth: Auth,
                private router: Router,
                private element: ElementRef,
                private renderer: Renderer,
                private fb: FormBuilder,
                private jwtHttp: JwtHttp)  { } 

}