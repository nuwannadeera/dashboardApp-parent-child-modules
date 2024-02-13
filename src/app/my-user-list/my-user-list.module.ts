import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {UserlistchildComponent} from "../userlistchild/userlistchild.component";



@NgModule({
  declarations: [UserlistchildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: UserlistchildComponent }])
  ]
})
export class MyUserListModule { }
