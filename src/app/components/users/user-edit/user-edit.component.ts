import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {

  user: any[] = [];
  usuario: User = {
    dni: '',
    nombres: '',
    apellidos: '',
    edad: null,
    sexo: false,
    estado: 0,
    codigo: '',
    correoInstitucional : '',
    correoPersonal : '',
    escuelaId : '',
    telefonoCasa : '',
    telefonoMovil : '',
    direccion : '',
    imagenId: 'http://i63.tinypic.com/14xfdx4.jpg',
    contrasenia: ''
  };
  constructor( private usersService: UsersService,
               private activatedRoute: ActivatedRoute ) {

    this.activatedRoute.params.subscribe( params => {

      this.getUser( params['dni'] );

    });
  }

  ngOnInit() {

  }

  getUser( dni: string ) {

    this.usersService.getUser( dni )
    .subscribe( user => {
      console.log(user);
      this.user = user;
    });

  }

  mostrar() {
   console.log(this.user);
  }

  guardar() {
    console.log(this.usuario);

    this.usersService.newUser( this.usuario )
      .subscribe( data => {
      });
  }

}
