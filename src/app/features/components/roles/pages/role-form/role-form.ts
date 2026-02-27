import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-role-form',
  standalone: false,
  templateUrl: './role-form.html',
  styleUrl: './role-form.scss',
})
export class RoleForm {
roleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.roleForm = this.fb.group({
      roleName: ['', Validators.required],
      description: [''],
      isActive: [true]
    });
  }

  submit() {
    if (this.roleForm.invalid) {
      this.roleForm.markAllAsTouched();
      return;
    }

    console.log('Role Form Data:', this.roleForm.value);

    // later call API
    // this.roleService.createRole(this.roleForm.value).subscribe()
  }
}
