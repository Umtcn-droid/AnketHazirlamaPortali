import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { MatCardModule} from '@angular/material/card';
import { MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { ManagementComponentsComponent } from './management-components/management-components.component';
import { AyarlarComponent } from './management-components/ayarlar/ayarlar.component';
import { MatTabsModule} from '@angular/material/tabs';
import { UyelerComponent } from './management-components/uyeler/uyeler.component';
import { OutPageComponent } from './management-components/out-page/out-page.component';
import { MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { DialogComponent } from './management-components/uyeler/dialog/dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule} from '@angular/material/toolbar';
import { ConfirmdialogComponent } from './management-components/uyeler/confirmdialog/confirmdialog.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { SonucComponent } from './management-components/sonuc/sonuc.component';
import { HomeComponent } from './management-components/home/home.component';
import { SurveyComponent } from './management-components/survey/survey.component';
import { SurveyconfirmdialogComponent } from './management-components/survey/surveyconfirmdialog/surveyconfirmdialog.component';
import { SurveydialogComponent } from './management-components/survey/surveydialog/surveydialog.component';
import { FootComponent } from './management-components/foot/foot.component';

@NgModule({
  declarations: [
    CardsComponent,
    ManagementComponentsComponent,
    AyarlarComponent,
    UyelerComponent,
    OutPageComponent,
    DialogComponent,
    ConfirmdialogComponent,
    SonucComponent,
    HomeComponent,
    SurveyComponent,
    SurveyconfirmdialogComponent,
    SurveydialogComponent,
    FootComponent

    ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule

  ]
})
export class CardsModule { }
