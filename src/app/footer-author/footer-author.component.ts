import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-author',
  templateUrl: './footer-author.component.html',
  styleUrls: ['./footer-author.component.css']
})
export class FooterAuthorComponent implements OnInit {

  active: boolean = true;
  @Input()
  author: string = '';
  @Input()
  registry: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  toggleFooter() {
    this.active = !this.active;
  }

}
