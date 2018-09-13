import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'hbt-hijo3',
  templateUrl: './hijo3.component.html',
  styleUrls: ['./hijo3.component.css']
})
export class Hijo3Component implements OnInit {

  id:String;
  info:any;
  constructor(private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(resolve =>{
      console.log("resolve", resolve)
      this.info = resolve.post;
    })
  
    this.route.paramMap.subscribe((params: ParamMap) => {
        //console.log(params.has('id'));
        console.log("id params:", params.get('id'));
        this.id = params.get('id')
    });
  }

}
