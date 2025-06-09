import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-poem-list',
  templateUrl: './poem-list.component.html',
  styleUrls: ['./poem-list.component.scss'],
})
export class PoemListComponent implements OnInit {
  poems: any[] = [];

  constructor(private db: AngularFireDatabase) {}

  ngOnInit(): void {
    this.db
      .list('poems')
      .snapshotChanges()
      .subscribe((snapshots) => {
        this.poems = snapshots.map((snap) => ({
          id: snap.key,
          ...(snap.payload.val() as any),
        }));
      });
  }
}
