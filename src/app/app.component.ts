import {Component, OnDestroy} from '@angular/core';
import {DataService} from "./data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'tic-tac-toe';

  sub: Subscription;
  setupDone: boolean = this.data.checkSetup();
  constructor(private data: DataService) {
    this.sub = this.data.$setupDone.subscribe((done) => {
      this.setupDone = done;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
