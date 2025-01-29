import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-preparation',
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './preparation.component.html',
  styleUrl: './preparation.component.css',
})
export class PreparationComponent {}
