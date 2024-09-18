import { Component, Input } from '@angular/core';
import { CustomerObservation } from '../../models/customer-observation';

@Component({
  selector: 'app-observation-tree',
  templateUrl: './observation-tree.component.html',
})
export class ObservationTreeComponent {
  @Input() observations: CustomerObservation[] = [];
}
