import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'goToItNow'
})
export class GoToItNowPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
