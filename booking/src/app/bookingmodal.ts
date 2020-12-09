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

  constructor(private el: ElementRef, private _bookingServices: BookingServices, private formBuilder: FormBuilder, private dialog: MatDialog, private reactiveFormsModule :ReactiveFormsModule ) {
    this.checkoutForm = this.formBuilder.group({
      name: ''
    });
    this.isEdit=false
  }
  ngOnInit() {
      // we added this so that when the backdrop is clicked the modal is closed.
      this.el.nativeElement.addEventListener('click', ()=> {
          this.close()
      })
  }
  close() {
      this.el.nativeElement.classList.remove('sshow')
      this.el.nativeElement.classList.add('hhidden')
  }

  onSubmit(booking: any) {
    this.addBooking(booking)
    this.checkoutForm.reset();
  }

  addBooking(booking: Booking) {
    this._bookingServices.addBooking(booking).subscribe(
      data => {
        return data;
      }
    );
  }
}
