import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item.model';
import { TodoService } from '../shared/todo.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  inputText: string='';
  constructor(public service:TodoService) { }

  ngOnInit(): void {
    this.service.refreshList();
    
  }

  addToDoItem(): void {     
    this.service.addToDoItem();
    this.service.refreshList();
    this.resetForm();
  }

  resetForm(): void  
  {  
    
  this.service.todoItem.isCompleted=false;
  this.service.todoItem.name='';
  this.service.todoItem.listId=0;
  }



}
