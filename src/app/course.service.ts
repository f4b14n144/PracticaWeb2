import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Course {
  courseName: string;
  instructorName: string;
  startDate: string;
  duration: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses: Course[] = [];
  private coursesSubject = new BehaviorSubject<Course[]>([]);

  getCourses(): Observable<Course[]> {
    return this.coursesSubject.asObservable();
  }

  addCourse(course: Course) {
    this.courses.push(course);
    this.coursesSubject.next([...this.courses]);
  }

  deleteCourse(index: number) {
    this.courses.splice(index, 1);
    this.coursesSubject.next([...this.courses]);
  }

  updateCourseDescription(index: number, newDescription: string) {
    if (index >= 0 && index < this.courses.length) {
      this.courses[index].description = newDescription;
      this.coursesSubject.next([...this.courses]);
    }
  }
}