import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router:Router) { }

  selectedMenu:any;

  ngOnInit() {
    this.route.queryParams.subscribe((data:any)=>{
      this.selectedMenu = data?.key;
    })
  }
  login=()=>{
    if(this.selectedMenu == 1){
      this.router.navigate(['client']);
    }else{
      this.router.navigate(['home']);
    }
  }

}
