import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../components/user/user.component';
import { Us1Component } from '../components/us1/us1.component';
import { Us2Component } from '../components/us2/us2.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {path: 'user1', component: Us1Component},
      {path: 'user2', component: Us2Component}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule {
}