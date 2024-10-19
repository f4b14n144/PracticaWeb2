import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseService,Course } from '../../course.service';

@Component({
  selector: 'app-acursos',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form (ngSubmit)="addCourse()">
      <input [(ngModel)]="newCourse.courseName" name="courseName" placeholder="Course Name" required>
      <input [(ngModel)]="newCourse.instructorName" name="instructorName" placeholder="Instructor Name" required>
      <input [(ngModel)]="newCourse.startDate" name="startDate" type="date" required>
      <input [(ngModel)]="newCourse.duration" name="duration" placeholder="Duration" required>
      <textarea [(ngModel)]="newCourse.description" name="description" placeholder="Description" required></textarea>
      <button type="submit">Add Course</button>
    </form>
  `,
  styleUrls: ['./acursos.component.css']
})
export class AcursosComponent {
  newCourse: Course = {
    courseName: '',
    instructorName: '',
    startDate: '',
    duration: '',
    description: ''
  };

  constructor(private courseService: CourseService) {}

  addCourse() {
    if (this.isFormValid()) {
      this.courseService.addCourse({ ...this.newCourse });
      this.resetForm();
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }

  private isFormValid(): boolean {
    return Object.values(this.newCourse).every(value => value.trim() !== '');
  }

  private resetForm() {
    this.newCourse = {
      courseName: '',
      instructorName: '',
      startDate: '',
      duration: '',
      description: ''
    };
  }
}