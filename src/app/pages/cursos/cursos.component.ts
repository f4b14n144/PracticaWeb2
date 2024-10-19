import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService,Course } from '../../course.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h1>Course Management</h1>
    <ul>
      <li *ngFor="let course of courses; let i = index">
        <h3>{{ course.courseName }}</h3>
        <p>Instructor: {{ course.instructorName }}</p>
        <p>Start Date: {{ course.startDate }}</p>
        <p>Duration: {{ course.duration }}</p>
        <div>
          <textarea [(ngModel)]="course.description" (blur)="updateCourseDescription(i, course.description)"></textarea>
        </div>
        <button (click)="deleteCourse(i)">Delete</button>
      </li>
    </ul>
  `,
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {
  courses: Course[] = [];
  private subscription: Subscription | undefined;

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.subscription = this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  deleteCourse(index: number) {
    this.courseService.deleteCourse(index);
  }

  updateCourseDescription(index: number, description: string) {
    this.courseService.updateCourseDescription(index, description);
  }
}