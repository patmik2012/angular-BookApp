import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filter): any {
    if (!items || !filter) {
      return items;
    }
      return items.filter(
        item =>
          item.id.toString().indexOf(filter.id) !== -1 
      );
    }
  
}
