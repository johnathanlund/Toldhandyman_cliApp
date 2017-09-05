import { Component, OnInit, ViewChild, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PageScroll } from 'ng2-page-scroll';
// import { ModalModule } from 'ng2-modal';
import { SwiperModule, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import { Http } from '@angular/http';
import { DataService }  from '../_services/data.service';
import { MyModalService } from '../_services/myModal.service';

@Component({
  selector: 'app-told-handyman',
  templateUrl: './told-handyman.component.html',
  styleUrls: [
    '../_styles/told-handyman.component.css',
    '../_styles/told-handyman-top_title.component.css',
    '../_styles/told-handyman-top_menu.component.css',
    '../_styles/told-handyman-top_gallery.component.css',
    '../_styles/told-handyman-mid_services.component.css',
    '../_styles/told-handyman-mid_about.component.css',
    '../_styles/told-handyman-mid_reviews.component.css',
    '../_styles/told-handyman-bottom_contact.component.css',
    '../_styles/told-handyman-bottom_footer.component.css',
  ]
})
export class ToldHandymanComponent implements OnInit {

// @ViewChild(swiper) swiperContainer: SwiperModule;

addContactForm: FormGroup;
contactName = new FormControl('', Validators.required);
contactEmail = new FormControl('', Validators.required);
contactPhone1of3 = new FormControl('', Validators.required);
contactPhone2of3 = new FormControl('', Validators.required);
contactPhone3of3 = new FormControl('', Validators.required);
contactMessage = new FormControl('', Validators.required);

phoneCombined = '';

  config: Object = {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          spaceBetween: 30,
          loop: true,
          // This adds autoplay option to the gallery
          // autoplay: 4500,
          // autoplayDisableOnInteraction: false
  };

  gallerys = [];
  galleryIsLoading = true;

  gallery = {};
  galleryIsEditing = false;

  services = [];
  isLoading = true;

  service = {};
  isEditing = false;

  serviceLists = [];
  isLoadingList = true;

  serviceList = {};
  isEditingList = false;

  reviews = [];
  reviewIsLoading = true;

  review = {};
  reviewIsEditing = false;

  public callUsIsFixed: boolean = false;


  constructor(
              @Inject(DOCUMENT)
              public document: Document,
              public http: Http,
              public dataService: DataService,
              public formBuilder: FormBuilder,
              public myModalService: MyModalService
            ){ }

  ngOnInit() {
    this.addContactForm = this.formBuilder.group({
      contactName: this.contactName,
      contactEmail: this.contactEmail,
      contactPhone1of3: this.contactPhone1of3,
      contactPhone2of3: this.contactPhone2of3,
      contactPhone3of3: this.contactPhone3of3,
      // contactPhone: this.phoneCombined,
      // contactPhone1of3 + contactPhone2of3 + contactPhone3of3: this.contactPhone,
      contactMessage: this.contactMessage,
    });
    this.phoneCombined = this.addContactForm.value.contactPhone1of3;

  }

  @HostListener("window:scroll", [])
 onWindowScroll() {
   let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
   if (number > 500) {
     this.callUsIsFixed = true;
   } else if (this.callUsIsFixed && number < 10) {
     this.callUsIsFixed = false;
   }
 }

  //===============Contact Form Connections=====================================
  createContactForm() {
    // this.addContactForm.value.contactPhone = this.phoneCombined;
    // console.log(" PART 2 Create Contact Form shows contactPhone as: " + this.addContactForm.value.contactPhone);
    console.log('Create Contact Form shows contactPhone as: ' + '(' + this.addContactForm.value.contactPhone1of3 + ')' + this.addContactForm.value.contactPhone2of3 + '-' + this.addContactForm.value.contactPhone3of3);
    // console.log("PART 3 Create Contact Form shows phoneCombined as: " + this.phoneCombined);
    this.dataService.createContactForm(this.addContactForm.value).subscribe(
      res => {
        const newContactForm = res.json();
        console.log('Create contact form successfull at AdminHandymanComponent.');
        this.addContactForm.reset();
      },
      error => console.log('Create contact form error at AdminHandymanComponent.')
    );
  }

  openMyModal(id: string){
     this.myModalService.open(id);
 }

 closeMyModal(id: string){
     this.myModalService.close(id);
 }

}
