import { Component, OnInit } from '@angular/core';
import { Owner } from '../pets/owner';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-owners',
  standalone: false,
  templateUrl: './owners.component.html',
  styleUrl: './owners.component.css',
})
export class OwnersComponent implements OnInit {
  owners: Owner[] = [];

  constructor(private readonly ownerService: OwnerService) {}

  ngOnInit(): void {
    this.getDataOwner();
  }

  getDataOwner(){
    this.ownerService.getOwners().subscribe({
      next: (owners) => (this.owners = owners),
    });
  }

  deleteOwner(id: number) {
    this.ownerService.deleteOwner(id).subscribe(() => this.getDataOwner());
  }
}
