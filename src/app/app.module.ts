import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { TodosModule } from 'src/app/todos/todos.module';
import { TodoService } from './todos/shared/todo.service';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodosModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
