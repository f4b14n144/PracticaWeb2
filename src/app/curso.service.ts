import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private storageKey = 'courses';

  // Retrieve courses from localStorage
  getCourses(): any[] {
    const courses = localStorage.getItem(this.storageKey);
    return courses ? JSON.parse(courses) : [];
  }

  // Save a new course to localStorage
  addCourse(course: { courseName: string, instructorName: string, startDate: string, duration: string, description: string }): void {
    const courses = this.getCourses();
    courses.push(course);
    localStorage.setItem(this.storageKey, JSON.stringify(courses));
  }
}
