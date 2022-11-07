import { tap, map } from 'rxjs';
import { PokemonServiceService } from './../../service/pokemon-service.service';
import { HttpClient } from '@angular/common/http';
import { Poke, Result } from './../../interfaces/poke';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  pokemons: any = []
  isClose: boolean = true
  constructor(private http: HttpClient, private pokemonService: PokemonServiceService) { }

  @Output() newItemEvent = new EventEmitter<boolean>();

ngOnInit(): void {
  this.getPokeService()
  }

  getPokeService(){
    this.pokemonService.getPokeApi.subscribe(res => {
      this.pokemons = res.results
    })

  }
  getSearch(value: string){
    const filter = this.pokemons.filter( (res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    })
    if(value){
      this.pokemons = filter}
      else{
      this.getPokeService()
    }
  }
  statusClosed() {
    this.newItemEvent.emit(this.isClose);
  }

}


