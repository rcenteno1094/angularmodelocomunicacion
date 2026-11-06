import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-padre-numeros-component',
  standalone: false,
  styleUrl: './padre-numeros-component.css',
  templateUrl: './padre-numeros-component.html',
})
export class PadreNumerosComponent {
  arrNum: number[] = [5, 9, 1, 10, 14];
  cont: number = 0;
  @ViewChild('inputnum') inputnum!: ElementRef;
  handleNum(): void {
    const num = this.inputnum.nativeElement.value * 1;
    this.arrNum.push(num);
  }
  handleCont(num: number): void {
    this.cont += num;
  }
}
