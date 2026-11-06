import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-hijo-deporte-component',
  standalone: false,
  styleUrl: './hijo-deporte-component.css',
  templateUrl: './hijo-deporte-component.html',
})
export class HijoDeporteComponent {
  @Input() sport!: string;
  seleccionarFavorito = output<string>();
  mostrarFavorito(): void {
    this.seleccionarFavorito.emit(this.sport);
  }
}
