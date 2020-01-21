import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrainingComponent } from './components/training/training.component';
import { RunningComponent } from './components/training/running/running.component';
import { RacingComponent } from './components/training/running/racing/racing.component';
import { PreparationsComponent } from './components/training/running/preparations/preparations.component';
import { FormsModule } from '@angular/forms';
import { SwimmingComponent } from './components/training/swimming/swimming.component';
import { AddTrainingComponent } from './components/training/add-training/add-training.component';
import { ToDoTrainingComponent } from './components/training/to-do-training/to-do-training.component';
import { DoneTrainingComponent } from './components/training/done-training/done-training.component';
import { SandboxComponent } from './components/training/sandbox/sandbox.component';
import { CornerComponent } from './components/training/sandbox/corner/corner.component';


@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent,
    RunningComponent,
    RacingComponent,
    PreparationsComponent,
    SwimmingComponent,
    AddTrainingComponent,
    ToDoTrainingComponent,
    DoneTrainingComponent,
    SandboxComponent,
    CornerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
