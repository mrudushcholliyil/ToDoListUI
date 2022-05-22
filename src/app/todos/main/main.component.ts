import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent implements OnInit {

  constructor(public service:TodoService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  updateItem(val : Item)
  {
  this.service.todoItem=val;
  this.service.updateListItem();
  this.service.refreshList();
  }

  onDelete(val : Item)
  {    
    this.service.deleteListItem(val.listId);
    this.service.refreshList();
  }

  populateForm(val : Item)
  {    
      
    this.service.todoItem.isCompleted=val.isCompleted;
    this.service.todoItem.name=val.name;
    this.service.todoItem.listId=val.listId;

    this.resetForm();
    
  }

  resetForm(): void  
  {  
    
  this.service.todoItem.isCompleted=false;
  this.service.todoItem.name='';
  this.service.todoItem.listId=0;
  }

}
