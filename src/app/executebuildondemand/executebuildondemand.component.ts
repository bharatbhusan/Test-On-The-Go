import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {ExecuteBuildOnDemandService} from './ExecuteBuildOnDemandService';
interface suitetype
{
  typeOfSuit :string
}

interface testenv {
  name: string;
  code: string;
}

@Component({
  selector: 'app-executebuildondemand',
  templateUrl: './executebuildondemand.component.html',
  styleUrls: ['./executebuildondemandd.component.css'],
  providers:[ExecuteBuildOnDemandService]
})
export class ExecutebuildondemandComponent implements OnInit {
  constructor(private executeBuildOnDemandService:ExecuteBuildOnDemandService){}
 
  buildItemNumber:any;
  retestDisplay=false;
  scheduleNowDisplay=false;
  test_envs: SelectItem[];
  test_suite_types: SelectItem[];
  test_cases :SelectItem[];
  test_areas : SelectItem[];
  testcasesdata : any[];
  defectID:any;

  selectedenvironment: any = {name:''};
    selectedSuitType : any={name:''};
    selectedTestArea:any;
    selectedTestCase:any;



  ngOnInit() {
    this.executeBuildOnDemandService.getJSON().subscribe(data => {
      this.testcasesdata = data;
      console.log(this.testcasesdata);
    });
    this.test_envs = [
      {label:'Select',value:{id:'', name: '', code: ''}},
      {label:'Test 01', value:{id:1, name: 'Test 01', code: 'tst01'}},
      {label:'Test 02', value:{id:2, name: 'Test 02', code: 'tst02'}},
      {label:'Test 03', value:{id:3, name: 'Test 03', code: 'tst03'}},
      {label:'Test 04', value:{id:4, name: 'Test 04', code: 'tst04'}},
      {label:'Test 05', value:{id:5, name: 'Test 05', code: 'tst05'}},
      {label:'Final Stage', value:{id:4, name: 'Final Stage', code: 'finalstage'}},
      {label:'Production', value:{id:4, name: 'Production', code: 'production'}}

      
  ];

  this.test_suite_types = [
    {label:'Select',value:{id:'', name: '', code: ''}},
    {label:'Sanity', value:{id:1, name: 'SANITY', code: 'sanity'}},
    {label:'Regression', value:{id:2, name: 'REGRESSION', code: 'regression'}},
    {label:'Progression', value:{id:3, name: 'PROGRESSION', code: 'progression'}},
    {label:'Defect Retest',value:{id:4,name: 'DEFECT RETEST',code:'defect_retest'}}
];


this.test_areas = [
  {label:'Select',value:{id:'', name: '', code: ''}},
  {label:'Wireline Consumer', value:{id:1, name: 'Wireline Consumer', code: 'cde-hs'}},
  {label:'Wireline SMB', value:{id:2, name: 'Wireline SMB', code: 'smb-wireline'}},
  {label:'Wireless Consumer', value:{id:3, name: 'Wireless Consumer', code: 'wls'}}
 

  
];
  
  }

  populateTestCases(event:any){
    let tcases = [];
    if(this.selectedTestArea && this.selectedSuitType){
      this.testcasesdata['testCases'].forEach((test)=>{
        if(test.testArea== this.selectedTestArea.name && test.suiteType==this.selectedSuitType['name']){
          tcases.push({label:test.testCaseName,value:test.testCaseName})
        }
      });
      this.test_cases = tcases;
    }
  }

  scheduleNow(event:any){
    this.scheduleNowDisplay=true;
    this.executeBuildOnDemandService.triggerBuild()
    .subscribe(data => {
      this.testcasesdata = data;
      console.log(this.testcasesdata);
   });
   
  }

  retest(){
    this.retestDisplay = true;
  }


}
