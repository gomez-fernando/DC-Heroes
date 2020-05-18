import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-tarjeta',
  templateUrl: './hero-tarjeta.component.html',
  styleUrls: ['./hero-tarjeta.component.css'],
})
export class HeroTarjetaComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {}

  verHeroe() {
    // console.log(this.index);
    this.router.navigate(['/hero', this.index]);
    // this.heroeSeleccionado.emit(this.index);
  }
}
