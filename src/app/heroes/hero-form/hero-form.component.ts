import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../shared/hero-model';
import { HeroService } from '../shared/hero.service';

@Component({
  selector: 'app-heroes-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent implements OnInit {

  constructor(private heroService: HeroService){}

  powers = ['Really Smart', 'Super Flexiblr', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false ;

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  newHero() {
    this.model = new Hero(42,'', '');
  }


  heroes: Hero[] = [];

  ngOnInit(): void {
    this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes );
  }

}
