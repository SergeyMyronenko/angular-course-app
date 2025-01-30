import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LeftSideMenuComponent } from './components/left-side-menu/left-side-menu.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { PreparationComponent } from './components/preparation/preparation.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    LeftSideMenuComponent,
    TopMenuComponent,
    PreparationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-course-app';
}
