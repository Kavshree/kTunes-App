import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'scroll-cards',
    template: `
    <div class="row">

    <div class="col-lg-12">
    <label>Mood</label>
    <span class="pull-right">
    <span id="left-btn" (click)="leftBtnClick($event)" #leftBtnRef><i class="fa fa-chevron-left"></i></span>
    <span id="right-btn" (click)="rightBtnClick($event)" #RightBtnRef><i class="fa fa-chevron-right"></i></span>
    </span>
    </div>
    </div>
    
    <div class="outer" id="content" #contentRef>
    <div class="inner" style="background:red"></div>
    <div class="inner" style="background:green"></div>
    <div class="inner" style="background:blue"></div>
    <div class="inner" style="background:yellow"></div>
    <div class="inner" style="background:orange"></div>
    
    
  </div>
  `,
  styles: [`
  .outer {
    display: flex;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  .inner {
    flex: 0 0 25%;
    height: 100px;
    margin:10px;
  }
  #left-btn, #right-btn{padding:5px;cursor:pointer}
  `]
})

export class ScrollCards {
    content;
    @ViewChild('contentRef') contentRef: ElementRef;
    ngAfterViewInit() {
        this.content = this.contentRef.nativeElement as HTMLElement;
    }
    scrollStep = 200;
    rightBtnClick(e) {
        e.preventDefault();
        let sl = this.content.scrollLeft,
        cw = this.content.scrollWidth;
        if ((sl + this.scrollStep) >= cw) {
            this.content.scrollTo(cw, 0);
        } else {
            this.content.scrollTo((sl + this.scrollStep), 0);
        }
    };

    leftBtnClick(e) {
        e.preventDefault();
        let sl = this.content.scrollLeft;
            
        if ((sl - this.scrollStep) <= 0) {
            this.content.scrollTo(0, 0);
        } else {
            this.content.scrollTo((sl - this.scrollStep), 0);
        }
    };
}