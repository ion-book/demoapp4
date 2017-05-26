import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
      name: new FormControl(''),
      account: new FormGroup({
        email: new FormControl(''),
        confirm: new FormControl('')
      })
      });
  }

  onSubmit({ value, valid }: { value: Usuario, valid: boolean }) {
    console.log(value, valid);
  }
}
