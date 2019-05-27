import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecentsComponent } from './recents/recents.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { DiscussionsListComponent } from './shared/discussions-list/discussions-list.component';
import { AddDiscussionComponent } from './add-discussion/add-discussion.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DiscussionComponent } from './discussion/discussion.component';
import { ResponseFormComponent } from './shared/response-form/response-form.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ModalService } from './core/helpers/modal.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './core/services/user.service';
import { CommentaryService } from './core/services/commentary.service';
import { SearchResultsComponent } from './search-results/search-results.component';
@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HomeComponent,
		RecentsComponent,
		DiscussionsComponent,
		DiscussionsListComponent,
		AddDiscussionComponent,
		DiscussionComponent,
		ResponseFormComponent,
		LoginComponent,
		RegisterComponent,
		SearchResultsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule.forRoot([]),
		AngularFontAwesomeModule,
		FormsModule,
		HttpClientModule
	],
	providers: [
		ModalService, UserService, CommentaryService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
