import { Component, OnInit} from '@angular/core';


// import * as _ from 'underscore';
import { PostsService } from '../services/posts.service';
import { PagerService } from '../services/pager.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

 
  
    // pager object
    pager: any = {};

    location: any="";
    
 // instantiate posts to an empty array
 posts: any =[];

  // paged items
  pagedItems: any[];

 
 constructor(private postsService: PostsService,private pagerService: PagerService) {this.location="Hyderabad"}
  
  ngOnInit() {


    // Retrieve posts from the API
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts= posts;
      //return console.log(posts);

      this.setPage(1);
    });

  
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.posts.length, page);

    // get current page of items
    this.pagedItems = this.posts.slice(this.pager.startIndex, this.pager.endIndex + 1);
}
  }
