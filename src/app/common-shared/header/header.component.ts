import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() menu:any;
  @Input() user:any;
  menus:any = [];

  client_menus:any = [
    {
      name:"Measure",
      link:"client/measure"
    },
    {
      name:"Reduce",
      link:"client/measure"
    },
    {
      name:"Offset",
      link:"client/measure"
    },
    {
      name:"Dashboard",
      link:"client/dashboard"
    }
  ]
  user_menus:any = [
    {
      name:"Mea",
      link:"client/measure"
    },
    {
      name:"Reducdfge",
      link:"client/measure"
    },
    {
      name:"dfg",
      link:"client/measure"
    },
    {
      name:"dfg",
      link:"client/dashboard"
    }
  ]
  constructor(private router:Router) { }

  ngOnInit() {
    if(!this.user) this.user = "PR"
    switch(this.menu){
      case "client" : this.menus = this.client_menus; break;
      case "user" :this.menus = this.user_menus;break;
    }
  }
  selectedLink=(link:any)=>{
    this.router.navigate([link]);
  }

}
