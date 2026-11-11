
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  cardTitle = 'My Personal Profile';

  description = `Good day! This is my Profile Card, created using Angular, HTML, and CSS. It displays my personal information, key skills, and technical proficiencies.

I used Angular interpolation to display the information dynamically. For the design, I chose a dark background with neon green accents to give it a modern and professional appearance.

I also added hover effects and responsive styling to make the profile card more interactive and user-friendly.

That's all for my Profile Card. Thank you!`;

 clickCount = 0;

  onClickMe() {
    this.clickCount++;
  }
}
