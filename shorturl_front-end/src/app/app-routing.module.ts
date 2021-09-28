import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {appService} from './home/app.service'
import {NotfoundComponent} from './notfound/notfound.component'
import {HomeComponent} from './home/home.component'
const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: '**', component: NotfoundComponent,canActivate:[appService] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
