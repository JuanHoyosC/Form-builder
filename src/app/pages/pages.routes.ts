import { Route } from '@angular/router';

export const PAGE_ROUTES: Route[] = [{ 
    path: 'dashboard',
    loadComponent: () => import('./form-builder/form-builder.component').then((mod) => mod.FormBuilderComponent)
 }];
