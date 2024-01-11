import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RichTextEditorAllModule, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
//@ts-ignore
import WProofreader from '@webspellchecker/wproofreader-sdk-js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RichTextEditorAllModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AppComponent implements AfterViewInit  {
  @ViewChild("spellEditor") 
  public spellEditor!:RichTextEditorComponent;
  title = 'WebSpellChecker-RichTextEditor';
  ngAfterViewInit(): void {
    WProofreader.init({
      container: this.spellEditor.inputElement,
      lang: 'en_US',
      serviceId:"tQYWpiIqVsyXwDO"
    });
  }
}
