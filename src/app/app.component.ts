// import { Component } from '@angular/core/Component';
import { RouterOutlet } from '@angular/router';
import { FormsModule   } from '@angular/forms';
import { state } from '@angular/animations';
import { subscribeOn } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from "./components/header/header.component";
import { TaskFormComponent } from "./components/task-form/task-form.component";
import { TaskListComponent } from "./components/task-list/task-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet, HeaderComponent, TaskFormComponent, TaskListComponent],
  providers:[],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  hostDirectives: [],
})
export class AppComponent {}
