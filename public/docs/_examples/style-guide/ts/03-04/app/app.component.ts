import { Component, OnInit } from '@angular/core';

import { ToastService } from './shared/toast.service';

@Component({
  selector: 'sg-app',
  template: `
    <button (click)="show()">Show toast</button>
    <button (click)="hide()">Hide toast</button>
  `,
  providers: [ToastService]
})
export class AppComponent implements OnInit {
  constructor(private toastService: ToastService) { }

  hide() {
    this.toastService.hide();
  }

  show() {
    this.toastService.show();
  }

  ngOnInit() {
    this.toastService.activate('Hello style-guide!');
  }
}
