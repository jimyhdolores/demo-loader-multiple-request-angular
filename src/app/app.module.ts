import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiInterceptor } from './interceptors/api.interceptor';

import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { AppComponent } from './app.component';
import { DemoRequestModule } from './demo-request/demo-request.module';
@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, NgxUiLoaderModule, HttpClientModule, DemoRequestModule],
	providers: [{ provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }],
	bootstrap: [AppComponent]
})
export class AppModule {}
