import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-libreria-component',
  standalone: false,
  styleUrl: './libreria-component.css',
  templateUrl: './libreria-component.html',
})
export class LibreriaComponent implements OnInit {
  arrComics: Comic[] = [];
  constructor(private _cdr: ChangeDetectorRef) {}
  async ngOnInit(): Promise<void> {
    const res = await fetch('documents/comic.json');
    const data = await res.json();
    this.arrComics = data.map((e: Comic) => new Comic(e.titulo, e.imagen, e.descripcion));
    this._cdr.detectChanges();
  }
}
