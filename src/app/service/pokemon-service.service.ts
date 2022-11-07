import { Poke, Result } from './../interfaces/poke';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, take, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PokemonServiceService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';

  constructor(
    private http: HttpClient
  ) { }

get getPokeApi(): Observable<any>{
  return this.http.get<any>(this.url).pipe(
    tap(res => res),
    tap((res) => res.results.map((response: any) => {
      this.getUrlPoke(response.url).subscribe(res =>
        response.status = res)
    }))
  )
}

getUrlPoke(url: string): Observable<any>{
  return this.http.get<any>(url).pipe(
    map(res => res)
  )
}
}
