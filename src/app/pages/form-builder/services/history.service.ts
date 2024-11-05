import { Injectable, signal, WritableSignal } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormBuilderTypesService } from './form-builder.service';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private history: WritableSignal<FormlyFieldConfig[]> = signal([]);
  private currentIndex = -1;
  lockHistory = false;
  constructor(private formBuilderService: FormBuilderTypesService) {}

  /**
   * Adds a new state to the form field's change history.
   * If the history is locked, no action is taken.
   * If a new state is added from an intermediate position in the history,
   * it removes subsequent states to avoid inconsistencies.
   *
   * @param field - The `FormlyFieldConfig` form field whose state is to be saved.
   */
  public addState(field: FormlyFieldConfig) {
    if (this.lockHistory) return;

    if (this.currentIndex === -1) {
      this.history.set([this.deepClone(field)]);
      this.currentIndex = 0;
    } else {
      this.history.update((history) => {
        history.splice(this.currentIndex + 1);
        history.push(this.deepClone(field));
        return history;
      });
      this.currentIndex++;
    }
  }

  /**
   * Moves one step back in the form field's change history, restoring the previous state.
   * If the current index is at the first position in the history, no action is taken.
   * While restoring a previous state, history is temporarily locked to prevent duplications.
   */
  public undo(): void {
    if (this.isUndoEnabled()) {
      this.lockHistory = true;
      this.currentIndex -= 1;
      const previousField = this.history()[this.currentIndex];
      this.formBuilderService.fields.set(this.deepClone(previousField));
      this.unlockHistory();
    }
  }

  /**
   * Moves one step forward in the form field's change history, restoring the next state.
   * If the current index is at the last position in the history, no action is taken.
   * While restoring a future state, history is temporarily locked to prevent duplications.
   */
  public redo(): void {
    if (this.isRedoEnabled()) {
      this.lockHistory = true;
      this.currentIndex += 1;
      const nextField = this.history()[this.currentIndex];
      this.formBuilderService.fields.set(this.deepClone(nextField));
      this.unlockHistory();
    }
  }

  public isUndoEnabled(): boolean { 
    return this.currentIndex > 0;
  }

  public isRedoEnabled(): boolean { 
    return this.currentIndex < this.history().length - 1;
  }

  /**
   * Unlocks the history after a short delay.
   * Used to prevent unwanted changes in history while navigating between states.
   */
  private unlockHistory(): void {
    setTimeout(() => {
      this.lockHistory = false;
    }, 500);
  }

  /**
   * Creates a deep copy of a `FormlyFieldConfig` form field.
   * Uses JSON serialization and deserialization to ensure the copy
   * has no references to the original object.
   *
   * @param field - The `FormlyFieldConfig` field to be cloned.
   * @returns A deep copy of the provided field.
   */
  private deepClone(field: FormlyFieldConfig): FormlyFieldConfig {
    return JSON.parse(JSON.stringify(field));
  }
}
