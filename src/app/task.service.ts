import {Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService{
  tasks: Task[] = [
    { id: 1, title: 'Finished Angular lab', completed: false },
    { id: 2, title: 'Review JavaScript concepts', completed: true }
  ];

  getTasks() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}