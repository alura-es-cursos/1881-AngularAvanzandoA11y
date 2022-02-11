import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModalModule } from './shared/components/modal/modal.module';
import { ComponentLoaderDirective } from './shared/directives/componentLoader/component-loader.directive';
import { PostsModule } from './shared/components/posts/posts.module';

@NgModule({
  declarations: [AppComponent, ComponentLoaderDirective],
  imports: [BrowserModule, ModalModule, PostsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
