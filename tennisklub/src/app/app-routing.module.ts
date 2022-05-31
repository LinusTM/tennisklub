import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayerFormComponent } from './player-form/player-form.component';

const routes: Routes = [
	{ path: '', component: PlayerFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
