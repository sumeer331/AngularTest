import { Component } from '@angular/core';
import {MyServiceService} from "../../../myang1/src/app/my-service.service";
import {MyserviceService} from "./myservice.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular1';
  imgList:any;
  compareList : any[] = [];
  tab = false;
  constructor(private getService: MyserviceService) {
  }
  ngOnInit(){
    this.getService.getData().subscribe((data:any[]) => {
      this.imgList = data;
      let addText = {toggle:false,txt:"Compare"};
      this.imgList = this.imgList.map((img:any)=> {
        return Object.assign(img,addText);
      });
    //  this.tableList.push(this.list.filter((img:any) => img.id <10));

      // this.list =[1,2,3]
    })
  }
  addImage(id:any,index:any) {
    let imgObj:any;
    imgObj = this.imgList.filter((img:any) => img.id == id);
    if(imgObj[0].toggle == false){
      imgObj[0].txt="Remove" ;
      imgObj[0].toggle = true;
      this.imgList.slice(index,1,imgObj[0]);
      this.compareList = this.compareList.concat(imgObj);

    }
    else{
      imgObj[0].txt="Compare" ;
      imgObj[0].toggle = false;
      this.imgList.slice(index,1,imgObj[0]);

      this.compareList = this.compareList.filter((img) => img.id != id);

    }


    if(this.compareList.length >0){
       this.tab = true;

     }
     else {
       this.tab = false;
     }
  }
   // console.log(document.getElementById("cmp_rem_1"));
   //getImage(img,id){
    //return img.id==id;
 // }
}
