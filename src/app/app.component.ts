import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputSwitchModule } from 'primeng/inputswitch';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,InputSwitchModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  isDarkMode = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.checkTheme();
  }

  checkTheme() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    this.applyTheme(prefersDarkScheme.matches);
  }

  listenToThemeChange() {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", (event) => this.applyTheme(event.matches));
  }

  applyTheme(isDark: boolean) {
    if (isDark) {
      this.isDarkMode = false;
      this.toggleDarkMode();
    } else {
      this.isDarkMode = true;
      this.toggleDarkMode();
    }
  }

  toggleDarkMode() {
    if(!document.startViewTransition) return;
    document.startViewTransition(() => {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        this.renderer.addClass(document.body, 'dark');
      } else {
        this.renderer.removeClass(document.body, 'dark');
        this.renderer.addClass(document.body, 'light');
      }
    });
  }
}
