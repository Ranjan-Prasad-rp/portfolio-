import { Routes } from '@angular/router';
import {Home} from './components/home/home'
import {Skills} from './components/skills/skills'
import {About} from './components/about/about'
import {Contact} from './components/contact/contact'
export const routes: Routes = [
    {
        path:'home',
        component: Home
    },
    {
        path:'skill',
        component: Skills
    },
    {
        path:'about',
        component: About
    },
    {
        path:'contact',
        component: Contact
    }

];
