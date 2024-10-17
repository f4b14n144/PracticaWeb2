import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private storageKey = 'courses';

  getCourses() {
    const storedCourses = localStorage.getItem(this.storageKey);
    return storedCourses ? JSON.parse(storedCourses) : [];
  }

  addCourse(course: any) {
    const courses = this.getCourses();
    courses.push(course);
    localStorage.setItem(this.storageKey, JSON.stringify(courses));
  }

  updateCourses(courses: any[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(courses));
  }

  deleteCourse(index: number) {
    const courses = this.getCourses();
    courses.splice(index, 1);
    this.updateCourses(courses);
  }
}
