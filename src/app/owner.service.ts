import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Owner } from './pets/owner';

@Injectable({
  providedIn: 'root',
})
export class OwnerService {
  apiUrl: string = 'http://localhost:3000/owner';

  constructor(private readonly http: HttpClient) {}

  getOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.apiUrl);
  }

  getOwner(id: number): Observable<Owner> {
    return this.http.get<Owner>(`${this.apiUrl}/${id}`);
  }

  updateOwner(owner: Owner): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${owner.id}`, owner);
  }

  deleteOwner(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  postOwner(owner: Owner): Observable<void> {
    return this.http.post<void>(this.apiUrl, owner);
  }
}
