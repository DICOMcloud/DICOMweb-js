class QueryPagerView
{
   _$first: JQuery;
   _$prev: JQuery;
   _$next: JQuery;
   _$last: JQuery;
   _$pageInfo: JQuery;
   _$element: JQuery;
   model : QueryPageModel;

   public onFirst = new LiteEvent<void>();
   public onPrev = new LiteEvent<void>();
   public onNext = new LiteEvent<void>();
   public onLast = new LiteEvent<void>();

   constructor($element:JQuery, model:QueryPageModel)
   {
      this._$element = $element;
      this.model = model;
      this._$first = $(this._$element).find(".page-first");
      this._$prev = $(this._$element).find(".page-previous");
      this._$next = $(this._$element).find(".page-next");
      this._$last = $(this._$element).find(".page-last");
      this._$pageInfo = $(this._$element).find(".page-info");
      this._registerEvents();
      this.render();
   }

   private _registerEvents()
   {
      this._$first.click(() => { this.onFirst.trigger(); });
      this._$prev.click(() => { this.onPrev.trigger(); });
      this._$next.click(() => { this.onNext.trigger(); });
      this._$last.click(() => { this.onLast.trigger(); });
   }

   public render()
   {
      if (this.model.firstOffset < 0) {
         this._$first.addClass("disabled");
      }
      else
      {
         this._$first.removeClass("disabled");
      }

      if (this.model.prevOffset < 0) {
         this._$prev.addClass("disabled");
      }
      else {
         this._$prev.removeClass("disabled");
      }

      if (this.model.nextOffset < 0) {
         this._$next.addClass("disabled");
      }
      else {
         this._$next.removeClass("disabled");
      }

      if (this.model.lastOffset < 0) {
         this._$last.addClass("disabled");
      }
      else {
         this._$last.removeClass("disabled");
      }

      this._$pageInfo.text("Page: " + this.model.currentPage + "/" + this.model.pageCount);
   }

   public show()
   {
      this._$element.show();
   }
   public hide() {
      this._$element.hide();
   }
}