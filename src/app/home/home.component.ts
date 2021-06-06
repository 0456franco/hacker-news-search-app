import { Component, OnInit } from '@angular/core'
import { faClock, faSearch } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faSearch = faSearch
  faClock = faClock

  constructor() { }

  ngOnInit(): void {
  }

}
