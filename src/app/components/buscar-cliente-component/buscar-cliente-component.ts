import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-buscar-cliente-component',
  standalone: false,
  styleUrl: './buscar-cliente-component.css',
  templateUrl: './buscar-cliente-component.html',
})
export class BuscarClienteComponent implements OnInit {
  @ViewChild('selectvalue') input!: ElementRef;
  cliente!: Cliente;
  arrCliente: Cliente[] = [];
  constructor(private _cdr: ChangeDetectorRef) {}

  async handleSearchBar(): Promise<void> {
    const res = await fetch('documents/clientesdatos.json');
    const data = await res.json();
    const arrCliente: Cliente[] = [];
    data.forEach((e: Cliente) => {
      arrCliente.push(new Cliente(e.idcliente, e.nombre, e.paginaweb, e.imagencliente));
    });
    let resultado = arrCliente.find((e: Cliente) => {
      return e.idcliente == Number(this.input.nativeElement.value);
    });
    if (resultado) this.cliente = resultado;
    this._cdr.detectChanges();
  }

  async ngOnInit(): Promise<void> {
    const res = await fetch('documents/clientesdatos.json');
    const data = await res.json();
    data.forEach((e: Cliente) => {
      this.arrCliente.push(new Cliente(e.idcliente, e.nombre, e.paginaweb, e.imagencliente));
    });
    this._cdr.detectChanges();
  }
}
