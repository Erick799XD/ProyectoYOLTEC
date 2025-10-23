import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  activeTab: string = 'student';
  
  studentData = {
    controlNumber: '',
    nip: ''
  };

  doctorData = {
    username: '',
    password: ''
  };

  constructor(private router: Router) {}

  onStudentLogin() {
    // Sin validación por ahora - redirige directamente
    console.log('Datos estudiante:', this.studentData);
    this.router.navigate(['/student-dashboard']);
  }

  onDoctorLogin() {
    // Sin validación por ahora - redirige directamente
    console.log('Datos doctor:', this.doctorData);
    this.router.navigate(['/doctor-dashboard']);
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
