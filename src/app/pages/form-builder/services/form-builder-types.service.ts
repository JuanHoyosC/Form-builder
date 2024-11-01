import { Injectable, signal, WritableSignal } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  FieldGroup,
  FormFieldItem,
  FormFieldList,
  FormFieldType,
} from '../interfaces/form-builder';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderTypesService {
  formFields: FormFieldType = {
    INPUT_CALENDAR: {
      key: '',
      type: 'calendar',
      props: {
        label: '',
        placeholder: '',
      },
    },
    INPUT_CHECKBOX: {
      key: '',
      type: 'checkbox',
      props: {
        label: 'Type your question here',
        placeholder: '',
      },
    },
    INPUT_EMAIL: {
      key: '',
      type: 'email',
      props: {
        type: 'text',
        label: 'Type your question here',
        placeholder: '',
      },
    },
    INPUT_NUMBER: {
      key: '',
      type: 'number',
      props: {
        label: 'Type your question here',
        placeholder: '',
      },
    },
    INPUT_PASSWORD: {
      key: '',
      type: 'password',
      props: {
        type: 'password',
        label: 'Type your question here',
        placeholder: '',
      },
    },
    INPUT_RADIO: {
      key: '',
      type: 'radio',
      props: {
        label: 'Type your question here',
        placeholder: '',
        options: [
          { label: 'Answer 1', value: '1' },
          { label: 'Answer 2', value: '2' },
        ],
      },
    },
    INPUT_TEL: {
      key: '',
      type: 'tel',
      props: {
        label: '',
        placeholder: '',
      },
    },
    INPUT_TEXT: {
      key: '',
      type: 'text',
      props: {
        label: '',
        placeholder: '',
        tooltip: 'dfgfd',
      },
    },
    INPUT_TITLE: {
      key: 'sdfsdfsdfsdfsd',
      type: 'title',
      props: {
        label: '',
        placeholder: '',
      },
    },
    INPUT_GROUP: {
      key: 'reyrtyret',
      type: 'container',
      fieldGroup: [],
    },
    INPUT_GROUP_GRID: {
      key: 'retyrtet',
      type: 'grid',
      fieldGroup: [],
    },
  };

  formPanelList: FormFieldList[] = [
    {
      title: 'Layout',
      items: [
        {
          label: 'container',
          icon: 'ionSquareOutline',
          field: this.formFields.INPUT_GROUP,
        },
        {
          label: 'Grid',
          icon: 'heroSquares2x2',
          field: this.formFields.INPUT_GROUP_GRID,
        },
      ],
    },
    {
      title: 'Fields',
      items: [
        {
          label: 'Title',
          icon: 'heroH1',
          field: this.formFields.INPUT_TITLE,
        },
        {
          label: 'Text',
          icon: 'ionTextOutline',
          field: this.formFields.INPUT_TEXT,
        },
        {
          label: 'Number',
          icon: 'heroHashtag',
          field: this.formFields.INPUT_NUMBER,
        },
        {
          label: 'Email',
          icon: 'ionMailOutline',
          field: this.formFields.INPUT_EMAIL,
        },
        {
          label: 'Password',
          icon: 'heroEllipsisHorizontal',
          field: this.formFields.INPUT_PASSWORD,
        },
        {
          label: 'Checkbox',
          icon: 'ionCheckboxOutline',
          field: this.formFields.INPUT_CHECKBOX,
        },
        {
          label: 'Radio',
          icon: 'ionRadioButtonOnOutline',
          field: this.formFields.INPUT_RADIO,
        },
        {
          label: 'Calendar',
          icon: 'ionCalendarNumberOutline',
          field: this.formFields.INPUT_CALENDAR,
        },
        {
          label: 'Tel',
          icon: 'ionCallOutline',
          field: this.formFields.INPUT_TEL,
        },
      ],
    },
    {
      title: 'Advanced fields',
      items: [],
    },
  ];

  selectedField: WritableSignal<FormlyFieldConfig | undefined> =
    signal(undefined);
  fields: WritableSignal<FormlyFieldConfig> = signal(
    structuredClone(this.formFields.INPUT_GROUP)
  );

  constructor() {}

  saveNewField(fieldGroup: FieldGroup, newIndex: number | undefined): void {
    if (!fieldGroup || newIndex === undefined) return;
    const newField = { id: crypto.randomUUID(), ...fieldGroup[newIndex] };
    fieldGroup.splice(newIndex, 1, structuredClone(newField));
    this.fields.set({ ...this.fields() });
  }

  openMenuForSelectedField(field: FormlyFieldConfig) {
    this.selectedField.set(field);
  }

  closeMenuForSelectedField() {
    this.selectedField.set(undefined);
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
      const fieldCopy = structuredClone(field);
      fieldCopy.id = crypto.randomUUID();
      fieldGroup?.splice(index + 1, 0, fieldCopy);
      this.fields.set({ ...this.fields() });
    }
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
}
