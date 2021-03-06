import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summarizeContent'
})
export class SummarizeContentPipe implements PipeTransform {

  transform(value: string, length = 10): string {
    if (value?.length > length) {
      return `${value.substr(0, length)}...`;
    }
    else {
      return value;
    }
  }

}
