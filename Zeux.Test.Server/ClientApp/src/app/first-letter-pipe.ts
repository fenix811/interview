import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'firstLetterCapitalize' })
export class FirstLetterCapitalize implements PipeTransform {
  transform(val: string): string {
    return val.substr(0, 1).toUpperCase() + val.substr(1);
  }
}
