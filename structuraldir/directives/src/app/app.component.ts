import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  // users:string[]=["Jonn","Sathya","Peter"];
  users:any[]=[
    {id:101,name:'john',city:'Delhi'},
    {id:102,name:'peter',city:'Narpala'},
    {id:103,name:'Hari',city:'Don'},
    {id:104,name:'Samsom',city:'Delhi'},
    {id:105,name:'wick',city:'Delhi'},
    {id:106,name:'john',city:'Delhi'},
  ]


  // See Changes in NgIf t/f
  isUserLoggedIn:boolean=true;


  scountry:any;
  countries:any[]=[
    {code:'ind',country:'India'},
    {code:'uae',country:'United Arab Emirates'},
    {code:'uk',country:'United Kingdom'},
    {code:'d',country:'420'},
  ];

  choice(code: any){
    this.scountry=code;
    
  }
}
