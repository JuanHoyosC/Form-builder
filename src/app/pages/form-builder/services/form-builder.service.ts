import {
  Injectable,
  signal,
  WritableSignal,
} from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  FieldGroup,
} from '../interfaces/form-builder';
import { FORM_FIELD_TYPES } from '../../../shared/form-fields.config';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderTypesService {
  $selectedField = new BehaviorSubject<FormlyFieldConfig>({});
  fields: WritableSignal<FormlyFieldConfig> = signal(
    structuredClone(FORM_FIELD_TYPES.INPUT_GROUP)
  );

  selectedField: WritableSignal<FormlyFieldConfig | undefined> =
    signal(undefined);

  saveNewField(fieldGroup: FieldGroup, newIndex: number | undefined): void {
    if (!fieldGroup || newIndex === undefined) return;
    const newField = this.generateUniqueField(fieldGroup[newIndex]);
    fieldGroup.splice(newIndex, 1, newField);
    this.fields.set({ ...this.fields() });
  }

  updateField(
    node: FormlyFieldConfig,
    updatedData: FormlyFieldConfig
  ): FormlyFieldConfig {
    // Si encontramos el nodo, retornamos una nueva copia con los datos actualizados
    if (node.id === updatedData.id) {
      return {
        ...node,
        ...updatedData,
      };
    }
  
    // Si tiene hijos, clonamos y actualizamos recursivamente
    if (node.fieldGroup) {
      return {
        ...node,
        fieldGroup: node.fieldGroup.map((child) =>
          this.updateField(child, updatedData)
        ),
      };
    }
  
    // Si no se encuentra el nodo en este nivel, retornamos el mismo nodo
    return node;
  }


  /**
   * Removes a field from the specified field group.
   * @param field - The field to remove.
   * @param fieldGroup - The group of fields from which to remove the field.
   */
  removeField(field: FormlyFieldConfig, fieldGroup: FieldGroup): void {
    const index = this.findFieldIndexById(field, fieldGroup);
    if (index !== undefined) {
      fieldGroup?.splice(index, 1);
      this.fields.set({ ...this.fields() });
    }
  }

  /**
   * Clones a field and adds it to the specified field group.
   * @param field - The field to clone.
   * @param fieldGroup - The group of fields to which the cloned field will be added.
   */
  cloneField(field: FormlyFieldConfig, fieldGroup: FieldGroup): void {
    const index = this.findFieldIndexById(field, fieldGroup);
    if (index !== undefined) {
      const fieldCopy = this.generateUniqueField(field);
      fieldGroup?.splice(index + 1, 0, fieldCopy);
      this.fields.set({ ...this.fields() });
    }
  }

  /**
   * Generates a new Formly field configuration with a unique ID and a key based on the field type.
   * This function creates a copy of the provided field configuration, assigns it a new unique identifier,
   * and constructs a key that combines the field type and the new ID.
   *
   * @param field - The field configuration object to clone and modify.
   * @returns A new FormlyFieldConfig object with a unique ID and key.
   */
  generateUniqueField(field: FormlyFieldConfig): FormlyFieldConfig {
    const newId = crypto.randomUUID();
    const newField = JSON.parse(
      JSON.stringify({ ...field, id: newId, key: `${field.type}_${newId}` })
    );

    return newField;
  }

  /**
   * Finds the index of a field in the given field group by its ID.
   * @param field - The field to search for.
   * @param fieldGroup - The group of fields to search within.
   * @returns The index of the field in the field group, or -1 if not found.
   */
  findFieldIndexById(
    field: FormlyFieldConfig,
    fieldGroup: FieldGroup
  ): number | undefined {
    return fieldGroup?.findIndex(
      (currentField) => currentField.id === field.id
    );
  }

  /**
   * Opens a menu for the currently selected field, setting the field as the active selection.
   *
   * @param selectedField - The field (FormlyFieldConfig) that will be set as the current selection.
   */
  activateFieldMenu(selectedField: FormlyFieldConfig): void {
    this.selectedField.set(selectedField);
    this.$selectedField.next(selectedField);
  }

  /**
   * Closes the menu for the currently selected field, resetting the selection.
   */
  deactivateFieldMenu(): void {
    this.selectedField.set(undefined);
  }
  minLengthValidationMessage(error: any, field: FormlyFieldConfig) {
    if(!field?.props) return '';
    return `Should have atleast ${field.props.minLength} characters`;
  }
  
  maxLengthValidationMessage(error: any, field: FormlyFieldConfig) {
    if(!field?.props) return '';
    return `This value should be less than ${field.props.maxLength} characters`;
  }
  
  minValidationMessage(error: any, field: FormlyFieldConfig) {
    if(!field?.props) return '';
    return `This value should be more than ${field.props.min}`;
  }
  
  maxValidationMessage(error: any, field: FormlyFieldConfig) {
    if(!field?.props) return '';
    return `This value should be less than ${field.props.max}`;
  }
}