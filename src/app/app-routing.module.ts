import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PoemListComponent } from './components/poems/poem-list/poem-list.component';
import { PoemDetailComponent } from './components/poems/poem-detail/poem-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default
  { path: 'home', component: HomeComponent },
  { path: 'poems', component: PoemListComponent },
  { path: 'poem/:id', component: PoemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
