import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TableComponent } from './components/table/table.component';
import { TitleComponent } from './components/title/title.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TableComponent, TitleComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatTableModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    TableComponent,
    TitleComponent,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class SharedModule {}
