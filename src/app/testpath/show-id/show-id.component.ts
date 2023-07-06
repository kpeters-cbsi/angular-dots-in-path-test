import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-id',
  templateUrl: './show-id.component.html',
  styleUrls: ['./show-id.component.css'],
})
export class ShowIdComponent implements OnInit {
  public id!: string;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
  }
}
