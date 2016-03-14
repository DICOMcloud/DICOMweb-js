interface DicomElementArray extends Array<DicomElement>{
    [index: number]: DicomElement;
    //values();
}

interface IDicomDatasetService
{
    getElement(tagValue: number): DicomElement;
    getElements(): DicomElement[];

    getSourceDataset();
}

class DicomElementsCache //TODO: work around until I figure out how to enumerate the array
{
    //private elementsArray: DicomElementArray;
   private elementsArray: {};
    private elements: Array<DicomElement>;

    constructor()
    {
       this.elementsArray = {};
        this.elements = [];
    }
    public addElement(element: DicomElement)
    {
       this.elementsArray[element.Tag.StringValue] = element;
        //this.elementsArray[element.Tag.Value];
        //this.elements.push(element);
    }

    public getElement(tagValue: number) : DicomElement
    {
       var element = this.elementsArray[DicomTag.getStringValue(tagValue)];

        if (element)
        {
            return element;
        }

        return null;
    }

    public getAllElements(): DicomElement[]
    {
       var vals = Object.keys(this.elementsArray).map((key)=> {
          return this.elementsArray[key];
       });

       return vals;
        //return this.elements;
    }
}

class DicomDatasetService {

    static fromDateString(dateString: string): Date
    {
        return new Date(dateString);//TODO: this must be parsed for it to work;
    }
    static fromDate(date: Date): string
    {
        return date.toString();//TODO: this must be formatted according to DICOM;
    }
}

class JsonDicomDatasetService extends DicomDatasetService implements IDicomDatasetService {

   private _dataSource: {};

    private _cache : DicomElementsCache ;

    constructor()
    {
        super();
        this._dataSource = {};
        this._cache = new DicomElementsCache();
    }

    public setModel(jsonDicom?: Array<string>) {
       this._dataSource = jsonDicom;
   }

    public getElement(tagValue: number): DicomElement {
        var element;
        if ((element = this._cache.getElement(tagValue)) != null ) {
            return element;
        }
        else {

            var dicomTag = new DicomTag(tagValue);

            var jsonElement = this._dataSource[dicomTag.StringValue];

            element = new DicomElement();

            if (jsonElement) {
                element.Value = jsonElement.Value;
                element.VR = jsonElement.vr;
            }

            element.Tag = dicomTag;

            this._cache.addElement(element);
            return element;
        }
    }
   
    public getElements(): DicomElement[]
    {
        for( var tagValue in this._dataSource){
            if (!this._cache[tagValue]) {
                this._cache.addElement(this.getElement(parseInt(tagValue, 16)));
            }
        }

        return this._cache.getAllElements();

        //return this._cache.values() ;
        //return [];
    }

    public getSourceDataset()
    {
       return this._dataSource;
    }

}