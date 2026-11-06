import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes-component',
  standalone: false,
  styleUrl: './padre-deportes-component.css',
  templateUrl: './padre-deportes-component.html',
})
export class PadreDeportesComponent {
  arrDeportes: string[] = ['Curling', 'Basket', 'Surf', 'Dardos', 'Fútbol'];
  msg!: string;
  seleccionarFavorito(data: string): void {
    this.msg = 'Su deporte favorito es: ' + data;
  }
}
