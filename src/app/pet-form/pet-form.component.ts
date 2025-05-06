import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetService } from '../pet.service';
import { ActivatedRoute } from '@angular/router';
import { Owner } from '../pets/owner';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-pet-form',
  standalone: false,
  templateUrl: './pet-form.component.html',
  styleUrl: './pet-form.component.css',
})
export class PetFormComponent implements OnInit {
  formGroupPet: FormGroup;
  owners: Owner[] = [];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly petService: PetService,
    private readonly router: ActivatedRoute,
    private readonly ownerService: OwnerService
  ) {
    this.formGroupPet = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      specie: ['', Validators.required],
      age: ['', Validators.required],
      owner: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.ownerService
      .getOwners()
      .subscribe({ next: (owners) => (this.owners = owners) });

    const urlId = this.router.snapshot.paramMap.get('id');

    if (urlId) {
      const id = parseInt(urlId);
      this.petService.getPet(id).subscribe({
        next: (pet) => {
          const owner = this.owners.find((o) => o.id === pet.owner.id);
          this.formGroupPet.setValue({
            ...pet,
            owner: owner
          });
        },
      });
    }
  }

  save() {
    if (this.formGroupPet.valid) {
      const pet = this.formGroupPet.value;
      if (pet.id) {
        this.petService.updatePet(pet).subscribe();
      } else {
        this.petService.postPet(pet).subscribe();
      }
      this.formGroupPet.reset();
    }
  }
}
