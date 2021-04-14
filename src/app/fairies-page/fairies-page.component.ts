import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { fairies } from '../fairies';

@Component({
  selector: 'app-fairies-page',
  templateUrl: './fairies-page.component.html',
  styleUrls: ['./fairies-page.component.scss']
})
export class FairiesPageComponent implements OnInit {
  "noImplicitAny": false;
  fairy;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.fairy = fairies[+params.get('fairyId')];
    });
  }
  buy() {
    window.alert('Эта феечка теперь твоя! Деньги с твоей карты уже перевелись.');
  }
  add() {
    window.alert('Эта феечка теперь в твоем списке желаемых!');
  }

  constructor(
    private route: ActivatedRoute,
  ) { }
}
