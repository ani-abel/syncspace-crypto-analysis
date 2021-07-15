import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'syncspace-crypto-analysis-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent implements OnInit {
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() imagePath: string;
  @Input() altText: string;

  ngOnInit(): void {
    console.log(this.imagePath);
    console.log(this.altText);
  }

  onClose(): void {
    this.closeModal.emit(true);
  }

}
