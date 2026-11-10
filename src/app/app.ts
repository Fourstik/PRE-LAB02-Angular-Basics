import { Component } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'Rich Cristoff C. Incognito';
  motto = 'Sharp • Polished • Brilliant';
  location = 'Mabalacat, Pampanga';
  email = 'rccincognito@gmail.com';
  phone = '0915 713 1301';

  profile = 'I am a 3rd year web development student in Holy Angel University. I am generally interested in technology as a whole, but I have decided to embark on a journey in designing and developing systems that are both visually appealing and user-friendly. My goal is to master modern frameworks, write clean and maintainable code, and build intuitive digital experiences that solve real-world problems.';

  skills = [
    'HTML5 & CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Responsive Design',
    'Git & GitHub',
    'UI/UX Prototyping',
    'Communication',
    'Team Leading'
  ];

  technicalCategories = [
    { name: 'Frontend Languages', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript'] },
    { name: 'Frameworks & Libraries', items: ['Angular', 'Bootstrap'] },
    { name: 'Tools & Workflow', items: ['Git', 'GitHub', 'VS Code', 'npm'] }
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
