import { Component, OnInit } from '@angular/core';
import { ShareInformationService } from 'src/app/services/share-information.service';

@Component({
  selector: 'hbt-share-information',
  templateUrl: './share-information.component.html',
  styleUrls: ['./share-information.component.css']
})
export class ShareInformationComponent implements OnInit {

  info:String[]=["parametro1 desde padre","parametro2 desde padre"];
  
    constructor(private shareService:ShareInformationService) { }
  
    ngOnInit() {
    }
  
    sendInformation(){
      this.shareService.sendInfo(this.info);
    }
}
