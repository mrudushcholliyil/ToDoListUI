import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import {Router, RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { TodoService } from './shared/todo.service';
import {HttpClientModule} from '@angular/common/http';
import { MainComponent } from './main/main.component';

const routes : Routes=[
  {
    path:'',
    component : TodosComponent
  }
]

@NgModule({
  declarations: [
    TodosComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoService]
})
export class TodosModule { }
