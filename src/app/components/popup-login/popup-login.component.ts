import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-popup-login',
  templateUrl: './popup-login.component.html',
  styleUrls: ['./popup-login.component.scss']
})
export class PopupLoginComponent {
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  formLogin = this.formBuilder.group({
    email: ['usuarioteste@gmail.com', Validators.required],
    password: ['123456', Validators.required]
  });

  submit() {    
    this.dialogRef.close(this.formLogin.value);
  }

  adicionar() {
    this.submit();
  }
}
