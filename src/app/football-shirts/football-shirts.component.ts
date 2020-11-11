import { Component, OnInit } from "@angular/core";
import { Shirts } from "./shirts";

@Component({
  selector: "app-football-shirts",
  templateUrl: "./football-shirts.component.html",
  styleUrls: ["./football-shirts.component.scss"]
})
export class FootballShirtsComponent implements OnInit {
  shirts: Shirts[] = [
    {
      name: "Napoli",
      model: 1986,
      price: 2000,
      stock: 10,
      photo: "../assets/img/napoli1986.jpg",
      offer: true,
      cant: 0
    },
    {
      name: "Fiorentina",
      model: 2019,
      price: 2100,
      stock: 8,
      photo: "../assets/img/fiorentina2019.jpg",
      offer: true,
      cant: 0
    },
    {
      name: "Milan",
      model: 1960,
      price: 1900,
      stock: 5,
      photo: "../assets/img/milan1960.jpg",
      offer: false,
      cant: 0
    },
    {
      name: "Inter",
      model: 1989,
      price: 1770,
      stock: 0,
      photo: "../assets/img/inter1989.jpg",
      offer: false,
      cant: 0
    }
  ];
  constructor() {}

  ngOnInit(): void {}

  addCant(shirt): void {
    if (shirt.cant < shirt.stock) {
      shirt.cant++;
    }
  }
  subtractCant(shirt): void {
    if (shirt.cant > 0) {
      shirt.cant--;
    }
  }

  onChangeCant(event, shirt): void {
    let canti = document.querySelectorAll("#cantidad");
    console.log(canti);
    if (event.key >= 0 && event.key <= 9) {
    } else {
      event.preventDefault();
    }
  }
}
