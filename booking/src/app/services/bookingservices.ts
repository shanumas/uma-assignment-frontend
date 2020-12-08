import { Booking } from './../classes/booking';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const consumerURL: string = "http://localhost:9091/";

@Injectable()
export class BookingServices {
  constructor(private httpclient: HttpClient) {

  }

  getAllBookings(): Observable<any> {
    return this.httpclient.get(consumerURL + "bookings");
  }

}
