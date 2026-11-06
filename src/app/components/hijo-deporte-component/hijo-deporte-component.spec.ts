import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HijoDeporteComponent } from './hijo-deporte-component';

describe('HijoDeportesComponent', () => {
  let component: HijoDeporteComponent;
  let fixture: ComponentFixture<HijoDeporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HijoDeporteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HijoDeporteComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
