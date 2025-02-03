import { FormlyExtension } from '@ngx-formly/core';
import {
  CustomFormlyFieldConfig,
  FormFieldList,
  FormFieldType,
  FormType,
  Wrapper,
} from '../types/form-builder.types';
import { InputFieldCalendarComponent } from '../fields/input-field-calendar/input-field-calendar.component';
import { InputFieldCheckboxComponent } from '../fields/input-field-checkbox/input-field-checkbox.component';
import { InputFieldEmailComponent } from '../fields/input-field-email/input-field-email.component';
import { InputFieldGroupComponent } from '../fields/input-field-group/input-field-group.component';
import { InputFieldNumberComponent } from '../fields/input-field-number/input-field-number.component';
import { ParagraphWrapperComponent } from '../wrappers/paragraph/paragraph.component';
import { InputFieldPasswordComponent } from '../fields/input-field-password/input-field-password.component';
import { InputFieldRadioComponent } from '../fields/input-field-radio/input-field-radio.component';
import { InputFieldTelComponent } from '../fields/input-field-tel/input-field-tel.component';
import { InputFieldTextComponent } from '../fields/input-field-text/input-field-text.component';
import { AlertComponent } from '../wrappers/alert/alert.component';
import { DividerComponent } from '../wrappers/divider/divider.component';
import { FieldWrapperComponent } from '../wrappers/field-wrapper/field-wrapper.component';
import { InputFieldMultiCheckboxComponent } from '../fields/input-field-multicheckbox/input-field-multicheckbox.component';
import { FormControlWrapperComponent } from '../wrappers/formControl/form-control.component';
import { TitleWrapperComponent } from '../wrappers/title/title.component';
import { Type } from '@angular/core';
import { InputFieldTextAreaComponent } from '../fields/input-field-text-area/input-field-text-area.component';
import { InputFieldSignatureComponent } from '../fields/input-field-signature/input-field-signature.component';
import { InputFieldSelectComponent } from '../fields/input-field-select/input-field-select.component';
import { InputFieldMultiselectComponent } from '../fields/input-field-multiselect/input-field-multiselect.component';
import { InputFieldSliderComponent } from '../fields/input-field-slider/input-field-slider.component';
import { InputFieldRatingComponent } from '../fields/input-field-rating/input-field-rating.component';

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
  INPUT_MULTISELECT: {
    key: '',
    type: FormType.multiselect,
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
  INPUT_SIGNATURE: {
    key: '',
    type: FormType.signature,
    wrappers: ['fieldWrapper', 'formControlWrapper'],
    props: {
      label: 'Default Label',
      description: '',
      options: undefined,
    },
  },
  INPUT_SELECT: {
    key: '',
    type: FormType.select,
    wrappers: ['fieldWrapper', 'formControlWrapper'],
    props: {
      label: 'Default Label',
      description: '',
      options: undefined,
    },
  },
  INPUT_SLIDER: {
    key: '',
    type: FormType.slider,
    wrappers: ['fieldWrapper', 'formControlWrapper'],
    defaultValue: 0,
    props: {
      label: 'Default Label',
      description: '',
      options: undefined,
      min: 0,
      max: 100,
    },
  },
  INPUT_RATING: {
    key: '',
    type: FormType.rating,
    wrappers: ['fieldWrapper', 'formControlWrapper'],
    props: {
      label: 'Default Label',
      description: '',
      options: undefined,
      ratingType: 'start',
      stars: 5
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
  INPUT_TEXTAREA: {
    key: '',
    type: FormType.textarea,
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
  },
};

export const FORM_FIELD_LIST: FormFieldList[] = [
  {
    title: 'Layout',
    items: [
      {
        label: 'Container',
        icon: 'ionSquareOutline',
        field: FORM_FIELD_TYPES.INPUT_GROUP,
        description: 'Groups fields for better layout.',
      },
      {
        label: 'Divider',
        icon: 'heroMinus',
        field: FORM_FIELD_TYPES.DIVIDER_WRAPPER,
        description: 'Adds a horizontal line for separation.',
      },
      {
        label: 'Message',
        icon: 'ionInformationCircleOutline',
        field: FORM_FIELD_TYPES.ALERT_WRAPPER,
        description: 'Displays an informational message.',
      },
      {
        label: 'Paragraph',
        icon: 'heroDocumentText',
        field: FORM_FIELD_TYPES.INPUT_PARAGRAPH,
        description: 'Adds descriptive text to the form.',
      },
      {
        label: 'Title',
        icon: 'heroH1',
        field: FORM_FIELD_TYPES.INPUT_TITLE,
        description: 'Displays a section title in the form.',
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
        description: 'A single-line text input field.',
      },
      {
        label: 'Textarea',
        icon: 'ionTextOutline',
        field: FORM_FIELD_TYPES.INPUT_TEXTAREA,
        description: 'A textarea input field.',
      },
      {
        label: 'Number',
        icon: 'heroHashtag',
        field: FORM_FIELD_TYPES.INPUT_NUMBER,
        description: 'An input field for numeric values.',
      },
      {
        label: 'Email',
        icon: 'ionMailOutline',
        field: FORM_FIELD_TYPES.INPUT_EMAIL,
        description: 'An input field for email addresses.',
      },
      {
        label: 'Password',
        icon: 'heroEllipsisHorizontal',
        field: FORM_FIELD_TYPES.INPUT_PASSWORD,
        description: 'A masked input for passwords.',
      },
      {
        label: 'Checkbox',
        icon: 'ionCheckboxOutline',
        field: FORM_FIELD_TYPES.INPUT_CHECKBOX,
        description: 'A single checkbox input.',
      },
      {
        label: 'Checkbox group',
        icon: 'ionCheckboxOutline',
        field: FORM_FIELD_TYPES.INPUT_MULTICHECKBOX,
        description: 'A group of checkboxes for multiple selections.',
      },
      {
        label: 'Radio',
        icon: 'ionRadioButtonOnOutline',
        field: FORM_FIELD_TYPES.INPUT_RADIO,
        description: 'A group of radio buttons for single selection.',
      },
      {
        label: 'Calendar',
        icon: 'ionCalendarNumberOutline',
        field: FORM_FIELD_TYPES.INPUT_CALENDAR,
        description: 'A date picker input field.',
      },
      {
        label: 'Tel',
        icon: 'ionCallOutline',
        field: FORM_FIELD_TYPES.INPUT_TEL,
        description: 'An input field for telephone numbers.',
      },
      {
        label: 'Signature',
        icon: 'ionCallOutline',
        field: FORM_FIELD_TYPES.INPUT_SIGNATURE,
        description: 'An input field for telephone numbers.',
      },
      {
        label: 'Select',
        icon: 'ionCallOutline',
        field: FORM_FIELD_TYPES.INPUT_SELECT,
        description: 'A dropdown field for selecting a predefined option.',
      },
      {
        label: 'Multiselect group',
        icon: 'ionCheckboxOutline',
        field: FORM_FIELD_TYPES.INPUT_MULTISELECT,
        description: 'A group of checkboxes for multiple selections.',
      },
      {
        label: 'Slider',
        icon: 'ionCheckboxOutline',
        field: FORM_FIELD_TYPES.INPUT_SLIDER,
        description: 'A group of checkboxes for multiple selections.',
      },
      {
        label: 'Rating',
        icon: 'ionCheckboxOutline',
        field: FORM_FIELD_TYPES.INPUT_RATING,
        description: 'A group of checkboxes for multiple selections.',
      },
    ],
  },
  {
    title: 'Advanced fields',
    items: [],
  },
];

export const defaultOptionsExtension: FormlyExtension = {
  prePopulate(field: CustomFormlyFieldConfig): void {
    const fieldTypes = [
      FormType.multicheckbox,
      FormType.multiselect,
      FormType.radio,
      FormType.select,
    ];
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
  { name: FormType.calendar, component: InputFieldCalendarComponent },
  { name: FormType.checkbox, component: InputFieldCheckboxComponent },
  { name: FormType.email, component: InputFieldEmailComponent },
  { name: FormType.group, component: InputFieldGroupComponent },
  { name: FormType.number, component: InputFieldNumberComponent },
  { name: FormType.multicheckbox, component: InputFieldMultiCheckboxComponent },
  { name: FormType.multiselect, component: InputFieldMultiselectComponent },
  { name: FormType.password, component: InputFieldPasswordComponent },
  { name: FormType.radio, component: InputFieldRadioComponent },
  { name: FormType.rating, component: InputFieldRatingComponent },
  { name: FormType.tel, component: InputFieldTelComponent },
  { name: FormType.textarea, component: InputFieldTextAreaComponent },
  { name: FormType.text, component: InputFieldTextComponent },
  { name: FormType.select, component: InputFieldSelectComponent },
  { name: FormType.slider, component: InputFieldSliderComponent },
  { name: FormType.signature, component: InputFieldSignatureComponent },
];

export const FORMLY_WRAPPERS: {
  name: Wrapper;
  component: Type<
    | AlertComponent
    | DividerComponent
    | FieldWrapperComponent
    | FormControlWrapperComponent
    | TitleWrapperComponent
    | ParagraphWrapperComponent
  >;
}[] = [
  { name: 'alertWrapper', component: AlertComponent },
  { name: 'dividerWrapper', component: DividerComponent },
  { name: 'fieldWrapper', component: FieldWrapperComponent },
  { name: 'formControlWrapper', component: FormControlWrapperComponent },
  { name: 'titleWrapper', component: TitleWrapperComponent },
  { name: 'paragraphWrapper', component: ParagraphWrapperComponent },
];
