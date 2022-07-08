import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../models/Ingreso';
import { Pedido } from '../models/Pedido';

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.css']
})
export class PedidosListComponent implements OnInit {

  listaDoc: string[]=["Bebida","Cerveza","Lomo a lo Pobre","Pescado a la Plancha"];

  listaNueva: string[]=["Boleta","Factura"];

  acumulador: number = 0;
  acumulador1: number = 0;
  acumulador2: number = 0;
  acumulador3: number = 0;
  total: number = 0;

  doc: string='';

  ingreso: Ingreso = {
    id:0,
    tipo_documento:'',
    numero_documento:'',
    neto: 0,
    iva: 0,
    total:0
  };
 

  pedido: Pedido = {
    id:0,
    tipo:'',
    valorNeto: 0,
    cantidad:0,  
  };
  pedido1: Pedido = {
    id:0,
    tipo:'',
    valorNeto: 0,
    cantidad:0,  
  };
  pedido2: Pedido = {
    id:0,
    tipo:'',
    valorNeto: 0,
    cantidad:0,  
  };
  pedido3: Pedido = {
    id:0,
    tipo:'',
    valorNeto: 0,
    cantidad:0,  
  };

  validaCantidadPedido = {
    val:'',
    error:'Debe ingresar un numero de documento válido',
    isValid(){
      const patron = /^[0-9]*$/;
      return (patron.test(this.val) && this.val.length > 0);
    }
  }
  validaCantidadPedido1 = {
    val:'',
    error:'Debe ingresar un numero de documento válido',
    isValid(){
      const patron = /^[0-9]*$/;
      return (patron.test(this.val) && this.val.length > 0);
    }
  }
  validaCantidadPedido2 = {
    val:'',
    error:'Debe ingresar un numero de documento válido',
    isValid(){
      const patron = /^[0-9]*$/;
      return (patron.test(this.val) && this.val.length > 0);
    }
  }
  validaCantidadPedido3 = {
    val:'',
    error:'Debe ingresar un numero de documento válido',
    isValid(){
      const patron = /^[0-9]*$/;
      return (patron.test(this.val) && this.val.length > 0);
    }
  }
  cajasService: any;

Counter(i: number) {
    return new Array(i);
}

CalculaIva(){
    return(this.total*0.19);
}
CalculaTotal(){
  return(this.total*1.19);
}

SumaCuenta(){
  this.total=this.acumulador+this.acumulador1+this.acumulador2+this.acumulador3;
  return(this.total);
}


CalculaCuenta(){
  
    if(this.pedido.tipo =='Bebida'){
        this.acumulador=(Number(this.validaCantidadPedido.val)*1000);
        return(Number(this.validaCantidadPedido.val)*1000);
    }else if (this.pedido.tipo =='Cerveza') {
      this.acumulador=(Number(this.validaCantidadPedido.val)*3000);
        return(Number(this.validaCantidadPedido.val)*3000); 
    } else if(this.pedido.tipo =='Lomo a lo Pobre'){
      this.acumulador=(Number(this.validaCantidadPedido.val)*9000);
        return(Number(this.validaCantidadPedido.val)*9000); 
    } else if(this.pedido.tipo =='Pescado a la Plancha'){
      this.acumulador=(Number(this.validaCantidadPedido.val)*7500);
        return(Number(this.validaCantidadPedido.val)*7500); 
    }else{
      return(0);
    }
}
CalculaCuenta1(){
  
  if(this.pedido1.tipo =='Bebida'){
    this.acumulador1=(Number(this.validaCantidadPedido1.val)*1000);
      return(Number(this.validaCantidadPedido1.val)*1000);
  }else if (this.pedido1.tipo =='Cerveza') {
    this.acumulador1=(Number(this.validaCantidadPedido1.val)*3000);
      return(Number(this.validaCantidadPedido1.val)*3000); 
  } else if(this.pedido1.tipo =='Lomo a lo Pobre'){
      this.acumulador1=(Number(this.validaCantidadPedido1.val)*9000);
      return(Number(this.validaCantidadPedido1.val)*9000); 
  } else if(this.pedido1.tipo =='Pescado a la Plancha'){
      this.acumulador1=(Number(this.validaCantidadPedido1.val)*7500);
      return(Number(this.validaCantidadPedido1.val)*7500); 
  }else{
    return(0);
  }
}
CalculaCuenta2(){
  
  if(this.pedido2.tipo =='Bebida'){
    this.acumulador2=(Number(this.validaCantidadPedido2.val)*1000);
      return(Number(this.validaCantidadPedido2.val)*1000);
  }else if (this.pedido2.tipo =='Cerveza') {
    this.acumulador2=(Number(this.validaCantidadPedido2.val)*3000);
      return(Number(this.validaCantidadPedido2.val)*3000); 
  } else if(this.pedido2.tipo =='Lomo a lo Pobre'){
    this.acumulador2=(Number(this.validaCantidadPedido2.val)*9000);
      return(Number(this.validaCantidadPedido2.val)*9000); 
  } else if(this.pedido2.tipo =='Pescado a la Plancha'){
    this.acumulador2=(Number(this.validaCantidadPedido2.val)*7500);
      return(Number(this.validaCantidadPedido2.val)*7500); 
  }else{
    return(0);
  }
}
CalculaCuenta3(){
  
  if(this.pedido3.tipo =='Bebida'){
      this.acumulador3=(Number(this.validaCantidadPedido3.val)*1000);
      return(Number(this.validaCantidadPedido3.val)*1000);
  }else if (this.pedido3.tipo =='Cerveza') {
      this.acumulador3=(Number(this.validaCantidadPedido3.val)*3000);
      return(Number(this.validaCantidadPedido3.val)*3000); 
  } else if(this.pedido3.tipo =='Lomo a lo Pobre'){
      this.acumulador3=(Number(this.validaCantidadPedido3.val)*9000);
      return(Number(this.validaCantidadPedido3.val)*9000); 
  } else if(this.pedido3.tipo =='Pescado a la Plancha'){
      this.acumulador3=(Number(this.validaCantidadPedido3.val)*7500);
      return(Number(this.validaCantidadPedido3.val)*7500); 
  }else{
    return(0);
  }
}


  constructor() { 

  }

  ngOnInit(): void {
  }
  saveNewPedido(){
    
  }

}
