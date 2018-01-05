import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NbAuthService } from '@nebular/auth/services/auth.service';

@Component({
  selector: 'auth-reset',
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent {
  redirectDelay: number;
  showMessages: any;
  provider: string;
  submitted: boolean;
  errors = [];
  messages = [];
  user: any = {};
  returnUrl: string;
  constructor(private router: Router, private route: ActivatedRoute) {

  }

  resetPass() {
   
  }
}
