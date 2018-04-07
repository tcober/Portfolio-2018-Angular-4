import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-soundcloud',
  templateUrl: './soundcloud.component.html',
  styleUrls: ['./soundcloud.component.css']
})
export class SoundcloudComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadSoundcloud();
  }

  loadSoundcloud () {

      var htm = '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/12351544&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=false&amp;show_reposts=false"></iframe>';

      $(".soundcloud-wrapper").html(htm).removeClass('.loading-soundcloud');

  }

}
