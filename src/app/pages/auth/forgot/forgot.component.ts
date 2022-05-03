import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import toastr from 'toastr';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  recuperarSenha() {
    if (this.form.invalid) {
      toastr.error('E-mail inválidos');
      return;
    }

    console.table(this.form.value);
  }
}
