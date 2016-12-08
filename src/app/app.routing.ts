import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  

import { Type1Module } from './type1/type1.module';
import { Type2Module } from './type2/type2.module';
import { Type3Module } from './type3/type3.module';
import { Type4Module } from './type4/type4.module';

import { ParentComponent } from './type1/parent/parent.component';
import { Type2Component } from './type2/type2.component';
import { Type3Component } from './type3/type3.component';
import { Type4Component } from './type4/type4.component';

const routes: Routes = [
  { path: '', redirectTo: 'type1', pathMatch: 'full' },
  { path: 'type1', component: ParentComponent },
  { path: 'type2', component: Type2Component },
  { path: 'type3', component: Type3Component },
  { path: 'type4', component: Type4Component }
];

@NgModule({
  imports: [
    Type1Module,
    Type2Module,
    Type3Module,
    Type4Module,
    RouterModule.forRoot(routes)
  ],
  exports: [
    Type1Module,
    Type2Module,
    Type3Module,
    Type4Module,
    RouterModule
  ],
})
export class AppRoutingModule { }
