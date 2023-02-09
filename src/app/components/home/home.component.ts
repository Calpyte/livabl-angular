import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menus:any =[
    {
      key:1,
      value:"Client"
    },
    {
      key:2,
      value:"Sub User"
    },
    {
      key:3,
      value:"Super Admin"
    }
  ]

  constructor(private router:Router) { }

  ngOnInit() {
  }
  selectedMenu=(key:any)=>{
     this.router.navigate(["/login"],{queryParams:{key:key}});
  }

}
