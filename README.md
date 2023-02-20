# Demo Loader Multipl eRequest Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.

## Librería a usar

Hola Chikis, en este proyecto mostraremos un Loader cada vez que consumamos una petición HTTP 😎, además si se consumen varias peticiones a la misma vez, nuestro loader debera de cerrarse cuando se culminen todas las peticiones.
Para el Loader usaremos la librería **ngx-ui-loader**, les dejo el repositorio de esta librería : https://github.com/t-ho/ngx-ui-loader

Ejecutamos el siguiente comando para realizar la instalación

```console
npm i  ngx-ui-loader
```

Luego agregaran el modulo **NgxUiLoaderModule** dentro del modulo principal de su proyecto.

```typescript
@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, NgxUiLoaderModule, HttpClientModule, DemoRequestModule],
	providers: [{ provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }],
	bootstrap: [AppComponent]
})
export class AppModule {}
```

Si les gusta el video compartan y suscribanse.

Pueden escribirme si tiene dudas chikis, gracias por su apoyo.🤗

Link del video:

📤https://youtu.be/VaoRk9nd-0w

Suscríbete a mi canal 😎
📤https://www.youtube.com/c/LogiDev

**Sígueme en mis redes:**
👉Facebook : https://facebook.com/LogiDev25  
búscame como: @LogiDev25  
👉Instagram: https://instagram.com/jimydolores/  
búscame como: @jimydolores  
👉Twitter: https://twitter.com/jimyHDolores  
búscame como: @jimyHDolores  
👉LinkedIn:https://linkedin.com/in/jimyhuachodolores/
