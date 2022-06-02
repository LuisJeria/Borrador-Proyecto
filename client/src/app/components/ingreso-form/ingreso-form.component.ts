import { Component, OnInit } from '@angular/core';
import { Ingreso } from 'src/app/models/Ingreso';

import {Router,ActivatedRoute} from '@angular/router';

import {CajasService} from '../../services/cajas.service'

@Component({
  selector: 'app-ingreso-form',
  templateUrl: './ingreso-form.component.html',
  styleUrls: ['./ingreso-form.component.css']
})
export class IngresoFormComponent implements OnInit {

  
  ingreso: Ingreso = {
    id:0,
    tipo_documento:'',
    numero_documento: '',
    neto: 0,
    iva: 0,
    total:0
  };

  edit: boolean = false;

  constructor(private cajasService: CajasService, private router: Router, private activeRoute: ActivatedRoute) {

   }

  ngOnInit(): void {
    const params = this.activeRoute.snapshot.params;
    if(params['id']){
      this.cajasService.getOneIngreso(params['id']).subscribe(
        res=>{
          console.log(res);
          this.ingreso = res;
          this.edit = true;
        },
      );

    }
  }

  saveNewIngreso(){
    this.cajasService.saveIngreso(this.ingreso).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/caja']);
      },
    );
  }
  updateIngreso(){
    this.cajasService.updateIngreso(this.ingreso.id!,this.ingreso).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/caja']);
      },
    );
  }

}
