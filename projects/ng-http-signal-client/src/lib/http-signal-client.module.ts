import { NgModule } from '@angular/core';
import { HttpSignalClient } from './http-signal-client.service';



@NgModule({
  providers: [ HttpSignalClient ],
})
export class HttpSignalClientModule { }
