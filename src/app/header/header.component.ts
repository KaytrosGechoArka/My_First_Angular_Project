import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  slogan:string='Your one stop for everything.'
  getSlogan(){
    return this.slogan
  }
  source:string='./assets/shopping.jfif'
}
