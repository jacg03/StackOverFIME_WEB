import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecentsComponent } from './recents/recents.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { AddDiscussionComponent } from './add-discussion/add-discussion.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { SearchResultsComponent } from './search-results/search-results.component';


const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'recents',
		component: RecentsComponent
	},
	{
		path: 'my-discussions',
		component: DiscussionsComponent
	},
	{
		path: 'add-discussion',
		component: AddDiscussionComponent
	},
	{
		path: 'discussion/:id',
		component: DiscussionComponent
	},
	{
		path: 'search-results/:text',
		component: SearchResultsComponent
	},
	{ path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
