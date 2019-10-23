import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { BoardsComponent } from './boards/boards.component';
import { TitlesComponent } from './titles/titles.component';
import { ContentComponent } from './content/content.component';

export const rootRouterConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'boards/:date', component: BoardsComponent },
  { path: 'boards/:date/:board', component: TitlesComponent },
  { path: 'boards/:date/:board/:id', component: ContentComponent },
];
