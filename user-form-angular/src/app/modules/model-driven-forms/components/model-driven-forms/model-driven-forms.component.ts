import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ModelDrivenFormsService } from '../../service/model-driven-forms.service';

@Component({
  selector: 'app-model-driven-forms',
  templateUrl: './model-driven-forms.component.html',
  styleUrls: ['./model-driven-forms.component.css']
})
export class ModelDrivenFormsComponent implements OnInit {

  userForm: FormGroup;
  formData: any = new FormData();

  checkboxData: Array<any> = [
    { name: 'UG', value: 'ug' },
    { name: 'PG', value: 'pg' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    public modelDrivenService: ModelDrivenFormsService,
  ) { }

  ngOnInit(): void {
    this.initializeModelDrivenForm();
  }

  initializeModelDrivenForm() {
    this.userForm = this.formBuilder.group({
      name: [''],
      profileImage: [''],
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

  submit() {
    this.formData.append('name', this.userForm.get('name').value);
    this.formData.append('profileImage', this.userForm.get('profileImage').value);
    this.formData.append('dob', this.userForm.get('dob').value);
    this.formData.append('gender', this.userForm.get('gender').value);
    this.formData.append('district', this.userForm.get('district').value);
    this.formData.append('email', this.userForm.get('email').value);
    this.formData.append('number', this.userForm.get('number').value);
    this.formData.append('password', this.userForm.get('password').value);
    this.formData.append('about', this.userForm.get('about').value);
    this.formData.append('qualification', this.userForm.get('qualification').value);
    this.create(this.formData);
  }

  profileImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userForm.get('profileImage').setValue(file);
    }
  }

  onCheckboxChange(event) {
    const qualification: FormArray = this.userForm.get('qualification') as FormArray;

    if (event.target.checked) {
      qualification.push(new FormControl(event.target.value));
    } else {
      let i: number = 0;
      qualification.controls.forEach((item: FormControl) => {
        if (item.value == event.target.value) {
          qualification.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  create(data) {
    this.modelDrivenService.create(data).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }

}
