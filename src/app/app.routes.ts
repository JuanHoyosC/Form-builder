import { Routes } from '@angular/router';
import { PAGE_ROUTES } from './pages/pages.routes';

export const routes: Routes = [
    {
        path: '',
        children: PAGE_ROUTES
    }
];
