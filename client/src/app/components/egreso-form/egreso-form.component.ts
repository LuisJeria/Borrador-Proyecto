import { Component, OnInit } from '@angular/core';
import { Egreso } from 'src/app/models/Egreso';

import { Router,ActivatedRoute } from '@angular/router';

import {CajasService} from '../../services/cajas.service';

@Component({
  selector: 'app-egreso-form',
  templateUrl: './egreso-form.component.html',
  styleUrls: ['./egreso-form.component.css']
})
export class EgresoFormComponent implements OnInit {

  egreso: Egreso = {
    id:0,
    tipo_documento:'',
    numero_documento: '',
    neto: 0,
    iva: 0,
    total:0
  };

  edit: boolean = false;

  constructor(private cajasService: CajasService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activeRoute.snapshot.params;
    if(params['id']){
      this.cajasService.getOneEgreso(params['id']).subscribe(
        res=>{
          console.log(res);
          this.egreso = res;
          this.edit = true;
        },
      );

    }
  }
  saveNewEgreso(){
    this.cajasService.saveEgreso(this.egreso).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/caja']);
      },
    );
  }
  updateEgreso(){
    this.cajasService.updateEgreso(this.egreso.id!,this.egreso).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/caja']);
      },
    );
  }

}
