import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  genres: string[] = [
    'Love',
    'Loss',
    'Faith',
    'Abstract',
    'Personal',
    'Nature',
  ];

  constructor(private router: Router) {}

  goToGenre(genre: string) {
    this.router.navigate(['/poems'], {
      queryParams: { genre: genre.toLowerCase() },
    });
  }
}
