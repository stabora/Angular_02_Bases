import { Component, inject } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from '../../components/dragonball/character-list/character-add.component';
import { DragonBallService } from '../../services/dragonball.service';

@Component({
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, CharacterAddComponent]
})
export class DragonballSuperPageComponent {
  public dragonBallService = inject(DragonBallService);
}
