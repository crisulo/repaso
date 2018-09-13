import { Component, OnInit } from '@angular/core';
import { ShareInformationService } from 'src/app/services/share-information.service';

@Component({
  selector: 'hbt-hijoshare2',
  templateUrl: './hijoshare2.component.html',
  styleUrls: ['./hijoshare2.component.css']
})
export class Hijoshare2Component implements OnInit {

  informationIn:String[]=[];
  constructor(private shareInfoService:ShareInformationService) { }

  ngOnInit() {
    this.shareInfoService.info$.subscribe(info=>this.informationIn=info);
  }

}
