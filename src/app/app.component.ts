import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `  <app-poke-header></app-poke-header>
  <router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'pokedex';
}
