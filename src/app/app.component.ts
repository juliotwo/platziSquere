import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzisquere';
  a = 2;
  b = 2;
  listo = false;
  nombre = "";

  constructor(){
    setTimeout(() => {
      this.listo = true;
    }, 3000)
  }
  hacerAlgo(){
    alert('Haciendo algo');
  }
}
