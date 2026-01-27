import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-month',
  imports: [],
  templateUrl: './month.html',
  styleUrl: './month.scss',
})
export class Month {
  private route = inject(ActivatedRoute);

  protected messID = this.route.snapshot.paramMap.get('id');
  protected yearMonth = this.route.snapshot.paramMap.get('yearMonth');
}
