import { Component, OnInit } from '@angular/core';
import { ShareInformationService } from 'src/app/services/share-information.service';

@Component({
  selector: 'hbt-hijoshare1',
  templateUrl: './hijoshare1.component.html',
  styleUrls: ['./hijoshare1.component.css']
})
export class Hijoshare1Component implements OnInit {
  informationIn:String[]=[];
  constructor(private shareInfoService:ShareInformationService) { }

  ngOnInit() {
    this.shareInfoService.info$.subscribe(info=>this.informationIn=info);
  }

}
