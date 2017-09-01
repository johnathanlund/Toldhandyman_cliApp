import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToldHandymanComponent } from './told-handyman/told-handyman.component';
import { AdminHandymanComponent } from './admin-handyman/admin-handyman.component';
// import { LoginComponent }         from './login/login.component';
// import { RegisterComponent }      from './register/register.component';
// import { MyModalComponent }       from './_directives/myModal.component';
// import { UploadImageComponent }   from './UploadImage/uploadImage.component';

import { DataService }            from './_services/data.service';
// import { AuthenticationService }  from './_services/authentication.service';
// import { UserService }            from './_services/user.service';
import { MyModalService }         from './_services/myModal.service';
// import { ImagePreview }           from './_directives/image-preview.directive';
// import { AuthService }            from './_guards/auth.service';
import { AppConfig }              from './app.config';

import { Ng2PageScrollModule }    from 'ng2-page-scroll/ng2-page-scroll';
import { ModalModule }            from 'ng2-modal';
import { FileUploadModule }       from 'ng2-file-upload/file-upload/file-upload.module';
import { SwiperModule }           from 'angular2-useful-swiper';
import { MyModalComponent }       from './_directives/myModal.component';

@NgModule({
  declarations: [
    AppComponent,
    ToldHandymanComponent,
    AdminHandymanComponent,
    MyModalComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2PageScrollModule.forRoot(),
    FileUploadModule,
    ModalModule,
  ],
  providers: [
    DataService,
    AppConfig,
    MyModalService,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
