import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'navbar',
    template:  `<nav class="navbar navbar-expand-lg border-bottom">  
    <button class="btn btn-secondary" id="menu-toggle" (click)="toggleMenu($event)"><i [ngClass]="status ? 'fa fa-chevron-circle-left' : 'fa fa-chevron-circle-right' "></i></button>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <form class="form-inline">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"><i class="fa fa-search"></i></span>
              </div>
              <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1">
            </div>
          </form>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa fa-user"></i></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Gundu
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Profile</a>
            <a class="dropdown-item" href="#">Settings</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Logout</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>`
})

export class NavbarComponent {
status: boolean = false;
@Output() toggleMenuEvent = new EventEmitter();
  toggleMenu(e) {
    e.preventDefault();
    this.status = !this.status;
    this.toggleMenuEvent.emit(this.status);
  }
}