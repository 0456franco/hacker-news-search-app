import { Component, Inject, OnInit } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.scss']
})
export class ErrorHandlerComponent implements OnInit {

  displayMessage: string = ''

  constructor(private dialogRef: MatDialogRef<ErrorHandlerComponent>, @Inject(MAT_DIALOG_DATA) private dat: any) {}

  ngOnInit(): void {
    this.displayMessage = this.dat.errorMessage
  }

  close() {
    this.dialogRef.close()
  }

}
