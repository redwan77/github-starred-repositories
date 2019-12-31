import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoriesContainerComponent } from '../repositories-container/repositories-container.component';


const routes: Routes = [
  {path:'repositories' , component: RepositoriesContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
