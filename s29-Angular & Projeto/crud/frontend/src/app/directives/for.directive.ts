import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit{

  //The Em is the keyword referenced in the tag where the structural directive is being used
  @Input('myForEm') numbers: number[] = [];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {
  }

  ngOnInit(){
    for(let number of this.numbers){
      this.container.createEmbeddedView(this.template, {$implicit: number});
    }
  }

}
