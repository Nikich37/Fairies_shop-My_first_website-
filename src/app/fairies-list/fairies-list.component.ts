import { Component, OnInit } from '@angular/core';
import { fairies } from '../fairies';

@Component({
  selector: 'app-fairies-list',
  templateUrl: './fairies-list.component.html',
  styleUrls: ['./fairies-list.component.scss']
})
export class FairiesListComponent {
  fairies = fairies;
}
