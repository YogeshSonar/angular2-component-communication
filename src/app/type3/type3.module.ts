import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Type3Component } from './type3.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Type3Component, 
    ChildComponent, 
    ParentComponent
  ]
})
export class Type3Module { }
