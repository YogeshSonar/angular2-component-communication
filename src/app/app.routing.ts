import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  

import { Type1Module } from './type1/type1.module';
import { Type2Module } from './type2/type2.module';

import { ParentComponent } from './type1/parent/parent.component';
import { Type2Component } from './type2/type2.component';

const routes: Routes = [
  { path: '', redirectTo: 'type1', pathMatch: 'full' },
  { path: 'type1', component: ParentComponent },
  { path: 'type2', component: Type2Component }
];

@NgModule({
  imports: [
    Type1Module,
    Type2Module,
    RouterModule.forRoot(routes)
  ],
  exports: [
    Type1Module,
    Type2Module,
    RouterModule
  ],
})
export class AppRoutingModule { }