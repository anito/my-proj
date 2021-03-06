import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <h2>{{heroes.name}} details!</h2>
      <div>
        <label>id: </label>{{heroes.id}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="heroes.name" placeholder="name">
      </div>
      <ul class="heroes">
        <li *ngFor="let hero of heroes">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
      `
})

export class AppComponent {
  title = 'Tour Of Heroes';
  public heroes = HEROES;
}

export class Hero {
  id: number;
  name: string;
}

var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Mr. Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
]

