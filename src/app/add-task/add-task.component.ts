import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Task } from '../task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  imports: [FormsModule],
  standalone: true
})
export class AddTaskComponent {
  title: string = '';
  @Output() newTask = new EventEmitter<string>();

  addTask() {
    if (this.title.trim()) {
      this.newTask.emit(this.title.trim()); // Emit just the string
      this.title = ''; // Clear input after emitting
    }
  }
}

