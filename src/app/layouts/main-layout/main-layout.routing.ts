import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { EventsComponent } from 'src/app/pages/events/events.component';
import { SettingsComponent } from 'src/app/pages/settings/settings.component';
import { UsersComponent } from 'src/app/pages/users/users.component';

export const MainLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'events', component: EventsComponent },
    { path: 'users', component: UsersComponent },
    { path: 'settings', component: SettingsComponent }
];
