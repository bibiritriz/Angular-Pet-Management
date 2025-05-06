import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OwnerService } from '../owner.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-owner-form',
  standalone: false,
  templateUrl: './owner-form.component.html',
  styleUrl: './owner-form.component.css',
})
export class OwnerFormComponent implements OnInit {
  formGroupOwner: FormGroup;

  constructor(
    private readonly ownerService: OwnerService,
    private readonly formBuilder: FormBuilder,
    private readonly router: ActivatedRoute
  ) {
    this.formGroupOwner = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      email: [''],
      phone: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const urlId = this.router.snapshot.paramMap.get('id');

    if (urlId) {
      const id = parseInt(urlId);
      this.ownerService.getOwner(id).subscribe({
        next: (owner) => {
          this.formGroupOwner.setValue(owner);
        },
      });
    }
  }

  save() {
    if (this.formGroupOwner.valid) {
      const owner = this.formGroupOwner.value;
      if (owner.id) {
        this.ownerService.updateOwner(owner).subscribe();
      }else{
        this.ownerService.postOwner(owner).subscribe();
      }
      this.formGroupOwner.reset();
    }
  }
}
