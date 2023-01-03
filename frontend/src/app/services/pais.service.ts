import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/operators'

import { Pais } from '../models/pais.model'; 

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  readonly URL_API = 'http://localhost:5000/pais'
  constructor(private http: HttpClient) { }

  postPais(data: Pais) {
    return this.http.post(this.URL_API, data)
  }

  getPais() {
    return this.http.get(this.URL_API)
  }

  patchPais(data: Pais) {
    return this.http.patch(this.URL_API+`/${data._id}`, data)
  }

  deletePais(data: Pais) {
    return this.http.delete(this.URL_API+`/${data._id}`)
  }

}
