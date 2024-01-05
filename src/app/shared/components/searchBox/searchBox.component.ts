import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime, distinctUntilChanged, tap } from 'rxjs';

@Component({
  selector: 'app-searchBox',
  templateUrl: './searchBox.component.html',
  styleUrls: ['./searchBox.component.css']
})
export class SearchBoxComponent implements OnInit,OnDestroy {
  private debouncer:Subject<string> = new Subject();
  private debouncerSuscription?:Subscription

  constructor() { }


  ngOnInit() {
    this.debouncerSuscription=this.debouncer.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      tap(value=>console.log(value))
    ).subscribe(value=>{
      this.onDebounce.emit(value);
    })
  }
  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe()

  }
  @Input()
  public placeholder: string = ''
  @Input()
  public initialValue: string = ''
  @Output()
  public onValue = new EventEmitter<string>()
  @Output()
  public onDebounce = new EventEmitter<string>()
  emitValue(value: string): void {
    this.onValue.emit(value);
  }
  onKeyPress(searchTerm: string): void {
    this.debouncer.next(searchTerm)

  }


}
