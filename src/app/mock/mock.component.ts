import { Component, OnInit } from "@angular/core";
import { MockService } from "../services/mock/mock.service";
import { tap } from "rxjs/operators";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-mock",
  templateUrl: "./mock.component.html",
  styleUrls: ["./mock.component.scss"],
})
export class MockComponent implements OnInit {
  subs = new Subscription();
  titleValue;
  titleValue2;
  valueSubs;

  constructor(public mockService: MockService, private route: Router) {}

  catchValues$ = this.mockService.mockValues().pipe(tap(console.log));

  ngOnInit() {
    this.valueSubs = this.mockService
      .mockValues()
      .subscribe((v) => (this.titleValue = v[0].fruta));
    this.valueSubs = this.mockService
      .mockValues()
      .subscribe((v) => (this.titleValue2 = v[1].fruta));
  }

  criarFruta() {
    this.route.navigate(["mock-form"]);
  }
}
