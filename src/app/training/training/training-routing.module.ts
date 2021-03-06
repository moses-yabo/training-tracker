import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { TrainingComponent } from '../training.component';

const routes: Routes = [
  {
    path:'',
    component:TrainingComponent,
    canActivate:[AuthGuard]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule {}
