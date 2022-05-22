import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
  list: Item[] = [];
  public todoItem: Item=new Item();
  readonly baseURL='https://localhost:29921/api/ToDoItem';
  

  addToDoItem()
  {
    alert(this.todoItem.name);    
    return this.http.post(this.baseURL+"/AddToDoItem",this.todoItem);
  }

  updateListItem()
  {
    return this.http.put(this.baseURL+"/UpdateToDoItem",this.todoItem);
  }

  deleteListItem(itemId: number)
  {
    return this.http.delete(this.baseURL+"/DeleteToDoItem/"+ itemId);
  }

  refreshList()
  {
    this.http.get(this.baseURL+"/GetLists")
    .subscribe(res=>{    
    this.list = res as Item[];
   });
  }

}
