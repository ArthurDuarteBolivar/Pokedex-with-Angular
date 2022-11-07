import { slideInAnimation } from './pages/animation/animations';
import { ChildrenOutletContexts, RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app-component.html',
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'pokedex';

  constructor(private contexts: ChildrenOutletContexts) {   }

  getRouteAnimationData(){
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
