import { Pipe, PipeTransform } from '@angular/core';
import { capitalizeFirstCharacter } from '@syncspace-crypto-analysis/utils';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    if(value){
      const valueToArray: string[] = value.split(".").map((data: string) => data.trim());

      if(valueToArray?.length > 1) {
        const capitalizedStringArray: string[] = [];
        for(const st of valueToArray) {
          const capitalizedString = capitalizeFirstCharacter(st);
          capitalizedStringArray.push(capitalizedString)
        }
        return capitalizedStringArray.join(". ").trim();
      }
      return capitalizeFirstCharacter(value);
    }
    return value;
  }

}