import {Component, Input, OnInit} from '@angular/core';
import {Comment, CommentsService} from "../../services/comments/comments.service";
import {Product} from "../../services/products/product.service";

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {

  @Input() productID:string;
  @Input() product:Product;
  comments:Comment[];
  newComment:Comment;
  constructor(private commentService:CommentsService) { }

  ngOnInit(): void {
    const today = new Date();
    this.newComment = new Comment(null,'',0,false,'',today,this.product)
    console.log(this.productID)
    this.commentService.getCommentsByProductApprouved(this.productID).subscribe(
      (response:Comment[]) => {
        setTimeout(()=>{
          this.comments = response;
        },5000)

      }
    )
  }

}
