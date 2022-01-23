import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LogRegisterComponent } from './components/log-register/log-register.component';
import { AuthGuard } from './auth.guard';
import { JoinComponent } from './components/join/join.component';
import { AnketComponent } from './components/anket/anket.component';
import { ResultComponent } from './components/result/result.component';
const routes: Routes = [ {
  path:'',
  component:LogRegisterComponent
 },
 {
   path:'main', canActivate:[AuthGuard],
   component:MainComponent
 },
 {path:'join' , component:JoinComponent},
 {path:'result' , component:ResultComponent},
 {path:'anket' , component:AnketComponent},


 { path: 'cards', canActivate: [AuthGuard],
  loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
