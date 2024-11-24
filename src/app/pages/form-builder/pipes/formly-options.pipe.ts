import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

@Pipe({
  name: 'formlyOptions',
  standalone: true
})
export class FormlyOptionsPipe implements PipeTransform {

  transform(options: { label: string; value: string}[] | Observable<{ label: string; value: string}[]> | undefined): { label: string; value: string}[] {
    if (Array.isArray(options)) { 
      return options
    }
    return [];
  }

}
