import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor,CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  TodoForm!: FormGroup;
  todoItems: { text: string, completed: boolean }[] = [];
 
  ngOnInit() {
    this.TodoForm = new FormGroup({
      text: new FormControl(''),
    });
  }
 
  submit() {
    if (this.TodoForm.valid) {
      this.todoItems.push({ text: this.TodoForm.value.text, completed: false });
      console.log(this.TodoForm.value);
      this.TodoForm.reset();
    }
  }
 
  toggleCompleted(index: number) {
    this.todoItems[index].completed = !this.todoItems[index].completed;
  }
  deleteItem(index: number) {
    this.todoItems.splice(index, 1);
  }
}
