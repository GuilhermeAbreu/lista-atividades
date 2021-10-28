import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtividadeCreateComponent } from './views/atividade/atividade-create/atividade-create.component';
import { AtividadeCrudComponent } from './views/atividade/atividade-crud/atividade-crud.component';
import { AtividadeUpdateComponent } from './views/atividade/atividade-update/atividade-update.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'atividades', component: AtividadeCrudComponent},
  {path: 'atividades/create', component: AtividadeCreateComponent},
  {path: 'atividades/update/:id', component: AtividadeUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
