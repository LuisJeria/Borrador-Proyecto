import { Component, OnInit } from '@angular/core';
import { Ingreso } from 'src/app/models/Ingreso';

import {CajasService} from '../../services/cajas.service';

@Component({
  selector: 'app-caja-list',
  templateUrl: './caja-list.component.html',
  styleUrls: ['./caja-list.component.css']
})
export class CajaListComponent implements OnInit {

  ingresos : any = [];
  egresos : any = [];
 

  constructor(private cajasService: CajasService) { }

  ngOnInit(): void {
    this.getCaja();
  }

  getCaja(){
    this.cajasService.getIngresos().subscribe(
      res=> {
        this.ingresos = res;
      }
    );
    
    this.cajasService.getEgresos().subscribe(
      res=> {
        this.egresos = res;
      }
    );
  }

  deleteIngreso(id: string){
    this.cajasService.deleteIngreso(id).subscribe(
      res=>{
        console.log(res);
        this.getCaja();
      },
    );
  }
  editIngreso(id: string){
    
  }

}
