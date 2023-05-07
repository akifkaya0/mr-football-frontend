import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeOfGameComponent } from './pages/type-of-game/type-of-game.component';
import { GameSettingComponent } from './pages/game-setting/game-setting.component';

const routes: Routes = [
  {
    path: '',
    component: TypeOfGameComponent
  },
  {
    path: ':gameName',
    component: GameSettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameSelectionRoutingModule { }
