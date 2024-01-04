import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchBox',
  templateUrl: './searchBox.component.html',
  styleUrls: ['./searchBox.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input()
  public placeholder: string = ''
  @Output()
  public onValue = new EventEmitter<string>()
  emitValue(value: string): void {
    this.onValue.emit(value);
  }

}
