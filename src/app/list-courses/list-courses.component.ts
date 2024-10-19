import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Course } from '../course.service';

@Component({
  selector: 'app-list-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <ul>
      <li *ngFor="let course of courses; let i = index">
        <h3>{{ course.courseName }}</h3>
        <p>Instructor: {{ course.instructorName }}</p>
        <p>Start Date: {{ course.startDate }}</p>
        <p>Duration: {{ course.duration }}</p>
        <div>
          <textarea [(ngModel)]="course.description" (blur)="onUpdateDescription(i, course.description)"></textarea>
        </div>
        <button (click)="onDeleteCourse(i)">Delete</button>
      </li>
    </ul>
  `,
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent {
  @Input() courses: Course[] = [];
  @Output() deleteCourse = new EventEmitter<number>();
  @Output() updateDescription = new EventEmitter<{ index: number, description: string }>();

  onDeleteCourse(index: number) {
    this.deleteCourse.emit(index);
  }

  onUpdateDescription(index: number, description: string) {
    this.updateDescription.emit({ index, description });
  }
}