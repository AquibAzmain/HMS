import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  constructor() { }

  editProfile = true;
  editProfileIcon = 'icofont-edit';

  editAbout = true;
  editAboutIcon = 'icofont-edit';

  public editor;
  public editorContent = `<p>
                              But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give
                              you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder
                              of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not
                              know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves
                              or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil
                              and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise,
                              except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no
                              annoying consequences, or one who avoids a pain that produces no resultant pleasure?' 'On the other hand, we denounce with righteous
                              indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that
                              they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through
                              weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to
                              distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able To Do what we like best,
                              every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations
                              of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds
                              in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to
                              avoid worse pain.
                            </p>`;
  public editorConfig = {
    placeholder: 'About Your Self'
  };


  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  profitChartOption: any;
  
  ngOnInit() {
  }

  toggleEditProfile() {
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editProfile = !this.editProfile;
  }

  toggleEditAbout() {
    this.editAboutIcon = (this.editAboutIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editAbout = !this.editAbout;
  }

  onEditorBlured(quill) {
    console.log('editor blur!', quill);
  }

  onEditorFocused(quill) {
    console.log('editor focus!', quill);
  }

  onEditorCreated(quill) {
    this.editor = quill;
    console.log('quill is ready! this is current quill instance object', quill);
  }

  onContentChanged({quill, html, text}) {
    console.log('quill content is changed!', quill, html, text);
  }

}
