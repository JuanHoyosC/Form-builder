import { Component, inject, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormBuilderTypesService } from '../../../pages/form-builder/services/form-builder.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FORM_FIELD_LIST } from '../../../pages/form-builder/config/form-fields.config';
import {
  CustomFormlyFieldConfig,
  FormFieldList,
  FormType,
} from '../../../pages/form-builder/types/form-builder.types';
import {
  TreeOptions,
  TreeSelectComponent,
} from '../tree-select/tree-select.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
@Component({
  selector: 'app-conditional',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    DropdownModule,
    FormsModule,
    TreeSelectComponent,
    InputTextModule,
    InputNumberModule,
    CalendarModule,
    CheckboxModule,
  ],
  templateUrl: './conditional.component.html',
  styleUrl: './conditional.component.css',
})
export class ConditionalComponent implements OnInit {
  fieldService = inject(FormBuilderTypesService);
  activeNode: TreeOptions | undefined = undefined;
  treeOptions: TreeOptions[] = [];
  ignoreFieldTypes: FormType[] = [
    FormType.alert,
    FormType.divider,
    FormType.paragraph,
    FormType.title,
  ];

  comparisonOperators = [
    'Is empty',
    'Is not empty',
    'Is equal to',
    'Is not equal to',
    'Is less than',
    'Is greater than',
    'Is less than or equal to',
    'Is greater than or equal to',
    'Starts with',
    'Ends with',
    'Contains',
  ];

  conditionTree: ConditionGroup = {
    conditional: 'AND', // Primer nivel de agrupación (OR)
    conditions: [
      {
        conditional: 'OR', // Grupo 1: (age > 18 AND status == 'active')
        conditions: [
          {
            property: undefined,
            operator: undefined,
            value: undefined,
            conditions: [],
          },
        ],
      },
    ],
  };

  fields: FormFieldList[] = FORM_FIELD_LIST;

  ngOnInit(): void {
    this.initializesTreeOptions();
  }
  /**
   * Método para añadir un nuevo grupo de condiciones a un nivel específico del árbol.
   * @param logicalOperator - El operador lógico ('AND' o 'OR') para el nuevo grupo.
   * @param groupIndex - El índice en el que se insertará el nuevo grupo.
   */
  addConditionGroup(
    conditions: any[],
    logicalOperator: LogicalOperator,
    groupIndex: number
  ): void {
    // Crear un nuevo grupo de condiciones con un placeholder vacío
    const newGroup: ConditionGroup = {
      conditional: logicalOperator,
      conditions: [
        {
          property: '',
          operator: undefined,
          value: '',
          conditions: [],
        },
      ],
    };

    // Verifica si conditionTree tiene condiciones inicializadas
    if (!conditions) {
      conditions = [];
    }

    // Insertar el nuevo grupo en la posición deseada
    conditions.push(newGroup);
    console.log(this.buildJsCondition(this.conditionTree), this.conditionTree);
    localStorage.setItem('conditions', JSON.stringify(this.conditionTree));
  }

  buildJsCondition(conditionTree: ConditionGroup): string {
    const buildExpression = (node: ConditionGroup): string => {
      if (node.conditions && node.conditions.length > 0) {
        // Si el nodo tiene subcondiciones, procesarlas
        const subExpressions = node.conditions
          .map((subNode) => {
            if (
              subNode.property &&
              subNode.operator &&
              subNode.value !== undefined
            ) {
              // Si la subcondición tiene propiedad, operador y valor
              return this.getJsCondition(subNode);
            } else if (subNode.conditions && subNode.conditions.length > 0) {
              // Si es un subgrupo, procesarlo recursivamente
              return buildExpression(subNode);
            }
            return ''; // Si no tiene subcondición válida
          })
          .filter((expr) => expr !== ''); // Filtrar las expresiones vacías

        // Si hay subexpresiones válidas, unirlas con el operador lógico
        if (subExpressions.length > 0) {
          return `(${subExpressions.join(` ${node.conditional || '&&'} `)})`;
        } else {
          return ''; // Si no hay subexpresiones válidas
        }
      } else {
        // Si no tiene subcondiciones, procesar la condición directamente
        if (node.property && node.operator && node.value !== undefined) {
          return this.getJsCondition(node);
        } else {
          return ''; // Si la condición no está bien formada
        }
      }
    };

    // Llamar a la función recursiva para el árbol principal
    return buildExpression(conditionTree);
  }

  // Función que transforma una condición a un condicional JS
  private getJsCondition(node: ConditionGroup): string {
    const propertyString = this.getPropertyString(node.property);

    switch (node.operator) {
      case 'Is empty':
        return `${propertyString} === ''`;
      case 'Is not empty':
        return `${propertyString} !== ''`;
      case 'Is equal to':
        return `${propertyString} === ${JSON.stringify(node.value)}`;
      case 'Is not equal to':
        return `${propertyString} !== ${JSON.stringify(node.value)}`;
      case 'Is less than':
        return `${propertyString} < ${JSON.stringify(node.value)}`;
      case 'Is greater than':
        return `${propertyString} > ${JSON.stringify(node.value)}`;
      case 'Is less than or equal to':
        return `${propertyString} <= ${JSON.stringify(node.value)}`;
      case 'Is greater than or equal to':
        return `${propertyString} >= ${JSON.stringify(node.value)}`;
      case 'Starts with':
        return `${propertyString}.startsWith(${JSON.stringify(node.value)})`;
      case 'Ends with':
        return `${propertyString}.endsWith(${JSON.stringify(node.value)})`;
      case 'Contains':
        return `${propertyString}.includes(${JSON.stringify(node.value)})`;
      default:
        return '';
    }
  }

  // Función para manejar propiedades que pueden ser objetos complejos
  // Función recursiva para generar la expresión lógica
  buildConditionExpression(conditionTree: ConditionGroup): string {
    const buildExpression = (node: ConditionGroup): string => {
      if (node.conditions && node.conditions.length > 0) {
        // Si el nodo tiene subcondiciones, procesarlas
        const subExpressions = node.conditions
          .map((subNode) => {
            // Verificar que la subcondición tenga propiedad, operador y valor
            if (
              subNode.property &&
              subNode.operator &&
              subNode.value !== undefined
            ) {
              const propertyString = this.getPropertyString(subNode.property);
              return `${propertyString} ${subNode.operator} ${JSON.stringify(
                subNode.value
              )}`;
            } else if (subNode.conditions && subNode.conditions.length > 0) {
              // Si la subcondición es un subgrupo, procesarlo recursivamente
              return buildExpression(subNode);
            }
            return ''; // Si la subcondición está vacía, retornar cadena vacía
          })
          .filter((expr) => expr !== ''); // Filtrar las expresiones vacías

        // Si hay subexpresiones válidas, unirlas con el operador lógico
        if (subExpressions.length > 0) {
          return `(${subExpressions.join(` ${node.conditional || 'AND'} `)})`;
        } else {
          return ''; // Si no hay subexpresiones válidas, retornar cadena vacía
        }
      } else {
        // Si no tiene subcondiciones, procesar la condición directamente
        if (node.property && node.operator && node.value !== undefined) {
          const propertyString = this.getPropertyString(node.property);
          return `${propertyString} ${node.operator} ${JSON.stringify(
            node.value
          )}`;
        } else {
          return ''; // Si la condición está mal formada, retornar una cadena vacía
        }
      }
    };

    // Llamar a la función recursiva para el árbol principal
    return buildExpression(conditionTree);
  }

  // Función para manejar propiedades que pueden ser objetos complejos
  private getPropertyString(property: any): string {
    if (typeof property === 'object' && property !== null) {
      return property.key || property.label || JSON.stringify(property); // Devuelve 'key' si existe, o 'label'
    }
    return property; // Si es un string o cualquier otro tipo, se devuelve tal cual
  }

  /**
   * Initializes the tree nodes using the fields provided by the service.
   */
  initializesTreeOptions(): void {
    const formFields = this.fieldService.fields();
    this.treeOptions = this.convertToTreeOptions(
      { fieldGroup: [formFields], type: undefined, props: {} },
      ''
    );
  }

  /**
   * Converts a group of Formly fields into tree nodes.
   * @param item - Formly field configuration object.
   * @returns An array of `TreeOptions` nodes.
   */
  convertToTreeOptions(
    item: CustomFormlyFieldConfig,
    parentKey: string
  ): TreeOptions[] {
    const nodes: TreeOptions[] = [];

    // Checks if the item has a field group and processes each child field.
    if (this.hasFieldGroup(item)) {
      item.fieldGroup!.forEach((child) => {
        const node = this.createTreeOption(child, parentKey);
        if (node) nodes.push(node);
      });
    }

    return nodes;
  }

  /**
   * Checks if a Formly field contains a group of subfields.
   * @param item - Formly field configuration object.
   * @returns True if the field contains a field group, false otherwise.
   */
  private hasFieldGroup(item: CustomFormlyFieldConfig): boolean | undefined {
    return item.fieldGroup && Array.isArray(item.fieldGroup);
  }

  /**
   * Creates a tree node based on a Formly field configuration.
   * @param child - Formly field configuration object.
   * @returns A `TreeOptions` node or null if the field type should be ignored.
   */
  private createTreeOption(
    child: CustomFormlyFieldConfig,
    parentKey: string
  ): TreeOptions | null {
    const childType = child.type as FormType;

    if (this.ignoreFieldTypes.includes(childType)) return null;
    const node: TreeOptions = {
      key: this.combineKeys(parentKey, child.key as string),
      label: child.props?.label ?? '',
      data: child.key,
      selectable: !child.fieldGroup,
      expanded: true,
      icon: this.getIcon(childType),
    };

    if (this.hasFieldGroup(child)) {
      node.children = this.convertToTreeOptions(child, node.key as string);
    }

    return node;
  }

  /**
   * Combines parentKey and childKey, adding a dot separator only if parentKey exists.
   * @param parentKey - The key of the parent node.
   * @param childKey - The key of the child node.
   * @returns A combined string in the format "parentKey.childKey" or just "childKey" if parentKey is empty.
   */
  combineKeys(
    parentKey: string | undefined,
    childKey: string | undefined
  ): string {
    return parentKey ? `${parentKey}.${childKey ?? ''}` : childKey ?? '';
  }

  /**
   * Retrieves the icon corresponding to a specific field type.
   * @param type - The type of the field (FormType).
   * @returns The icon name as a string.
   */
  getIcon(type: FormType): string {
    return (
      this.fields
        .flatMap((field) => field.items)
        .find((child) => child.field.type === type)?.icon || ''
    );
  }
}

type LogicalOperator = 'AND' | 'OR';

interface ConditionGroup {
  property?: any; // Propiedad del objeto a evaluar (ej: 'age', 'status')
  operator?:
    | 'Is empty'
    | 'Is not empty'
    | 'Is equal to'
    | 'Is not equal to'
    | 'Is less than'
    | 'Is greater than'
    | 'Is less than or equal to'
    | 'Is greater than or equal to'
    | 'Starts with'
    | 'Ends with'
    | 'Contains';
  value?: any; // Valor contra el que se compara la propiedad
  conditions: ConditionGroup[]; // Condiciones o subgrupos de condiciones
  conditional?: LogicalOperator; // Operador lógico para unir las condiciones,
}
