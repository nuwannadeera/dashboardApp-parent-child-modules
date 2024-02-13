import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {DashboardModule} from "./dashboard/dashboard.module";
import {UserlistchildComponent} from "./userlistchild/userlistchild.component";
import {DashboardPComponent} from "./dashboard-p/dashboard-p.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    RouterModule.forRoot([
      { path: 'dashboard',
        loadChildren: () => import('./my-user-list/my-user-list.module')
          .then((m) => m.MyUserListModule) },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
