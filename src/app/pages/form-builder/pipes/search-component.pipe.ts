import { Pipe, PipeTransform } from '@angular/core';
import { FormFieldItem, FormFieldList } from '../interfaces/form-builder';

@Pipe({
  name: 'searchComponent',
  standalone: true,
})
export class SearchComponentPipe implements PipeTransform {
  /**
   * Transforms a list of FormFieldList objects by filtering items based on a search term.
   * The search is case-insensitive and only returns field lists with matching items.
   *
   * @param formFieldList - An array of FormFieldList objects to be filtered.
   * @param search - The search term to filter by.
   * @returns FormFieldList[] - The filtered list with only the items matching the search term.
   */
  transform(formFieldList: FormFieldList[], search: string): FormFieldList[] {
    if (!this.isValidSearch(search)) return formFieldList;

    const lowerCaseSearch = search.toLowerCase().trim();

    return this.filterFieldLists(formFieldList, lowerCaseSearch);
  }

  /**
   * Checks if the search term is valid (non-empty and not just whitespace).
   * 
   * @param search - The search term to validate.
   * @returns boolean - True if the search term is valid.
   */
  private isValidSearch(search: string): boolean {
    return !!search?.trim();
  }

  /**
   * Filters the list of FormFieldList objects based on the search term.
   * 
   * @param formFieldList - An array of FormFieldList objects.
   * @param search - The lowercased search term to filter by.
   * @returns FormFieldList[] - The filtered list of FormFieldList objects.
   */
  private filterFieldLists(formFieldList: FormFieldList[], search: string): FormFieldList[] {
    return formFieldList
      .map(fieldList => this.getFilteredFieldList(fieldList, search))
      .filter(Boolean) as FormFieldList[];
  }

  /**
   * Filters the items within a FormFieldList based on the search term.
   * 
   * @param fieldList - A single FormFieldList object.
   * @param search - The lowercased search term to filter items by.
   * @returns FormFieldList | null - A new FormFieldList with filtered items or null if no items match.
   */
  private getFilteredFieldList(fieldList: FormFieldList, search: string): FormFieldList | null {
    const filteredItems = this.filterItems(fieldList.items, search);
    return filteredItems.length > 0 ? { ...fieldList, items: filteredItems } : null;
  }

  /**
   * Filters the FormFieldItem array to only include items that match the search term.
   * 
   * @param items - An array of FormFieldItem objects.
   * @param search - The lowercased search term.
   * @returns FormFieldItem[] - The filtered list of FormFieldItem objects.
   */
  private filterItems(items: FormFieldItem[], search: string): FormFieldItem[] {
    return items.filter(item => item.label?.toLowerCase().includes(search));
  }
}
