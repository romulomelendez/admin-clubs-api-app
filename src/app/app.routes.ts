import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { PageNoteFoundComponent } from './components/page-note-found/page-note-found.component'
import { AuthGuard } from './guards/auth.guard'

export const routes: Routes = [
    { path: '', redirectTo: 'admin', pathMatch: 'full' },
    { path: 'admin', component: HomeComponent },
    { path: 'admin/dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: '**', component: PageNoteFoundComponent }
]
