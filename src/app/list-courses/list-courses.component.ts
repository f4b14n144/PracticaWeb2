import { Component } from '@angular/core';
import { CourseService } from '../curso.service'; 

@Component({
  selector: 'app-list-courses',
  standalone: true,
  imports: [],
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css'],
})
export class ListCoursesComponent {
  courses: any[] = [];

  constructor(private courseService: CourseService) {
    this.courses = this.courseService.getCourses();
  }
}
