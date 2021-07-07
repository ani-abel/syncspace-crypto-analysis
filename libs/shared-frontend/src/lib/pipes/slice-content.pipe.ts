import { Pipe, PipeTransform } from '@angular/core';

/**
 * This pipe splits an array into a specified number of values allowing a specific number
 * Used for Previews
 */
@Pipe({
  name: 'sliceContent'
})
export class SliceContentPipe implements PipeTransform {

  transform(value: any[], numberOfElements: number): any[] {
    if(value?.length > 0) {
      if(numberOfElements <= (value.length - 1)) {
        return value.slice(0, numberOfElements);
      }
    }
    return value;
  }

}
