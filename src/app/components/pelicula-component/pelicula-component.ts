import { Component, Input } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pelicula-component',
  standalone: false,
  styleUrl: './pelicula-component.css',
  templateUrl: './pelicula-component.html',
})
export class PeliculaComponent {
  @Input() pelicula!: Pelicula;
  @Input() index!: number;
  constructor(private sanitizer: DomSanitizer) {}

  get youtubeUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + this.pelicula.YouTube,
    );
  }
}
