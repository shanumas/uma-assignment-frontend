import { BookingModal } from './bookingmodal';
import { Booking } from './classes/booking';
import { Component, ViewChild } from '@angular/core';
import { BookingServices } from './services/bookingservices';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Bookings';
  bookings: Booking[];
  checkoutForm: any;

  constructor(private _bookingServices: BookingServices, private dialog: MatDialog, private formBuilder: FormBuilder) {
    this.bookings = []
    setInterval(() => { this.fetchBookings(); }, 1000);
  }

  add() {
    const modalRef = this.dialog.open(BookingModal);
  }

  edit(booking:Booking) {
    const modalRef = this.dialog.open(BookingModal);
    modalRef.componentInstance.checkoutForm = this.formBuilder.group(booking);
  }

  ngOnInit() {
    this.fetchBookings()
  }

  deleteBooking(event: any, booking: Booking) {
    console.log('Sending delete message')
    this._bookingServices.deleteBooking(booking.id).subscribe(
      data => {
        return data;
      }
    );
  }

  fetchBookings() {
    if (this._bookingServices) {
      this._bookingServices.getAllBookings().subscribe(
        data => {
          console.log('Fetch all bookings...')
          this.bookings = data;
        }
      );
    }
  }
}
