import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'syncspace-crypto-analysis-edit-subscription',
  templateUrl: './edit-subscription.component.html',
  styleUrls: ['./edit-subscription.component.scss']
})
export class EditSubscriptionComponent implements OnInit {
  @ViewChild('accessControlEl') accessControlEl: ElementRef<HTMLSelectElement>;
  optionSelected: number;

  constructor() { }

  ngOnInit(): void {
  }

  toggleAccessControl(): void {
    this.optionSelected = parseInt(this.accessControlEl.nativeElement.value);
  }


}
