import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { AdDirective } from './ad.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { WeatherComponent } from './weather/weather.component';
@NgModule({
  declarations: [					
    AppComponent, TaskDetailsComponent,
      AdDirective,
      AdBannerComponent,
      WeatherComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      //{path : "", component : AppComponent },
      {path : "task/:id", component : TaskDetailsComponent }
    ])

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


