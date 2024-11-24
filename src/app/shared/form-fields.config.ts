import { FormlyExtension, FormlyFieldConfig } from '@ngx-formly/core';
import {
  FormFieldList,
  FormFieldType,
  FormType,
  Wrapper,
} from '../pages/form-builder/types/form-builder.types';
import { InputFieldCalendarComponent } from '../pages/form-builder/fields/input-field-calendar/input-field-calendar.component';
import { InputFieldCheckboxComponent } from '../pages/form-builder/fields/input-field-checkbox/input-field-checkbox.component';
import { InputFieldEmailComponent } from '../pages/form-builder/fields/input-field-email/input-field-email.component';
import { InputFieldGroupComponent } from '../pages/form-builder/fields/input-field-group/input-field-group.component';
import { InputFieldNumberComponent } from '../pages/form-builder/fields/input-field-number/input-field-number.component';
import { ParagraphWrapperComponent } from '../pages/form-builder/wrappers/paragraph/paragraph.component';
import { InputFieldPasswordComponent } from '../pages/form-builder/fields/input-field-password/input-field-password.component';
import { InputFieldRadioComponent } from '../pages/form-builder/fields/input-field-radio/input-field-radio.component';
import { InputFieldTelComponent } from '../pages/form-builder/fields/input-field-tel/input-field-tel.component';
import { InputFieldTextComponent } from '../pages/form-builder/fields/input-field-text/input-field-text.component';
import { AlertComponent } from '../pages/form-builder/wrappers/alert/alert.component';
import { DividerComponent } from '../pages/form-builder/wrappers/divider/divider.component';
import { FieldWrapperComponent } from '../pages/form-builder/wrappers/field-wrapper/field-wrapper.component';
import { InputFieldMultiCheckboxComponent } from '../pages/form-builder/fields/input-field-multicheckbox/input-field-multicheckbox.component';
import { FormControlWrapperComponent } from '../pages/form-builder/wrappers/formControl/form-control.component';
import { TitleWrapperComponent } from '../pages/form-builder/wrappers/title/title.component';

export const FORM_FIELD_TYPES: FormFieldType = {
  ALERT_WRAPPER: {
    type: FormType.alert,
    props: {
      description: 'Escribe aqui un mensaje de ayuda',
      severity: 'info',
      align: 'left',
      textFormattingOptions: [],
    },
    wrappers: ['alertWrapper'],
  },
  INPUT_CALENDAR: {
    key: '',
    type: FormType.calendar,
    wrappers: ['fieldWrapper', 'formControlWrapper'],
    props: {
      label: 'Default Label',
      placeholder: '',
    },
  },
  INPUT_CHECKBOX: {
    key: '',
    type: FormType.checkbox,
    wrappers: ['formControlWrapper'],
    props: {
      label: 'Default Label',
      placeholder: '',
    },
  },
  DIVIDER_WRAPPER: {
    type: FormType.divider,
    props: {},
    wrappers: ['dividerWrapper'],
  },
  INPUT_EMAIL: {
    key: '',
    type: FormType.email,
    wrappers: ['fieldWrapper', 'formControlWrapper'],
    props: {
      label: 'Default Label',
      placeholder: '',
    },
  },
  INPUT_NUMBER: {
    key: '',
    type: FormType.number,
    wrappers: ['fieldWrapper', 'formControlWrapper'],
    props: {
      label: 'Default Label',
      placeholder: '',
    },
  },
  INPUT_MULTICHECKBOX: {
    key: '',
    type: FormType.multicheckbox,
    wrappers: ['fieldWrapper', 'formControlWrapper'],
    props: {
      label: 'Default Label',
      description: '',
      options: undefined,
    },
  },
  INPUT_PARAGRAPH: {
    key: '',
    type: FormType.paragraph,
    wrappers: ['paragraphWrapper'],
    props: {
      description: 'Contenido de ayuda',
      align: 'left',
      textFormattingOptions: [],
    },
  },
  INPUT_PASSWORD: {
    key: '',
    type: FormType.password,
    wrappers: ['fieldWrapper', 'formControlWrapper'],
    props: {
      label: 'Default Label',
      placeholder: '',
    },
  },
  INPUT_RADIO: {
    key: '',
    type: FormType.radio,
    wrappers: ['fieldWrapper', 'formControlWrapper'],
    props: {
      label: 'Default Label',
      description: '',
      options: undefined,
    },
  },
  INPUT_TEL: {
    key: '',
    type: FormType.tel,
    wrappers: ['fieldWrapper', 'formControlWrapper'],
    props: {
      label: 'Default Label',
      placeholder: '',
    },
  },
  INPUT_TEXT: {
    key: '',
    type: FormType.text,
    wrappers: ['fieldWrapper', 'formControlWrapper'],
    defaultValue: '',
    props: {
      label: 'Default Label',
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
    wrappers: ['titleWrapper'],
    props: {
      label: 'Form title',
      headingType: 'h1',
      align: 'left',
      textFormattingOptions: ['bold'],
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
  }
};

export const FORM_FIELD_LIST: FormFieldList[] = [
  {
    title: 'Layout',
    items: [
      {
        label: 'Container',
        icon: 'ionSquareOutline',
        field: FORM_FIELD_TYPES.INPUT_GROUP,
        description: 'Groups fields for better layout.'
      },
      {
        label: 'Divider',
        icon: 'heroMinus',
        field: FORM_FIELD_TYPES.DIVIDER_WRAPPER,
        description: 'Adds a horizontal line for separation.'
      },
      {
        label: 'Message',
        icon: 'ionInformationCircleOutline',
        field: FORM_FIELD_TYPES.ALERT_WRAPPER,
        description: 'Displays an informational message.'
      },
      {
        label: 'Paragraph',
        icon: 'heroDocumentText',
        field: FORM_FIELD_TYPES.INPUT_PARAGRAPH,
        description: 'Adds descriptive text to the form.'
      },
      {
        label: 'Title',
        icon: 'heroH1',
        field: FORM_FIELD_TYPES.INPUT_TITLE,
        description: 'Displays a section title in the form.'
      },
    ],
  },
  {
    title: 'Fields',
    items: [
      {
        label: 'Text',
        icon: 'ionTextOutline',
        field: FORM_FIELD_TYPES.INPUT_TEXT,
        description: 'A single-line text input field.'
      },
      {
        label: 'Number',
        icon: 'heroHashtag',
        field: FORM_FIELD_TYPES.INPUT_NUMBER,
        description: 'An input field for numeric values.'
      },
      {
        label: 'Email',
        icon: 'ionMailOutline',
        field: FORM_FIELD_TYPES.INPUT_EMAIL,
        description: 'An input field for email addresses.'
      },
      {
        label: 'Password',
        icon: 'heroEllipsisHorizontal',
        field: FORM_FIELD_TYPES.INPUT_PASSWORD,
        description: 'A masked input for passwords.'
      },
      {
        label: 'Checkbox',
        icon: 'ionCheckboxOutline',
        field: FORM_FIELD_TYPES.INPUT_CHECKBOX,
        description: 'A single checkbox input.'
      },
      {
        label: 'Checkbox group',
        icon: 'ionCheckboxOutline',
        field: FORM_FIELD_TYPES.INPUT_MULTICHECKBOX,
        description: 'A group of checkboxes for multiple selections.'
      },
      {
        label: 'Radio',
        icon: 'ionRadioButtonOnOutline',
        field: FORM_FIELD_TYPES.INPUT_RADIO,
        description: 'A group of radio buttons for single selection.'
      },
      {
        label: 'Calendar',
        icon: 'ionCalendarNumberOutline',
        field: FORM_FIELD_TYPES.INPUT_CALENDAR,
        description: 'A date picker input field.'
      },
      {
        label: 'Tel',
        icon: 'ionCallOutline',
        field: FORM_FIELD_TYPES.INPUT_TEL,
        description: 'An input field for telephone numbers.'
      },
    ],
  },
  {
    title: 'Advanced fields',
    items: [],
  },
];

export const defaultOptionsExtension: FormlyExtension = {
  prePopulate(field: FormlyFieldConfig): void {
    const fieldTypes = [FormType.radio, FormType.multicheckbox];
    const currentFielType = field.type as FormType;
    if (!fieldTypes.includes(currentFielType)) return;
    if (field.props?.options) return;

    field.props = {
      ...field.props,
      options: [
        {
          label: 'option 1',
          value: 'option 1',
        },
        {
          label: 'option 2',
          value: 'option 2',
        },
      ],
    };
  },
};

export const FORMLY_EXTENSIONS = [
  {
    name: 'default-options',
    extension: defaultOptionsExtension,
  },
];

export const FORMLY_TYPES = [
  { name: 'calendar', component: InputFieldCalendarComponent },
  { name: 'checkbox', component: InputFieldCheckboxComponent },
  { name: 'email', component: InputFieldEmailComponent },
  { name: 'group', component: InputFieldGroupComponent },
  { name: 'number', component: InputFieldNumberComponent },
  { name: 'multicheckbox', component: InputFieldMultiCheckboxComponent },
  { name: 'password', component: InputFieldPasswordComponent },
  { name: 'radio', component: InputFieldRadioComponent },
  { name: 'tel', component: InputFieldTelComponent },
  { name: 'text', component: InputFieldTextComponent },
];

export const FORMLY_WRAPPERS: { name: Wrapper, component: any }[] = [
  { name: 'alertWrapper', component: AlertComponent },
  { name: 'dividerWrapper', component: DividerComponent },
  { name: 'fieldWrapper', component: FieldWrapperComponent },
  { name: 'formControlWrapper', component: FormControlWrapperComponent },
  { name: 'titleWrapper', component: TitleWrapperComponent },
  { name:  'paragraphWrapper', component: ParagraphWrapperComponent },
];
