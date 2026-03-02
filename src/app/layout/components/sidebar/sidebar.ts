import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class SidebarComponent {
  @Input() isExpanded = true;

  constructor(private router: Router) { }

  go(path: string) {
    this.router.navigateByUrl(path);
  }
}
