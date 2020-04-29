import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {
    const strategyFactory = new ElementZoneStrategyFactory(AppComponent, this.injector);
    const customElement = createCustomElement(AppComponent, { injector: this.injector, strategyFactory });
    customElements.define('test-element', customElement);
  }

  ngDoBootstrap() { }
}
