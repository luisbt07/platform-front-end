import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private router : Router) {}

  onLogin() {
    if (this.username === 'admin@gmail.com' && this.password === 'admin') {
      this.router.navigate(['/app/home'])
    } else {
      this.message = 'Login inválido! Verifique as informações e tente novamente.';
    }
  }
}
