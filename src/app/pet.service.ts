import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from './pets/pet';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  apiUrl: string = 'http://localhost:3000/pet';

  constructor(private readonly http: HttpClient) {}

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.apiUrl);
  }

  getPet(id: number): Observable<Pet> {
    return this.http.get<Pet>(`${this.apiUrl}/${id}`);
  }

  deletePet(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updatePet(pet: Pet): Observable<Pet>{
    return this.http.put<Pet>(`${this.apiUrl}/${pet.id}`, pet);
  }

  postPet(pet: Pet): Observable<void>{
    return this.http.post<void>(this.apiUrl, pet)
  }
}
