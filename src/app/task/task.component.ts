import { Component, OnInit } from '@angular/core';
import { TodoStoreService, Todo } from './service/todo-store.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  todoStore: TodoStoreService;
  newTodo = {
    title:'',
    dueDate:'',
    priority:'',
  };
  constructor(todoStore: TodoStoreService) {
    this.todoStore=todoStore;
   }

  ngOnInit() {
  }
  stopEditing(todo: Todo, editedTitle: string) {
		todo.title = editedTitle;
		todo.editing = false;
	}

	cancelEditingTodo(todo: Todo) {
		todo.editing = false;
	}

	updateEditingTodo(todo: Todo, editedTitle: string) {
		editedTitle = editedTitle.trim();
		todo.editing = false;

		if (editedTitle.length === 0) {
			return this.todoStore.remove(todo);
		}

		todo.title = editedTitle;
	}

	editTodo(todo: Todo) {
		todo.editing = true;
	}

	removeCompleted() {
		this.todoStore.removeCompleted();
	}

	toggleCompletion(todo: Todo) {
		this.todoStore.toggleCompletion(todo);
	}

	remove(todo: Todo){
		this.todoStore.remove(todo);
	}

	addTodo() {
    if (this.newTodo.title.trim().length) {
      this.todoStore.add(this.newTodo.title,this.newTodo.dueDate,this.newTodo.priority);
			this.newTodo = {
        title:'',
        dueDate:'',
        priority:'',
      };
		}
	}

}
