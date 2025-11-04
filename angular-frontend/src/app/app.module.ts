import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
	imports: [RouterModule.forRoot(routes), BrowserAnimationsModule],
	exports: [RouterModule]
})
export class AppModule {}
