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

  addBooking(booking:Booking): Observable<any>{
    return this.httpclient.post(producerURL+"add", booking)
  }

  editBooking(booking:Booking): Observable<any>{
    return this.httpclient.post(producerURL+"update", booking)
  }

  deleteBooking(id:Number): Observable<any>{
    return this.httpclient.delete(producerURL + "delete/"+id)
  }

}
