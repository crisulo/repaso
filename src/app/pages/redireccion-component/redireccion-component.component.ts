import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hbt-redireccion-component',
  templateUrl: './redireccion-component.component.html',
  styleUrls: ['./redireccion-component.component.css']
})
export class RedireccionComponentComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe();
  }

  goHome(){
    this.router.navigate(['/home']);
  }

  goPag1(id){
    this.router.navigate(['/pag1', id]);
  }

  goPag3(){
    this.router.navigate(['/pag3',{nombre:"juan",edad:25}]);
  }
}
