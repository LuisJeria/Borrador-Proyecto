import { Component, OnInit } from '@angular/core';
import { Ingreso } from 'src/app/models/Ingreso';

import {Router,ActivatedRoute} from '@angular/router';

import {CajasService} from '../../services/cajas.service';
import { Validacion } from 'src/app/models/validacion';

@Component({
  selector: 'app-ingreso-form',
  templateUrl: './ingreso-form.component.html',
  styleUrls: ['./ingreso-form.component.css']
})
export class IngresoFormComponent implements OnInit {



    listaDoc: string[]=["Boleta","Factura"];

    ingreso: Ingreso = {
    id:0,
    tipo_documento:'',
    numero_documento:'',
    neto: 0,
    iva: 0,
    total:0
  };

  validador: Validacion = {

    numDoc:{
      val:'',
      error:'Debe ingresar un numero de documento válido',
      isValid(){
        const patron = /^[0-9]*$/;
        return (patron.test(this.val) && this.val.length > 0);
      }
    },
    numNeto:{
      val:'',
      error:'Debe ingresar valor válido',
      isValid(){
        const patron = /^[0-9]*$/;
        return (patron.test(this.val) && this.val.length > 0);
      }
    }
  };

   get isValidForm(){
    return(this.validador.numDoc.isValid() && this.validador.numNeto.isValid() && this.ingreso.tipo_documento !='');
  }

  get calcularIva(){
    return(Number(this.validador.numNeto.val)*0.19);
  }
  get calcularTotal(){
    return(Number(this.validador.numNeto.val)*1.19);
  }

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
          this.validador.numDoc.val = String(this.ingreso.numero_documento);
          this.validador.numNeto.val = String(this.ingreso.neto);
          this.edit = true;
        },
      );

    }
  }

  saveNewIngreso(){
    this.ingreso.numero_documento = this.validador.numDoc.val;
    this.ingreso.neto = Number(this.validador.numNeto.val);
    this.ingreso.iva = this.calcularIva;
    this.ingreso.total = this.calcularTotal;
    this.cajasService.saveIngreso(this.ingreso).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/caja']);
      },
    );
  }
  updateIngreso(){
    this.ingreso.numero_documento = this.validador.numDoc.val;
    this.ingreso.neto = Number(this.validador.numNeto.val);
    this.ingreso.iva = this.calcularIva;
    this.ingreso.total = this.calcularTotal;
    this.cajasService.updateIngreso(this.ingreso.id!,this.ingreso).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/caja']);
      },
    );
  }

}
