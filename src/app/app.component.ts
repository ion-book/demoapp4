import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user:FormGroup;

  constructor(private fb:FormBuilder){
  }
  
  ngOnInit(){
    this.user = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    account: this.fb.group({
      email: ['', Validators.required],
      confirm: ['', Validators.required]
    })
  });
  }

  onSubmit({ value, valid }: { value: Usuario, valid: boolean }) {
    console.log(value, valid);
  }
}
