import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private api:ApiService,private router:Router) {}
  name=""
  sdata:any=[]
readValue=()=>
{
  let data =
  {
    "name":this.name
  }
  console.log(data)
  this.api.readValue(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if(response.length==0)
      {
         alert("no data")
      }
      else {

        this.sdata=response

      }
    }
  )
}

deleteBtnClick=(id:any)=>
{
  let data:any={
    "id":id
  }
    this.api.deleteEmployee(data).subscribe(
      (generated:any)=>
      {
        console.log(generated)
        if(generated.status == "success")
        {
          alert("Employee Deleted")
          this.router.navigate(["/view"])
        }
        else{
          alert("error")
        }
      }
    )
    
     
         
}


}
