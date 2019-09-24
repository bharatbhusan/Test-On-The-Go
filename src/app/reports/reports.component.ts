import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  data:any;
  showGraph = false;
  defectRetestResult=false;
  defectCreatedDisplay = false;
  constructor() { 
  
  this.data = {
    labels: ['PASS','FAIL'],
    datasets: [
        {
            data: [4,1],
            backgroundColor: [
                "#008000",
                "#8B0000"
            ]
            // ],
            // hoverBackgroundColor: [
            //   "#008000",
            //   "#8B0000"
            // ]
        }]    
    };
    
}
  ngOnInit() {
    
  }
  
  showReport(event:any)
  {
    this.showGraph=false;
    this.defectRetestResult=true;
  }
  createDefect(event:any)
  {
    this.defectCreatedDisplay=true;
  }
}
