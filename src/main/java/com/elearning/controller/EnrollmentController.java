package com.elearning.controller;

import com.elearning.entity.Enrollment;
import com.elearning.service.EnrollmentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/enrollments")
public class EnrollmentController {

    private final EnrollmentService enrollmentService;

    public EnrollmentController(EnrollmentService enrollmentService) {
        this.enrollmentService = enrollmentService;
    }

    @PostMapping("/enroll/{studentId}/{courseId}")
    public Enrollment enrollStudent(@PathVariable Long studentId,
                                    @PathVariable Long courseId) {
        return enrollmentService.enrollStudent(studentId, courseId);
    }

    @GetMapping("/student/{studentId}")
    public List<Enrollment> getStudentEnrollments(@PathVariable Long studentId) {
        return enrollmentService.getStudentEnrollments(studentId);
    }
}