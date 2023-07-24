import { Component } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { Mascota } from 'src/model/mascotaModel';

import { SupabaseService } from 'src/app/supabase.service';
const supabaseUrl = 'https://ryywbodcbzdifqoaarye.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5eXdib2RjYnpkaWZxb2FhcnllIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQwOTE2MzksImV4cCI6MTk4OTY2NzYzOX0.PT8r9YjcgJq78w-hKm1BOV2m8cApAPeNTYDb4_5_DOE';
const supabase = createClient(supabaseUrl, supabaseKey);

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent {
  
  mascotaModel = new Mascota("");
  error1: string | undefined;
  bien: string | undefined;
  erro3: string | undefined;
  error2: string | undefined;
  boolean: number | undefined;
  
  constructor() {}

  ngOnInit() {}

  formularioEnviado(){
    /*
    Aquí el formulario ha sido enviado, ya sea
    por presionar el botón, presionar Enter, etcétera
    */
    console.log("El formulario fue enviado y la mascota es: ", this.mascotaModel.nombre)
    alert("Enviado");
    this.updatePassword(this.mascotaModel.nombre)
  }
  async updatePassword(newPassword: string) {
    const { error } = await supabase.auth.updateUser({ password: newPassword })
    if (error) {
      // Handle error (e.g., invalid reset token, API request failed, etc.)
      console.log(error);
      if(error.status == 422 && error.message == 'New password should be different from the old password.'){
        this.boolean = 1;
        this.error1 = 'La nueva contraseña debe ser diferente de la contraseña anterior.';
      }else if(error.status == 422 && error.message == 'Password should be at least 6 characters'){
        this.boolean = 2;
        this.error2 = 'La contraseña debe tener al menos 6 caracteres';
      }else{
        this.boolean = 3;
        this.erro3 = 'Error, al cambiar la contraseña';
      }
    } else {
      this.boolean = 4 ;
      // Password updated successfully, notify the user
      this.bien='La contraseña se ha cambiado con éxito.'

    }
  }
  

}
