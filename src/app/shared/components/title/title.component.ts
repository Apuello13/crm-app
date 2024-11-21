import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
})
export class TitleComponent {
  @Input('name') name: string = '';
  @Input('subTitle') subTitle: string = '';
  @Input('showCreateButton') showCreateButton: boolean = true;
  @Input('isViewForm') isViewForm: boolean = false;
  @Input('disabledSubmitButton') disabledButton: boolean = false;
}
