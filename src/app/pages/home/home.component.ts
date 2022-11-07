import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 0,
        transform: "translateX(500px)"
      })),
      state('closed', style({
        opacity: 1,
        transform: "translateX(0px)"
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.toggle()
    }, 1000);
  }
  isOpen = true;

  toggle() {
    this.isOpen = false
  }

}
