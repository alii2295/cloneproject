import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Annonce } from '../model/annonce';
import { HttpHeaders } from '@angular/common/http';
//decorateur 
@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  private baseurl = 'http://localhost:3000/annonces';//API 192;66;90;1

  constructor(private http: HttpClient) { }

  createAnnonce(annonce: any): Observable<Annonce> {
    return this.http.post<Annonce>(this.baseurl, annonce);
  }
  
  getListeAnnonces(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.baseurl);
  }

  getAnnonce(id: string): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(`${this.baseurl}?id=${id}`);
  }

  getAnnonceByMatricule(matricule: string): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(`${this.baseurl}?matricule=${matricule}`);
  }

  updateAnnonce(annonce: Annonce,id:string): Observable<Annonce> {
    return this.http.put<Annonce>(`${this.baseurl}/${id}`, annonce);
  }

  deleteAnnonce(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseurl}/${id}`);
  }
 /* rechercheAnnoncebymodel(model:string): Observable<Annonce[]> {
    const filter=`{"where":{"model":{"like":"${model}%}}}`;
    const params = new HttpParams().set('filter',filter);
    return this.http.get<Annonce[]>(this.baseurl,Option:{params});
  }*/
    searchAnnonces(query: string): Observable<Annonce[]> {
      const params = new HttpParams().set('q', query); // Assurez-vous que le paramètre correspond à ce que l'API attend
      return this.http.get<Annonce[]>(`${this.baseurl}`, { params });
    }

}
