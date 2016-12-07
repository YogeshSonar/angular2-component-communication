import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Input, Output } from '@angular/core';

import { Type1Component } from './type1.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [Type1Component, ParentComponent, ChildComponent]
})
export class Type1Module { }
