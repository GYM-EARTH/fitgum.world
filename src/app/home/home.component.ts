import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private meta: Meta) {
  }

  ngOnInit() {
    this.meta.updateTag({ name: 'description', content: 'Фитнес Онлайн Поиск и Календарь, Паспорт, Кабинет' });
    this.meta.updateTag({property: 'og:title', content: 'fitgum.ru'});
    this.meta.updateTag({property: 'og:description', content: 'Фитнес Онлайн Поиск и Календарь, Паспорт, Кабинет'});
    this.meta.updateTag({property: 'og:image', content: 'https://fitgum.ru/assets/og-vk-image.png'});
  }

}
