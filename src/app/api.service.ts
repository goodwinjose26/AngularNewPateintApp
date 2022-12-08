import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http:HttpClient) { }
  addpateint=(datatosend:any)=>
  {
    return this.http.post("http://localhost:8080/add",datatosend)
  }
  viewpateint =()=>
  {
    return this.http.get("http://localhost:8080/view")
  }
  
  readValue=(datatosend:any)=>
  {
    return this.http.post("http://localhost:8080/search",datatosend)
  }
  deletePateint=(datatosend:any)=>
  {
    return this.http.post("http://localhost:8080/delete",datatosend)
  }
}
