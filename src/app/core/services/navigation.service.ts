import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private DEFAULT_PARAM_NAME: string = 'rowId';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  goTo(path: string): void {
    this.router.navigate([path], { relativeTo: this.route });
  }

  goBack(): void {
    this.location.back();
  }

  goToWithQueryParams(path: string, rowId: number): void {
    this.router.navigate([path], {
      queryParams: { rowId },
      relativeTo: this.route,
    });
  }

  getCurrentPath(): string {
    return this.router.url;
  }

  getValueFormQueryParam(queryParamName: string = this.DEFAULT_PARAM_NAME) {
    return this.route.queryParams.pipe(map((value) => value[queryParamName]));
  }
}
