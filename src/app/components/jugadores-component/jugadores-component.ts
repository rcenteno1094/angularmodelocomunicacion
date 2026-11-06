import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Jugador } from '../../models/jugador';

@Component({
  selector: 'app-jugadores-component',
  standalone: false,
  styleUrl: './jugadores-component.css',
  templateUrl: './jugadores-component.html',
})
export class JugadoresComponent implements OnInit {
  arrJugadores: Jugador[] = [];
  constructor(private _cdr: ChangeDetectorRef) {}
  async handlePlayers(): Promise<void> {
    const res = await fetch('/documents/jugadores.json');
    const data = await res.json();
    data.forEach((e: Jugador) => {
      this.arrJugadores.push(new Jugador(e.jugador, e.imagen));
    });
    this._cdr.detectChanges();
    console.log(this.arrJugadores);
  }
  async ngOnInit(): Promise<void> {
    await this.handlePlayers();
  }
}
