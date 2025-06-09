import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-poem-detail',
  templateUrl: './poem-detail.component.html',
  styleUrls: ['./poem-detail.component.scss'],
})
export class PoemDetailComponent implements OnInit {
  poem: any;

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.db
        .object(`poems/${id}`)
        .valueChanges()
        .subscribe((data) => {
          this.poem = { ...(data as any), id };
        });
    }
  }
}
