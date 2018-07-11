import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
// import { MDBBootstrapModule } from "angular-bootstrap-md";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatTabsModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatCardModule,
  MatSidenavModule,
  MatListModule,
  MatDialogModule,
  MatInputModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent, DialogOverviewExampleDialog } from "./app.component";

@NgModule({
  declarations: [AppComponent, DialogOverviewExampleDialog],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  entryComponents: [AppComponent, DialogOverviewExampleDialog],
  bootstrap: [AppComponent]
})
export class AppModule {}
