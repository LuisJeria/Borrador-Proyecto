import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import{Ingreso} from '../models/Ingreso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CajasService {

  API_URI = 'http://localhost:3030/api/caja'

  constructor(private http: HttpClient) { 

  }

  getIngresos(){
    return this.http.get(`${this.API_URI}/ingreso`);
  }

  getOneIngreso(id: string){
    return this.http.get(`${this.API_URI}/ingreso/${id}`);
  }

  deleteIngreso(id: string){
    return this.http.delete(`${this.API_URI}/ingreso/${id}`);
  }

  updateIngreso(id:string | number,updatedIngreso: Ingreso): Observable<Ingreso>{
    return this.http.put(`${this.API_URI}/ingreso/${id}`, updatedIngreso);
  }

  saveIngreso(ingreso: Ingreso){
    return this.http.post(`${this.API_URI}/ingreso`, ingreso);
  }
  getEgresos(){
    return this.http.get(`${this.API_URI}/egreso`);
  }

  getOneEgreso(id: string){
    return this.http.get(`${this.API_URI}/egreso/${id}`);
  }
  deleteEgreso(id: string){
    return this.http.delete(`${this.API_URI}/egreso/${id}`);
  }

  updateEgreso(id:string,updatedIngreso: Ingreso): Observable<Ingreso>{
    return this.http.put(`${this.API_URI}/egreso`, updatedIngreso);
  }

  saveEgreso(ingreso: Ingreso){
    return this.http.post(`${this.API_URI}/egreso`, ingreso);
  }
}
