class DicomModuleBase {

    DicomSourceProvider: IDicomDatasetService;

    public constructor(dicomProvider?: IDicomDatasetService) {
        if (dicomProvider) {
            this.DicomSourceProvider = dicomProvider;
        }
        else
        {
            this.DicomSourceProvider = new JsonDicomDatasetService();
        }
    }

    public getUInt16(tagValue:number, valueIndex?:number, defaultValue?:number) : number
    {
        if (!valueIndex)
        {
            valueIndex = 0;
        }

        if (!defaultValue)
        {
            defaultValue = 0;
        }

        return this.DicomSourceProvider.getElement(tagValue).GetUInt16(valueIndex, defaultValue);
    }
    public setUInt16(tagValue: number, value: number, valueIndex?: number) {
        if (!valueIndex) {
            valueIndex = 0;
        }

        this.DicomSourceProvider.getElement(tagValue).SetUInt16(valueIndex, value);
    }

    public setString(tagValue: number, value: string, valueIndex?: number) {
        if (!valueIndex) {
            valueIndex = 0;
        }
        
        this.DicomSourceProvider.getElement(tagValue).SetString(valueIndex, value);
    }
    public getString(tagValue: number, valueIndex?: number, defaultValue?: string): string {
        if (!valueIndex) {
            valueIndex = 0;
        }

        if (!defaultValue) {
            defaultValue = "";
        }

        return this.DicomSourceProvider.getElement(tagValue).GetString(valueIndex, defaultValue);
    }

    public setValue(tagValue: number, value: any, valueIndex?: number) {
       if (!valueIndex) {
          valueIndex = 0;
       }

       this.DicomSourceProvider.getElement(tagValue).SetValue(valueIndex, value);
    }
    public getValue(tagValue: number, valueIndex?: number, defaultValue?: string): any {
       if (!valueIndex) {
          valueIndex = 0;
       }

       if (!defaultValue) {
          defaultValue = "";
       }

       return this.DicomSourceProvider.getElement(tagValue).GetValue(valueIndex, defaultValue);
    }
}