import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interface/country';

@Component({
  selector: 'app-countrytable',
  templateUrl: './countrytable.component.html',
  styleUrls: ['./countrytable.component.css']
})
export class CountrytableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input()
  public contries: Country[]=[]


}
