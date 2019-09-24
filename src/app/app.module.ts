import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'primeng/chart';

import {HttpClientModule}  from '@angular/common/http';
import {ScrollPanelModule} from 'primeng/scrollpanel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { ReportsComponent } from './reports/reports.component';
import { ExecutebuildondemandComponent } from './executebuildondemand/executebuildondemand.component';
import { LogonComponent } from './logon/logon.component';
import {PanelModule} from 'primeng/panel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FormsModule} from "@angular/forms"
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {MultiSelectModule} from 'primeng/multiselect';
import {DialogModule} from 'primeng/dialog';
import { ExecuteBuildOnDemandService } from './executebuildondemand/ExecuteBuildOnDemandService';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    DashboardComponent,
    TasksComponent,
    ReportsComponent,
    ExecutebuildondemandComponent,
    LogonComponent
  ],
  imports: [
    InputTextareaModule,
    ScrollPanelModule,
    MultiSelectModule,
    InputTextModule,
    BrowserModule,
    DialogModule,
    ChartModule,
    FormsModule,
    ButtonModule,
    AppRoutingModule,
    PanelModule,
    BrowserAnimationsModule,
    DropdownModule,
    HttpClientModule 
  ],
  providers: [ExecuteBuildOnDemandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
