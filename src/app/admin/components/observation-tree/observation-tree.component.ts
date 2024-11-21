import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CustomerObservation } from '../../models/customer-observation';
import { AlertService } from '../../../core/services/alert.service';

@Component({
  selector: 'app-observation-tree',
  templateUrl: './observation-tree.component.html',
})
export class ObservationTreeComponent {
  @Input() observations: CustomerObservation[] = [];
  @Output() emitDelete: EventEmitter<string> = new EventEmitter();

  _alert: AlertService = inject(AlertService);

  confirmDelete(id: string): void {
    this._alert.confirm().then((result) => {
      if (result.isConfirmed) this.emitDelete.emit(id);
    });
  }
}
