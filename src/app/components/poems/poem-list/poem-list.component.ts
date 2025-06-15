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
        const pastelColors = [
          '#4B5563', // cool gray
          '#374151', // dark slate
          '#1E3A8A', // indigo
          '#065F46', // emerald
          '#7C3AED', // violet
          '#6B7280', // gray
          '#0F172A', // dark blue-gray
          '#1E293B', // dark slate blue
          '#334155', // cool blue-gray
        ];

        this.poems = snapshots.map((snap) => {
          const bgColor =
            pastelColors[Math.floor(Math.random() * pastelColors.length)];
          return {
            id: snap.key,
            ...(snap.payload.val() as any),
            cardColor: bgColor,
          };
        });
      });
  }
}
