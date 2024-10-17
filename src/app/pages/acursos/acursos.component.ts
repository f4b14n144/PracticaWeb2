import { Component } from '@angular/core';
import { CourseService } from '../../curso.service'; 

@Component({
  selector: 'app-acursos',
  standalone: true,
  imports: [],
  templateUrl: './acursos.component.html',
  styleUrls: ['./acursos.component.css'],
})
export class AcursosComponent {
  constructor(private courseService: CourseService) {}

  // Method to handle course submission
  addCourse(course: { courseName: string, instructorName: string, startDate: string, duration: string, description: string }) {
    this.courseService.addCourse(course);
    alert('Curso añadido correctamente.');
  }
}
