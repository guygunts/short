import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as shortHash from "shorthash2";
import  {appService} from "./app.service"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

// urlForm: FormGroup;
original=[]
public myreg = /^((https?):\/\/)?([w|W]{3}\.)?[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/
url = new FormControl('', [Validators.required, Validators.pattern(this.myreg)]);
 constructor(private app: appService) {
   
 }

 markTouched() {
   this.url.markAsTouched();
   this.url.updateValueAndValidity();
 }
 
 submit() {
   let short=shortHash(this.url.value)
   let str=this.url.value.search('http')
   
   if(str==0){
     this.url.value
   }else{
     this.url.setValue('http://'+this.url.value)
   }
   let datajson={
     short:short,
     original:this.url.value
   }
   this.original.push('http://localhost:4200/'+short)
  this.app.insertshort(datajson)

 }

}
