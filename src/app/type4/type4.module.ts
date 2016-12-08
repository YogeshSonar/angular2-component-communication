import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Type4Component } from './type4.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Type4Component, 
    ParentComponent, 
    ChildComponent
  ]
})
export class Type4Module { }
