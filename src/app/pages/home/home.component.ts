import { Component, HostListener, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router) {}
  goToItems() {
    debugger
    this.router.navigate(['/lista-antibiotico'], { relativeTo: this.route });
  }
}
