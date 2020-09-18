import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class PipePipe implements PipeTransform {

  transform(items: Array<any>, year: number): Array<any> {
    return items.filter(item => item.launch_year === year);
}

}
