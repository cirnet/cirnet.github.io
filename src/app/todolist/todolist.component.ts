import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  todos:Todo[]=[];
  newTodo:string;

  saveTodo(){
    if(this.newTodo){
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted=true;
      this.todos.push(todo);
      this.newTodo='';
    }
    else{
      alert('Alert!!!!!!!!!!!!!!!!!');
    }
  }

  done(id:number){
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }

  remove(id:number){
    this.todos=this.todos.filter((v,i)=> i !== id);

  }
}
