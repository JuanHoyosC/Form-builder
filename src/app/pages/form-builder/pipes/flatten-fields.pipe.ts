import { Pipe, PipeTransform } from '@angular/core';
import { CustomFormlyFieldConfig, FormFieldList } from '../types/form-builder.types';

@Pipe({
  name: 'flattenFields',
  standalone: true,
  pure: true // Solo se ejecuta cuando la entrada cambia, optimizando el rendimiento.
})
export class FlattenFieldsPipe implements PipeTransform {
  transform(formFieldList: FormFieldList): CustomFormlyFieldConfig[] {
    if (!formFieldList.items.length) return [];
    return formFieldList.items.flatMap((item) => item.field);
  }
}