import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/home/home.component';
import { MenuComponent } from '@src/app/menu/menu.component';
import { TileComponent } from '@src/app/tile/tile.component';
import { CreditsComponent } from '@src/app/credits/credits.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'tile/:number',
    component: TileComponent
  },
  {
    path: 'credits',
    component: CreditsComponent
  }
];
