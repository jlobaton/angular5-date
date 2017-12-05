import { Component } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/es';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  date = new Date();

optionsDate: DatepickerOptions = {
  minYear: this.date.getFullYear(),
  maxYear: 2030,
  displayFormat: 'DD-MM-YYYY',
  barTitleFormat: 'MMMM YYYY',
  firstCalendarDay: 1, // 0 - Sunday, 1 - Monday
  locale: frLocale
};  
}
