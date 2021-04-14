import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-account',
  templateUrl: './personal-account.component.html',
  styleUrls: ['./personal-account.component.scss']
})
export class PersonalAccountComponent implements OnInit {

  constructor() { }
  change() {
    window.alert('Ты чё удумал, это вообще-то твоя невеста');
  }
  ngOnInit(): void {
  }

}
