import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ModelDrivenFormsService } from '../../service/model-driven-forms.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-forms-view',
  templateUrl: './model-driven-forms-view.component.html',
  styleUrls: ['./model-driven-forms-view.component.css']
})
export class ModelDrivenFormsViewComponent implements OnInit {

  activeRoute: any;
  userId: any;
  userData: any;
  userFormView: FormGroup;
  imageURL: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public modelDrivenService: ModelDrivenFormsService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initializeModelDrivenForm();

    this.route.url.subscribe(params => {
      this.activeRoute = params[1].path;
      if (this.activeRoute == 'read') {
        this.route.paramMap.subscribe(params => {
          this.userId = params.get('userId');
          this.read(this.userId);
        });
      }
    });
  }

  initializeModelDrivenForm() {
    this.userFormView = this.formBuilder.group({
      name: [''],
      profileImage: [''],
      avatar: [null],
      dob: [''],
      gender: [''],
      district: [''],
      email: [''],
      number: [''],
      password: [''],
      about: [''],
      qualification: this.formBuilder.array([]),
    });
  }

  read(id) {
    this.modelDrivenService.read(id).then((response) => {
      this.userData = response;
      this.userFormView.patchValue({
        name: this.userData.name,
        dob: this.userData.dob,
        profileImage: this.userData.profile_image,
        gender: this.userData.gender,
      });
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.userFormView.patchValue({
      avatar: file
    });
    this.userFormView.get('avatar').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

}
