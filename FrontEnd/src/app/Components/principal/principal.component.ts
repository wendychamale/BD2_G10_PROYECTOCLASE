import { Component, OnInit } from '@angular/core';
import { Utils } from '../../Utils/utils';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  change(event:any) {
console.log(event.target.files);
}
}
