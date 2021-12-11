import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/containers';
import { CoreModule } from './core/core.module';
import { ThemeEffects } from './core/effects/theme.effects';
import { metaReducers, ROOT_REDUCERS } from './reduders';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        // strictStateImmutability and strictActionImmutability are enabled by default
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    EffectsModule.forRoot([ThemeEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
