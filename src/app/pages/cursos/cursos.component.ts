import { Component } from '@angular/core';
import { ListCoursesComponent } from '../../list-courses/list-courses.component';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [ListCoursesComponent],
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {}
