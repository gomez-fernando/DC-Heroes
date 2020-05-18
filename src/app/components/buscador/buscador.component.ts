import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [],
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  search: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // console.log(params['search']);
      this.search = params['search'];
      this.heroes = this.heroesService.searchHeroes(params['search']);
      console.log(this.heroes.length);
    });
  }
}
