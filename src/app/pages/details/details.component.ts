import { PokemonServiceService } from './../../service/pokemon-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Location } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 0,
        transform: "translateX(-1000px)"
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
export class DetailsComponent implements OnInit {
  pokemons: any = []
  apiError: boolean = false;
  constructor(private actRoute: ActivatedRoute, private pokeService: PokemonServiceService, private location: Location) { }
  urlPokemon: string = "https://pokeapi.co/api/v2/pokemon"
  urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';
  ngOnInit(): void {
    setTimeout(() => {
      this.getPokemon()
      this.toggle()
    }, 1000);

  }


  getPokemon(){
    const id = this.actRoute.snapshot.params['id'];
    return forkJoin([this.pokeService.getUrlPoke(`${this.urlPokemon}/${id}`), this.pokeService.getUrlPoke(`${this.urlName}/${id}`)]).subscribe(res => {
      this.pokemons = res;
    },
    err => {
      this.apiError = true;
    })
  }
  isOpen = true;

  toggle() {
    this.isOpen = false
  }
  back(){
    this.isOpen = true
    setTimeout(() => {
      this.location.back();
    }, 1000);
  }
}
