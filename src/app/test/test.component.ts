/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  title = 'test';

  test: any;

  constructor(
    private cdr: ChangeDetectorRef,
    private app: AppComponent
  ) {
    console.log('[TestComponent#constructor]');

    this.test = [
      'dudu',
      'shy',
      'natan'
    ];
  }

  ngOnInit(): void {
    console.log('[TestComponent#ngOnInit]');
    this.app.updateView(this.title);
  }

  testando(){
    alert('Cuidado!');
  }

  alertar(msg:string) {
    alert(msg);
  }

  naoClique(){
    this.app.redirectTo('delete');
    alert('Falei pra não clicar!');
  }
}
