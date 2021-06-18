import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'syncspace-crypto-analysis-add-subscription',
  templateUrl: './add-subscription.component.html',
  styleUrls: ['./add-subscription.component.scss']
})
export class AddSubscriptionComponent implements OnInit {
  @ViewChild('accessControlEl') accessControlEl: ElementRef<HTMLSelectElement>;
  optionSelected: number;

  constructor() { }

  ngOnInit(): void {
  }

  toggleAccessControl(): void {
    this.optionSelected = parseInt(this.accessControlEl.nativeElement.value);
  }

}
