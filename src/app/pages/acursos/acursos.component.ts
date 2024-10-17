import { Component } from '@angular/core';
import { CourseService } from '../../curso.service';

@Component({
  selector: 'app-acursos',
  standalone: true,
  templateUrl: './acursos.component.html',
  styleUrls: ['./acursos.component.css']
})
export class AcursosComponent {
  constructor(private courseService: CourseService) {}

  addCourse(courseName: string, instructorName: string, startDate: string, duration: string, description: string) {
    if (!courseName || !instructorName || !startDate || !duration || !description) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const newCourse = {
      courseName,
      instructorName,
      startDate,
      duration,
      description
    };

    this.courseService.addCourse(newCourse);
    alert('Curso añadido correctamente.');
  }
}
