import { Component, Input } from '@angular/core';

@Component({
    selector: 'sidebar',
    template:  `<div class="border-right" id="sidebar-wrapper">
    <div class="sidebar-heading text-center"><a href="#"><i class="fa fa-music" aria-hidden="true"></i> </a> kTunes</div>
    <div class="list-group list-group-flush">
      <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-home" aria-hidden="true"></i> Home</a>
      <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-globe" aria-hidden="true"></i> Browse</a>
      <a href="#" class="list-group-item list-group-item-action"><i class="fa fa fa-heart-o" aria-hidden="true"></i> Liked Songs</a>
      <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-book" aria-hidden="true"></i> Albums</a>
      <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-plus-circle" aria-hidden="true"></i> New Playlist</a>
      <a href="#" class="list-group-item list-group-item-action">Status</a>
    </div>
  </div>`
})

export class SidebarComponent {
    @Input() status;
}