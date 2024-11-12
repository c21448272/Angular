import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskComponent } from "../task/task.component";;

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  imports: [TaskComponent, CommonModule, AddTaskComponent],
  standalone: true
})
export class TaskListComponent {
  tasks: string[] = []; // Ensure it's an array of strings
  
  addTask(task: string) {
    if (task) {
      this.tasks.push(task); // Add new task as a string
    }
  }
}
