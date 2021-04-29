import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignFormComponent } from './sign-form/sign-form.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
// import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }


@NgModule({
  declarations: [
    AppComponent,
    SignFormComponent,
    ListUsersComponent,
    HomeComponent,
    LoginComponent,

    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    // TranslateModule.forRoot({
    //     loader: {
    //         provide: TranslateLoader,
    //         useFactory: HttpLoaderFactory,
    //         deps: [HttpClient]
    //     }
    //   })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
