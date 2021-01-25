
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { ContratantesGestionModel } from '../../models/contratantes-gestion.model';
import { ContratantesGestionService } from '../../services/contratantes-gestion.service';

//import Swal from 'sweetalert2';

@Component({
  selector: 'app-contratante-gestion',
  templateUrl: './contratante-gestion.component.html',
  styleUrls: ['./contratante-gestion.component.css']
})
export class ContratanteGestionComponent implements OnInit {

  contratantesGestion: ContratantesGestionModel = new ContratantesGestionModel();


  constructor( private contratantesGestionService: ContratantesGestionService,
               private route: ActivatedRoute ) { }

  ngOnInit() {
/*
    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo' ) {

      this.heroesService.getHeroe( id )
        .subscribe( (resp: HeroeModel) => {
          this.heroe = resp;
          this.heroe.id = id;
        });

    }
*/
  }

  guardar( form: NgForm ) {

    if ( form.invalid ) {
      console.log('Formulario no válido');
      return;
    }

    this.contratantesGestionService.crearContratantesGestion(this.contratantesGestion)
    .subscribe(resp=> {
      console.log(resp);
    });
  }

/*

  guardar( form: NgForm ) {



    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      type: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();


    let peticion: Observable<any>;

    if ( this.heroe.id ) {
      peticion = this.heroesService.actualizarHeroe( this.heroe );
    } else {
      peticion = this.heroesService.crearHeroe( this.heroe );
    }

    peticion.subscribe( resp => {

      Swal.fire({
        title: this.heroe.nombre,
        text: 'Se actualizó correctamente',
        type: 'success'
      });

    });



  }
*/

}

