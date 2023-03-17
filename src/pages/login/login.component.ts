import { Component, OnInit, Input } from '@angular/core';
import { Form, FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {filter, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginValid = true;
  public username = '';
  public password = '';
  constructor() {}

  public ngOnInit(): void {
  }

  public onSubmit(): void {
    this.loginValid = true;
  }

}
