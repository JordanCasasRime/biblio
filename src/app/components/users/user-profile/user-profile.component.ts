import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {

  user: any[] = [];

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

}
