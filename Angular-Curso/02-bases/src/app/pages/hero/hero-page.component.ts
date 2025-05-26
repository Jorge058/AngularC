import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe],
})

export class HeroPageComponent{
  name = signal('IronMan');
  age = signal(45);

  //*Una señal computada es una señal que solo se lee
  heroDescription = computed(() => {
    const description = `${this.name()}-${this.age()}`;
    return description;
  });

  capitalizedName = computed(()=>{
    const capitalized = `${this.name().toLocaleUpperCase()}`;
    return capitalized;
  })

  getHeroDescription(){
    return `${this.name()} - ${this.age()}`
  }

  changeHero(){
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm(){
    this.name.set('Ironman');
    this.age.set(45)
  }

  changeAge(){
    this.age.set(60)
  }

}
