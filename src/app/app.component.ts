import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { PaupersRedditService } from './paupers-reddit.service';
import { Child, PaupersReddit } from './PaupersReddit';
import { compileNgModule } from '@angular/compiler';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
	providers: [ PaupersRedditService ]
})
export class AppComponent {
	title = 'AngularReddit';

	redditPosts: Child[] = [];
	post: PaupersReddit = {} as PaupersReddit;
	search: string = '';

	constructor(private pr: PaupersRedditService) {}
	SearchReddit(kind: string) {
		this.redditPosts = [];
		this.pr.GetPostByName(kind).subscribe((post: PaupersReddit) => {
			console.log(post);
			this.post = post;

			this.redditPosts = this.post.data.children;
		});
	}
}
