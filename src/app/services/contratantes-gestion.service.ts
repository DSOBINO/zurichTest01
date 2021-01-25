import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContratantesGestionModel } from '../models/contratantes-gestion.model';

@Injectable({
  providedIn: 'root'
})
export class ContratantesGestionService {


  private url = 'http://200.185.49.145/launcher/api/middleware/2?method=ContratantesGestion&json=';

  constructor( private http: HttpClient ) { }

  crearContratantesGestion( contratanteGestion: ContratantesGestionModel )
  {
      contratanteGestion.tipoAccion = "2";
      var strBody = this.url + `{"usuarioApp":"user1","passApp":"User!123","id":"2","method":"ContratantesGestion","json":'{"ContratantesGestionRequest" : ${ JSON.stringify(contratanteGestion) } }'}`;

      const headers = { 'content-type': 'application/json'} ; 
      const body= strBody;

      console.log(strBody);

      return this.http.get<any>(body);
     

      //return this.http.post(`${ this.url }`, body, {'headers':headers} );


      //return this.http.post(`${ this.url }`, body, {'headers':headers} );

      /*
            this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
              this.totalAngularPackages = data.total;
          })        
      */
      
  }
}


/*
{"id":"2","method":"ContratantesGestion","json":'{"ContratantesGestionRequest" : {"tipoAccion":"3","ID":"2", "rut":"15633679", "campo1":"valor campo 111",  "campo2":"valor campo 2",  "campo3":"valor campo 3"}}'}
*/
