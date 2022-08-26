import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { MockService } from "../services/mock/mock.service";

@Component({
  selector: "app-mock-form",
  templateUrl: "./mock-form.component.html",
  styleUrls: ["./mock-form.component.scss"],
})
export class MockFormComponent implements OnInit {
  form = new FormGroup({
    fruta: new FormControl(),
    verdura: new FormControl()
  });

  subs = new Subscription();

  constructor(public mockService: MockService, private route: Router) {}

  ngOnInit() {}

  Salvar(){
    this.subs.add(
      this.mockService.mockSave(this.form.value).subscribe(r => console.log(r))
    )
      console.log(this.form.value)
  }
}
