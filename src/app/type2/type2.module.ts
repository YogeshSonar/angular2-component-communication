import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Type2Component } from './type2.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

import { Type2Service } from './type2.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Type2Component, 
    Comp1Component, Comp2Component
  ],
  providers: [
    Type2Service
  ]
})
export class Type2Module { }
