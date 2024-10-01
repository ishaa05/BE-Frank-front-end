import { Component} from '@angular/core';
import { ApiService } from 'src/app/servises/api.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEventComponent } from 'src/app/forms/add-event/add-event.component';
import { DeleteEventComponent } from 'src/app/forms/delete-event/delete-event.component';
import { LookEventComponent } from './look-event/look-event.component';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
    post:any[]=[];
    postSearched:any[]=[];
    eventTochild:any;
    searchTerm!:string;
    constructor(private apiservice:ApiService,private dialog:MatDialog){}
    ngOnInit(){
      this.getPost();
      console.log(this.post);
    }

    get filteredItems() {
      return this.post.filter(item =>
        item.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    addEvent(){
       const dialogRef= this.dialog.open(AddEventComponent,{
          width:'50%',
          height:'100%',
          data:{
            name:"Ravids Gaikwad"
          }
        })  
      dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
      });
    }

    
    getPost(){
      this.apiservice.data$.subscribe(data=>{
        this.post=data;
      })    
    }


    openEvent(event:any){
        const dialogRef= this.dialog.open(LookEventComponent,{
          width:'100%',
          height:'100%',
          data:{
            event:event
          }
        })  
      dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
      });
    }
    
    formatDate(input:any){
        return this.apiservice.formatDate(input);
    }

    findevent(){
      if(this.searchTerm){
        this.postSearched = this.post.filter(event =>
          event.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
        this.post=this.postSearched;
      }
      else{
        this.getPost();
      }
    }
    
}
