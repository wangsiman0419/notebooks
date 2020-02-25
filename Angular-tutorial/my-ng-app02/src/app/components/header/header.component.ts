import { Component, OnInit } from '@angular/core';
import cartList from './data';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public msg:string='hello world';
  public checked:boolean=true;
  public cartList:any=cartList;
  constructor() {
    
   }
  ngOnInit() {
    console.log(1)
  }
  inputChange(){
    console.log(this.checked)
  }
  
}
