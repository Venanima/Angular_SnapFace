import {RouterModule, Routes} from '@angular/router';
import {SnapLisComponent} from "./snap-lis/snap-lis.component";
import {HeaderComponent} from "./header/header.component";
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {SingleSnapComponent} from "./single-snap/single-snap.component";
import {CreateSnapComponent} from "./create-snap/create-snap.component";

export const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent,
    title: 'Home'
  },
  {
    path: 'snap',
    component: SnapLisComponent,
    title: 'Accueil'
  },
  {
    path: 'snap/:id',
    component: SingleSnapComponent,
    title: 'Snap'
  },
  {
    path: 'create',
    component: CreateSnapComponent,
    title: 'Création de snap'
  }
];

export default routes;
