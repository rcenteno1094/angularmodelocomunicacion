import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-numero-component',
  standalone: false,
  styleUrl: './hijo-numero-component.css',
  templateUrl: './hijo-numero-component.html',
})
export class HijoNumeroComponent implements OnInit {
  @Input() numero!: number;
  @Output() handleCont: EventEmitter<any> = new EventEmitter();
  double!: number;
  ngOnInit(): void {
    this.double = this.numero * 2;
  }
  returnCont(): void {
    this.handleCont.emit(this.numero);
  }
}
