import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthorService } from '../author.service';
import { DeletedService } from '../deleted.service';

@Component({
  selector: 'app-author-deleted',
  templateUrl: './author-deleted.component.html',
  styleUrls: ['./author-deleted.component.css']
})
export class AuthorDeletedComponent implements OnInit {

  constructor(
    private authorService: AuthorService, 
    private deletedService: DeletedService, 
    private router: Router
  ) { }

  deleted$: Observable<any>
  restoredAuthor;

  ngOnInit() {
    this.deleted$ = this.deletedService.getDeleted()
  }

  onUndo(name){
    this.deletedService.getDeleted().pipe(map(dels => dels.filter(deleted => deleted.name === name))).subscribe(result => {
      this.restoredAuthor = result
      console.log(result)
      this.authorService.createAuthor(this.restoredAuthor[0]).subscribe()
      this.router.navigate(["/authors"]);
    })
  }  

}