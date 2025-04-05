import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';

export const routes: Routes = [
    { path: 'login', component: AuthComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: "**", redirectTo: "error", pathMatch: "full" },
];