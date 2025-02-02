import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LeftSideMenuComponent } from './components/left-side-menu/left-side-menu.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { PreparationComponent } from './components/preparation/preparation.component';
import { CategoryComponent } from './components/category/category.component';
import { DeleteConfirmationModalComponent } from './components/delete-confirmation-modal/delete-confirmation-modal.component';
import { GenerateAnswerModalComponent } from './components/generate-answer-modal/generate-answer-modal.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    CategoryComponent,
    DeleteConfirmationModalComponent,
    GenerateAnswerModalComponent,
    LeftSideMenuComponent,
    PreparationComponent,
    TopMenuComponent,
    PageNotFoundComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-course-app';
}
