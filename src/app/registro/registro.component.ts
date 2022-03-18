import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup;
  msgErrores: string[];

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) {
    this.msgErrores = [];
    this.formulario = new FormGroup({
      username: new FormControl(),
      nombre: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {

  }

  async onSubmit() {
    try {
      const response = await this.usuariosService.registro(this.formulario.value);
      Swal.fire('Registro correcto', 'Usuario registrado con éxito', 'success');
      this.router.navigate(['/login']);
    } catch (err: any) {
      this.msgErrores = err.error.map((item: any) => item.msg);
    }
  }

}
