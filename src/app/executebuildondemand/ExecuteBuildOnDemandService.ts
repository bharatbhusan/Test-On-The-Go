import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { map } from "rxjs/operators";

@Injectable()
export class ExecuteBuildOnDemandService {
    constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
        });
        // this.triggerBuild().subscribe(data => {
        // });
    }
    public getJSON(): Observable<any> {
        return this.http.get("./assets/TESTCASES.json");
    }

   public triggerBuild():Observable<any>
  {
    // var headers = new HttpHeaders();
    // headers.append('Access-Control-Allow-Origin','*');
    console.log('Triggering Jenkins Build');
     return this.http.get('http://localhost:3000/api/triggerJenkinsBuild');
    
  }
}