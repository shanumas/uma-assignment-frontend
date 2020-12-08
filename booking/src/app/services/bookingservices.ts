import { Booking } from './../classes/booking';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const consumerURL: string = "http://localhost:9091/";
const producerURL: string = "http://localhost:9090/";

@Injectable()
export class BookingServices {
  constructor(private httpclient: HttpClient) {

  }

  getAllBookings(): Observable<any> {
    return this.httpclient.get(consumerURL + "bookings");
  }

  postBooking(booking:Booking): Observable<any>{
    console.log(booking.name)
    return this.httpclient.post(producerURL+"book", booking)
  }

}
