import { Booking } from './classes/booking';
import { Component } from '@angular/core';
import { BookingServices } from './services/bookingservices';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bookings';
  bookings: Booking[];
  checkoutForm: any;

  constructor(private _bookingServices: BookingServices, private formBuilder: FormBuilder){
     this.bookings = []
     this.checkoutForm = this.formBuilder.group({
      name: ''
    });
  }

  ngOnInit(){
    this._bookingServices.getAllBookings().subscribe(
      data=>{
        this.bookings = data;
      }
    );
  }

  onSubmit(booking:any) {
    this._bookingServices.postBooking(booking).subscribe(
      data=>{
        return data;
      }
    );
    this.checkoutForm.reset();
  }
}
