import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserLogIn } from '../../../auth/models/user';
import { SessionService } from '../../../core/services/session.service';
import { ClientService } from '../../services/client.service';
import { ClientDataService } from '../../services/client.data.service';
import { State } from '../../../core/models/state';
import { STATUS } from '../../../utils/status';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent implements OnInit {
  _session: SessionService = inject(SessionService);
  _client: ClientService = inject(ClientService);
  _clientData: ClientDataService = inject(ClientDataService);

  readonly range = new FormGroup({
    start: new FormControl<Date | null>(new Date()),
    end: new FormControl<Date | null>(new Date()),
  });

  user!: UserLogIn;

  states: State[] = STATUS;

  formBuilder: FormBuilder = inject(FormBuilder);

  filterForm!: FormGroup;

  ngOnInit(): void {
    this.getUserSession();
    this.initForm();
  }

  initForm(): void {
    this.filterForm = this.formBuilder.group({
      startDate: null,
      endDate: null,
      name: null,
      phone: null,
      program: null,
      status: null,
    });
  }

  getUserSession(): void {
    const session = this._session.getUser();
    if (session) this.user = session;
  }

  search(): void {
    const { start, end } = this.range.value;
    const filterValues = { userId: this.user.id, ...this.filterForm.value };
    filterValues.startDate = start?.getTime();
    filterValues.endDate = end?.getTime();
    this._client.search(filterValues).subscribe({
      next: (response) => {
        this._clientData.setClients(response);
      },
    });
  }

  clear(): void {
    this.filterForm.reset();
    this.range.controls['start'].setValue(new Date());
    this.range.controls['end'].setValue(new Date());
  }
}
