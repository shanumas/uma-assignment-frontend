import { Booking } from './classes/booking';
import { Component } from '@angular/core';
import { BookingServices } from './services/bookingservices';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bookings';

  constructor(private _bookingServices: BookingServices){
     this.bookings = []
  }

  bookings: Booking[];

  ngOnInit(){
    this._bookingServices.getAllBookings().subscribe(
      data=>{
        this.bookings = data;
      }
    );
  }
}
