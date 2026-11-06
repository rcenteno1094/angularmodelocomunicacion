import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-cine-component',
  standalone: false,
  styleUrl: './cine-component.css',
  templateUrl: './cine-component.html',
})
export class CineComponent implements OnInit {
  arrPeliculas: Pelicula[] = [];

  constructor(private _cdr: ChangeDetectorRef) {}

  async ngOnInit(): Promise<void> {
    const res = await fetch('documents/cine.json');
    const data = await res.json();
    this.arrPeliculas = data.Peliculas.map(
      (e: Pelicula) =>
        new Pelicula(
          e.Titulo,
          e.Argumento,
          e.Fecha_Estreno,
          e.Director,
          e.Duracion,
          e.YouTube,
          e.Genero,
          e.Pais,
        ),
    );
    this._cdr.detectChanges();
  }
}
