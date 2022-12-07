import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  name=""
  age=""
  mobno=""
  address=""
  constructor(private api:ApiService) {}

  addpateint=()=>
  {
    let data:any={"name":this.name,"age":this.age,"mobno":this.mobno,"address":this.address}
    console.log(data)
    this.api.addpateint(data).subscribe(
      (response:any)=>
      {
        console.log(response)
      }
    )
  }

}
