import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { ServersComponent } from '../servers/servers.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  // {path:"" , component:LoginComponent},
  // {path:"server" , component:ServersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
