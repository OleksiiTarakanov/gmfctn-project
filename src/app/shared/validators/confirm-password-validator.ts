import { FormGroup, ValidationErrors } from '@angular/forms';

export function confirmPasswordValidator(formGroup: FormGroup): ValidationErrors | null {
    const pass = formGroup.get('oldPassword')?.value;
    const confPass = formGroup.get('newPassword')?.value;
 
    return pass === confPass ? null : { notSame: true };
}
