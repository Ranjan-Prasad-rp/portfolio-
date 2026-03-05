import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import {Home} from './components/home/home'
import {Skills} from './components/skills/skills'
import {Contact} from './components/contact/contact'
import {About} from './components/about/about'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,Home,Skills, Contact, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio');

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    console.log('Menu state:', this.menuOpen);
  }
}
