import { Component } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  friends: User[] = [];

  constructor() {
    const usuario1: User = {
      nick: 'breiner',
      subNick: 'suarezn',
      age: 25,
      email: 'wando@hotmail.com',
      friend: true,
      uid: 1
    };
    const usuario2: User = {
      nick: 'henrry',
      subNick: 'cocolizo',
      age: 18,
      email: 'kbask@hotmail.com',
      friend: true,
      uid: 2
    };
    const usuario3: User = {
      nick: 'alfredo',
      subNick: 'beto',
      age: 25,
      email: 'fwwe@hotmail.com',
      friend: true,
      uid: 3
    };
    const usuario4: User = {
      nick: 'manuel',
      subNick: 'mañe',
      age: 25,
      email: 'fgdf@hotmail.com',
      friend: true,
      uid: 4
    };
    const usuario5: User = {
      nick: 'andres',
      subNick: 'menu',
      age: 25,
      email: 'jhkh@hotmail.com',
      friend: true,
      uid: 5
    };
    this.friends = [usuario1, usuario2, usuario3, usuario4, usuario5];
  }
}
