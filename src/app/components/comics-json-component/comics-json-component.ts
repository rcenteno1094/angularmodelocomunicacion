import { ChangeDetectorRef, Component } from '@angular/core';
import { Comic } from '../../models/comic';
@Component({
  selector: 'app-comics-json-component',
  standalone: false,
  styleUrl: './comics-json-component.css',
  templateUrl: './comics-json-component.html',
})
export class ComicsJsonComponent {
  arrComics: Comic[] = [];

  constructor(private _cdr: ChangeDetectorRef) {}

  async mostrarComics(): Promise<void> {
    const res = await fetch('documents/comic.json');
    const data = await res.json();
    data.forEach((e: Comic) => {
      this.arrComics.push(new Comic(e.titulo, e.imagen, e.descripcion));
    });
    this._cdr.detectChanges();
  }
}
