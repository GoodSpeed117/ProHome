import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { calendarClearOutline, hourglassOutline, library, playCircle, radio, search, homeOutline, searchOutline, calendarNumberOutline, sendOutline, pinOutline, earthOutline, timeOutline, cashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor() {
    addIcons({
      calendarClearOutline,
      hourglassOutline,
      library,
      playCircle,
      radio,
      search,
      homeOutline,
      searchOutline,
      calendarNumberOutline,
      sendOutline,
      pinOutline,
      earthOutline,
      timeOutline,
      cashOutline
    });
  }

  ngOnInit() {}
}
