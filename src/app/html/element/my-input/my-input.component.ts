import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.css']
})
export class MyInputComponent {

  @Input()
  placeHolder?: string;

  value = '';

  onKeyUp($event: KeyboardEvent) {
    if (this.value.length> 0  && $event.key === 'Backspace') {
      this.value = this.value.slice(0, this.value.length - 1)
    } else if (!$event.metaKey && !$event.ctrlKey && !$event.altKey && !$event.shiftKey) {
      console.log($event.key);
      this.value += $event.key;
    }
  }
}
