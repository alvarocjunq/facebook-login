import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

  @Input()
  user: string = "desconhecido";

  @Input()
  pages: string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
