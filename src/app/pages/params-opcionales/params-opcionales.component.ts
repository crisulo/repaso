import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'hbt-params-opcionales',
  templateUrl: './params-opcionales.component.html',
  styleUrls: ['./params-opcionales.component.css']
})
export class ParamsOpcionalesComponent implements OnInit {

//  params: {keyName: string, value: string}[] = [];
params:String=" ";
  constructor(  private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      //this.params = params.keys.map(key => ({keyName: key, value: params.get(key)}))
      this.params=params.get('nombre');
    })

  }

}
