import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModalModule } from './shared/components/modal/modal.module';
import { ComponentLoaderDirective } from './shared/directives/componentLoader/component-loader.directive';
import { PostsModule } from './shared/components/posts/posts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ComponentLoaderDirective],
  imports: [
    BrowserModule,
    ModalModule,
    PostsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
