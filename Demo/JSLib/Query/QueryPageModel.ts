class QueryPageModel
{
   public totalCount: number;
   public firstOffset: number;
   public prevOffset: number;
   public nextOffset: number;
   public lastOffset: number;
   public currentPage: number;
   public pageCount: number;

   private _resultsCount: number;
   private _currentPageOffset: number;
   private _pageLimit: number;
   
   constructor()
   {
      this.totalCount = 0;
      this._resultsCount = 0;
      this.firstOffset = -1;
      this.prevOffset = -1;
      this.nextOffset = -1;
      this.lastOffset = -1;

      this._currentPageOffset = 0;
      this.pageLimit = 12;

      this.currentPage = 0;
      this.pageCount = 0;
   }


   public setLinkHeader(linkHeader: string, resultsCount:number, totalCount:number)
   {
      if (typeof linkHeader == "undefined" || linkHeader == null)
      {
         return;
      }

      this.totalCount = totalCount;
      this.ResultsCount = resultsCount;

      var pageLinks = linkHeader.split(",");
      this.firstOffset = this.prevOffset = this.nextOffset = this.lastOffset = -1;

      pageLinks.forEach((link: string) => {
         var linkParts = link.split(";");
         var queryPart = linkParts[0].split("?")[1];
         var offset = parseInt(this.getQueryVariable(queryPart, "offset"), 10);
         this.pageLimit = parseInt(this.getQueryVariable(queryPart, "limit"), 10);
         var rel = this.getQueryVariable(linkParts[1], "rel");
         switch (rel)
         {
            case "\"first\"":
               {
                  this.firstOffset = offset;
               }
               break;

            case "\"prev\"":
               {
                  this.prevOffset = offset;
               }
               break;

            case "\"next\"":
               {
                  this.nextOffset = offset;
               }
               break;

            case "\"last\"":
               {
                  this.lastOffset = offset;
               }
               break;
         }
      });
   }
    
   get currentOffset()
   {
      return this._currentPageOffset;
   }
   set currentOffset(offset: number)
   {
      this._currentPageOffset = offset;

      this.currentPage = Math.floor(this._currentPageOffset / this.pageLimit) + 1;
   }

   get pageLimit() {
      return this._pageLimit;
   }
   set pageLimit(limit: number)
   {
      if (limit < 1)
      {
         throw "page limit can't be less than 1";
      }

      this._pageLimit = limit;

      this.currentPage = Math.floor(this._currentPageOffset / this.pageLimit) + 1;
   }

   get ResultsCount() {
      return this._resultsCount;
   }
   set ResultsCount(count: number) {
      this._resultsCount = count;
      
      this.pageCount = Math.ceil(this.totalCount / this.pageLimit);
   }

   //https://stackoverflow.com/questions/2090551/parse-query-string-in-javascript
   getQueryVariable(query:string, variable:string) : string {
      var vars = query.split('&');
      for (var i = 0; i < vars.length; i++) {
         var pair = vars[i].split('=');
         if (decodeURIComponent(pair[0]).trim() == variable) {
            return decodeURIComponent(pair[1]);
         }
      }

      return "";
   }



}