import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
// import * as mojs from "mo-js";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  fillerNav = Array(10)
    .fill(0)
    .map((_, i) => `Nav Item ${i + 1}`);

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {
    // document.addEventListener("click", function(e) {
    //   console.log(e);
    //   burst1
    //     .tune({ x: e.pageX, y: e.pageY })
    //     .generate()
    //     .replay();
    // });
  }

  check(value) {
    console.log("yes, ", value);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: "250px",
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed", result);
      this.animal = result;
    });
  }

  change(event) {
    console.log(event.target.value);
  }

  /* test */

  // document.addEventListener( 'click', function(e) {

  //   this.burst1
  //     .tune({ x: e.pageX, y: e.pageY })
  //     .generate()
  //     .replay();

  // });
}

@Component({
  selector: "dialog-overview-example-dialog",
  templateUrl: "dialog-overview-example-dialog.html"
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log("data: ", data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
