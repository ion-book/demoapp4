import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user:FormGroup;

  constructor(){
    this.user = new FormGroup({});
  }
  
  ngOnInit(){
    this.user = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    account: new FormGroup({
      email: new FormControl('', Validators.required),
      confirm: new FormControl('', Validators.required)
    })
  });
  }

  onSubmit({ value, valid }: { value: Usuario, valid: boolean }) {
    console.log(value, valid);
  }
}
