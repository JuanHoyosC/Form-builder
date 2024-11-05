import {
  Injectable,
  signal,
  WritableSignal,
} from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  FieldGroup,
  FormFieldList,
  FormFieldType,
  FormType,
} from '../interfaces/form-builder';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderTypesService {
  formFields: FormFieldType = {
    INPUT_CALENDAR: {
      key: '',
      type: FormType.calendar,
      props: {
        label: '',
        placeholder: '',
      },
    },
    INPUT_CHECKBOX: {
      key: '',
      type: FormType.checkbox,
      props: {
        label: '',
        placeholder: '',
      },
    },
    DIVIDER_WRAPPER: {
      type: FormType.divider,
      props: {},
      wrappers: [FormType.divider]
    },
    INPUT_EMAIL: {
      key: '',
      type: FormType.email,
      props: {
        type: 'text',
        label: '',
        placeholder: '',
      },
    },
    INPUT_NUMBER: {
      key: '',
      type: FormType.number,
      props: {
        label: '',
        placeholder: '',
      },
    },
    INPUT_PARAGRAPH: {
      key: '',
      type: FormType.paragraph,
      props: {
        label: '',
        placeholder: '',
        align: 'left',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
      },
    },
    INPUT_PASSWORD: {
      key: '',
      type: FormType.password,
      props: {
        label: '',
        placeholder: '',
      },
    },
    INPUT_RADIO: {
      key: '',
      type: FormType.radio,
      props: {
        label: '',
        placeholder: '',
        options: undefined,
      },
    },
    INPUT_TEL: {
      key: '',
      type: FormType.tel,
      props: {
        label: '',
        placeholder: '',
      },
    },
    INPUT_TEXT: {
      key: '',
      type: FormType.text,
      defaultValue: '',
      props: {
        label: '',
        placeholder: '',
        tooltip: '',
        required: false,
        disabled: false,
        readonly: false,
        minLength: 0,
        maxLength: 255,
      },
    },
    INPUT_TITLE: {
      key: '',
      type: FormType.title,
      props: {
        label: '',
        headingType: 'h1',
        align: 'left',
        bold: false,
        italic: false,
        strikethrough: false,
        underline: false,
      },
    },
    INPUT_GROUP: {
      key: '',
      type: FormType.group,
      fieldGroup: [],
      props: {
        label: 'Group',
        cols: 1,
      },
    },
    INPUT_GROUP_GRID: {
      key: '',
      type: FormType.grid,
      fieldGroup: [],
      props: {
        label: 'Grids columns',
        cols: 3,
      },
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
          icon: 'heroViewColumns',
          field: this.formFields.INPUT_GROUP_GRID,
        },
        {
          label: 'Title',
          icon: 'heroH1',
          field: this.formFields.INPUT_TITLE,
        },
        {
          label: 'Paragraph',
          icon: 'heroDocumentText',
          field: this.formFields.INPUT_PARAGRAPH,
        },
        {
          label: 'Divider',
          icon: 'heroMinus',
          field: this.formFields.DIVIDER_WRAPPER,
        },
      ],
    },
    {
      title: 'Fields',
      items: [
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

  fields: WritableSignal<FormlyFieldConfig> = signal(
    structuredClone(this.formFields.INPUT_GROUP)
  );

  selectedField: WritableSignal<FormlyFieldConfig | undefined> =
    signal(undefined);

  saveNewField(fieldGroup: FieldGroup, newIndex: number | undefined): void {
    if (!fieldGroup || newIndex === undefined) return;
    const newField = this.generateUniqueField(fieldGroup[newIndex]);
    fieldGroup.splice(newIndex, 1, newField);
    this.fields.set({ ...this.fields() });
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
  }

  /**
   * Closes the menu for the currently selected field, resetting the selection.
   */
  deactivateFieldMenu(): void {
    this.selectedField.set(undefined);
  }
}
