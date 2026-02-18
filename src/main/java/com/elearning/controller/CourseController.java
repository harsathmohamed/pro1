package com.elearning.controller;

import com.elearning.entity.Course;
import com.elearning.service.CourseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @PostMapping("/create/{instructorId}")
    public Course createCourse(@PathVariable Long instructorId,
                               @RequestBody Course course) {
        return courseService.createCourse(instructorId, course);
    }

    @GetMapping
    public List<Course> getAllCourses() {
        return courseService.getAllCourses();
    }
}