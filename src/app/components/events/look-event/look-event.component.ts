import { Component,Input,Output,EventEmitter, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeleteEventComponent } from 'src/app/forms/delete-event/delete-event.component';

@Component({
  selector: 'app-look-event',
  templateUrl: './look-event.component.html',
  styleUrls: ['./look-event.component.css']
})
export class LookEventComponent {
    event:any;
    images!: any[];
    constructor(private dialog:MatDialog,private dialogConfig:MatDialogRef<LookEventComponent>,@Inject(MAT_DIALOG_DATA) public data:any){
    }
    ngOnInit(){
      this.event=this.data.event;
      this.images=this.event.imgUrl;
      console.log( this.images);
      console.log("opened")
    }
    
    goBackTodashboard(){
        this.dialogConfig.close();
    }

    deleteEvent(id:any,name:any){
      const dialogRef=this.dialog.open(DeleteEventComponent,{
        width:'50%',
        height:'40%',
        data:{
            imgId:id,
            EventName:name
        }
      })
      
    }
}
