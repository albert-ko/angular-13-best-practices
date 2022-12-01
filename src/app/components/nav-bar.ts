import { Component } from '@angular/core';

import { UserRepositoryService } from "../services/user-repository";

@Component({
  selector: 'nav-bar',
  styleUrls: [`../styles/nav-bar.css`],
  template: `
    <div class="nav-bar">
      <img class="logo" src="/assets/images/whitebeard-logo.png" alt="Whitebeard Logo" />
      <div class="nav-item"><a [routerLink]="['/catalog']">Catalog</a></div>
      <account-menu [user]="currentUser" (signedOut)="handleSignOut()"></account-menu>
    </div>
`
})

export class NavBarComponent  {
  constructor(private dataRepository:UserRepositoryService) {}

  get currentUser() {
    return this.dataRepository.currentUser;
  }

  handleSignOut() {
    this.dataRepository.currentUser = null;
  }
}
