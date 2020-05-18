import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTarjetaComponent } from './hero-tarjeta.component';

describe('HeroTarjetaComponent', () => {
  let component: HeroTarjetaComponent;
  let fixture: ComponentFixture<HeroTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
