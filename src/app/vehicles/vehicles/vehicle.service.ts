import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Film, Vehicle, VehicleResponse } from './vehicle';
import { Observable, catchError, filter, forkJoin, map, shareReplay, switchMap, throwError } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private url: string = 'https://swapi.py4e.com/api/vehicles';
  private readonly http = inject(HttpClient);

  private vehicles$ = this.http.get<VehicleResponse>(this.url).pipe(
    map((data) =>
      data.results.map((v) => ({
        ...v,
        cost_in_credits: isNaN(Number(v.cost_in_credits))
          ? String(Math.random() * 100000)
          : v.cost_in_credits,
      }) as Vehicle)
    ),
    shareReplay(1),
    catchError(this.handleError)
  )

  // Expose signals from this service
  vehicles = toSignal<Vehicle[], Vehicle[]>(this.vehicles$, { initialValue: [] });
  selectedVehicle = signal<Vehicle | undefined>(undefined);

  private vehicleFilms$ = toObservable(this.selectedVehicle).pipe(
    filter(Boolean),
    switchMap(vehicle =>
      forkJoin(vehicle.films.map(link =>
        this.http.get<Film>(link)))
    )
  );
  vehicleFilms = toSignal<Film[], Film[]>(this.vehicleFilms$, { initialValue: [] });

  vehicleSelected(vehicleName: string) {
    const foundVehicle = this.vehicles().find((v) => v.name === vehicleName);
    this.selectedVehicle.set(foundVehicle);
  }


  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message
        }`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
