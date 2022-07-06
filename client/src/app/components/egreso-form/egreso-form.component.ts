import { Component, OnInit } from '@angular/core';
import { Egreso } from 'src/app/models/Egreso';
import {FormControl,FormGroup} from '@angular/forms'

import { Router,ActivatedRoute } from '@angular/router';

import {CajasService} from '../../services/cajas.service';
import { Validacion } from 'src/app/models/validacion';

@Component({
  selector: 'app-egreso-form',
  templateUrl: './egreso-form.component.html',
  styleUrls: ['./egreso-form.component.css']
})
export class EgresoFormComponent implements OnInit {

  listaDoc: string[]=["Boleta","Factura"];

  egreso: Egreso = {
    id:0,
    tipo_documento:'',
    numero_documento: '',
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
    return(this.validador.numDoc.isValid() && this.validador.numNeto.isValid() && this.egreso.tipo_documento !='');
  }

  get calcularIva(){
    return(Number(this.validador.numNeto.val)*0.19);
  }
  get calcularTotal(){
    return(Number(this.validador.numNeto.val)*1.19);
  }

  edit: boolean = false;

  constructor(private cajasService: CajasService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activeRoute.snapshot.params;
    if(params['id']){
      this.cajasService.getOneEgreso(params['id']).subscribe(
        res=>{
          console.log(res);
          this.egreso = res;
          this.validador.numDoc.val = String(this.egreso.numero_documento);
          this.validador.numNeto.val = String(this.egreso.neto);
          this.edit = true;
        },
      );

    }
  }
  saveNewEgreso(){
    this.egreso.numero_documento = this.validador.numDoc.val;
    this.egreso.neto = Number(this.validador.numNeto.val);
    this.egreso.iva = this.calcularIva;
    this.egreso.total = this.calcularTotal;
    this.cajasService.saveEgreso(this.egreso).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/caja']);
      },
    );
  }
  updateEgreso(){
    this.egreso.numero_documento = this.validador.numDoc.val;
    this.egreso.neto = Number(this.validador.numNeto.val);
    this.egreso.iva = this.calcularIva;
    this.egreso.total = this.calcularTotal;
    this.cajasService.updateEgreso(this.egreso.id!,this.egreso).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/caja']);
      },
    );
  }

}
