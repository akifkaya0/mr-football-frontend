import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameSelectionRoutingModule } from './game-selection-routing.module';
import { TypeOfGameComponent } from './pages/type-of-game/type-of-game.component';
import { GameSettingComponent } from './pages/game-setting/game-setting.component';


@NgModule({
  declarations: [
    TypeOfGameComponent,
    GameSettingComponent
  ],
  imports: [
    CommonModule,
    GameSelectionRoutingModule
  ]
})
export class GameSelectionModule { }
