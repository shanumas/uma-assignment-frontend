import { Component, ElementRef, NgModule, OnInit } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Booking } from './classes/booking';
import { BookingServices } from './services/bookingservices';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'modal',
  templateUrl: './bookingmodal.html',
  styleUrls: ['./app.component.scss']
})
export class BookingModal implements OnInit {
  checkoutForm: any;
  isEdit: boolean;
  modal!: MatDialog;

  constructor(private el: ElementRef, private _bookingServices: BookingServices, private formBuilder: FormBuilder, private dialog: MatDialog, private reactiveFormsModule: ReactiveFormsModule) {
    this.checkoutForm = this.formBuilder.group({
      name: ''
    });
    this.isEdit = false
  }
  ngOnInit() {
    // we added this so that when the backdrop is clicked the modal is closed.
    this.el.nativeElement.addEventListener('click', () => {
      this.modal.closeAll
    })
  }

  addOrEdit(booking: any) {
    if (this.isEdit) {
      this.editBooking(booking)
    }
    else {
      this.addBooking(booking)
    }
    this.isEdit = false
    this.checkoutForm.reset();
    console.log(this.modal)
    this.modal.closeAll()
  }

  addBooking(booking: Booking) {
    this._bookingServices.addBooking(booking).subscribe(
      data => {
        return data;
      }
    );
  }

  editBooking(booking: Booking) {
    this._bookingServices.editBooking(booking).subscribe(
      data => {
        return data;
      }
    );
  }
}
