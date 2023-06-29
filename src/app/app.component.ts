import { ApplicationRef, Component, OnInit, OnDestroy  } from '@angular/core';
import { PopupComponent } from './components/popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { first } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   {
  title = 'app-to-doctors';
}