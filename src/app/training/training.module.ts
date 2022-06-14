import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TrainingComponent } from './training.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingsComponent } from './past-training/past-training.component';
import { StopTrainingComponent } from '../training/training/stop.component';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared/shared.module';
import { TrainingRoutingModule } from './training/training-routing.module';

@NgModule({
  declarations: [
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    StopTrainingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    SharedModule,
    TrainingRoutingModule,
    MaterialModule
  ],
  entryComponents: [StopTrainingComponent]
})
export class TrainingModule {}
