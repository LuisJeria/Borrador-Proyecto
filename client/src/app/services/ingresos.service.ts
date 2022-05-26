import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {

  API_URI = 'http://localhost:3030/api/caja'

  constructor(private http: HttpClient) { 

  }

  getIngresos(){
    return this.http.get(`${this.API_URI}/ingreso`);
  }

  getOneIngreso(id: string){
    return this.http.get(`${this.API_URI}/ingreso/${id}`);
  }
}
