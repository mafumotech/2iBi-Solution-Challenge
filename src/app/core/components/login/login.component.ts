import { ToastrManager } from 'ng6-toastr-notifications';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  buttonLoading: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private aroute: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private toastr: ToastrManager,
  ) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(6)])
    })
  }

  goToDashboard() {
    this.router.navigate(['/dashboard'])
  }

  onLogin(cridentials: FormGroup) {

    this.buttonLoading = true

    this.auth.login(cridentials).subscribe(
      (user: any) => {

        user.subscribe(userData => {

          if (userData.profile === 'admin') {
            //  ||'/dashboard'userData.profile==='guest' ||userData.profile === 'guest' || 
            this.toastr.infoToastr('Somente os comerciantes são autorizados a acessar esta conta!', 'Alerta',{position:'top-center'})
            localStorage.clear()
            this.buttonLoading = false
          } else {

            localStorage.setItem('user', JSON.stringify(userData))

            this.router.navigate([this.aroute.parent.snapshot.queryParams['url'] || '/dashboard'])

            this.toastr.successToastr('Login efectuado com sucesso!', 'Alerta',{position:'top-center'})
            this.buttonLoading = false
          }
        },
          () => {
            this.buttonLoading = false
          })

      },
      () => {
        this.buttonLoading = false
      }
    )
  }


}
