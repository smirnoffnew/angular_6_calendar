/**
 * Created by smirnoff on 20.07.18.
 */

import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthGuard} from './core/auth.guard.service';

const routes = [
    {
        path: 'home',
        loadChildren: './components/home/home.module#HomeModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'home2',
        loadChildren: './components/home2/home.module#Home2Module',
        canLoad: [AuthGuard]
    },
    {
        path: 'sign-up',
        loadChildren: './components/sign-up/sign-up.module#SignUpModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'sign-in',
        loadChildren: './components/sign-in/sign-in.module#SignInModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'about-us',
        loadChildren: './components/about-us/about-us.module#AboutUsModule',
        canLoad: [AuthGuard]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);