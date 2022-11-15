import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { PaupersRedditService } from './paupers-reddit.service';
import { Child, TopData, PaupersReddit } from './PaupersReddit';
import { compileNgModule } from '@angular/compiler';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
	providers: [ PaupersRedditService ]
})
export class AppComponent implements OnInit {
	title = 'AngularReddit';

	redditPosts: Child[] = [];

	constructor(private pr: PaupersRedditService) {}
	ngOnInit(): void {
		this.TopTen('aww');
	}

	TopTen(name: string): void {
		this.pr.GetPostByName(name).subscribe((result: PaupersReddit) => {
			for (let i: number = 0; i < 10; i++) {
				this.redditPosts.push(result.data.children[i]);
			}
			for (let i = 0; i < this.redditPosts.length; i++) {
				console.log(`Title: ${this.redditPosts[i].data.title}\nbaseURL: ${this.redditPosts[i].data.thumbnail}`);
			}
		});
	}
}
