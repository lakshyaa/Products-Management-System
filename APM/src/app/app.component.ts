
import {Component} from '@angular/core'
@Component({

  selector:'pm-root',
  template:
  `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" >{{pageTitle}}</a>
  <ul class="navbar-nav">
      <li class="nav-item active">
        <a [routerLink]="['/welcome']" class="nav-link" >Home </a>
       </li>
      <li class="nav-item xactive">
      <a [routerLink]="['/products']" class="nav-link" >Product List</a>
    </li>
    </ul>
  </nav>
  <div class='container'>
  <router-outlet></router-outlet>
  </div>`
   })


export class AppComponent
{
   title:string='hello';
  pageTitle:string=' Acme Product Management';
}