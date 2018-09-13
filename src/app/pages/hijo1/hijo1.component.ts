import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hbt-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css']
})
export class Hijo1Component implements OnInit {

  info:[any];
  usuarios:[{id:String,name:String}];
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(resolve =>{
      console.log("resolve", resolve)
      this.info = resolve.post;})
  }

  getUserById(id){    
    this.router.navigate(['pag4/hijo3',id]);
  }
}
