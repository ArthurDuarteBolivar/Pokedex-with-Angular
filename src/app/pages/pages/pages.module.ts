import { SharedModule } from './../../shared/shared/shared.module';
import { DetailsComponent } from './../details/details.component';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    DetailsComponent,
    HomeComponent
  ],
  exports: [
    DetailsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    SharedModule
  ]
})
export class PagesModule { }
