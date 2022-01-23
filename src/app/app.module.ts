import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule} from '@angular/common/http';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { ContactComponent } from './components/contact/contact.component';
import { LogRegisterComponent } from './components/log-register/log-register.component';
import { LoginComponent } from './components/log-register/login/login.component';
import { RegisterComponent } from './components/log-register/register/register.component';
import { AdminComponent } from './components/log-register/admin/admin.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule} from '@angular/material/table';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { MatIconModule } from '@angular/material/icon';
import { AnketComponent } from './components/anket/anket.component';
import { ResultComponent } from './components/result/result.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { JoinComponent } from './components/join/join.component';
import { MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TekanketComponent } from './components/anket/tekanket/tekanket.component';
import { FormanketComponent } from './components/anket/formanket/formanket.component';
import { TekanketjoinComponent } from './components/join/tekanketjoin/tekanketjoin.component';
import { FormanketjoinComponent } from './components/join/formanketjoin/formanketjoin.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatStepperModule} from '@angular/material/stepper';
@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    LogRegisterComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    FooterComponent,
    ContactFormComponent,
    MainComponent,
    AnketComponent,
    ResultComponent,
    JoinComponent,
    TekanketComponent,
    FormanketComponent,
    TekanketjoinComponent,
    FormanketjoinComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatRadioModule,
    MatDividerModule,
    MatCheckboxModule,
    MatListModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatStepperModule

  ],
  providers: [
    {
      provide: 'apiUrl',
      useValue: 'https://demo.limantech.com/cards/public/api'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
