import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {
  bio = 'Passionate 3rd-year Information Technology student specializing in Web Development. Driven by creating sleek, modern UI/UX design systems and writing clean backend architectures.';

  // 3 Technical Categories (Fulfills Pre-Lab requirement)
  techCategories = [
    {
      category: 'Languages',
      items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'PHP', 'Python', 'Java']
    },
    {
      category: 'Tools & Platforms',
      items: ['Git & GitHub', 'VS Code', 'Node.js', 'npm', 'Claude AI', 'Google Gemini', 'MongoDB / Atlas', 'MySQL']
    }
  ];

  interests = [
    'Volleyball',
    'Online Games',
    'Music',
    'Eating',
    'Web Designing',
    'Video Editing',
    'Movies'
  ];
}
