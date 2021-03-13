import { DosComponent } from './components/dos/dos.component';
import { UnoComponent } from './components/uno/uno.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'uno',component:UnoComponent},
  {path:'uno/:nombre',component:UnoComponent},
  {path:'dos',component:DosComponent},
  {path:'dos/:apellido',component:DosComponent},
  //{path:'dos/:id/:param2/:param3',component:DosComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
