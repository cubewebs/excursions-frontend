import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../excursion-list/customer.interface';

@Component({
  selector: 'app-add-edit-excursion',
  templateUrl: './add-edit-excursion.component.html',
  styleUrl: './add-edit-excursion.component.css',
})
export class AddEditExcursionComponent {
  private fb: FormBuilder = inject(FormBuilder);

  form = this.fb.group({
    name: [, [Validators.required]],
    price: [, [Validators.required]],
    description: [, [Validators.required, Validators.maxLength(50)]],
    highlights: [, [Validators.required]],
    fullDescription: [, [Validators.required, Validators.minLength(100)]],
    includes: [, [Validators.required]],
    notSuitableFor: [, [Validators.required]],
    importantInfo: [, [Validators.required]],
  });

  isNotValidField(field: string): boolean {
    return (
      this.form.get(field)?.touched &&
      this.form.get(field)?.getError('required')
    );
  }

  getFieldErrorTxt(field: string): string | null {
    if (!this.form.get(field) && !this.form.get(field)?.touched) return null;

    const errors = this.form.get(field)?.errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'This field is required';
        case 'minlength':
          return `${errors['minlength'].requiredLength} characters are the minimum required`;
        case 'maxlenght':
          return `${errors['maxlength'].requiredLength} characters are the maximum required`;
        case null:
          return null;
      }
    }
    return null;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched;
      return;
    }

    const formValues: Customer = {
      name: this.form.value.name,
      price: this.form.value.price,
      description: this.form.value.description,
      highlights: this.form.value.highlights,
      fullDescription: this.form.value.fullDescription,
      includes: this.form.value.includes,
      notSuitableFor: this.form.value.notSuitableFor,
      importantInfo: this.form.value.importantInfo,
    };
    console.log(this.form.value);
  }
}
