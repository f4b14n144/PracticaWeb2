import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { CourseService } from '../curso.service';

@Component({
  selector: 'app-list-courses',
  standalone: true,
  imports: [CommonModule],  // Add CommonModule to the imports array
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent {
  courses: any[] = [];

  constructor(private courseService: CourseService) {}


  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    this.courses = this.courseService.getCourses();
  }

  deleteCourse(index: number) {
    this.courseService.deleteCourse(index);
    this.loadCourses();
  }

  toggleDetails(index: number) {
    const details = document.getElementById(`details-${index}`);
    if (details?.style.display === "none") {
      details.style.display = "block";
    } else {
      details.style.display = "none";
    }
  }
}
