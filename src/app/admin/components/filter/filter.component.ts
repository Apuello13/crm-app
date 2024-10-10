import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    const filterValues = { userId: this.user.id, ...this.filterForm.value };
    this._client.search(filterValues).subscribe({
      next: (response) => {
        this._clientData.setClients(response);
      },
    });
  }

  clear(): void {
    this.filterForm.reset();
  }
}
