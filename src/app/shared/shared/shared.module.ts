import { AppRoutingModule } from './../../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeSearchComponent } from '../poke-search/poke-search.component';
import { PokeListComponent } from '../poke-list/poke-list.component';
import { PokeHeaderComponent } from '../poke-header/poke-header.component';


@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeListComponent,
    PokeSearchComponent
  ],
  exports: [
    PokeHeaderComponent,
    PokeListComponent,
    PokeSearchComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
