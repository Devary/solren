import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DataTablesModule} from "angular-datatables";


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    DataTablesModule
  ]
})
export class AppRoutingModule { }
