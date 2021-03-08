import { Component, ElementRef, Input, ViewChild } from '@angular/core';

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
    <div *ngFor="let i of InnerCards">
    <div class="inner">
        
  
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="hovereffect">
            <img class="img-responsive" src="http://placehold.it/250" alt="">
            <div class="overlay">
               <p class="info cursor-pointer">
                <i class="fa fa-heart-o fa-2x col-lg-2" label="add to playlist"></i>
                <i class="fa fa-play fa-2x col-lg-2" label="play"></i>
                <i class="fa fa-circle col-lg-2" label="More.."></i>
               </p>
            </div>
        </div>
    </div>




    </div>
    </div>
    
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
    
    margin:10px;
  }
  #left-btn, #right-btn{padding:5px;cursor:pointer}
  

  .col-big{
    position: relative;
	min-height: 1px;
	padding-right: 15px;
	padding-left: 15px;
	width:20%;
}

.cursor-pointer i{cursor: pointer}

.hovereffect {
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
}

.hovereffect .overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  background-color: rgba(75,75,75,0.7);

}

.hovereffect:hover .overlay {
  background-color: rgba(0, 0, 0, 0.4);
}

.hovereffect img {
  display: block;
  position: relative;
}

.hovereffect h2 {
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  position: relative;
  font-size: 17px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.6);
  -webkit-transform: translateY(45px);
  -ms-transform: translateY(45px);
  transform: translateY(45px);

}

.hovereffect:hover h2 {
  -webkit-transform: translateY(5px);
  -ms-transform: translateY(5px);
  transform: translateY(5px);
  margin:0px;
}

.hovereffect p.info {
  display: block;
  text-decoration: none;
  padding: 7px 14px;
  text-transform: uppercase;
  color: #fff;
  border: 1px solid #fff;
  background-color: transparent;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);

  font-weight: normal;
  margin: 7px;
  height: 94%;
  width: 94%;
}

.hovereffect:hover p.info {
  opacity: 1;
  line-height: 15;
  filter: alpha(opacity=100);
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

.hovereffect p.info:hover {
  box-shadow: 0 0 5px #fff;
}

.overlay .info i{margin: 15px;}

  
  `]
})

export class ScrollCards {
    content; 
    @Input() InnerCards = ["card1","card2","card3","card4"]
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