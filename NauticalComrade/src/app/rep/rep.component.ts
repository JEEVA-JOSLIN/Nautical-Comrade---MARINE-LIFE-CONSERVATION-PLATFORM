import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";

import { Profile } from "../models/Profile";
import { ProfileService } from "../services/profile.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-rep',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './rep.component.html',
  styleUrl: './rep.component.css'
})
export class RepComponent implements OnInit {
  form: FormGroup;
  profile: Profile={_id:"",name:"",imagePath:""};
  imageData: string="";

  constructor(private profileService: ProfileService) {
    this.form = new FormGroup({
      name: new FormControl(null),
      image: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null),
      image: new FormControl(null),
    });
  }

  onFileSelect(event: Event) {
    alert("d")
    const fileInput = event.target as HTMLInputElement;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      alert("wqs");
        const file: File = fileInput.files[0]; // Declare file as type File
        this.form.patchValue({ image: file });
    
        const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
        if (file && allowedMimeTypes.includes(file.type)) {
            const reader = new FileReader();
            reader.onload = () => {
                this.imageData = reader.result as string;
            };
            reader.readAsDataURL(file);
        } else {
            // Handle the case where the selected file is not of the allowed types
            alert("widm");
        }
    } else {
        // Handle the case where there are no files selected
        alert("wdmiw");
    }
    
  }
  onSubmit() {
    alert("Adding Profile")
    this.profileService.addProfile(this.form.value.name, this.form.value.image);
    this.form.reset();
    this.imageData = "";  
  }
}
