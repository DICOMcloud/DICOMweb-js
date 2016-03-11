class DicomTags {
   /// <summary>
   /// <para>(0000,0002) Affected SOP Class UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static AffectedSopClassUid: number = 2;
   /// <summary>
   /// <para>(0000,0003) Requested SOP Class UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static RequestedSopClassUid: number = 3;
   /// <summary>
   /// <para>(0000,0100) Command Field</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static CommandField: number = 256;
   /// <summary>
   /// <para>(0000,0110) Message ID</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static MessageId: number = 272;
   /// <summary>
   /// <para>(0000,0120) Message ID Being Responded To</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static MessageIdBeingRespondedTo: number = 288;
   /// <summary>
   /// <para>(0000,0600) Move Destination</para>
   /// <para> VR: AE VM:1</para>
   /// </summary>
   public static MoveDestination: number = 1536;
   /// <summary>
   /// <para>(0000,0700) Priority</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static Priority: number = 1792;
   /// <summary>
   /// <para>(0000,0800) Data Set Type</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static DataSetType: number = 2048;
   /// <summary>
   /// <para>(0000,0900) Status</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static Status: number = 2304;
   /// <summary>
   /// <para>(0000,0901) Offending Element</para>
   /// <para> VR: AT VM:1-n</para>
   /// </summary>
   public static OffendingElement: number = 2305;
   /// <summary>
   /// <para>(0000,0902) Error Comment</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ErrorComment: number = 2306;
   /// <summary>
   /// <para>(0000,0903) Error ID</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ErrorId: number = 2307;
   /// <summary>
   /// <para>(0000,1000) Affected SOP Instance UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static AffectedSopInstanceUid: number = 4096;
   /// <summary>
   /// <para>(0000,1001) Requested SOP Instance UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static RequestedSopInstanceUid: number = 4097;
   /// <summary>
   /// <para>(0000,1002) Event Type ID</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static EventTypeId: number = 4098;
   /// <summary>
   /// <para>(0000,1005) Attribute Identifier List</para>
   /// <para> VR: AT VM:1-n</para>
   /// </summary>
   public static AttributeIdentifierList: number = 4101;
   /// <summary>
   /// <para>(0000,1008) Action Type ID</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ActionTypeId: number = 4104;
   /// <summary>
   /// <para>(0000,1020) Number of Remaining Sub-operations</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfRemainingSubOperations: number = 4128;
   /// <summary>
   /// <para>(0000,1021) Number of Completed Sub-operations</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfCompletedSubOperations: number = 4129;
   /// <summary>
   /// <para>(0000,1022) Number of Failed Sub-operations</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfFailedSubOperations: number = 4130;
   /// <summary>
   /// <para>(0000,1023) Number of Warning Sub-operations</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfWarningSubOperations: number = 4131;
   /// <summary>
   /// <para>(0000,1030) Move Originator Application Entity Title</para>
   /// <para> VR: AE VM:1</para>
   /// </summary>
   public static MoveOriginatorApplicationEntityTitle: number = 4144;
   /// <summary>
   /// <para>(0000,1031) Move Originator Message ID</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static MoveOriginatorMessageId: number = 4145;
   /// <summary>
   /// <para>(0002,0000) File Meta Information Group Length</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static FileMetaInformationGroupLength: number = 131072;
   /// <summary>
   /// <para>(0002,0001) File Meta Information Version</para>
   /// <para> VR: OB VM:1</para>
   /// </summary>
   public static FileMetaInformationVersion: number = 131073;
   /// <summary>
   /// <para>(0002,0002) Media Storage SOP Class UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static MediaStorageSopClassUid: number = 131074;
   /// <summary>
   /// <para>(0002,0003) Media Storage SOP Instance UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static MediaStorageSopInstanceUid: number = 131075;
   /// <summary>
   /// <para>(0002,0010) Transfer Syntax UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static TransferSyntaxUid: number = 131088;
   /// <summary>
   /// <para>(0002,0012) Implementation Class UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static ImplementationClassUid: number = 131090;
   /// <summary>
   /// <para>(0002,0013) Implementation Version Name</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static ImplementationVersionName: number = 131091;
   /// <summary>
   /// <para>(0002,0016) Source Application Entity Title</para>
   /// <para> VR: AE VM:1</para>
   /// </summary>
   public static SourceApplicationEntityTitle: number = 131094;
   /// <summary>
   /// <para>(0002,0100) Private Information Creator UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static PrivateInformationCreatorUid: number = 131328;
   /// <summary>
   /// <para>(0002,0102) Private Information</para>
   /// <para> VR: OB VM:1</para>
   /// </summary>
   public static PrivateInformation: number = 131330;
   /// <summary>
   /// <para>(0004,1130) File-set ID</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FileSetId: number = 266544;
   /// <summary>
   /// <para>(0004,1141) File-set Descriptor File ID</para>
   /// <para> VR: CS VM:1-8</para>
   /// </summary>
   public static FileSetDescriptorFileId: number = 266561;
   /// <summary>
   /// <para>(0004,1142) Specific Character Set of File-set Descriptor File</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SpecificCharacterSetOfFileSetDescriptorFile: number = 266562;
   /// <summary>
   /// <para>(0004,1200) Offset of the First Directory Record of the Root Directory Entity</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static OffsetOfTheFirstDirectoryRecordOfTheRootDirectoryEntity: number = 266752;
   /// <summary>
   /// <para>(0004,1202) Offset of the Last Directory Record of the Root Directory Entity</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static OffsetOfTheLastDirectoryRecordOfTheRootDirectoryEntity: number = 266754;
   /// <summary>
   /// <para>(0004,1212) File-set Consistency Flag</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static FileSetConsistencyFlag: number = 266770;
   /// <summary>
   /// <para>(0004,1220) Directory Record Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DirectoryRecordSequence: number = 266784;
   /// <summary>
   /// <para>(0004,1400) Offset of the Next Directory Record</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static OffsetOfTheNextDirectoryRecord: number = 267264;
   /// <summary>
   /// <para>(0004,1410) Record In-use Flag</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static RecordInUseFlag: number = 267280;
   /// <summary>
   /// <para>(0004,1420) Offset of Referenced Lower-Level Directory Entity</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static OffsetOfReferencedLowerLevelDirectoryEntity: number = 267296;
   /// <summary>
   /// <para>(0004,1430) Directory Record Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DirectoryRecordType: number = 267312;
   /// <summary>
   /// <para>(0004,1432) Private Record UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static PrivateRecordUid: number = 267314;
   /// <summary>
   /// <para>(0004,1500) Referenced File ID</para>
   /// <para> VR: CS VM:1-8</para>
   /// </summary>
   public static ReferencedFileId: number = 267520;
   /// <summary>
   /// <para>(0004,1504) MRDR Directory Record Offset</para>
   /// <para> VR: UL VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static MrdrDirectoryRecordOffsetRetired: number = 267524;
   /// <summary>
   /// <para>(0004,1510) Referenced SOP Class UID in File</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static ReferencedSopClassUidInFile: number = 267536;
   /// <summary>
   /// <para>(0004,1511) Referenced SOP Instance UID in File</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static ReferencedSopInstanceUidInFile: number = 267537;
   /// <summary>
   /// <para>(0004,1512) Referenced Transfer Syntax UID in File</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static ReferencedTransferSyntaxUidInFile: number = 267538;
   /// <summary>
   /// <para>(0004,151A) Referenced Related General SOP Class UID in File</para>
   /// <para> VR: UI VM:1-n</para>
   /// </summary>
   public static ReferencedRelatedGeneralSopClassUidInFile: number = 267546;
   /// <summary>
   /// <para>(0004,1600) Number of References</para>
   /// <para> VR: UL VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static NumberOfReferencesRetired: number = 267776;
   /// <summary>
   /// <para>(0008,0001) Length to End</para>
   /// <para> VR: UL VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static LengthToEndRetired: number = 524289;
   /// <summary>
   /// <para>(0008,0005) Specific Character Set</para>
   /// <para> VR: CS VM:1-n</para>
   /// </summary>
   public static SpecificCharacterSet: number = 524293;
   /// <summary>
   /// <para>(0008,0006) Language Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static LanguageCodeSequence: number = 524294;
   /// <summary>
   /// <para>(0008,0008) Image Type</para>
   /// <para> VR: CS VM:2-n</para>
   /// </summary>
   public static ImageType: number = 524296;
   /// <summary>
   /// <para>(0008,0010) Recognition Code</para>
   /// <para> VR: SH VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static RecognitionCodeRetired: number = 524304;
   /// <summary>
   /// <para>(0008,0012) Instance Creation Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static InstanceCreationDate: number = 524306;
   /// <summary>
   /// <para>(0008,0013) Instance Creation Time</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static InstanceCreationTime: number = 524307;
   /// <summary>
   /// <para>(0008,0014) Instance Creator UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static InstanceCreatorUid: number = 524308;
   /// <summary>
   /// <para>(0008,0016) SOP Class UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static SopClassUid: number = 524310;
   /// <summary>
   /// <para>(0008,0018) SOP Instance UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static SopInstanceUid: number = 524312;
   /// <summary>
   /// <para>(0008,001A) Related General SOP Class UID</para>
   /// <para> VR: UI VM:1-n</para>
   /// </summary>
   public static RelatedGeneralSopClassUid: number = 524314;
   /// <summary>
   /// <para>(0008,001B) Original Specialized SOP Class UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static OriginalSpecializedSopClassUid: number = 524315;
   /// <summary>
   /// <para>(0008,0020) Study Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static StudyDate: number = 524320;
   /// <summary>
   /// <para>(0008,0021) Series Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static SeriesDate: number = 524321;
   /// <summary>
   /// <para>(0008,0022) Acquisition Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static AcquisitionDate: number = 524322;
   /// <summary>
   /// <para>(0008,0023) Content Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static ContentDate: number = 524323;
   /// <summary>
   /// <para>(0008,0024) Overlay Date</para>
   /// <para> VR: DA VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayDateRetired: number = 524324;
   /// <summary>
   /// <para>(0008,0025) Curve Date</para>
   /// <para> VR: DA VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CurveDateRetired: number = 524325;
   /// <summary>
   /// <para>(0008,002A) Acquisition DateTime</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static AcquisitionDatetime: number = 524330;
   /// <summary>
   /// <para>(0008,0030) Study Time</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static StudyTime: number = 524336;
   /// <summary>
   /// <para>(0008,0031) Series Time</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static SeriesTime: number = 524337;
   /// <summary>
   /// <para>(0008,0032) Acquisition Time</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static AcquisitionTime: number = 524338;
   /// <summary>
   /// <para>(0008,0033) Content Time</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static ContentTime: number = 524339;
   /// <summary>
   /// <para>(0008,0034) Overlay Time</para>
   /// <para> VR: TM VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayTimeRetired: number = 524340;
   /// <summary>
   /// <para>(0008,0035) Curve Time</para>
   /// <para> VR: TM VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CurveTimeRetired: number = 524341;
   /// <summary>
   /// <para>(0008,0040) Data Set Type</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DataSetTypeRetired: number = 524352;
   /// <summary>
   /// <para>(0008,0041) Data Set Subtype</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DataSetSubtypeRetired: number = 524353;
   /// <summary>
   /// <para>(0008,0042) Nuclear Medicine Series Type</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static NuclearMedicineSeriesTypeRetired: number = 524354;
   /// <summary>
   /// <para>(0008,0050) Accession Number</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static AccessionNumber: number = 524368;
   /// <summary>
   /// <para>(0008,0051) Issuer of Accession Number Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IssuerOfAccessionNumberSequence: number = 524369;
   /// <summary>
   /// <para>(0008,0052) Query/Retrieve Level</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static QueryRetrieveLevel: number = 524370;
   /// <summary>
   /// <para>(0008,0054) Retrieve AE Title</para>
   /// <para> VR: AE VM:1-n</para>
   /// </summary>
   public static RetrieveAeTitle: number = 524372;
   /// <summary>
   /// <para>(0008,0056) Instance Availability</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static InstanceAvailability: number = 524374;
   /// <summary>
   /// <para>(0008,0058) Failed SOP Instance UID List</para>
   /// <para> VR: UI VM:1-n</para>
   /// </summary>
   public static FailedSopInstanceUidList: number = 524376;
   /// <summary>
   /// <para>(0008,0060) Modality</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static Modality: number = 524384;
   /// <summary>
   /// <para>(0008,0061) Modalities in Study</para>
   /// <para> VR: CS VM:1-n</para>
   /// </summary>
   public static ModalitiesInStudy: number = 524385;
   /// <summary>
   /// <para>(0008,0062) SOP Classes in Study</para>
   /// <para> VR: UI VM:1-n</para>
   /// </summary>
   public static SopClassesInStudy: number = 524386;
   /// <summary>
   /// <para>(0008,0064) Conversion Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ConversionType: number = 524388;
   /// <summary>
   /// <para>(0008,0068) Presentation Intent Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PresentationIntentType: number = 524392;
   /// <summary>
   /// <para>(0008,0070) Manufacturer</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static Manufacturer: number = 524400;
   /// <summary>
   /// <para>(0008,0080) Institution Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static InstitutionName: number = 524416;
   /// <summary>
   /// <para>(0008,0081) Institution Address</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static InstitutionAddress: number = 524417;
   /// <summary>
   /// <para>(0008,0082) Institution Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static InstitutionCodeSequence: number = 524418;
   /// <summary>
   /// <para>(0008,0090) Referring Physician's Name</para>
   /// <para> VR: PN VM:1</para>
   /// </summary>
   public static ReferringPhysiciansName: number = 524432;
   /// <summary>
   /// <para>(0008,0092) Referring Physician's Address</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static ReferringPhysiciansAddress: number = 524434;
   /// <summary>
   /// <para>(0008,0094) Referring Physician's Telephone Numbers</para>
   /// <para> VR: SH VM:1-n</para>
   /// </summary>
   public static ReferringPhysiciansTelephoneNumbers: number = 524436;
   /// <summary>
   /// <para>(0008,0096) Referring Physician Identification Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferringPhysicianIdentificationSequence: number = 524438;
   /// <summary>
   /// <para>(0008,0100) Code Value</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static CodeValue: number = 524544;
   /// <summary>
   /// <para>(0008,0102) Coding Scheme Designator</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static CodingSchemeDesignator: number = 524546;
   /// <summary>
   /// <para>(0008,0103) Coding Scheme Version</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static CodingSchemeVersion: number = 524547;
   /// <summary>
   /// <para>(0008,0104) Code Meaning</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static CodeMeaning: number = 524548;
   /// <summary>
   /// <para>(0008,0105) Mapping Resource</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static MappingResource: number = 524549;
   /// <summary>
   /// <para>(0008,0106) Context Group Version</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static ContextGroupVersion: number = 524550;
   /// <summary>
   /// <para>(0008,0107) Context Group Local Version</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static ContextGroupLocalVersion: number = 524551;
   /// <summary>
   /// <para>(0008,010B) Context Group Extension Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ContextGroupExtensionFlag: number = 524555;
   /// <summary>
   /// <para>(0008,010C) Coding Scheme UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static CodingSchemeUid: number = 524556;
   /// <summary>
   /// <para>(0008,010D) Context Group Extension Creator UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static ContextGroupExtensionCreatorUid: number = 524557;
   /// <summary>
   /// <para>(0008,010F) Context Identifier</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ContextIdentifier: number = 524559;
   /// <summary>
   /// <para>(0008,0110) Coding Scheme Identification Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static CodingSchemeIdentificationSequence: number = 524560;
   /// <summary>
   /// <para>(0008,0112) Coding Scheme Registry</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static CodingSchemeRegistry: number = 524562;
   /// <summary>
   /// <para>(0008,0114) Coding Scheme External ID</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static CodingSchemeExternalId: number = 524564;
   /// <summary>
   /// <para>(0008,0115) Coding Scheme Name</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static CodingSchemeName: number = 524565;
   /// <summary>
   /// <para>(0008,0116) Coding Scheme Responsible Organization</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static CodingSchemeResponsibleOrganization: number = 524566;
   /// <summary>
   /// <para>(0008,0117) Context UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static ContextUid: number = 524567;
   /// <summary>
   /// <para>(0008,0201) Timezone Offset From UTC</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static TimezoneOffsetFromUtc: number = 524801;
   /// <summary>
   /// <para>(0008,1000) Network ID</para>
   /// <para> VR: AE VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static NetworkIdRetired: number = 528384;
   /// <summary>
   /// <para>(0008,1010) Station Name</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static StationName: number = 528400;
   /// <summary>
   /// <para>(0008,1030) Study Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static StudyDescription: number = 528432;
   /// <summary>
   /// <para>(0008,1032) Procedure Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ProcedureCodeSequence: number = 528434;
   /// <summary>
   /// <para>(0008,103E) Series Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static SeriesDescription: number = 528446;
   /// <summary>
   /// <para>(0008,103F) Series Description Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SeriesDescriptionCodeSequence: number = 528447;
   /// <summary>
   /// <para>(0008,1040) Institutional Department Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static InstitutionalDepartmentName: number = 528448;
   /// <summary>
   /// <para>(0008,1048) Physician(s) of Record</para>
   /// <para> VR: PN VM:1-n</para>
   /// </summary>
   public static PhysiciansOfRecord: number = 528456;
   /// <summary>
   /// <para>(0008,1049) Physician(s) of Record Identification Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PhysiciansOfRecordIdentificationSequence: number = 528457;
   /// <summary>
   /// <para>(0008,1050) Performing Physician's Name</para>
   /// <para> VR: PN VM:1-n</para>
   /// </summary>
   public static PerformingPhysiciansName: number = 528464;
   /// <summary>
   /// <para>(0008,1052) Performing Physician Identification Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PerformingPhysicianIdentificationSequence: number = 528466;
   /// <summary>
   /// <para>(0008,1060) Name of Physician(s) Reading Study</para>
   /// <para> VR: PN VM:1-n</para>
   /// </summary>
   public static NameOfPhysiciansReadingStudy: number = 528480;
   /// <summary>
   /// <para>(0008,1062) Physician(s) Reading Study Identification Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PhysiciansReadingStudyIdentificationSequence: number = 528482;
   /// <summary>
   /// <para>(0008,1070) Operators' Name</para>
   /// <para> VR: PN VM:1-n</para>
   /// </summary>
   public static OperatorsName: number = 528496;
   /// <summary>
   /// <para>(0008,1072) Operator Identification Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OperatorIdentificationSequence: number = 528498;
   /// <summary>
   /// <para>(0008,1080) Admitting Diagnoses Description</para>
   /// <para> VR: LO VM:1-n</para>
   /// </summary>
   public static AdmittingDiagnosesDescription: number = 528512;
   /// <summary>
   /// <para>(0008,1084) Admitting Diagnoses Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AdmittingDiagnosesCodeSequence: number = 528516;
   /// <summary>
   /// <para>(0008,1090) Manufacturer's Model Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ManufacturersModelName: number = 528528;
   /// <summary>
   /// <para>(0008,1100) Referenced Results Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ReferencedResultsSequenceRetired: number = 528640;
   /// <summary>
   /// <para>(0008,1110) Referenced Study Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedStudySequence: number = 528656;
   /// <summary>
   /// <para>(0008,1111) Referenced Performed Procedure Step Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedPerformedProcedureStepSequence: number = 528657;
   /// <summary>
   /// <para>(0008,1115) Referenced Series Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedSeriesSequence: number = 528661;
   /// <summary>
   /// <para>(0008,1120) Referenced Patient Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedPatientSequence: number = 528672;
   /// <summary>
   /// <para>(0008,1125) Referenced Visit Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedVisitSequence: number = 528677;
   /// <summary>
   /// <para>(0008,1130) Referenced Overlay Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ReferencedOverlaySequenceRetired: number = 528688;
   /// <summary>
   /// <para>(0008,1134) Referenced Stereometric Instance Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedStereometricInstanceSequence: number = 528692;
   /// <summary>
   /// <para>(0008,113A) Referenced Waveform Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedWaveformSequence: number = 528698;
   /// <summary>
   /// <para>(0008,1140) Referenced Image Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedImageSequence: number = 528704;
   /// <summary>
   /// <para>(0008,1145) Referenced Curve Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ReferencedCurveSequenceRetired: number = 528709;
   /// <summary>
   /// <para>(0008,114A) Referenced Instance Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedInstanceSequence: number = 528714;
   /// <summary>
   /// <para>(0008,114B) Referenced Real World Value Mapping Instance Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedRealWorldValueMappingInstanceSequence: number = 528715;
   /// <summary>
   /// <para>(0008,1150) Referenced SOP Class UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static ReferencedSopClassUid: number = 528720;
   /// <summary>
   /// <para>(0008,1155) Referenced SOP Instance UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static ReferencedSopInstanceUid: number = 528725;
   /// <summary>
   /// <para>(0008,115A) SOP Classes Supported</para>
   /// <para> VR: UI VM:1-n</para>
   /// </summary>
   public static SopClassesSupported: number = 528730;
   /// <summary>
   /// <para>(0008,1160) Referenced Frame Number</para>
   /// <para> VR: IS VM:1-n</para>
   /// </summary>
   public static ReferencedFrameNumber: number = 528736;
   /// <summary>
   /// <para>(0008,1161) Simple Frame List</para>
   /// <para> VR: UL VM:1-n</para>
   /// </summary>
   public static SimpleFrameList: number = 528737;
   /// <summary>
   /// <para>(0008,1162) Calculated Frame List</para>
   /// <para> VR: UL VM:3-3n</para>
   /// </summary>
   public static CalculatedFrameList: number = 528738;
   /// <summary>
   /// <para>(0008,1163) Time Range</para>
   /// <para> VR: FD VM:2</para>
   /// </summary>
   public static TimeRange: number = 528739;
   /// <summary>
   /// <para>(0008,1164) Frame Extraction Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FrameExtractionSequence: number = 528740;
   /// <summary>
   /// <para>(0008,1167) Multi-Frame Source SOP Instance UID </para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static MultiFrameSourceSopInstanceUid: number = 528743;
   /// <summary>
   /// <para>(0008,1195) Transaction UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static TransactionUid: number = 528789;
   /// <summary>
   /// <para>(0008,1197) Failure Reason</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static FailureReason: number = 528791;
   /// <summary>
   /// <para>(0008,1198) Failed SOP Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FailedSopSequence: number = 528792;
   /// <summary>
   /// <para>(0008,1199) Referenced SOP Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedSopSequence: number = 528793;
   /// <summary>
   /// <para>(0008,1200) Studies Containing Other Referenced Instances Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static StudiesContainingOtherReferencedInstancesSequence: number = 528896;
   /// <summary>
   /// <para>(0008,1250) Related Series Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RelatedSeriesSequence: number = 528976;
   /// <summary>
   /// <para>(0008,2110) Lossy Image Compression (Retired)</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static LossyImageCompressionRetired: number = 532752;
   /// <summary>
   /// <para>(0008,2111) Derivation Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static DerivationDescription: number = 532753;
   /// <summary>
   /// <para>(0008,2112) Source Image Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SourceImageSequence: number = 532754;
   /// <summary>
   /// <para>(0008,2120) Stage Name</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static StageName: number = 532768;
   /// <summary>
   /// <para>(0008,2122) Stage Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static StageNumber: number = 532770;
   /// <summary>
   /// <para>(0008,2124) Number of Stages</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfStages: number = 532772;
   /// <summary>
   /// <para>(0008,2127) View Name</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static ViewName: number = 532775;
   /// <summary>
   /// <para>(0008,2128) View Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ViewNumber: number = 532776;
   /// <summary>
   /// <para>(0008,2129) Number of Event Timers</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfEventTimers: number = 532777;
   /// <summary>
   /// <para>(0008,212A) Number of Views in Stage</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfViewsInStage: number = 532778;
   /// <summary>
   /// <para>(0008,2130) Event Elapsed Time(s)</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static EventElapsedTimes: number = 532784;
   /// <summary>
   /// <para>(0008,2132) Event Timer Name(s)</para>
   /// <para> VR: LO VM:1-n</para>
   /// </summary>
   public static EventTimerNames: number = 532786;
   /// <summary>
   /// <para>(0008,2133) Event Timer Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static EventTimerSequence: number = 532787;
   /// <summary>
   /// <para>(0008,2134) Event Time Offset</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static EventTimeOffset: number = 532788;
   /// <summary>
   /// <para>(0008,2135) Event Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static EventCodeSequence: number = 532789;
   /// <summary>
   /// <para>(0008,2142) Start Trim</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static StartTrim: number = 532802;
   /// <summary>
   /// <para>(0008,2143) Stop Trim</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static StopTrim: number = 532803;
   /// <summary>
   /// <para>(0008,2144) Recommended Display Frame Rate</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static RecommendedDisplayFrameRate: number = 532804;
   /// <summary>
   /// <para>(0008,2200) Transducer Position</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TransducerPositionRetired: number = 532992;
   /// <summary>
   /// <para>(0008,2204) Transducer Orientation</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TransducerOrientationRetired: number = 532996;
   /// <summary>
   /// <para>(0008,2208) Anatomic Structure</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static AnatomicStructureRetired: number = 533000;
   /// <summary>
   /// <para>(0008,2218) Anatomic Region Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AnatomicRegionSequence: number = 533016;
   /// <summary>
   /// <para>(0008,2220) Anatomic Region Modifier Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AnatomicRegionModifierSequence: number = 533024;
   /// <summary>
   /// <para>(0008,2228) Primary Anatomic Structure Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PrimaryAnatomicStructureSequence: number = 533032;
   /// <summary>
   /// <para>(0008,2229) Anatomic Structure, Space or Region Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AnatomicStructureSpaceOrRegionSequence: number = 533033;
   /// <summary>
   /// <para>(0008,2230) Primary Anatomic Structure Modifier Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PrimaryAnatomicStructureModifierSequence: number = 533040;
   /// <summary>
   /// <para>(0008,2240) Transducer Position Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TransducerPositionSequenceRetired: number = 533056;
   /// <summary>
   /// <para>(0008,2242) Transducer Position Modifier Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TransducerPositionModifierSequenceRetired: number = 533058;
   /// <summary>
   /// <para>(0008,2244) Transducer Orientation Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TransducerOrientationSequenceRetired: number = 533060;
   /// <summary>
   /// <para>(0008,2246) Transducer Orientation Modifier Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TransducerOrientationModifierSequenceRetired: number = 533062;
   /// <summary>
   /// <para>(0008,2251) Anatomic Structure Space Or Region Code Sequence (Trial)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static AnatomicStructureSpaceOrRegionCodeSequenceTrialRetired: number = 533073;
   /// <summary>
   /// <para>(0008,2253) Anatomic Portal Of Entrance Code Sequence (Trial)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static AnatomicPortalOfEntranceCodeSequenceTrialRetired: number = 533075;
   /// <summary>
   /// <para>(0008,2255) Anatomic Approach Direction Code Sequence (Trial)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static AnatomicApproachDirectionCodeSequenceTrialRetired: number = 533077;
   /// <summary>
   /// <para>(0008,2256) Anatomic Perspective Description (Trial)</para>
   /// <para> VR: ST VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static AnatomicPerspectiveDescriptionTrialRetired: number = 533078;
   /// <summary>
   /// <para>(0008,2257) Anatomic Perspective Code Sequence (Trial)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static AnatomicPerspectiveCodeSequenceTrialRetired: number = 533079;
   /// <summary>
   /// <para>(0008,2258) Anatomic Location Of Examining Instrument Description (Trial)</para>
   /// <para> VR: ST VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static AnatomicLocationOfExaminingInstrumentDescriptionTrialRetired: number = 533080;
   /// <summary>
   /// <para>(0008,2259) Anatomic Location Of Examining Instrument Code Sequence (Trial)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static AnatomicLocationOfExaminingInstrumentCodeSequenceTrialRetired: number = 533081;
   /// <summary>
   /// <para>(0008,225A) Anatomic Structure Space Or Region Modifier Code Sequence (Trial)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static AnatomicStructureSpaceOrRegionModifierCodeSequenceTrialRetired: number = 533082;
   /// <summary>
   /// <para>(0008,225C) OnAxis Background Anatomic Structure Code Sequence (Trial)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OnaxisBackgroundAnatomicStructureCodeSequenceTrialRetired: number = 533084;
   /// <summary>
   /// <para>(0008,3001) Alternate Representation Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AlternateRepresentationSequence: number = 536577;
   /// <summary>
   /// <para>(0008,3010) Irradiation Event UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static IrradiationEventUid: number = 536592;
   /// <summary>
   /// <para>(0008,4000) Identifying Comments</para>
   /// <para> VR: LT VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static IdentifyingCommentsRetired: number = 540672;
   /// <summary>
   /// <para>(0008,9007) Frame Type</para>
   /// <para> VR: CS VM:4</para>
   /// </summary>
   public static FrameType: number = 561159;
   /// <summary>
   /// <para>(0008,9092) Referenced Image Evidence Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedImageEvidenceSequence: number = 561298;
   /// <summary>
   /// <para>(0008,9121) Referenced Raw Data Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedRawDataSequence: number = 561441;
   /// <summary>
   /// <para>(0008,9123) Creator-Version UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static CreatorVersionUid: number = 561443;
   /// <summary>
   /// <para>(0008,9124) Derivation Image Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DerivationImageSequence: number = 561444;
   /// <summary>
   /// <para>(0008,9154) Source Image Evidence Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SourceImageEvidenceSequence: number = 561492;
   /// <summary>
   /// <para>(0008,9205) Pixel Presentation</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PixelPresentation: number = 561669;
   /// <summary>
   /// <para>(0008,9206) Volumetric Properties</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static VolumetricProperties: number = 561670;
   /// <summary>
   /// <para>(0008,9207) Volume Based Calculation Technique</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static VolumeBasedCalculationTechnique: number = 561671;
   /// <summary>
   /// <para>(0008,9208) Complex Image Component</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ComplexImageComponent: number = 561672;
   /// <summary>
   /// <para>(0008,9209) Acquisition Contrast</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AcquisitionContrast: number = 561673;
   /// <summary>
   /// <para>(0008,9215) Derivation Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DerivationCodeSequence: number = 561685;
   /// <summary>
   /// <para>(0008,9237) Referenced Presentation State Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedPresentationStateSequence: number = 561719;
   /// <summary>
   /// <para>(0008,9410) Referenced Other Plane Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedOtherPlaneSequence: number = 562192;
   /// <summary>
   /// <para>(0008,9458) Frame Display Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FrameDisplaySequence: number = 562264;
   /// <summary>
   /// <para>(0008,9459) Recommended Display Frame Rate in Float</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static RecommendedDisplayFrameRateInFloat: number = 562265;
   /// <summary>
   /// <para>(0008,9460) Skip Frame Range Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SkipFrameRangeFlag: number = 562272;
   /// <summary>
   /// <para>(0010,0010) Patient's Name</para>
   /// <para> VR: PN VM:1</para>
   /// </summary>
   public static PatientsName: number = 1048592;
   /// <summary>
   /// <para>(0010,0020) Patient ID</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static PatientId: number = 1048608;
   /// <summary>
   /// <para>(0010,0021) Issuer of Patient ID</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static IssuerOfPatientId: number = 1048609;
   /// <summary>
   /// <para>(0010,0022) Type of Patient ID</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TypeOfPatientId: number = 1048610;
   /// <summary>
   /// <para>(0010,0024) Issuer of Patient ID Qualifiers Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IssuerOfPatientIdQualifiersSequence: number = 1048612;
   /// <summary>
   /// <para>(0010,0030) Patient's Birth Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static PatientsBirthDate: number = 1048624;
   /// <summary>
   /// <para>(0010,0032) Patient's Birth Time</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static PatientsBirthTime: number = 1048626;
   /// <summary>
   /// <para>(0010,0040) Patient's Sex</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PatientsSex: number = 1048640;
   /// <summary>
   /// <para>(0010,0050) Patient's Insurance Plan Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PatientsInsurancePlanCodeSequence: number = 1048656;
   /// <summary>
   /// <para>(0010,0101) Patient's Primary Language Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PatientsPrimaryLanguageCodeSequence: number = 1048833;
   /// <summary>
   /// <para>(0010,0102) Patient's Primary Language Modifier Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PatientsPrimaryLanguageModifierCodeSequence: number = 1048834;
   /// <summary>
   /// <para>(0010,1000) Other Patient IDs</para>
   /// <para> VR: LO VM:1-n</para>
   /// </summary>
   public static OtherPatientIds: number = 1052672;
   /// <summary>
   /// <para>(0010,1001) Other Patient Names</para>
   /// <para> VR: PN VM:1-n</para>
   /// </summary>
   public static OtherPatientNames: number = 1052673;
   /// <summary>
   /// <para>(0010,1002) Other Patient IDs Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OtherPatientIdsSequence: number = 1052674;
   /// <summary>
   /// <para>(0010,1005) Patient's Birth Name</para>
   /// <para> VR: PN VM:1</para>
   /// </summary>
   public static PatientsBirthName: number = 1052677;
   /// <summary>
   /// <para>(0010,1010) Patient's Age</para>
   /// <para> VR: AS VM:1</para>
   /// </summary>
   public static PatientsAge: number = 1052688;
   /// <summary>
   /// <para>(0010,1020) Patient's Size</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static PatientsSize: number = 1052704;
   /// <summary>
   /// <para>(0010,1021) Patient's Size Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PatientsSizeCodeSequence: number = 1052705;
   /// <summary>
   /// <para>(0010,1030) Patient's Weight</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static PatientsWeight: number = 1052720;
   /// <summary>
   /// <para>(0010,1040) Patient's Address</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static PatientsAddress: number = 1052736;
   /// <summary>
   /// <para>(0010,1050) Insurance Plan Identification</para>
   /// <para> VR: LO VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static InsurancePlanIdentificationRetired: number = 1052752;
   /// <summary>
   /// <para>(0010,1060) Patient's Mother's Birth Name</para>
   /// <para> VR: PN VM:1</para>
   /// </summary>
   public static PatientsMothersBirthName: number = 1052768;
   /// <summary>
   /// <para>(0010,1080) Military Rank</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static MilitaryRank: number = 1052800;
   /// <summary>
   /// <para>(0010,1081) Branch of Service</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static BranchOfService: number = 1052801;
   /// <summary>
   /// <para>(0010,1090) Medical Record Locator</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static MedicalRecordLocator: number = 1052816;
   /// <summary>
   /// <para>(0010,2000) Medical Alerts</para>
   /// <para> VR: LO VM:1-n</para>
   /// </summary>
   public static MedicalAlerts: number = 1056768;
   /// <summary>
   /// <para>(0010,2110) Allergies</para>
   /// <para> VR: LO VM:1-n</para>
   /// </summary>
   public static Allergies: number = 1057040;
   /// <summary>
   /// <para>(0010,2150) Country of Residence</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static CountryOfResidence: number = 1057104;
   /// <summary>
   /// <para>(0010,2152) Region of Residence</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static RegionOfResidence: number = 1057106;
   /// <summary>
   /// <para>(0010,2154) Patient's Telephone Numbers</para>
   /// <para> VR: SH VM:1-n</para>
   /// </summary>
   public static PatientsTelephoneNumbers: number = 1057108;
   /// <summary>
   /// <para>(0010,2160) Ethnic Group</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static EthnicGroup: number = 1057120;
   /// <summary>
   /// <para>(0010,2180) Occupation</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static Occupation: number = 1057152;
   /// <summary>
   /// <para>(0010,21A0) Smoking Status</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SmokingStatus: number = 1057184;
   /// <summary>
   /// <para>(0010,21B0) Additional Patient History</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static AdditionalPatientHistory: number = 1057200;
   /// <summary>
   /// <para>(0010,21C0) Pregnancy Status</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static PregnancyStatus: number = 1057216;
   /// <summary>
   /// <para>(0010,21D0) Last Menstrual Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static LastMenstrualDate: number = 1057232;
   /// <summary>
   /// <para>(0010,21F0) Patient's Religious Preference</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static PatientsReligiousPreference: number = 1057264;
   /// <summary>
   /// <para>(0010,2201) Patient Species Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static PatientSpeciesDescription: number = 1057281;
   /// <summary>
   /// <para>(0010,2202) Patient Species Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PatientSpeciesCodeSequence: number = 1057282;
   /// <summary>
   /// <para>(0010,2203) Patient's Sex Neutered</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PatientsSexNeutered: number = 1057283;
   /// <summary>
   /// <para>(0010,2210) Anatomical Orientation Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AnatomicalOrientationType: number = 1057296;
   /// <summary>
   /// <para>(0010,2292) Patient Breed Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static PatientBreedDescription: number = 1057426;
   /// <summary>
   /// <para>(0010,2293) Patient Breed Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PatientBreedCodeSequence: number = 1057427;
   /// <summary>
   /// <para>(0010,2294) Breed Registration Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static BreedRegistrationSequence: number = 1057428;
   /// <summary>
   /// <para>(0010,2295) Breed Registration Number</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static BreedRegistrationNumber: number = 1057429;
   /// <summary>
   /// <para>(0010,2296) Breed Registry Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static BreedRegistryCodeSequence: number = 1057430;
   /// <summary>
   /// <para>(0010,2297) Responsible Person</para>
   /// <para> VR: PN VM:1</para>
   /// </summary>
   public static ResponsiblePerson: number = 1057431;
   /// <summary>
   /// <para>(0010,2298) Responsible Person Role</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ResponsiblePersonRole: number = 1057432;
   /// <summary>
   /// <para>(0010,2299) Responsible Organization</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ResponsibleOrganization: number = 1057433;
   /// <summary>
   /// <para>(0010,4000) Patient Comments</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static PatientComments: number = 1064960;
   /// <summary>
   /// <para>(0010,9431) Examined Body Thickness</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static ExaminedBodyThickness: number = 1086513;
   /// <summary>
   /// <para>(0012,0010) Clinical Trial Sponsor Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ClinicalTrialSponsorName: number = 1179664;
   /// <summary>
   /// <para>(0012,0020) Clinical Trial Protocol ID</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ClinicalTrialProtocolId: number = 1179680;
   /// <summary>
   /// <para>(0012,0021) Clinical Trial Protocol Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ClinicalTrialProtocolName: number = 1179681;
   /// <summary>
   /// <para>(0012,0030) Clinical Trial Site ID</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ClinicalTrialSiteId: number = 1179696;
   /// <summary>
   /// <para>(0012,0031) Clinical Trial Site Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ClinicalTrialSiteName: number = 1179697;
   /// <summary>
   /// <para>(0012,0040) Clinical Trial Subject ID</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ClinicalTrialSubjectId: number = 1179712;
   /// <summary>
   /// <para>(0012,0042) Clinical Trial Subject Reading ID</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ClinicalTrialSubjectReadingId: number = 1179714;
   /// <summary>
   /// <para>(0012,0050) Clinical Trial Time Point ID</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ClinicalTrialTimePointId: number = 1179728;
   /// <summary>
   /// <para>(0012,0051) Clinical Trial Time Point Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static ClinicalTrialTimePointDescription: number = 1179729;
   /// <summary>
   /// <para>(0012,0060) Clinical Trial Coordinating Center Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ClinicalTrialCoordinatingCenterName: number = 1179744;
   /// <summary>
   /// <para>(0012,0062) Patient Identity Removed</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PatientIdentityRemoved: number = 1179746;
   /// <summary>
   /// <para>(0012,0063) De-identification Method</para>
   /// <para> VR: LO VM:1-n</para>
   /// </summary>
   public static DeIdentificationMethod: number = 1179747;
   /// <summary>
   /// <para>(0012,0064) De-identification Method Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DeIdentificationMethodCodeSequence: number = 1179748;
   /// <summary>
   /// <para>(0012,0071) Clinical Trial Series ID</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ClinicalTrialSeriesId: number = 1179761;
   /// <summary>
   /// <para>(0012,0072) Clinical Trial Series Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ClinicalTrialSeriesDescription: number = 1179762;
   /// <summary>
   /// <para>(0012,0081) Clinical Trial Protocol Ethics Committee Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ClinicalTrialProtocolEthicsCommitteeName: number = 1179777;
   /// <summary>
   /// <para>(0012,0082) Clinical Trial Protocol Ethics Committee Approval Number</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ClinicalTrialProtocolEthicsCommitteeApprovalNumber: number = 1179778;
   /// <summary>
   /// <para>(0012,0083) Consent for Clinical Trial Use Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ConsentForClinicalTrialUseSequence: number = 1179779;
   /// <summary>
   /// <para>(0012,0084) Distribution Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DistributionType: number = 1179780;
   /// <summary>
   /// <para>(0012,0085) Consent for Distribution Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ConsentForDistributionFlag: number = 1179781;
   /// <summary>
   /// <para>(0014,0023) CAD File Format</para>
   /// <para> VR: ST VM:1-n</para>
   /// </summary>
   public static CadFileFormat: number = 1310755;
   /// <summary>
   /// <para>(0014,0024) Component Reference System</para>
   /// <para> VR: ST VM:1-n</para>
   /// </summary>
   public static ComponentReferenceSystem: number = 1310756;
   /// <summary>
   /// <para>(0014,0025) Component Manufacturing Procedure</para>
   /// <para> VR: ST VM:1-n</para>
   /// </summary>
   public static ComponentManufacturingProcedure: number = 1310757;
   /// <summary>
   /// <para>(0014,0028) Component Manufacturer</para>
   /// <para> VR: ST VM:1-n</para>
   /// </summary>
   public static ComponentManufacturer: number = 1310760;
   /// <summary>
   /// <para>(0014,0030) Material Thickness</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static MaterialThickness: number = 1310768;
   /// <summary>
   /// <para>(0014,0032) Material Pipe Diameter</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static MaterialPipeDiameter: number = 1310770;
   /// <summary>
   /// <para>(0014,0034) Material Isolation Diameter</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static MaterialIsolationDiameter: number = 1310772;
   /// <summary>
   /// <para>(0014,0042) Material Grade</para>
   /// <para> VR: ST VM:1-n</para>
   /// </summary>
   public static MaterialGrade: number = 1310786;
   /// <summary>
   /// <para>(0014,0044) Material Properties File ID</para>
   /// <para> VR: ST VM:1-n</para>
   /// </summary>
   public static MaterialPropertiesFileId: number = 1310788;
   /// <summary>
   /// <para>(0014,0045) Material Properties File Format</para>
   /// <para> VR: ST VM:1-n</para>
   /// </summary>
   public static MaterialPropertiesFileFormat: number = 1310789;
   /// <summary>
   /// <para>(0014,0046) Material Notes</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static MaterialNotes: number = 1310790;
   /// <summary>
   /// <para>(0014,0050) Component Shape</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ComponentShape: number = 1310800;
   /// <summary>
   /// <para>(0014,0052) Curvature Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CurvatureType: number = 1310802;
   /// <summary>
   /// <para>(0014,0054) Outer Diameter</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static OuterDiameter: number = 1310804;
   /// <summary>
   /// <para>(0014,0056) Inner Diameter</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static InnerDiameter: number = 1310806;
   /// <summary>
   /// <para>(0014,1010) Actual Environmental Conditions</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static ActualEnvironmentalConditions: number = 1314832;
   /// <summary>
   /// <para>(0014,1020) Expiry Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static ExpiryDate: number = 1314848;
   /// <summary>
   /// <para>(0014,1040) Environmental Conditions</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static EnvironmentalConditions: number = 1314880;
   /// <summary>
   /// <para>(0014,2002)  Evaluator Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static EvaluatorSequence: number = 1318914;
   /// <summary>
   /// <para>(0014,2004) Evaluator Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static EvaluatorNumber: number = 1318916;
   /// <summary>
   /// <para>(0014,2006) Evaluator Name</para>
   /// <para> VR: PN VM:1</para>
   /// </summary>
   public static EvaluatorName: number = 1318918;
   /// <summary>
   /// <para>(0014,2008) Evaluation Attempt</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static EvaluationAttempt: number = 1318920;
   /// <summary>
   /// <para>(0014,2012) Indication Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IndicationSequence: number = 1318930;
   /// <summary>
   /// <para>(0014,2014)  Indication Number </para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static IndicationNumber: number = 1318932;
   /// <summary>
   /// <para>(0014,2016) Indication Label</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static IndicationLabel: number = 1318934;
   /// <summary>
   /// <para>(0014,2018) Indication Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static IndicationDescription: number = 1318936;
   /// <summary>
   /// <para>(0014,201A) Indication Type</para>
   /// <para> VR: CS VM:1-n</para>
   /// </summary>
   public static IndicationType: number = 1318938;
   /// <summary>
   /// <para>(0014,201C) Indication Disposition</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static IndicationDisposition: number = 1318940;
   /// <summary>
   /// <para>(0014,201E) Indication ROI Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IndicationRoiSequence: number = 1318942;
   /// <summary>
   /// <para>(0014,2030) Indication Physical Property Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IndicationPhysicalPropertySequence: number = 1318960;
   /// <summary>
   /// <para>(0014,2032) Property Label</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static PropertyLabel: number = 1318962;
   /// <summary>
   /// <para>(0014,2202) Coordinate System Number of Axes </para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static CoordinateSystemNumberOfAxes: number = 1319426;
   /// <summary>
   /// <para>(0014,2204) Coordinate System Axes Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static CoordinateSystemAxesSequence: number = 1319428;
   /// <summary>
   /// <para>(0014,2206) Coordinate System Axis Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static CoordinateSystemAxisDescription: number = 1319430;
   /// <summary>
   /// <para>(0014,2208) Coordinate System Data Set Mapping</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CoordinateSystemDataSetMapping: number = 1319432;
   /// <summary>
   /// <para>(0014,220A) Coordinate System Axis Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static CoordinateSystemAxisNumber: number = 1319434;
   /// <summary>
   /// <para>(0014,220C) Coordinate System Axis Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CoordinateSystemAxisType: number = 1319436;
   /// <summary>
   /// <para>(0014,220E) Coordinate System Axis Units</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CoordinateSystemAxisUnits: number = 1319438;
   /// <summary>
   /// <para>(0014,2210) Coordinate System Axis Values</para>
   /// <para> VR: OB VM:1</para>
   /// </summary>
   public static CoordinateSystemAxisValues: number = 1319440;
   /// <summary>
   /// <para>(0014,2220) Coordinate System Transform Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static CoordinateSystemTransformSequence: number = 1319456;
   /// <summary>
   /// <para>(0014,2222) Transform Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static TransformDescription: number = 1319458;
   /// <summary>
   /// <para>(0014,2224) Transform Number of Axes</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static TransformNumberOfAxes: number = 1319460;
   /// <summary>
   /// <para>(0014,2226) Transform Order of Axes</para>
   /// <para> VR: IS VM:1-n</para>
   /// </summary>
   public static TransformOrderOfAxes: number = 1319462;
   /// <summary>
   /// <para>(0014,2228) Transformed Axis Units</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TransformedAxisUnits: number = 1319464;
   /// <summary>
   /// <para>(0014,222A) Coordinate System Transform Rotation and Scale Matrix</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static CoordinateSystemTransformRotationAndScaleMatrix: number = 1319466;
   /// <summary>
   /// <para>(0014,222C) Coordinate System Transform Translation Matrix</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static CoordinateSystemTransformTranslationMatrix: number = 1319468;
   /// <summary>
   /// <para>(0014,3011) Internal Detector Frame Time</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static InternalDetectorFrameTime: number = 1323025;
   /// <summary>
   /// <para>(0014,3012) Number of Frames Integrated</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static NumberOfFramesIntegrated: number = 1323026;
   /// <summary>
   /// <para>(0014,3020) Detector Temperature Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DetectorTemperatureSequence: number = 1323040;
   /// <summary>
   /// <para>(0014,3022) Sensor Name</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SensorName: number = 1323042;
   /// <summary>
   /// <para>(0014,3024) Horizontal Offset of Sensor</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static HorizontalOffsetOfSensor: number = 1323044;
   /// <summary>
   /// <para>(0014,3026) Vertical Offset of Sensor</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static VerticalOffsetOfSensor: number = 1323046;
   /// <summary>
   /// <para>(0014,3028) Sensor Temperature</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SensorTemperature: number = 1323048;
   /// <summary>
   /// <para>(0014,3040) Dark Current Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DarkCurrentSequence: number = 1323072;
   /// <summary>
   /// <para>(0014,3050) Dark Current Counts</para>
   /// <para> VR: OB or OW VM:1</para>
   /// </summary>
   public static DarkCurrentCounts: number = 1323088;
   /// <summary>
   /// <para>(0014,3060) Gain Correction Reference Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static GainCorrectionReferenceSequence: number = 1323104;
   /// <summary>
   /// <para>(0014,3070) Air Counts</para>
   /// <para> VR: OB or OW VM:1</para>
   /// </summary>
   public static AirCounts: number = 1323120;
   /// <summary>
   /// <para>(0014,3071) KV Used in Gain Calibration</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static KvUsedInGainCalibration: number = 1323121;
   /// <summary>
   /// <para>(0014,3072) MA Used in Gain Calibration</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static MaUsedInGainCalibration: number = 1323122;
   /// <summary>
   /// <para>(0014,3073) Number of Frames Used for Integration</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static NumberOfFramesUsedForIntegration: number = 1323123;
   /// <summary>
   /// <para>(0014,3074) Filter Material Used in Gain Calibration</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static FilterMaterialUsedInGainCalibration: number = 1323124;
   /// <summary>
   /// <para>(0014,3075) Filter Thickness Used in Gain Calibration</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static FilterThicknessUsedInGainCalibration: number = 1323125;
   /// <summary>
   /// <para>(0014,3076) Date of Gain Calibration</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static DateOfGainCalibration: number = 1323126;
   /// <summary>
   /// <para>(0014,3077) Time of Gain Calibration</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static TimeOfGainCalibration: number = 1323127;
   /// <summary>
   /// <para>(0014,3080) Bad Pixel Image</para>
   /// <para> VR: OB VM:1</para>
   /// </summary>
   public static BadPixelImage: number = 1323136;
   /// <summary>
   /// <para>(0014,3099) Calibration Notes</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static CalibrationNotes: number = 1323161;
   /// <summary>
   /// <para>(0014,4002) Pulser Equipment Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PulserEquipmentSequence: number = 1327106;
   /// <summary>
   /// <para>(0014,4004) Pulser Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PulserType: number = 1327108;
   /// <summary>
   /// <para>(0014,4006) Pulser Notes</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static PulserNotes: number = 1327110;
   /// <summary>
   /// <para>(0014,4008) Receiver Equipment Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReceiverEquipmentSequence: number = 1327112;
   /// <summary>
   /// <para>(0014,400A) Amplifier Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AmplifierType: number = 1327114;
   /// <summary>
   /// <para>(0014,400C) Receiver Notes</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static ReceiverNotes: number = 1327116;
   /// <summary>
   /// <para>(0014,400E) Pre-Amplifier Equipment Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PreAmplifierEquipmentSequence: number = 1327118;
   /// <summary>
   /// <para>(0014,400F) Pre-Amplifier Notes</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static PreAmplifierNotes: number = 1327119;
   /// <summary>
   /// <para>(0014,4010) Transmit Transducer Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static TransmitTransducerSequence: number = 1327120;
   /// <summary>
   /// <para>(0014,4011) Receive Transducer Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReceiveTransducerSequence: number = 1327121;
   /// <summary>
   /// <para>(0014,4012) Number of Elements</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfElements: number = 1327122;
   /// <summary>
   /// <para>(0014,4013) Element Shape</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ElementShape: number = 1327123;
   /// <summary>
   /// <para>(0014,4014) Element Dimension A</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ElementDimensionA: number = 1327124;
   /// <summary>
   /// <para>(0014,4015) Element Dimension B</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ElementDimensionB: number = 1327125;
   /// <summary>
   /// <para>(0014,4016) Element Pitch</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ElementPitch: number = 1327126;
   /// <summary>
   /// <para>(0014,4017) Measured Beam Dimension A</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static MeasuredBeamDimensionA: number = 1327127;
   /// <summary>
   /// <para>(0014,4018) Measured Beam Dimension B</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static MeasuredBeamDimensionB: number = 1327128;
   /// <summary>
   /// <para>(0014,4019) Location of Measured Beam Diameter</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static LocationOfMeasuredBeamDiameter: number = 1327129;
   /// <summary>
   /// <para>(0014,401A) Nominal Frequency</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static NominalFrequency: number = 1327130;
   /// <summary>
   /// <para>(0014,401B) Measured Center Frequency</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static MeasuredCenterFrequency: number = 1327131;
   /// <summary>
   /// <para>(0014,401C) Measured Bandwidth</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static MeasuredBandwidth: number = 1327132;
   /// <summary>
   /// <para>(0014,4020) Pulser Settings Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PulserSettingsSequence: number = 1327136;
   /// <summary>
   /// <para>(0014,4022) Pulse Width</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static PulseWidth: number = 1327138;
   /// <summary>
   /// <para>(0014,4024) Excitation Frequency</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ExcitationFrequency: number = 1327140;
   /// <summary>
   /// <para>(0014,4026) Modulation Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ModulationType: number = 1327142;
   /// <summary>
   /// <para>(0014,4028) Damping</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static Damping: number = 1327144;
   /// <summary>
   /// <para>(0014,4030) Receiver Settings Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReceiverSettingsSequence: number = 1327152;
   /// <summary>
   /// <para>(0014,4031) Acquired Soundpath Length</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static AcquiredSoundpathLength: number = 1327153;
   /// <summary>
   /// <para>(0014,4032) Acquisition Compression Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AcquisitionCompressionType: number = 1327154;
   /// <summary>
   /// <para>(0014,4033) Acquisition Sample Size</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static AcquisitionSampleSize: number = 1327155;
   /// <summary>
   /// <para>(0014,4034) Rectifier Smoothing</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static RectifierSmoothing: number = 1327156;
   /// <summary>
   /// <para>(0014,4035) DAC Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DacSequence: number = 1327157;
   /// <summary>
   /// <para>(0014,4036) DAC Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DacType: number = 1327158;
   /// <summary>
   /// <para>(0014,4038) DAC Gain Points</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static DacGainPoints: number = 1327160;
   /// <summary>
   /// <para>(0014,403A) DAC Time Points</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static DacTimePoints: number = 1327162;
   /// <summary>
   /// <para>(0014,403C) DAC Amplitude</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static DacAmplitude: number = 1327164;
   /// <summary>
   /// <para>(0014,4040) Pre-Amplifier Settings Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PreAmplifierSettingsSequence: number = 1327168;
   /// <summary>
   /// <para>(0014,4050) Transmit Transducer Settings Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static TransmitTransducerSettingsSequence: number = 1327184;
   /// <summary>
   /// <para>(0014,4051) Receive Transducer Settings Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReceiveTransducerSettingsSequence: number = 1327185;
   /// <summary>
   /// <para>(0014,4052) Incident Angle</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static IncidentAngle: number = 1327186;
   /// <summary>
   /// <para>(0014,4054) Coupling Technique</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static CouplingTechnique: number = 1327188;
   /// <summary>
   /// <para>(0014,4056) Coupling Medium</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static CouplingMedium: number = 1327190;
   /// <summary>
   /// <para>(0014,4057) Coupling Velocity</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static CouplingVelocity: number = 1327191;
   /// <summary>
   /// <para>(0014,4058) Crystal Center Location X</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static CrystalCenterLocationX: number = 1327192;
   /// <summary>
   /// <para>(0014,4059) Crystal Center Location Z</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static CrystalCenterLocationZ: number = 1327193;
   /// <summary>
   /// <para>(0014,405A) Sound Path Length</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SoundPathLength: number = 1327194;
   /// <summary>
   /// <para>(0014,405C) Delay Law Identifier</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static DelayLawIdentifier: number = 1327196;
   /// <summary>
   /// <para>(0014,4060) Gate Settings Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static GateSettingsSequence: number = 1327200;
   /// <summary>
   /// <para>(0014,4062) Gate Threshold</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static GateThreshold: number = 1327202;
   /// <summary>
   /// <para>(0014,4064) Velocity of Sound</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static VelocityOfSound: number = 1327204;
   /// <summary>
   /// <para>(0014,4070) Calibration Settings Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static CalibrationSettingsSequence: number = 1327216;
   /// <summary>
   /// <para>(0014,4072) Calibration Procedure</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static CalibrationProcedure: number = 1327218;
   /// <summary>
   /// <para>(0014,4074) Procedure Version</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static ProcedureVersion: number = 1327220;
   /// <summary>
   /// <para>(0014,4076) Procedure Creation Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static ProcedureCreationDate: number = 1327222;
   /// <summary>
   /// <para>(0014,4078) Procedure Expiration Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static ProcedureExpirationDate: number = 1327224;
   /// <summary>
   /// <para>(0014,407A) Procedure Last Modified Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static ProcedureLastModifiedDate: number = 1327226;
   /// <summary>
   /// <para>(0014,407C) Calibration Time</para>
   /// <para> VR: TM VM:1-n</para>
   /// </summary>
   public static CalibrationTime: number = 1327228;
   /// <summary>
   /// <para>(0014,407E) Calibration Date</para>
   /// <para> VR: DA VM:1-n</para>
   /// </summary>
   public static CalibrationDate: number = 1327230;
   /// <summary>
   /// <para>(0014,5002) LINAC Energy</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static LinacEnergy: number = 1331202;
   /// <summary>
   /// <para>(0014,5004) LINAC Output</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static LinacOutput: number = 1331204;
   /// <summary>
   /// <para>(0018,0010) Contrast/Bolus Agent</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ContrastBolusAgent: number = 1572880;
   /// <summary>
   /// <para>(0018,0012) Contrast/Bolus Agent Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ContrastBolusAgentSequence: number = 1572882;
   /// <summary>
   /// <para>(0018,0014) Contrast/Bolus Administration Route Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ContrastBolusAdministrationRouteSequence: number = 1572884;
   /// <summary>
   /// <para>(0018,0015) Body Part Examined</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BodyPartExamined: number = 1572885;
   /// <summary>
   /// <para>(0018,0020) Scanning Sequence</para>
   /// <para> VR: CS VM:1-n</para>
   /// </summary>
   public static ScanningSequence: number = 1572896;
   /// <summary>
   /// <para>(0018,0021) Sequence Variant</para>
   /// <para> VR: CS VM:1-n</para>
   /// </summary>
   public static SequenceVariant: number = 1572897;
   /// <summary>
   /// <para>(0018,0022) Scan Options</para>
   /// <para> VR: CS VM:1-n</para>
   /// </summary>
   public static ScanOptions: number = 1572898;
   /// <summary>
   /// <para>(0018,0023) MR Acquisition Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static MrAcquisitionType: number = 1572899;
   /// <summary>
   /// <para>(0018,0024) Sequence Name</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static SequenceName: number = 1572900;
   /// <summary>
   /// <para>(0018,0025) Angio Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AngioFlag: number = 1572901;
   /// <summary>
   /// <para>(0018,0026) Intervention Drug Information Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static InterventionDrugInformationSequence: number = 1572902;
   /// <summary>
   /// <para>(0018,0027) Intervention Drug Stop Time</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static InterventionDrugStopTime: number = 1572903;
   /// <summary>
   /// <para>(0018,0028) Intervention Drug Dose</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static InterventionDrugDose: number = 1572904;
   /// <summary>
   /// <para>(0018,0029) Intervention Drug Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static InterventionDrugCodeSequence: number = 1572905;
   /// <summary>
   /// <para>(0018,002A) Additional Drug Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AdditionalDrugSequence: number = 1572906;
   /// <summary>
   /// <para>(0018,0030) Radionuclide</para>
   /// <para> VR: LO VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static RadionuclideRetired: number = 1572912;
   /// <summary>
   /// <para>(0018,0031) Radiopharmaceutical</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static Radiopharmaceutical: number = 1572913;
   /// <summary>
   /// <para>(0018,0032) Energy Window Centerline</para>
   /// <para> VR: DS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static EnergyWindowCenterlineRetired: number = 1572914;
   /// <summary>
   /// <para>(0018,0033) Energy Window Total Width</para>
   /// <para> VR: DS VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static EnergyWindowTotalWidthRetired: number = 1572915;
   /// <summary>
   /// <para>(0018,0034) Intervention Drug Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static InterventionDrugName: number = 1572916;
   /// <summary>
   /// <para>(0018,0035) Intervention Drug Start Time</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static InterventionDrugStartTime: number = 1572917;
   /// <summary>
   /// <para>(0018,0036) Intervention Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static InterventionSequence: number = 1572918;
   /// <summary>
   /// <para>(0018,0037) Therapy Type</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TherapyTypeRetired: number = 1572919;
   /// <summary>
   /// <para>(0018,0038) Intervention Status</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static InterventionStatus: number = 1572920;
   /// <summary>
   /// <para>(0018,0039) Therapy Description</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TherapyDescriptionRetired: number = 1572921;
   /// <summary>
   /// <para>(0018,003A) Intervention Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static InterventionDescription: number = 1572922;
   /// <summary>
   /// <para>(0018,0040) Cine Rate </para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static CineRate: number = 1572928;
   /// <summary>
   /// <para>(0018,0042) Initial Cine Run State</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static InitialCineRunState: number = 1572930;
   /// <summary>
   /// <para>(0018,0050) Slice Thickness</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SliceThickness: number = 1572944;
   /// <summary>
   /// <para>(0018,0060) KVP</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static Kvp: number = 1572960;
   /// <summary>
   /// <para>(0018,0070) Counts Accumulated</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static CountsAccumulated: number = 1572976;
   /// <summary>
   /// <para>(0018,0071) Acquisition Termination Condition</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AcquisitionTerminationCondition: number = 1572977;
   /// <summary>
   /// <para>(0018,0072) Effective Duration</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static EffectiveDuration: number = 1572978;
   /// <summary>
   /// <para>(0018,0073) Acquisition Start Condition</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AcquisitionStartCondition: number = 1572979;
   /// <summary>
   /// <para>(0018,0074) Acquisition Start Condition Data</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static AcquisitionStartConditionData: number = 1572980;
   /// <summary>
   /// <para>(0018,0075) Acquisition Termination Condition Data</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static AcquisitionTerminationConditionData: number = 1572981;
   /// <summary>
   /// <para>(0018,0080) Repetition Time</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static RepetitionTime: number = 1572992;
   /// <summary>
   /// <para>(0018,0081) Echo Time</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static EchoTime: number = 1572993;
   /// <summary>
   /// <para>(0018,0082) Inversion Time</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static InversionTime: number = 1572994;
   /// <summary>
   /// <para>(0018,0083) Number of Averages</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static NumberOfAverages: number = 1572995;
   /// <summary>
   /// <para>(0018,0084) Imaging Frequency</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ImagingFrequency: number = 1572996;
   /// <summary>
   /// <para>(0018,0085) Imaged Nucleus</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static ImagedNucleus: number = 1572997;
   /// <summary>
   /// <para>(0018,0086) Echo Number(s)</para>
   /// <para> VR: IS VM:1-n</para>
   /// </summary>
   public static EchoNumbers: number = 1572998;
   /// <summary>
   /// <para>(0018,0087) Magnetic Field Strength</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static MagneticFieldStrength: number = 1572999;
   /// <summary>
   /// <para>(0018,0088) Spacing Between Slices</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SpacingBetweenSlices: number = 1573000;
   /// <summary>
   /// <para>(0018,0089) Number of Phase Encoding Steps</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfPhaseEncodingSteps: number = 1573001;
   /// <summary>
   /// <para>(0018,0090) Data Collection Diameter</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DataCollectionDiameter: number = 1573008;
   /// <summary>
   /// <para>(0018,0091) Echo Train Length</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static EchoTrainLength: number = 1573009;
   /// <summary>
   /// <para>(0018,0093) Percent Sampling</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static PercentSampling: number = 1573011;
   /// <summary>
   /// <para>(0018,0094) Percent Phase Field of View</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static PercentPhaseFieldOfView: number = 1573012;
   /// <summary>
   /// <para>(0018,0095) Pixel Bandwidth</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static PixelBandwidth: number = 1573013;
   /// <summary>
   /// <para>(0018,1000) Device Serial Number</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static DeviceSerialNumber: number = 1576960;
   /// <summary>
   /// <para>(0018,1002) Device UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static DeviceUid: number = 1576962;
   /// <summary>
   /// <para>(0018,1003) Device ID</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static DeviceId: number = 1576963;
   /// <summary>
   /// <para>(0018,1004) Plate ID</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static PlateId: number = 1576964;
   /// <summary>
   /// <para>(0018,1005) Generator ID</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static GeneratorId: number = 1576965;
   /// <summary>
   /// <para>(0018,1006) Grid ID</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static GridId: number = 1576966;
   /// <summary>
   /// <para>(0018,1007) Cassette ID</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static CassetteId: number = 1576967;
   /// <summary>
   /// <para>(0018,1008) Gantry ID</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static GantryId: number = 1576968;
   /// <summary>
   /// <para>(0018,1010) Secondary Capture Device ID</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static SecondaryCaptureDeviceId: number = 1576976;
   /// <summary>
   /// <para>(0018,1011) Hardcopy Creation Device ID</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static HardcopyCreationDeviceIdRetired: number = 1576977;
   /// <summary>
   /// <para>(0018,1012) Date of Secondary Capture</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static DateOfSecondaryCapture: number = 1576978;
   /// <summary>
   /// <para>(0018,1014) Time of Secondary Capture</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static TimeOfSecondaryCapture: number = 1576980;
   /// <summary>
   /// <para>(0018,1016) Secondary Capture Device Manufacturer</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static SecondaryCaptureDeviceManufacturer: number = 1576982;
   /// <summary>
   /// <para>(0018,1017) Hardcopy Device Manufacturer</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static HardcopyDeviceManufacturerRetired: number = 1576983;
   /// <summary>
   /// <para>(0018,1018) Secondary Capture Device Manufacturer's Model Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static SecondaryCaptureDeviceManufacturersModelName: number = 1576984;
   /// <summary>
   /// <para>(0018,1019) Secondary Capture Device Software Versions</para>
   /// <para> VR: LO VM:1-n</para>
   /// </summary>
   public static SecondaryCaptureDeviceSoftwareVersions: number = 1576985;
   /// <summary>
   /// <para>(0018,101A) Hardcopy Device Software Version</para>
   /// <para> VR: LO VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static HardcopyDeviceSoftwareVersionRetired: number = 1576986;
   /// <summary>
   /// <para>(0018,101B) Hardcopy Device Manufacturer's Model Name</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static HardcopyDeviceManufacturersModelNameRetired: number = 1576987;
   /// <summary>
   /// <para>(0018,1020) Software Version(s)</para>
   /// <para> VR: LO VM:1-n</para>
   /// </summary>
   public static SoftwareVersions: number = 1576992;
   /// <summary>
   /// <para>(0018,1022) Video Image Format Acquired</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static VideoImageFormatAcquired: number = 1576994;
   /// <summary>
   /// <para>(0018,1023) Digital Image Format Acquired</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static DigitalImageFormatAcquired: number = 1576995;
   /// <summary>
   /// <para>(0018,1030) Protocol Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ProtocolName: number = 1577008;
   /// <summary>
   /// <para>(0018,1040) Contrast/Bolus Route</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ContrastBolusRoute: number = 1577024;
   /// <summary>
   /// <para>(0018,1041) Contrast/Bolus Volume</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ContrastBolusVolume: number = 1577025;
   /// <summary>
   /// <para>(0018,1042) Contrast/Bolus Start Time </para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static ContrastBolusStartTime: number = 1577026;
   /// <summary>
   /// <para>(0018,1043) Contrast/Bolus Stop Time </para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static ContrastBolusStopTime: number = 1577027;
   /// <summary>
   /// <para>(0018,1044) Contrast/Bolus Total Dose</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ContrastBolusTotalDose: number = 1577028;
   /// <summary>
   /// <para>(0018,1045) Syringe Counts</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static SyringeCounts: number = 1577029;
   /// <summary>
   /// <para>(0018,1046) Contrast Flow Rate</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static ContrastFlowRate: number = 1577030;
   /// <summary>
   /// <para>(0018,1047) Contrast Flow Duration</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static ContrastFlowDuration: number = 1577031;
   /// <summary>
   /// <para>(0018,1048) Contrast/Bolus Ingredient</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ContrastBolusIngredient: number = 1577032;
   /// <summary>
   /// <para>(0018,1049) Contrast/Bolus Ingredient Concentration</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ContrastBolusIngredientConcentration: number = 1577033;
   /// <summary>
   /// <para>(0018,1050) Spatial Resolution</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SpatialResolution: number = 1577040;
   /// <summary>
   /// <para>(0018,1060) Trigger Time</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TriggerTime: number = 1577056;
   /// <summary>
   /// <para>(0018,1061) Trigger Source or Type</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static TriggerSourceOrType: number = 1577057;
   /// <summary>
   /// <para>(0018,1062) Nominal Interval</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NominalInterval: number = 1577058;
   /// <summary>
   /// <para>(0018,1063) Frame Time</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static FrameTime: number = 1577059;
   /// <summary>
   /// <para>(0018,1064) Cardiac Framing Type</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static CardiacFramingType: number = 1577060;
   /// <summary>
   /// <para>(0018,1065) Frame Time Vector</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static FrameTimeVector: number = 1577061;
   /// <summary>
   /// <para>(0018,1066) Frame Delay</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static FrameDelay: number = 1577062;
   /// <summary>
   /// <para>(0018,1067) Image Trigger Delay</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ImageTriggerDelay: number = 1577063;
   /// <summary>
   /// <para>(0018,1068) Multiplex Group Time Offset</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static MultiplexGroupTimeOffset: number = 1577064;
   /// <summary>
   /// <para>(0018,1069) Trigger Time Offset</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TriggerTimeOffset: number = 1577065;
   /// <summary>
   /// <para>(0018,106A) Synchronization Trigger</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SynchronizationTrigger: number = 1577066;
   /// <summary>
   /// <para>(0018,106C) Synchronization Channel</para>
   /// <para> VR: US VM:2</para>
   /// </summary>
   public static SynchronizationChannel: number = 1577068;
   /// <summary>
   /// <para>(0018,106E) Trigger Sample Position</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static TriggerSamplePosition: number = 1577070;
   /// <summary>
   /// <para>(0018,1070) Radiopharmaceutical Route</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static RadiopharmaceuticalRoute: number = 1577072;
   /// <summary>
   /// <para>(0018,1071) Radiopharmaceutical Volume</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static RadiopharmaceuticalVolume: number = 1577073;
   /// <summary>
   /// <para>(0018,1072) Radiopharmaceutical Start Time</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static RadiopharmaceuticalStartTime: number = 1577074;
   /// <summary>
   /// <para>(0018,1073) Radiopharmaceutical Stop Time</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static RadiopharmaceuticalStopTime: number = 1577075;
   /// <summary>
   /// <para>(0018,1074) Radionuclide Total Dose</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static RadionuclideTotalDose: number = 1577076;
   /// <summary>
   /// <para>(0018,1075) Radionuclide Half Life</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static RadionuclideHalfLife: number = 1577077;
   /// <summary>
   /// <para>(0018,1076) Radionuclide Positron Fraction</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static RadionuclidePositronFraction: number = 1577078;
   /// <summary>
   /// <para>(0018,1077) Radiopharmaceutical Specific Activity</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static RadiopharmaceuticalSpecificActivity: number = 1577079;
   /// <summary>
   /// <para>(0018,1078) Radiopharmaceutical Start DateTime</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static RadiopharmaceuticalStartDatetime: number = 1577080;
   /// <summary>
   /// <para>(0018,1079) Radiopharmaceutical Stop DateTime</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static RadiopharmaceuticalStopDatetime: number = 1577081;
   /// <summary>
   /// <para>(0018,1080) Beat Rejection Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BeatRejectionFlag: number = 1577088;
   /// <summary>
   /// <para>(0018,1081) Low R-R Value</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static LowRRValue: number = 1577089;
   /// <summary>
   /// <para>(0018,1082) High R-R Value</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static HighRRValue: number = 1577090;
   /// <summary>
   /// <para>(0018,1083) Intervals Acquired</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static IntervalsAcquired: number = 1577091;
   /// <summary>
   /// <para>(0018,1084) Intervals Rejected</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static IntervalsRejected: number = 1577092;
   /// <summary>
   /// <para>(0018,1085) PVC Rejection</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static PvcRejection: number = 1577093;
   /// <summary>
   /// <para>(0018,1086) Skip Beats</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static SkipBeats: number = 1577094;
   /// <summary>
   /// <para>(0018,1088) Heart Rate</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static HeartRate: number = 1577096;
   /// <summary>
   /// <para>(0018,1090) Cardiac Number of Images</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static CardiacNumberOfImages: number = 1577104;
   /// <summary>
   /// <para>(0018,1094) Trigger Window</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static TriggerWindow: number = 1577108;
   /// <summary>
   /// <para>(0018,1100) Reconstruction Diameter</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ReconstructionDiameter: number = 1577216;
   /// <summary>
   /// <para>(0018,1110) Distance Source to Detector</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DistanceSourceToDetector: number = 1577232;
   /// <summary>
   /// <para>(0018,1111) Distance Source to Patient</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DistanceSourceToPatient: number = 1577233;
   /// <summary>
   /// <para>(0018,1114) Estimated Radiographic Magnification Factor</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static EstimatedRadiographicMagnificationFactor: number = 1577236;
   /// <summary>
   /// <para>(0018,1120) Gantry/Detector Tilt</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static GantryDetectorTilt: number = 1577248;
   /// <summary>
   /// <para>(0018,1121) Gantry/Detector Slew</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static GantryDetectorSlew: number = 1577249;
   /// <summary>
   /// <para>(0018,1130) Table Height</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TableHeight: number = 1577264;
   /// <summary>
   /// <para>(0018,1131) Table Traverse</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TableTraverse: number = 1577265;
   /// <summary>
   /// <para>(0018,1134) Table Motion</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TableMotion: number = 1577268;
   /// <summary>
   /// <para>(0018,1135) Table Vertical Increment</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static TableVerticalIncrement: number = 1577269;
   /// <summary>
   /// <para>(0018,1136) Table Lateral Increment</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static TableLateralIncrement: number = 1577270;
   /// <summary>
   /// <para>(0018,1137) Table Longitudinal Increment</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static TableLongitudinalIncrement: number = 1577271;
   /// <summary>
   /// <para>(0018,1138) Table Angle</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TableAngle: number = 1577272;
   /// <summary>
   /// <para>(0018,113A) Table Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TableType: number = 1577274;
   /// <summary>
   /// <para>(0018,1140) Rotation Direction</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RotationDirection: number = 1577280;
   /// <summary>
   /// <para>(0018,1141) Angular Position</para>
   /// <para> VR: DS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static AngularPositionRetired: number = 1577281;
   /// <summary>
   /// <para>(0018,1142) Radial Position</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static RadialPosition: number = 1577282;
   /// <summary>
   /// <para>(0018,1143) Scan Arc</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ScanArc: number = 1577283;
   /// <summary>
   /// <para>(0018,1144) Angular Step</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static AngularStep: number = 1577284;
   /// <summary>
   /// <para>(0018,1145) Center of Rotation Offset</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static CenterOfRotationOffset: number = 1577285;
   /// <summary>
   /// <para>(0018,1146) Rotation Offset</para>
   /// <para> VR: DS VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static RotationOffsetRetired: number = 1577286;
   /// <summary>
   /// <para>(0018,1147) Field of View Shape</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FieldOfViewShape: number = 1577287;
   /// <summary>
   /// <para>(0018,1149) Field of View Dimension(s)</para>
   /// <para> VR: IS VM:1-2</para>
   /// </summary>
   public static FieldOfViewDimensions: number = 1577289;
   /// <summary>
   /// <para>(0018,1150) Exposure Time</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ExposureTime: number = 1577296;
   /// <summary>
   /// <para>(0018,1151) X-Ray Tube Current</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static XRayTubeCurrent: number = 1577297;
   /// <summary>
   /// <para>(0018,1152) Exposure </para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static Exposure: number = 1577298;
   /// <summary>
   /// <para>(0018,1153) Exposure in µAs</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ExposureInUas: number = 1577299;
   /// <summary>
   /// <para>(0018,1154) Average Pulse Width</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static AveragePulseWidth: number = 1577300;
   /// <summary>
   /// <para>(0018,1155) Radiation Setting</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RadiationSetting: number = 1577301;
   /// <summary>
   /// <para>(0018,1156)  Rectification Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RectificationType: number = 1577302;
   /// <summary>
   /// <para>(0018,115A) Radiation Mode</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RadiationMode: number = 1577306;
   /// <summary>
   /// <para>(0018,115E) Image and Fluoroscopy Area Dose Product</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ImageAndFluoroscopyAreaDoseProduct: number = 1577310;
   /// <summary>
   /// <para>(0018,1160) Filter Type</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static FilterType: number = 1577312;
   /// <summary>
   /// <para>(0018,1161) Type of Filters</para>
   /// <para> VR: LO VM:1-n</para>
   /// </summary>
   public static TypeOfFilters: number = 1577313;
   /// <summary>
   /// <para>(0018,1162) Intensifier Size</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static IntensifierSize: number = 1577314;
   /// <summary>
   /// <para>(0018,1164) Imager Pixel Spacing</para>
   /// <para> VR: DS VM:2</para>
   /// </summary>
   public static ImagerPixelSpacing: number = 1577316;
   /// <summary>
   /// <para>(0018,1166) Grid</para>
   /// <para> VR: CS VM:1-n</para>
   /// </summary>
   public static Grid: number = 1577318;
   /// <summary>
   /// <para>(0018,1170) Generator Power</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static GeneratorPower: number = 1577328;
   /// <summary>
   /// <para>(0018,1180) Collimator/grid Name </para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static CollimatorGridName: number = 1577344;
   /// <summary>
   /// <para>(0018,1181) Collimator Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CollimatorType: number = 1577345;
   /// <summary>
   /// <para>(0018,1182) Focal Distance</para>
   /// <para> VR: IS VM:1-2</para>
   /// </summary>
   public static FocalDistance: number = 1577346;
   /// <summary>
   /// <para>(0018,1183) X Focus Center</para>
   /// <para> VR: DS VM:1-2</para>
   /// </summary>
   public static XFocusCenter: number = 1577347;
   /// <summary>
   /// <para>(0018,1184) Y Focus Center</para>
   /// <para> VR: DS VM:1-2</para>
   /// </summary>
   public static YFocusCenter: number = 1577348;
   /// <summary>
   /// <para>(0018,1190) Focal Spot(s)</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static FocalSpots: number = 1577360;
   /// <summary>
   /// <para>(0018,1191) Anode Target Material</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AnodeTargetMaterial: number = 1577361;
   /// <summary>
   /// <para>(0018,11A0) Body Part Thickness</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static BodyPartThickness: number = 1577376;
   /// <summary>
   /// <para>(0018,11A2) Compression Force</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static CompressionForce: number = 1577378;
   /// <summary>
   /// <para>(0018,1200) Date of Last Calibration</para>
   /// <para> VR: DA VM:1-n</para>
   /// </summary>
   public static DateOfLastCalibration: number = 1577472;
   /// <summary>
   /// <para>(0018,1201) Time of Last Calibration</para>
   /// <para> VR: TM VM:1-n</para>
   /// </summary>
   public static TimeOfLastCalibration: number = 1577473;
   /// <summary>
   /// <para>(0018,1210) Convolution Kernel</para>
   /// <para> VR: SH VM:1-n</para>
   /// </summary>
   public static ConvolutionKernel: number = 1577488;
   /// <summary>
   /// <para>(0018,1240) Upper/Lower Pixel Values</para>
   /// <para> VR: IS VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static UpperLowerPixelValuesRetired: number = 1577536;
   /// <summary>
   /// <para>(0018,1242) Actual Frame Duration</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ActualFrameDuration: number = 1577538;
   /// <summary>
   /// <para>(0018,1243) Count Rate</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static CountRate: number = 1577539;
   /// <summary>
   /// <para>(0018,1244) Preferred Playback Sequencing</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static PreferredPlaybackSequencing: number = 1577540;
   /// <summary>
   /// <para>(0018,1250) Receive Coil Name</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static ReceiveCoilName: number = 1577552;
   /// <summary>
   /// <para>(0018,1251) Transmit Coil Name</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static TransmitCoilName: number = 1577553;
   /// <summary>
   /// <para>(0018,1260) Plate Type</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static PlateType: number = 1577568;
   /// <summary>
   /// <para>(0018,1261) Phosphor Type</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static PhosphorType: number = 1577569;
   /// <summary>
   /// <para>(0018,1300) Scan Velocity</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ScanVelocity: number = 1577728;
   /// <summary>
   /// <para>(0018,1301) Whole Body Technique</para>
   /// <para> VR: CS VM:1-n</para>
   /// </summary>
   public static WholeBodyTechnique: number = 1577729;
   /// <summary>
   /// <para>(0018,1302) Scan Length</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ScanLength: number = 1577730;
   /// <summary>
   /// <para>(0018,1310) Acquisition Matrix</para>
   /// <para> VR: US VM:4</para>
   /// </summary>
   public static AcquisitionMatrix: number = 1577744;
   /// <summary>
   /// <para>(0018,1312) In-plane Phase Encoding Direction</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static InPlanePhaseEncodingDirection: number = 1577746;
   /// <summary>
   /// <para>(0018,1314) Flip Angle</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static FlipAngle: number = 1577748;
   /// <summary>
   /// <para>(0018,1315) Variable Flip Angle Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static VariableFlipAngleFlag: number = 1577749;
   /// <summary>
   /// <para>(0018,1316) SAR</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static Sar: number = 1577750;
   /// <summary>
   /// <para>(0018,1318) dB/dt</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DbDt: number = 1577752;
   /// <summary>
   /// <para>(0018,1400) Acquisition Device Processing Description </para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static AcquisitionDeviceProcessingDescription: number = 1577984;
   /// <summary>
   /// <para>(0018,1401) Acquisition Device Processing Code</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static AcquisitionDeviceProcessingCode: number = 1577985;
   /// <summary>
   /// <para>(0018,1402) Cassette Orientation</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CassetteOrientation: number = 1577986;
   /// <summary>
   /// <para>(0018,1403) Cassette Size</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CassetteSize: number = 1577987;
   /// <summary>
   /// <para>(0018,1404) Exposures on Plate</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ExposuresOnPlate: number = 1577988;
   /// <summary>
   /// <para>(0018,1405) Relative X-Ray Exposure</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static RelativeXRayExposure: number = 1577989;
   /// <summary>
   /// <para>(0018,1411) Exposure Index</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ExposureIndex: number = 1578001;
   /// <summary>
   /// <para>(0018,1412) Target Exposure Index</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TargetExposureIndex: number = 1578002;
   /// <summary>
   /// <para>(0018,1413) Deviation Index</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DeviationIndex: number = 1578003;
   /// <summary>
   /// <para>(0018,1450) Column Angulation</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ColumnAngulation: number = 1578064;
   /// <summary>
   /// <para>(0018,1460) Tomo Layer Height</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TomoLayerHeight: number = 1578080;
   /// <summary>
   /// <para>(0018,1470) Tomo Angle</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TomoAngle: number = 1578096;
   /// <summary>
   /// <para>(0018,1480) Tomo Time</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TomoTime: number = 1578112;
   /// <summary>
   /// <para>(0018,1490) Tomo Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TomoType: number = 1578128;
   /// <summary>
   /// <para>(0018,1491) Tomo Class</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TomoClass: number = 1578129;
   /// <summary>
   /// <para>(0018,1495) Number of Tomosynthesis Source Images</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfTomosynthesisSourceImages: number = 1578133;
   /// <summary>
   /// <para>(0018,1500) Positioner Motion</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PositionerMotion: number = 1578240;
   /// <summary>
   /// <para>(0018,1508) Positioner Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PositionerType: number = 1578248;
   /// <summary>
   /// <para>(0018,1510) Positioner Primary Angle</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static PositionerPrimaryAngle: number = 1578256;
   /// <summary>
   /// <para>(0018,1511) Positioner Secondary Angle</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static PositionerSecondaryAngle: number = 1578257;
   /// <summary>
   /// <para>(0018,1520) Positioner Primary Angle Increment</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static PositionerPrimaryAngleIncrement: number = 1578272;
   /// <summary>
   /// <para>(0018,1521) Positioner Secondary Angle Increment</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static PositionerSecondaryAngleIncrement: number = 1578273;
   /// <summary>
   /// <para>(0018,1530) Detector Primary Angle</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DetectorPrimaryAngle: number = 1578288;
   /// <summary>
   /// <para>(0018,1531) Detector Secondary Angle</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DetectorSecondaryAngle: number = 1578289;
   /// <summary>
   /// <para>(0018,1600) Shutter Shape</para>
   /// <para> VR: CS VM:1-3</para>
   /// </summary>
   public static ShutterShape: number = 1578496;
   /// <summary>
   /// <para>(0018,1602) Shutter Left Vertical Edge</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ShutterLeftVerticalEdge: number = 1578498;
   /// <summary>
   /// <para>(0018,1604) Shutter Right Vertical Edge</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ShutterRightVerticalEdge: number = 1578500;
   /// <summary>
   /// <para>(0018,1606) Shutter Upper Horizontal Edge</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ShutterUpperHorizontalEdge: number = 1578502;
   /// <summary>
   /// <para>(0018,1608) Shutter Lower Horizontal Edge</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ShutterLowerHorizontalEdge: number = 1578504;
   /// <summary>
   /// <para>(0018,1610) Center of Circular Shutter</para>
   /// <para> VR: IS VM:2</para>
   /// </summary>
   public static CenterOfCircularShutter: number = 1578512;
   /// <summary>
   /// <para>(0018,1612) Radius of Circular Shutter</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static RadiusOfCircularShutter: number = 1578514;
   /// <summary>
   /// <para>(0018,1620) Vertices of the Polygonal Shutter</para>
   /// <para> VR: IS VM:2-2n</para>
   /// </summary>
   public static VerticesOfThePolygonalShutter: number = 1578528;
   /// <summary>
   /// <para>(0018,1622) Shutter Presentation Value</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ShutterPresentationValue: number = 1578530;
   /// <summary>
   /// <para>(0018,1623) Shutter Overlay Group</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ShutterOverlayGroup: number = 1578531;
   /// <summary>
   /// <para>(0018,1624) Shutter Presentation Color CIELab Value</para>
   /// <para> VR: US VM:3</para>
   /// </summary>
   public static ShutterPresentationColorCielabValue: number = 1578532;
   /// <summary>
   /// <para>(0018,1700) Collimator Shape</para>
   /// <para> VR: CS VM:1-3</para>
   /// </summary>
   public static CollimatorShape: number = 1578752;
   /// <summary>
   /// <para>(0018,1702) Collimator Left Vertical Edge</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static CollimatorLeftVerticalEdge: number = 1578754;
   /// <summary>
   /// <para>(0018,1704) Collimator Right Vertical Edge</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static CollimatorRightVerticalEdge: number = 1578756;
   /// <summary>
   /// <para>(0018,1706) Collimator Upper Horizontal Edge</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static CollimatorUpperHorizontalEdge: number = 1578758;
   /// <summary>
   /// <para>(0018,1708) Collimator Lower Horizontal Edge</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static CollimatorLowerHorizontalEdge: number = 1578760;
   /// <summary>
   /// <para>(0018,1710) Center of Circular Collimator</para>
   /// <para> VR: IS VM:2</para>
   /// </summary>
   public static CenterOfCircularCollimator: number = 1578768;
   /// <summary>
   /// <para>(0018,1712) Radius of Circular Collimator</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static RadiusOfCircularCollimator: number = 1578770;
   /// <summary>
   /// <para>(0018,1720) Vertices of the Polygonal Collimator</para>
   /// <para> VR: IS VM:2-2n</para>
   /// </summary>
   public static VerticesOfThePolygonalCollimator: number = 1578784;
   /// <summary>
   /// <para>(0018,1800) Acquisition Time Synchronized</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AcquisitionTimeSynchronized: number = 1579008;
   /// <summary>
   /// <para>(0018,1801) Time Source</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static TimeSource: number = 1579009;
   /// <summary>
   /// <para>(0018,1802) Time Distribution Protocol</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TimeDistributionProtocol: number = 1579010;
   /// <summary>
   /// <para>(0018,1803) NTP Source Address</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static NtpSourceAddress: number = 1579011;
   /// <summary>
   /// <para>(0018,2001) Page Number Vector</para>
   /// <para> VR: IS VM:1-n</para>
   /// </summary>
   public static PageNumberVector: number = 1581057;
   /// <summary>
   /// <para>(0018,2002) Frame Label Vector</para>
   /// <para> VR: SH VM:1-n</para>
   /// </summary>
   public static FrameLabelVector: number = 1581058;
   /// <summary>
   /// <para>(0018,2003) Frame Primary Angle Vector</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static FramePrimaryAngleVector: number = 1581059;
   /// <summary>
   /// <para>(0018,2004) Frame Secondary Angle Vector</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static FrameSecondaryAngleVector: number = 1581060;
   /// <summary>
   /// <para>(0018,2005) Slice Location Vector</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static SliceLocationVector: number = 1581061;
   /// <summary>
   /// <para>(0018,2006) Display Window Label Vector</para>
   /// <para> VR: SH VM:1-n</para>
   /// </summary>
   public static DisplayWindowLabelVector: number = 1581062;
   /// <summary>
   /// <para>(0018,2010) Nominal Scanned Pixel Spacing</para>
   /// <para> VR: DS VM:2</para>
   /// </summary>
   public static NominalScannedPixelSpacing: number = 1581072;
   /// <summary>
   /// <para>(0018,2020) Digitizing Device Transport Direction</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DigitizingDeviceTransportDirection: number = 1581088;
   /// <summary>
   /// <para>(0018,2030) Rotation of Scanned Film</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static RotationOfScannedFilm: number = 1581104;
   /// <summary>
   /// <para>(0018,3100) IVUS Acquisition</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static IvusAcquisition: number = 1585408;
   /// <summary>
   /// <para>(0018,3101) IVUS Pullback Rate</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static IvusPullbackRate: number = 1585409;
   /// <summary>
   /// <para>(0018,3102) IVUS Gated Rate</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static IvusGatedRate: number = 1585410;
   /// <summary>
   /// <para>(0018,3103) IVUS Pullback Start Frame Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static IvusPullbackStartFrameNumber: number = 1585411;
   /// <summary>
   /// <para>(0018,3104) IVUS Pullback Stop Frame Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static IvusPullbackStopFrameNumber: number = 1585412;
   /// <summary>
   /// <para>(0018,3105) Lesion Number </para>
   /// <para> VR: IS VM:1-n</para>
   /// </summary>
   public static LesionNumber: number = 1585413;
   /// <summary>
   /// <para>(0018,4000) Acquisition Comments</para>
   /// <para> VR: LT VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static AcquisitionCommentsRetired: number = 1589248;
   /// <summary>
   /// <para>(0018,5000) Output Power</para>
   /// <para> VR: SH VM:1-n</para>
   /// </summary>
   public static OutputPower: number = 1593344;
   /// <summary>
   /// <para>(0018,5010) Transducer Data</para>
   /// <para> VR: LO VM:1-n</para>
   /// </summary>
   public static TransducerData: number = 1593360;
   /// <summary>
   /// <para>(0018,5012) Focus Depth</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static FocusDepth: number = 1593362;
   /// <summary>
   /// <para>(0018,5020) Processing Function</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ProcessingFunction: number = 1593376;
   /// <summary>
   /// <para>(0018,5021) Postprocessing Function</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static PostprocessingFunctionRetired: number = 1593377;
   /// <summary>
   /// <para>(0018,5022) Mechanical Index</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static MechanicalIndex: number = 1593378;
   /// <summary>
   /// <para>(0018,5024) Bone Thermal Index</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static BoneThermalIndex: number = 1593380;
   /// <summary>
   /// <para>(0018,5026) Cranial Thermal Index</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static CranialThermalIndex: number = 1593382;
   /// <summary>
   /// <para>(0018,5027) Soft Tissue Thermal Index</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SoftTissueThermalIndex: number = 1593383;
   /// <summary>
   /// <para>(0018,5028) Soft Tissue-focus Thermal Index</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SoftTissueFocusThermalIndex: number = 1593384;
   /// <summary>
   /// <para>(0018,5029) Soft Tissue-surface Thermal Index</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SoftTissueSurfaceThermalIndex: number = 1593385;
   /// <summary>
   /// <para>(0018,5030) Dynamic Range</para>
   /// <para> VR: DS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DynamicRangeRetired: number = 1593392;
   /// <summary>
   /// <para>(0018,5040) Total Gain</para>
   /// <para> VR: DS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TotalGainRetired: number = 1593408;
   /// <summary>
   /// <para>(0018,5050) Depth of Scan Field</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static DepthOfScanField: number = 1593424;
   /// <summary>
   /// <para>(0018,5100) Patient Position</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PatientPosition: number = 1593600;
   /// <summary>
   /// <para>(0018,5101) View Position</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ViewPosition: number = 1593601;
   /// <summary>
   /// <para>(0018,5104) Projection Eponymous Name Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ProjectionEponymousNameCodeSequence: number = 1593604;
   /// <summary>
   /// <para>(0018,5210) Image Transformation Matrix</para>
   /// <para> VR: DS VM:6</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ImageTransformationMatrixRetired: number = 1593872;
   /// <summary>
   /// <para>(0018,5212) Image Translation Vector</para>
   /// <para> VR: DS VM:3</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ImageTranslationVectorRetired: number = 1593874;
   /// <summary>
   /// <para>(0018,6000) Sensitivity</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static Sensitivity: number = 1597440;
   /// <summary>
   /// <para>(0018,6011) Sequence of Ultrasound Regions</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SequenceOfUltrasoundRegions: number = 1597457;
   /// <summary>
   /// <para>(0018,6012) Region Spatial Format</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static RegionSpatialFormat: number = 1597458;
   /// <summary>
   /// <para>(0018,6014) Region Data Type</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static RegionDataType: number = 1597460;
   /// <summary>
   /// <para>(0018,6016) Region Flags</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static RegionFlags: number = 1597462;
   /// <summary>
   /// <para>(0018,6018) Region Location Min X0</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static RegionLocationMinX0: number = 1597464;
   /// <summary>
   /// <para>(0018,601A) Region Location Min Y0</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static RegionLocationMinY0: number = 1597466;
   /// <summary>
   /// <para>(0018,601C) Region Location Max X1</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static RegionLocationMaxX1: number = 1597468;
   /// <summary>
   /// <para>(0018,601E) Region Location Max Y1</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static RegionLocationMaxY1: number = 1597470;
   /// <summary>
   /// <para>(0018,6020) Reference Pixel X0</para>
   /// <para> VR: SL VM:1</para>
   /// </summary>
   public static ReferencePixelX0: number = 1597472;
   /// <summary>
   /// <para>(0018,6022) Reference Pixel Y0</para>
   /// <para> VR: SL VM:1</para>
   /// </summary>
   public static ReferencePixelY0: number = 1597474;
   /// <summary>
   /// <para>(0018,6024) Physical Units X Direction</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static PhysicalUnitsXDirection: number = 1597476;
   /// <summary>
   /// <para>(0018,6026) Physical Units Y Direction</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static PhysicalUnitsYDirection: number = 1597478;
   /// <summary>
   /// <para>(0018,6028) Reference Pixel Physical Value X</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static ReferencePixelPhysicalValueX: number = 1597480;
   /// <summary>
   /// <para>(0018,602A) Reference Pixel Physical Value Y</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static ReferencePixelPhysicalValueY: number = 1597482;
   /// <summary>
   /// <para>(0018,602C) Physical Delta X</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static PhysicalDeltaX: number = 1597484;
   /// <summary>
   /// <para>(0018,602E) Physical Delta Y</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static PhysicalDeltaY: number = 1597486;
   /// <summary>
   /// <para>(0018,6030) Transducer Frequency</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static TransducerFrequency: number = 1597488;
   /// <summary>
   /// <para>(0018,6031) Transducer Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TransducerType: number = 1597489;
   /// <summary>
   /// <para>(0018,6032) Pulse Repetition Frequency</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static PulseRepetitionFrequency: number = 1597490;
   /// <summary>
   /// <para>(0018,6034) Doppler Correction Angle</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static DopplerCorrectionAngle: number = 1597492;
   /// <summary>
   /// <para>(0018,6036) Steering Angle</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static SteeringAngle: number = 1597494;
   /// <summary>
   /// <para>(0018,6038) Doppler Sample Volume X Position (Retired)</para>
   /// <para> VR: UL VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DopplerSampleVolumeXPositionRetired: number = 1597496;
   /// <summary>
   /// <para>(0018,6039) Doppler Sample Volume X Position</para>
   /// <para> VR: SL VM:1</para>
   /// </summary>
   public static DopplerSampleVolumeXPosition: number = 1597497;
   /// <summary>
   /// <para>(0018,603A) Doppler Sample Volume Y Position (Retired)</para>
   /// <para> VR: UL VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DopplerSampleVolumeYPositionRetired: number = 1597498;
   /// <summary>
   /// <para>(0018,603B) Doppler Sample Volume Y Position</para>
   /// <para> VR: SL VM:1</para>
   /// </summary>
   public static DopplerSampleVolumeYPosition: number = 1597499;
   /// <summary>
   /// <para>(0018,603C) TM-Line Position X0 (Retired)</para>
   /// <para> VR: UL VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TmLinePositionX0Retired: number = 1597500;
   /// <summary>
   /// <para>(0018,603D) TM-Line Position X0</para>
   /// <para> VR: SL VM:1</para>
   /// </summary>
   public static TmLinePositionX0: number = 1597501;
   /// <summary>
   /// <para>(0018,603E) TM-Line Position Y0 (Retired)</para>
   /// <para> VR: UL VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TmLinePositionY0Retired: number = 1597502;
   /// <summary>
   /// <para>(0018,603F) TM-Line Position Y0</para>
   /// <para> VR: SL VM:1</para>
   /// </summary>
   public static TmLinePositionY0: number = 1597503;
   /// <summary>
   /// <para>(0018,6040) TM-Line Position X1 (Retired)</para>
   /// <para> VR: UL VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TmLinePositionX1Retired: number = 1597504;
   /// <summary>
   /// <para>(0018,6041) TM-Line Position X1</para>
   /// <para> VR: SL VM:1</para>
   /// </summary>
   public static TmLinePositionX1: number = 1597505;
   /// <summary>
   /// <para>(0018,6042) TM-Line Position Y1 (Retired)</para>
   /// <para> VR: UL VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TmLinePositionY1Retired: number = 1597506;
   /// <summary>
   /// <para>(0018,6043) TM-Line Position Y1</para>
   /// <para> VR: SL VM:1</para>
   /// </summary>
   public static TmLinePositionY1: number = 1597507;
   /// <summary>
   /// <para>(0018,6044) Pixel Component Organization</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static PixelComponentOrganization: number = 1597508;
   /// <summary>
   /// <para>(0018,6046) Pixel Component Mask</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static PixelComponentMask: number = 1597510;
   /// <summary>
   /// <para>(0018,6048) Pixel Component Range Start</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static PixelComponentRangeStart: number = 1597512;
   /// <summary>
   /// <para>(0018,604A) Pixel Component Range Stop</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static PixelComponentRangeStop: number = 1597514;
   /// <summary>
   /// <para>(0018,604C) Pixel Component Physical Units</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static PixelComponentPhysicalUnits: number = 1597516;
   /// <summary>
   /// <para>(0018,604E) Pixel Component Data Type</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static PixelComponentDataType: number = 1597518;
   /// <summary>
   /// <para>(0018,6050) Number of Table Break Points</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static NumberOfTableBreakPoints: number = 1597520;
   /// <summary>
   /// <para>(0018,6052) Table of X Break Points</para>
   /// <para> VR: UL VM:1-n</para>
   /// </summary>
   public static TableOfXBreakPoints: number = 1597522;
   /// <summary>
   /// <para>(0018,6054) Table of Y Break Points</para>
   /// <para> VR: FD VM:1-n</para>
   /// </summary>
   public static TableOfYBreakPoints: number = 1597524;
   /// <summary>
   /// <para>(0018,6056) Number of Table Entries</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static NumberOfTableEntries: number = 1597526;
   /// <summary>
   /// <para>(0018,6058) Table of Pixel Values</para>
   /// <para> VR: UL VM:1-n</para>
   /// </summary>
   public static TableOfPixelValues: number = 1597528;
   /// <summary>
   /// <para>(0018,605A) Table of Parameter Values</para>
   /// <para> VR: FL VM:1-n</para>
   /// </summary>
   public static TableOfParameterValues: number = 1597530;
   /// <summary>
   /// <para>(0018,6060) R Wave Time Vector</para>
   /// <para> VR: FL VM:1-n</para>
   /// </summary>
   public static RWaveTimeVector: number = 1597536;
   /// <summary>
   /// <para>(0018,7000) Detector Conditions Nominal Flag </para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DetectorConditionsNominalFlag: number = 1601536;
   /// <summary>
   /// <para>(0018,7001) Detector Temperature</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DetectorTemperature: number = 1601537;
   /// <summary>
   /// <para>(0018,7004) Detector Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DetectorType: number = 1601540;
   /// <summary>
   /// <para>(0018,7005) Detector Configuration</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DetectorConfiguration: number = 1601541;
   /// <summary>
   /// <para>(0018,7006) Detector Description</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static DetectorDescription: number = 1601542;
   /// <summary>
   /// <para>(0018,7008) Detector Mode</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static DetectorMode: number = 1601544;
   /// <summary>
   /// <para>(0018,700A) Detector ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static DetectorId: number = 1601546;
   /// <summary>
   /// <para>(0018,700C) Date of Last Detector Calibration </para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static DateOfLastDetectorCalibration: number = 1601548;
   /// <summary>
   /// <para>(0018,700E) Time of Last Detector Calibration</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static TimeOfLastDetectorCalibration: number = 1601550;
   /// <summary>
   /// <para>(0018,7010) Exposures on Detector Since Last Calibration </para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ExposuresOnDetectorSinceLastCalibration: number = 1601552;
   /// <summary>
   /// <para>(0018,7011) Exposures on Detector Since Manufactured </para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ExposuresOnDetectorSinceManufactured: number = 1601553;
   /// <summary>
   /// <para>(0018,7012) Detector Time Since Last Exposure </para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DetectorTimeSinceLastExposure: number = 1601554;
   /// <summary>
   /// <para>(0018,7014) Detector Active Time </para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DetectorActiveTime: number = 1601556;
   /// <summary>
   /// <para>(0018,7016) Detector Activation Offset From Exposure</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DetectorActivationOffsetFromExposure: number = 1601558;
   /// <summary>
   /// <para>(0018,701A) Detector Binning </para>
   /// <para> VR: DS VM:2</para>
   /// </summary>
   public static DetectorBinning: number = 1601562;
   /// <summary>
   /// <para>(0018,7020) Detector Element Physical Size</para>
   /// <para> VR: DS VM:2</para>
   /// </summary>
   public static DetectorElementPhysicalSize: number = 1601568;
   /// <summary>
   /// <para>(0018,7022) Detector Element Spacing</para>
   /// <para> VR: DS VM:2</para>
   /// </summary>
   public static DetectorElementSpacing: number = 1601570;
   /// <summary>
   /// <para>(0018,7024) Detector Active Shape</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DetectorActiveShape: number = 1601572;
   /// <summary>
   /// <para>(0018,7026) Detector Active Dimension(s)</para>
   /// <para> VR: DS VM:1-2</para>
   /// </summary>
   public static DetectorActiveDimensions: number = 1601574;
   /// <summary>
   /// <para>(0018,7028) Detector Active Origin</para>
   /// <para> VR: DS VM:2</para>
   /// </summary>
   public static DetectorActiveOrigin: number = 1601576;
   /// <summary>
   /// <para>(0018,702A) Detector Manufacturer Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static DetectorManufacturerName: number = 1601578;
   /// <summary>
   /// <para>(0018,702B) Detector Manufacturer's Model Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static DetectorManufacturersModelName: number = 1601579;
   /// <summary>
   /// <para>(0018,7030) Field of View Origin</para>
   /// <para> VR: DS VM:2</para>
   /// </summary>
   public static FieldOfViewOrigin: number = 1601584;
   /// <summary>
   /// <para>(0018,7032) Field of View Rotation</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static FieldOfViewRotation: number = 1601586;
   /// <summary>
   /// <para>(0018,7034) Field of View Horizontal Flip</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FieldOfViewHorizontalFlip: number = 1601588;
   /// <summary>
   /// <para>(0018,7036) Pixel Data Area Origin Relative To FOV</para>
   /// <para> VR: FL VM:2</para>
   /// </summary>
   public static PixelDataAreaOriginRelativeToFov: number = 1601590;
   /// <summary>
   /// <para>(0018,7038) Pixel Data Area Rotation Angle Relative To FOV</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static PixelDataAreaRotationAngleRelativeToFov: number = 1601592;
   /// <summary>
   /// <para>(0018,7040) Grid Absorbing Material</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static GridAbsorbingMaterial: number = 1601600;
   /// <summary>
   /// <para>(0018,7041) Grid Spacing Material</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static GridSpacingMaterial: number = 1601601;
   /// <summary>
   /// <para>(0018,7042) Grid Thickness</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static GridThickness: number = 1601602;
   /// <summary>
   /// <para>(0018,7044) Grid Pitch</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static GridPitch: number = 1601604;
   /// <summary>
   /// <para>(0018,7046) Grid Aspect Ratio</para>
   /// <para> VR: IS VM:2</para>
   /// </summary>
   public static GridAspectRatio: number = 1601606;
   /// <summary>
   /// <para>(0018,7048) Grid Period</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static GridPeriod: number = 1601608;
   /// <summary>
   /// <para>(0018,704C) Grid Focal Distance</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static GridFocalDistance: number = 1601612;
   /// <summary>
   /// <para>(0018,7050) Filter Material</para>
   /// <para> VR: CS VM:1-n</para>
   /// </summary>
   public static FilterMaterial: number = 1601616;
   /// <summary>
   /// <para>(0018,7052) Filter Thickness Minimum</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static FilterThicknessMinimum: number = 1601618;
   /// <summary>
   /// <para>(0018,7054) Filter Thickness Maximum</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static FilterThicknessMaximum: number = 1601620;
   /// <summary>
   /// <para>(0018,7056) Filter Beam Path Length Minimum</para>
   /// <para> VR: FL VM:1-n</para>
   /// </summary>
   public static FilterBeamPathLengthMinimum: number = 1601622;
   /// <summary>
   /// <para>(0018,7058) Filter Beam Path Length Maximum</para>
   /// <para> VR: FL VM:1-n</para>
   /// </summary>
   public static FilterBeamPathLengthMaximum: number = 1601624;
   /// <summary>
   /// <para>(0018,7060) Exposure Control Mode</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ExposureControlMode: number = 1601632;
   /// <summary>
   /// <para>(0018,7062) Exposure Control Mode Description</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static ExposureControlModeDescription: number = 1601634;
   /// <summary>
   /// <para>(0018,7064) Exposure Status</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ExposureStatus: number = 1601636;
   /// <summary>
   /// <para>(0018,7065) Phototimer Setting</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static PhototimerSetting: number = 1601637;
   /// <summary>
   /// <para>(0018,8150) Exposure Time in µS</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ExposureTimeInUs: number = 1605968;
   /// <summary>
   /// <para>(0018,8151) X-Ray Tube Current in µA</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static XRayTubeCurrentInUa: number = 1605969;
   /// <summary>
   /// <para>(0018,9004) Content Qualification</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ContentQualification: number = 1609732;
   /// <summary>
   /// <para>(0018,9005) Pulse Sequence Name</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static PulseSequenceName: number = 1609733;
   /// <summary>
   /// <para>(0018,9006) MR Imaging Modifier Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MrImagingModifierSequence: number = 1609734;
   /// <summary>
   /// <para>(0018,9008) Echo Pulse Sequence</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static EchoPulseSequence: number = 1609736;
   /// <summary>
   /// <para>(0018,9009) Inversion Recovery</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static InversionRecovery: number = 1609737;
   /// <summary>
   /// <para>(0018,9010) Flow Compensation</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FlowCompensation: number = 1609744;
   /// <summary>
   /// <para>(0018,9011) Multiple Spin Echo</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static MultipleSpinEcho: number = 1609745;
   /// <summary>
   /// <para>(0018,9012) Multi-planar Excitation</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static MultiPlanarExcitation: number = 1609746;
   /// <summary>
   /// <para>(0018,9014) Phase Contrast</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PhaseContrast: number = 1609748;
   /// <summary>
   /// <para>(0018,9015) Time of Flight Contrast</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TimeOfFlightContrast: number = 1609749;
   /// <summary>
   /// <para>(0018,9016) Spoiling</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static Spoiling: number = 1609750;
   /// <summary>
   /// <para>(0018,9017) Steady State Pulse Sequence</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SteadyStatePulseSequence: number = 1609751;
   /// <summary>
   /// <para>(0018,9018) Echo Planar Pulse Sequence</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static EchoPlanarPulseSequence: number = 1609752;
   /// <summary>
   /// <para>(0018,9019) Tag Angle First Axis</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static TagAngleFirstAxis: number = 1609753;
   /// <summary>
   /// <para>(0018,9020) Magnetization Transfer</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static MagnetizationTransfer: number = 1609760;
   /// <summary>
   /// <para>(0018,9021) T2 Preparation</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static T2Preparation: number = 1609761;
   /// <summary>
   /// <para>(0018,9022) Blood Signal Nulling</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BloodSignalNulling: number = 1609762;
   /// <summary>
   /// <para>(0018,9024) Saturation Recovery</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SaturationRecovery: number = 1609764;
   /// <summary>
   /// <para>(0018,9025) Spectrally Selected Suppression</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SpectrallySelectedSuppression: number = 1609765;
   /// <summary>
   /// <para>(0018,9026) Spectrally Selected Excitation</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SpectrallySelectedExcitation: number = 1609766;
   /// <summary>
   /// <para>(0018,9027) Spatial Pre-saturation</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SpatialPreSaturation: number = 1609767;
   /// <summary>
   /// <para>(0018,9028) Tagging</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static Tagging: number = 1609768;
   /// <summary>
   /// <para>(0018,9029) Oversampling Phase</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static OversamplingPhase: number = 1609769;
   /// <summary>
   /// <para>(0018,9030) Tag Spacing First Dimension</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static TagSpacingFirstDimension: number = 1609776;
   /// <summary>
   /// <para>(0018,9032) Geometry of k-Space Traversal</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static GeometryOfKSpaceTraversal: number = 1609778;
   /// <summary>
   /// <para>(0018,9033) Segmented k-Space Traversal</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SegmentedKSpaceTraversal: number = 1609779;
   /// <summary>
   /// <para>(0018,9034) Rectilinear Phase Encode Reordering</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RectilinearPhaseEncodeReordering: number = 1609780;
   /// <summary>
   /// <para>(0018,9035) Tag Thickness</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static TagThickness: number = 1609781;
   /// <summary>
   /// <para>(0018,9036) Partial Fourier Direction</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PartialFourierDirection: number = 1609782;
   /// <summary>
   /// <para>(0018,9037) Cardiac Synchronization Technique</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CardiacSynchronizationTechnique: number = 1609783;
   /// <summary>
   /// <para>(0018,9041) Receive Coil Manufacturer Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ReceiveCoilManufacturerName: number = 1609793;
   /// <summary>
   /// <para>(0018,9042) MR Receive Coil Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MrReceiveCoilSequence: number = 1609794;
   /// <summary>
   /// <para>(0018,9043) Receive Coil Type </para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ReceiveCoilType: number = 1609795;
   /// <summary>
   /// <para>(0018,9044) Quadrature Receive Coil </para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static QuadratureReceiveCoil: number = 1609796;
   /// <summary>
   /// <para>(0018,9045) Multi-Coil Definition Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MultiCoilDefinitionSequence: number = 1609797;
   /// <summary>
   /// <para>(0018,9046) Multi-Coil Configuration </para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static MultiCoilConfiguration: number = 1609798;
   /// <summary>
   /// <para>(0018,9047) Multi-Coil Element Name</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static MultiCoilElementName: number = 1609799;
   /// <summary>
   /// <para>(0018,9048) Multi-Coil Element Used</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static MultiCoilElementUsed: number = 1609800;
   /// <summary>
   /// <para>(0018,9049) MR Transmit Coil Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MrTransmitCoilSequence: number = 1609801;
   /// <summary>
   /// <para>(0018,9050) Transmit Coil Manufacturer Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static TransmitCoilManufacturerName: number = 1609808;
   /// <summary>
   /// <para>(0018,9051) Transmit Coil Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TransmitCoilType: number = 1609809;
   /// <summary>
   /// <para>(0018,9052) Spectral Width</para>
   /// <para> VR: FD VM:1-2</para>
   /// </summary>
   public static SpectralWidth: number = 1609810;
   /// <summary>
   /// <para>(0018,9053) Chemical Shift Reference</para>
   /// <para> VR: FD VM:1-2</para>
   /// </summary>
   public static ChemicalShiftReference: number = 1609811;
   /// <summary>
   /// <para>(0018,9054) Volume Localization Technique</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static VolumeLocalizationTechnique: number = 1609812;
   /// <summary>
   /// <para>(0018,9058) MR Acquisition Frequency Encoding Steps</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static MrAcquisitionFrequencyEncodingSteps: number = 1609816;
   /// <summary>
   /// <para>(0018,9059) De-coupling</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DeCoupling: number = 1609817;
   /// <summary>
   /// <para>(0018,9060) De-coupled Nucleus</para>
   /// <para> VR: CS VM:1-2</para>
   /// </summary>
   public static DeCoupledNucleus: number = 1609824;
   /// <summary>
   /// <para>(0018,9061) De-coupling Frequency</para>
   /// <para> VR: FD VM:1-2</para>
   /// </summary>
   public static DeCouplingFrequency: number = 1609825;
   /// <summary>
   /// <para>(0018,9062) De-coupling Method</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DeCouplingMethod: number = 1609826;
   /// <summary>
   /// <para>(0018,9063) De-coupling Chemical Shift Reference</para>
   /// <para> VR: FD VM:1-2</para>
   /// </summary>
   public static DeCouplingChemicalShiftReference: number = 1609827;
   /// <summary>
   /// <para>(0018,9064) k-space Filtering</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static KSpaceFiltering: number = 1609828;
   /// <summary>
   /// <para>(0018,9065) Time Domain Filtering</para>
   /// <para> VR: CS VM:1-2</para>
   /// </summary>
   public static TimeDomainFiltering: number = 1609829;
   /// <summary>
   /// <para>(0018,9066) Number of Zero Fills</para>
   /// <para> VR: US VM:1-2</para>
   /// </summary>
   public static NumberOfZeroFills: number = 1609830;
   /// <summary>
   /// <para>(0018,9067) Baseline Correction</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BaselineCorrection: number = 1609831;
   /// <summary>
   /// <para>(0018,9069) Parallel Reduction Factor In-plane</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static ParallelReductionFactorInPlane: number = 1609833;
   /// <summary>
   /// <para>(0018,9070) Cardiac R-R Interval Specified</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static CardiacRRIntervalSpecified: number = 1609840;
   /// <summary>
   /// <para>(0018,9073) Acquisition Duration</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static AcquisitionDuration: number = 1609843;
   /// <summary>
   /// <para>(0018,9074) Frame Acquisition DateTime</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static FrameAcquisitionDatetime: number = 1609844;
   /// <summary>
   /// <para>(0018,9075) Diffusion Directionality</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DiffusionDirectionality: number = 1609845;
   /// <summary>
   /// <para>(0018,9076) Diffusion Gradient Direction Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DiffusionGradientDirectionSequence: number = 1609846;
   /// <summary>
   /// <para>(0018,9077) Parallel Acquisition</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ParallelAcquisition: number = 1609847;
   /// <summary>
   /// <para>(0018,9078) Parallel Acquisition Technique</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ParallelAcquisitionTechnique: number = 1609848;
   /// <summary>
   /// <para>(0018,9079) Inversion Times</para>
   /// <para> VR: FD VM:1-n</para>
   /// </summary>
   public static InversionTimes: number = 1609849;
   /// <summary>
   /// <para>(0018,9080) Metabolite Map Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static MetaboliteMapDescription: number = 1609856;
   /// <summary>
   /// <para>(0018,9081) Partial Fourier</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PartialFourier: number = 1609857;
   /// <summary>
   /// <para>(0018,9082) Effective Echo Time</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static EffectiveEchoTime: number = 1609858;
   /// <summary>
   /// <para>(0018,9083) Metabolite Map Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MetaboliteMapCodeSequence: number = 1609859;
   /// <summary>
   /// <para>(0018,9084) Chemical Shift Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ChemicalShiftSequence: number = 1609860;
   /// <summary>
   /// <para>(0018,9085) Cardiac Signal Source</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CardiacSignalSource: number = 1609861;
   /// <summary>
   /// <para>(0018,9087) Diffusion b-value</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static DiffusionBValue: number = 1609863;
   /// <summary>
   /// <para>(0018,9089) Diffusion Gradient Orientation</para>
   /// <para> VR: FD VM:3</para>
   /// </summary>
   public static DiffusionGradientOrientation: number = 1609865;
   /// <summary>
   /// <para>(0018,9090) Velocity Encoding Direction</para>
   /// <para> VR: FD VM:3</para>
   /// </summary>
   public static VelocityEncodingDirection: number = 1609872;
   /// <summary>
   /// <para>(0018,9091) Velocity Encoding Minimum Value</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static VelocityEncodingMinimumValue: number = 1609873;
   /// <summary>
   /// <para>(0018,9092) Velocity Encoding Acquisition Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static VelocityEncodingAcquisitionSequence: number = 1609874;
   /// <summary>
   /// <para>(0018,9093) Number of k-Space Trajectories</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfKSpaceTrajectories: number = 1609875;
   /// <summary>
   /// <para>(0018,9094) Coverage of k-Space</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CoverageOfKSpace: number = 1609876;
   /// <summary>
   /// <para>(0018,9095) Spectroscopy Acquisition Phase Rows</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static SpectroscopyAcquisitionPhaseRows: number = 1609877;
   /// <summary>
   /// <para>(0018,9096) Parallel Reduction Factor In-plane (Retired)</para>
   /// <para> VR: FD VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ParallelReductionFactorInPlaneRetired: number = 1609878;
   /// <summary>
   /// <para>(0018,9098) Transmitter Frequency</para>
   /// <para> VR: FD VM:1-2</para>
   /// </summary>
   public static TransmitterFrequency: number = 1609880;
   /// <summary>
   /// <para>(0018,9100) Resonant Nucleus</para>
   /// <para> VR: CS VM:1-2</para>
   /// </summary>
   public static ResonantNucleus: number = 1609984;
   /// <summary>
   /// <para>(0018,9101) Frequency Correction</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FrequencyCorrection: number = 1609985;
   /// <summary>
   /// <para>(0018,9103) MR Spectroscopy FOV/Geometry Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MrSpectroscopyFovGeometrySequence: number = 1609987;
   /// <summary>
   /// <para>(0018,9104) Slab Thickness</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static SlabThickness: number = 1609988;
   /// <summary>
   /// <para>(0018,9105) Slab Orientation</para>
   /// <para> VR: FD VM:3</para>
   /// </summary>
   public static SlabOrientation: number = 1609989;
   /// <summary>
   /// <para>(0018,9106) Mid Slab Position</para>
   /// <para> VR: FD VM:3</para>
   /// </summary>
   public static MidSlabPosition: number = 1609990;
   /// <summary>
   /// <para>(0018,9107) MR Spatial Saturation Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MrSpatialSaturationSequence: number = 1609991;
   /// <summary>
   /// <para>(0018,9112) MR Timing and Related Parameters Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MrTimingAndRelatedParametersSequence: number = 1610002;
   /// <summary>
   /// <para>(0018,9114) MR Echo Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MrEchoSequence: number = 1610004;
   /// <summary>
   /// <para>(0018,9115) MR Modifier Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MrModifierSequence: number = 1610005;
   /// <summary>
   /// <para>(0018,9117) MR Diffusion Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MrDiffusionSequence: number = 1610007;
   /// <summary>
   /// <para>(0018,9118) Cardiac Synchronization Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static CardiacSynchronizationSequence: number = 1610008;
   /// <summary>
   /// <para>(0018,9119) MR Averages Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MrAveragesSequence: number = 1610009;
   /// <summary>
   /// <para>(0018,9125) MR FOV/Geometry Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MrFovGeometrySequence: number = 1610021;
   /// <summary>
   /// <para>(0018,9126) Volume Localization Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static VolumeLocalizationSequence: number = 1610022;
   /// <summary>
   /// <para>(0018,9127) Spectroscopy Acquisition Data Columns</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static SpectroscopyAcquisitionDataColumns: number = 1610023;
   /// <summary>
   /// <para>(0018,9147) Diffusion Anisotropy Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DiffusionAnisotropyType: number = 1610055;
   /// <summary>
   /// <para>(0018,9151) Frame Reference DateTime</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static FrameReferenceDatetime: number = 1610065;
   /// <summary>
   /// <para>(0018,9152) MR Metabolite Map Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MrMetaboliteMapSequence: number = 1610066;
   /// <summary>
   /// <para>(0018,9155) Parallel Reduction Factor out-of-plane</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static ParallelReductionFactorOutOfPlane: number = 1610069;
   /// <summary>
   /// <para>(0018,9159) Spectroscopy Acquisition Out-of-plane Phase Steps</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static SpectroscopyAcquisitionOutOfPlanePhaseSteps: number = 1610073;
   /// <summary>
   /// <para>(0018,9166) Bulk Motion Status</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static BulkMotionStatusRetired: number = 1610086;
   /// <summary>
   /// <para>(0018,9168) Parallel Reduction Factor Second In-plane</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static ParallelReductionFactorSecondInPlane: number = 1610088;
   /// <summary>
   /// <para>(0018,9169) Cardiac Beat Rejection Technique</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CardiacBeatRejectionTechnique: number = 1610089;
   /// <summary>
   /// <para>(0018,9170) Respiratory Motion Compensation Technique</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RespiratoryMotionCompensationTechnique: number = 1610096;
   /// <summary>
   /// <para>(0018,9171) Respiratory Signal Source</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RespiratorySignalSource: number = 1610097;
   /// <summary>
   /// <para>(0018,9172) Bulk Motion Compensation Technique</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BulkMotionCompensationTechnique: number = 1610098;
   /// <summary>
   /// <para>(0018,9173) Bulk Motion Signal Source</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BulkMotionSignalSource: number = 1610099;
   /// <summary>
   /// <para>(0018,9174) Applicable Safety Standard Agency</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ApplicableSafetyStandardAgency: number = 1610100;
   /// <summary>
   /// <para>(0018,9175) Applicable Safety Standard Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ApplicableSafetyStandardDescription: number = 1610101;
   /// <summary>
   /// <para>(0018,9176) Operating Mode Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OperatingModeSequence: number = 1610102;
   /// <summary>
   /// <para>(0018,9177) Operating Mode Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static OperatingModeType: number = 1610103;
   /// <summary>
   /// <para>(0018,9178) Operating Mode</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static OperatingMode: number = 1610104;
   /// <summary>
   /// <para>(0018,9179) Specific Absorption Rate Definition</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SpecificAbsorptionRateDefinition: number = 1610105;
   /// <summary>
   /// <para>(0018,9180) Gradient Output Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static GradientOutputType: number = 1610112;
   /// <summary>
   /// <para>(0018,9181) Specific Absorption Rate Value</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static SpecificAbsorptionRateValue: number = 1610113;
   /// <summary>
   /// <para>(0018,9182) Gradient Output</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static GradientOutput: number = 1610114;
   /// <summary>
   /// <para>(0018,9183) Flow Compensation Direction</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FlowCompensationDirection: number = 1610115;
   /// <summary>
   /// <para>(0018,9184) Tagging Delay</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static TaggingDelay: number = 1610116;
   /// <summary>
   /// <para>(0018,9185) Respiratory Motion Compensation Technique Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static RespiratoryMotionCompensationTechniqueDescription: number = 1610117;
   /// <summary>
   /// <para>(0018,9186) Respiratory Signal Source ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static RespiratorySignalSourceId: number = 1610118;
   /// <summary>
   /// <para>(0018,9195) Chemical Shift Minimum Integration Limit in Hz</para>
   /// <para> VR: FD VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ChemicalShiftMinimumIntegrationLimitInHzRetired: number = 1610133;
   /// <summary>
   /// <para>(0018,9196) Chemical Shift Maximum Integration Limit in Hz</para>
   /// <para> VR: FD VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ChemicalShiftMaximumIntegrationLimitInHzRetired: number = 1610134;
   /// <summary>
   /// <para>(0018,9197) MR Velocity Encoding Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MrVelocityEncodingSequence: number = 1610135;
   /// <summary>
   /// <para>(0018,9198) First Order Phase Correction</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FirstOrderPhaseCorrection: number = 1610136;
   /// <summary>
   /// <para>(0018,9199) Water Referenced Phase Correction</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static WaterReferencedPhaseCorrection: number = 1610137;
   /// <summary>
   /// <para>(0018,9200) MR Spectroscopy Acquisition Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static MrSpectroscopyAcquisitionType: number = 1610240;
   /// <summary>
   /// <para>(0018,9214) Respiratory Cycle Position</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RespiratoryCyclePosition: number = 1610260;
   /// <summary>
   /// <para>(0018,9217) Velocity Encoding Maximum Value</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static VelocityEncodingMaximumValue: number = 1610263;
   /// <summary>
   /// <para>(0018,9218) Tag Spacing Second Dimension</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static TagSpacingSecondDimension: number = 1610264;
   /// <summary>
   /// <para>(0018,9219) Tag Angle Second Axis</para>
   /// <para> VR: SS VM:1</para>
   /// </summary>
   public static TagAngleSecondAxis: number = 1610265;
   /// <summary>
   /// <para>(0018,9220) Frame Acquisition Duration</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static FrameAcquisitionDuration: number = 1610272;
   /// <summary>
   /// <para>(0018,9226) MR Image Frame Type Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MrImageFrameTypeSequence: number = 1610278;
   /// <summary>
   /// <para>(0018,9227) MR Spectroscopy Frame Type Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MrSpectroscopyFrameTypeSequence: number = 1610279;
   /// <summary>
   /// <para>(0018,9231) MR Acquisition Phase Encoding Steps in-plane</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static MrAcquisitionPhaseEncodingStepsInPlane: number = 1610289;
   /// <summary>
   /// <para>(0018,9232) MR Acquisition Phase Encoding Steps out-of-plane</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static MrAcquisitionPhaseEncodingStepsOutOfPlane: number = 1610290;
   /// <summary>
   /// <para>(0018,9234) Spectroscopy Acquisition Phase Columns</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static SpectroscopyAcquisitionPhaseColumns: number = 1610292;
   /// <summary>
   /// <para>(0018,9236) Cardiac Cycle Position</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CardiacCyclePosition: number = 1610294;
   /// <summary>
   /// <para>(0018,9239) Specific Absorption Rate Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SpecificAbsorptionRateSequence: number = 1610297;
   /// <summary>
   /// <para>(0018,9240) RF Echo Train Length</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static RfEchoTrainLength: number = 1610304;
   /// <summary>
   /// <para>(0018,9241) Gradient Echo Train Length</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static GradientEchoTrainLength: number = 1610305;
   /// <summary>
   /// <para>(0018,9250)  Arterial Spin Labeling Contrast</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ArterialSpinLabelingContrast: number = 1610320;
   /// <summary>
   /// <para>(0018,9251)  MR Arterial Spin Labeling Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MrArterialSpinLabelingSequence: number = 1610321;
   /// <summary>
   /// <para>(0018,9252)  ASL Technique Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static AslTechniqueDescription: number = 1610322;
   /// <summary>
   /// <para>(0018,9253)  ASL Slab Number</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static AslSlabNumber: number = 1610323;
   /// <summary>
   /// <para>(0018,9254)  ASL Slab Thickness</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static AslSlabThickness: number = 1610324;
   /// <summary>
   /// <para>(0018,9255)  ASL Slab Orientation</para>
   /// <para> VR: FD VM:3</para>
   /// </summary>
   public static AslSlabOrientation: number = 1610325;
   /// <summary>
   /// <para>(0018,9256)  ASL Mid Slab Position</para>
   /// <para> VR: FD VM:3</para>
   /// </summary>
   public static AslMidSlabPosition: number = 1610326;
   /// <summary>
   /// <para>(0018,9257)  ASL Context</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AslContext: number = 1610327;
   /// <summary>
   /// <para>(0018,9258) ASL Pulse Train Duration</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static AslPulseTrainDuration: number = 1610328;
   /// <summary>
   /// <para>(0018,9259)  ASL Crusher Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AslCrusherFlag: number = 1610329;
   /// <summary>
   /// <para>(0018,925A) ASL Crusher Flow</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static AslCrusherFlow: number = 1610330;
   /// <summary>
   /// <para>(0018,925B) ASL Crusher Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static AslCrusherDescription: number = 1610331;
   /// <summary>
   /// <para>(0018,925C)  ASL Bolus Cut-off Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AslBolusCutOffFlag: number = 1610332;
   /// <summary>
   /// <para>(0018,925D) ASL Bolus Cut-off Timing Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AslBolusCutOffTimingSequence: number = 1610333;
   /// <summary>
   /// <para>(0018,925E) ASL Bolus Cut-off Technique</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static AslBolusCutOffTechnique: number = 1610334;
   /// <summary>
   /// <para>(0018,925F) ASL Bolus Cut-off Delay Time</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static AslBolusCutOffDelayTime: number = 1610335;
   /// <summary>
   /// <para>(0018,9260) ASL Slab Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AslSlabSequence: number = 1610336;
   /// <summary>
   /// <para>(0018,9295) Chemical Shift Minimum Integration Limit in ppm</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static ChemicalShiftMinimumIntegrationLimitInPpm: number = 1610389;
   /// <summary>
   /// <para>(0018,9296) Chemical Shift Maximum Integration Limit in ppm</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static ChemicalShiftMaximumIntegrationLimitInPpm: number = 1610390;
   /// <summary>
   /// <para>(0018,9301) CT Acquisition Type Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static CtAcquisitionTypeSequence: number = 1610497;
   /// <summary>
   /// <para>(0018,9302) Acquisition Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AcquisitionType: number = 1610498;
   /// <summary>
   /// <para>(0018,9303) Tube Angle</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static TubeAngle: number = 1610499;
   /// <summary>
   /// <para>(0018,9304) CT Acquisition Details Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static CtAcquisitionDetailsSequence: number = 1610500;
   /// <summary>
   /// <para>(0018,9305) Revolution Time</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static RevolutionTime: number = 1610501;
   /// <summary>
   /// <para>(0018,9306) Single Collimation Width</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static SingleCollimationWidth: number = 1610502;
   /// <summary>
   /// <para>(0018,9307) Total Collimation Width</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static TotalCollimationWidth: number = 1610503;
   /// <summary>
   /// <para>(0018,9308) CT Table Dynamics Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static CtTableDynamicsSequence: number = 1610504;
   /// <summary>
   /// <para>(0018,9309) Table Speed</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static TableSpeed: number = 1610505;
   /// <summary>
   /// <para>(0018,9310) Table Feed per Rotation</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static TableFeedPerRotation: number = 1610512;
   /// <summary>
   /// <para>(0018,9311) Spiral Pitch Factor</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static SpiralPitchFactor: number = 1610513;
   /// <summary>
   /// <para>(0018,9312) CT Geometry Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static CtGeometrySequence: number = 1610514;
   /// <summary>
   /// <para>(0018,9313) Data Collection Center (Patient)</para>
   /// <para> VR: FD VM:3</para>
   /// </summary>
   public static DataCollectionCenterPatient: number = 1610515;
   /// <summary>
   /// <para>(0018,9314) CT Reconstruction Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static CtReconstructionSequence: number = 1610516;
   /// <summary>
   /// <para>(0018,9315) Reconstruction Algorithm</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ReconstructionAlgorithm: number = 1610517;
   /// <summary>
   /// <para>(0018,9316) Convolution Kernel Group</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ConvolutionKernelGroup: number = 1610518;
   /// <summary>
   /// <para>(0018,9317) Reconstruction Field of View</para>
   /// <para> VR: FD VM:2</para>
   /// </summary>
   public static ReconstructionFieldOfView: number = 1610519;
   /// <summary>
   /// <para>(0018,9318) Reconstruction Target Center (Patient)</para>
   /// <para> VR: FD VM:3</para>
   /// </summary>
   public static ReconstructionTargetCenterPatient: number = 1610520;
   /// <summary>
   /// <para>(0018,9319) Reconstruction Angle</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static ReconstructionAngle: number = 1610521;
   /// <summary>
   /// <para>(0018,9320) Image Filter</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static ImageFilter: number = 1610528;
   /// <summary>
   /// <para>(0018,9321) CT Exposure Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static CtExposureSequence: number = 1610529;
   /// <summary>
   /// <para>(0018,9322) Reconstruction Pixel Spacing </para>
   /// <para> VR: FD VM:2</para>
   /// </summary>
   public static ReconstructionPixelSpacing: number = 1610530;
   /// <summary>
   /// <para>(0018,9323) Exposure Modulation Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ExposureModulationType: number = 1610531;
   /// <summary>
   /// <para>(0018,9324) Estimated Dose Saving</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static EstimatedDoseSaving: number = 1610532;
   /// <summary>
   /// <para>(0018,9325) CT X-Ray Details Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static CtXRayDetailsSequence: number = 1610533;
   /// <summary>
   /// <para>(0018,9326) CT Position Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static CtPositionSequence: number = 1610534;
   /// <summary>
   /// <para>(0018,9327) Table Position</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static TablePosition: number = 1610535;
   /// <summary>
   /// <para>(0018,9328) Exposure Time in ms</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static ExposureTimeInMs: number = 1610536;
   /// <summary>
   /// <para>(0018,9329) CT Image Frame Type Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static CtImageFrameTypeSequence: number = 1610537;
   /// <summary>
   /// <para>(0018,9330) X-Ray Tube Current in mA</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static XRayTubeCurrentInMa: number = 1610544;
   /// <summary>
   /// <para>(0018,9332) Exposure in mAs</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static ExposureInMas: number = 1610546;
   /// <summary>
   /// <para>(0018,9333) Constant Volume Flag </para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ConstantVolumeFlag: number = 1610547;
   /// <summary>
   /// <para>(0018,9334) Fluoroscopy Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FluoroscopyFlag: number = 1610548;
   /// <summary>
   /// <para>(0018,9335) Distance Source to Data Collection Center</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static DistanceSourceToDataCollectionCenter: number = 1610549;
   /// <summary>
   /// <para>(0018,9337) Contrast/Bolus Agent Number</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ContrastBolusAgentNumber: number = 1610551;
   /// <summary>
   /// <para>(0018,9338) Contrast/Bolus Ingredient Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ContrastBolusIngredientCodeSequence: number = 1610552;
   /// <summary>
   /// <para>(0018,9340) Contrast Administration Profile Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ContrastAdministrationProfileSequence: number = 1610560;
   /// <summary>
   /// <para>(0018,9341) Contrast/Bolus Usage Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ContrastBolusUsageSequence: number = 1610561;
   /// <summary>
   /// <para>(0018,9342) Contrast/Bolus Agent Administered</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ContrastBolusAgentAdministered: number = 1610562;
   /// <summary>
   /// <para>(0018,9343) Contrast/Bolus Agent Detected</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ContrastBolusAgentDetected: number = 1610563;
   /// <summary>
   /// <para>(0018,9344) Contrast/Bolus Agent Phase</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ContrastBolusAgentPhase: number = 1610564;
   /// <summary>
   /// <para>(0018,9345) CTDIvol</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static Ctdivol: number = 1610565;
   /// <summary>
   /// <para>(0018,9346) CTDI Phantom Type Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static CtdiPhantomTypeCodeSequence: number = 1610566;
   /// <summary>
   /// <para>(0018,9351) Calcium Scoring Mass Factor Patient</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static CalciumScoringMassFactorPatient: number = 1610577;
   /// <summary>
   /// <para>(0018,9352) Calcium Scoring Mass Factor Device</para>
   /// <para> VR: FL VM:3</para>
   /// </summary>
   public static CalciumScoringMassFactorDevice: number = 1610578;
   /// <summary>
   /// <para>(0018,9353) Energy Weighting Factor</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static EnergyWeightingFactor: number = 1610579;
   /// <summary>
   /// <para>(0018,9360) CT Additional X-Ray Source Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static CtAdditionalXRaySourceSequence: number = 1610592;
   /// <summary>
   /// <para>(0018,9401) Projection Pixel Calibration Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ProjectionPixelCalibrationSequence: number = 1610753;
   /// <summary>
   /// <para>(0018,9402) Distance Source to Isocenter</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static DistanceSourceToIsocenter: number = 1610754;
   /// <summary>
   /// <para>(0018,9403) Distance Object to Table Top</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static DistanceObjectToTableTop: number = 1610755;
   /// <summary>
   /// <para>(0018,9404) Object Pixel Spacing in Center of Beam</para>
   /// <para> VR: FL VM:2</para>
   /// </summary>
   public static ObjectPixelSpacingInCenterOfBeam: number = 1610756;
   /// <summary>
   /// <para>(0018,9405) Positioner Position Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PositionerPositionSequence: number = 1610757;
   /// <summary>
   /// <para>(0018,9406) Table Position Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static TablePositionSequence: number = 1610758;
   /// <summary>
   /// <para>(0018,9407) Collimator Shape Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static CollimatorShapeSequence: number = 1610759;
   /// <summary>
   /// <para>(0018,9410) Planes in Acquisition</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PlanesInAcquisition: number = 1610768;
   /// <summary>
   /// <para>(0018,9412) XA/XRF Frame Characteristics Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static XaXrfFrameCharacteristicsSequence: number = 1610770;
   /// <summary>
   /// <para>(0018,9417) Frame Acquisition Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FrameAcquisitionSequence: number = 1610775;
   /// <summary>
   /// <para>(0018,9420) X-Ray Receptor Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static XRayReceptorType: number = 1610784;
   /// <summary>
   /// <para>(0018,9423) Acquisition Protocol Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static AcquisitionProtocolName: number = 1610787;
   /// <summary>
   /// <para>(0018,9424) Acquisition Protocol Description</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static AcquisitionProtocolDescription: number = 1610788;
   /// <summary>
   /// <para>(0018,9425) Contrast/Bolus Ingredient Opaque</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ContrastBolusIngredientOpaque: number = 1610789;
   /// <summary>
   /// <para>(0018,9426) Distance Receptor Plane to Detector Housing</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static DistanceReceptorPlaneToDetectorHousing: number = 1610790;
   /// <summary>
   /// <para>(0018,9427) Intensifier Active Shape</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static IntensifierActiveShape: number = 1610791;
   /// <summary>
   /// <para>(0018,9428) Intensifier Active Dimension(s)</para>
   /// <para> VR: FL VM:1-2</para>
   /// </summary>
   public static IntensifierActiveDimensions: number = 1610792;
   /// <summary>
   /// <para>(0018,9429) Physical Detector Size</para>
   /// <para> VR: FL VM:2</para>
   /// </summary>
   public static PhysicalDetectorSize: number = 1610793;
   /// <summary>
   /// <para>(0018,9430) Position of Isocenter Projection</para>
   /// <para> VR: FL VM:2</para>
   /// </summary>
   public static PositionOfIsocenterProjection: number = 1610800;
   /// <summary>
   /// <para>(0018,9432) Field of View Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FieldOfViewSequence: number = 1610802;
   /// <summary>
   /// <para>(0018,9433) Field of View Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static FieldOfViewDescription: number = 1610803;
   /// <summary>
   /// <para>(0018,9434) Exposure Control Sensing Regions Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ExposureControlSensingRegionsSequence: number = 1610804;
   /// <summary>
   /// <para>(0018,9435) Exposure Control Sensing Region Shape</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ExposureControlSensingRegionShape: number = 1610805;
   /// <summary>
   /// <para>(0018,9436) Exposure Control Sensing Region Left Vertical Edge</para>
   /// <para> VR: SS VM:1</para>
   /// </summary>
   public static ExposureControlSensingRegionLeftVerticalEdge: number = 1610806;
   /// <summary>
   /// <para>(0018,9437) Exposure Control Sensing Region Right Vertical Edge</para>
   /// <para> VR: SS VM:1</para>
   /// </summary>
   public static ExposureControlSensingRegionRightVerticalEdge: number = 1610807;
   /// <summary>
   /// <para>(0018,9438) Exposure Control Sensing Region Upper Horizontal Edge</para>
   /// <para> VR: SS VM:1</para>
   /// </summary>
   public static ExposureControlSensingRegionUpperHorizontalEdge: number = 1610808;
   /// <summary>
   /// <para>(0018,9439) Exposure Control Sensing Region Lower Horizontal Edge</para>
   /// <para> VR: SS VM:1</para>
   /// </summary>
   public static ExposureControlSensingRegionLowerHorizontalEdge: number = 1610809;
   /// <summary>
   /// <para>(0018,9440) Center of Circular Exposure Control Sensing Region</para>
   /// <para> VR: SS VM:2</para>
   /// </summary>
   public static CenterOfCircularExposureControlSensingRegion: number = 1610816;
   /// <summary>
   /// <para>(0018,9441) Radius of Circular Exposure Control Sensing Region</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static RadiusOfCircularExposureControlSensingRegion: number = 1610817;
   /// <summary>
   /// <para>(0018,9442) Vertices of the Polygonal Exposure Control Sensing Region</para>
   /// <para> VR: SS VM:2-n</para>
   /// </summary>
   public static VerticesOfThePolygonalExposureControlSensingRegion: number = 1610818;
   /// <summary>
   /// <para>(0018,9447) Column Angulation (Patient)</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static ColumnAngulationPatient: number = 1610823;
   /// <summary>
   /// <para>(0018,9449) Beam Angle</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static BeamAngle: number = 1610825;
   /// <summary>
   /// <para>(0018,9451) Frame Detector Parameters Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FrameDetectorParametersSequence: number = 1610833;
   /// <summary>
   /// <para>(0018,9452) Calculated Anatomy Thickness</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static CalculatedAnatomyThickness: number = 1610834;
   /// <summary>
   /// <para>(0018,9455) Calibration Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static CalibrationSequence: number = 1610837;
   /// <summary>
   /// <para>(0018,9456) Object Thickness Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ObjectThicknessSequence: number = 1610838;
   /// <summary>
   /// <para>(0018,9457) Plane Identification</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PlaneIdentification: number = 1610839;
   /// <summary>
   /// <para>(0018,9461) Field of View Dimension(s) in Float</para>
   /// <para> VR: FL VM:1-2</para>
   /// </summary>
   public static FieldOfViewDimensionsInFloat: number = 1610849;
   /// <summary>
   /// <para>(0018,9462) Isocenter Reference System Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IsocenterReferenceSystemSequence: number = 1610850;
   /// <summary>
   /// <para>(0018,9463) Positioner Isocenter Primary Angle</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static PositionerIsocenterPrimaryAngle: number = 1610851;
   /// <summary>
   /// <para>(0018,9464) Positioner Isocenter Secondary Angle</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static PositionerIsocenterSecondaryAngle: number = 1610852;
   /// <summary>
   /// <para>(0018,9465) Positioner Isocenter Detector Rotation Angle</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static PositionerIsocenterDetectorRotationAngle: number = 1610853;
   /// <summary>
   /// <para>(0018,9466) Table X Position to Isocenter</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static TableXPositionToIsocenter: number = 1610854;
   /// <summary>
   /// <para>(0018,9467) Table Y Position to Isocenter</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static TableYPositionToIsocenter: number = 1610855;
   /// <summary>
   /// <para>(0018,9468) Table Z Position to Isocenter</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static TableZPositionToIsocenter: number = 1610856;
   /// <summary>
   /// <para>(0018,9469) Table Horizontal Rotation Angle</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static TableHorizontalRotationAngle: number = 1610857;
   /// <summary>
   /// <para>(0018,9470) Table Head Tilt Angle</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static TableHeadTiltAngle: number = 1610864;
   /// <summary>
   /// <para>(0018,9471) Table Cradle Tilt Angle</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static TableCradleTiltAngle: number = 1610865;
   /// <summary>
   /// <para>(0018,9472) Frame Display Shutter Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FrameDisplayShutterSequence: number = 1610866;
   /// <summary>
   /// <para>(0018,9473) Acquired Image Area Dose Product</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static AcquiredImageAreaDoseProduct: number = 1610867;
   /// <summary>
   /// <para>(0018,9474) C-arm Positioner Tabletop Relationship</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CArmPositionerTabletopRelationship: number = 1610868;
   /// <summary>
   /// <para>(0018,9476) X-Ray Geometry Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static XRayGeometrySequence: number = 1610870;
   /// <summary>
   /// <para>(0018,9477) Irradiation Event Identification Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IrradiationEventIdentificationSequence: number = 1610871;
   /// <summary>
   /// <para>(0018,9504) X-Ray 3D Frame Type Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static XRay3dFrameTypeSequence: number = 1611012;
   /// <summary>
   /// <para>(0018,9506) Contributing Sources Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ContributingSourcesSequence: number = 1611014;
   /// <summary>
   /// <para>(0018,9507) X-Ray 3D Acquisition Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static XRay3dAcquisitionSequence: number = 1611015;
   /// <summary>
   /// <para>(0018,9508) Primary Positioner Scan Arc</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static PrimaryPositionerScanArc: number = 1611016;
   /// <summary>
   /// <para>(0018,9509) Secondary Positioner Scan Arc</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static SecondaryPositionerScanArc: number = 1611017;
   /// <summary>
   /// <para>(0018,9510) Primary Positioner Scan Start Angle</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static PrimaryPositionerScanStartAngle: number = 1611024;
   /// <summary>
   /// <para>(0018,9511) Secondary Positioner Scan Start Angle</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static SecondaryPositionerScanStartAngle: number = 1611025;
   /// <summary>
   /// <para>(0018,9514) Primary Positioner Increment</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static PrimaryPositionerIncrement: number = 1611028;
   /// <summary>
   /// <para>(0018,9515) Secondary Positioner Increment</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static SecondaryPositionerIncrement: number = 1611029;
   /// <summary>
   /// <para>(0018,9516) Start Acquisition DateTime</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static StartAcquisitionDatetime: number = 1611030;
   /// <summary>
   /// <para>(0018,9517) End Acquisition DateTime</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static EndAcquisitionDatetime: number = 1611031;
   /// <summary>
   /// <para>(0018,9524) Application Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ApplicationName: number = 1611044;
   /// <summary>
   /// <para>(0018,9525) Application Version</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ApplicationVersion: number = 1611045;
   /// <summary>
   /// <para>(0018,9526) Application Manufacturer</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ApplicationManufacturer: number = 1611046;
   /// <summary>
   /// <para>(0018,9527) Algorithm Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AlgorithmType: number = 1611047;
   /// <summary>
   /// <para>(0018,9528) Algorithm Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static AlgorithmDescription: number = 1611048;
   /// <summary>
   /// <para>(0018,9530) X-Ray 3D Reconstruction Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static XRay3dReconstructionSequence: number = 1611056;
   /// <summary>
   /// <para>(0018,9531) Reconstruction Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ReconstructionDescription: number = 1611057;
   /// <summary>
   /// <para>(0018,9538) Per Projection Acquisition Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PerProjectionAcquisitionSequence: number = 1611064;
   /// <summary>
   /// <para>(0018,9601) Diffusion b-matrix Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DiffusionBMatrixSequence: number = 1611265;
   /// <summary>
   /// <para>(0018,9602) Diffusion b-value XX</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static DiffusionBValueXx: number = 1611266;
   /// <summary>
   /// <para>(0018,9603) Diffusion b-value XY</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static DiffusionBValueXy: number = 1611267;
   /// <summary>
   /// <para>(0018,9604) Diffusion b-value XZ</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static DiffusionBValueXz: number = 1611268;
   /// <summary>
   /// <para>(0018,9605) Diffusion b-value YY</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static DiffusionBValueYy: number = 1611269;
   /// <summary>
   /// <para>(0018,9606) Diffusion b-value YZ</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static DiffusionBValueYz: number = 1611270;
   /// <summary>
   /// <para>(0018,9607) Diffusion b-value ZZ</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static DiffusionBValueZz: number = 1611271;
   /// <summary>
   /// <para>(0018,9701) Decay Correction DateTime</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static DecayCorrectionDatetime: number = 1611521;
   /// <summary>
   /// <para>(0018,9715) Start Density Threshold</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static StartDensityThreshold: number = 1611541;
   /// <summary>
   /// <para>(0018,9716) Start Relative Density Difference Threshold</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static StartRelativeDensityDifferenceThreshold: number = 1611542;
   /// <summary>
   /// <para>(0018,9717) Start Cardiac Trigger Count Threshold</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static StartCardiacTriggerCountThreshold: number = 1611543;
   /// <summary>
   /// <para>(0018,9718) Start Respiratory Trigger Count Threshold</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static StartRespiratoryTriggerCountThreshold: number = 1611544;
   /// <summary>
   /// <para>(0018,9719) Termination Counts Threshold</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static TerminationCountsThreshold: number = 1611545;
   /// <summary>
   /// <para>(0018,9720) Termination Density Threshold</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static TerminationDensityThreshold: number = 1611552;
   /// <summary>
   /// <para>(0018,9721) Termination Relative Density Threshold</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static TerminationRelativeDensityThreshold: number = 1611553;
   /// <summary>
   /// <para>(0018,9722) Termination Time Threshold</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static TerminationTimeThreshold: number = 1611554;
   /// <summary>
   /// <para>(0018,9723) Termination Cardiac Trigger Count Threshold</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static TerminationCardiacTriggerCountThreshold: number = 1611555;
   /// <summary>
   /// <para>(0018,9724) Termination Respiratory Trigger Count Threshold</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static TerminationRespiratoryTriggerCountThreshold: number = 1611556;
   /// <summary>
   /// <para>(0018,9725) Detector Geometry</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DetectorGeometry: number = 1611557;
   /// <summary>
   /// <para>(0018,9726) Transverse Detector Separation</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static TransverseDetectorSeparation: number = 1611558;
   /// <summary>
   /// <para>(0018,9727) Axial Detector Dimension</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static AxialDetectorDimension: number = 1611559;
   /// <summary>
   /// <para>(0018,9729) Radiopharmaceutical Agent Number</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static RadiopharmaceuticalAgentNumber: number = 1611561;
   /// <summary>
   /// <para>(0018,9732) PET Frame Acquisition Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PetFrameAcquisitionSequence: number = 1611570;
   /// <summary>
   /// <para>(0018,9733) PET Detector Motion Details Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PetDetectorMotionDetailsSequence: number = 1611571;
   /// <summary>
   /// <para>(0018,9734) PET Table Dynamics Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PetTableDynamicsSequence: number = 1611572;
   /// <summary>
   /// <para>(0018,9735) PET Position Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PetPositionSequence: number = 1611573;
   /// <summary>
   /// <para>(0018,9736) PET Frame Correction Factors Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PetFrameCorrectionFactorsSequence: number = 1611574;
   /// <summary>
   /// <para>(0018,9737) Radiopharmaceutical Usage Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RadiopharmaceuticalUsageSequence: number = 1611575;
   /// <summary>
   /// <para>(0018,9738) Attenuation Correction Source</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AttenuationCorrectionSource: number = 1611576;
   /// <summary>
   /// <para>(0018,9739) Number of Iterations</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfIterations: number = 1611577;
   /// <summary>
   /// <para>(0018,9740) Number of Subsets</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfSubsets: number = 1611584;
   /// <summary>
   /// <para>(0018,9749) PET Reconstruction Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PetReconstructionSequence: number = 1611593;
   /// <summary>
   /// <para>(0018,9751) PET Frame Type Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PetFrameTypeSequence: number = 1611601;
   /// <summary>
   /// <para>(0018,9755) Time of Flight Information Used</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TimeOfFlightInformationUsed: number = 1611605;
   /// <summary>
   /// <para>(0018,9756) Reconstruction Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ReconstructionType: number = 1611606;
   /// <summary>
   /// <para>(0018,9758) Decay Corrected </para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DecayCorrected: number = 1611608;
   /// <summary>
   /// <para>(0018,9759) Attenuation Corrected </para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AttenuationCorrected: number = 1611609;
   /// <summary>
   /// <para>(0018,9760) Scatter Corrected </para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ScatterCorrected: number = 1611616;
   /// <summary>
   /// <para>(0018,9761) Dead Time Corrected </para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DeadTimeCorrected: number = 1611617;
   /// <summary>
   /// <para>(0018,9762) Gantry Motion Corrected </para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static GantryMotionCorrected: number = 1611618;
   /// <summary>
   /// <para>(0018,9763) Patient Motion Corrected </para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PatientMotionCorrected: number = 1611619;
   /// <summary>
   /// <para>(0018,9764) Count Loss Normalization Corrected</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CountLossNormalizationCorrected: number = 1611620;
   /// <summary>
   /// <para>(0018,9765) Randoms Corrected</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RandomsCorrected: number = 1611621;
   /// <summary>
   /// <para>(0018,9766) Non-uniform Radial Sampling Corrected</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static NonUniformRadialSamplingCorrected: number = 1611622;
   /// <summary>
   /// <para>(0018,9767) Sensitivity Calibrated</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SensitivityCalibrated: number = 1611623;
   /// <summary>
   /// <para>(0018,9768) Detector Normalization Correction</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DetectorNormalizationCorrection: number = 1611624;
   /// <summary>
   /// <para>(0018,9769) Iterative Reconstruction Method </para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static IterativeReconstructionMethod: number = 1611625;
   /// <summary>
   /// <para>(0018,9770) Attenuation Correction Temporal Relationship</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AttenuationCorrectionTemporalRelationship: number = 1611632;
   /// <summary>
   /// <para>(0018,9771) Patient Physiological State Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PatientPhysiologicalStateSequence: number = 1611633;
   /// <summary>
   /// <para>(0018,9772) Patient Physiological State Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PatientPhysiologicalStateCodeSequence: number = 1611634;
   /// <summary>
   /// <para>(0018,9801) Depth(s) of Focus</para>
   /// <para> VR: FD VM:1-n</para>
   /// </summary>
   public static DepthsOfFocus: number = 1611777;
   /// <summary>
   /// <para>(0018,9803) Excluded Intervals Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ExcludedIntervalsSequence: number = 1611779;
   /// <summary>
   /// <para>(0018,9804) Exclusion Start Datetime</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static ExclusionStartDatetime: number = 1611780;
   /// <summary>
   /// <para>(0018,9805) Exclusion Duration</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static ExclusionDuration: number = 1611781;
   /// <summary>
   /// <para>(0018,9806) US Image Description Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static UsImageDescriptionSequence: number = 1611782;
   /// <summary>
   /// <para>(0018,9807) Image Data Type Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ImageDataTypeSequence: number = 1611783;
   /// <summary>
   /// <para>(0018,9808) Data Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DataType: number = 1611784;
   /// <summary>
   /// <para>(0018,9809) Transducer Scan Pattern Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static TransducerScanPatternCodeSequence: number = 1611785;
   /// <summary>
   /// <para>(0018,980B) Aliased Data Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AliasedDataType: number = 1611787;
   /// <summary>
   /// <para>(0018,980C) Position Measuring Device Used</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PositionMeasuringDeviceUsed: number = 1611788;
   /// <summary>
   /// <para>(0018,980D) Transducer Geometry Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static TransducerGeometryCodeSequence: number = 1611789;
   /// <summary>
   /// <para>(0018,980E) Transducer Beam Steering Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static TransducerBeamSteeringCodeSequence: number = 1611790;
   /// <summary>
   /// <para>(0018,980F) Transducer Application Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static TransducerApplicationCodeSequence: number = 1611791;
   /// <summary>
   /// <para>(0018,A001) Contributing Equipment Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ContributingEquipmentSequence: number = 1613825;
   /// <summary>
   /// <para>(0018,A002) Contribution Date Time</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static ContributionDateTime: number = 1613826;
   /// <summary>
   /// <para>(0018,A003) Contribution Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static ContributionDescription: number = 1613827;
   /// <summary>
   /// <para>(0020,000D) Study Instance UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static StudyInstanceUid: number = 2097165;
   /// <summary>
   /// <para>(0020,000E) Series Instance UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static SeriesInstanceUid: number = 2097166;
   /// <summary>
   /// <para>(0020,0010) Study ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static StudyId: number = 2097168;
   /// <summary>
   /// <para>(0020,0011) Series Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static SeriesNumber: number = 2097169;
   /// <summary>
   /// <para>(0020,0012) Acquisition Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static AcquisitionNumber: number = 2097170;
   /// <summary>
   /// <para>(0020,0013) Instance Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static InstanceNumber: number = 2097171;
   /// <summary>
   /// <para>(0020,0014) Isotope Number</para>
   /// <para> VR: IS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static IsotopeNumberRetired: number = 2097172;
   /// <summary>
   /// <para>(0020,0015) Phase Number</para>
   /// <para> VR: IS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static PhaseNumberRetired: number = 2097173;
   /// <summary>
   /// <para>(0020,0016) Interval Number</para>
   /// <para> VR: IS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static IntervalNumberRetired: number = 2097174;
   /// <summary>
   /// <para>(0020,0017) Time Slot Number</para>
   /// <para> VR: IS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TimeSlotNumberRetired: number = 2097175;
   /// <summary>
   /// <para>(0020,0018) Angle Number</para>
   /// <para> VR: IS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static AngleNumberRetired: number = 2097176;
   /// <summary>
   /// <para>(0020,0019) Item Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ItemNumber: number = 2097177;
   /// <summary>
   /// <para>(0020,0020) Patient Orientation</para>
   /// <para> VR: CS VM:2</para>
   /// </summary>
   public static PatientOrientation: number = 2097184;
   /// <summary>
   /// <para>(0020,0022) Overlay Number</para>
   /// <para> VR: IS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayNumberRetired: number = 2097186;
   /// <summary>
   /// <para>(0020,0024) Curve Number</para>
   /// <para> VR: IS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CurveNumberRetired: number = 2097188;
   /// <summary>
   /// <para>(0020,0026) LUT Number</para>
   /// <para> VR: IS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static LutNumberRetired: number = 2097190;
   /// <summary>
   /// <para>(0020,0030) Image Position</para>
   /// <para> VR: DS VM:3</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ImagePositionRetired: number = 2097200;
   /// <summary>
   /// <para>(0020,0032) Image Position (Patient)</para>
   /// <para> VR: DS VM:3</para>
   /// </summary>
   public static ImagePositionPatient: number = 2097202;
   /// <summary>
   /// <para>(0020,0035) Image Orientation</para>
   /// <para> VR: DS VM:6</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ImageOrientationRetired: number = 2097205;
   /// <summary>
   /// <para>(0020,0037) Image Orientation (Patient)</para>
   /// <para> VR: DS VM:6</para>
   /// </summary>
   public static ImageOrientationPatient: number = 2097207;
   /// <summary>
   /// <para>(0020,0050) Location</para>
   /// <para> VR: DS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static LocationRetired: number = 2097232;
   /// <summary>
   /// <para>(0020,0052) Frame of Reference UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static FrameOfReferenceUid: number = 2097234;
   /// <summary>
   /// <para>(0020,0060) Laterality</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static Laterality: number = 2097248;
   /// <summary>
   /// <para>(0020,0062) Image Laterality</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ImageLaterality: number = 2097250;
   /// <summary>
   /// <para>(0020,0070) Image Geometry Type</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ImageGeometryTypeRetired: number = 2097264;
   /// <summary>
   /// <para>(0020,0080) Masking Image</para>
   /// <para> VR: CS VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static MaskingImageRetired: number = 2097280;
   /// <summary>
   /// <para>(0020,00AA) Report Number</para>
   /// <para> VR: IS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ReportNumberRetired: number = 2097322;
   /// <summary>
   /// <para>(0020,0100) Temporal Position Identifier</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static TemporalPositionIdentifier: number = 2097408;
   /// <summary>
   /// <para>(0020,0105) Number of Temporal Positions</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfTemporalPositions: number = 2097413;
   /// <summary>
   /// <para>(0020,0110) Temporal Resolution</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TemporalResolution: number = 2097424;
   /// <summary>
   /// <para>(0020,0200) Synchronization Frame of Reference UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static SynchronizationFrameOfReferenceUid: number = 2097664;
   /// <summary>
   /// <para>(0020,0242) SOP Instance UID of Concatenation Source</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static SopInstanceUidOfConcatenationSource: number = 2097730;
   /// <summary>
   /// <para>(0020,1000) Series in Study</para>
   /// <para> VR: IS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static SeriesInStudyRetired: number = 2101248;
   /// <summary>
   /// <para>(0020,1001) Acquisitions in Series</para>
   /// <para> VR: IS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static AcquisitionsInSeriesRetired: number = 2101249;
   /// <summary>
   /// <para>(0020,1002) Images in Acquisition</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ImagesInAcquisition: number = 2101250;
   /// <summary>
   /// <para>(0020,1003) Images in Series</para>
   /// <para> VR: IS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ImagesInSeriesRetired: number = 2101251;
   /// <summary>
   /// <para>(0020,1004) Acquisitions in Study</para>
   /// <para> VR: IS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static AcquisitionsInStudyRetired: number = 2101252;
   /// <summary>
   /// <para>(0020,1005) Images in Study</para>
   /// <para> VR: IS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ImagesInStudyRetired: number = 2101253;
   /// <summary>
   /// <para>(0020,1020) Reference</para>
   /// <para> VR: LO VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ReferenceRetired: number = 2101280;
   /// <summary>
   /// <para>(0020,1040) Position Reference Indicator</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static PositionReferenceIndicator: number = 2101312;
   /// <summary>
   /// <para>(0020,1041) Slice Location</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SliceLocation: number = 2101313;
   /// <summary>
   /// <para>(0020,1070) Other Study Numbers</para>
   /// <para> VR: IS VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OtherStudyNumbersRetired: number = 2101360;
   /// <summary>
   /// <para>(0020,1200) Number of Patient Related Studies</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfPatientRelatedStudies: number = 2101760;
   /// <summary>
   /// <para>(0020,1202) Number of Patient Related Series</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfPatientRelatedSeries: number = 2101762;
   /// <summary>
   /// <para>(0020,1204) Number of Patient Related Instances</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfPatientRelatedInstances: number = 2101764;
   /// <summary>
   /// <para>(0020,1206) Number of Study Related Series</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfStudyRelatedSeries: number = 2101766;
   /// <summary>
   /// <para>(0020,1208) Number of Study Related Instances</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfStudyRelatedInstances: number = 2101768;
   /// <summary>
   /// <para>(0020,1209) Number of Series Related Instances</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfSeriesRelatedInstances: number = 2101769;
   /// <summary>
   /// <para>(0020,3100 to 31FF) Source Image IDs</para>
   /// <para> VR: CS VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static SourceImageIdsRetired: number = 2109696;
   /// <summary>
   /// <para>(0020,3401) Modifying Device ID</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ModifyingDeviceIdRetired: number = 2110465;
   /// <summary>
   /// <para>(0020,3402) Modified Image ID</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ModifiedImageIdRetired: number = 2110466;
   /// <summary>
   /// <para>(0020,3403) Modified Image Date</para>
   /// <para> VR: DA VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ModifiedImageDateRetired: number = 2110467;
   /// <summary>
   /// <para>(0020,3404) Modifying Device Manufacturer</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ModifyingDeviceManufacturerRetired: number = 2110468;
   /// <summary>
   /// <para>(0020,3405) Modified Image Time</para>
   /// <para> VR: TM VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ModifiedImageTimeRetired: number = 2110469;
   /// <summary>
   /// <para>(0020,3406) Modified Image Description</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ModifiedImageDescriptionRetired: number = 2110470;
   /// <summary>
   /// <para>(0020,4000) Image Comments</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static ImageComments: number = 2113536;
   /// <summary>
   /// <para>(0020,5000) Original Image Identification</para>
   /// <para> VR: AT VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OriginalImageIdentificationRetired: number = 2117632;
   /// <summary>
   /// <para>(0020,5002) Original Image Identification Nomenclature</para>
   /// <para> VR: LO VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OriginalImageIdentificationNomenclatureRetired: number = 2117634;
   /// <summary>
   /// <para>(0020,9056) Stack ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static StackId: number = 2134102;
   /// <summary>
   /// <para>(0020,9057) In-Stack Position Number</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static InStackPositionNumber: number = 2134103;
   /// <summary>
   /// <para>(0020,9071) Frame Anatomy Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FrameAnatomySequence: number = 2134129;
   /// <summary>
   /// <para>(0020,9072) Frame Laterality</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FrameLaterality: number = 2134130;
   /// <summary>
   /// <para>(0020,9111) Frame Content Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FrameContentSequence: number = 2134289;
   /// <summary>
   /// <para>(0020,9113) Plane Position Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PlanePositionSequence: number = 2134291;
   /// <summary>
   /// <para>(0020,9116) Plane Orientation Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PlaneOrientationSequence: number = 2134294;
   /// <summary>
   /// <para>(0020,9128) Temporal Position Index</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static TemporalPositionIndex: number = 2134312;
   /// <summary>
   /// <para>(0020,9153) Nominal Cardiac Trigger Delay Time</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static NominalCardiacTriggerDelayTime: number = 2134355;
   /// <summary>
   /// <para>(0020,9154) Nominal Cardiac Trigger Time Prior To R-Peak</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static NominalCardiacTriggerTimePriorToRPeak: number = 2134356;
   /// <summary>
   /// <para>(0020,9155) Actual Cardiac Trigger Time Prior To R-Peak</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static ActualCardiacTriggerTimePriorToRPeak: number = 2134357;
   /// <summary>
   /// <para>(0020,9156) Frame Acquisition Number</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static FrameAcquisitionNumber: number = 2134358;
   /// <summary>
   /// <para>(0020,9157) Dimension Index Values</para>
   /// <para> VR: UL VM:1-n</para>
   /// </summary>
   public static DimensionIndexValues: number = 2134359;
   /// <summary>
   /// <para>(0020,9158) Frame Comments</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static FrameComments: number = 2134360;
   /// <summary>
   /// <para>(0020,9161) Concatenation UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static ConcatenationUid: number = 2134369;
   /// <summary>
   /// <para>(0020,9162) In-concatenation Number</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static InConcatenationNumber: number = 2134370;
   /// <summary>
   /// <para>(0020,9163) In-concatenation Total Number</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static InConcatenationTotalNumber: number = 2134371;
   /// <summary>
   /// <para>(0020,9164) Dimension Organization UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static DimensionOrganizationUid: number = 2134372;
   /// <summary>
   /// <para>(0020,9165) Dimension Index Pointer</para>
   /// <para> VR: AT VM:1</para>
   /// </summary>
   public static DimensionIndexPointer: number = 2134373;
   /// <summary>
   /// <para>(0020,9167) Functional Group Pointer</para>
   /// <para> VR: AT VM:1</para>
   /// </summary>
   public static FunctionalGroupPointer: number = 2134375;
   /// <summary>
   /// <para>(0020,9213) Dimension Index Private Creator</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static DimensionIndexPrivateCreator: number = 2134547;
   /// <summary>
   /// <para>(0020,9221) Dimension Organization Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DimensionOrganizationSequence: number = 2134561;
   /// <summary>
   /// <para>(0020,9222) Dimension Index Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DimensionIndexSequence: number = 2134562;
   /// <summary>
   /// <para>(0020,9228) Concatenation Frame Offset Number</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static ConcatenationFrameOffsetNumber: number = 2134568;
   /// <summary>
   /// <para>(0020,9238) Functional Group Private Creator</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static FunctionalGroupPrivateCreator: number = 2134584;
   /// <summary>
   /// <para>(0020,9241) Nominal Percentage of Cardiac Phase</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static NominalPercentageOfCardiacPhase: number = 2134593;
   /// <summary>
   /// <para>(0020,9245) Nominal Percentage of Respiratory Phase</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static NominalPercentageOfRespiratoryPhase: number = 2134597;
   /// <summary>
   /// <para>(0020,9246) Starting Respiratory Amplitude</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static StartingRespiratoryAmplitude: number = 2134598;
   /// <summary>
   /// <para>(0020,9247) Starting Respiratory Phase</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static StartingRespiratoryPhase: number = 2134599;
   /// <summary>
   /// <para>(0020,9248) Ending Respiratory Amplitude</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static EndingRespiratoryAmplitude: number = 2134600;
   /// <summary>
   /// <para>(0020,9249) Ending Respiratory Phase</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static EndingRespiratoryPhase: number = 2134601;
   /// <summary>
   /// <para>(0020,9250) Respiratory Trigger Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RespiratoryTriggerType: number = 2134608;
   /// <summary>
   /// <para>(0020,9251) R-R Interval Time Nominal</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static RRIntervalTimeNominal: number = 2134609;
   /// <summary>
   /// <para>(0020,9252) Actual Cardiac Trigger Delay Time</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static ActualCardiacTriggerDelayTime: number = 2134610;
   /// <summary>
   /// <para>(0020,9253) Respiratory Synchronization Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RespiratorySynchronizationSequence: number = 2134611;
   /// <summary>
   /// <para>(0020,9254) Respiratory Interval Time</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static RespiratoryIntervalTime: number = 2134612;
   /// <summary>
   /// <para>(0020,9255) Nominal Respiratory Trigger Delay Time</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static NominalRespiratoryTriggerDelayTime: number = 2134613;
   /// <summary>
   /// <para>(0020,9256) Respiratory Trigger Delay Threshold</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static RespiratoryTriggerDelayThreshold: number = 2134614;
   /// <summary>
   /// <para>(0020,9257) Actual Respiratory Trigger Delay Time</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static ActualRespiratoryTriggerDelayTime: number = 2134615;
   /// <summary>
   /// <para>(0020,9301) Image Position (Volume)</para>
   /// <para> VR: FD VM:3</para>
   /// </summary>
   public static ImagePositionVolume: number = 2134785;
   /// <summary>
   /// <para>(0020,9302) Image Orientation (Volume)</para>
   /// <para> VR: FD VM:6</para>
   /// </summary>
   public static ImageOrientationVolume: number = 2134786;
   /// <summary>
   /// <para>(0020,9307) Ultrasound Acquisition Geometry</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static UltrasoundAcquisitionGeometry: number = 2134791;
   /// <summary>
   /// <para>(0020,9308) Apex Position</para>
   /// <para> VR: FD VM:3</para>
   /// </summary>
   public static ApexPosition: number = 2134792;
   /// <summary>
   /// <para>(0020,9309) Volume to Transducer Mapping Matrix</para>
   /// <para> VR: FD VM:16</para>
   /// </summary>
   public static VolumeToTransducerMappingMatrix: number = 2134793;
   /// <summary>
   /// <para>(0020,930A) Volume to Table Mapping Matrix</para>
   /// <para> VR: FD VM:16</para>
   /// </summary>
   public static VolumeToTableMappingMatrix: number = 2134794;
   /// <summary>
   /// <para>(0020,930C) Patient Frame of Reference Source</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PatientFrameOfReferenceSource: number = 2134796;
   /// <summary>
   /// <para>(0020,930D) Temporal Position Time Offset</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static TemporalPositionTimeOffset: number = 2134797;
   /// <summary>
   /// <para>(0020,930E) Plane Position (Volume) Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PlanePositionVolumeSequence: number = 2134798;
   /// <summary>
   /// <para>(0020,930F) Plane Orientation (Volume) Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PlaneOrientationVolumeSequence: number = 2134799;
   /// <summary>
   /// <para>(0020,9310) Temporal Position Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static TemporalPositionSequence: number = 2134800;
   /// <summary>
   /// <para>(0020,9311) Dimension Organization Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DimensionOrganizationType: number = 2134801;
   /// <summary>
   /// <para>(0020,9312) Volume Frame of Reference UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static VolumeFrameOfReferenceUid: number = 2134802;
   /// <summary>
   /// <para>(0020,9313) Table Frame of Reference UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static TableFrameOfReferenceUid: number = 2134803;
   /// <summary>
   /// <para>(0020,9421) Dimension Description Label</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static DimensionDescriptionLabel: number = 2135073;
   /// <summary>
   /// <para>(0020,9450) Patient Orientation in Frame Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PatientOrientationInFrameSequence: number = 2135120;
   /// <summary>
   /// <para>(0020,9453) Frame Label</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static FrameLabel: number = 2135123;
   /// <summary>
   /// <para>(0020,9518) Acquisition Index</para>
   /// <para> VR: US VM:1-n</para>
   /// </summary>
   public static AcquisitionIndex: number = 2135320;
   /// <summary>
   /// <para>(0020,9529) Contributing SOP Instances Reference Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ContributingSopInstancesReferenceSequence: number = 2135337;
   /// <summary>
   /// <para>(0020,9536) Reconstruction Index</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ReconstructionIndex: number = 2135350;
   /// <summary>
   /// <para>(0022,0001) Light Path Filter Pass-Through Wavelength</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static LightPathFilterPassThroughWavelength: number = 2228225;
   /// <summary>
   /// <para>(0022,0002) Light Path Filter Pass Band</para>
   /// <para> VR: US VM:2</para>
   /// </summary>
   public static LightPathFilterPassBand: number = 2228226;
   /// <summary>
   /// <para>(0022,0003) Image Path Filter Pass-Through Wavelength</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ImagePathFilterPassThroughWavelength: number = 2228227;
   /// <summary>
   /// <para>(0022,0004) Image Path Filter Pass Band</para>
   /// <para> VR: US VM:2</para>
   /// </summary>
   public static ImagePathFilterPassBand: number = 2228228;
   /// <summary>
   /// <para>(0022,0005) Patient Eye Movement Commanded</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PatientEyeMovementCommanded: number = 2228229;
   /// <summary>
   /// <para>(0022,0006) Patient Eye Movement Command Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PatientEyeMovementCommandCodeSequence: number = 2228230;
   /// <summary>
   /// <para>(0022,0007) Spherical Lens Power</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static SphericalLensPower: number = 2228231;
   /// <summary>
   /// <para>(0022,0008) Cylinder Lens Power</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static CylinderLensPower: number = 2228232;
   /// <summary>
   /// <para>(0022,0009) Cylinder Axis</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static CylinderAxis: number = 2228233;
   /// <summary>
   /// <para>(0022,000A) Emmetropic Magnification</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static EmmetropicMagnification: number = 2228234;
   /// <summary>
   /// <para>(0022,000B) Intra Ocular Pressure</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static IntraOcularPressure: number = 2228235;
   /// <summary>
   /// <para>(0022,000C) Horizontal Field of View</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static HorizontalFieldOfView: number = 2228236;
   /// <summary>
   /// <para>(0022,000D) Pupil Dilated</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PupilDilated: number = 2228237;
   /// <summary>
   /// <para>(0022,000E) Degree of Dilation</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static DegreeOfDilation: number = 2228238;
   /// <summary>
   /// <para>(0022,0010) Stereo Baseline Angle</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static StereoBaselineAngle: number = 2228240;
   /// <summary>
   /// <para>(0022,0011) Stereo Baseline Displacement</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static StereoBaselineDisplacement: number = 2228241;
   /// <summary>
   /// <para>(0022,0012) Stereo Horizontal Pixel Offset</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static StereoHorizontalPixelOffset: number = 2228242;
   /// <summary>
   /// <para>(0022,0013) Stereo Vertical Pixel Offset</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static StereoVerticalPixelOffset: number = 2228243;
   /// <summary>
   /// <para>(0022,0014) Stereo Rotation</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static StereoRotation: number = 2228244;
   /// <summary>
   /// <para>(0022,0015) Acquisition Device Type Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AcquisitionDeviceTypeCodeSequence: number = 2228245;
   /// <summary>
   /// <para>(0022,0016) Illumination Type Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IlluminationTypeCodeSequence: number = 2228246;
   /// <summary>
   /// <para>(0022,0017) Light Path Filter Type Stack Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static LightPathFilterTypeStackCodeSequence: number = 2228247;
   /// <summary>
   /// <para>(0022,0018) Image Path Filter Type Stack Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ImagePathFilterTypeStackCodeSequence: number = 2228248;
   /// <summary>
   /// <para>(0022,0019) Lenses Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static LensesCodeSequence: number = 2228249;
   /// <summary>
   /// <para>(0022,001A) Channel Description Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ChannelDescriptionCodeSequence: number = 2228250;
   /// <summary>
   /// <para>(0022,001B) Refractive State Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RefractiveStateSequence: number = 2228251;
   /// <summary>
   /// <para>(0022,001C) Mydriatic Agent Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MydriaticAgentCodeSequence: number = 2228252;
   /// <summary>
   /// <para>(0022,001D) Relative Image Position Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RelativeImagePositionCodeSequence: number = 2228253;
   /// <summary>
   /// <para>(0022,001E) Camera Angle of View</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static CameraAngleOfView: number = 2228254;
   /// <summary>
   /// <para>(0022,0020) Stereo Pairs Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static StereoPairsSequence: number = 2228256;
   /// <summary>
   /// <para>(0022,0021) Left Image Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static LeftImageSequence: number = 2228257;
   /// <summary>
   /// <para>(0022,0022) Right Image Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RightImageSequence: number = 2228258;
   /// <summary>
   /// <para>(0022,0030) Axial Length of the Eye</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static AxialLengthOfTheEye: number = 2228272;
   /// <summary>
   /// <para>(0022,0031) Ophthalmic Frame Location Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OphthalmicFrameLocationSequence: number = 2228273;
   /// <summary>
   /// <para>(0022,0032) Reference Coordinates</para>
   /// <para> VR: FL VM:2-2n</para>
   /// </summary>
   public static ReferenceCoordinates: number = 2228274;
   /// <summary>
   /// <para>(0022,0035) Depth Spatial Resolution</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static DepthSpatialResolution: number = 2228277;
   /// <summary>
   /// <para>(0022,0036) Maximum Depth Distortion</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static MaximumDepthDistortion: number = 2228278;
   /// <summary>
   /// <para>(0022,0037) Along-scan Spatial Resolution</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static AlongScanSpatialResolution: number = 2228279;
   /// <summary>
   /// <para>(0022,0038) Maximum Along-scan Distortion</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static MaximumAlongScanDistortion: number = 2228280;
   /// <summary>
   /// <para>(0022,0039) Ophthalmic Image Orientation</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static OphthalmicImageOrientation: number = 2228281;
   /// <summary>
   /// <para>(0022,0041) Depth of Transverse Image</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static DepthOfTransverseImage: number = 2228289;
   /// <summary>
   /// <para>(0022,0042) Mydriatic Agent Concentration Units Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MydriaticAgentConcentrationUnitsSequence: number = 2228290;
   /// <summary>
   /// <para>(0022,0048) Across-scan Spatial Resolution</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static AcrossScanSpatialResolution: number = 2228296;
   /// <summary>
   /// <para>(0022,0049) Maximum Across-scan Distortion</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static MaximumAcrossScanDistortion: number = 2228297;
   /// <summary>
   /// <para>(0022,004E) Mydriatic Agent Concentration</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static MydriaticAgentConcentration: number = 2228302;
   /// <summary>
   /// <para>(0022,0055) Illumination Wave Length</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static IlluminationWaveLength: number = 2228309;
   /// <summary>
   /// <para>(0022,0056) Illumination Power</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static IlluminationPower: number = 2228310;
   /// <summary>
   /// <para>(0022,0057) Illumination Bandwidth</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static IlluminationBandwidth: number = 2228311;
   /// <summary>
   /// <para>(0022,0058) Mydriatic Agent Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MydriaticAgentSequence: number = 2228312;
   /// <summary>
   /// <para>(0022,1007) Ophthalmic Axial Measurements Right Eye Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OphthalmicAxialMeasurementsRightEyeSequence: number = 2232327;
   /// <summary>
   /// <para>(0022,1008) Ophthalmic Axial Measurements Left Eye Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OphthalmicAxialMeasurementsLeftEyeSequence: number = 2232328;
   /// <summary>
   /// <para>(0022,1010) Ophthalmic Axial Length Measurements Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static OphthalmicAxialLengthMeasurementsType: number = 2232336;
   /// <summary>
   /// <para>(0022,1019) Ophthalmic Axial Length </para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static OphthalmicAxialLength: number = 2232345;
   /// <summary>
   /// <para>(0022,1024) Lens Status Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static LensStatusCodeSequence: number = 2232356;
   /// <summary>
   /// <para>(0022,1025) Vitreous Status Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static VitreousStatusCodeSequence: number = 2232357;
   /// <summary>
   /// <para>(0022,1028) IOL Formula Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IolFormulaCodeSequence: number = 2232360;
   /// <summary>
   /// <para>(0022,1029) IOL Formula Detail</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static IolFormulaDetail: number = 2232361;
   /// <summary>
   /// <para>(0022,1033) Keratometer Index</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static KeratometerIndex: number = 2232371;
   /// <summary>
   /// <para>(0022,1035) Source of Ophthalmic Axial Length Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SourceOfOphthalmicAxialLengthCodeSequence: number = 2232373;
   /// <summary>
   /// <para>(0022,1037) Target Refraction </para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static TargetRefraction: number = 2232375;
   /// <summary>
   /// <para>(0022,1039) Refractive Procedure Occurred</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RefractiveProcedureOccurred: number = 2232377;
   /// <summary>
   /// <para>(0022,1040) Refractive Surgery Type Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RefractiveSurgeryTypeCodeSequence: number = 2232384;
   /// <summary>
   /// <para>(0022,1044) Ophthalmic Ultrasound Axial Measurements Type Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OphthalmicUltrasoundAxialMeasurementsTypeCodeSequence: number = 2232388;
   /// <summary>
   /// <para>(0022,1050) Ophthalmic Axial Length Measurements Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OphthalmicAxialLengthMeasurementsSequence: number = 2232400;
   /// <summary>
   /// <para>(0022,1053) IOL Power</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static IolPower: number = 2232403;
   /// <summary>
   /// <para>(0022,1054) Predicted Refractive Error</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static PredictedRefractiveError: number = 2232404;
   /// <summary>
   /// <para>(0022,1059) Ophthalmic Axial Length Velocity</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static OphthalmicAxialLengthVelocity: number = 2232409;
   /// <summary>
   /// <para>(0022,1065) Lens Status Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static LensStatusDescription: number = 2232421;
   /// <summary>
   /// <para>(0022,1066) Vitreous Status Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static VitreousStatusDescription: number = 2232422;
   /// <summary>
   /// <para>(0022,1090) IOL Power Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IolPowerSequence: number = 2232464;
   /// <summary>
   /// <para>(0022,1092) Lens Constant Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static LensConstantSequence: number = 2232466;
   /// <summary>
   /// <para>(0022,1093) IOL Manufacturer</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static IolManufacturer: number = 2232467;
   /// <summary>
   /// <para>(0022,1094) Lens Constant Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static LensConstantDescription: number = 2232468;
   /// <summary>
   /// <para>(0022,1096) Keratometry Measurement Type Code Sequence </para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static KeratometryMeasurementTypeCodeSequence: number = 2232470;
   /// <summary>
   /// <para>(0022,1100) Referenced Ophthalmic Axial Measurements Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedOphthalmicAxialMeasurementsSequence: number = 2232576;
   /// <summary>
   /// <para>(0022,1101) Ophthalmic Axial Length Measurements Segment Name Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OphthalmicAxialLengthMeasurementsSegmentNameCodeSequence: number = 2232577;
   /// <summary>
   /// <para>(0022,1103) Refractive Error Before Refractive Surgery Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RefractiveErrorBeforeRefractiveSurgeryCodeSequence: number = 2232579;
   /// <summary>
   /// <para>(0022,1121) IOL Power For Exact Emmetropia</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static IolPowerForExactEmmetropia: number = 2232609;
   /// <summary>
   /// <para>(0022,1122) IOL Power For Exact Target Refraction</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static IolPowerForExactTargetRefraction: number = 2232610;
   /// <summary>
   /// <para>(0022,1125) Anterior Chamber Depth Definition Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AnteriorChamberDepthDefinitionCodeSequence: number = 2232613;
   /// <summary>
   /// <para>(0022,1130) Lens Thickness</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static LensThickness: number = 2232624;
   /// <summary>
   /// <para>(0022,1131) Anterior Chamber Depth</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static AnteriorChamberDepth: number = 2232625;
   /// <summary>
   /// <para>(0022,1132) Source of Lens Thickness Data Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SourceOfLensThicknessDataCodeSequence: number = 2232626;
   /// <summary>
   /// <para>(0022,1133) Source of Anterior Chamber Depth Data Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SourceOfAnteriorChamberDepthDataCodeSequence: number = 2232627;
   /// <summary>
   /// <para>(0022,1135) Source of Refractive Error Data Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SourceOfRefractiveErrorDataCodeSequence: number = 2232629;
   /// <summary>
   /// <para>(0022,1140) Ophthalmic Axial Length Measurement Modified</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static OphthalmicAxialLengthMeasurementModified: number = 2232640;
   /// <summary>
   /// <para>(0022,1150) Ophthalmic Axial Length Data Source Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OphthalmicAxialLengthDataSourceCodeSequence: number = 2232656;
   /// <summary>
   /// <para>(0022,1153) Ophthalmic Axial Length Acquisition Method Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OphthalmicAxialLengthAcquisitionMethodCodeSequence: number = 2232659;
   /// <summary>
   /// <para>(0022,1155) Signal to Noise Ratio</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static SignalToNoiseRatio: number = 2232661;
   /// <summary>
   /// <para>(0022,1159) Ophthalmic Axial Length Data Source Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static OphthalmicAxialLengthDataSourceDescription: number = 2232665;
   /// <summary>
   /// <para>(0022,1210) Ophthalmic Axial Length Measurements Total Length Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OphthalmicAxialLengthMeasurementsTotalLengthSequence: number = 2232848;
   /// <summary>
   /// <para>(0022,1211) Ophthalmic Axial Length Measurements Segmental Length Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OphthalmicAxialLengthMeasurementsSegmentalLengthSequence: number = 2232849;
   /// <summary>
   /// <para>(0022,1212) Ophthalmic Axial Length Measurements Length Summation Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OphthalmicAxialLengthMeasurementsLengthSummationSequence: number = 2232850;
   /// <summary>
   /// <para>(0022,1220) Ultrasound Ophthalmic Axial Length Measurements Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static UltrasoundOphthalmicAxialLengthMeasurementsSequence: number = 2232864;
   /// <summary>
   /// <para>(0022,1225) Optical Ophthalmic Axial Length Measurements Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OpticalOphthalmicAxialLengthMeasurementsSequence: number = 2232869;
   /// <summary>
   /// <para>(0022,1230) Ultrasound Selected Ophthalmic Axial Length Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static UltrasoundSelectedOphthalmicAxialLengthSequence: number = 2232880;
   /// <summary>
   /// <para>(0022,1250) Ophthalmic Axial Length Selection Method Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OphthalmicAxialLengthSelectionMethodCodeSequence: number = 2232912;
   /// <summary>
   /// <para>(0022,1255) Optical Selected Ophthalmic Axial Length Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OpticalSelectedOphthalmicAxialLengthSequence: number = 2232917;
   /// <summary>
   /// <para>(0022,1257) Selected Segmental Ophthalmic Axial Length Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SelectedSegmentalOphthalmicAxialLengthSequence: number = 2232919;
   /// <summary>
   /// <para>(0022,1260) Selected Total Ophthalmic Axial Length Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SelectedTotalOphthalmicAxialLengthSequence: number = 2232928;
   /// <summary>
   /// <para>(0022,1262) Ophthalmic Axial Length Quality Metric Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OphthalmicAxialLengthQualityMetricSequence: number = 2232930;
   /// <summary>
   /// <para>(0022,1273) Ophthalmic Axial  Length Quality Metric Type Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static OphthalmicAxialLengthQualityMetricTypeDescription: number = 2232947;
   /// <summary>
   /// <para>(0022,1300) Intraocular Lens Calculations Right Eye Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IntraocularLensCalculationsRightEyeSequence: number = 2233088;
   /// <summary>
   /// <para>(0022,1310) Intraocular Lens Calculations Left Eye Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IntraocularLensCalculationsLeftEyeSequence: number = 2233104;
   /// <summary>
   /// <para>(0022,1330) Referenced Ophthalmic Axial Length Measurement QC Image Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedOphthalmicAxialLengthMeasurementQcImageSequence: number = 2233136;
   /// <summary>
   /// <para>(0024,0010) Visual Field Horizontal Extent </para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static VisualFieldHorizontalExtent: number = 2359312;
   /// <summary>
   /// <para>(0024,0011) Visual Field Vertical Extent</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static VisualFieldVerticalExtent: number = 2359313;
   /// <summary>
   /// <para>(0024,0012) Visual Field Shape</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static VisualFieldShape: number = 2359314;
   /// <summary>
   /// <para>(0024,0016) Screening Test Mode Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ScreeningTestModeCodeSequence: number = 2359318;
   /// <summary>
   /// <para>(0024,0018) Maximum Stimulus Luminance</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static MaximumStimulusLuminance: number = 2359320;
   /// <summary>
   /// <para>(0024,0020) Background Luminance </para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static BackgroundLuminance: number = 2359328;
   /// <summary>
   /// <para>(0024,0021) Stimulus Color Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static StimulusColorCodeSequence: number = 2359329;
   /// <summary>
   /// <para>(0024,0024) Background Illumination Color Code Sequence </para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static BackgroundIlluminationColorCodeSequence: number = 2359332;
   /// <summary>
   /// <para>(0024,0025) Stimulus Area</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static StimulusArea: number = 2359333;
   /// <summary>
   /// <para>(0024,0028) Stimulus Presentation Time</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static StimulusPresentationTime: number = 2359336;
   /// <summary>
   /// <para>(0024,0032) Fixation Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FixationSequence: number = 2359346;
   /// <summary>
   /// <para>(0024,0033) Fixation Monitoring Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FixationMonitoringCodeSequence: number = 2359347;
   /// <summary>
   /// <para>(0024,0034) Visual Field Catch Trial Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static VisualFieldCatchTrialSequence: number = 2359348;
   /// <summary>
   /// <para>(0024,0035) Fixation Checked Quantity</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static FixationCheckedQuantity: number = 2359349;
   /// <summary>
   /// <para>(0024,0036) Patient Not Properly Fixated Quantity</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static PatientNotProperlyFixatedQuantity: number = 2359350;
   /// <summary>
   /// <para>(0024,0037) Presented Visual Stimuli Data Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PresentedVisualStimuliDataFlag: number = 2359351;
   /// <summary>
   /// <para>(0024,0038) Number of Visual Stimuli</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfVisualStimuli: number = 2359352;
   /// <summary>
   /// <para>(0024,0039) Excessive Fixation Losses Data Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ExcessiveFixationLossesDataFlag: number = 2359353;
   /// <summary>
   /// <para>(0024,0040) Excessive Fixation Losses</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ExcessiveFixationLosses: number = 2359360;
   /// <summary>
   /// <para>(0024,0042) Stimuli Retesting Quantity</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static StimuliRetestingQuantity: number = 2359362;
   /// <summary>
   /// <para>(0024,0044) Comments on Patient's Performance of Visual Field</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static CommentsOnPatientsPerformanceOfVisualField: number = 2359364;
   /// <summary>
   /// <para>(0024,0045) False Negatives Estimate Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FalseNegativesEstimateFlag: number = 2359365;
   /// <summary>
   /// <para>(0024,0046) False Negatives Estimate</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static FalseNegativesEstimate: number = 2359366;
   /// <summary>
   /// <para>(0024,0048) Negative Catch Trials Quantity</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NegativeCatchTrialsQuantity: number = 2359368;
   /// <summary>
   /// <para>(0024,0050) False Negatives Quantity</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static FalseNegativesQuantity: number = 2359376;
   /// <summary>
   /// <para>(0024,0051) Excessive False Negatives Data Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ExcessiveFalseNegativesDataFlag: number = 2359377;
   /// <summary>
   /// <para>(0024,0052) Excessive False Negatives</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ExcessiveFalseNegatives: number = 2359378;
   /// <summary>
   /// <para>(0024,0053) False Positives Estimate Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FalsePositivesEstimateFlag: number = 2359379;
   /// <summary>
   /// <para>(0024,0054) False Positives Estimate</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static FalsePositivesEstimate: number = 2359380;
   /// <summary>
   /// <para>(0024,0055) Catch Trials Data Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CatchTrialsDataFlag: number = 2359381;
   /// <summary>
   /// <para>(0024,0056) Positive Catch Trials Quantity</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static PositiveCatchTrialsQuantity: number = 2359382;
   /// <summary>
   /// <para>(0024,0057) Test Point Normals Data Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TestPointNormalsDataFlag: number = 2359383;
   /// <summary>
   /// <para>(0024,0058) Test Point Normals Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static TestPointNormalsSequence: number = 2359384;
   /// <summary>
   /// <para>(0024,0059) Global Deviation Probability Normals Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static GlobalDeviationProbabilityNormalsFlag: number = 2359385;
   /// <summary>
   /// <para>(0024,0060) False Positives Quantity</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static FalsePositivesQuantity: number = 2359392;
   /// <summary>
   /// <para>(0024,0061) Excessive False Positives Data Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ExcessiveFalsePositivesDataFlag: number = 2359393;
   /// <summary>
   /// <para>(0024,0062) Excessive False Positives</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ExcessiveFalsePositives: number = 2359394;
   /// <summary>
   /// <para>(0024,0063) Visual Field Test Normals Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static VisualFieldTestNormalsFlag: number = 2359395;
   /// <summary>
   /// <para>(0024,0064) Results Normals Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ResultsNormalsSequence: number = 2359396;
   /// <summary>
   /// <para>(0024,0065) Age Corrected Sensitivity Deviation Algorithm Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AgeCorrectedSensitivityDeviationAlgorithmSequence: number = 2359397;
   /// <summary>
   /// <para>(0024,0066) Global Deviation From Normal</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static GlobalDeviationFromNormal: number = 2359398;
   /// <summary>
   /// <para>(0024,0067) Generalized Defect Sensitivity Deviation Algorithm Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static GeneralizedDefectSensitivityDeviationAlgorithmSequence: number = 2359399;
   /// <summary>
   /// <para>(0024,0068) Localized Deviation from Normal</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static LocalizedDeviationFromNormal: number = 2359400;
   /// <summary>
   /// <para>(0024,0069) Patient Reliability Indicator  </para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static PatientReliabilityIndicator: number = 2359401;
   /// <summary>
   /// <para>(0024,0070) Visual Field Mean Sensitivity</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static VisualFieldMeanSensitivity: number = 2359408;
   /// <summary>
   /// <para>(0024,0071) Global Deviation Probability</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static GlobalDeviationProbability: number = 2359409;
   /// <summary>
   /// <para>(0024,0072) Local Deviation Probability Normals Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static LocalDeviationProbabilityNormalsFlag: number = 2359410;
   /// <summary>
   /// <para>(0024,0073) Localized Deviation Probability</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static LocalizedDeviationProbability: number = 2359411;
   /// <summary>
   /// <para>(0024,0074) Short Term Fluctuation Calculated</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ShortTermFluctuationCalculated: number = 2359412;
   /// <summary>
   /// <para>(0024,0075) Short Term Fluctuation</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static ShortTermFluctuation: number = 2359413;
   /// <summary>
   /// <para>(0024,0076) Short Term Fluctuation Probability Calculated</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ShortTermFluctuationProbabilityCalculated: number = 2359414;
   /// <summary>
   /// <para>(0024,0077) Short Term Fluctuation Probability</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static ShortTermFluctuationProbability: number = 2359415;
   /// <summary>
   /// <para>(0024,0078) Corrected Localized Deviation From Normal Calculated</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CorrectedLocalizedDeviationFromNormalCalculated: number = 2359416;
   /// <summary>
   /// <para>(0024,0079) Corrected Localized Deviation From Normal</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static CorrectedLocalizedDeviationFromNormal: number = 2359417;
   /// <summary>
   /// <para>(0024,0080) Corrected Localized Deviation From Normal Probability Calculated</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CorrectedLocalizedDeviationFromNormalProbabilityCalculated: number = 2359424;
   /// <summary>
   /// <para>(0024,0081) Corrected Localized Deviation From Normal Probability</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static CorrectedLocalizedDeviationFromNormalProbability: number = 2359425;
   /// <summary>
   /// <para>(0024,0083) Global Deviation Probability Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static GlobalDeviationProbabilitySequence: number = 2359427;
   /// <summary>
   /// <para>(0024,0085) Localized Deviation Probability Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static LocalizedDeviationProbabilitySequence: number = 2359429;
   /// <summary>
   /// <para>(0024,0086) Foveal Sensitivity Measured</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FovealSensitivityMeasured: number = 2359430;
   /// <summary>
   /// <para>(0024,0087) Foveal Sensitivity</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static FovealSensitivity: number = 2359431;
   /// <summary>
   /// <para>(0024,0088) Visual Field Test Duration</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static VisualFieldTestDuration: number = 2359432;
   /// <summary>
   /// <para>(0024,0089) Visual Field Test Point Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static VisualFieldTestPointSequence: number = 2359433;
   /// <summary>
   /// <para>(0024,0090) Visual Field Test Point X-Coordinate</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static VisualFieldTestPointXCoordinate: number = 2359440;
   /// <summary>
   /// <para>(0024,0091) Visual Field Test Point Y-Coordinate</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static VisualFieldTestPointYCoordinate: number = 2359441;
   /// <summary>
   /// <para>(0024,0092) Age Corrected Sensitivity Deviation Value</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static AgeCorrectedSensitivityDeviationValue: number = 2359442;
   /// <summary>
   /// <para>(0024,0093) Stimulus Results</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static StimulusResults: number = 2359443;
   /// <summary>
   /// <para>(0024,0094) Sensitivity Value</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static SensitivityValue: number = 2359444;
   /// <summary>
   /// <para>(0024,0095) Retest Stimulus Seen</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RetestStimulusSeen: number = 2359445;
   /// <summary>
   /// <para>(0024,0096) Retest Sensitivity Value</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static RetestSensitivityValue: number = 2359446;
   /// <summary>
   /// <para>(0024,0097) Visual Field Test Point Normals Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static VisualFieldTestPointNormalsSequence: number = 2359447;
   /// <summary>
   /// <para>(0024,0098) Quantified Defect</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static QuantifiedDefect: number = 2359448;
   /// <summary>
   /// <para>(0024,0100) Age Corrected Sensitivity Deviation Probability Value</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static AgeCorrectedSensitivityDeviationProbabilityValue: number = 2359552;
   /// <summary>
   /// <para>(0024,0102) Generalized Defect Corrected Sensitivity Deviation Flag </para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static GeneralizedDefectCorrectedSensitivityDeviationFlag: number = 2359554;
   /// <summary>
   /// <para>(0024,0103) Generalized Defect Corrected Sensitivity Deviation Value </para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static GeneralizedDefectCorrectedSensitivityDeviationValue: number = 2359555;
   /// <summary>
   /// <para>(0024,0104) Generalized Defect Corrected Sensitivity Deviation Probability Value </para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static GeneralizedDefectCorrectedSensitivityDeviationProbabilityValue: number = 2359556;
   /// <summary>
   /// <para>(0024,0105) Minimum Sensitivity Value</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static MinimumSensitivityValue: number = 2359557;
   /// <summary>
   /// <para>(0024,0106) Blind Spot Localized</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BlindSpotLocalized: number = 2359558;
   /// <summary>
   /// <para>(0024,0107) Blind Spot X-Coordinate</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static BlindSpotXCoordinate: number = 2359559;
   /// <summary>
   /// <para>(0024,0108) Blind Spot Y-Coordinate </para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static BlindSpotYCoordinate: number = 2359560;
   /// <summary>
   /// <para>(0024,0110) Visual Acuity Measurement Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static VisualAcuityMeasurementSequence: number = 2359568;
   /// <summary>
   /// <para>(0024,0112) Refractive Parameters Used on Patient Sequence </para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RefractiveParametersUsedOnPatientSequence: number = 2359570;
   /// <summary>
   /// <para>(0024,0113) Measurement Laterality</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static MeasurementLaterality: number = 2359571;
   /// <summary>
   /// <para>(0024,0114) Ophthalmic Patient Clinical Information Left Eye Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OphthalmicPatientClinicalInformationLeftEyeSequence: number = 2359572;
   /// <summary>
   /// <para>(0024,0115) Ophthalmic Patient Clinical Information Right Eye Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OphthalmicPatientClinicalInformationRightEyeSequence: number = 2359573;
   /// <summary>
   /// <para>(0024,0117) Foveal Point Normative Data Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FovealPointNormativeDataFlag: number = 2359575;
   /// <summary>
   /// <para>(0024,0118) Foveal Point Probability Value</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static FovealPointProbabilityValue: number = 2359576;
   /// <summary>
   /// <para>(0024,0120) Screening Baseline Measured</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ScreeningBaselineMeasured: number = 2359584;
   /// <summary>
   /// <para>(0024,0122) Screening Baseline Measured Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ScreeningBaselineMeasuredSequence: number = 2359586;
   /// <summary>
   /// <para>(0024,0124) Screening Baseline Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ScreeningBaselineType: number = 2359588;
   /// <summary>
   /// <para>(0024,0126) Screening Baseline Value</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static ScreeningBaselineValue: number = 2359590;
   /// <summary>
   /// <para>(0024,0202) Algorithm Source</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static AlgorithmSource: number = 2359810;
   /// <summary>
   /// <para>(0024,0306) Data Set Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static DataSetName: number = 2360070;
   /// <summary>
   /// <para>(0024,0307) Data Set Version</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static DataSetVersion: number = 2360071;
   /// <summary>
   /// <para>(0024,0308) Data Set Source</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static DataSetSource: number = 2360072;
   /// <summary>
   /// <para>(0024,0309) Data Set Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static DataSetDescription: number = 2360073;
   /// <summary>
   /// <para>(0024,0317) Visual Field Test Reliability Global Index Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static VisualFieldTestReliabilityGlobalIndexSequence: number = 2360087;
   /// <summary>
   /// <para>(0024,0320) Visual Field Global Results Index Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static VisualFieldGlobalResultsIndexSequence: number = 2360096;
   /// <summary>
   /// <para>(0024,0325) Data Observation Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DataObservationSequence: number = 2360101;
   /// <summary>
   /// <para>(0024,0338) Index Normals Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static IndexNormalsFlag: number = 2360120;
   /// <summary>
   /// <para>(0024,0341) Index Probability</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static IndexProbability: number = 2360129;
   /// <summary>
   /// <para>(0024,0344) Index Probability Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IndexProbabilitySequence: number = 2360132;
   /// <summary>
   /// <para>(0028,0002) Samples per Pixel</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static SamplesPerPixel: number = 2621442;
   /// <summary>
   /// <para>(0028,0003) Samples per Pixel Used</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static SamplesPerPixelUsed: number = 2621443;
   /// <summary>
   /// <para>(0028,0004) Photometric Interpretation</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PhotometricInterpretation: number = 2621444;
   /// <summary>
   /// <para>(0028,0005) Image Dimensions</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ImageDimensionsRetired: number = 2621445;
   /// <summary>
   /// <para>(0028,0006) Planar Configuration</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static PlanarConfiguration: number = 2621446;
   /// <summary>
   /// <para>(0028,0008) Number of Frames</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfFrames: number = 2621448;
   /// <summary>
   /// <para>(0028,0009) Frame Increment Pointer</para>
   /// <para> VR: AT VM:1-n</para>
   /// </summary>
   public static FrameIncrementPointer: number = 2621449;
   /// <summary>
   /// <para>(0028,000A) Frame Dimension Pointer</para>
   /// <para> VR: AT VM:1-n</para>
   /// </summary>
   public static FrameDimensionPointer: number = 2621450;
   /// <summary>
   /// <para>(0028,0010) Rows</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static Rows: number = 2621456;
   /// <summary>
   /// <para>(0028,0011) Columns</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static Columns: number = 2621457;
   /// <summary>
   /// <para>(0028,0012) Planes</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static PlanesRetired: number = 2621458;
   /// <summary>
   /// <para>(0028,0014) Ultrasound Color Data Present</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static UltrasoundColorDataPresent: number = 2621460;
   /// <summary>
   /// <para>(0028,0030) Pixel Spacing</para>
   /// <para> VR: DS VM:2</para>
   /// </summary>
   public static PixelSpacing: number = 2621488;
   /// <summary>
   /// <para>(0028,0031) Zoom Factor</para>
   /// <para> VR: DS VM:2</para>
   /// </summary>
   public static ZoomFactor: number = 2621489;
   /// <summary>
   /// <para>(0028,0032) Zoom Center</para>
   /// <para> VR: DS VM:2</para>
   /// </summary>
   public static ZoomCenter: number = 2621490;
   /// <summary>
   /// <para>(0028,0034) Pixel Aspect Ratio</para>
   /// <para> VR: IS VM:2</para>
   /// </summary>
   public static PixelAspectRatio: number = 2621492;
   /// <summary>
   /// <para>(0028,0040) Image Format</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ImageFormatRetired: number = 2621504;
   /// <summary>
   /// <para>(0028,0050) Manipulated Image</para>
   /// <para> VR: LO VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ManipulatedImageRetired: number = 2621520;
   /// <summary>
   /// <para>(0028,0051) Corrected Image</para>
   /// <para> VR: CS VM:1-n</para>
   /// </summary>
   public static CorrectedImage: number = 2621521;
   /// <summary>
   /// <para>(0028,005F) Compression Recognition Code</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CompressionRecognitionCodeRetired: number = 2621535;
   /// <summary>
   /// <para>(0028,0060) Compression Code</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CompressionCodeRetired: number = 2621536;
   /// <summary>
   /// <para>(0028,0061) Compression Originator</para>
   /// <para> VR: SH VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CompressionOriginatorRetired: number = 2621537;
   /// <summary>
   /// <para>(0028,0062) Compression Label</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CompressionLabelRetired: number = 2621538;
   /// <summary>
   /// <para>(0028,0063) Compression Description</para>
   /// <para> VR: SH VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CompressionDescriptionRetired: number = 2621539;
   /// <summary>
   /// <para>(0028,0065) Compression Sequence</para>
   /// <para> VR: CS VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CompressionSequenceRetired: number = 2621541;
   /// <summary>
   /// <para>(0028,0066) Compression Step Pointers</para>
   /// <para> VR: AT VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CompressionStepPointersRetired: number = 2621542;
   /// <summary>
   /// <para>(0028,0068) Repeat Interval</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static RepeatIntervalRetired: number = 2621544;
   /// <summary>
   /// <para>(0028,0069) Bits Grouped</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static BitsGroupedRetired: number = 2621545;
   /// <summary>
   /// <para>(0028,0070) Perimeter Table</para>
   /// <para> VR: US VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static PerimeterTableRetired: number = 2621552;
   /// <summary>
   /// <para>(0028,0071) Perimeter Value</para>
   /// <para> VR: US or SS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static PerimeterValueRetired: number = 2621553;
   /// <summary>
   /// <para>(0028,0080) Predictor Rows</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static PredictorRowsRetired: number = 2621568;
   /// <summary>
   /// <para>(0028,0081) Predictor Columns</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static PredictorColumnsRetired: number = 2621569;
   /// <summary>
   /// <para>(0028,0082) Predictor Constants</para>
   /// <para> VR: US VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static PredictorConstantsRetired: number = 2621570;
   /// <summary>
   /// <para>(0028,0090) Blocked Pixels</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static BlockedPixelsRetired: number = 2621584;
   /// <summary>
   /// <para>(0028,0091) Block Rows</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static BlockRowsRetired: number = 2621585;
   /// <summary>
   /// <para>(0028,0092) Block Columns</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static BlockColumnsRetired: number = 2621586;
   /// <summary>
   /// <para>(0028,0093) Row Overlap</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static RowOverlapRetired: number = 2621587;
   /// <summary>
   /// <para>(0028,0094) Column Overlap</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ColumnOverlapRetired: number = 2621588;
   /// <summary>
   /// <para>(0028,0100) Bits Allocated</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static BitsAllocated: number = 2621696;
   /// <summary>
   /// <para>(0028,0101) Bits Stored</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static BitsStored: number = 2621697;
   /// <summary>
   /// <para>(0028,0102) High Bit</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static HighBit: number = 2621698;
   /// <summary>
   /// <para>(0028,0103) Pixel Representation</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static PixelRepresentation: number = 2621699;
   /// <summary>
   /// <para>(0028,0104) Smallest Valid Pixel Value</para>
   /// <para> VR: US or SS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static SmallestValidPixelValueRetired: number = 2621700;
   /// <summary>
   /// <para>(0028,0105) Largest Valid Pixel Value</para>
   /// <para> VR: US or SS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static LargestValidPixelValueRetired: number = 2621701;
   /// <summary>
   /// <para>(0028,0106) Smallest Image Pixel Value</para>
   /// <para> VR: US or SS VM:1</para>
   /// </summary>
   public static SmallestImagePixelValue: number = 2621702;
   /// <summary>
   /// <para>(0028,0107) Largest Image Pixel Value</para>
   /// <para> VR: US or SS VM:1</para>
   /// </summary>
   public static LargestImagePixelValue: number = 2621703;
   /// <summary>
   /// <para>(0028,0108) Smallest Pixel Value in Series</para>
   /// <para> VR: US or SS VM:1</para>
   /// </summary>
   public static SmallestPixelValueInSeries: number = 2621704;
   /// <summary>
   /// <para>(0028,0109) Largest Pixel Value in Series</para>
   /// <para> VR: US or SS VM:1</para>
   /// </summary>
   public static LargestPixelValueInSeries: number = 2621705;
   /// <summary>
   /// <para>(0028,0110) Smallest Image Pixel Value in Plane</para>
   /// <para> VR: US or SS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static SmallestImagePixelValueInPlaneRetired: number = 2621712;
   /// <summary>
   /// <para>(0028,0111) Largest Image Pixel Value in Plane</para>
   /// <para> VR: US or SS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static LargestImagePixelValueInPlaneRetired: number = 2621713;
   /// <summary>
   /// <para>(0028,0120) Pixel Padding Value</para>
   /// <para> VR: US or SS VM:1</para>
   /// </summary>
   public static PixelPaddingValue: number = 2621728;
   /// <summary>
   /// <para>(0028,0121) Pixel Padding Range Limit</para>
   /// <para> VR: US or SS VM:1</para>
   /// </summary>
   public static PixelPaddingRangeLimit: number = 2621729;
   /// <summary>
   /// <para>(0028,0200) Image Location</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ImageLocationRetired: number = 2621952;
   /// <summary>
   /// <para>(0028,0300) Quality Control Image</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static QualityControlImage: number = 2622208;
   /// <summary>
   /// <para>(0028,0301) Burned In Annotation</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BurnedInAnnotation: number = 2622209;
   /// <summary>
   /// <para>(0028,0302) Recognizable Visual Features</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RecognizableVisualFeatures: number = 2622210;
   /// <summary>
   /// <para>(0028,0303) Longitudinal Temporal Information Modified</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static LongitudinalTemporalInformationModified: number = 2622211;
   /// <summary>
   /// <para>(0028,0400) Transform Label</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TransformLabelRetired: number = 2622464;
   /// <summary>
   /// <para>(0028,0401) Transform Version Number</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TransformVersionNumberRetired: number = 2622465;
   /// <summary>
   /// <para>(0028,0402) Number of Transform Steps</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static NumberOfTransformStepsRetired: number = 2622466;
   /// <summary>
   /// <para>(0028,0403) Sequence of Compressed Data</para>
   /// <para> VR: LO VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static SequenceOfCompressedDataRetired: number = 2622467;
   /// <summary>
   /// <para>(0028,0404) Details of Coefficients</para>
   /// <para> VR: AT VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DetailsOfCoefficientsRetired: number = 2622468;
   /// <summary>
   /// <para>(0028,0700) DCT Label</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DctLabelRetired: number = 2623232;
   /// <summary>
   /// <para>(0028,0701) Data Block Description</para>
   /// <para> VR: CS VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DataBlockDescriptionRetired: number = 2623233;
   /// <summary>
   /// <para>(0028,0702) Data Block</para>
   /// <para> VR: AT VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DataBlockRetired: number = 2623234;
   /// <summary>
   /// <para>(0028,0710) Normalization Factor Format</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static NormalizationFactorFormatRetired: number = 2623248;
   /// <summary>
   /// <para>(0028,0720) Zonal Map Number Format</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ZonalMapNumberFormatRetired: number = 2623264;
   /// <summary>
   /// <para>(0028,0721) Zonal Map Location</para>
   /// <para> VR: AT VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ZonalMapLocationRetired: number = 2623265;
   /// <summary>
   /// <para>(0028,0722) Zonal Map Format</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ZonalMapFormatRetired: number = 2623266;
   /// <summary>
   /// <para>(0028,0730) Adaptive Map Format</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static AdaptiveMapFormatRetired: number = 2623280;
   /// <summary>
   /// <para>(0028,0740) Code Number Format</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CodeNumberFormatRetired: number = 2623296;
   /// <summary>
   /// <para>(0028,0A02) Pixel Spacing Calibration Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PixelSpacingCalibrationType: number = 2624002;
   /// <summary>
   /// <para>(0028,0A04) Pixel Spacing Calibration Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static PixelSpacingCalibrationDescription: number = 2624004;
   /// <summary>
   /// <para>(0028,1040) Pixel Intensity Relationship</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PixelIntensityRelationship: number = 2625600;
   /// <summary>
   /// <para>(0028,1041) Pixel Intensity Relationship Sign</para>
   /// <para> VR: SS VM:1</para>
   /// </summary>
   public static PixelIntensityRelationshipSign: number = 2625601;
   /// <summary>
   /// <para>(0028,1050) Window Center</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static WindowCenter: number = 2625616;
   /// <summary>
   /// <para>(0028,1051) Window Width</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static WindowWidth: number = 2625617;
   /// <summary>
   /// <para>(0028,1052) Rescale Intercept</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static RescaleIntercept: number = 2625618;
   /// <summary>
   /// <para>(0028,1053) Rescale Slope</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static RescaleSlope: number = 2625619;
   /// <summary>
   /// <para>(0028,1054) Rescale Type</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static RescaleType: number = 2625620;
   /// <summary>
   /// <para>(0028,1055) Window Center &amp; Width Explanation</para>
   /// <para> VR: LO VM:1-n</para>
   /// </summary>
   public static WindowCenterWidthExplanation: number = 2625621;
   /// <summary>
   /// <para>(0028,1056) VOI LUT Function</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static VoiLutFunction: number = 2625622;
   /// <summary>
   /// <para>(0028,1080) Gray Scale</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static GrayScaleRetired: number = 2625664;
   /// <summary>
   /// <para>(0028,1090) Recommended Viewing Mode</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RecommendedViewingMode: number = 2625680;
   /// <summary>
   /// <para>(0028,1100) Gray Lookup Table Descriptor</para>
   /// <para> VR: US or SS VM:3</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static GrayLookupTableDescriptorRetired: number = 2625792;
   /// <summary>
   /// <para>(0028,1101) Red Palette Color Lookup Table Descriptor</para>
   /// <para> VR: US or SS VM:3</para>
   /// </summary>
   public static RedPaletteColorLookupTableDescriptor: number = 2625793;
   /// <summary>
   /// <para>(0028,1102) Green Palette Color Lookup Table Descriptor</para>
   /// <para> VR: US or SS VM:3</para>
   /// </summary>
   public static GreenPaletteColorLookupTableDescriptor: number = 2625794;
   /// <summary>
   /// <para>(0028,1103) Blue Palette Color Lookup Table Descriptor</para>
   /// <para> VR: US or SS VM:3</para>
   /// </summary>
   public static BluePaletteColorLookupTableDescriptor: number = 2625795;
   /// <summary>
   /// <para>(0028,1104) Alpha Palette Color Lookup Table Descriptor</para>
   /// <para> VR: US VM:3</para>
   /// </summary>
   public static AlphaPaletteColorLookupTableDescriptor: number = 2625796;
   /// <summary>
   /// <para>(0028,1111) Large Red Palette Color Lookup Table Descriptor</para>
   /// <para> VR: US or SS VM:4</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static LargeRedPaletteColorLookupTableDescriptorRetired: number = 2625809;
   /// <summary>
   /// <para>(0028,1112) Large Green Palette Color Lookup Table Descriptor</para>
   /// <para> VR: US or SS VM:4</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static LargeGreenPaletteColorLookupTableDescriptorRetired: number = 2625810;
   /// <summary>
   /// <para>(0028,1113) Large Blue Palette Color Lookup Table Descriptor</para>
   /// <para> VR: US or SS VM:4</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static LargeBluePaletteColorLookupTableDescriptorRetired: number = 2625811;
   /// <summary>
   /// <para>(0028,1199) Palette Color Lookup Table UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static PaletteColorLookupTableUid: number = 2625945;
   /// <summary>
   /// <para>(0028,1200) Gray Lookup Table Data</para>
   /// <para> VR: US or SSor OW VM:1-n1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static GrayLookupTableDataRetired: number = 2626048;
   /// <summary>
   /// <para>(0028,1201) Red Palette Color Lookup Table Data</para>
   /// <para> VR: OW VM:1</para>
   /// </summary>
   public static RedPaletteColorLookupTableData: number = 2626049;
   /// <summary>
   /// <para>(0028,1202) Green Palette Color Lookup Table Data</para>
   /// <para> VR: OW VM:1</para>
   /// </summary>
   public static GreenPaletteColorLookupTableData: number = 2626050;
   /// <summary>
   /// <para>(0028,1203) Blue Palette Color Lookup Table Data</para>
   /// <para> VR: OW VM:1</para>
   /// </summary>
   public static BluePaletteColorLookupTableData: number = 2626051;
   /// <summary>
   /// <para>(0028,1204) Alpha Palette Color Lookup Table Data</para>
   /// <para> VR: OW VM:1</para>
   /// </summary>
   public static AlphaPaletteColorLookupTableData: number = 2626052;
   /// <summary>
   /// <para>(0028,1211) Large Red Palette Color Lookup Table Data</para>
   /// <para> VR: OW VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static LargeRedPaletteColorLookupTableDataRetired: number = 2626065;
   /// <summary>
   /// <para>(0028,1212) Large Green Palette Color Lookup Table Data</para>
   /// <para> VR: OW VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static LargeGreenPaletteColorLookupTableDataRetired: number = 2626066;
   /// <summary>
   /// <para>(0028,1213) Large Blue Palette Color Lookup Table Data</para>
   /// <para> VR: OW VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static LargeBluePaletteColorLookupTableDataRetired: number = 2626067;
   /// <summary>
   /// <para>(0028,1214) Large Palette Color Lookup Table UID</para>
   /// <para> VR: UI VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static LargePaletteColorLookupTableUidRetired: number = 2626068;
   /// <summary>
   /// <para>(0028,1221) Segmented Red Palette Color Lookup Table Data</para>
   /// <para> VR: OW VM:1</para>
   /// </summary>
   public static SegmentedRedPaletteColorLookupTableData: number = 2626081;
   /// <summary>
   /// <para>(0028,1222) Segmented Green Palette Color Lookup Table Data</para>
   /// <para> VR: OW VM:1</para>
   /// </summary>
   public static SegmentedGreenPaletteColorLookupTableData: number = 2626082;
   /// <summary>
   /// <para>(0028,1223) Segmented Blue Palette Color Lookup Table Data</para>
   /// <para> VR: OW VM:1</para>
   /// </summary>
   public static SegmentedBluePaletteColorLookupTableData: number = 2626083;
   /// <summary>
   /// <para>(0028,1300) Breast Implant Present</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BreastImplantPresent: number = 2626304;
   /// <summary>
   /// <para>(0028,1350) Partial View</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PartialView: number = 2626384;
   /// <summary>
   /// <para>(0028,1351) Partial View Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static PartialViewDescription: number = 2626385;
   /// <summary>
   /// <para>(0028,1352) Partial View Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PartialViewCodeSequence: number = 2626386;
   /// <summary>
   /// <para>(0028,135A) Spatial Locations Preserved</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SpatialLocationsPreserved: number = 2626394;
   /// <summary>
   /// <para>(0028,1401) Data Frame Assignment Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DataFrameAssignmentSequence: number = 2626561;
   /// <summary>
   /// <para>(0028,1402) Data Path Assignment</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DataPathAssignment: number = 2626562;
   /// <summary>
   /// <para>(0028,1403) Bits Mapped to Color Lookup Table</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static BitsMappedToColorLookupTable: number = 2626563;
   /// <summary>
   /// <para>(0028,1404) Blending LUT 1 Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static BlendingLut1Sequence: number = 2626564;
   /// <summary>
   /// <para>(0028,1405) Blending LUT 1 Transfer Function</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BlendingLut1TransferFunction: number = 2626565;
   /// <summary>
   /// <para>(0028,1406) Blending Weight Constant</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static BlendingWeightConstant: number = 2626566;
   /// <summary>
   /// <para>(0028,1407) Blending Lookup Table Descriptor</para>
   /// <para> VR: US VM:3</para>
   /// </summary>
   public static BlendingLookupTableDescriptor: number = 2626567;
   /// <summary>
   /// <para>(0028,1408) Blending Lookup Table Data</para>
   /// <para> VR: OW VM:1</para>
   /// </summary>
   public static BlendingLookupTableData: number = 2626568;
   /// <summary>
   /// <para>(0028,140B) Enhanced Palette Color Lookup Table Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static EnhancedPaletteColorLookupTableSequence: number = 2626571;
   /// <summary>
   /// <para>(0028,140C) Blending LUT 2 Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static BlendingLut2Sequence: number = 2626572;
   /// <summary>
   /// <para>(0028,140D) Blending LUT 2 Transfer Function</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BlendingLut2TransferFunction: number = 2626573;
   /// <summary>
   /// <para>(0028,140E) Data Path ID</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DataPathId: number = 2626574;
   /// <summary>
   /// <para>(0028,140F) RGB LUT Transfer Function</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RgbLutTransferFunction: number = 2626575;
   /// <summary>
   /// <para>(0028,1410) Alpha LUT Transfer Function</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AlphaLutTransferFunction: number = 2626576;
   /// <summary>
   /// <para>(0028,2000) ICC Profile</para>
   /// <para> VR: OB VM:1</para>
   /// </summary>
   public static IccProfile: number = 2629632;
   /// <summary>
   /// <para>(0028,2110) Lossy Image Compression</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static LossyImageCompression: number = 2629904;
   /// <summary>
   /// <para>(0028,2112) Lossy Image Compression Ratio</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static LossyImageCompressionRatio: number = 2629906;
   /// <summary>
   /// <para>(0028,2114) Lossy Image Compression Method</para>
   /// <para> VR: CS VM:1-n</para>
   /// </summary>
   public static LossyImageCompressionMethod: number = 2629908;
   /// <summary>
   /// <para>(0028,3000) Modality LUT Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ModalityLutSequence: number = 2633728;
   /// <summary>
   /// <para>(0028,3002) LUT Descriptor</para>
   /// <para> VR: US or SS VM:3</para>
   /// </summary>
   public static LutDescriptor: number = 2633730;
   /// <summary>
   /// <para>(0028,3003) LUT Explanation</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static LutExplanation: number = 2633731;
   /// <summary>
   /// <para>(0028,3004) Modality LUT Type</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ModalityLutType: number = 2633732;
   /// <summary>
   /// <para>(0028,3006) LUT Data</para>
   /// <para> VR: US or OW VM:1-n1</para>
   /// </summary>
   public static LutData: number = 2633734;
   /// <summary>
   /// <para>(0028,3010) VOI LUT Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static VoiLutSequence: number = 2633744;
   /// <summary>
   /// <para>(0028,3110) Softcopy VOI LUT Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SoftcopyVoiLutSequence: number = 2634000;
   /// <summary>
   /// <para>(0028,4000) Image Presentation Comments</para>
   /// <para> VR: LT VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ImagePresentationCommentsRetired: number = 2637824;
   /// <summary>
   /// <para>(0028,5000) Bi-Plane Acquisition Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static BiPlaneAcquisitionSequenceRetired: number = 2641920;
   /// <summary>
   /// <para>(0028,6010) Representative Frame Number</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static RepresentativeFrameNumber: number = 2646032;
   /// <summary>
   /// <para>(0028,6020) Frame Numbers of Interest (FOI) </para>
   /// <para> VR: US VM:1-n</para>
   /// </summary>
   public static FrameNumbersOfInterestFoi: number = 2646048;
   /// <summary>
   /// <para>(0028,6022) Frame of Interest Description</para>
   /// <para> VR: LO VM:1-n</para>
   /// </summary>
   public static FrameOfInterestDescription: number = 2646050;
   /// <summary>
   /// <para>(0028,6023) Frame of Interest Type</para>
   /// <para> VR: CS VM:1-n</para>
   /// </summary>
   public static FrameOfInterestType: number = 2646051;
   /// <summary>
   /// <para>(0028,6030) Mask Pointer(s)</para>
   /// <para> VR: US VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static MaskPointersRetired: number = 2646064;
   /// <summary>
   /// <para>(0028,6040) R Wave Pointer</para>
   /// <para> VR: US VM:1-n</para>
   /// </summary>
   public static RWavePointer: number = 2646080;
   /// <summary>
   /// <para>(0028,6100) Mask Subtraction Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MaskSubtractionSequence: number = 2646272;
   /// <summary>
   /// <para>(0028,6101) Mask Operation</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static MaskOperation: number = 2646273;
   /// <summary>
   /// <para>(0028,6102) Applicable Frame Range</para>
   /// <para> VR: US VM:2-2n</para>
   /// </summary>
   public static ApplicableFrameRange: number = 2646274;
   /// <summary>
   /// <para>(0028,6110) Mask Frame Numbers</para>
   /// <para> VR: US VM:1-n</para>
   /// </summary>
   public static MaskFrameNumbers: number = 2646288;
   /// <summary>
   /// <para>(0028,6112) Contrast Frame Averaging</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ContrastFrameAveraging: number = 2646290;
   /// <summary>
   /// <para>(0028,6114) Mask Sub-pixel Shift</para>
   /// <para> VR: FL VM:2</para>
   /// </summary>
   public static MaskSubPixelShift: number = 2646292;
   /// <summary>
   /// <para>(0028,6120) TID Offset</para>
   /// <para> VR: SS VM:1</para>
   /// </summary>
   public static TidOffset: number = 2646304;
   /// <summary>
   /// <para>(0028,6190) Mask Operation Explanation</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static MaskOperationExplanation: number = 2646416;
   /// <summary>
   /// <para>(0028,7FE0) Pixel Data Provider URL</para>
   /// <para> VR: UT VM:1</para>
   /// </summary>
   public static PixelDataProviderUrl: number = 2654176;
   /// <summary>
   /// <para>(0028,9001) Data Point Rows</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static DataPointRows: number = 2658305;
   /// <summary>
   /// <para>(0028,9002) Data Point Columns</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static DataPointColumns: number = 2658306;
   /// <summary>
   /// <para>(0028,9003) Signal Domain Columns</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SignalDomainColumns: number = 2658307;
   /// <summary>
   /// <para>(0028,9099) Largest Monochrome Pixel Value</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static LargestMonochromePixelValueRetired: number = 2658457;
   /// <summary>
   /// <para>(0028,9108) Data Representation</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DataRepresentation: number = 2658568;
   /// <summary>
   /// <para>(0028,9110) Pixel Measures Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PixelMeasuresSequence: number = 2658576;
   /// <summary>
   /// <para>(0028,9132) Frame VOI LUT Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FrameVoiLutSequence: number = 2658610;
   /// <summary>
   /// <para>(0028,9145) Pixel Value Transformation Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PixelValueTransformationSequence: number = 2658629;
   /// <summary>
   /// <para>(0028,9235) Signal Domain Rows</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SignalDomainRows: number = 2658869;
   /// <summary>
   /// <para>(0028,9411) Display Filter Percentage</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static DisplayFilterPercentage: number = 2659345;
   /// <summary>
   /// <para>(0028,9415) Frame Pixel Shift Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FramePixelShiftSequence: number = 2659349;
   /// <summary>
   /// <para>(0028,9416) Subtraction Item ID</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static SubtractionItemId: number = 2659350;
   /// <summary>
   /// <para>(0028,9422) Pixel Intensity Relationship LUT Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PixelIntensityRelationshipLutSequence: number = 2659362;
   /// <summary>
   /// <para>(0028,9443) Frame Pixel Data Properties Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FramePixelDataPropertiesSequence: number = 2659395;
   /// <summary>
   /// <para>(0028,9444) Geometrical Properties</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static GeometricalProperties: number = 2659396;
   /// <summary>
   /// <para>(0028,9445) Geometric Maximum Distortion</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static GeometricMaximumDistortion: number = 2659397;
   /// <summary>
   /// <para>(0028,9446) Image Processing Applied</para>
   /// <para> VR: CS VM:1-n</para>
   /// </summary>
   public static ImageProcessingApplied: number = 2659398;
   /// <summary>
   /// <para>(0028,9454) Mask Selection Mode</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static MaskSelectionMode: number = 2659412;
   /// <summary>
   /// <para>(0028,9474) LUT Function</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static LutFunction: number = 2659444;
   /// <summary>
   /// <para>(0028,9478) Mask Visibility Percentage</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static MaskVisibilityPercentage: number = 2659448;
   /// <summary>
   /// <para>(0028,9501) Pixel Shift Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PixelShiftSequence: number = 2659585;
   /// <summary>
   /// <para>(0028,9502) Region Pixel Shift Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RegionPixelShiftSequence: number = 2659586;
   /// <summary>
   /// <para>(0028,9503) Vertices of the Region</para>
   /// <para> VR: SS VM:2-2n</para>
   /// </summary>
   public static VerticesOfTheRegion: number = 2659587;
   /// <summary>
   /// <para>(0028,9505) Multi-frame Presentation Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MultiFramePresentationSequence: number = 2659589;
   /// <summary>
   /// <para>(0028,9506) Pixel Shift Frame Range</para>
   /// <para> VR: US VM:2-2n</para>
   /// </summary>
   public static PixelShiftFrameRange: number = 2659590;
   /// <summary>
   /// <para>(0028,9507) LUT Frame Range</para>
   /// <para> VR: US VM:2-2n</para>
   /// </summary>
   public static LutFrameRange: number = 2659591;
   /// <summary>
   /// <para>(0028,9520) Image to Equipment Mapping Matrix</para>
   /// <para> VR: DS VM:16</para>
   /// </summary>
   public static ImageToEquipmentMappingMatrix: number = 2659616;
   /// <summary>
   /// <para>(0028,9537) Equipment Coordinate System Identification</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static EquipmentCoordinateSystemIdentification: number = 2659639;
   /// <summary>
   /// <para>(0032,000A) Study Status ID</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static StudyStatusIdRetired: number = 3276810;
   /// <summary>
   /// <para>(0032,000C) Study Priority ID</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static StudyPriorityIdRetired: number = 3276812;
   /// <summary>
   /// <para>(0032,0012) Study ID Issuer</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static StudyIdIssuerRetired: number = 3276818;
   /// <summary>
   /// <para>(0032,0032) Study Verified Date</para>
   /// <para> VR: DA VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static StudyVerifiedDateRetired: number = 3276850;
   /// <summary>
   /// <para>(0032,0033) Study Verified Time</para>
   /// <para> VR: TM VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static StudyVerifiedTimeRetired: number = 3276851;
   /// <summary>
   /// <para>(0032,0034) Study Read Date</para>
   /// <para> VR: DA VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static StudyReadDateRetired: number = 3276852;
   /// <summary>
   /// <para>(0032,0035) Study Read Time</para>
   /// <para> VR: TM VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static StudyReadTimeRetired: number = 3276853;
   /// <summary>
   /// <para>(0032,1000) Scheduled Study Start Date</para>
   /// <para> VR: DA VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ScheduledStudyStartDateRetired: number = 3280896;
   /// <summary>
   /// <para>(0032,1001) Scheduled Study Start Time</para>
   /// <para> VR: TM VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ScheduledStudyStartTimeRetired: number = 3280897;
   /// <summary>
   /// <para>(0032,1010) Scheduled Study Stop Date</para>
   /// <para> VR: DA VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ScheduledStudyStopDateRetired: number = 3280912;
   /// <summary>
   /// <para>(0032,1011) Scheduled Study Stop Time</para>
   /// <para> VR: TM VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ScheduledStudyStopTimeRetired: number = 3280913;
   /// <summary>
   /// <para>(0032,1020) Scheduled Study Location</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ScheduledStudyLocationRetired: number = 3280928;
   /// <summary>
   /// <para>(0032,1021) Scheduled Study Location AE Title</para>
   /// <para> VR: AE VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ScheduledStudyLocationAeTitleRetired: number = 3280929;
   /// <summary>
   /// <para>(0032,1030) Reason for Study</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ReasonForStudyRetired: number = 3280944;
   /// <summary>
   /// <para>(0032,1031) Requesting Physician Identification Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RequestingPhysicianIdentificationSequence: number = 3280945;
   /// <summary>
   /// <para>(0032,1032) Requesting Physician</para>
   /// <para> VR: PN VM:1</para>
   /// </summary>
   public static RequestingPhysician: number = 3280946;
   /// <summary>
   /// <para>(0032,1033) Requesting Service</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static RequestingService: number = 3280947;
   /// <summary>
   /// <para>(0032,1034) Requesting Service Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RequestingServiceCodeSequence: number = 3280948;
   /// <summary>
   /// <para>(0032,1040) Study Arrival Date</para>
   /// <para> VR: DA VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static StudyArrivalDateRetired: number = 3280960;
   /// <summary>
   /// <para>(0032,1041) Study Arrival Time</para>
   /// <para> VR: TM VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static StudyArrivalTimeRetired: number = 3280961;
   /// <summary>
   /// <para>(0032,1050) Study Completion Date</para>
   /// <para> VR: DA VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static StudyCompletionDateRetired: number = 3280976;
   /// <summary>
   /// <para>(0032,1051) Study Completion Time</para>
   /// <para> VR: TM VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static StudyCompletionTimeRetired: number = 3280977;
   /// <summary>
   /// <para>(0032,1055) Study Component Status ID</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static StudyComponentStatusIdRetired: number = 3280981;
   /// <summary>
   /// <para>(0032,1060) Requested Procedure Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static RequestedProcedureDescription: number = 3280992;
   /// <summary>
   /// <para>(0032,1064) Requested Procedure Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RequestedProcedureCodeSequence: number = 3280996;
   /// <summary>
   /// <para>(0032,1070) Requested Contrast Agent</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static RequestedContrastAgent: number = 3281008;
   /// <summary>
   /// <para>(0032,4000) Study Comments</para>
   /// <para> VR: LT VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static StudyCommentsRetired: number = 3293184;
   /// <summary>
   /// <para>(0038,0004) Referenced Patient Alias Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedPatientAliasSequence: number = 3670020;
   /// <summary>
   /// <para>(0038,0008) Visit Status ID</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static VisitStatusId: number = 3670024;
   /// <summary>
   /// <para>(0038,0010) Admission ID</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static AdmissionId: number = 3670032;
   /// <summary>
   /// <para>(0038,0011) Issuer of Admission ID</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static IssuerOfAdmissionIdRetired: number = 3670033;
   /// <summary>
   /// <para>(0038,0014) Issuer of Admission ID Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IssuerOfAdmissionIdSequence: number = 3670036;
   /// <summary>
   /// <para>(0038,0016) Route of Admissions</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static RouteOfAdmissions: number = 3670038;
   /// <summary>
   /// <para>(0038,001A) Scheduled Admission Date</para>
   /// <para> VR: DA VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ScheduledAdmissionDateRetired: number = 3670042;
   /// <summary>
   /// <para>(0038,001B) Scheduled Admission Time</para>
   /// <para> VR: TM VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ScheduledAdmissionTimeRetired: number = 3670043;
   /// <summary>
   /// <para>(0038,001C) Scheduled Discharge Date</para>
   /// <para> VR: DA VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ScheduledDischargeDateRetired: number = 3670044;
   /// <summary>
   /// <para>(0038,001D) Scheduled Discharge Time</para>
   /// <para> VR: TM VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ScheduledDischargeTimeRetired: number = 3670045;
   /// <summary>
   /// <para>(0038,001E) Scheduled Patient Institution Residence</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ScheduledPatientInstitutionResidenceRetired: number = 3670046;
   /// <summary>
   /// <para>(0038,0020) Admitting Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static AdmittingDate: number = 3670048;
   /// <summary>
   /// <para>(0038,0021) Admitting Time</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static AdmittingTime: number = 3670049;
   /// <summary>
   /// <para>(0038,0030) Discharge Date</para>
   /// <para> VR: DA VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DischargeDateRetired: number = 3670064;
   /// <summary>
   /// <para>(0038,0032) Discharge Time</para>
   /// <para> VR: TM VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DischargeTimeRetired: number = 3670066;
   /// <summary>
   /// <para>(0038,0040) Discharge Diagnosis Description</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DischargeDiagnosisDescriptionRetired: number = 3670080;
   /// <summary>
   /// <para>(0038,0044) Discharge Diagnosis Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DischargeDiagnosisCodeSequenceRetired: number = 3670084;
   /// <summary>
   /// <para>(0038,0050) Special Needs</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static SpecialNeeds: number = 3670096;
   /// <summary>
   /// <para>(0038,0060) Service Episode ID</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ServiceEpisodeId: number = 3670112;
   /// <summary>
   /// <para>(0038,0061) Issuer of Service Episode ID</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static IssuerOfServiceEpisodeIdRetired: number = 3670113;
   /// <summary>
   /// <para>(0038,0062) Service Episode Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ServiceEpisodeDescription: number = 3670114;
   /// <summary>
   /// <para>(0038,0064) Issuer of Service Episode ID Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IssuerOfServiceEpisodeIdSequence: number = 3670116;
   /// <summary>
   /// <para>(0038,0100) Pertinent Documents Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PertinentDocumentsSequence: number = 3670272;
   /// <summary>
   /// <para>(0038,0300) Current Patient Location</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static CurrentPatientLocation: number = 3670784;
   /// <summary>
   /// <para>(0038,0400) Patient's Institution Residence</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static PatientsInstitutionResidence: number = 3671040;
   /// <summary>
   /// <para>(0038,0500) Patient State</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static PatientState: number = 3671296;
   /// <summary>
   /// <para>(0038,0502) Patient Clinical Trial Participation Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PatientClinicalTrialParticipationSequence: number = 3671298;
   /// <summary>
   /// <para>(0038,4000) Visit Comments</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static VisitComments: number = 3686400;
   /// <summary>
   /// <para>(003A,0004) Waveform Originality</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static WaveformOriginality: number = 3801092;
   /// <summary>
   /// <para>(003A,0005) Number of Waveform Channels </para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfWaveformChannels: number = 3801093;
   /// <summary>
   /// <para>(003A,0010) Number of Waveform Samples </para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static NumberOfWaveformSamples: number = 3801104;
   /// <summary>
   /// <para>(003A,001A) Sampling Frequency </para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SamplingFrequency: number = 3801114;
   /// <summary>
   /// <para>(003A,0020) Multiplex Group Label </para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static MultiplexGroupLabel: number = 3801120;
   /// <summary>
   /// <para>(003A,0200) Channel Definition Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ChannelDefinitionSequence: number = 3801600;
   /// <summary>
   /// <para>(003A,0202) Waveform Channel Number </para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static WaveformChannelNumber: number = 3801602;
   /// <summary>
   /// <para>(003A,0203) Channel Label</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static ChannelLabel: number = 3801603;
   /// <summary>
   /// <para>(003A,0205) Channel Status</para>
   /// <para> VR: CS VM:1-n</para>
   /// </summary>
   public static ChannelStatus: number = 3801605;
   /// <summary>
   /// <para>(003A,0208) Channel Source Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ChannelSourceSequence: number = 3801608;
   /// <summary>
   /// <para>(003A,0209) Channel Source Modifiers Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ChannelSourceModifiersSequence: number = 3801609;
   /// <summary>
   /// <para>(003A,020A) Source Waveform Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SourceWaveformSequence: number = 3801610;
   /// <summary>
   /// <para>(003A,020C) Channel Derivation Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ChannelDerivationDescription: number = 3801612;
   /// <summary>
   /// <para>(003A,0210) Channel Sensitivity </para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ChannelSensitivity: number = 3801616;
   /// <summary>
   /// <para>(003A,0211) Channel Sensitivity Units Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ChannelSensitivityUnitsSequence: number = 3801617;
   /// <summary>
   /// <para>(003A,0212) Channel Sensitivity Correction Factor</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ChannelSensitivityCorrectionFactor: number = 3801618;
   /// <summary>
   /// <para>(003A,0213) Channel Baseline </para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ChannelBaseline: number = 3801619;
   /// <summary>
   /// <para>(003A,0214) Channel Time Skew</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ChannelTimeSkew: number = 3801620;
   /// <summary>
   /// <para>(003A,0215) Channel Sample Skew</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ChannelSampleSkew: number = 3801621;
   /// <summary>
   /// <para>(003A,0218) Channel Offset</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ChannelOffset: number = 3801624;
   /// <summary>
   /// <para>(003A,021A) Waveform Bits Stored</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static WaveformBitsStored: number = 3801626;
   /// <summary>
   /// <para>(003A,0220) Filter Low Frequency</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static FilterLowFrequency: number = 3801632;
   /// <summary>
   /// <para>(003A,0221) Filter High Frequency</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static FilterHighFrequency: number = 3801633;
   /// <summary>
   /// <para>(003A,0222) Notch Filter Frequency</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static NotchFilterFrequency: number = 3801634;
   /// <summary>
   /// <para>(003A,0223) Notch Filter Bandwidth</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static NotchFilterBandwidth: number = 3801635;
   /// <summary>
   /// <para>(003A,0230) Waveform Data Display Scale</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static WaveformDataDisplayScale: number = 3801648;
   /// <summary>
   /// <para>(003A,0231) Waveform Display Background CIELab Value</para>
   /// <para> VR: US VM:3</para>
   /// </summary>
   public static WaveformDisplayBackgroundCielabValue: number = 3801649;
   /// <summary>
   /// <para>(003A,0240) Waveform Presentation Group Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static WaveformPresentationGroupSequence: number = 3801664;
   /// <summary>
   /// <para>(003A,0241) Presentation Group Number</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static PresentationGroupNumber: number = 3801665;
   /// <summary>
   /// <para>(003A,0242) Channel Display Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ChannelDisplaySequence: number = 3801666;
   /// <summary>
   /// <para>(003A,0244) Channel Recommended Display CIELab Value</para>
   /// <para> VR: US VM:3</para>
   /// </summary>
   public static ChannelRecommendedDisplayCielabValue: number = 3801668;
   /// <summary>
   /// <para>(003A,0245) Channel Position</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static ChannelPosition: number = 3801669;
   /// <summary>
   /// <para>(003A,0246) Display Shading Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DisplayShadingFlag: number = 3801670;
   /// <summary>
   /// <para>(003A,0247) Fractional Channel Display Scale</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static FractionalChannelDisplayScale: number = 3801671;
   /// <summary>
   /// <para>(003A,0248) Absolute Channel Display Scale</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static AbsoluteChannelDisplayScale: number = 3801672;
   /// <summary>
   /// <para>(003A,0300) Multiplexed Audio Channels Description Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MultiplexedAudioChannelsDescriptionCodeSequence: number = 3801856;
   /// <summary>
   /// <para>(003A,0301) Channel Identification Code</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ChannelIdentificationCode: number = 3801857;
   /// <summary>
   /// <para>(003A,0302) Channel Mode</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ChannelMode: number = 3801858;
   /// <summary>
   /// <para>(0040,0001) Scheduled Station AE Title</para>
   /// <para> VR: AE VM:1-n</para>
   /// </summary>
   public static ScheduledStationAeTitle: number = 4194305;
   /// <summary>
   /// <para>(0040,0002) Scheduled Procedure Step Start Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static ScheduledProcedureStepStartDate: number = 4194306;
   /// <summary>
   /// <para>(0040,0003) Scheduled Procedure Step Start Time</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static ScheduledProcedureStepStartTime: number = 4194307;
   /// <summary>
   /// <para>(0040,0004) Scheduled Procedure Step End Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static ScheduledProcedureStepEndDate: number = 4194308;
   /// <summary>
   /// <para>(0040,0005) Scheduled Procedure Step End Time</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static ScheduledProcedureStepEndTime: number = 4194309;
   /// <summary>
   /// <para>(0040,0006) Scheduled Performing Physician's Name</para>
   /// <para> VR: PN VM:1</para>
   /// </summary>
   public static ScheduledPerformingPhysiciansName: number = 4194310;
   /// <summary>
   /// <para>(0040,0007) Scheduled Procedure Step Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ScheduledProcedureStepDescription: number = 4194311;
   /// <summary>
   /// <para>(0040,0008) Scheduled Protocol Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ScheduledProtocolCodeSequence: number = 4194312;
   /// <summary>
   /// <para>(0040,0009) Scheduled Procedure Step ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static ScheduledProcedureStepId: number = 4194313;
   /// <summary>
   /// <para>(0040,000A) Stage Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static StageCodeSequence: number = 4194314;
   /// <summary>
   /// <para>(0040,000B) Scheduled Performing Physician Identification Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ScheduledPerformingPhysicianIdentificationSequence: number = 4194315;
   /// <summary>
   /// <para>(0040,0010) Scheduled Station Name</para>
   /// <para> VR: SH VM:1-n</para>
   /// </summary>
   public static ScheduledStationName: number = 4194320;
   /// <summary>
   /// <para>(0040,0011) Scheduled Procedure Step Location</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static ScheduledProcedureStepLocation: number = 4194321;
   /// <summary>
   /// <para>(0040,0012) Pre-Medication</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static PreMedication: number = 4194322;
   /// <summary>
   /// <para>(0040,0020) Scheduled Procedure Step Status</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ScheduledProcedureStepStatus: number = 4194336;
   /// <summary>
   /// <para>(0040,0026) Order Placer Identifier Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OrderPlacerIdentifierSequence: number = 4194342;
   /// <summary>
   /// <para>(0040,0027) Order Filler Identifier Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OrderFillerIdentifierSequence: number = 4194343;
   /// <summary>
   /// <para>(0040,0031) Local Namespace Entity ID</para>
   /// <para> VR: UT VM:1</para>
   /// </summary>
   public static LocalNamespaceEntityId: number = 4194353;
   /// <summary>
   /// <para>(0040,0032) Universal Entity ID</para>
   /// <para> VR: UT VM:1</para>
   /// </summary>
   public static UniversalEntityId: number = 4194354;
   /// <summary>
   /// <para>(0040,0033) Universal Entity ID Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static UniversalEntityIdType: number = 4194355;
   /// <summary>
   /// <para>(0040,0035) Identifier Type Code</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static IdentifierTypeCode: number = 4194357;
   /// <summary>
   /// <para>(0040,0036) Assigning Facility Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AssigningFacilitySequence: number = 4194358;
   /// <summary>
   /// <para>(0040,0039) Assigning Jurisdiction Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AssigningJurisdictionCodeSequence: number = 4194361;
   /// <summary>
   /// <para>(0040,003A) Assigning Agency or Department Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AssigningAgencyOrDepartmentCodeSequence: number = 4194362;
   /// <summary>
   /// <para>(0040,0100) Scheduled Procedure Step Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ScheduledProcedureStepSequence: number = 4194560;
   /// <summary>
   /// <para>(0040,0220) Referenced Non-Image Composite SOP Instance Sequence </para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedNonImageCompositeSopInstanceSequence: number = 4194848;
   /// <summary>
   /// <para>(0040,0241) Performed Station AE Title</para>
   /// <para> VR: AE VM:1</para>
   /// </summary>
   public static PerformedStationAeTitle: number = 4194881;
   /// <summary>
   /// <para>(0040,0242) Performed Station Name</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static PerformedStationName: number = 4194882;
   /// <summary>
   /// <para>(0040,0243) Performed Location</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static PerformedLocation: number = 4194883;
   /// <summary>
   /// <para>(0040,0244) Performed Procedure Step Start Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static PerformedProcedureStepStartDate: number = 4194884;
   /// <summary>
   /// <para>(0040,0245) Performed Procedure Step Start Time</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static PerformedProcedureStepStartTime: number = 4194885;
   /// <summary>
   /// <para>(0040,0250) Performed Procedure Step End Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static PerformedProcedureStepEndDate: number = 4194896;
   /// <summary>
   /// <para>(0040,0251) Performed Procedure Step End Time</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static PerformedProcedureStepEndTime: number = 4194897;
   /// <summary>
   /// <para>(0040,0252) Performed Procedure Step Status</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PerformedProcedureStepStatus: number = 4194898;
   /// <summary>
   /// <para>(0040,0253) Performed Procedure Step ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static PerformedProcedureStepId: number = 4194899;
   /// <summary>
   /// <para>(0040,0254) Performed Procedure Step Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static PerformedProcedureStepDescription: number = 4194900;
   /// <summary>
   /// <para>(0040,0255) Performed Procedure Type Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static PerformedProcedureTypeDescription: number = 4194901;
   /// <summary>
   /// <para>(0040,0260) Performed Protocol Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PerformedProtocolCodeSequence: number = 4194912;
   /// <summary>
   /// <para>(0040,0261) Performed Protocol Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PerformedProtocolType: number = 4194913;
   /// <summary>
   /// <para>(0040,0270) Scheduled Step Attributes Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ScheduledStepAttributesSequence: number = 4194928;
   /// <summary>
   /// <para>(0040,0275) Request Attributes Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RequestAttributesSequence: number = 4194933;
   /// <summary>
   /// <para>(0040,0280) Comments on the Performed Procedure Step</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static CommentsOnThePerformedProcedureStep: number = 4194944;
   /// <summary>
   /// <para>(0040,0281) Performed Procedure Step Discontinuation Reason Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PerformedProcedureStepDiscontinuationReasonCodeSequence: number = 4194945;
   /// <summary>
   /// <para>(0040,0293) Quantity Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static QuantitySequence: number = 4194963;
   /// <summary>
   /// <para>(0040,0294) Quantity</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static Quantity: number = 4194964;
   /// <summary>
   /// <para>(0040,0295) Measuring Units Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MeasuringUnitsSequence: number = 4194965;
   /// <summary>
   /// <para>(0040,0296) Billing Item Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static BillingItemSequence: number = 4194966;
   /// <summary>
   /// <para>(0040,0300) Total Time of Fluoroscopy</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static TotalTimeOfFluoroscopy: number = 4195072;
   /// <summary>
   /// <para>(0040,0301) Total Number of Exposures</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static TotalNumberOfExposures: number = 4195073;
   /// <summary>
   /// <para>(0040,0302) Entrance Dose</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static EntranceDose: number = 4195074;
   /// <summary>
   /// <para>(0040,0303) Exposed Area</para>
   /// <para> VR: US VM:1-2</para>
   /// </summary>
   public static ExposedArea: number = 4195075;
   /// <summary>
   /// <para>(0040,0306) Distance Source to Entrance</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DistanceSourceToEntrance: number = 4195078;
   /// <summary>
   /// <para>(0040,0307) Distance Source to Support</para>
   /// <para> VR: DS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DistanceSourceToSupportRetired: number = 4195079;
   /// <summary>
   /// <para>(0040,030E) Exposure Dose Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ExposureDoseSequence: number = 4195086;
   /// <summary>
   /// <para>(0040,0310) Comments on Radiation Dose</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static CommentsOnRadiationDose: number = 4195088;
   /// <summary>
   /// <para>(0040,0312) X-Ray Output</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static XRayOutput: number = 4195090;
   /// <summary>
   /// <para>(0040,0314) Half Value Layer</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static HalfValueLayer: number = 4195092;
   /// <summary>
   /// <para>(0040,0316) Organ Dose</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static OrganDose: number = 4195094;
   /// <summary>
   /// <para>(0040,0318) Organ Exposed</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static OrganExposed: number = 4195096;
   /// <summary>
   /// <para>(0040,0320) Billing Procedure Step Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static BillingProcedureStepSequence: number = 4195104;
   /// <summary>
   /// <para>(0040,0321) Film Consumption Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FilmConsumptionSequence: number = 4195105;
   /// <summary>
   /// <para>(0040,0324) Billing Supplies and Devices Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static BillingSuppliesAndDevicesSequence: number = 4195108;
   /// <summary>
   /// <para>(0040,0330) Referenced Procedure Step Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ReferencedProcedureStepSequenceRetired: number = 4195120;
   /// <summary>
   /// <para>(0040,0340) Performed Series Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PerformedSeriesSequence: number = 4195136;
   /// <summary>
   /// <para>(0040,0400) Comments on the Scheduled Procedure Step</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static CommentsOnTheScheduledProcedureStep: number = 4195328;
   /// <summary>
   /// <para>(0040,0440) Protocol Context Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ProtocolContextSequence: number = 4195392;
   /// <summary>
   /// <para>(0040,0441) Content Item Modifier Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ContentItemModifierSequence: number = 4195393;
   /// <summary>
   /// <para>(0040,0500) Scheduled Specimen Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ScheduledSpecimenSequence: number = 4195584;
   /// <summary>
   /// <para>(0040,050A) Specimen Accession Number</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static SpecimenAccessionNumberRetired: number = 4195594;
   /// <summary>
   /// <para>(0040,0512) Container Identifier</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ContainerIdentifier: number = 4195602;
   /// <summary>
   /// <para>(0040,0513) Issuer of the Container Identifier Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IssuerOfTheContainerIdentifierSequence: number = 4195603;
   /// <summary>
   /// <para>(0040,0515) Alternate Container Identifier Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AlternateContainerIdentifierSequence: number = 4195605;
   /// <summary>
   /// <para>(0040,0518) Container Type Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ContainerTypeCodeSequence: number = 4195608;
   /// <summary>
   /// <para>(0040,051A) Container Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ContainerDescription: number = 4195610;
   /// <summary>
   /// <para>(0040,0520) Container Component Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ContainerComponentSequence: number = 4195616;
   /// <summary>
   /// <para>(0040,0550) Specimen Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static SpecimenSequenceRetired: number = 4195664;
   /// <summary>
   /// <para>(0040,0551) Specimen Identifier</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static SpecimenIdentifier: number = 4195665;
   /// <summary>
   /// <para>(0040,0552) Specimen Description Sequence (Trial)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static SpecimenDescriptionSequenceTrialRetired: number = 4195666;
   /// <summary>
   /// <para>(0040,0553) Specimen Description (Trial)</para>
   /// <para> VR: ST VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static SpecimenDescriptionTrialRetired: number = 4195667;
   /// <summary>
   /// <para>(0040,0554) Specimen UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static SpecimenUid: number = 4195668;
   /// <summary>
   /// <para>(0040,0555) Acquisition Context Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AcquisitionContextSequence: number = 4195669;
   /// <summary>
   /// <para>(0040,0556) Acquisition Context Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static AcquisitionContextDescription: number = 4195670;
   /// <summary>
   /// <para>(0040,0560) Specimen Description Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SpecimenDescriptionSequence: number = 4195680;
   /// <summary>
   /// <para>(0040,0562) Issuer of the Specimen Identifier Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IssuerOfTheSpecimenIdentifierSequence: number = 4195682;
   /// <summary>
   /// <para>(0040,059A) Specimen Type Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SpecimenTypeCodeSequence: number = 4195738;
   /// <summary>
   /// <para>(0040,0600) Specimen Short Description </para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static SpecimenShortDescription: number = 4195840;
   /// <summary>
   /// <para>(0040,0602) Specimen Detailed Description </para>
   /// <para> VR: UT VM:1</para>
   /// </summary>
   public static SpecimenDetailedDescription: number = 4195842;
   /// <summary>
   /// <para>(0040,0610) Specimen Preparation Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SpecimenPreparationSequence: number = 4195856;
   /// <summary>
   /// <para>(0040,0612) Specimen Preparation Step Content Item Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SpecimenPreparationStepContentItemSequence: number = 4195858;
   /// <summary>
   /// <para>(0040,0620) Specimen Localization Content Item Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SpecimenLocalizationContentItemSequence: number = 4195872;
   /// <summary>
   /// <para>(0040,06FA) Slide Identifier</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static SlideIdentifierRetired: number = 4196090;
   /// <summary>
   /// <para>(0040,071A) Image Center Point Coordinates Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ImageCenterPointCoordinatesSequence: number = 4196122;
   /// <summary>
   /// <para>(0040,072A) X Offset in Slide Coordinate System</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static XOffsetInSlideCoordinateSystem: number = 4196138;
   /// <summary>
   /// <para>(0040,073A) Y Offset in Slide Coordinate System</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static YOffsetInSlideCoordinateSystem: number = 4196154;
   /// <summary>
   /// <para>(0040,074A) Z Offset in Slide Coordinate System</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ZOffsetInSlideCoordinateSystem: number = 4196170;
   /// <summary>
   /// <para>(0040,08D8) Pixel Spacing Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static PixelSpacingSequenceRetired: number = 4196568;
   /// <summary>
   /// <para>(0040,08DA) Coordinate System Axis Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CoordinateSystemAxisCodeSequenceRetired: number = 4196570;
   /// <summary>
   /// <para>(0040,08EA) Measurement Units Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MeasurementUnitsCodeSequence: number = 4196586;
   /// <summary>
   /// <para>(0040,09F8) Vital Stain Code Sequence (Trial)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static VitalStainCodeSequenceTrialRetired: number = 4196856;
   /// <summary>
   /// <para>(0040,1001) Requested Procedure ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static RequestedProcedureId: number = 4198401;
   /// <summary>
   /// <para>(0040,1002) Reason for the Requested Procedure</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ReasonForTheRequestedProcedure: number = 4198402;
   /// <summary>
   /// <para>(0040,1003) Requested Procedure Priority </para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static RequestedProcedurePriority: number = 4198403;
   /// <summary>
   /// <para>(0040,1004) Patient Transport Arrangements</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static PatientTransportArrangements: number = 4198404;
   /// <summary>
   /// <para>(0040,1005) Requested Procedure Location</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static RequestedProcedureLocation: number = 4198405;
   /// <summary>
   /// <para>(0040,1006) Placer Order Number / Procedure</para>
   /// <para> VR: SH VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static PlacerOrderNumberProcedureRetired: number = 4198406;
   /// <summary>
   /// <para>(0040,1007) Filler Order Number / Procedure</para>
   /// <para> VR: SH VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static FillerOrderNumberProcedureRetired: number = 4198407;
   /// <summary>
   /// <para>(0040,1008) Confidentiality Code</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ConfidentialityCode: number = 4198408;
   /// <summary>
   /// <para>(0040,1009) Reporting Priority</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static ReportingPriority: number = 4198409;
   /// <summary>
   /// <para>(0040,100A) Reason for Requested Procedure Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReasonForRequestedProcedureCodeSequence: number = 4198410;
   /// <summary>
   /// <para>(0040,1010) Names of Intended Recipients of Results</para>
   /// <para> VR: PN VM:1-n</para>
   /// </summary>
   public static NamesOfIntendedRecipientsOfResults: number = 4198416;
   /// <summary>
   /// <para>(0040,1011) Intended Recipients of Results Identification Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IntendedRecipientsOfResultsIdentificationSequence: number = 4198417;
   /// <summary>
   /// <para>(0040,1012) Reason For Performed Procedure Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReasonForPerformedProcedureCodeSequence: number = 4198418;
   /// <summary>
   /// <para>(0040,1060) Requested Procedure Description (Trial)</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static RequestedProcedureDescriptionTrialRetired: number = 4198496;
   /// <summary>
   /// <para>(0040,1101) Person Identification Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PersonIdentificationCodeSequence: number = 4198657;
   /// <summary>
   /// <para>(0040,1102) Person's Address</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static PersonsAddress: number = 4198658;
   /// <summary>
   /// <para>(0040,1103) Person's Telephone Numbers</para>
   /// <para> VR: LO VM:1-n</para>
   /// </summary>
   public static PersonsTelephoneNumbers: number = 4198659;
   /// <summary>
   /// <para>(0040,1400) Requested Procedure Comments</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static RequestedProcedureComments: number = 4199424;
   /// <summary>
   /// <para>(0040,2001) Reason for the Imaging Service Request</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ReasonForTheImagingServiceRequestRetired: number = 4202497;
   /// <summary>
   /// <para>(0040,2004) Issue Date of Imaging Service Request</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static IssueDateOfImagingServiceRequest: number = 4202500;
   /// <summary>
   /// <para>(0040,2005) Issue Time of Imaging Service Request</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static IssueTimeOfImagingServiceRequest: number = 4202501;
   /// <summary>
   /// <para>(0040,2006) Placer Order Number / Imaging Service Request (Retired)</para>
   /// <para> VR: SH VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static PlacerOrderNumberImagingServiceRequestRetired: number = 4202502;
   /// <summary>
   /// <para>(0040,2007) Filler Order Number / Imaging Service Request (Retired)</para>
   /// <para> VR: SH VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static FillerOrderNumberImagingServiceRequestRetired: number = 4202503;
   /// <summary>
   /// <para>(0040,2008) Order Entered By</para>
   /// <para> VR: PN VM:1</para>
   /// </summary>
   public static OrderEnteredBy: number = 4202504;
   /// <summary>
   /// <para>(0040,2009) Order Enterer's Location</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static OrderEnterersLocation: number = 4202505;
   /// <summary>
   /// <para>(0040,2010) Order Callback Phone Number</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static OrderCallbackPhoneNumber: number = 4202512;
   /// <summary>
   /// <para>(0040,2016) Placer Order Number / Imaging Service Request</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static PlacerOrderNumberImagingServiceRequest: number = 4202518;
   /// <summary>
   /// <para>(0040,2017) Filler Order Number / Imaging Service Request</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static FillerOrderNumberImagingServiceRequest: number = 4202519;
   /// <summary>
   /// <para>(0040,2400) Imaging Service Request Comments</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static ImagingServiceRequestComments: number = 4203520;
   /// <summary>
   /// <para>(0040,3001) Confidentiality Constraint on Patient Data Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ConfidentialityConstraintOnPatientDataDescription: number = 4206593;
   /// <summary>
   /// <para>(0040,4001) General Purpose Scheduled Procedure Step Status</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static GeneralPurposeScheduledProcedureStepStatus: number = 4210689;
   /// <summary>
   /// <para>(0040,4002) General Purpose Performed Procedure Step Status</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static GeneralPurposePerformedProcedureStepStatus: number = 4210690;
   /// <summary>
   /// <para>(0040,4003) General Purpose Scheduled Procedure Step Priority</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static GeneralPurposeScheduledProcedureStepPriority: number = 4210691;
   /// <summary>
   /// <para>(0040,4004) Scheduled Processing Applications Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ScheduledProcessingApplicationsCodeSequence: number = 4210692;
   /// <summary>
   /// <para>(0040,4005) Scheduled Procedure Step Start DateTime</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static ScheduledProcedureStepStartDatetime: number = 4210693;
   /// <summary>
   /// <para>(0040,4006) Multiple Copies Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static MultipleCopiesFlag: number = 4210694;
   /// <summary>
   /// <para>(0040,4007) Performed Processing Applications Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PerformedProcessingApplicationsCodeSequence: number = 4210695;
   /// <summary>
   /// <para>(0040,4009) Human Performer Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static HumanPerformerCodeSequence: number = 4210697;
   /// <summary>
   /// <para>(0040,4010) Scheduled Procedure Step Modification Date Time</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static ScheduledProcedureStepModificationDateTime: number = 4210704;
   /// <summary>
   /// <para>(0040,4011) Expected Completion Date Time</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static ExpectedCompletionDateTime: number = 4210705;
   /// <summary>
   /// <para>(0040,4015) Resulting General Purpose Performed Procedure Steps Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ResultingGeneralPurposePerformedProcedureStepsSequence: number = 4210709;
   /// <summary>
   /// <para>(0040,4016) Referenced General Purpose Scheduled Procedure Step Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedGeneralPurposeScheduledProcedureStepSequence: number = 4210710;
   /// <summary>
   /// <para>(0040,4018) Scheduled Workitem Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ScheduledWorkitemCodeSequence: number = 4210712;
   /// <summary>
   /// <para>(0040,4019) Performed Workitem Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PerformedWorkitemCodeSequence: number = 4210713;
   /// <summary>
   /// <para>(0040,4020) Input Availability Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static InputAvailabilityFlag: number = 4210720;
   /// <summary>
   /// <para>(0040,4021) Input Information Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static InputInformationSequence: number = 4210721;
   /// <summary>
   /// <para>(0040,4022) Relevant Information Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RelevantInformationSequence: number = 4210722;
   /// <summary>
   /// <para>(0040,4023) Referenced General Purpose Scheduled Procedure Step Transaction UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static ReferencedGeneralPurposeScheduledProcedureStepTransactionUid: number = 4210723;
   /// <summary>
   /// <para>(0040,4025) Scheduled Station Name Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ScheduledStationNameCodeSequence: number = 4210725;
   /// <summary>
   /// <para>(0040,4026) Scheduled Station Class Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ScheduledStationClassCodeSequence: number = 4210726;
   /// <summary>
   /// <para>(0040,4027) Scheduled Station Geographic Location Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ScheduledStationGeographicLocationCodeSequence: number = 4210727;
   /// <summary>
   /// <para>(0040,4028) Performed Station Name Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PerformedStationNameCodeSequence: number = 4210728;
   /// <summary>
   /// <para>(0040,4029) Performed Station Class Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PerformedStationClassCodeSequence: number = 4210729;
   /// <summary>
   /// <para>(0040,4030) Performed Station Geographic Location Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PerformedStationGeographicLocationCodeSequence: number = 4210736;
   /// <summary>
   /// <para>(0040,4031) Requested Subsequent Workitem Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RequestedSubsequentWorkitemCodeSequence: number = 4210737;
   /// <summary>
   /// <para>(0040,4032) Non-DICOM Output Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static NonDicomOutputCodeSequence: number = 4210738;
   /// <summary>
   /// <para>(0040,4033) Output Information Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OutputInformationSequence: number = 4210739;
   /// <summary>
   /// <para>(0040,4034) Scheduled Human Performers Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ScheduledHumanPerformersSequence: number = 4210740;
   /// <summary>
   /// <para>(0040,4035) Actual Human Performers Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ActualHumanPerformersSequence: number = 4210741;
   /// <summary>
   /// <para>(0040,4036) Human Performer's Organization</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static HumanPerformersOrganization: number = 4210742;
   /// <summary>
   /// <para>(0040,4037) Human Performer's Name</para>
   /// <para> VR: PN VM:1</para>
   /// </summary>
   public static HumanPerformersName: number = 4210743;
   /// <summary>
   /// <para>(0040,4040) Raw Data Handling</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RawDataHandling: number = 4210752;
   /// <summary>
   /// <para>(0040,4041) Input Readiness State</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static InputReadinessState: number = 4210753;
   /// <summary>
   /// <para>(0040,4050) Performed Procedure Step Start DateTime</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static PerformedProcedureStepStartDatetime: number = 4210768;
   /// <summary>
   /// <para>(0040,4051) Performed Procedure Step End DateTime</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static PerformedProcedureStepEndDatetime: number = 4210769;
   /// <summary>
   /// <para>(0040,4052) Procedure Step Cancellation DateTime</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static ProcedureStepCancellationDatetime: number = 4210770;
   /// <summary>
   /// <para>(0040,8302) Entrance Dose in mGy</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static EntranceDoseInMgy: number = 4227842;
   /// <summary>
   /// <para>(0040,9094) Referenced Image Real World Value Mapping Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedImageRealWorldValueMappingSequence: number = 4231316;
   /// <summary>
   /// <para>(0040,9096) Real World Value Mapping Sequence </para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RealWorldValueMappingSequence: number = 4231318;
   /// <summary>
   /// <para>(0040,9098) Pixel Value Mapping Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PixelValueMappingCodeSequence: number = 4231320;
   /// <summary>
   /// <para>(0040,9210) LUT Label</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static LutLabel: number = 4231696;
   /// <summary>
   /// <para>(0040,9211) Real World Value Last Value Mapped</para>
   /// <para> VR: US or SS VM:1</para>
   /// </summary>
   public static RealWorldValueLastValueMapped: number = 4231697;
   /// <summary>
   /// <para>(0040,9212) Real World Value LUT Data</para>
   /// <para> VR: FD VM:1-n</para>
   /// </summary>
   public static RealWorldValueLutData: number = 4231698;
   /// <summary>
   /// <para>(0040,9216) Real World Value First Value Mapped</para>
   /// <para> VR: US or SS VM:1</para>
   /// </summary>
   public static RealWorldValueFirstValueMapped: number = 4231702;
   /// <summary>
   /// <para>(0040,9224) Real World Value Intercept</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static RealWorldValueIntercept: number = 4231716;
   /// <summary>
   /// <para>(0040,9225) Real World Value Slope</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static RealWorldValueSlope: number = 4231717;
   /// <summary>
   /// <para>(0040,A007) Findings Flag (Trial)</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static FindingsFlagTrialRetired: number = 4235271;
   /// <summary>
   /// <para>(0040,A010) Relationship Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RelationshipType: number = 4235280;
   /// <summary>
   /// <para>(0040,A020) Findings Sequence (Trial)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static FindingsSequenceTrialRetired: number = 4235296;
   /// <summary>
   /// <para>(0040,A021) Findings Group UID (Trial)</para>
   /// <para> VR: UI VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static FindingsGroupUidTrialRetired: number = 4235297;
   /// <summary>
   /// <para>(0040,A022) Referenced Findings Group UID (Trial)</para>
   /// <para> VR: UI VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ReferencedFindingsGroupUidTrialRetired: number = 4235298;
   /// <summary>
   /// <para>(0040,A023) Findings Group Recording Date (Trial)</para>
   /// <para> VR: DA VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static FindingsGroupRecordingDateTrialRetired: number = 4235299;
   /// <summary>
   /// <para>(0040,A024) Findings Group Recording Time (Trial)</para>
   /// <para> VR: TM VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static FindingsGroupRecordingTimeTrialRetired: number = 4235300;
   /// <summary>
   /// <para>(0040,A026) Findings Source Category Code Sequence (Trial)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static FindingsSourceCategoryCodeSequenceTrialRetired: number = 4235302;
   /// <summary>
   /// <para>(0040,A027) Verifying Organization</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static VerifyingOrganization: number = 4235303;
   /// <summary>
   /// <para>(0040,A028) Documenting Organization Identifier Code Sequence (Trial)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DocumentingOrganizationIdentifierCodeSequenceTrialRetired: number = 4235304;
   /// <summary>
   /// <para>(0040,A030) Verification Date Time</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static VerificationDateTime: number = 4235312;
   /// <summary>
   /// <para>(0040,A032) Observation Date Time</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static ObservationDateTime: number = 4235314;
   /// <summary>
   /// <para>(0040,A040) Value Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ValueType: number = 4235328;
   /// <summary>
   /// <para>(0040,A043) Concept Name Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ConceptNameCodeSequence: number = 4235331;
   /// <summary>
   /// <para>(0040,A047) Measurement Precision Description (Trial)</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static MeasurementPrecisionDescriptionTrialRetired: number = 4235335;
   /// <summary>
   /// <para>(0040,A050) Continuity Of Content</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ContinuityOfContent: number = 4235344;
   /// <summary>
   /// <para>(0040,A057) Urgency or Priority Alerts (Trial)</para>
   /// <para> VR: CS VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static UrgencyOrPriorityAlertsTrialRetired: number = 4235351;
   /// <summary>
   /// <para>(0040,A060) Sequencing Indicator (Trial)</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static SequencingIndicatorTrialRetired: number = 4235360;
   /// <summary>
   /// <para>(0040,A066) Document Identifier Code Sequence (Trial)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DocumentIdentifierCodeSequenceTrialRetired: number = 4235366;
   /// <summary>
   /// <para>(0040,A067) Document Author (Trial)</para>
   /// <para> VR: PN VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DocumentAuthorTrialRetired: number = 4235367;
   /// <summary>
   /// <para>(0040,A068) Document Author Identifier Code Sequence (Trial)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DocumentAuthorIdentifierCodeSequenceTrialRetired: number = 4235368;
   /// <summary>
   /// <para>(0040,A070) Identifier Code Sequence (Trial)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static IdentifierCodeSequenceTrialRetired: number = 4235376;
   /// <summary>
   /// <para>(0040,A073) Verifying Observer Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static VerifyingObserverSequence: number = 4235379;
   /// <summary>
   /// <para>(0040,A074) Object Binary Identifier (Trial)</para>
   /// <para> VR: OB VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ObjectBinaryIdentifierTrialRetired: number = 4235380;
   /// <summary>
   /// <para>(0040,A075) Verifying Observer Name</para>
   /// <para> VR: PN VM:1</para>
   /// </summary>
   public static VerifyingObserverName: number = 4235381;
   /// <summary>
   /// <para>(0040,A076) Documenting Observer Identifier Code Sequence (Trial)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DocumentingObserverIdentifierCodeSequenceTrialRetired: number = 4235382;
   /// <summary>
   /// <para>(0040,A078) Author Observer Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AuthorObserverSequence: number = 4235384;
   /// <summary>
   /// <para>(0040,A07A) Participant Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ParticipantSequence: number = 4235386;
   /// <summary>
   /// <para>(0040,A07C) Custodial Organization Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static CustodialOrganizationSequence: number = 4235388;
   /// <summary>
   /// <para>(0040,A080) Participation Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ParticipationType: number = 4235392;
   /// <summary>
   /// <para>(0040,A082) Participation DateTime</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static ParticipationDatetime: number = 4235394;
   /// <summary>
   /// <para>(0040,A084) Observer Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ObserverType: number = 4235396;
   /// <summary>
   /// <para>(0040,A085) Procedure Identifier Code Sequence (Trial)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ProcedureIdentifierCodeSequenceTrialRetired: number = 4235397;
   /// <summary>
   /// <para>(0040,A088) Verifying Observer Identification Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static VerifyingObserverIdentificationCodeSequence: number = 4235400;
   /// <summary>
   /// <para>(0040,A089) Object Directory Binary Identifier (Trial)</para>
   /// <para> VR: OB VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ObjectDirectoryBinaryIdentifierTrialRetired: number = 4235401;
   /// <summary>
   /// <para>(0040,A090) Equivalent CDA Document Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static EquivalentCdaDocumentSequenceRetired: number = 4235408;
   /// <summary>
   /// <para>(0040,A0B0) Referenced Waveform Channels</para>
   /// <para> VR: US VM:2-2n</para>
   /// </summary>
   public static ReferencedWaveformChannels: number = 4235440;
   /// <summary>
   /// <para>(0040,A110) Date of Document or Verbal Transaction (Trial)</para>
   /// <para> VR: DA VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DateOfDocumentOrVerbalTransactionTrialRetired: number = 4235536;
   /// <summary>
   /// <para>(0040,A112) Time of Document Creation or Verbal Transaction (Trial)</para>
   /// <para> VR: TM VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TimeOfDocumentCreationOrVerbalTransactionTrialRetired: number = 4235538;
   /// <summary>
   /// <para>(0040,A120) DateTime</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static Datetime: number = 4235552;
   /// <summary>
   /// <para>(0040,A121) Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static Date: number = 4235553;
   /// <summary>
   /// <para>(0040,A122) Time</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static Time: number = 4235554;
   /// <summary>
   /// <para>(0040,A123) Person Name</para>
   /// <para> VR: PN VM:1</para>
   /// </summary>
   public static PersonName: number = 4235555;
   /// <summary>
   /// <para>(0040,A124) UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static Uid: number = 4235556;
   /// <summary>
   /// <para>(0040,A125) Report Status ID (Trial)</para>
   /// <para> VR: CS VM:2</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ReportStatusIdTrialRetired: number = 4235557;
   /// <summary>
   /// <para>(0040,A130) Temporal Range Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TemporalRangeType: number = 4235568;
   /// <summary>
   /// <para>(0040,A132) Referenced Sample Positions</para>
   /// <para> VR: UL VM:1-n</para>
   /// </summary>
   public static ReferencedSamplePositions: number = 4235570;
   /// <summary>
   /// <para>(0040,A136) Referenced Frame Numbers</para>
   /// <para> VR: US VM:1-n</para>
   /// </summary>
   public static ReferencedFrameNumbers: number = 4235574;
   /// <summary>
   /// <para>(0040,A138) Referenced Time Offsets</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static ReferencedTimeOffsets: number = 4235576;
   /// <summary>
   /// <para>(0040,A13A) Referenced DateTime </para>
   /// <para> VR: DT VM:1-n</para>
   /// </summary>
   public static ReferencedDatetime: number = 4235578;
   /// <summary>
   /// <para>(0040,A160) Text Value</para>
   /// <para> VR: UT VM:1</para>
   /// </summary>
   public static TextValue: number = 4235616;
   /// <summary>
   /// <para>(0040,A167) Observation Category Code Sequence (Trial)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ObservationCategoryCodeSequenceTrialRetired: number = 4235623;
   /// <summary>
   /// <para>(0040,A168) Concept Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ConceptCodeSequence: number = 4235624;
   /// <summary>
   /// <para>(0040,A16A) Bibliographic Citation (Trial)</para>
   /// <para> VR: ST VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static BibliographicCitationTrialRetired: number = 4235626;
   /// <summary>
   /// <para>(0040,A170) Purpose of Reference Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PurposeOfReferenceCodeSequence: number = 4235632;
   /// <summary>
   /// <para>(0040,A171) Observation UID (Trial)</para>
   /// <para> VR: UI VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ObservationUidTrialRetired: number = 4235633;
   /// <summary>
   /// <para>(0040,A172) Referenced Observation UID (Trial)</para>
   /// <para> VR: UI VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ReferencedObservationUidTrialRetired: number = 4235634;
   /// <summary>
   /// <para>(0040,A173) Referenced Observation Class (Trial)</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ReferencedObservationClassTrialRetired: number = 4235635;
   /// <summary>
   /// <para>(0040,A174) Referenced Object Observation Class (Trial)</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ReferencedObjectObservationClassTrialRetired: number = 4235636;
   /// <summary>
   /// <para>(0040,A180) Annotation Group Number</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static AnnotationGroupNumber: number = 4235648;
   /// <summary>
   /// <para>(0040,A192) Observation Date (Trial)</para>
   /// <para> VR: DA VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ObservationDateTrialRetired: number = 4235666;
   /// <summary>
   /// <para>(0040,A193) Observation Time (Trial)</para>
   /// <para> VR: TM VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ObservationTimeTrialRetired: number = 4235667;
   /// <summary>
   /// <para>(0040,A194) Measurement Automation (Trial)</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static MeasurementAutomationTrialRetired: number = 4235668;
   /// <summary>
   /// <para>(0040,A195) Modifier Code Sequence </para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ModifierCodeSequence: number = 4235669;
   /// <summary>
   /// <para>(0040,A224) Identification Description (Trial)</para>
   /// <para> VR: ST VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static IdentificationDescriptionTrialRetired: number = 4235812;
   /// <summary>
   /// <para>(0040,A290) Coordinates Set Geometric Type (Trial)</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CoordinatesSetGeometricTypeTrialRetired: number = 4235920;
   /// <summary>
   /// <para>(0040,A296) Algorithm Code Sequence (Trial)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static AlgorithmCodeSequenceTrialRetired: number = 4235926;
   /// <summary>
   /// <para>(0040,A297) Algorithm Description (Trial)</para>
   /// <para> VR: ST VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static AlgorithmDescriptionTrialRetired: number = 4235927;
   /// <summary>
   /// <para>(0040,A29A) Pixel Coordinates Set (Trial)</para>
   /// <para> VR: SL VM:2-2n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static PixelCoordinatesSetTrialRetired: number = 4235930;
   /// <summary>
   /// <para>(0040,A300) Measured Value Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MeasuredValueSequence: number = 4236032;
   /// <summary>
   /// <para>(0040,A301) Numeric Value Qualifier Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static NumericValueQualifierCodeSequence: number = 4236033;
   /// <summary>
   /// <para>(0040,A307) Current Observer (Trial)</para>
   /// <para> VR: PN VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CurrentObserverTrialRetired: number = 4236039;
   /// <summary>
   /// <para>(0040,A30A) Numeric Value</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static NumericValue: number = 4236042;
   /// <summary>
   /// <para>(0040,A313) Referenced Accession Sequence (Trial)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ReferencedAccessionSequenceTrialRetired: number = 4236051;
   /// <summary>
   /// <para>(0040,A33A) Report Status Comment (Trial)</para>
   /// <para> VR: ST VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ReportStatusCommentTrialRetired: number = 4236090;
   /// <summary>
   /// <para>(0040,A340) Procedure Context Sequence (Trial)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ProcedureContextSequenceTrialRetired: number = 4236096;
   /// <summary>
   /// <para>(0040,A352) Verbal Source (Trial)</para>
   /// <para> VR: PN VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static VerbalSourceTrialRetired: number = 4236114;
   /// <summary>
   /// <para>(0040,A353) Address (Trial)</para>
   /// <para> VR: ST VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static AddressTrialRetired: number = 4236115;
   /// <summary>
   /// <para>(0040,A354) Telephone Number (Trial)</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TelephoneNumberTrialRetired: number = 4236116;
   /// <summary>
   /// <para>(0040,A358) Verbal Source Identifier Code Sequence (Trial)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static VerbalSourceIdentifierCodeSequenceTrialRetired: number = 4236120;
   /// <summary>
   /// <para>(0040,A360) Predecessor Documents Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PredecessorDocumentsSequence: number = 4236128;
   /// <summary>
   /// <para>(0040,A370) Referenced Request Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedRequestSequence: number = 4236144;
   /// <summary>
   /// <para>(0040,A372) Performed Procedure Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PerformedProcedureCodeSequence: number = 4236146;
   /// <summary>
   /// <para>(0040,A375) Current Requested Procedure Evidence Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static CurrentRequestedProcedureEvidenceSequence: number = 4236149;
   /// <summary>
   /// <para>(0040,A380) Report Detail Sequence (Trial)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ReportDetailSequenceTrialRetired: number = 4236160;
   /// <summary>
   /// <para>(0040,A385) Pertinent Other Evidence Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PertinentOtherEvidenceSequence: number = 4236165;
   /// <summary>
   /// <para>(0040,A390) HL7 Structured Document Reference Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static Hl7StructuredDocumentReferenceSequence: number = 4236176;
   /// <summary>
   /// <para>(0040,A402) Observation Subject UID (Trial)</para>
   /// <para> VR: UI VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ObservationSubjectUidTrialRetired: number = 4236290;
   /// <summary>
   /// <para>(0040,A403) Observation Subject Class (Trial)</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ObservationSubjectClassTrialRetired: number = 4236291;
   /// <summary>
   /// <para>(0040,A404) Observation Subject Type Code Sequence (Trial)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ObservationSubjectTypeCodeSequenceTrialRetired: number = 4236292;
   /// <summary>
   /// <para>(0040,A491) Completion Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CompletionFlag: number = 4236433;
   /// <summary>
   /// <para>(0040,A492) Completion Flag Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static CompletionFlagDescription: number = 4236434;
   /// <summary>
   /// <para>(0040,A493) Verification Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static VerificationFlag: number = 4236435;
   /// <summary>
   /// <para>(0040,A494) Archive Requested</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ArchiveRequested: number = 4236436;
   /// <summary>
   /// <para>(0040,A496) Preliminary Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PreliminaryFlag: number = 4236438;
   /// <summary>
   /// <para>(0040,A504) Content Template Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ContentTemplateSequence: number = 4236548;
   /// <summary>
   /// <para>(0040,A525) Identical Documents Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IdenticalDocumentsSequence: number = 4236581;
   /// <summary>
   /// <para>(0040,A600) Observation Subject Context Flag (Trial)</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ObservationSubjectContextFlagTrialRetired: number = 4236800;
   /// <summary>
   /// <para>(0040,A601) Observer Context Flag (Trial)</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ObserverContextFlagTrialRetired: number = 4236801;
   /// <summary>
   /// <para>(0040,A603) Procedure Context Flag (Trial)</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ProcedureContextFlagTrialRetired: number = 4236803;
   /// <summary>
   /// <para>(0040,A730) Content Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ContentSequence: number = 4237104;
   /// <summary>
   /// <para>(0040,A731) Relationship Sequence (Trial)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static RelationshipSequenceTrialRetired: number = 4237105;
   /// <summary>
   /// <para>(0040,A732) Relationship Type Code Sequence (Trial)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static RelationshipTypeCodeSequenceTrialRetired: number = 4237106;
   /// <summary>
   /// <para>(0040,A744) Language Code Sequence (Trial)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static LanguageCodeSequenceTrialRetired: number = 4237124;
   /// <summary>
   /// <para>(0040,A992) Uniform Resource Locator (Trial)</para>
   /// <para> VR: ST VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static UniformResourceLocatorTrialRetired: number = 4237714;
   /// <summary>
   /// <para>(0040,B020) Waveform Annotation Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static WaveformAnnotationSequence: number = 4239392;
   /// <summary>
   /// <para>(0040,DB00) Template Identifier</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TemplateIdentifier: number = 4250368;
   /// <summary>
   /// <para>(0040,DB06) Template Version</para>
   /// <para> VR: DT VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TemplateVersionRetired: number = 4250374;
   /// <summary>
   /// <para>(0040,DB07) Template Local Version</para>
   /// <para> VR: DT VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TemplateLocalVersionRetired: number = 4250375;
   /// <summary>
   /// <para>(0040,DB0B) Template Extension Flag</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TemplateExtensionFlagRetired: number = 4250379;
   /// <summary>
   /// <para>(0040,DB0C) Template Extension Organization UID</para>
   /// <para> VR: UI VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TemplateExtensionOrganizationUidRetired: number = 4250380;
   /// <summary>
   /// <para>(0040,DB0D) Template Extension Creator UID</para>
   /// <para> VR: UI VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TemplateExtensionCreatorUidRetired: number = 4250381;
   /// <summary>
   /// <para>(0040,DB73) Referenced Content Item Identifier</para>
   /// <para> VR: UL VM:1-n</para>
   /// </summary>
   public static ReferencedContentItemIdentifier: number = 4250483;
   /// <summary>
   /// <para>(0040,E001) HL7 Instance Identifier </para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static Hl7InstanceIdentifier: number = 4251649;
   /// <summary>
   /// <para>(0040,E004) HL7 Document Effective Time</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static Hl7DocumentEffectiveTime: number = 4251652;
   /// <summary>
   /// <para>(0040,E006) HL7 Document Type Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static Hl7DocumentTypeCodeSequence: number = 4251654;
   /// <summary>
   /// <para>(0040,E008) Document Class Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DocumentClassCodeSequence: number = 4251656;
   /// <summary>
   /// <para>(0040,E010) Retrieve URI </para>
   /// <para> VR: UT VM:1</para>
   /// </summary>
   public static RetrieveUri: number = 4251664;
   /// <summary>
   /// <para>(0040,E011) Retrieve Location UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static RetrieveLocationUid: number = 4251665;
   /// <summary>
   /// <para>(0040,E020) Type of Instances</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TypeOfInstances: number = 4251680;
   /// <summary>
   /// <para>(0040,E021) DICOM Retrieval Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DicomRetrievalSequence: number = 4251681;
   /// <summary>
   /// <para>(0040,E022) DICOM Media Retrieval Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DicomMediaRetrievalSequence: number = 4251682;
   /// <summary>
   /// <para>(0040,E023) WADO Retrieval Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static WadoRetrievalSequence: number = 4251683;
   /// <summary>
   /// <para>(0040,E024) XDS Retrieval Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static XdsRetrievalSequence: number = 4251684;
   /// <summary>
   /// <para>(0040,E030) Repository Unique ID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static RepositoryUniqueId: number = 4251696;
   /// <summary>
   /// <para>(0040,E031) Home Community ID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static HomeCommunityId: number = 4251697;
   /// <summary>
   /// <para>(0042,0010) Document Title</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static DocumentTitle: number = 4325392;
   /// <summary>
   /// <para>(0042,0011) Encapsulated Document</para>
   /// <para> VR: OB VM:1</para>
   /// </summary>
   public static EncapsulatedDocument: number = 4325393;
   /// <summary>
   /// <para>(0042,0012) MIME Type of Encapsulated Document</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static MimeTypeOfEncapsulatedDocument: number = 4325394;
   /// <summary>
   /// <para>(0042,0013) Source Instance Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SourceInstanceSequence: number = 4325395;
   /// <summary>
   /// <para>(0042,0014) List of MIME Types</para>
   /// <para> VR: LO VM:1-n</para>
   /// </summary>
   public static ListOfMimeTypes: number = 4325396;
   /// <summary>
   /// <para>(0044,0001) Product Package Identifier</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static ProductPackageIdentifier: number = 4456449;
   /// <summary>
   /// <para>(0044,0002) Substance Administration Approval</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SubstanceAdministrationApproval: number = 4456450;
   /// <summary>
   /// <para>(0044,0003) Approval Status Further Description</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static ApprovalStatusFurtherDescription: number = 4456451;
   /// <summary>
   /// <para>(0044,0004) Approval Status DateTime </para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static ApprovalStatusDatetime: number = 4456452;
   /// <summary>
   /// <para>(0044,0007) Product Type Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ProductTypeCodeSequence: number = 4456455;
   /// <summary>
   /// <para>(0044,0008) Product Name</para>
   /// <para> VR: LO VM:1-n</para>
   /// </summary>
   public static ProductName: number = 4456456;
   /// <summary>
   /// <para>(0044,0009) Product Description</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static ProductDescription: number = 4456457;
   /// <summary>
   /// <para>(0044,000A) Product Lot Identifier</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ProductLotIdentifier: number = 4456458;
   /// <summary>
   /// <para>(0044,000B) Product Expiration DateTime</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static ProductExpirationDatetime: number = 4456459;
   /// <summary>
   /// <para>(0044,0010) Substance Administration DateTime</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static SubstanceAdministrationDatetime: number = 4456464;
   /// <summary>
   /// <para>(0044,0011) Substance Administration Notes</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static SubstanceAdministrationNotes: number = 4456465;
   /// <summary>
   /// <para>(0044,0012) Substance Administration Device ID</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static SubstanceAdministrationDeviceId: number = 4456466;
   /// <summary>
   /// <para>(0044,0013) Product Parameter Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ProductParameterSequence: number = 4456467;
   /// <summary>
   /// <para>(0044,0019) Substance Administration Parameter Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SubstanceAdministrationParameterSequence: number = 4456473;
   /// <summary>
   /// <para>(0046,0012) Lens Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static LensDescription: number = 4587538;
   /// <summary>
   /// <para>(0046,0014) Right Lens Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RightLensSequence: number = 4587540;
   /// <summary>
   /// <para>(0046,0015) Left Lens Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static LeftLensSequence: number = 4587541;
   /// <summary>
   /// <para>(0046,0016) Unspecified Laterality Lens Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static UnspecifiedLateralityLensSequence: number = 4587542;
   /// <summary>
   /// <para>(0046,0018) Cylinder Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static CylinderSequence: number = 4587544;
   /// <summary>
   /// <para>(0046,0028) Prism Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PrismSequence: number = 4587560;
   /// <summary>
   /// <para>(0046,0030) Horizontal Prism Power</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static HorizontalPrismPower: number = 4587568;
   /// <summary>
   /// <para>(0046,0032) Horizontal Prism Base</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static HorizontalPrismBase: number = 4587570;
   /// <summary>
   /// <para>(0046,0034) Vertical Prism Power</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static VerticalPrismPower: number = 4587572;
   /// <summary>
   /// <para>(0046,0036) Vertical Prism Base</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static VerticalPrismBase: number = 4587574;
   /// <summary>
   /// <para>(0046,0038) Lens Segment Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static LensSegmentType: number = 4587576;
   /// <summary>
   /// <para>(0046,0040) Optical Transmittance</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static OpticalTransmittance: number = 4587584;
   /// <summary>
   /// <para>(0046,0042) Channel Width</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static ChannelWidth: number = 4587586;
   /// <summary>
   /// <para>(0046,0044) Pupil Size</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static PupilSize: number = 4587588;
   /// <summary>
   /// <para>(0046,0046) Corneal Size</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static CornealSize: number = 4587590;
   /// <summary>
   /// <para>(0046,0050) Autorefraction Right Eye Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AutorefractionRightEyeSequence: number = 4587600;
   /// <summary>
   /// <para>(0046,0052) Autorefraction Left Eye Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AutorefractionLeftEyeSequence: number = 4587602;
   /// <summary>
   /// <para>(0046,0060) Distance Pupillary Distance</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static DistancePupillaryDistance: number = 4587616;
   /// <summary>
   /// <para>(0046,0062) Near Pupillary Distance</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static NearPupillaryDistance: number = 4587618;
   /// <summary>
   /// <para>(0046,0063) Intermediate Pupillary Distance</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static IntermediatePupillaryDistance: number = 4587619;
   /// <summary>
   /// <para>(0046,0064) Other Pupillary Distance</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static OtherPupillaryDistance: number = 4587620;
   /// <summary>
   /// <para>(0046,0070) Keratometry Right Eye Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static KeratometryRightEyeSequence: number = 4587632;
   /// <summary>
   /// <para>(0046,0071) Keratometry Left Eye Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static KeratometryLeftEyeSequence: number = 4587633;
   /// <summary>
   /// <para>(0046,0074) Steep Keratometric Axis Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SteepKeratometricAxisSequence: number = 4587636;
   /// <summary>
   /// <para>(0046,0075) Radius of Curvature</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static RadiusOfCurvature: number = 4587637;
   /// <summary>
   /// <para>(0046,0076) Keratometric Power</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static KeratometricPower: number = 4587638;
   /// <summary>
   /// <para>(0046,0077) Keratometric Axis</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static KeratometricAxis: number = 4587639;
   /// <summary>
   /// <para>(0046,0080) Flat Keratometric Axis Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FlatKeratometricAxisSequence: number = 4587648;
   /// <summary>
   /// <para>(0046,0092) Background Color</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BackgroundColor: number = 4587666;
   /// <summary>
   /// <para>(0046,0094) Optotype</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static Optotype: number = 4587668;
   /// <summary>
   /// <para>(0046,0095) Optotype Presentation</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static OptotypePresentation: number = 4587669;
   /// <summary>
   /// <para>(0046,0097) Subjective Refraction Right Eye Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SubjectiveRefractionRightEyeSequence: number = 4587671;
   /// <summary>
   /// <para>(0046,0098) Subjective Refraction Left Eye Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SubjectiveRefractionLeftEyeSequence: number = 4587672;
   /// <summary>
   /// <para>(0046,0100) Add Near Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AddNearSequence: number = 4587776;
   /// <summary>
   /// <para>(0046,0101) Add Intermediate Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AddIntermediateSequence: number = 4587777;
   /// <summary>
   /// <para>(0046,0102) Add Other Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AddOtherSequence: number = 4587778;
   /// <summary>
   /// <para>(0046,0104) Add Power</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static AddPower: number = 4587780;
   /// <summary>
   /// <para>(0046,0106) Viewing Distance</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static ViewingDistance: number = 4587782;
   /// <summary>
   /// <para>(0046,0121) Visual Acuity Type Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static VisualAcuityTypeCodeSequence: number = 4587809;
   /// <summary>
   /// <para>(0046,0122) Visual Acuity Right Eye Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static VisualAcuityRightEyeSequence: number = 4587810;
   /// <summary>
   /// <para>(0046,0123) Visual Acuity Left Eye Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static VisualAcuityLeftEyeSequence: number = 4587811;
   /// <summary>
   /// <para>(0046,0124) Visual Acuity Both Eyes Open Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static VisualAcuityBothEyesOpenSequence: number = 4587812;
   /// <summary>
   /// <para>(0046,0125) Viewing Distance Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ViewingDistanceType: number = 4587813;
   /// <summary>
   /// <para>(0046,0135) Visual Acuity Modifiers</para>
   /// <para> VR: SS VM:2</para>
   /// </summary>
   public static VisualAcuityModifiers: number = 4587829;
   /// <summary>
   /// <para>(0046,0137) Decimal Visual Acuity</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static DecimalVisualAcuity: number = 4587831;
   /// <summary>
   /// <para>(0046,0139) Optotype Detailed Definition</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static OptotypeDetailedDefinition: number = 4587833;
   /// <summary>
   /// <para>(0046,0145) Referenced Refractive Measurements Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedRefractiveMeasurementsSequence: number = 4587845;
   /// <summary>
   /// <para>(0046,0146) Sphere Power</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static SpherePower: number = 4587846;
   /// <summary>
   /// <para>(0046,0147) Cylinder Power</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static CylinderPower: number = 4587847;
   /// <summary>
   /// <para>(0048,0001) Imaged Volume Width</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static ImagedVolumeWidth: number = 4718593;
   /// <summary>
   /// <para>(0048,0002) Imaged Volume Height</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static ImagedVolumeHeight: number = 4718594;
   /// <summary>
   /// <para>(0048,0003) Imaged Volume Depth</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static ImagedVolumeDepth: number = 4718595;
   /// <summary>
   /// <para>(0048,0006) Total Pixel Matrix Columns</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static TotalPixelMatrixColumns: number = 4718598;
   /// <summary>
   /// <para>(0048,0007) Total Pixel Matrix Rows</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static TotalPixelMatrixRows: number = 4718599;
   /// <summary>
   /// <para>(0048,0008) Total Pixel Matrix Origin Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static TotalPixelMatrixOriginSequence: number = 4718600;
   /// <summary>
   /// <para>(0048,0010) Specimen Label in Image</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SpecimenLabelInImage: number = 4718608;
   /// <summary>
   /// <para>(0048,0011) Focus Method</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FocusMethod: number = 4718609;
   /// <summary>
   /// <para>(0048,0012) Extended Depth of Field</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ExtendedDepthOfField: number = 4718610;
   /// <summary>
   /// <para>(0048,0013) Number of Focal Planes</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfFocalPlanes: number = 4718611;
   /// <summary>
   /// <para>(0048,0014) Distance Between Focal Planes</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static DistanceBetweenFocalPlanes: number = 4718612;
   /// <summary>
   /// <para>(0048,0015) Recommended Absent Pixel CIELab Value</para>
   /// <para> VR: US VM:3</para>
   /// </summary>
   public static RecommendedAbsentPixelCielabValue: number = 4718613;
   /// <summary>
   /// <para>(0048,0100) Illuminator Type Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IlluminatorTypeCodeSequence: number = 4718848;
   /// <summary>
   /// <para>(0048,0102) Image Orientation (Slide)</para>
   /// <para> VR: DS VM:6</para>
   /// </summary>
   public static ImageOrientationSlide: number = 4718850;
   /// <summary>
   /// <para>(0048,0105) Optical Path Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OpticalPathSequence: number = 4718853;
   /// <summary>
   /// <para>(0048,0106) Optical Path Identifier</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static OpticalPathIdentifier: number = 4718854;
   /// <summary>
   /// <para>(0048,0107) Optical Path Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static OpticalPathDescription: number = 4718855;
   /// <summary>
   /// <para>(0048,0108) Illumination Color Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IlluminationColorCodeSequence: number = 4718856;
   /// <summary>
   /// <para>(0048,0110) Specimen Reference Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SpecimenReferenceSequence: number = 4718864;
   /// <summary>
   /// <para>(0048,0111) Condenser Lens Power</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static CondenserLensPower: number = 4718865;
   /// <summary>
   /// <para>(0048,0112) Objective Lens Power</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ObjectiveLensPower: number = 4718866;
   /// <summary>
   /// <para>(0048,0113) Objective Lens Numerical Aperture</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ObjectiveLensNumericalAperture: number = 4718867;
   /// <summary>
   /// <para>(0048,0120) Palette Color Lookup Table Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PaletteColorLookupTableSequence: number = 4718880;
   /// <summary>
   /// <para>(0048,0200) Referenced Image Navigation Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedImageNavigationSequence: number = 4719104;
   /// <summary>
   /// <para>(0048,0201) Top Left Hand Corner of Localizer Area</para>
   /// <para> VR: US VM:2</para>
   /// </summary>
   public static TopLeftHandCornerOfLocalizerArea: number = 4719105;
   /// <summary>
   /// <para>(0048,0202) Bottom Right Hand Corner of Localizer Area</para>
   /// <para> VR: US VM:2</para>
   /// </summary>
   public static BottomRightHandCornerOfLocalizerArea: number = 4719106;
   /// <summary>
   /// <para>(0048,0207) Optical Path Identification Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OpticalPathIdentificationSequence: number = 4719111;
   /// <summary>
   /// <para>(0048,021A) Plane Position (Slide) Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PlanePositionSlideSequence: number = 4719130;
   /// <summary>
   /// <para>(0048,021E) Row Position In Total Image Pixel Matrix</para>
   /// <para> VR: SL VM:1</para>
   /// </summary>
   public static RowPositionInTotalImagePixelMatrix: number = 4719134;
   /// <summary>
   /// <para>(0048,021F) Column Position In Total Image Pixel Matrix</para>
   /// <para> VR: SL VM:1</para>
   /// </summary>
   public static ColumnPositionInTotalImagePixelMatrix: number = 4719135;
   /// <summary>
   /// <para>(0048,0301) Pixel Origin Interpretation</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PixelOriginInterpretation: number = 4719361;
   /// <summary>
   /// <para>(0050,0004) Calibration Image</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CalibrationImage: number = 5242884;
   /// <summary>
   /// <para>(0050,0010) Device Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DeviceSequence: number = 5242896;
   /// <summary>
   /// <para>(0050,0012) Container Component Type Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ContainerComponentTypeCodeSequence: number = 5242898;
   /// <summary>
   /// <para>(0050,0013) Container Component Thickness</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static ContainerComponentThickness: number = 5242899;
   /// <summary>
   /// <para>(0050,0014) Device Length</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DeviceLength: number = 5242900;
   /// <summary>
   /// <para>(0050,0015) Container Component Width</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static ContainerComponentWidth: number = 5242901;
   /// <summary>
   /// <para>(0050,0016) Device Diameter</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DeviceDiameter: number = 5242902;
   /// <summary>
   /// <para>(0050,0017) Device Diameter Units</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DeviceDiameterUnits: number = 5242903;
   /// <summary>
   /// <para>(0050,0018) Device Volume</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DeviceVolume: number = 5242904;
   /// <summary>
   /// <para>(0050,0019) Inter-Marker Distance</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static InterMarkerDistance: number = 5242905;
   /// <summary>
   /// <para>(0050,001A) Container Component Material</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ContainerComponentMaterial: number = 5242906;
   /// <summary>
   /// <para>(0050,001B) Container Component ID</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ContainerComponentId: number = 5242907;
   /// <summary>
   /// <para>(0050,001C) Container Component Length</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static ContainerComponentLength: number = 5242908;
   /// <summary>
   /// <para>(0050,001D) Container Component Diameter</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static ContainerComponentDiameter: number = 5242909;
   /// <summary>
   /// <para>(0050,001E) Container Component Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ContainerComponentDescription: number = 5242910;
   /// <summary>
   /// <para>(0050,0020) Device Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static DeviceDescription: number = 5242912;
   /// <summary>
   /// <para>(0052,0001) Contrast/Bolus Ingredient Percent by Volume </para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static ContrastBolusIngredientPercentByVolume: number = 5373953;
   /// <summary>
   /// <para>(0052,0002) OCT Focal Distance</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static OctFocalDistance: number = 5373954;
   /// <summary>
   /// <para>(0052,0003) Beam Spot Size</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static BeamSpotSize: number = 5373955;
   /// <summary>
   /// <para>(0052,0004) Effective Refractive Index</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static EffectiveRefractiveIndex: number = 5373956;
   /// <summary>
   /// <para>(0052,0006) OCT Acquisition Domain</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static OctAcquisitionDomain: number = 5373958;
   /// <summary>
   /// <para>(0052,0007) OCT Optical Center Wavelength</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static OctOpticalCenterWavelength: number = 5373959;
   /// <summary>
   /// <para>(0052,0008) Axial Resolution</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static AxialResolution: number = 5373960;
   /// <summary>
   /// <para>(0052,0009) Ranging Depth</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static RangingDepth: number = 5373961;
   /// <summary>
   /// <para>(0052,0011) Aline Rate</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static AlineRate: number = 5373969;
   /// <summary>
   /// <para>(0052,0012) Alines Per Frame</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static AlinesPerFrame: number = 5373970;
   /// <summary>
   /// <para>(0052,0013) Catheter Rotational Rate</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static CatheterRotationalRate: number = 5373971;
   /// <summary>
   /// <para>(0052,0014) Aline Pixel Spacing</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static AlinePixelSpacing: number = 5373972;
   /// <summary>
   /// <para>(0052,0016) Mode of Percutaneous Access Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ModeOfPercutaneousAccessSequence: number = 5373974;
   /// <summary>
   /// <para>(0052,0025) Intravascular OCT Frame Type Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IntravascularOctFrameTypeSequence: number = 5373989;
   /// <summary>
   /// <para>(0052,0026) OCT Z Offset Applied</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static OctZOffsetApplied: number = 5373990;
   /// <summary>
   /// <para>(0052,0027) Intravascular Frame Content Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IntravascularFrameContentSequence: number = 5373991;
   /// <summary>
   /// <para>(0052,0028) Intravascular Longitudinal Distance</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static IntravascularLongitudinalDistance: number = 5373992;
   /// <summary>
   /// <para>(0052,0029) Intravascular OCT Frame Content Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IntravascularOctFrameContentSequence: number = 5373993;
   /// <summary>
   /// <para>(0052,0030) OCT Z Offset Correction</para>
   /// <para> VR: SS VM:1</para>
   /// </summary>
   public static OctZOffsetCorrection: number = 5374000;
   /// <summary>
   /// <para>(0052,0031) Catheter Direction of Rotation</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CatheterDirectionOfRotation: number = 5374001;
   /// <summary>
   /// <para>(0052,0033) Seam Line Location</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static SeamLineLocation: number = 5374003;
   /// <summary>
   /// <para>(0052,0034) First Aline Location</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static FirstAlineLocation: number = 5374004;
   /// <summary>
   /// <para>(0052,0036) Seam Line Index</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static SeamLineIndex: number = 5374006;
   /// <summary>
   /// <para>(0052,0038) Number of Padded Alines</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfPaddedAlines: number = 5374008;
   /// <summary>
   /// <para>(0052,0039) Interpolation Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static InterpolationType: number = 5374009;
   /// <summary>
   /// <para>(0052,003A) Refractive Index Applied</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RefractiveIndexApplied: number = 5374010;
   /// <summary>
   /// <para> (0054,0010) Energy Window Vector</para>
   /// <para> VR: US VM:1-n</para>
   /// </summary>
   public static EnergyWindowVector: number = 5505040;
   /// <summary>
   /// <para>(0054,0011) Number of Energy Windows</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfEnergyWindows: number = 5505041;
   /// <summary>
   /// <para>(0054,0012) Energy Window Information Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static EnergyWindowInformationSequence: number = 5505042;
   /// <summary>
   /// <para>(0054,0013) Energy Window Range Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static EnergyWindowRangeSequence: number = 5505043;
   /// <summary>
   /// <para>(0054,0014) Energy Window Lower Limit</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static EnergyWindowLowerLimit: number = 5505044;
   /// <summary>
   /// <para>(0054,0015) Energy Window Upper Limit</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static EnergyWindowUpperLimit: number = 5505045;
   /// <summary>
   /// <para>(0054,0016) Radiopharmaceutical Information Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RadiopharmaceuticalInformationSequence: number = 5505046;
   /// <summary>
   /// <para>(0054,0017) Residual Syringe Counts</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ResidualSyringeCounts: number = 5505047;
   /// <summary>
   /// <para>(0054,0018) Energy Window Name</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static EnergyWindowName: number = 5505048;
   /// <summary>
   /// <para>(0054,0020) Detector Vector</para>
   /// <para> VR: US VM:1-n</para>
   /// </summary>
   public static DetectorVector: number = 5505056;
   /// <summary>
   /// <para>(0054,0021) Number of Detectors</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfDetectors: number = 5505057;
   /// <summary>
   /// <para>(0054,0022) Detector Information Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DetectorInformationSequence: number = 5505058;
   /// <summary>
   /// <para>(0054,0030) Phase Vector</para>
   /// <para> VR: US VM:1-n</para>
   /// </summary>
   public static PhaseVector: number = 5505072;
   /// <summary>
   /// <para>(0054,0031) Number of Phases</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfPhases: number = 5505073;
   /// <summary>
   /// <para>(0054,0032) Phase Information Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PhaseInformationSequence: number = 5505074;
   /// <summary>
   /// <para>(0054,0033) Number of Frames in Phase</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfFramesInPhase: number = 5505075;
   /// <summary>
   /// <para>(0054,0036) Phase Delay</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static PhaseDelay: number = 5505078;
   /// <summary>
   /// <para>(0054,0038) Pause Between Frames</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static PauseBetweenFrames: number = 5505080;
   /// <summary>
   /// <para>(0054,0039) Phase Description</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PhaseDescription: number = 5505081;
   /// <summary>
   /// <para>(0054,0050) Rotation Vector</para>
   /// <para> VR: US VM:1-n</para>
   /// </summary>
   public static RotationVector: number = 5505104;
   /// <summary>
   /// <para>(0054,0051) Number of Rotations</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfRotations: number = 5505105;
   /// <summary>
   /// <para>(0054,0052) Rotation Information Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RotationInformationSequence: number = 5505106;
   /// <summary>
   /// <para>(0054,0053) Number of Frames in Rotation</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfFramesInRotation: number = 5505107;
   /// <summary>
   /// <para>(0054,0060) R-R Interval Vector</para>
   /// <para> VR: US VM:1-n</para>
   /// </summary>
   public static RRIntervalVector: number = 5505120;
   /// <summary>
   /// <para>(0054,0061) Number of R-R Intervals</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfRRIntervals: number = 5505121;
   /// <summary>
   /// <para>(0054,0062) Gated Information Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static GatedInformationSequence: number = 5505122;
   /// <summary>
   /// <para>(0054,0063) Data Information Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DataInformationSequence: number = 5505123;
   /// <summary>
   /// <para>(0054,0070) Time Slot Vector</para>
   /// <para> VR: US VM:1-n</para>
   /// </summary>
   public static TimeSlotVector: number = 5505136;
   /// <summary>
   /// <para>(0054,0071) Number of Time Slots</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfTimeSlots: number = 5505137;
   /// <summary>
   /// <para>(0054,0072) Time Slot Information Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static TimeSlotInformationSequence: number = 5505138;
   /// <summary>
   /// <para>(0054,0073) Time Slot Time</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TimeSlotTime: number = 5505139;
   /// <summary>
   /// <para>(0054,0080) Slice Vector</para>
   /// <para> VR: US VM:1-n</para>
   /// </summary>
   public static SliceVector: number = 5505152;
   /// <summary>
   /// <para>(0054,0081) Number of Slices</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfSlices: number = 5505153;
   /// <summary>
   /// <para>(0054,0090) Angular View Vector</para>
   /// <para> VR: US VM:1-n</para>
   /// </summary>
   public static AngularViewVector: number = 5505168;
   /// <summary>
   /// <para>(0054,0100) Time Slice Vector</para>
   /// <para> VR: US VM:1-n</para>
   /// </summary>
   public static TimeSliceVector: number = 5505280;
   /// <summary>
   /// <para>(0054,0101) Number of Time Slices</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfTimeSlices: number = 5505281;
   /// <summary>
   /// <para>(0054,0200) Start Angle</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static StartAngle: number = 5505536;
   /// <summary>
   /// <para>(0054,0202) Type of Detector Motion</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TypeOfDetectorMotion: number = 5505538;
   /// <summary>
   /// <para>(0054,0210) Trigger Vector</para>
   /// <para> VR: IS VM:1-n</para>
   /// </summary>
   public static TriggerVector: number = 5505552;
   /// <summary>
   /// <para>(0054,0211) Number of Triggers in Phase</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfTriggersInPhase: number = 5505553;
   /// <summary>
   /// <para>(0054,0220) View Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ViewCodeSequence: number = 5505568;
   /// <summary>
   /// <para>(0054,0222) View Modifier Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ViewModifierCodeSequence: number = 5505570;
   /// <summary>
   /// <para>(0054,0300) Radionuclide Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RadionuclideCodeSequence: number = 5505792;
   /// <summary>
   /// <para>(0054,0302) Administration Route Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AdministrationRouteCodeSequence: number = 5505794;
   /// <summary>
   /// <para>(0054,0304) Radiopharmaceutical Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RadiopharmaceuticalCodeSequence: number = 5505796;
   /// <summary>
   /// <para>(0054,0306) Calibration Data Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static CalibrationDataSequence: number = 5505798;
   /// <summary>
   /// <para>(0054,0308) Energy Window Number</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static EnergyWindowNumber: number = 5505800;
   /// <summary>
   /// <para>(0054,0400) Image ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static ImageId: number = 5506048;
   /// <summary>
   /// <para>(0054,0410) Patient Orientation Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PatientOrientationCodeSequence: number = 5506064;
   /// <summary>
   /// <para>(0054,0412) Patient Orientation Modifier Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PatientOrientationModifierCodeSequence: number = 5506066;
   /// <summary>
   /// <para>(0054,0414) Patient Gantry Relationship Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PatientGantryRelationshipCodeSequence: number = 5506068;
   /// <summary>
   /// <para>(0054,0500) Slice Progression Direction</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SliceProgressionDirection: number = 5506304;
   /// <summary>
   /// <para>(0054,1000) Series Type</para>
   /// <para> VR: CS VM:2</para>
   /// </summary>
   public static SeriesType: number = 5509120;
   /// <summary>
   /// <para>(0054,1001) Units</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static Units: number = 5509121;
   /// <summary>
   /// <para>(0054,1002) Counts Source</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CountsSource: number = 5509122;
   /// <summary>
   /// <para>(0054,1004) Reprojection Method</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ReprojectionMethod: number = 5509124;
   /// <summary>
   /// <para>(0054,1006) SUV Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SuvType: number = 5509126;
   /// <summary>
   /// <para>(0054,1100) Randoms Correction Method</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RandomsCorrectionMethod: number = 5509376;
   /// <summary>
   /// <para>(0054,1101) Attenuation Correction Method</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static AttenuationCorrectionMethod: number = 5509377;
   /// <summary>
   /// <para>(0054,1102) Decay Correction</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DecayCorrection: number = 5509378;
   /// <summary>
   /// <para>(0054,1103) Reconstruction Method</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ReconstructionMethod: number = 5509379;
   /// <summary>
   /// <para>(0054,1104) Detector Lines of Response Used</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static DetectorLinesOfResponseUsed: number = 5509380;
   /// <summary>
   /// <para>(0054,1105) Scatter Correction Method</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ScatterCorrectionMethod: number = 5509381;
   /// <summary>
   /// <para>(0054,1200) Axial Acceptance</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static AxialAcceptance: number = 5509632;
   /// <summary>
   /// <para>(0054,1201) Axial Mash</para>
   /// <para> VR: IS VM:2</para>
   /// </summary>
   public static AxialMash: number = 5509633;
   /// <summary>
   /// <para>(0054,1202) Transverse Mash</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static TransverseMash: number = 5509634;
   /// <summary>
   /// <para>(0054,1203) Detector Element Size</para>
   /// <para> VR: DS VM:2</para>
   /// </summary>
   public static DetectorElementSize: number = 5509635;
   /// <summary>
   /// <para>(0054,1210) Coincidence Window Width</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static CoincidenceWindowWidth: number = 5509648;
   /// <summary>
   /// <para>(0054,1220) Secondary Counts Type</para>
   /// <para> VR: CS VM:1-n</para>
   /// </summary>
   public static SecondaryCountsType: number = 5509664;
   /// <summary>
   /// <para>(0054,1300) Frame Reference Time</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static FrameReferenceTime: number = 5509888;
   /// <summary>
   /// <para>(0054,1310) Primary (Prompts) Counts Accumulated</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static PrimaryPromptsCountsAccumulated: number = 5509904;
   /// <summary>
   /// <para>(0054,1311) Secondary Counts Accumulated</para>
   /// <para> VR: IS VM:1-n</para>
   /// </summary>
   public static SecondaryCountsAccumulated: number = 5509905;
   /// <summary>
   /// <para>(0054,1320) Slice Sensitivity Factor</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SliceSensitivityFactor: number = 5509920;
   /// <summary>
   /// <para>(0054,1321) Decay Factor</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DecayFactor: number = 5509921;
   /// <summary>
   /// <para>(0054,1322) Dose Calibration Factor</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DoseCalibrationFactor: number = 5509922;
   /// <summary>
   /// <para>(0054,1323) Scatter Fraction Factor</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ScatterFractionFactor: number = 5509923;
   /// <summary>
   /// <para>(0054,1324) Dead Time Factor</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DeadTimeFactor: number = 5509924;
   /// <summary>
   /// <para>(0054,1330) Image Index</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ImageIndex: number = 5509936;
   /// <summary>
   /// <para>(0054,1400) Counts Included</para>
   /// <para> VR: CS VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CountsIncludedRetired: number = 5510144;
   /// <summary>
   /// <para>(0054,1401) Dead Time Correction Flag</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DeadTimeCorrectionFlagRetired: number = 5510145;
   /// <summary>
   /// <para>(0060,3000) Histogram Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static HistogramSequence: number = 6303744;
   /// <summary>
   /// <para>(0060,3002) Histogram Number of Bins</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static HistogramNumberOfBins: number = 6303746;
   /// <summary>
   /// <para>(0060,3004) Histogram First Bin Value</para>
   /// <para> VR: US or SS VM:1</para>
   /// </summary>
   public static HistogramFirstBinValue: number = 6303748;
   /// <summary>
   /// <para>(0060,3006) Histogram Last Bin Value</para>
   /// <para> VR: US or SS VM:1</para>
   /// </summary>
   public static HistogramLastBinValue: number = 6303750;
   /// <summary>
   /// <para>(0060,3008) Histogram Bin Width</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static HistogramBinWidth: number = 6303752;
   /// <summary>
   /// <para>(0060,3010) Histogram Explanation</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static HistogramExplanation: number = 6303760;
   /// <summary>
   /// <para>(0060,3020) Histogram Data</para>
   /// <para> VR: UL VM:1-n</para>
   /// </summary>
   public static HistogramData: number = 6303776;
   /// <summary>
   /// <para>(0062,0001) Segmentation Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SegmentationType: number = 6422529;
   /// <summary>
   /// <para>(0062,0002) Segment Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SegmentSequence: number = 6422530;
   /// <summary>
   /// <para>(0062,0003) Segmented Property Category Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SegmentedPropertyCategoryCodeSequence: number = 6422531;
   /// <summary>
   /// <para>(0062,0004) Segment Number</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static SegmentNumber: number = 6422532;
   /// <summary>
   /// <para>(0062,0005) Segment Label</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static SegmentLabel: number = 6422533;
   /// <summary>
   /// <para>(0062,0006) Segment Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static SegmentDescription: number = 6422534;
   /// <summary>
   /// <para>(0062,0008) Segment Algorithm Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SegmentAlgorithmType: number = 6422536;
   /// <summary>
   /// <para>(0062,0009) Segment Algorithm Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static SegmentAlgorithmName: number = 6422537;
   /// <summary>
   /// <para>(0062,000A) Segment Identification Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SegmentIdentificationSequence: number = 6422538;
   /// <summary>
   /// <para>(0062,000B) Referenced Segment Number</para>
   /// <para> VR: US VM:1-n</para>
   /// </summary>
   public static ReferencedSegmentNumber: number = 6422539;
   /// <summary>
   /// <para>(0062,000C) Recommended Display Grayscale Value</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static RecommendedDisplayGrayscaleValue: number = 6422540;
   /// <summary>
   /// <para>(0062,000D) Recommended Display CIELab Value</para>
   /// <para> VR: US VM:3</para>
   /// </summary>
   public static RecommendedDisplayCielabValue: number = 6422541;
   /// <summary>
   /// <para>(0062,000E) Maximum Fractional Value</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static MaximumFractionalValue: number = 6422542;
   /// <summary>
   /// <para>(0062,000F) Segmented Property Type Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SegmentedPropertyTypeCodeSequence: number = 6422543;
   /// <summary>
   /// <para>(0062,0010) Segmentation Fractional Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SegmentationFractionalType: number = 6422544;
   /// <summary>
   /// <para>(0064,0002) Deformable Registration Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DeformableRegistrationSequence: number = 6553602;
   /// <summary>
   /// <para>(0064,0003) Source Frame of Reference UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static SourceFrameOfReferenceUid: number = 6553603;
   /// <summary>
   /// <para>(0064,0005) Deformable Registration Grid Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DeformableRegistrationGridSequence: number = 6553605;
   /// <summary>
   /// <para>(0064,0007) Grid Dimensions</para>
   /// <para> VR: UL VM:3</para>
   /// </summary>
   public static GridDimensions: number = 6553607;
   /// <summary>
   /// <para>(0064,0008) Grid Resolution</para>
   /// <para> VR: FD VM:3</para>
   /// </summary>
   public static GridResolution: number = 6553608;
   /// <summary>
   /// <para>(0064,0009) Vector Grid Data</para>
   /// <para> VR: OF VM:1</para>
   /// </summary>
   public static VectorGridData: number = 6553609;
   /// <summary>
   /// <para>(0064,000F) Pre Deformation Matrix Registration Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PreDeformationMatrixRegistrationSequence: number = 6553615;
   /// <summary>
   /// <para>(0064,0010) Post Deformation Matrix Registration Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PostDeformationMatrixRegistrationSequence: number = 6553616;
   /// <summary>
   /// <para>(0066,0001) Number of Surfaces</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static NumberOfSurfaces: number = 6684673;
   /// <summary>
   /// <para>(0066,0002) Surface Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SurfaceSequence: number = 6684674;
   /// <summary>
   /// <para>(0066,0003) Surface Number</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static SurfaceNumber: number = 6684675;
   /// <summary>
   /// <para>(0066,0004) Surface Comments</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static SurfaceComments: number = 6684676;
   /// <summary>
   /// <para>(0066,0009) Surface Processing</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SurfaceProcessing: number = 6684681;
   /// <summary>
   /// <para>(0066,000A) Surface Processing Ratio</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static SurfaceProcessingRatio: number = 6684682;
   /// <summary>
   /// <para>(0066,000B) Surface Processing Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static SurfaceProcessingDescription: number = 6684683;
   /// <summary>
   /// <para>(0066,000C) Recommended Presentation Opacity</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static RecommendedPresentationOpacity: number = 6684684;
   /// <summary>
   /// <para>(0066,000D) Recommended Presentation Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RecommendedPresentationType: number = 6684685;
   /// <summary>
   /// <para>(0066,000E) Finite Volume</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FiniteVolume: number = 6684686;
   /// <summary>
   /// <para>(0066,0010) Manifold</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static Manifold: number = 6684688;
   /// <summary>
   /// <para>(0066,0011) Surface Points Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SurfacePointsSequence: number = 6684689;
   /// <summary>
   /// <para>(0066,0012) Surface Points Normals Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SurfacePointsNormalsSequence: number = 6684690;
   /// <summary>
   /// <para>(0066,0013) Surface Mesh Primitives Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SurfaceMeshPrimitivesSequence: number = 6684691;
   /// <summary>
   /// <para>(0066,0015) Number of Surface Points</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static NumberOfSurfacePoints: number = 6684693;
   /// <summary>
   /// <para>(0066,0016) Point Coordinates Data</para>
   /// <para> VR: OF VM:1</para>
   /// </summary>
   public static PointCoordinatesData: number = 6684694;
   /// <summary>
   /// <para>(0066,0017) Point Position Accuracy</para>
   /// <para> VR: FL VM:3</para>
   /// </summary>
   public static PointPositionAccuracy: number = 6684695;
   /// <summary>
   /// <para>(0066,0018) Mean Point Distance</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static MeanPointDistance: number = 6684696;
   /// <summary>
   /// <para>(0066,0019) Maximum Point Distance</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static MaximumPointDistance: number = 6684697;
   /// <summary>
   /// <para>(0066,001A) Points Bounding Box Coordinates</para>
   /// <para> VR: FL VM:6</para>
   /// </summary>
   public static PointsBoundingBoxCoordinates: number = 6684698;
   /// <summary>
   /// <para>(0066,001B) Axis of Rotation</para>
   /// <para> VR: FL VM:3</para>
   /// </summary>
   public static AxisOfRotation: number = 6684699;
   /// <summary>
   /// <para>(0066,001C) Center of Rotation</para>
   /// <para> VR: FL VM:3</para>
   /// </summary>
   public static CenterOfRotation: number = 6684700;
   /// <summary>
   /// <para>(0066,001E) Number of Vectors</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static NumberOfVectors: number = 6684702;
   /// <summary>
   /// <para>(0066,001F) Vector Dimensionality</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static VectorDimensionality: number = 6684703;
   /// <summary>
   /// <para>(0066,0020) Vector Accuracy</para>
   /// <para> VR: FL VM:1-n</para>
   /// </summary>
   public static VectorAccuracy: number = 6684704;
   /// <summary>
   /// <para>(0066,0021) Vector Coordinate Data</para>
   /// <para> VR: OF VM:1</para>
   /// </summary>
   public static VectorCoordinateData: number = 6684705;
   /// <summary>
   /// <para>(0066,0023) Triangle Point Index List</para>
   /// <para> VR: OW VM:1</para>
   /// </summary>
   public static TrianglePointIndexList: number = 6684707;
   /// <summary>
   /// <para>(0066,0024) Edge Point Index List</para>
   /// <para> VR: OW VM:1</para>
   /// </summary>
   public static EdgePointIndexList: number = 6684708;
   /// <summary>
   /// <para>(0066,0025) Vertex Point Index List</para>
   /// <para> VR: OW VM:1</para>
   /// </summary>
   public static VertexPointIndexList: number = 6684709;
   /// <summary>
   /// <para>(0066,0026) Triangle Strip Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static TriangleStripSequence: number = 6684710;
   /// <summary>
   /// <para>(0066,0027) Triangle Fan Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static TriangleFanSequence: number = 6684711;
   /// <summary>
   /// <para>(0066,0028) Line Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static LineSequence: number = 6684712;
   /// <summary>
   /// <para>(0066,0029) Primitive Point Index List</para>
   /// <para> VR: OW VM:1</para>
   /// </summary>
   public static PrimitivePointIndexList: number = 6684713;
   /// <summary>
   /// <para>(0066,002A) Surface Count</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static SurfaceCount: number = 6684714;
   /// <summary>
   /// <para>(0066,002B) Referenced Surface Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedSurfaceSequence: number = 6684715;
   /// <summary>
   /// <para>(0066,002C) Referenced Surface Number</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static ReferencedSurfaceNumber: number = 6684716;
   /// <summary>
   /// <para>(0066,002D) Segment Surface Generation Algorithm Identification Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SegmentSurfaceGenerationAlgorithmIdentificationSequence: number = 6684717;
   /// <summary>
   /// <para>(0066,002E) Segment Surface Source Instance Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SegmentSurfaceSourceInstanceSequence: number = 6684718;
   /// <summary>
   /// <para>(0066,002F) Algorithm Family Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AlgorithmFamilyCodeSequence: number = 6684719;
   /// <summary>
   /// <para>(0066,0030) Algorithm Name Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AlgorithmNameCodeSequence: number = 6684720;
   /// <summary>
   /// <para>(0066,0031) Algorithm Version</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static AlgorithmVersion: number = 6684721;
   /// <summary>
   /// <para>(0066,0032) Algorithm Parameters</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static AlgorithmParameters: number = 6684722;
   /// <summary>
   /// <para>(0066,0034) Facet Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FacetSequence: number = 6684724;
   /// <summary>
   /// <para>(0066,0035) Surface Processing Algorithm Identification Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SurfaceProcessingAlgorithmIdentificationSequence: number = 6684725;
   /// <summary>
   /// <para>(0066,0036) Algorithm Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static AlgorithmName: number = 6684726;
   /// <summary>
   /// <para>(0068,6210) Implant Size</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ImplantSize: number = 6840848;
   /// <summary>
   /// <para>(0068,6221) Implant Template Version</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ImplantTemplateVersion: number = 6840865;
   /// <summary>
   /// <para>(0068,6222) Replaced Implant Template Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReplacedImplantTemplateSequence: number = 6840866;
   /// <summary>
   /// <para>(0068,6223) Implant Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ImplantType: number = 6840867;
   /// <summary>
   /// <para>(0068,6224) Derivation Implant Template Sequence </para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DerivationImplantTemplateSequence: number = 6840868;
   /// <summary>
   /// <para>(0068,6225) Original Implant Template Sequence </para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OriginalImplantTemplateSequence: number = 6840869;
   /// <summary>
   /// <para>(0068,6226) Effective DateTime</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static EffectiveDatetime: number = 6840870;
   /// <summary>
   /// <para>(0068,6230) Implant Target Anatomy Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ImplantTargetAnatomySequence: number = 6840880;
   /// <summary>
   /// <para>(0068,6260) Information From Manufacturer Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static InformationFromManufacturerSequence: number = 6840928;
   /// <summary>
   /// <para>(0068,6265) Notification From Manufacturer Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static NotificationFromManufacturerSequence: number = 6840933;
   /// <summary>
   /// <para>(0068,6270) Information Issue DateTime</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static InformationIssueDatetime: number = 6840944;
   /// <summary>
   /// <para>(0068,6280) Information Summary</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static InformationSummary: number = 6840960;
   /// <summary>
   /// <para>(0068,62A0) Implant Regulatory Disapproval Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ImplantRegulatoryDisapprovalCodeSequence: number = 6840992;
   /// <summary>
   /// <para>(0068,62A5) Overall Template Spatial Tolerance</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static OverallTemplateSpatialTolerance: number = 6840997;
   /// <summary>
   /// <para>(0068,62C0) HPGL Document Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static HpglDocumentSequence: number = 6841024;
   /// <summary>
   /// <para>(0068,62D0) HPGL Document ID</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static HpglDocumentId: number = 6841040;
   /// <summary>
   /// <para>(0068,62D5) HPGL Document Label</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static HpglDocumentLabel: number = 6841045;
   /// <summary>
   /// <para>(0068,62E0) View Orientation Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ViewOrientationCodeSequence: number = 6841056;
   /// <summary>
   /// <para>(0068,62F0) View Orientation Modifier</para>
   /// <para> VR: FD VM:9</para>
   /// </summary>
   public static ViewOrientationModifier: number = 6841072;
   /// <summary>
   /// <para>(0068,62F2) HPGL Document Scaling</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static HpglDocumentScaling: number = 6841074;
   /// <summary>
   /// <para>(0068,6300) HPGL Document</para>
   /// <para> VR: OB VM:1</para>
   /// </summary>
   public static HpglDocument: number = 6841088;
   /// <summary>
   /// <para>(0068,6310) HPGL Contour Pen Number</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static HpglContourPenNumber: number = 6841104;
   /// <summary>
   /// <para>(0068,6320) HPGL Pen Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static HpglPenSequence: number = 6841120;
   /// <summary>
   /// <para>(0068,6330) HPGL Pen Number</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static HpglPenNumber: number = 6841136;
   /// <summary>
   /// <para>(0068,6340) HPGL Pen Label</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static HpglPenLabel: number = 6841152;
   /// <summary>
   /// <para>(0068,6345) HPGL Pen Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static HpglPenDescription: number = 6841157;
   /// <summary>
   /// <para>(0068,6346) Recommended Rotation Point</para>
   /// <para> VR: FD VM:2</para>
   /// </summary>
   public static RecommendedRotationPoint: number = 6841158;
   /// <summary>
   /// <para>(0068,6347) Bounding Rectangle</para>
   /// <para> VR: FD VM:4</para>
   /// </summary>
   public static BoundingRectangle: number = 6841159;
   /// <summary>
   /// <para>(0068,6350) Implant Template 3D Model Surface Number</para>
   /// <para> VR: US VM:1-n</para>
   /// </summary>
   public static ImplantTemplate3dModelSurfaceNumber: number = 6841168;
   /// <summary>
   /// <para>(0068,6360) Surface Model Description Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SurfaceModelDescriptionSequence: number = 6841184;
   /// <summary>
   /// <para>(0068,6380) Surface Model Label</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static SurfaceModelLabel: number = 6841216;
   /// <summary>
   /// <para>(0068,6390) Surface Model Scaling Factor</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static SurfaceModelScalingFactor: number = 6841232;
   /// <summary>
   /// <para>(0068,63A0) Materials Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MaterialsCodeSequence: number = 6841248;
   /// <summary>
   /// <para>(0068,63A4) Coating Materials Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static CoatingMaterialsCodeSequence: number = 6841252;
   /// <summary>
   /// <para>(0068,63A8) Implant Type Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ImplantTypeCodeSequence: number = 6841256;
   /// <summary>
   /// <para>(0068,63AC) Fixation Method Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FixationMethodCodeSequence: number = 6841260;
   /// <summary>
   /// <para>(0068,63B0) Mating Feature Sets Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MatingFeatureSetsSequence: number = 6841264;
   /// <summary>
   /// <para>(0068,63C0) Mating Feature Set ID</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static MatingFeatureSetId: number = 6841280;
   /// <summary>
   /// <para>(0068,63D0) Mating Feature Set Label</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static MatingFeatureSetLabel: number = 6841296;
   /// <summary>
   /// <para>(0068,63E0) Mating Feature Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MatingFeatureSequence: number = 6841312;
   /// <summary>
   /// <para>(0068,63F0) Mating Feature ID</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static MatingFeatureId: number = 6841328;
   /// <summary>
   /// <para>(0068,6400) Mating Feature Degree of Freedom Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MatingFeatureDegreeOfFreedomSequence: number = 6841344;
   /// <summary>
   /// <para>(0068,6410) Degree of Freedom ID</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static DegreeOfFreedomId: number = 6841360;
   /// <summary>
   /// <para>(0068,6420) Degree of Freedom Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DegreeOfFreedomType: number = 6841376;
   /// <summary>
   /// <para>(0068,6430) 2D Mating Feature Coordinates Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static TwoDMatingFeatureCoordinatesSequence: number = 6841392;
   /// <summary>
   /// <para>(0068,6440) Referenced HPGL Document ID</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ReferencedHpglDocumentId: number = 6841408;
   /// <summary>
   /// <para>(0068,6450) 2D Mating Point</para>
   /// <para> VR: FD VM:2</para>
   /// </summary>
   public static TwoDMatingPoint: number = 6841424;
   /// <summary>
   /// <para>(0068,6460) 2D Mating Axes</para>
   /// <para> VR: FD VM:4</para>
   /// </summary>
   public static TwoDMatingAxes: number = 6841440;
   /// <summary>
   /// <para>(0068,6470) 2D Degree of Freedom Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static TwoDDegreeOfFreedomSequence: number = 6841456;
   /// <summary>
   /// <para>(0068,6490) 3D Degree of Freedom Axis</para>
   /// <para> VR: FD VM:3</para>
   /// </summary>
   public static ThreeDDegreeOfFreedomAxis: number = 6841488;
   /// <summary>
   /// <para>(0068,64A0) Range of Freedom</para>
   /// <para> VR: FD VM:2</para>
   /// </summary>
   public static RangeOfFreedom: number = 6841504;
   /// <summary>
   /// <para>(0068,64C0) 3D Mating Point</para>
   /// <para> VR: FD VM:3</para>
   /// </summary>
   public static ThreeDMatingPoint: number = 6841536;
   /// <summary>
   /// <para>(0068,64D0) 3D Mating Axes</para>
   /// <para> VR: FD VM:9</para>
   /// </summary>
   public static ThreeDMatingAxes: number = 6841552;
   /// <summary>
   /// <para>(0068,64F0) 2D Degree of Freedom Axis</para>
   /// <para> VR: FD VM:3</para>
   /// </summary>
   public static TwoDDegreeOfFreedomAxis: number = 6841584;
   /// <summary>
   /// <para>(0068,6500) Planning Landmark Point Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PlanningLandmarkPointSequence: number = 6841600;
   /// <summary>
   /// <para>(0068,6510) Planning Landmark Line Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PlanningLandmarkLineSequence: number = 6841616;
   /// <summary>
   /// <para>(0068,6520) Planning Landmark Plane Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PlanningLandmarkPlaneSequence: number = 6841632;
   /// <summary>
   /// <para>(0068,6530) Planning Landmark ID</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static PlanningLandmarkId: number = 6841648;
   /// <summary>
   /// <para>(0068,6540) Planning Landmark Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static PlanningLandmarkDescription: number = 6841664;
   /// <summary>
   /// <para>(0068,6545) Planning Landmark Identification Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PlanningLandmarkIdentificationCodeSequence: number = 6841669;
   /// <summary>
   /// <para>(0068,6550) 2D Point Coordinates Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static TwoDPointCoordinatesSequence: number = 6841680;
   /// <summary>
   /// <para>(0068,6560) 2D Point Coordinates</para>
   /// <para> VR: FD VM:2</para>
   /// </summary>
   public static TwoDPointCoordinates: number = 6841696;
   /// <summary>
   /// <para>(0068,6590) 3D Point Coordinates</para>
   /// <para> VR: FD VM:3</para>
   /// </summary>
   public static ThreeDPointCoordinates: number = 6841744;
   /// <summary>
   /// <para>(0068,65A0) 2D Line Coordinates Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static TwoDLineCoordinatesSequence: number = 6841760;
   /// <summary>
   /// <para>(0068,65B0) 2D Line Coordinates</para>
   /// <para> VR: FD VM:4</para>
   /// </summary>
   public static TwoDLineCoordinates: number = 6841776;
   /// <summary>
   /// <para>(0068,65D0) 3D Line Coordinates</para>
   /// <para> VR: FD VM:6</para>
   /// </summary>
   public static ThreeDLineCoordinates: number = 6841808;
   /// <summary>
   /// <para>(0068,65E0) 2D Plane Coordinates Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static TwoDPlaneCoordinatesSequence: number = 6841824;
   /// <summary>
   /// <para>(0068,65F0) 2D Plane Intersection</para>
   /// <para> VR: FD VM:4</para>
   /// </summary>
   public static TwoDPlaneIntersection: number = 6841840;
   /// <summary>
   /// <para>(0068,6610) 3D Plane Origin</para>
   /// <para> VR: FD VM:3</para>
   /// </summary>
   public static ThreeDPlaneOrigin: number = 6841872;
   /// <summary>
   /// <para>(0068,6620) 3D Plane Normal</para>
   /// <para> VR: FD VM:3</para>
   /// </summary>
   public static ThreeDPlaneNormal: number = 6841888;
   /// <summary>
   /// <para>(0070,0001) Graphic Annotation Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static GraphicAnnotationSequence: number = 7340033;
   /// <summary>
   /// <para>(0070,0002) Graphic Layer</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static GraphicLayer: number = 7340034;
   /// <summary>
   /// <para>(0070,0003) Bounding Box Annotation Units</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BoundingBoxAnnotationUnits: number = 7340035;
   /// <summary>
   /// <para>(0070,0004) Anchor Point Annotation Units</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AnchorPointAnnotationUnits: number = 7340036;
   /// <summary>
   /// <para>(0070,0005) Graphic Annotation Units</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static GraphicAnnotationUnits: number = 7340037;
   /// <summary>
   /// <para>(0070,0006) Unformatted Text Value</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static UnformattedTextValue: number = 7340038;
   /// <summary>
   /// <para>(0070,0008) Text Object Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static TextObjectSequence: number = 7340040;
   /// <summary>
   /// <para>(0070,0009) Graphic Object Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static GraphicObjectSequence: number = 7340041;
   /// <summary>
   /// <para>(0070,0010) Bounding Box Top Left Hand Corner</para>
   /// <para> VR: FL VM:2</para>
   /// </summary>
   public static BoundingBoxTopLeftHandCorner: number = 7340048;
   /// <summary>
   /// <para>(0070,0011) Bounding Box Bottom Right Hand Corner</para>
   /// <para> VR: FL VM:2</para>
   /// </summary>
   public static BoundingBoxBottomRightHandCorner: number = 7340049;
   /// <summary>
   /// <para>(0070,0012) Bounding Box Text Horizontal Justification</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BoundingBoxTextHorizontalJustification: number = 7340050;
   /// <summary>
   /// <para>(0070,0014) Anchor Point</para>
   /// <para> VR: FL VM:2</para>
   /// </summary>
   public static AnchorPoint: number = 7340052;
   /// <summary>
   /// <para>(0070,0015) Anchor Point Visibility</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AnchorPointVisibility: number = 7340053;
   /// <summary>
   /// <para>(0070,0020) Graphic Dimensions </para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static GraphicDimensions: number = 7340064;
   /// <summary>
   /// <para>(0070,0021) Number of Graphic Points</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfGraphicPoints: number = 7340065;
   /// <summary>
   /// <para>(0070,0022) Graphic Data</para>
   /// <para> VR: FL VM:2-n</para>
   /// </summary>
   public static GraphicData: number = 7340066;
   /// <summary>
   /// <para>(0070,0023) Graphic Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static GraphicType: number = 7340067;
   /// <summary>
   /// <para>(0070,0024) Graphic Filled</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static GraphicFilled: number = 7340068;
   /// <summary>
   /// <para>(0070,0040) Image Rotation (Retired)</para>
   /// <para> VR: IS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ImageRotationRetired: number = 7340096;
   /// <summary>
   /// <para>(0070,0041) Image Horizontal Flip</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ImageHorizontalFlip: number = 7340097;
   /// <summary>
   /// <para>(0070,0042) Image Rotation </para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ImageRotation: number = 7340098;
   /// <summary>
   /// <para>(0070,0050) Displayed Area Top Left Hand Corner (Trial)</para>
   /// <para> VR: US VM:2</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DisplayedAreaTopLeftHandCornerTrialRetired: number = 7340112;
   /// <summary>
   /// <para>(0070,0051) Displayed Area Bottom Right Hand Corner (Trial)</para>
   /// <para> VR: US VM:2</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DisplayedAreaBottomRightHandCornerTrialRetired: number = 7340113;
   /// <summary>
   /// <para>(0070,0052) Displayed Area Top Left Hand Corner</para>
   /// <para> VR: SL VM:2</para>
   /// </summary>
   public static DisplayedAreaTopLeftHandCorner: number = 7340114;
   /// <summary>
   /// <para>(0070,0053) Displayed Area Bottom Right Hand Corner</para>
   /// <para> VR: SL VM:2</para>
   /// </summary>
   public static DisplayedAreaBottomRightHandCorner: number = 7340115;
   /// <summary>
   /// <para>(0070,005A) Displayed Area Selection Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DisplayedAreaSelectionSequence: number = 7340122;
   /// <summary>
   /// <para>(0070,0060) Graphic Layer Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static GraphicLayerSequence: number = 7340128;
   /// <summary>
   /// <para>(0070,0062) Graphic Layer Order</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static GraphicLayerOrder: number = 7340130;
   /// <summary>
   /// <para>(0070,0066) Graphic Layer Recommended Display Grayscale Value</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static GraphicLayerRecommendedDisplayGrayscaleValue: number = 7340134;
   /// <summary>
   /// <para>(0070,0067) Graphic Layer Recommended Display RGB Value</para>
   /// <para> VR: US VM:3</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static GraphicLayerRecommendedDisplayRgbValueRetired: number = 7340135;
   /// <summary>
   /// <para>(0070,0068) Graphic Layer Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static GraphicLayerDescription: number = 7340136;
   /// <summary>
   /// <para>(0070,0080) Content Label</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ContentLabel: number = 7340160;
   /// <summary>
   /// <para>(0070,0081) Content Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ContentDescription: number = 7340161;
   /// <summary>
   /// <para>(0070,0082) Presentation Creation Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static PresentationCreationDate: number = 7340162;
   /// <summary>
   /// <para>(0070,0083) Presentation Creation Time</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static PresentationCreationTime: number = 7340163;
   /// <summary>
   /// <para>(0070,0084) Content Creator's Name</para>
   /// <para> VR: PN VM:1</para>
   /// </summary>
   public static ContentCreatorsName: number = 7340164;
   /// <summary>
   /// <para>(0070,0086) Content Creator's Identification Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ContentCreatorsIdentificationCodeSequence: number = 7340166;
   /// <summary>
   /// <para>(0070,0087) Alternate Content Description Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AlternateContentDescriptionSequence: number = 7340167;
   /// <summary>
   /// <para>(0070,0100) Presentation Size Mode</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PresentationSizeMode: number = 7340288;
   /// <summary>
   /// <para>(0070,0101) Presentation Pixel Spacing</para>
   /// <para> VR: DS VM:2</para>
   /// </summary>
   public static PresentationPixelSpacing: number = 7340289;
   /// <summary>
   /// <para>(0070,0102) Presentation Pixel Aspect Ratio</para>
   /// <para> VR: IS VM:2</para>
   /// </summary>
   public static PresentationPixelAspectRatio: number = 7340290;
   /// <summary>
   /// <para>(0070,0103) Presentation Pixel Magnification Ratio</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static PresentationPixelMagnificationRatio: number = 7340291;
   /// <summary>
   /// <para>(0070,0207) Graphic Group Label</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static GraphicGroupLabel: number = 7340551;
   /// <summary>
   /// <para>(0070,0208) Graphic Group Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static GraphicGroupDescription: number = 7340552;
   /// <summary>
   /// <para>(0070,0209) Compound Graphic Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static CompoundGraphicSequence: number = 7340553;
   /// <summary>
   /// <para>(0070,0226) Compound Graphic Instance ID</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static CompoundGraphicInstanceId: number = 7340582;
   /// <summary>
   /// <para>(0070,0227) Font Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static FontName: number = 7340583;
   /// <summary>
   /// <para>(0070,0228) Font Name Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FontNameType: number = 7340584;
   /// <summary>
   /// <para>(0070,0229) CSS Font Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static CssFontName: number = 7340585;
   /// <summary>
   /// <para>(0070,0230) Rotation Angle</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static RotationAngle: number = 7340592;
   /// <summary>
   /// <para>(0070,0231) Text Style Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static TextStyleSequence: number = 7340593;
   /// <summary>
   /// <para>(0070,0232) Line Style Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static LineStyleSequence: number = 7340594;
   /// <summary>
   /// <para>(0070,0233) Fill Style Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FillStyleSequence: number = 7340595;
   /// <summary>
   /// <para>(0070,0234) Graphic Group Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static GraphicGroupSequence: number = 7340596;
   /// <summary>
   /// <para>(0070,0241) Text Color CIELab Value</para>
   /// <para> VR: US VM:3</para>
   /// </summary>
   public static TextColorCielabValue: number = 7340609;
   /// <summary>
   /// <para>(0070,0242) Horizontal Alignment</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static HorizontalAlignment: number = 7340610;
   /// <summary>
   /// <para>(0070,0243) Vertical Alignment</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static VerticalAlignment: number = 7340611;
   /// <summary>
   /// <para>(0070,0244) Shadow Style</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ShadowStyle: number = 7340612;
   /// <summary>
   /// <para>(0070,0245) Shadow Offset X</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static ShadowOffsetX: number = 7340613;
   /// <summary>
   /// <para>(0070,0246) Shadow Offset Y</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static ShadowOffsetY: number = 7340614;
   /// <summary>
   /// <para>(0070,0247) Shadow Color CIELab Value</para>
   /// <para> VR: US VM:3</para>
   /// </summary>
   public static ShadowColorCielabValue: number = 7340615;
   /// <summary>
   /// <para>(0070,0248) Underlined</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static Underlined: number = 7340616;
   /// <summary>
   /// <para>(0070,0249) Bold</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static Bold: number = 7340617;
   /// <summary>
   /// <para>(0070,0250) Italic</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static Italic: number = 7340624;
   /// <summary>
   /// <para>(0070,0251) Pattern On Color CIELab Value</para>
   /// <para> VR: US VM:3</para>
   /// </summary>
   public static PatternOnColorCielabValue: number = 7340625;
   /// <summary>
   /// <para>(0070,0252) Pattern Off Color CIELab Value</para>
   /// <para> VR: US VM:3</para>
   /// </summary>
   public static PatternOffColorCielabValue: number = 7340626;
   /// <summary>
   /// <para>(0070,0253) Line Thickness</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static LineThickness: number = 7340627;
   /// <summary>
   /// <para>(0070,0254) Line Dashing Style</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static LineDashingStyle: number = 7340628;
   /// <summary>
   /// <para>(0070,0255) Line Pattern</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static LinePattern: number = 7340629;
   /// <summary>
   /// <para>(0070,0256) Fill Pattern</para>
   /// <para> VR: OB VM:1</para>
   /// </summary>
   public static FillPattern: number = 7340630;
   /// <summary>
   /// <para>(0070,0257) Fill Mode</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FillMode: number = 7340631;
   /// <summary>
   /// <para>(0070,0258) Shadow Opacity</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static ShadowOpacity: number = 7340632;
   /// <summary>
   /// <para>(0070,0261) Gap Length</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static GapLength: number = 7340641;
   /// <summary>
   /// <para>(0070,0262) Diameter of Visibility</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static DiameterOfVisibility: number = 7340642;
   /// <summary>
   /// <para>(0070,0273) Rotation Point</para>
   /// <para> VR: FL VM:2</para>
   /// </summary>
   public static RotationPoint: number = 7340659;
   /// <summary>
   /// <para>(0070,0274) Tick Alignment</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TickAlignment: number = 7340660;
   /// <summary>
   /// <para>(0070,0278) Show Tick Label</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ShowTickLabel: number = 7340664;
   /// <summary>
   /// <para>(0070,0279) Tick Label Alignment</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TickLabelAlignment: number = 7340665;
   /// <summary>
   /// <para>(0070,0282) Compound Graphic Units</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CompoundGraphicUnits: number = 7340674;
   /// <summary>
   /// <para>(0070,0284) Pattern On Opacity</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static PatternOnOpacity: number = 7340676;
   /// <summary>
   /// <para>(0070,0285) Pattern Off Opacity</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static PatternOffOpacity: number = 7340677;
   /// <summary>
   /// <para>(0070,0287) Major Ticks Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MajorTicksSequence: number = 7340679;
   /// <summary>
   /// <para>(0070,0288) Tick Position</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static TickPosition: number = 7340680;
   /// <summary>
   /// <para>(0070,0289) Tick Label</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static TickLabel: number = 7340681;
   /// <summary>
   /// <para>(0070,0294) Compound Graphic Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CompoundGraphicType: number = 7340692;
   /// <summary>
   /// <para>(0070,0295) Graphic Group ID</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static GraphicGroupId: number = 7340693;
   /// <summary>
   /// <para>(0070,0306) Shape Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ShapeType: number = 7340806;
   /// <summary>
   /// <para>(0070,0308) Registration Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RegistrationSequence: number = 7340808;
   /// <summary>
   /// <para>(0070,0309) Matrix Registration Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MatrixRegistrationSequence: number = 7340809;
   /// <summary>
   /// <para>(0070,030A) Matrix Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MatrixSequence: number = 7340810;
   /// <summary>
   /// <para>(0070,030C) Frame of Reference Transformation Matrix Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FrameOfReferenceTransformationMatrixType: number = 7340812;
   /// <summary>
   /// <para>(0070,030D) Registration Type Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RegistrationTypeCodeSequence: number = 7340813;
   /// <summary>
   /// <para>(0070,030F) Fiducial Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static FiducialDescription: number = 7340815;
   /// <summary>
   /// <para>(0070,0310) Fiducial Identifier</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static FiducialIdentifier: number = 7340816;
   /// <summary>
   /// <para>(0070,0311) Fiducial Identifier Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FiducialIdentifierCodeSequence: number = 7340817;
   /// <summary>
   /// <para>(0070,0312) Contour Uncertainty Radius</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static ContourUncertaintyRadius: number = 7340818;
   /// <summary>
   /// <para>(0070,0314) Used Fiducials Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static UsedFiducialsSequence: number = 7340820;
   /// <summary>
   /// <para>(0070,0318) Graphic Coordinates Data Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static GraphicCoordinatesDataSequence: number = 7340824;
   /// <summary>
   /// <para>(0070,031A) Fiducial UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static FiducialUid: number = 7340826;
   /// <summary>
   /// <para>(0070,031C) Fiducial Set Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FiducialSetSequence: number = 7340828;
   /// <summary>
   /// <para>(0070,031E) Fiducial Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FiducialSequence: number = 7340830;
   /// <summary>
   /// <para>(0070,0401) Graphic Layer Recommended Display CIELab Value</para>
   /// <para> VR: US VM:3</para>
   /// </summary>
   public static GraphicLayerRecommendedDisplayCielabValue: number = 7341057;
   /// <summary>
   /// <para>(0070,0402) Blending Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static BlendingSequence: number = 7341058;
   /// <summary>
   /// <para>(0070,0403) Relative Opacity</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static RelativeOpacity: number = 7341059;
   /// <summary>
   /// <para>(0070,0404) Referenced Spatial Registration Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedSpatialRegistrationSequence: number = 7341060;
   /// <summary>
   /// <para>(0070,0405) Blending Position</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BlendingPosition: number = 7341061;
   /// <summary>
   /// <para>(0072,0002) Hanging Protocol Name</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static HangingProtocolName: number = 7471106;
   /// <summary>
   /// <para>(0072,0004) Hanging Protocol Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static HangingProtocolDescription: number = 7471108;
   /// <summary>
   /// <para>(0072,0006) Hanging Protocol Level</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static HangingProtocolLevel: number = 7471110;
   /// <summary>
   /// <para>(0072,0008) Hanging Protocol Creator</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static HangingProtocolCreator: number = 7471112;
   /// <summary>
   /// <para>(0072,000A) Hanging Protocol Creation DateTime</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static HangingProtocolCreationDatetime: number = 7471114;
   /// <summary>
   /// <para>(0072,000C) Hanging Protocol Definition Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static HangingProtocolDefinitionSequence: number = 7471116;
   /// <summary>
   /// <para>(0072,000E) Hanging Protocol User Identification Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static HangingProtocolUserIdentificationCodeSequence: number = 7471118;
   /// <summary>
   /// <para>(0072,0010) Hanging Protocol User Group Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static HangingProtocolUserGroupName: number = 7471120;
   /// <summary>
   /// <para>(0072,0012) Source Hanging Protocol Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SourceHangingProtocolSequence: number = 7471122;
   /// <summary>
   /// <para>(0072,0014) Number of Priors Referenced</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfPriorsReferenced: number = 7471124;
   /// <summary>
   /// <para>(0072,0020) Image Sets Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ImageSetsSequence: number = 7471136;
   /// <summary>
   /// <para>(0072,0022) Image Set Selector Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ImageSetSelectorSequence: number = 7471138;
   /// <summary>
   /// <para>(0072,0024) Image Set Selector Usage Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ImageSetSelectorUsageFlag: number = 7471140;
   /// <summary>
   /// <para>(0072,0026) Selector Attribute</para>
   /// <para> VR: AT VM:1</para>
   /// </summary>
   public static SelectorAttribute: number = 7471142;
   /// <summary>
   /// <para>(0072,0028) Selector Value Number</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static SelectorValueNumber: number = 7471144;
   /// <summary>
   /// <para>(0072,0030) Time Based Image Sets Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static TimeBasedImageSetsSequence: number = 7471152;
   /// <summary>
   /// <para>(0072,0032) Image Set Number</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ImageSetNumber: number = 7471154;
   /// <summary>
   /// <para>(0072,0034) Image Set Selector Category</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ImageSetSelectorCategory: number = 7471156;
   /// <summary>
   /// <para>(0072,0038) Relative Time</para>
   /// <para> VR: US VM:2</para>
   /// </summary>
   public static RelativeTime: number = 7471160;
   /// <summary>
   /// <para>(0072,003A) Relative Time Units</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RelativeTimeUnits: number = 7471162;
   /// <summary>
   /// <para>(0072,003C) Abstract Prior Value</para>
   /// <para> VR: SS VM:2</para>
   /// </summary>
   public static AbstractPriorValue: number = 7471164;
   /// <summary>
   /// <para>(0072,003E) Abstract Prior Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AbstractPriorCodeSequence: number = 7471166;
   /// <summary>
   /// <para>(0072,0040) Image Set Label</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ImageSetLabel: number = 7471168;
   /// <summary>
   /// <para>(0072,0050) Selector Attribute VR</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SelectorAttributeVr: number = 7471184;
   /// <summary>
   /// <para>(0072,0052) Selector Sequence Pointer</para>
   /// <para> VR: AT VM:1-n</para>
   /// </summary>
   public static SelectorSequencePointer: number = 7471186;
   /// <summary>
   /// <para>(0072,0054) Selector Sequence Pointer Private Creator</para>
   /// <para> VR: LO VM:1-n</para>
   /// </summary>
   public static SelectorSequencePointerPrivateCreator: number = 7471188;
   /// <summary>
   /// <para>(0072,0056) Selector Attribute Private Creator</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static SelectorAttributePrivateCreator: number = 7471190;
   /// <summary>
   /// <para>(0072,0060) Selector AT Value</para>
   /// <para> VR: AT VM:1-n</para>
   /// </summary>
   public static SelectorAtValue: number = 7471200;
   /// <summary>
   /// <para>(0072,0062) Selector CS Value</para>
   /// <para> VR: CS VM:1-n</para>
   /// </summary>
   public static SelectorCsValue: number = 7471202;
   /// <summary>
   /// <para>(0072,0064) Selector IS Value</para>
   /// <para> VR: IS VM:1-n</para>
   /// </summary>
   public static SelectorIsValue: number = 7471204;
   /// <summary>
   /// <para>(0072,0066) Selector LO Value</para>
   /// <para> VR: LO VM:1-n</para>
   /// </summary>
   public static SelectorLoValue: number = 7471206;
   /// <summary>
   /// <para>(0072,0068) Selector LT Value</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static SelectorLtValue: number = 7471208;
   /// <summary>
   /// <para>(0072,006A) Selector PN Value</para>
   /// <para> VR: PN VM:1-n</para>
   /// </summary>
   public static SelectorPnValue: number = 7471210;
   /// <summary>
   /// <para>(0072,006C) Selector SH Value</para>
   /// <para> VR: SH VM:1-n</para>
   /// </summary>
   public static SelectorShValue: number = 7471212;
   /// <summary>
   /// <para>(0072,006E) Selector ST Value</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static SelectorStValue: number = 7471214;
   /// <summary>
   /// <para>(0072,0070) Selector UT Value</para>
   /// <para> VR: UT VM:1</para>
   /// </summary>
   public static SelectorUtValue: number = 7471216;
   /// <summary>
   /// <para>(0072,0072) Selector DS Value</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static SelectorDsValue: number = 7471218;
   /// <summary>
   /// <para>(0072,0074) Selector FD Value</para>
   /// <para> VR: FD VM:1-n</para>
   /// </summary>
   public static SelectorFdValue: number = 7471220;
   /// <summary>
   /// <para>(0072,0076) Selector FL Value</para>
   /// <para> VR: FL VM:1-n</para>
   /// </summary>
   public static SelectorFlValue: number = 7471222;
   /// <summary>
   /// <para>(0072,0078) Selector UL Value</para>
   /// <para> VR: UL VM:1-n</para>
   /// </summary>
   public static SelectorUlValue: number = 7471224;
   /// <summary>
   /// <para>(0072,007A) Selector US Value</para>
   /// <para> VR: US VM:1-n</para>
   /// </summary>
   public static SelectorUsValue: number = 7471226;
   /// <summary>
   /// <para>(0072,007C) Selector SL Value</para>
   /// <para> VR: SL VM:1-n</para>
   /// </summary>
   public static SelectorSlValue: number = 7471228;
   /// <summary>
   /// <para>(0072,007E) Selector SS Value</para>
   /// <para> VR: SS VM:1-n</para>
   /// </summary>
   public static SelectorSsValue: number = 7471230;
   /// <summary>
   /// <para>(0072,0080) Selector Code Sequence Value</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SelectorCodeSequenceValue: number = 7471232;
   /// <summary>
   /// <para>(0072,0100) Number of Screens</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfScreens: number = 7471360;
   /// <summary>
   /// <para>(0072,0102) Nominal Screen Definition Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static NominalScreenDefinitionSequence: number = 7471362;
   /// <summary>
   /// <para>(0072,0104) Number of Vertical Pixels</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfVerticalPixels: number = 7471364;
   /// <summary>
   /// <para>(0072,0106) Number of Horizontal Pixels</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfHorizontalPixels: number = 7471366;
   /// <summary>
   /// <para>(0072,0108) Display Environment Spatial Position</para>
   /// <para> VR: FD VM:4</para>
   /// </summary>
   public static DisplayEnvironmentSpatialPosition: number = 7471368;
   /// <summary>
   /// <para>(0072,010A) Screen Minimum Grayscale Bit Depth</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ScreenMinimumGrayscaleBitDepth: number = 7471370;
   /// <summary>
   /// <para>(0072,010C) Screen Minimum Color Bit Depth</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ScreenMinimumColorBitDepth: number = 7471372;
   /// <summary>
   /// <para>(0072,010E) Application Maximum Repaint Time</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ApplicationMaximumRepaintTime: number = 7471374;
   /// <summary>
   /// <para>(0072,0200) Display Sets Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DisplaySetsSequence: number = 7471616;
   /// <summary>
   /// <para>(0072,0202) Display Set Number</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static DisplaySetNumber: number = 7471618;
   /// <summary>
   /// <para>(0072,0203) Display Set Label</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static DisplaySetLabel: number = 7471619;
   /// <summary>
   /// <para>(0072,0204) Display Set Presentation Group</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static DisplaySetPresentationGroup: number = 7471620;
   /// <summary>
   /// <para>(0072,0206) Display Set Presentation Group Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static DisplaySetPresentationGroupDescription: number = 7471622;
   /// <summary>
   /// <para>(0072,0208) Partial Data Display Handling</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PartialDataDisplayHandling: number = 7471624;
   /// <summary>
   /// <para>(0072,0210) Synchronized Scrolling Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SynchronizedScrollingSequence: number = 7471632;
   /// <summary>
   /// <para>(0072,0212) Display Set Scrolling Group</para>
   /// <para> VR: US VM:2-n</para>
   /// </summary>
   public static DisplaySetScrollingGroup: number = 7471634;
   /// <summary>
   /// <para>(0072,0214) Navigation Indicator Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static NavigationIndicatorSequence: number = 7471636;
   /// <summary>
   /// <para>(0072,0216) Navigation Display Set </para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NavigationDisplaySet: number = 7471638;
   /// <summary>
   /// <para>(0072,0218) Reference Display Sets</para>
   /// <para> VR: US VM:1-n</para>
   /// </summary>
   public static ReferenceDisplaySets: number = 7471640;
   /// <summary>
   /// <para>(0072,0300) Image Boxes Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ImageBoxesSequence: number = 7471872;
   /// <summary>
   /// <para>(0072,0302) Image Box Number</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ImageBoxNumber: number = 7471874;
   /// <summary>
   /// <para>(0072,0304) Image Box Layout Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ImageBoxLayoutType: number = 7471876;
   /// <summary>
   /// <para>(0072,0306) Image Box Tile Horizontal Dimension</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ImageBoxTileHorizontalDimension: number = 7471878;
   /// <summary>
   /// <para>(0072,0308) Image Box Tile Vertical Dimension</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ImageBoxTileVerticalDimension: number = 7471880;
   /// <summary>
   /// <para>(0072,0310) Image Box Scroll Direction</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ImageBoxScrollDirection: number = 7471888;
   /// <summary>
   /// <para>(0072,0312) Image Box Small Scroll Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ImageBoxSmallScrollType: number = 7471890;
   /// <summary>
   /// <para>(0072,0314) Image Box Small Scroll Amount</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ImageBoxSmallScrollAmount: number = 7471892;
   /// <summary>
   /// <para>(0072,0316) Image Box Large Scroll Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ImageBoxLargeScrollType: number = 7471894;
   /// <summary>
   /// <para>(0072,0318) Image Box Large Scroll Amount</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ImageBoxLargeScrollAmount: number = 7471896;
   /// <summary>
   /// <para>(0072,0320) Image Box Overlap Priority</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ImageBoxOverlapPriority: number = 7471904;
   /// <summary>
   /// <para>(0072,0330) Cine Relative to Real-Time</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static CineRelativeToRealTime: number = 7471920;
   /// <summary>
   /// <para>(0072,0400) Filter Operations Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FilterOperationsSequence: number = 7472128;
   /// <summary>
   /// <para>(0072,0402) Filter-by Category</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FilterByCategory: number = 7472130;
   /// <summary>
   /// <para>(0072,0404) Filter-by Attribute Presence</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FilterByAttributePresence: number = 7472132;
   /// <summary>
   /// <para>(0072,0406) Filter-by Operator</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FilterByOperator: number = 7472134;
   /// <summary>
   /// <para>(0072,0420) Structured Display Background CIELab Value</para>
   /// <para> VR: US VM:3</para>
   /// </summary>
   public static StructuredDisplayBackgroundCielabValue: number = 7472160;
   /// <summary>
   /// <para>(0072,0421) Empty Image Box CIELab Value</para>
   /// <para> VR: US VM:3</para>
   /// </summary>
   public static EmptyImageBoxCielabValue: number = 7472161;
   /// <summary>
   /// <para>(0072,0422) Structured Display Image Box Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static StructuredDisplayImageBoxSequence: number = 7472162;
   /// <summary>
   /// <para>(0072,0424) Structured Display Text Box Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static StructuredDisplayTextBoxSequence: number = 7472164;
   /// <summary>
   /// <para>(0072,0427) Referenced First Frame Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedFirstFrameSequence: number = 7472167;
   /// <summary>
   /// <para>(0072,0430) Image Box Synchronization Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ImageBoxSynchronizationSequence: number = 7472176;
   /// <summary>
   /// <para>(0072,0432) Synchronized Image Box List</para>
   /// <para> VR: US VM:2-n</para>
   /// </summary>
   public static SynchronizedImageBoxList: number = 7472178;
   /// <summary>
   /// <para>(0072,0434) Type of Synchronization</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TypeOfSynchronization: number = 7472180;
   /// <summary>
   /// <para>(0072,0500) Blending Operation Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BlendingOperationType: number = 7472384;
   /// <summary>
   /// <para>(0072,0510) Reformatting Operation Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ReformattingOperationType: number = 7472400;
   /// <summary>
   /// <para>(0072,0512) Reformatting Thickness</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static ReformattingThickness: number = 7472402;
   /// <summary>
   /// <para>(0072,0514) Reformatting Interval</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static ReformattingInterval: number = 7472404;
   /// <summary>
   /// <para>(0072,0516) Reformatting Operation Initial View Direction</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ReformattingOperationInitialViewDirection: number = 7472406;
   /// <summary>
   /// <para>(0072,0520) 3D Rendering Type</para>
   /// <para> VR: CS VM:1-n</para>
   /// </summary>
   public static ThreeDRenderingType: number = 7472416;
   /// <summary>
   /// <para>(0072,0600) Sorting Operations Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SortingOperationsSequence: number = 7472640;
   /// <summary>
   /// <para>(0072,0602) Sort-by Category</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SortByCategory: number = 7472642;
   /// <summary>
   /// <para>(0072,0604) Sorting Direction</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SortingDirection: number = 7472644;
   /// <summary>
   /// <para>(0072,0700) Display Set Patient Orientation</para>
   /// <para> VR: CS VM:2</para>
   /// </summary>
   public static DisplaySetPatientOrientation: number = 7472896;
   /// <summary>
   /// <para>(0072,0702) VOI Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static VoiType: number = 7472898;
   /// <summary>
   /// <para>(0072,0704) Pseudo-Color Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PseudoColorType: number = 7472900;
   /// <summary>
   /// <para>(0072,0705) Pseudo-Color Palette Instance Reference Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PseudoColorPaletteInstanceReferenceSequence: number = 7472901;
   /// <summary>
   /// <para>(0072,0706) Show Grayscale Inverted</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ShowGrayscaleInverted: number = 7472902;
   /// <summary>
   /// <para>(0072,0710) Show Image True Size Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ShowImageTrueSizeFlag: number = 7472912;
   /// <summary>
   /// <para>(0072,0712) Show Graphic Annotation Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ShowGraphicAnnotationFlag: number = 7472914;
   /// <summary>
   /// <para>(0072,0714) Show Patient Demographics Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ShowPatientDemographicsFlag: number = 7472916;
   /// <summary>
   /// <para>(0072,0716) Show Acquisition Techniques Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ShowAcquisitionTechniquesFlag: number = 7472918;
   /// <summary>
   /// <para>(0072,0717) Display Set Horizontal Justification </para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DisplaySetHorizontalJustification: number = 7472919;
   /// <summary>
   /// <para>(0072,0718) Display Set Vertical Justification</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DisplaySetVerticalJustification: number = 7472920;
   /// <summary>
   /// <para>(0074,0120) Continuation Start Meterset</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static ContinuationStartMeterset: number = 7602464;
   /// <summary>
   /// <para>(0074,0121) Continuation End Meterset</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static ContinuationEndMeterset: number = 7602465;
   /// <summary>
   /// <para>(0074,1000) Procedure Step State</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ProcedureStepState: number = 7606272;
   /// <summary>
   /// <para>(0074,1002) Procedure Step Progress Information Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ProcedureStepProgressInformationSequence: number = 7606274;
   /// <summary>
   /// <para>(0074,1004) Procedure Step Progress</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ProcedureStepProgress: number = 7606276;
   /// <summary>
   /// <para>(0074,1006) Procedure Step Progress Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static ProcedureStepProgressDescription: number = 7606278;
   /// <summary>
   /// <para>(0074,1008) Procedure Step Communications URI Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ProcedureStepCommunicationsUriSequence: number = 7606280;
   /// <summary>
   /// <para>(0074,100a) Contact URI</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static ContactUri: number = 7606282;
   /// <summary>
   /// <para>(0074,100c) Contact Display Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ContactDisplayName: number = 7606284;
   /// <summary>
   /// <para>(0074,100e) Procedure Step Discontinuation Reason Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ProcedureStepDiscontinuationReasonCodeSequence: number = 7606286;
   /// <summary>
   /// <para>(0074,1020) Beam Task Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static BeamTaskSequence: number = 7606304;
   /// <summary>
   /// <para>(0074,1022) Beam Task Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BeamTaskType: number = 7606306;
   /// <summary>
   /// <para>(0074,1024) Beam Order Index (Trial)</para>
   /// <para> VR: IS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static BeamOrderIndexTrialRetired: number = 7606308;
   /// <summary>
   /// <para>(0074,1026) Table Top Vertical Adjusted Position</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static TableTopVerticalAdjustedPosition: number = 7606310;
   /// <summary>
   /// <para>(0074,1027) Table Top Longitudinal Adjusted Position</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static TableTopLongitudinalAdjustedPosition: number = 7606311;
   /// <summary>
   /// <para>(0074,1028) Table Top Lateral Adjusted Position</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static TableTopLateralAdjustedPosition: number = 7606312;
   /// <summary>
   /// <para>(0074,102A) Patient Support Adjusted Angle</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static PatientSupportAdjustedAngle: number = 7606314;
   /// <summary>
   /// <para>(0074,102B) Table Top Eccentric Adjusted Angle</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static TableTopEccentricAdjustedAngle: number = 7606315;
   /// <summary>
   /// <para>(0074,102C) Table Top Pitch Adjusted Angle</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static TableTopPitchAdjustedAngle: number = 7606316;
   /// <summary>
   /// <para>(0074,102D) Table Top Roll Adjusted Angle</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static TableTopRollAdjustedAngle: number = 7606317;
   /// <summary>
   /// <para>(0074,1030) Delivery Verification Image Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DeliveryVerificationImageSequence: number = 7606320;
   /// <summary>
   /// <para>(0074,1032) Verification Image Timing</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static VerificationImageTiming: number = 7606322;
   /// <summary>
   /// <para>(0074,1034) Double Exposure Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DoubleExposureFlag: number = 7606324;
   /// <summary>
   /// <para>(0074,1036) Double Exposure Ordering</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DoubleExposureOrdering: number = 7606326;
   /// <summary>
   /// <para>(0074,1038) Double Exposure Meterset (Trial)</para>
   /// <para> VR: DS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DoubleExposureMetersetTrialRetired: number = 7606328;
   /// <summary>
   /// <para>(0074,103A) Double Exposure Field Delta (Trial)</para>
   /// <para> VR: DS VM:4</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DoubleExposureFieldDeltaTrialRetired: number = 7606330;
   /// <summary>
   /// <para>(0074,1040) Related Reference RT Image Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RelatedReferenceRtImageSequence: number = 7606336;
   /// <summary>
   /// <para>(0074,1042) General Machine Verification Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static GeneralMachineVerificationSequence: number = 7606338;
   /// <summary>
   /// <para>(0074,1044) Conventional Machine Verification Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ConventionalMachineVerificationSequence: number = 7606340;
   /// <summary>
   /// <para>(0074,1046) Ion Machine Verification Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IonMachineVerificationSequence: number = 7606342;
   /// <summary>
   /// <para>(0074,1048) Failed Attributes Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FailedAttributesSequence: number = 7606344;
   /// <summary>
   /// <para>(0074,104A) Overridden Attributes Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OverriddenAttributesSequence: number = 7606346;
   /// <summary>
   /// <para>(0074,104C) Conventional Control Point Verification Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ConventionalControlPointVerificationSequence: number = 7606348;
   /// <summary>
   /// <para>(0074,104E) Ion Control Point Verification Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IonControlPointVerificationSequence: number = 7606350;
   /// <summary>
   /// <para>(0074,1050) Attribute Occurrence Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AttributeOccurrenceSequence: number = 7606352;
   /// <summary>
   /// <para>(0074,1052) Attribute Occurrence Pointer</para>
   /// <para> VR: AT VM:1</para>
   /// </summary>
   public static AttributeOccurrencePointer: number = 7606354;
   /// <summary>
   /// <para>(0074,1054) Attribute Item Selector</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static AttributeItemSelector: number = 7606356;
   /// <summary>
   /// <para>(0074,1056) Attribute Occurrence Private Creator</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static AttributeOccurrencePrivateCreator: number = 7606358;
   /// <summary>
   /// <para>(0074,1057) Selector Sequence Pointer Items</para>
   /// <para> VR: IS VM:1-n</para>
   /// </summary>
   public static SelectorSequencePointerItems: number = 7606359;
   /// <summary>
   /// <para>(0074,1200) Scheduled Procedure Step Priority</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ScheduledProcedureStepPriority: number = 7606784;
   /// <summary>
   /// <para>(0074,1202) Worklist Label</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static WorklistLabel: number = 7606786;
   /// <summary>
   /// <para>(0074,1204) Procedure Step Label</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ProcedureStepLabel: number = 7606788;
   /// <summary>
   /// <para>(0074,1210) Scheduled Processing Parameters Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ScheduledProcessingParametersSequence: number = 7606800;
   /// <summary>
   /// <para>(0074,1212) Performed Processing Parameters Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PerformedProcessingParametersSequence: number = 7606802;
   /// <summary>
   /// <para>(0074,1216) Unified Procedure Step Performed Procedure Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static UnifiedProcedureStepPerformedProcedureSequence: number = 7606806;
   /// <summary>
   /// <para>(0074,1220) Related Procedure Step Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static RelatedProcedureStepSequenceRetired: number = 7606816;
   /// <summary>
   /// <para>(0074,1222) Procedure Step Relationship Type</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ProcedureStepRelationshipTypeRetired: number = 7606818;
   /// <summary>
   /// <para>(0074,1224) Replaced Procedure Step Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReplacedProcedureStepSequence: number = 7606820;
   /// <summary>
   /// <para>(0074,1230) Deletion Lock</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static DeletionLock: number = 7606832;
   /// <summary>
   /// <para>(0074,1234) Receiving AE</para>
   /// <para> VR: AE VM:1</para>
   /// </summary>
   public static ReceivingAe: number = 7606836;
   /// <summary>
   /// <para>(0074,1236) Requesting AE</para>
   /// <para> VR: AE VM:1</para>
   /// </summary>
   public static RequestingAe: number = 7606838;
   /// <summary>
   /// <para>(0074,1238) Reason for Cancellation</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static ReasonForCancellation: number = 7606840;
   /// <summary>
   /// <para>(0074,1242) SCP Status</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ScpStatus: number = 7606850;
   /// <summary>
   /// <para>(0074,1244) Subscription List Status</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SubscriptionListStatus: number = 7606852;
   /// <summary>
   /// <para>(0074,1246) Unified Procedure Step List Status</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static UnifiedProcedureStepListStatus: number = 7606854;
   /// <summary>
   /// <para>(0074,1324) Beam Order Index</para>
   /// <para> VR: UL VM:1</para>
   /// </summary>
   public static BeamOrderIndex: number = 7607076;
   /// <summary>
   /// <para>(0074,1338) Double Exposure Meterset</para>
   /// <para> VR: FD VM:1</para>
   /// </summary>
   public static DoubleExposureMeterset: number = 7607096;
   /// <summary>
   /// <para>(0074,133A) Double Exposure Field Delta</para>
   /// <para> VR: FD VM:4</para>
   /// </summary>
   public static DoubleExposureFieldDelta: number = 7607098;
   /// <summary>
   /// <para>(0076,0001) Implant Assembly Template Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ImplantAssemblyTemplateName: number = 7733249;
   /// <summary>
   /// <para>(0076,0003) Implant Assembly Template Issuer</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ImplantAssemblyTemplateIssuer: number = 7733251;
   /// <summary>
   /// <para>(0076,0006) Implant Assembly Template Version</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ImplantAssemblyTemplateVersion: number = 7733254;
   /// <summary>
   /// <para>(0076,0008) Replaced Implant Assembly Template Sequence </para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReplacedImplantAssemblyTemplateSequence: number = 7733256;
   /// <summary>
   /// <para>(0076,000A) Implant Assembly Template Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ImplantAssemblyTemplateType: number = 7733258;
   /// <summary>
   /// <para>(0076,000C) Original Implant Assembly Template Sequence </para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OriginalImplantAssemblyTemplateSequence: number = 7733260;
   /// <summary>
   /// <para>(0076,000E) Derivation Implant Assembly Template Sequence </para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DerivationImplantAssemblyTemplateSequence: number = 7733262;
   /// <summary>
   /// <para>(0076,0010) Implant Assembly Template Target Anatomy Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ImplantAssemblyTemplateTargetAnatomySequence: number = 7733264;
   /// <summary>
   /// <para>(0076,0020) Procedure Type Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ProcedureTypeCodeSequence: number = 7733280;
   /// <summary>
   /// <para>(0076,0030) Surgical Technique </para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static SurgicalTechnique: number = 7733296;
   /// <summary>
   /// <para>(0076,0032) Component Types Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ComponentTypesSequence: number = 7733298;
   /// <summary>
   /// <para>(0076,0034) Component Type Code Sequence</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ComponentTypeCodeSequence: number = 7733300;
   /// <summary>
   /// <para>(0076,0036) Exclusive Component Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ExclusiveComponentType: number = 7733302;
   /// <summary>
   /// <para>(0076,0038) Mandatory Component Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static MandatoryComponentType: number = 7733304;
   /// <summary>
   /// <para>(0076,0040) Component Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ComponentSequence: number = 7733312;
   /// <summary>
   /// <para>(0076,0055) Component ID</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ComponentId: number = 7733333;
   /// <summary>
   /// <para>(0076,0060) Component Assembly Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ComponentAssemblySequence: number = 7733344;
   /// <summary>
   /// <para>(0076,0070) Component 1 Referenced ID</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static Component1ReferencedId: number = 7733360;
   /// <summary>
   /// <para>(0076,0080) Component 1 Referenced Mating Feature Set ID</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static Component1ReferencedMatingFeatureSetId: number = 7733376;
   /// <summary>
   /// <para>(0076,0090) Component 1 Referenced Mating Feature ID</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static Component1ReferencedMatingFeatureId: number = 7733392;
   /// <summary>
   /// <para>(0076,00A0) Component 2 Referenced ID</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static Component2ReferencedId: number = 7733408;
   /// <summary>
   /// <para>(0076,00B0) Component 2 Referenced Mating Feature Set ID</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static Component2ReferencedMatingFeatureSetId: number = 7733424;
   /// <summary>
   /// <para>(0076,00C0) Component 2 Referenced Mating Feature ID </para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static Component2ReferencedMatingFeatureId: number = 7733440;
   /// <summary>
   /// <para>(0078,0001) Implant Template Group Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ImplantTemplateGroupName: number = 7864321;
   /// <summary>
   /// <para>(0078,0010) Implant Template Group Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static ImplantTemplateGroupDescription: number = 7864336;
   /// <summary>
   /// <para>(0078,0020) Implant Template Group Issuer</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ImplantTemplateGroupIssuer: number = 7864352;
   /// <summary>
   /// <para>(0078,0024) Implant Template Group Version</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ImplantTemplateGroupVersion: number = 7864356;
   /// <summary>
   /// <para>(0078,0026) Replaced Implant Template Group Sequence </para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReplacedImplantTemplateGroupSequence: number = 7864358;
   /// <summary>
   /// <para>(0078,0028) Implant Template Group Target Anatomy Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ImplantTemplateGroupTargetAnatomySequence: number = 7864360;
   /// <summary>
   /// <para>(0078,002A) Implant Template Group Members Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ImplantTemplateGroupMembersSequence: number = 7864362;
   /// <summary>
   /// <para>(0078,002E) Implant Template Group Member ID</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ImplantTemplateGroupMemberId: number = 7864366;
   /// <summary>
   /// <para>(0078,0050) 3D Implant Template Group Member Matching Point</para>
   /// <para> VR: FD VM:3</para>
   /// </summary>
   public static ThreeDImplantTemplateGroupMemberMatchingPoint: number = 7864400;
   /// <summary>
   /// <para>(0078,0060) 3D Implant Template Group Member Matching Axes</para>
   /// <para> VR: FD VM:9</para>
   /// </summary>
   public static ThreeDImplantTemplateGroupMemberMatchingAxes: number = 7864416;
   /// <summary>
   /// <para>(0078,0070) Implant Template Group Member Matching 2D Coordinates Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ImplantTemplateGroupMemberMatching2dCoordinatesSequence: number = 7864432;
   /// <summary>
   /// <para>(0078,0090) 2D Implant Template Group Member Matching Point </para>
   /// <para> VR: FD VM:2</para>
   /// </summary>
   public static TwoDImplantTemplateGroupMemberMatchingPoint: number = 7864464;
   /// <summary>
   /// <para>(0078,00A0) 2D Implant Template Group Member Matching Axes</para>
   /// <para> VR: FD VM:4</para>
   /// </summary>
   public static TwoDImplantTemplateGroupMemberMatchingAxes: number = 7864480;
   /// <summary>
   /// <para>(0078,00B0) Implant Template Group Variation Dimension Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ImplantTemplateGroupVariationDimensionSequence: number = 7864496;
   /// <summary>
   /// <para>(0078,00B2) Implant Template Group Variation Dimension Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ImplantTemplateGroupVariationDimensionName: number = 7864498;
   /// <summary>
   /// <para>(0078,00B4) Implant Template Group Variation Dimension Rank Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ImplantTemplateGroupVariationDimensionRankSequence: number = 7864500;
   /// <summary>
   /// <para>(0078,00B6) Referenced Implant Template Group Member ID</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ReferencedImplantTemplateGroupMemberId: number = 7864502;
   /// <summary>
   /// <para>(0078,00B8) Implant Template Group Variation Dimension Rank</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ImplantTemplateGroupVariationDimensionRank: number = 7864504;
   /// <summary>
   /// <para>(0088,0130) Storage Media File-set ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static StorageMediaFileSetId: number = 8913200;
   /// <summary>
   /// <para>(0088,0140) Storage Media File-set UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static StorageMediaFileSetUid: number = 8913216;
   /// <summary>
   /// <para>(0088,0200) Icon Image Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IconImageSequence: number = 8913408;
   /// <summary>
   /// <para>(0088,0904) Topic Title</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TopicTitleRetired: number = 8915204;
   /// <summary>
   /// <para>(0088,0906) Topic Subject</para>
   /// <para> VR: ST VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TopicSubjectRetired: number = 8915206;
   /// <summary>
   /// <para>(0088,0910) Topic Author</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TopicAuthorRetired: number = 8915216;
   /// <summary>
   /// <para>(0088,0912) Topic Keywords</para>
   /// <para> VR: LO VM:1-32</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TopicKeywordsRetired: number = 8915218;
   /// <summary>
   /// <para>(0100,0410) SOP Instance Status</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SopInstanceStatus: number = 16778256;
   /// <summary>
   /// <para>(0100,0420) SOP Authorization DateTime</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static SopAuthorizationDatetime: number = 16778272;
   /// <summary>
   /// <para>(0100,0424) SOP Authorization Comment</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static SopAuthorizationComment: number = 16778276;
   /// <summary>
   /// <para>(0100,0426) Authorization Equipment Certification Number</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static AuthorizationEquipmentCertificationNumber: number = 16778278;
   /// <summary>
   /// <para>(0400,0005) MAC ID Number</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static MacIdNumber: number = 67108869;
   /// <summary>
   /// <para>(0400,0010) MAC Calculation Transfer Syntax UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static MacCalculationTransferSyntaxUid: number = 67108880;
   /// <summary>
   /// <para>(0400,0015) MAC Algorithm</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static MacAlgorithm: number = 67108885;
   /// <summary>
   /// <para>(0400,0020) Data Elements Signed</para>
   /// <para> VR: AT VM:1-n</para>
   /// </summary>
   public static DataElementsSigned: number = 67108896;
   /// <summary>
   /// <para>(0400,0100) Digital Signature UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static DigitalSignatureUid: number = 67109120;
   /// <summary>
   /// <para>(0400,0105) Digital Signature DateTime</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static DigitalSignatureDatetime: number = 67109125;
   /// <summary>
   /// <para>(0400,0110) Certificate Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CertificateType: number = 67109136;
   /// <summary>
   /// <para>(0400,0115) Certificate of Signer</para>
   /// <para> VR: OB VM:1</para>
   /// </summary>
   public static CertificateOfSigner: number = 67109141;
   /// <summary>
   /// <para>(0400,0120) Signature</para>
   /// <para> VR: OB VM:1</para>
   /// </summary>
   public static Signature: number = 67109152;
   /// <summary>
   /// <para>(0400,0305) Certified Timestamp Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CertifiedTimestampType: number = 67109637;
   /// <summary>
   /// <para>(0400,0310) Certified Timestamp</para>
   /// <para> VR: OB VM:1</para>
   /// </summary>
   public static CertifiedTimestamp: number = 67109648;
   /// <summary>
   /// <para>(0400,0401) Digital Signature Purpose Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DigitalSignaturePurposeCodeSequence: number = 67109889;
   /// <summary>
   /// <para>(0400,0402) Referenced Digital Signature Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedDigitalSignatureSequence: number = 67109890;
   /// <summary>
   /// <para>(0400,0403) Referenced SOP Instance MAC Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedSopInstanceMacSequence: number = 67109891;
   /// <summary>
   /// <para>(0400,0404) MAC</para>
   /// <para> VR: OB VM:1</para>
   /// </summary>
   public static Mac: number = 67109892;
   /// <summary>
   /// <para>(0400,0500) Encrypted Attributes Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static EncryptedAttributesSequence: number = 67110144;
   /// <summary>
   /// <para>(0400,0510) Encrypted Content Transfer Syntax UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static EncryptedContentTransferSyntaxUid: number = 67110160;
   /// <summary>
   /// <para>(0400,0520) Encrypted Content</para>
   /// <para> VR: OB VM:1</para>
   /// </summary>
   public static EncryptedContent: number = 67110176;
   /// <summary>
   /// <para>(0400,0550) Modified Attributes Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ModifiedAttributesSequence: number = 67110224;
   /// <summary>
   /// <para>(0400,0561) Original Attributes Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OriginalAttributesSequence: number = 67110241;
   /// <summary>
   /// <para>(0400,0562) Attribute Modification DateTime</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static AttributeModificationDatetime: number = 67110242;
   /// <summary>
   /// <para>(0400,0563) Modifying System</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ModifyingSystem: number = 67110243;
   /// <summary>
   /// <para>(0400,0564) Source of Previous Values</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static SourceOfPreviousValues: number = 67110244;
   /// <summary>
   /// <para>(0400,0565) Reason for the Attribute Modification</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ReasonForTheAttributeModification: number = 67110245;
   /// <summary>
   /// <para>(2000,0010) Number of Copies</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfCopies: number = 536870928;
   /// <summary>
   /// <para>(2000,001E) Printer Configuration Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PrinterConfigurationSequence: number = 536870942;
   /// <summary>
   /// <para>(2000,0020) Print Priority</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PrintPriority: number = 536870944;
   /// <summary>
   /// <para>(2000,0030) Medium Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static MediumType: number = 536870960;
   /// <summary>
   /// <para>(2000,0040) Film Destination</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FilmDestination: number = 536870976;
   /// <summary>
   /// <para>(2000,0050) Film Session Label</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static FilmSessionLabel: number = 536870992;
   /// <summary>
   /// <para>(2000,0060) Memory Allocation</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static MemoryAllocation: number = 536871008;
   /// <summary>
   /// <para>(2000,0061) Maximum Memory Allocation</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static MaximumMemoryAllocation: number = 536871009;
   /// <summary>
   /// <para>(2000,0062) Color Image Printing Flag</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ColorImagePrintingFlagRetired: number = 536871010;
   /// <summary>
   /// <para>(2000,0063) Collation Flag</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CollationFlagRetired: number = 536871011;
   /// <summary>
   /// <para>(2000,0065) Annotation Flag</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static AnnotationFlagRetired: number = 536871013;
   /// <summary>
   /// <para>(2000,0067) Image Overlay Flag</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ImageOverlayFlagRetired: number = 536871015;
   /// <summary>
   /// <para>(2000,0069) Presentation LUT Flag</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static PresentationLutFlagRetired: number = 536871017;
   /// <summary>
   /// <para>(2000,006A) Image Box Presentation LUT Flag</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ImageBoxPresentationLutFlagRetired: number = 536871018;
   /// <summary>
   /// <para>(2000,00A0) Memory Bit Depth</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static MemoryBitDepth: number = 536871072;
   /// <summary>
   /// <para>(2000,00A1) Printing Bit Depth</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static PrintingBitDepth: number = 536871073;
   /// <summary>
   /// <para>(2000,00A2) Media Installed Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MediaInstalledSequence: number = 536871074;
   /// <summary>
   /// <para>(2000,00A4) Other Media Available Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OtherMediaAvailableSequence: number = 536871076;
   /// <summary>
   /// <para>(2000,00A8) Supported Image Display Formats Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SupportedImageDisplayFormatsSequence: number = 536871080;
   /// <summary>
   /// <para>(2000,0500) Referenced Film Box Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedFilmBoxSequence: number = 536872192;
   /// <summary>
   /// <para>(2000,0510) Referenced Stored Print  Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ReferencedStoredPrintSequenceRetired: number = 536872208;
   /// <summary>
   /// <para>(2010,0010) Image Display Format</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static ImageDisplayFormat: number = 537919504;
   /// <summary>
   /// <para>(2010,0030) Annotation Display Format ID</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AnnotationDisplayFormatId: number = 537919536;
   /// <summary>
   /// <para>(2010,0040) Film Orientation</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FilmOrientation: number = 537919552;
   /// <summary>
   /// <para>(2010,0050) Film Size ID</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FilmSizeId: number = 537919568;
   /// <summary>
   /// <para>(2010,0052) Printer Resolution ID</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PrinterResolutionId: number = 537919570;
   /// <summary>
   /// <para>(2010,0054) Default Printer Resolution ID</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DefaultPrinterResolutionId: number = 537919572;
   /// <summary>
   /// <para>(2010,0060) Magnification Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static MagnificationType: number = 537919584;
   /// <summary>
   /// <para>(2010,0080) Smoothing Type  </para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SmoothingType: number = 537919616;
   /// <summary>
   /// <para>(2010,00A6) Default Magnification Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DefaultMagnificationType: number = 537919654;
   /// <summary>
   /// <para>(2010,00A7) Other Magnification Types Available</para>
   /// <para> VR: CS VM:1-n</para>
   /// </summary>
   public static OtherMagnificationTypesAvailable: number = 537919655;
   /// <summary>
   /// <para>(2010,00A8) Default Smoothing Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DefaultSmoothingType: number = 537919656;
   /// <summary>
   /// <para>(2010,00A9) Other Smoothing Types Available</para>
   /// <para> VR: CS VM:1-n</para>
   /// </summary>
   public static OtherSmoothingTypesAvailable: number = 537919657;
   /// <summary>
   /// <para>(2010,0100) Border Density</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BorderDensity: number = 537919744;
   /// <summary>
   /// <para>(2010,0110) Empty Image Density</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static EmptyImageDensity: number = 537919760;
   /// <summary>
   /// <para>(2010,0120) Min Density</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static MinDensity: number = 537919776;
   /// <summary>
   /// <para>(2010,0130) Max Density</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static MaxDensity: number = 537919792;
   /// <summary>
   /// <para>(2010,0140) Trim</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static Trim: number = 537919808;
   /// <summary>
   /// <para>(2010,0150) Configuration Information</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static ConfigurationInformation: number = 537919824;
   /// <summary>
   /// <para>(2010,0152) Configuration Information Description</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static ConfigurationInformationDescription: number = 537919826;
   /// <summary>
   /// <para>(2010,0154) Maximum Collated Films</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static MaximumCollatedFilms: number = 537919828;
   /// <summary>
   /// <para>(2010,015E) Illumination</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static Illumination: number = 537919838;
   /// <summary>
   /// <para>(2010,0160) Reflected Ambient Light</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ReflectedAmbientLight: number = 537919840;
   /// <summary>
   /// <para>(2010,0376) Printer Pixel Spacing</para>
   /// <para> VR: DS VM:2</para>
   /// </summary>
   public static PrinterPixelSpacing: number = 537920374;
   /// <summary>
   /// <para>(2010,0500) Referenced Film Session Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedFilmSessionSequence: number = 537920768;
   /// <summary>
   /// <para>(2010,0510) Referenced Image Box Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedImageBoxSequence: number = 537920784;
   /// <summary>
   /// <para>(2010,0520) Referenced Basic Annotation Box Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedBasicAnnotationBoxSequence: number = 537920800;
   /// <summary>
   /// <para>(2020,0010) Image Box Position</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ImageBoxPosition: number = 538968080;
   /// <summary>
   /// <para>(2020,0020) Polarity</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static Polarity: number = 538968096;
   /// <summary>
   /// <para>(2020,0030) Requested Image Size</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static RequestedImageSize: number = 538968112;
   /// <summary>
   /// <para>(2020,0040) Requested Decimate/Crop Behavior</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RequestedDecimateCropBehavior: number = 538968128;
   /// <summary>
   /// <para>(2020,0050) Requested Resolution ID</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RequestedResolutionId: number = 538968144;
   /// <summary>
   /// <para>(2020,00A0) Requested Image Size Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RequestedImageSizeFlag: number = 538968224;
   /// <summary>
   /// <para>(2020,00A2) Decimate/Crop Result</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DecimateCropResult: number = 538968226;
   /// <summary>
   /// <para>(2020,0110) Basic Grayscale Image Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static BasicGrayscaleImageSequence: number = 538968336;
   /// <summary>
   /// <para>(2020,0111) Basic Color Image Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static BasicColorImageSequence: number = 538968337;
   /// <summary>
   /// <para>(2020,0130) Referenced Image Overlay Box Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ReferencedImageOverlayBoxSequenceRetired: number = 538968368;
   /// <summary>
   /// <para>(2020,0140) Referenced VOI LUT Box Sequence </para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ReferencedVoiLutBoxSequenceRetired: number = 538968384;
   /// <summary>
   /// <para>(2030,0010) Annotation Position</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static AnnotationPosition: number = 540016656;
   /// <summary>
   /// <para>(2030,0020) Text String</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static TextString: number = 540016672;
   /// <summary>
   /// <para>(2040,0010) Referenced Overlay Plane Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ReferencedOverlayPlaneSequenceRetired: number = 541065232;
   /// <summary>
   /// <para>(2040,0011) Referenced Overlay Plane Groups</para>
   /// <para> VR: US VM:1-99</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ReferencedOverlayPlaneGroupsRetired: number = 541065233;
   /// <summary>
   /// <para>(2040,0020) Overlay Pixel Data Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayPixelDataSequenceRetired: number = 541065248;
   /// <summary>
   /// <para>(2040,0060) Overlay Magnification Type</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayMagnificationTypeRetired: number = 541065312;
   /// <summary>
   /// <para>(2040,0070) Overlay Smoothing Type</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlaySmoothingTypeRetired: number = 541065328;
   /// <summary>
   /// <para>(2040,0072) Overlay or Image Magnification</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayOrImageMagnificationRetired: number = 541065330;
   /// <summary>
   /// <para>(2040,0074) Magnify to Number of Columns</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static MagnifyToNumberOfColumnsRetired: number = 541065332;
   /// <summary>
   /// <para>(2040,0080) Overlay Foreground Density</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayForegroundDensityRetired: number = 541065344;
   /// <summary>
   /// <para>(2040,0082) Overlay Background Density</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayBackgroundDensityRetired: number = 541065346;
   /// <summary>
   /// <para>(2040,0090) Overlay Mode</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayModeRetired: number = 541065360;
   /// <summary>
   /// <para>(2040,0100) Threshold Density</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ThresholdDensityRetired: number = 541065472;
   /// <summary>
   /// <para>(2040,0500) Referenced Image Box Sequence (Retired)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ReferencedImageBoxSequenceRetired: number = 541066496;
   /// <summary>
   /// <para>(2050,0010) Presentation LUT Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PresentationLutSequence: number = 542113808;
   /// <summary>
   /// <para>(2050,0020) Presentation LUT Shape</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PresentationLutShape: number = 542113824;
   /// <summary>
   /// <para>(2050,0500) Referenced Presentation  LUT Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedPresentationLutSequence: number = 542115072;
   /// <summary>
   /// <para>(2100,0010) Print Job ID</para>
   /// <para> VR: SH VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static PrintJobIdRetired: number = 553648144;
   /// <summary>
   /// <para>(2100,0020) Execution Status</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ExecutionStatus: number = 553648160;
   /// <summary>
   /// <para>(2100,0030) Execution Status Info</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ExecutionStatusInfo: number = 553648176;
   /// <summary>
   /// <para>(2100,0040) Creation Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static CreationDate: number = 553648192;
   /// <summary>
   /// <para>(2100,0050) Creation Time</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static CreationTime: number = 553648208;
   /// <summary>
   /// <para>(2100,0070) Originator</para>
   /// <para> VR: AE VM:1</para>
   /// </summary>
   public static Originator: number = 553648240;
   /// <summary>
   /// <para>(2100,0140) Destination AE</para>
   /// <para> VR: AE VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DestinationAeRetired: number = 553648448;
   /// <summary>
   /// <para>(2100,0160) Owner ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static OwnerId: number = 553648480;
   /// <summary>
   /// <para>(2100,0170) Number of Films</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfFilms: number = 553648496;
   /// <summary>
   /// <para>(2100,0500) Referenced Print Job Sequence (Pull Stored Print)</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ReferencedPrintJobSequencePullStoredPrintRetired: number = 553649408;
   /// <summary>
   /// <para>(2110,0010) Printer Status</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PrinterStatus: number = 554696720;
   /// <summary>
   /// <para>(2110,0020) Printer Status Info</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PrinterStatusInfo: number = 554696736;
   /// <summary>
   /// <para>(2110,0030) Printer Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static PrinterName: number = 554696752;
   /// <summary>
   /// <para>(2110,0099) Print Queue ID</para>
   /// <para> VR: SH VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static PrintQueueIdRetired: number = 554696857;
   /// <summary>
   /// <para>(2120,0010) Queue Status</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static QueueStatusRetired: number = 555745296;
   /// <summary>
   /// <para>(2120,0050) Print Job Description Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static PrintJobDescriptionSequenceRetired: number = 555745360;
   /// <summary>
   /// <para>(2120,0070) Referenced Print Job Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ReferencedPrintJobSequenceRetired: number = 555745392;
   /// <summary>
   /// <para>(2130,0010) Print Management Capabilities Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static PrintManagementCapabilitiesSequenceRetired: number = 556793872;
   /// <summary>
   /// <para>(2130,0015) Printer Characteristics Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static PrinterCharacteristicsSequenceRetired: number = 556793877;
   /// <summary>
   /// <para>(2130,0030) Film Box Content Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static FilmBoxContentSequenceRetired: number = 556793904;
   /// <summary>
   /// <para>(2130,0040) Image Box Content Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ImageBoxContentSequenceRetired: number = 556793920;
   /// <summary>
   /// <para>(2130,0050) Annotation Content Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static AnnotationContentSequenceRetired: number = 556793936;
   /// <summary>
   /// <para>(2130,0060) Image Overlay Box Content Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ImageOverlayBoxContentSequenceRetired: number = 556793952;
   /// <summary>
   /// <para>(2130,0080) Presentation LUT Content Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static PresentationLutContentSequenceRetired: number = 556793984;
   /// <summary>
   /// <para>(2130,00A0) Proposed Study Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ProposedStudySequenceRetired: number = 556794016;
   /// <summary>
   /// <para>(2130,00C0) Original Image Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OriginalImageSequenceRetired: number = 556794048;
   /// <summary>
   /// <para>(2200,0001) Label Using Information Extracted From Instances</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static LabelUsingInformationExtractedFromInstances: number = 570425345;
   /// <summary>
   /// <para>(2200,0002) Label Text</para>
   /// <para> VR: UT VM:1</para>
   /// </summary>
   public static LabelText: number = 570425346;
   /// <summary>
   /// <para>(2200,0003) Label Style Selection</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static LabelStyleSelection: number = 570425347;
   /// <summary>
   /// <para>(2200,0004) Media Disposition</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static MediaDisposition: number = 570425348;
   /// <summary>
   /// <para>(2200,0005) Barcode Value</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static BarcodeValue: number = 570425349;
   /// <summary>
   /// <para>(2200,0006) Barcode Symbology</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BarcodeSymbology: number = 570425350;
   /// <summary>
   /// <para>(2200,0007) Allow Media Splitting</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AllowMediaSplitting: number = 570425351;
   /// <summary>
   /// <para>(2200,0008) Include Non-DICOM Objects</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static IncludeNonDicomObjects: number = 570425352;
   /// <summary>
   /// <para>(2200,0009) Include Display Application</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static IncludeDisplayApplication: number = 570425353;
   /// <summary>
   /// <para>(2200,000A) Preserve Composite Instances After Media Creation</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PreserveCompositeInstancesAfterMediaCreation: number = 570425354;
   /// <summary>
   /// <para>(2200,000B) Total Number of Pieces of Media Created</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static TotalNumberOfPiecesOfMediaCreated: number = 570425355;
   /// <summary>
   /// <para>(2200,000C) Requested Media Application Profile</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static RequestedMediaApplicationProfile: number = 570425356;
   /// <summary>
   /// <para>(2200,000D) Referenced Storage Media Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedStorageMediaSequence: number = 570425357;
   /// <summary>
   /// <para>(2200,000E) Failure Attributes</para>
   /// <para> VR: AT VM:1-n</para>
   /// </summary>
   public static FailureAttributes: number = 570425358;
   /// <summary>
   /// <para>(2200,000F) Allow Lossy Compression</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AllowLossyCompression: number = 570425359;
   /// <summary>
   /// <para>(2200,0020) Request Priority</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RequestPriority: number = 570425376;
   /// <summary>
   /// <para>(3002,0002) RT Image Label</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static RtImageLabel: number = 805437442;
   /// <summary>
   /// <para>(3002,0003) RT Image Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static RtImageName: number = 805437443;
   /// <summary>
   /// <para>(3002,0004) RT Image Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static RtImageDescription: number = 805437444;
   /// <summary>
   /// <para>(3002,000A) Reported Values Origin</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ReportedValuesOrigin: number = 805437450;
   /// <summary>
   /// <para>(3002,000C) RT Image Plane</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RtImagePlane: number = 805437452;
   /// <summary>
   /// <para>(3002,000D) X-Ray Image Receptor Translation</para>
   /// <para> VR: DS VM:3</para>
   /// </summary>
   public static XRayImageReceptorTranslation: number = 805437453;
   /// <summary>
   /// <para>(3002,000E) X-Ray Image Receptor Angle</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static XRayImageReceptorAngle: number = 805437454;
   /// <summary>
   /// <para>(3002,0010) RT Image Orientation</para>
   /// <para> VR: DS VM:6</para>
   /// </summary>
   public static RtImageOrientation: number = 805437456;
   /// <summary>
   /// <para>(3002,0011) Image Plane Pixel Spacing</para>
   /// <para> VR: DS VM:2</para>
   /// </summary>
   public static ImagePlanePixelSpacing: number = 805437457;
   /// <summary>
   /// <para>(3002,0012) RT Image Position</para>
   /// <para> VR: DS VM:2</para>
   /// </summary>
   public static RtImagePosition: number = 805437458;
   /// <summary>
   /// <para>(3002,0020) Radiation Machine Name</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static RadiationMachineName: number = 805437472;
   /// <summary>
   /// <para>(3002,0022) Radiation Machine SAD</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static RadiationMachineSad: number = 805437474;
   /// <summary>
   /// <para>(3002,0024) Radiation Machine SSD</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static RadiationMachineSsd: number = 805437476;
   /// <summary>
   /// <para>(3002,0026) RT Image SID</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static RtImageSid: number = 805437478;
   /// <summary>
   /// <para>(3002,0028) Source to Reference Object Distance</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SourceToReferenceObjectDistance: number = 805437480;
   /// <summary>
   /// <para>(3002,0029) Fraction Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static FractionNumber: number = 805437481;
   /// <summary>
   /// <para>(3002,0030) Exposure Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ExposureSequence: number = 805437488;
   /// <summary>
   /// <para>(3002,0032) Meterset Exposure</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static MetersetExposure: number = 805437490;
   /// <summary>
   /// <para>(3002,0034) Diaphragm Position</para>
   /// <para> VR: DS VM:4</para>
   /// </summary>
   public static DiaphragmPosition: number = 805437492;
   /// <summary>
   /// <para>(3002,0040) Fluence Map Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FluenceMapSequence: number = 805437504;
   /// <summary>
   /// <para>(3002,0041) Fluence Data Source</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FluenceDataSource: number = 805437505;
   /// <summary>
   /// <para>(3002,0042) Fluence Data Scale</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static FluenceDataScale: number = 805437506;
   /// <summary>
   /// <para>(3002,0050) Primary Fluence Mode Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PrimaryFluenceModeSequence: number = 805437520;
   /// <summary>
   /// <para>(3002,0051) Fluence Mode</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FluenceMode: number = 805437521;
   /// <summary>
   /// <para>(3002,0052) Fluence Mode ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static FluenceModeId: number = 805437522;
   /// <summary>
   /// <para>(3004,0001) DVH Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DvhType: number = 805568513;
   /// <summary>
   /// <para>(3004,0002) Dose Units</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DoseUnits: number = 805568514;
   /// <summary>
   /// <para>(3004,0004) Dose Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DoseType: number = 805568516;
   /// <summary>
   /// <para>(3004,0006) Dose Comment</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static DoseComment: number = 805568518;
   /// <summary>
   /// <para>(3004,0008) Normalization Point</para>
   /// <para> VR: DS VM:3</para>
   /// </summary>
   public static NormalizationPoint: number = 805568520;
   /// <summary>
   /// <para>(3004,000A) Dose Summation Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DoseSummationType: number = 805568522;
   /// <summary>
   /// <para>(3004,000C) Grid Frame Offset Vector</para>
   /// <para> VR: DS VM:2-n</para>
   /// </summary>
   public static GridFrameOffsetVector: number = 805568524;
   /// <summary>
   /// <para>(3004,000E) Dose Grid Scaling</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DoseGridScaling: number = 805568526;
   /// <summary>
   /// <para>(3004,0010) RT Dose ROI Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RtDoseRoiSequence: number = 805568528;
   /// <summary>
   /// <para>(3004,0012) Dose Value</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DoseValue: number = 805568530;
   /// <summary>
   /// <para>(3004,0014) Tissue Heterogeneity Correction</para>
   /// <para> VR: CS VM:1-3</para>
   /// </summary>
   public static TissueHeterogeneityCorrection: number = 805568532;
   /// <summary>
   /// <para>(3004,0040) DVH Normalization Point</para>
   /// <para> VR: DS VM:3</para>
   /// </summary>
   public static DvhNormalizationPoint: number = 805568576;
   /// <summary>
   /// <para>(3004,0042) DVH Normalization Dose Value</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DvhNormalizationDoseValue: number = 805568578;
   /// <summary>
   /// <para>(3004,0050) DVH Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DvhSequence: number = 805568592;
   /// <summary>
   /// <para>(3004,0052) DVH Dose Scaling</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DvhDoseScaling: number = 805568594;
   /// <summary>
   /// <para>(3004,0054) DVH Volume Units</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DvhVolumeUnits: number = 805568596;
   /// <summary>
   /// <para>(3004,0056) DVH Number of Bins</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static DvhNumberOfBins: number = 805568598;
   /// <summary>
   /// <para>(3004,0058) DVH Data</para>
   /// <para> VR: DS VM:2-2n</para>
   /// </summary>
   public static DvhData: number = 805568600;
   /// <summary>
   /// <para>(3004,0060) DVH Referenced ROI Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DvhReferencedRoiSequence: number = 805568608;
   /// <summary>
   /// <para>(3004,0062) DVH ROI Contribution Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DvhRoiContributionType: number = 805568610;
   /// <summary>
   /// <para>(3004,0070) DVH Minimum Dose</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DvhMinimumDose: number = 805568624;
   /// <summary>
   /// <para>(3004,0072) DVH Maximum Dose</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DvhMaximumDose: number = 805568626;
   /// <summary>
   /// <para>(3004,0074) DVH Mean Dose</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DvhMeanDose: number = 805568628;
   /// <summary>
   /// <para>(3006,0002) Structure Set Label</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static StructureSetLabel: number = 805699586;
   /// <summary>
   /// <para>(3006,0004) Structure Set Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static StructureSetName: number = 805699588;
   /// <summary>
   /// <para>(3006,0006) Structure Set Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static StructureSetDescription: number = 805699590;
   /// <summary>
   /// <para>(3006,0008) Structure Set Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static StructureSetDate: number = 805699592;
   /// <summary>
   /// <para>(3006,0009) Structure Set Time</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static StructureSetTime: number = 805699593;
   /// <summary>
   /// <para>(3006,0010) Referenced Frame of Reference Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedFrameOfReferenceSequence: number = 805699600;
   /// <summary>
   /// <para>(3006,0012) RT Referenced Study Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RtReferencedStudySequence: number = 805699602;
   /// <summary>
   /// <para>(3006,0014) RT Referenced Series Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RtReferencedSeriesSequence: number = 805699604;
   /// <summary>
   /// <para>(3006,0016) Contour Image Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ContourImageSequence: number = 805699606;
   /// <summary>
   /// <para>(3006,0020) Structure Set ROI Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static StructureSetRoiSequence: number = 805699616;
   /// <summary>
   /// <para>(3006,0022) ROI Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static RoiNumber: number = 805699618;
   /// <summary>
   /// <para>(3006,0024) Referenced Frame of Reference UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static ReferencedFrameOfReferenceUid: number = 805699620;
   /// <summary>
   /// <para>(3006,0026) ROI Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static RoiName: number = 805699622;
   /// <summary>
   /// <para>(3006,0028) ROI Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static RoiDescription: number = 805699624;
   /// <summary>
   /// <para>(3006,002A) ROI Display Color</para>
   /// <para> VR: IS VM:3</para>
   /// </summary>
   public static RoiDisplayColor: number = 805699626;
   /// <summary>
   /// <para>(3006,002C) ROI Volume</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static RoiVolume: number = 805699628;
   /// <summary>
   /// <para>(3006,0030) RT Related ROI Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RtRelatedRoiSequence: number = 805699632;
   /// <summary>
   /// <para>(3006,0033) RT ROI Relationship</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RtRoiRelationship: number = 805699635;
   /// <summary>
   /// <para>(3006,0036) ROI Generation Algorithm</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RoiGenerationAlgorithm: number = 805699638;
   /// <summary>
   /// <para>(3006,0038) ROI Generation Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static RoiGenerationDescription: number = 805699640;
   /// <summary>
   /// <para>(3006,0039) ROI Contour Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RoiContourSequence: number = 805699641;
   /// <summary>
   /// <para>(3006,0040) Contour Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ContourSequence: number = 805699648;
   /// <summary>
   /// <para>(3006,0042) Contour Geometric Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ContourGeometricType: number = 805699650;
   /// <summary>
   /// <para>(3006,0044) Contour Slab Thickness</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ContourSlabThickness: number = 805699652;
   /// <summary>
   /// <para>(3006,0045) Contour Offset Vector</para>
   /// <para> VR: DS VM:3</para>
   /// </summary>
   public static ContourOffsetVector: number = 805699653;
   /// <summary>
   /// <para>(3006,0046) Number of Contour Points</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfContourPoints: number = 805699654;
   /// <summary>
   /// <para>(3006,0048) Contour Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ContourNumber: number = 805699656;
   /// <summary>
   /// <para>(3006,0049) Attached Contours</para>
   /// <para> VR: IS VM:1-n</para>
   /// </summary>
   public static AttachedContours: number = 805699657;
   /// <summary>
   /// <para>(3006,0050) Contour Data</para>
   /// <para> VR: DS VM:3-3n</para>
   /// </summary>
   public static ContourData: number = 805699664;
   /// <summary>
   /// <para>(3006,0080) RT ROI Observations Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RtRoiObservationsSequence: number = 805699712;
   /// <summary>
   /// <para>(3006,0082) Observation Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ObservationNumber: number = 805699714;
   /// <summary>
   /// <para>(3006,0084) Referenced ROI Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ReferencedRoiNumber: number = 805699716;
   /// <summary>
   /// <para>(3006,0085) ROI Observation Label</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static RoiObservationLabel: number = 805699717;
   /// <summary>
   /// <para>(3006,0086) RT ROI Identification Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RtRoiIdentificationCodeSequence: number = 805699718;
   /// <summary>
   /// <para>(3006,0088) ROI Observation Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static RoiObservationDescription: number = 805699720;
   /// <summary>
   /// <para>(3006,00A0) Related RT ROI Observations Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RelatedRtRoiObservationsSequence: number = 805699744;
   /// <summary>
   /// <para>(3006,00A4) RT ROI Interpreted Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RtRoiInterpretedType: number = 805699748;
   /// <summary>
   /// <para>(3006,00A6) ROI Interpreter</para>
   /// <para> VR: PN VM:1</para>
   /// </summary>
   public static RoiInterpreter: number = 805699750;
   /// <summary>
   /// <para>(3006,00B0) ROI Physical Properties Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RoiPhysicalPropertiesSequence: number = 805699760;
   /// <summary>
   /// <para>(3006,00B2) ROI Physical Property</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RoiPhysicalProperty: number = 805699762;
   /// <summary>
   /// <para>(3006,00B4) ROI Physical Property Value</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static RoiPhysicalPropertyValue: number = 805699764;
   /// <summary>
   /// <para>(3006,00B6) ROI Elemental Composition Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RoiElementalCompositionSequence: number = 805699766;
   /// <summary>
   /// <para>(3006,00B7) ROI Elemental Composition Atomic Number</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static RoiElementalCompositionAtomicNumber: number = 805699767;
   /// <summary>
   /// <para>(3006,00B8) ROI Elemental Composition Atomic Mass Fraction</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static RoiElementalCompositionAtomicMassFraction: number = 805699768;
   /// <summary>
   /// <para>(3006,00C0) Frame of Reference Relationship Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FrameOfReferenceRelationshipSequence: number = 805699776;
   /// <summary>
   /// <para>(3006,00C2) Related Frame of Reference UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static RelatedFrameOfReferenceUid: number = 805699778;
   /// <summary>
   /// <para>(3006,00C4) Frame of Reference Transformation Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FrameOfReferenceTransformationType: number = 805699780;
   /// <summary>
   /// <para>(3006,00C6) Frame of Reference Transformation Matrix</para>
   /// <para> VR: DS VM:16</para>
   /// </summary>
   public static FrameOfReferenceTransformationMatrix: number = 805699782;
   /// <summary>
   /// <para>(3006,00C8) Frame of Reference Transformation Comment</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static FrameOfReferenceTransformationComment: number = 805699784;
   /// <summary>
   /// <para>(3008,0010) Measured Dose Reference Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MeasuredDoseReferenceSequence: number = 805830672;
   /// <summary>
   /// <para>(3008,0012) Measured Dose Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static MeasuredDoseDescription: number = 805830674;
   /// <summary>
   /// <para>(3008,0014) Measured Dose Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static MeasuredDoseType: number = 805830676;
   /// <summary>
   /// <para>(3008,0016) Measured Dose Value</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static MeasuredDoseValue: number = 805830678;
   /// <summary>
   /// <para>(3008,0020) Treatment Session Beam Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static TreatmentSessionBeamSequence: number = 805830688;
   /// <summary>
   /// <para>(3008,0021) Treatment Session Ion Beam Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static TreatmentSessionIonBeamSequence: number = 805830689;
   /// <summary>
   /// <para>(3008,0022) Current Fraction Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static CurrentFractionNumber: number = 805830690;
   /// <summary>
   /// <para>(3008,0024) Treatment Control Point Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static TreatmentControlPointDate: number = 805830692;
   /// <summary>
   /// <para>(3008,0025) Treatment Control Point Time</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static TreatmentControlPointTime: number = 805830693;
   /// <summary>
   /// <para>(3008,002A) Treatment Termination Status</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TreatmentTerminationStatus: number = 805830698;
   /// <summary>
   /// <para>(3008,002B) Treatment Termination Code</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static TreatmentTerminationCode: number = 805830699;
   /// <summary>
   /// <para>(3008,002C) Treatment Verification Status</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TreatmentVerificationStatus: number = 805830700;
   /// <summary>
   /// <para>(3008,0030) Referenced Treatment Record Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedTreatmentRecordSequence: number = 805830704;
   /// <summary>
   /// <para>(3008,0032) Specified Primary Meterset </para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SpecifiedPrimaryMeterset: number = 805830706;
   /// <summary>
   /// <para>(3008,0033) Specified Secondary Meterset </para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SpecifiedSecondaryMeterset: number = 805830707;
   /// <summary>
   /// <para>(3008,0036) Delivered Primary Meterset </para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DeliveredPrimaryMeterset: number = 805830710;
   /// <summary>
   /// <para>(3008,0037) Delivered Secondary Meterset </para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DeliveredSecondaryMeterset: number = 805830711;
   /// <summary>
   /// <para>(3008,003A) Specified Treatment Time</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SpecifiedTreatmentTime: number = 805830714;
   /// <summary>
   /// <para>(3008,003B) Delivered Treatment Time</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DeliveredTreatmentTime: number = 805830715;
   /// <summary>
   /// <para>(3008,0040) Control Point Delivery Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ControlPointDeliverySequence: number = 805830720;
   /// <summary>
   /// <para>(3008,0041) Ion Control Point Delivery Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IonControlPointDeliverySequence: number = 805830721;
   /// <summary>
   /// <para>(3008,0042) Specified Meterset</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SpecifiedMeterset: number = 805830722;
   /// <summary>
   /// <para>(3008,0044) Delivered Meterset</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DeliveredMeterset: number = 805830724;
   /// <summary>
   /// <para>(3008,0045) Meterset Rate Set</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static MetersetRateSet: number = 805830725;
   /// <summary>
   /// <para>(3008,0046) Meterset Rate Delivered</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static MetersetRateDelivered: number = 805830726;
   /// <summary>
   /// <para>(3008,0047) Scan Spot Metersets Delivered</para>
   /// <para> VR: FL VM:1-n</para>
   /// </summary>
   public static ScanSpotMetersetsDelivered: number = 805830727;
   /// <summary>
   /// <para>(3008,0048) Dose Rate Delivered</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DoseRateDelivered: number = 805830728;
   /// <summary>
   /// <para>(3008,0050) Treatment Summary Calculated Dose Reference Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static TreatmentSummaryCalculatedDoseReferenceSequence: number = 805830736;
   /// <summary>
   /// <para>(3008,0052) Cumulative Dose to Dose Reference</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static CumulativeDoseToDoseReference: number = 805830738;
   /// <summary>
   /// <para>(3008,0054) First Treatment Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static FirstTreatmentDate: number = 805830740;
   /// <summary>
   /// <para>(3008,0056) Most Recent Treatment Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static MostRecentTreatmentDate: number = 805830742;
   /// <summary>
   /// <para>(3008,005A) Number of Fractions Delivered</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfFractionsDelivered: number = 805830746;
   /// <summary>
   /// <para>(3008,0060) Override Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OverrideSequence: number = 805830752;
   /// <summary>
   /// <para>(3008,0061) Parameter Sequence Pointer</para>
   /// <para> VR: AT VM:1</para>
   /// </summary>
   public static ParameterSequencePointer: number = 805830753;
   /// <summary>
   /// <para>(3008,0062) Override Parameter Pointer</para>
   /// <para> VR: AT VM:1</para>
   /// </summary>
   public static OverrideParameterPointer: number = 805830754;
   /// <summary>
   /// <para>(3008,0063) Parameter Item Index</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ParameterItemIndex: number = 805830755;
   /// <summary>
   /// <para>(3008,0064) Measured Dose Reference Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static MeasuredDoseReferenceNumber: number = 805830756;
   /// <summary>
   /// <para>(3008,0065) Parameter Pointer</para>
   /// <para> VR: AT VM:1</para>
   /// </summary>
   public static ParameterPointer: number = 805830757;
   /// <summary>
   /// <para>(3008,0066) Override Reason</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static OverrideReason: number = 805830758;
   /// <summary>
   /// <para>(3008,0068) Corrected Parameter Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static CorrectedParameterSequence: number = 805830760;
   /// <summary>
   /// <para>(3008,006A) Correction Value</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static CorrectionValue: number = 805830762;
   /// <summary>
   /// <para>(3008,0070) Calculated Dose Reference Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static CalculatedDoseReferenceSequence: number = 805830768;
   /// <summary>
   /// <para>(3008,0072) Calculated Dose Reference Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static CalculatedDoseReferenceNumber: number = 805830770;
   /// <summary>
   /// <para>(3008,0074) Calculated Dose Reference Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static CalculatedDoseReferenceDescription: number = 805830772;
   /// <summary>
   /// <para>(3008,0076) Calculated Dose Reference Dose Value</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static CalculatedDoseReferenceDoseValue: number = 805830774;
   /// <summary>
   /// <para>(3008,0078) Start Meterset</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static StartMeterset: number = 805830776;
   /// <summary>
   /// <para>(3008,007A) End Meterset</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static EndMeterset: number = 805830778;
   /// <summary>
   /// <para>(3008,0080) Referenced Measured Dose Reference Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedMeasuredDoseReferenceSequence: number = 805830784;
   /// <summary>
   /// <para>(3008,0082) Referenced Measured Dose Reference Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ReferencedMeasuredDoseReferenceNumber: number = 805830786;
   /// <summary>
   /// <para>(3008,0090) Referenced Calculated Dose Reference Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedCalculatedDoseReferenceSequence: number = 805830800;
   /// <summary>
   /// <para>(3008,0092) Referenced Calculated Dose Reference Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ReferencedCalculatedDoseReferenceNumber: number = 805830802;
   /// <summary>
   /// <para>(3008,00A0) Beam Limiting Device Leaf Pairs Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static BeamLimitingDeviceLeafPairsSequence: number = 805830816;
   /// <summary>
   /// <para>(3008,00B0) Recorded Wedge Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RecordedWedgeSequence: number = 805830832;
   /// <summary>
   /// <para>(3008,00C0) Recorded Compensator Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RecordedCompensatorSequence: number = 805830848;
   /// <summary>
   /// <para>(3008,00D0) Recorded Block Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RecordedBlockSequence: number = 805830864;
   /// <summary>
   /// <para>(3008,00E0) Treatment Summary Measured Dose Reference Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static TreatmentSummaryMeasuredDoseReferenceSequence: number = 805830880;
   /// <summary>
   /// <para>(3008,00F0) Recorded Snout Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RecordedSnoutSequence: number = 805830896;
   /// <summary>
   /// <para>(3008,00F2) Recorded Range Shifter Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RecordedRangeShifterSequence: number = 805830898;
   /// <summary>
   /// <para>(3008,00F4) Recorded Lateral Spreading Device Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RecordedLateralSpreadingDeviceSequence: number = 805830900;
   /// <summary>
   /// <para>(3008,00F6) Recorded Range Modulator Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RecordedRangeModulatorSequence: number = 805830902;
   /// <summary>
   /// <para>(3008,0100) Recorded Source Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RecordedSourceSequence: number = 805830912;
   /// <summary>
   /// <para>(3008,0105) Source Serial Number</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static SourceSerialNumber: number = 805830917;
   /// <summary>
   /// <para>(3008,0110) Treatment Session Application Setup Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static TreatmentSessionApplicationSetupSequence: number = 805830928;
   /// <summary>
   /// <para>(3008,0116) Application Setup Check</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ApplicationSetupCheck: number = 805830934;
   /// <summary>
   /// <para>(3008,0120) Recorded Brachy Accessory Device Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RecordedBrachyAccessoryDeviceSequence: number = 805830944;
   /// <summary>
   /// <para>(3008,0122) Referenced Brachy Accessory Device Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ReferencedBrachyAccessoryDeviceNumber: number = 805830946;
   /// <summary>
   /// <para>(3008,0130) Recorded Channel Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RecordedChannelSequence: number = 805830960;
   /// <summary>
   /// <para>(3008,0132) Specified Channel Total Time</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SpecifiedChannelTotalTime: number = 805830962;
   /// <summary>
   /// <para>(3008,0134) Delivered Channel Total Time</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DeliveredChannelTotalTime: number = 805830964;
   /// <summary>
   /// <para>(3008,0136) Specified Number of Pulses</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static SpecifiedNumberOfPulses: number = 805830966;
   /// <summary>
   /// <para>(3008,0138) Delivered Number of Pulses</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static DeliveredNumberOfPulses: number = 805830968;
   /// <summary>
   /// <para>(3008,013A) Specified Pulse Repetition Interval</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SpecifiedPulseRepetitionInterval: number = 805830970;
   /// <summary>
   /// <para>(3008,013C) Delivered Pulse Repetition Interval</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DeliveredPulseRepetitionInterval: number = 805830972;
   /// <summary>
   /// <para>(3008,0140) Recorded Source Applicator Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RecordedSourceApplicatorSequence: number = 805830976;
   /// <summary>
   /// <para>(3008,0142) Referenced Source Applicator Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ReferencedSourceApplicatorNumber: number = 805830978;
   /// <summary>
   /// <para>(3008,0150) Recorded Channel Shield Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RecordedChannelShieldSequence: number = 805830992;
   /// <summary>
   /// <para>(3008,0152) Referenced Channel Shield Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ReferencedChannelShieldNumber: number = 805830994;
   /// <summary>
   /// <para>(3008,0160) Brachy Control Point Delivered Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static BrachyControlPointDeliveredSequence: number = 805831008;
   /// <summary>
   /// <para>(3008,0162) Safe Position Exit Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static SafePositionExitDate: number = 805831010;
   /// <summary>
   /// <para>(3008,0164) Safe Position Exit Time</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static SafePositionExitTime: number = 805831012;
   /// <summary>
   /// <para>(3008,0166) Safe Position Return Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static SafePositionReturnDate: number = 805831014;
   /// <summary>
   /// <para>(3008,0168) Safe Position Return Time</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static SafePositionReturnTime: number = 805831016;
   /// <summary>
   /// <para>(3008,0200) Current Treatment Status</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CurrentTreatmentStatus: number = 805831168;
   /// <summary>
   /// <para>(3008,0202) Treatment Status Comment</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static TreatmentStatusComment: number = 805831170;
   /// <summary>
   /// <para>(3008,0220) Fraction Group Summary Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FractionGroupSummarySequence: number = 805831200;
   /// <summary>
   /// <para>(3008,0223) Referenced Fraction Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ReferencedFractionNumber: number = 805831203;
   /// <summary>
   /// <para>(3008,0224) Fraction Group Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FractionGroupType: number = 805831204;
   /// <summary>
   /// <para>(3008,0230) Beam Stopper Position</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BeamStopperPosition: number = 805831216;
   /// <summary>
   /// <para>(3008,0240) Fraction Status Summary Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FractionStatusSummarySequence: number = 805831232;
   /// <summary>
   /// <para>(3008,0250) Treatment Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static TreatmentDate: number = 805831248;
   /// <summary>
   /// <para>(3008,0251) Treatment Time</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static TreatmentTime: number = 805831249;
   /// <summary>
   /// <para>(300A,0002) RT Plan Label</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static RtPlanLabel: number = 805961730;
   /// <summary>
   /// <para>(300A,0003) RT Plan Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static RtPlanName: number = 805961731;
   /// <summary>
   /// <para>(300A,0004) RT Plan Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static RtPlanDescription: number = 805961732;
   /// <summary>
   /// <para>(300A,0006) RT Plan Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static RtPlanDate: number = 805961734;
   /// <summary>
   /// <para>(300A,0007) RT Plan Time</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static RtPlanTime: number = 805961735;
   /// <summary>
   /// <para>(300A,0009) Treatment Protocols</para>
   /// <para> VR: LO VM:1-n</para>
   /// </summary>
   public static TreatmentProtocols: number = 805961737;
   /// <summary>
   /// <para>(300A,000A) Plan Intent</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PlanIntent: number = 805961738;
   /// <summary>
   /// <para>(300A,000B) Treatment Sites</para>
   /// <para> VR: LO VM:1-n</para>
   /// </summary>
   public static TreatmentSites: number = 805961739;
   /// <summary>
   /// <para>(300A,000C) RT Plan Geometry</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RtPlanGeometry: number = 805961740;
   /// <summary>
   /// <para>(300A,000E) Prescription Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static PrescriptionDescription: number = 805961742;
   /// <summary>
   /// <para>(300A,0010) Dose Reference Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DoseReferenceSequence: number = 805961744;
   /// <summary>
   /// <para>(300A,0012) Dose Reference Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static DoseReferenceNumber: number = 805961746;
   /// <summary>
   /// <para>(300A,0013) Dose Reference UID</para>
   /// <para> VR: UI VM:1</para>
   /// </summary>
   public static DoseReferenceUid: number = 805961747;
   /// <summary>
   /// <para>(300A,0014) Dose Reference Structure Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DoseReferenceStructureType: number = 805961748;
   /// <summary>
   /// <para>(300A,0015) Nominal Beam Energy Unit</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static NominalBeamEnergyUnit: number = 805961749;
   /// <summary>
   /// <para>(300A,0016) Dose Reference Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static DoseReferenceDescription: number = 805961750;
   /// <summary>
   /// <para>(300A,0018) Dose Reference Point Coordinates</para>
   /// <para> VR: DS VM:3</para>
   /// </summary>
   public static DoseReferencePointCoordinates: number = 805961752;
   /// <summary>
   /// <para>(300A,001A) Nominal Prior Dose</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static NominalPriorDose: number = 805961754;
   /// <summary>
   /// <para>(300A,0020) Dose Reference Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DoseReferenceType: number = 805961760;
   /// <summary>
   /// <para>(300A,0021) Constraint Weight</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ConstraintWeight: number = 805961761;
   /// <summary>
   /// <para>(300A,0022) Delivery Warning Dose</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DeliveryWarningDose: number = 805961762;
   /// <summary>
   /// <para>(300A,0023) Delivery Maximum Dose</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DeliveryMaximumDose: number = 805961763;
   /// <summary>
   /// <para>(300A,0025) Target Minimum Dose</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TargetMinimumDose: number = 805961765;
   /// <summary>
   /// <para>(300A,0026) Target Prescription Dose</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TargetPrescriptionDose: number = 805961766;
   /// <summary>
   /// <para>(300A,0027) Target Maximum Dose</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TargetMaximumDose: number = 805961767;
   /// <summary>
   /// <para>(300A,0028) Target Underdose Volume Fraction</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TargetUnderdoseVolumeFraction: number = 805961768;
   /// <summary>
   /// <para>(300A,002A) Organ at Risk Full-volume Dose</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static OrganAtRiskFullVolumeDose: number = 805961770;
   /// <summary>
   /// <para>(300A,002B) Organ at Risk Limit Dose</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static OrganAtRiskLimitDose: number = 805961771;
   /// <summary>
   /// <para>(300A,002C) Organ at Risk Maximum Dose</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static OrganAtRiskMaximumDose: number = 805961772;
   /// <summary>
   /// <para>(300A,002D) Organ at Risk Overdose Volume Fraction</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static OrganAtRiskOverdoseVolumeFraction: number = 805961773;
   /// <summary>
   /// <para>(300A,0040) Tolerance Table Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ToleranceTableSequence: number = 805961792;
   /// <summary>
   /// <para>(300A,0042) Tolerance Table Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ToleranceTableNumber: number = 805961794;
   /// <summary>
   /// <para>(300A,0043) Tolerance Table Label</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static ToleranceTableLabel: number = 805961795;
   /// <summary>
   /// <para>(300A,0044) Gantry Angle Tolerance</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static GantryAngleTolerance: number = 805961796;
   /// <summary>
   /// <para>(300A,0046) Beam Limiting Device Angle Tolerance</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static BeamLimitingDeviceAngleTolerance: number = 805961798;
   /// <summary>
   /// <para>(300A,0048) Beam Limiting Device Tolerance Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static BeamLimitingDeviceToleranceSequence: number = 805961800;
   /// <summary>
   /// <para>(300A,004A) Beam Limiting Device Position Tolerance</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static BeamLimitingDevicePositionTolerance: number = 805961802;
   /// <summary>
   /// <para>(300A,004B) Snout Position Tolerance</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static SnoutPositionTolerance: number = 805961803;
   /// <summary>
   /// <para>(300A,004C) Patient Support Angle Tolerance</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static PatientSupportAngleTolerance: number = 805961804;
   /// <summary>
   /// <para>(300A,004E) Table Top Eccentric Angle Tolerance</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TableTopEccentricAngleTolerance: number = 805961806;
   /// <summary>
   /// <para>(300A,004F) Table Top Pitch Angle Tolerance</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static TableTopPitchAngleTolerance: number = 805961807;
   /// <summary>
   /// <para>(300A,0050) Table Top Roll Angle Tolerance</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static TableTopRollAngleTolerance: number = 805961808;
   /// <summary>
   /// <para>(300A,0051) Table Top Vertical Position Tolerance</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TableTopVerticalPositionTolerance: number = 805961809;
   /// <summary>
   /// <para>(300A,0052) Table Top Longitudinal Position Tolerance</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TableTopLongitudinalPositionTolerance: number = 805961810;
   /// <summary>
   /// <para>(300A,0053) Table Top Lateral Position Tolerance</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TableTopLateralPositionTolerance: number = 805961811;
   /// <summary>
   /// <para>(300A,0055) RT Plan Relationship</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RtPlanRelationship: number = 805961813;
   /// <summary>
   /// <para>(300A,0070) Fraction Group Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FractionGroupSequence: number = 805961840;
   /// <summary>
   /// <para>(300A,0071) Fraction Group Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static FractionGroupNumber: number = 805961841;
   /// <summary>
   /// <para>(300A,0072) Fraction Group Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static FractionGroupDescription: number = 805961842;
   /// <summary>
   /// <para>(300A,0078) Number of Fractions Planned</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfFractionsPlanned: number = 805961848;
   /// <summary>
   /// <para>(300A,0079) Number of Fraction Pattern Digits Per Day</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfFractionPatternDigitsPerDay: number = 805961849;
   /// <summary>
   /// <para>(300A,007A) Repeat Fraction Cycle Length</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static RepeatFractionCycleLength: number = 805961850;
   /// <summary>
   /// <para>(300A,007B) Fraction Pattern</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static FractionPattern: number = 805961851;
   /// <summary>
   /// <para>(300A,0080) Number of Beams</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfBeams: number = 805961856;
   /// <summary>
   /// <para>(300A,0082) Beam Dose Specification Point</para>
   /// <para> VR: DS VM:3</para>
   /// </summary>
   public static BeamDoseSpecificationPoint: number = 805961858;
   /// <summary>
   /// <para>(300A,0084) Beam Dose</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static BeamDose: number = 805961860;
   /// <summary>
   /// <para>(300A,0086) Beam Meterset</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static BeamMeterset: number = 805961862;
   /// <summary>
   /// <para>(300A,0088) Beam Dose Point Depth</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static BeamDosePointDepth: number = 805961864;
   /// <summary>
   /// <para>(300A,0089) Beam Dose Point Equivalent Depth</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static BeamDosePointEquivalentDepth: number = 805961865;
   /// <summary>
   /// <para>(300A,008A) Beam Dose Point SSD</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static BeamDosePointSsd: number = 805961866;
   /// <summary>
   /// <para>(300A,00A0) Number of Brachy Application Setups</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfBrachyApplicationSetups: number = 805961888;
   /// <summary>
   /// <para>(300A,00A2) Brachy Application Setup Dose Specification Point</para>
   /// <para> VR: DS VM:3</para>
   /// </summary>
   public static BrachyApplicationSetupDoseSpecificationPoint: number = 805961890;
   /// <summary>
   /// <para>(300A,00A4) Brachy Application Setup Dose</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static BrachyApplicationSetupDose: number = 805961892;
   /// <summary>
   /// <para>(300A,00B0) Beam Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static BeamSequence: number = 805961904;
   /// <summary>
   /// <para>(300A,00B2) Treatment Machine Name </para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static TreatmentMachineName: number = 805961906;
   /// <summary>
   /// <para>(300A,00B3) Primary Dosimeter Unit</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PrimaryDosimeterUnit: number = 805961907;
   /// <summary>
   /// <para>(300A,00B4) Source-Axis Distance</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SourceAxisDistance: number = 805961908;
   /// <summary>
   /// <para>(300A,00B6) Beam Limiting Device Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static BeamLimitingDeviceSequence: number = 805961910;
   /// <summary>
   /// <para>(300A,00B8) RT Beam Limiting Device Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RtBeamLimitingDeviceType: number = 805961912;
   /// <summary>
   /// <para>(300A,00BA) Source to Beam Limiting Device Distance</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SourceToBeamLimitingDeviceDistance: number = 805961914;
   /// <summary>
   /// <para>(300A,00BB) Isocenter to Beam Limiting Device Distance</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static IsocenterToBeamLimitingDeviceDistance: number = 805961915;
   /// <summary>
   /// <para>(300A,00BC) Number of Leaf/Jaw Pairs</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfLeafJawPairs: number = 805961916;
   /// <summary>
   /// <para>(300A,00BE) Leaf Position Boundaries</para>
   /// <para> VR: DS VM:3-n</para>
   /// </summary>
   public static LeafPositionBoundaries: number = 805961918;
   /// <summary>
   /// <para>(300A,00C0) Beam Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static BeamNumber: number = 805961920;
   /// <summary>
   /// <para>(300A,00C2) Beam Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static BeamName: number = 805961922;
   /// <summary>
   /// <para>(300A,00C3) Beam Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static BeamDescription: number = 805961923;
   /// <summary>
   /// <para>(300A,00C4) Beam Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BeamType: number = 805961924;
   /// <summary>
   /// <para>(300A,00C6) Radiation Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RadiationType: number = 805961926;
   /// <summary>
   /// <para>(300A,00C7) High-Dose Technique Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static HighDoseTechniqueType: number = 805961927;
   /// <summary>
   /// <para>(300A,00C8) Reference Image Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ReferenceImageNumber: number = 805961928;
   /// <summary>
   /// <para>(300A,00CA) Planned Verification Image Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PlannedVerificationImageSequence: number = 805961930;
   /// <summary>
   /// <para>(300A,00CC) Imaging Device-Specific Acquisition Parameters</para>
   /// <para> VR: LO VM:1-n</para>
   /// </summary>
   public static ImagingDeviceSpecificAcquisitionParameters: number = 805961932;
   /// <summary>
   /// <para>(300A,00CE) Treatment Delivery Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TreatmentDeliveryType: number = 805961934;
   /// <summary>
   /// <para>(300A,00D0) Number of Wedges</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfWedges: number = 805961936;
   /// <summary>
   /// <para>(300A,00D1) Wedge Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static WedgeSequence: number = 805961937;
   /// <summary>
   /// <para>(300A,00D2) Wedge Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static WedgeNumber: number = 805961938;
   /// <summary>
   /// <para>(300A,00D3) Wedge Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static WedgeType: number = 805961939;
   /// <summary>
   /// <para>(300A,00D4) Wedge ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static WedgeId: number = 805961940;
   /// <summary>
   /// <para>(300A,00D5) Wedge Angle</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static WedgeAngle: number = 805961941;
   /// <summary>
   /// <para>(300A,00D6) Wedge Factor</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static WedgeFactor: number = 805961942;
   /// <summary>
   /// <para>(300A,00D7) Total Wedge Tray Water-Equivalent Thickness</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static TotalWedgeTrayWaterEquivalentThickness: number = 805961943;
   /// <summary>
   /// <para>(300A,00D8) Wedge Orientation</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static WedgeOrientation: number = 805961944;
   /// <summary>
   /// <para>(300A,00D9) Isocenter to Wedge Tray Distance</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static IsocenterToWedgeTrayDistance: number = 805961945;
   /// <summary>
   /// <para>(300A,00DA) Source to Wedge Tray Distance</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SourceToWedgeTrayDistance: number = 805961946;
   /// <summary>
   /// <para>(300A,00DB) Wedge Thin Edge Position</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static WedgeThinEdgePosition: number = 805961947;
   /// <summary>
   /// <para>(300A,00DC) Bolus ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static BolusId: number = 805961948;
   /// <summary>
   /// <para>(300A,00DD) Bolus Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static BolusDescription: number = 805961949;
   /// <summary>
   /// <para>(300A,00E0) Number of Compensators</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfCompensators: number = 805961952;
   /// <summary>
   /// <para>(300A,00E1) Material ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static MaterialId: number = 805961953;
   /// <summary>
   /// <para>(300A,00E2) Total Compensator Tray Factor</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TotalCompensatorTrayFactor: number = 805961954;
   /// <summary>
   /// <para>(300A,00E3) Compensator Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static CompensatorSequence: number = 805961955;
   /// <summary>
   /// <para>(300A,00E4) Compensator Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static CompensatorNumber: number = 805961956;
   /// <summary>
   /// <para>(300A,00E5) Compensator ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static CompensatorId: number = 805961957;
   /// <summary>
   /// <para>(300A,00E6) Source to Compensator Tray Distance</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SourceToCompensatorTrayDistance: number = 805961958;
   /// <summary>
   /// <para>(300A,00E7) Compensator Rows</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static CompensatorRows: number = 805961959;
   /// <summary>
   /// <para>(300A,00E8) Compensator Columns</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static CompensatorColumns: number = 805961960;
   /// <summary>
   /// <para>(300A,00E9) Compensator Pixel Spacing</para>
   /// <para> VR: DS VM:2</para>
   /// </summary>
   public static CompensatorPixelSpacing: number = 805961961;
   /// <summary>
   /// <para>(300A,00EA) Compensator Position</para>
   /// <para> VR: DS VM:2</para>
   /// </summary>
   public static CompensatorPosition: number = 805961962;
   /// <summary>
   /// <para>(300A,00EB) Compensator Transmission Data</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static CompensatorTransmissionData: number = 805961963;
   /// <summary>
   /// <para>(300A,00EC) Compensator Thickness Data</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static CompensatorThicknessData: number = 805961964;
   /// <summary>
   /// <para>(300A,00ED) Number of Boli</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfBoli: number = 805961965;
   /// <summary>
   /// <para>(300A,00EE) Compensator Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CompensatorType: number = 805961966;
   /// <summary>
   /// <para>(300A,00F0) Number of Blocks</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfBlocks: number = 805961968;
   /// <summary>
   /// <para>(300A,00F2) Total Block Tray Factor</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TotalBlockTrayFactor: number = 805961970;
   /// <summary>
   /// <para>(300A,00F3) Total Block Tray Water-Equivalent Thickness</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static TotalBlockTrayWaterEquivalentThickness: number = 805961971;
   /// <summary>
   /// <para>(300A,00F4) Block Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static BlockSequence: number = 805961972;
   /// <summary>
   /// <para>(300A,00F5) Block Tray ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static BlockTrayId: number = 805961973;
   /// <summary>
   /// <para>(300A,00F6) Source to Block Tray Distance</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SourceToBlockTrayDistance: number = 805961974;
   /// <summary>
   /// <para>(300A,00F7) Isocenter to Block Tray Distance</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static IsocenterToBlockTrayDistance: number = 805961975;
   /// <summary>
   /// <para>(300A,00F8) Block Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BlockType: number = 805961976;
   /// <summary>
   /// <para>(300A,00F9) Accessory Code</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static AccessoryCode: number = 805961977;
   /// <summary>
   /// <para>(300A,00FA) Block Divergence</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BlockDivergence: number = 805961978;
   /// <summary>
   /// <para>(300A,00FB) Block Mounting Position</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BlockMountingPosition: number = 805961979;
   /// <summary>
   /// <para>(300A,00FC) Block Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static BlockNumber: number = 805961980;
   /// <summary>
   /// <para>(300A,00FE) Block Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static BlockName: number = 805961982;
   /// <summary>
   /// <para>(300A,0100) Block Thickness</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static BlockThickness: number = 805961984;
   /// <summary>
   /// <para>(300A,0102) Block Transmission</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static BlockTransmission: number = 805961986;
   /// <summary>
   /// <para>(300A,0104) Block Number of Points</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static BlockNumberOfPoints: number = 805961988;
   /// <summary>
   /// <para>(300A,0106) Block Data</para>
   /// <para> VR: DS VM:2-2n</para>
   /// </summary>
   public static BlockData: number = 805961990;
   /// <summary>
   /// <para>(300A,0107) Applicator Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ApplicatorSequence: number = 805961991;
   /// <summary>
   /// <para>(300A,0108) Applicator ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static ApplicatorId: number = 805961992;
   /// <summary>
   /// <para>(300A,0109) Applicator Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ApplicatorType: number = 805961993;
   /// <summary>
   /// <para>(300A,010A) Applicator Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ApplicatorDescription: number = 805961994;
   /// <summary>
   /// <para>(300A,010C) Cumulative Dose Reference Coefficient</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static CumulativeDoseReferenceCoefficient: number = 805961996;
   /// <summary>
   /// <para>(300A,010E) Final Cumulative Meterset Weight</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static FinalCumulativeMetersetWeight: number = 805961998;
   /// <summary>
   /// <para>(300A,0110) Number of Control Points</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfControlPoints: number = 805962000;
   /// <summary>
   /// <para>(300A,0111) Control Point Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ControlPointSequence: number = 805962001;
   /// <summary>
   /// <para>(300A,0112) Control Point Index</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ControlPointIndex: number = 805962002;
   /// <summary>
   /// <para>(300A,0114) Nominal Beam Energy</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static NominalBeamEnergy: number = 805962004;
   /// <summary>
   /// <para>(300A,0115) Dose Rate Set</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static DoseRateSet: number = 805962005;
   /// <summary>
   /// <para>(300A,0116) Wedge Position Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static WedgePositionSequence: number = 805962006;
   /// <summary>
   /// <para>(300A,0118) Wedge Position</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static WedgePosition: number = 805962008;
   /// <summary>
   /// <para>(300A,011A) Beam Limiting Device Position Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static BeamLimitingDevicePositionSequence: number = 805962010;
   /// <summary>
   /// <para>(300A,011C) Leaf/Jaw Positions</para>
   /// <para> VR: DS VM:2-2n</para>
   /// </summary>
   public static LeafJawPositions: number = 805962012;
   /// <summary>
   /// <para>(300A,011E) Gantry Angle</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static GantryAngle: number = 805962014;
   /// <summary>
   /// <para>(300A,011F) Gantry Rotation Direction</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static GantryRotationDirection: number = 805962015;
   /// <summary>
   /// <para>(300A,0120) Beam Limiting Device Angle</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static BeamLimitingDeviceAngle: number = 805962016;
   /// <summary>
   /// <para>(300A,0121) Beam Limiting Device Rotation Direction</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BeamLimitingDeviceRotationDirection: number = 805962017;
   /// <summary>
   /// <para>(300A,0122) Patient Support Angle</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static PatientSupportAngle: number = 805962018;
   /// <summary>
   /// <para>(300A,0123) Patient Support Rotation Direction</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PatientSupportRotationDirection: number = 805962019;
   /// <summary>
   /// <para>(300A,0124) Table Top Eccentric Axis Distance</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TableTopEccentricAxisDistance: number = 805962020;
   /// <summary>
   /// <para>(300A,0125) Table Top Eccentric Angle</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TableTopEccentricAngle: number = 805962021;
   /// <summary>
   /// <para>(300A,0126) Table Top Eccentric Rotation Direction</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TableTopEccentricRotationDirection: number = 805962022;
   /// <summary>
   /// <para>(300A,0128) Table Top Vertical Position</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TableTopVerticalPosition: number = 805962024;
   /// <summary>
   /// <para>(300A,0129) Table Top Longitudinal Position</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TableTopLongitudinalPosition: number = 805962025;
   /// <summary>
   /// <para>(300A,012A) Table Top Lateral Position</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TableTopLateralPosition: number = 805962026;
   /// <summary>
   /// <para>(300A,012C) Isocenter Position</para>
   /// <para> VR: DS VM:3</para>
   /// </summary>
   public static IsocenterPosition: number = 805962028;
   /// <summary>
   /// <para>(300A,012E) Surface Entry Point</para>
   /// <para> VR: DS VM:3</para>
   /// </summary>
   public static SurfaceEntryPoint: number = 805962030;
   /// <summary>
   /// <para>(300A,0130) Source to Surface Distance</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SourceToSurfaceDistance: number = 805962032;
   /// <summary>
   /// <para>(300A,0134) Cumulative Meterset Weight</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static CumulativeMetersetWeight: number = 805962036;
   /// <summary>
   /// <para>(300A,0140) Table Top Pitch Angle</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static TableTopPitchAngle: number = 805962048;
   /// <summary>
   /// <para>(300A,0142) Table Top Pitch Rotation Direction</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TableTopPitchRotationDirection: number = 805962050;
   /// <summary>
   /// <para>(300A,0144) Table Top Roll Angle</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static TableTopRollAngle: number = 805962052;
   /// <summary>
   /// <para>(300A,0146) Table Top Roll Rotation Direction</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TableTopRollRotationDirection: number = 805962054;
   /// <summary>
   /// <para>(300A,0148) Head Fixation Angle</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static HeadFixationAngle: number = 805962056;
   /// <summary>
   /// <para>(300A,014A) Gantry Pitch Angle</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static GantryPitchAngle: number = 805962058;
   /// <summary>
   /// <para>(300A,014C) Gantry Pitch Rotation Direction</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static GantryPitchRotationDirection: number = 805962060;
   /// <summary>
   /// <para>(300A,014E) Gantry Pitch Angle Tolerance</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static GantryPitchAngleTolerance: number = 805962062;
   /// <summary>
   /// <para>(300A,0180) Patient Setup Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PatientSetupSequence: number = 805962112;
   /// <summary>
   /// <para>(300A,0182) Patient Setup Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static PatientSetupNumber: number = 805962114;
   /// <summary>
   /// <para>(300A,0183) Patient Setup Label</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static PatientSetupLabel: number = 805962115;
   /// <summary>
   /// <para>(300A,0184) Patient Additional Position</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static PatientAdditionalPosition: number = 805962116;
   /// <summary>
   /// <para>(300A,0190) Fixation Device Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static FixationDeviceSequence: number = 805962128;
   /// <summary>
   /// <para>(300A,0192) Fixation Device Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static FixationDeviceType: number = 805962130;
   /// <summary>
   /// <para>(300A,0194) Fixation Device Label</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static FixationDeviceLabel: number = 805962132;
   /// <summary>
   /// <para>(300A,0196) Fixation Device Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static FixationDeviceDescription: number = 805962134;
   /// <summary>
   /// <para>(300A,0198) Fixation Device Position</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static FixationDevicePosition: number = 805962136;
   /// <summary>
   /// <para>(300A,0199) Fixation Device Pitch Angle</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static FixationDevicePitchAngle: number = 805962137;
   /// <summary>
   /// <para>(300A,019A) Fixation Device Roll Angle</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static FixationDeviceRollAngle: number = 805962138;
   /// <summary>
   /// <para>(300A,01A0) Shielding Device Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ShieldingDeviceSequence: number = 805962144;
   /// <summary>
   /// <para>(300A,01A2) Shielding Device Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ShieldingDeviceType: number = 805962146;
   /// <summary>
   /// <para>(300A,01A4) Shielding Device Label</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static ShieldingDeviceLabel: number = 805962148;
   /// <summary>
   /// <para>(300A,01A6) Shielding Device Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static ShieldingDeviceDescription: number = 805962150;
   /// <summary>
   /// <para>(300A,01A8) Shielding Device Position</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static ShieldingDevicePosition: number = 805962152;
   /// <summary>
   /// <para>(300A,01B0) Setup Technique</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SetupTechnique: number = 805962160;
   /// <summary>
   /// <para>(300A,01B2) Setup Technique Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static SetupTechniqueDescription: number = 805962162;
   /// <summary>
   /// <para>(300A,01B4) Setup Device Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SetupDeviceSequence: number = 805962164;
   /// <summary>
   /// <para>(300A,01B6) Setup Device Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SetupDeviceType: number = 805962166;
   /// <summary>
   /// <para>(300A,01B8) Setup Device Label</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static SetupDeviceLabel: number = 805962168;
   /// <summary>
   /// <para>(300A,01BA) Setup Device Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static SetupDeviceDescription: number = 805962170;
   /// <summary>
   /// <para>(300A,01BC) Setup Device Parameter</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SetupDeviceParameter: number = 805962172;
   /// <summary>
   /// <para>(300A,01D0) Setup Reference Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static SetupReferenceDescription: number = 805962192;
   /// <summary>
   /// <para>(300A,01D2) Table Top Vertical Setup Displacement</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TableTopVerticalSetupDisplacement: number = 805962194;
   /// <summary>
   /// <para>(300A,01D4) Table Top Longitudinal Setup Displacement</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TableTopLongitudinalSetupDisplacement: number = 805962196;
   /// <summary>
   /// <para>(300A,01D6) Table Top Lateral Setup Displacement</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TableTopLateralSetupDisplacement: number = 805962198;
   /// <summary>
   /// <para>(300A,0200) Brachy Treatment Technique</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BrachyTreatmentTechnique: number = 805962240;
   /// <summary>
   /// <para>(300A,0202) Brachy Treatment Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BrachyTreatmentType: number = 805962242;
   /// <summary>
   /// <para>(300A,0206) Treatment Machine Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static TreatmentMachineSequence: number = 805962246;
   /// <summary>
   /// <para>(300A,0210) Source Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SourceSequence: number = 805962256;
   /// <summary>
   /// <para>(300A,0212) Source Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static SourceNumber: number = 805962258;
   /// <summary>
   /// <para>(300A,0214) Source Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SourceType: number = 805962260;
   /// <summary>
   /// <para>(300A,0216) Source Manufacturer</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static SourceManufacturer: number = 805962262;
   /// <summary>
   /// <para>(300A,0218) Active Source Diameter</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ActiveSourceDiameter: number = 805962264;
   /// <summary>
   /// <para>(300A,021A) Active Source Length</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ActiveSourceLength: number = 805962266;
   /// <summary>
   /// <para>(300A,0222) Source Encapsulation Nominal Thickness</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SourceEncapsulationNominalThickness: number = 805962274;
   /// <summary>
   /// <para>(300A,0224) Source Encapsulation Nominal Transmission</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SourceEncapsulationNominalTransmission: number = 805962276;
   /// <summary>
   /// <para>(300A,0226) Source Isotope Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static SourceIsotopeName: number = 805962278;
   /// <summary>
   /// <para>(300A,0228) Source Isotope Half Life</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SourceIsotopeHalfLife: number = 805962280;
   /// <summary>
   /// <para>(300A,0229) Source Strength Units</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SourceStrengthUnits: number = 805962281;
   /// <summary>
   /// <para>(300A,022A) Reference Air Kerma Rate</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ReferenceAirKermaRate: number = 805962282;
   /// <summary>
   /// <para>(300A,022B) Source Strength</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SourceStrength: number = 805962283;
   /// <summary>
   /// <para>(300A,022C) Source Strength Reference Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static SourceStrengthReferenceDate: number = 805962284;
   /// <summary>
   /// <para>(300A,022E) Source Strength Reference Time</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static SourceStrengthReferenceTime: number = 805962286;
   /// <summary>
   /// <para>(300A,0230) Application Setup Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ApplicationSetupSequence: number = 805962288;
   /// <summary>
   /// <para>(300A,0232) Application Setup Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ApplicationSetupType: number = 805962290;
   /// <summary>
   /// <para>(300A,0234) Application Setup Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ApplicationSetupNumber: number = 805962292;
   /// <summary>
   /// <para>(300A,0236) Application Setup Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ApplicationSetupName: number = 805962294;
   /// <summary>
   /// <para>(300A,0238) Application Setup Manufacturer</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ApplicationSetupManufacturer: number = 805962296;
   /// <summary>
   /// <para>(300A,0240) Template Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static TemplateNumber: number = 805962304;
   /// <summary>
   /// <para>(300A,0242) Template Type</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static TemplateType: number = 805962306;
   /// <summary>
   /// <para>(300A,0244) Template Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static TemplateName: number = 805962308;
   /// <summary>
   /// <para>(300A,0250) Total Reference Air Kerma</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TotalReferenceAirKerma: number = 805962320;
   /// <summary>
   /// <para>(300A,0260) Brachy Accessory Device Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static BrachyAccessoryDeviceSequence: number = 805962336;
   /// <summary>
   /// <para>(300A,0262) Brachy Accessory Device Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static BrachyAccessoryDeviceNumber: number = 805962338;
   /// <summary>
   /// <para>(300A,0263) Brachy Accessory Device ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static BrachyAccessoryDeviceId: number = 805962339;
   /// <summary>
   /// <para>(300A,0264) Brachy Accessory Device Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static BrachyAccessoryDeviceType: number = 805962340;
   /// <summary>
   /// <para>(300A,0266) Brachy Accessory Device Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static BrachyAccessoryDeviceName: number = 805962342;
   /// <summary>
   /// <para>(300A,026A) Brachy Accessory Device Nominal Thickness</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static BrachyAccessoryDeviceNominalThickness: number = 805962346;
   /// <summary>
   /// <para>(300A,026C) Brachy Accessory Device Nominal Transmission</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static BrachyAccessoryDeviceNominalTransmission: number = 805962348;
   /// <summary>
   /// <para>(300A,0280) Channel Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ChannelSequence: number = 805962368;
   /// <summary>
   /// <para>(300A,0282) Channel Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ChannelNumber: number = 805962370;
   /// <summary>
   /// <para>(300A,0284) Channel Length</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ChannelLength: number = 805962372;
   /// <summary>
   /// <para>(300A,0286) Channel Total Time</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ChannelTotalTime: number = 805962374;
   /// <summary>
   /// <para>(300A,0288) Source Movement Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SourceMovementType: number = 805962376;
   /// <summary>
   /// <para>(300A,028A) Number of Pulses</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfPulses: number = 805962378;
   /// <summary>
   /// <para>(300A,028C) Pulse Repetition Interval</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static PulseRepetitionInterval: number = 805962380;
   /// <summary>
   /// <para>(300A,0290) Source Applicator Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static SourceApplicatorNumber: number = 805962384;
   /// <summary>
   /// <para>(300A,0291) Source Applicator ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static SourceApplicatorId: number = 805962385;
   /// <summary>
   /// <para>(300A,0292) Source Applicator Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static SourceApplicatorType: number = 805962386;
   /// <summary>
   /// <para>(300A,0294) Source Applicator Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static SourceApplicatorName: number = 805962388;
   /// <summary>
   /// <para>(300A,0296) Source Applicator Length</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SourceApplicatorLength: number = 805962390;
   /// <summary>
   /// <para>(300A,0298) Source Applicator Manufacturer</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static SourceApplicatorManufacturer: number = 805962392;
   /// <summary>
   /// <para>(300A,029C) Source Applicator Wall Nominal Thickness</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SourceApplicatorWallNominalThickness: number = 805962396;
   /// <summary>
   /// <para>(300A,029E) Source Applicator Wall Nominal Transmission</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SourceApplicatorWallNominalTransmission: number = 805962398;
   /// <summary>
   /// <para>(300A,02A0) Source Applicator Step Size</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static SourceApplicatorStepSize: number = 805962400;
   /// <summary>
   /// <para>(300A,02A2) Transfer Tube Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static TransferTubeNumber: number = 805962402;
   /// <summary>
   /// <para>(300A,02A4) Transfer Tube Length</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static TransferTubeLength: number = 805962404;
   /// <summary>
   /// <para>(300A,02B0) Channel Shield Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ChannelShieldSequence: number = 805962416;
   /// <summary>
   /// <para>(300A,02B2) Channel Shield Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ChannelShieldNumber: number = 805962418;
   /// <summary>
   /// <para>(300A,02B3) Channel Shield ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static ChannelShieldId: number = 805962419;
   /// <summary>
   /// <para>(300A,02B4) Channel Shield Name</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ChannelShieldName: number = 805962420;
   /// <summary>
   /// <para>(300A,02B8) Channel Shield Nominal Thickness</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ChannelShieldNominalThickness: number = 805962424;
   /// <summary>
   /// <para>(300A,02BA) Channel Shield Nominal Transmission</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ChannelShieldNominalTransmission: number = 805962426;
   /// <summary>
   /// <para>(300A,02C8) Final Cumulative Time Weight</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static FinalCumulativeTimeWeight: number = 805962440;
   /// <summary>
   /// <para>(300A,02D0) Brachy Control Point Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static BrachyControlPointSequence: number = 805962448;
   /// <summary>
   /// <para>(300A,02D2) Control Point Relative Position</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static ControlPointRelativePosition: number = 805962450;
   /// <summary>
   /// <para>(300A,02D4) Control Point 3D Position</para>
   /// <para> VR: DS VM:3</para>
   /// </summary>
   public static ControlPoint3dPosition: number = 805962452;
   /// <summary>
   /// <para>(300A,02D6) Cumulative Time Weight</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static CumulativeTimeWeight: number = 805962454;
   /// <summary>
   /// <para>(300A,02E0) Compensator Divergence</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CompensatorDivergence: number = 805962464;
   /// <summary>
   /// <para>(300A,02E1) Compensator Mounting Position</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CompensatorMountingPosition: number = 805962465;
   /// <summary>
   /// <para>(300A,02E2) Source to Compensator Distance</para>
   /// <para> VR: DS VM:1-n</para>
   /// </summary>
   public static SourceToCompensatorDistance: number = 805962466;
   /// <summary>
   /// <para>(300A,02E3) Total Compensator Tray Water-Equivalent Thickness</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static TotalCompensatorTrayWaterEquivalentThickness: number = 805962467;
   /// <summary>
   /// <para>(300A,02E4) Isocenter to Compensator Tray Distance</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static IsocenterToCompensatorTrayDistance: number = 805962468;
   /// <summary>
   /// <para>(300A,02E5) Compensator Column Offset</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static CompensatorColumnOffset: number = 805962469;
   /// <summary>
   /// <para>(300A,02E6) Isocenter to Compensator Distances</para>
   /// <para> VR: FL VM:1-n</para>
   /// </summary>
   public static IsocenterToCompensatorDistances: number = 805962470;
   /// <summary>
   /// <para>(300A,02E7) Compensator Relative Stopping Power Ratio</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static CompensatorRelativeStoppingPowerRatio: number = 805962471;
   /// <summary>
   /// <para>(300A,02E8) Compensator Milling Tool Diameter</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static CompensatorMillingToolDiameter: number = 805962472;
   /// <summary>
   /// <para>(300A,02EA) Ion Range Compensator Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IonRangeCompensatorSequence: number = 805962474;
   /// <summary>
   /// <para>(300A,02EB) Compensator Description</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static CompensatorDescription: number = 805962475;
   /// <summary>
   /// <para>(300A,0302) Radiation Mass Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static RadiationMassNumber: number = 805962498;
   /// <summary>
   /// <para>(300A,0304) Radiation Atomic Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static RadiationAtomicNumber: number = 805962500;
   /// <summary>
   /// <para>(300A,0306) Radiation Charge State</para>
   /// <para> VR: SS VM:1</para>
   /// </summary>
   public static RadiationChargeState: number = 805962502;
   /// <summary>
   /// <para>(300A,0308) Scan Mode</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ScanMode: number = 805962504;
   /// <summary>
   /// <para>(300A,030A) Virtual Source-Axis Distances</para>
   /// <para> VR: FL VM:2</para>
   /// </summary>
   public static VirtualSourceAxisDistances: number = 805962506;
   /// <summary>
   /// <para>(300A,030C) Snout Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SnoutSequence: number = 805962508;
   /// <summary>
   /// <para>(300A,030D) Snout Position</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static SnoutPosition: number = 805962509;
   /// <summary>
   /// <para>(300A,030F) Snout ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static SnoutId: number = 805962511;
   /// <summary>
   /// <para>(300A,0312) Number of Range Shifters</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfRangeShifters: number = 805962514;
   /// <summary>
   /// <para>(300A,0314) Range Shifter Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RangeShifterSequence: number = 805962516;
   /// <summary>
   /// <para>(300A,0316) Range Shifter Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static RangeShifterNumber: number = 805962518;
   /// <summary>
   /// <para>(300A,0318) Range Shifter ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static RangeShifterId: number = 805962520;
   /// <summary>
   /// <para>(300A,0320) Range Shifter Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RangeShifterType: number = 805962528;
   /// <summary>
   /// <para>(300A,0322) Range Shifter Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static RangeShifterDescription: number = 805962530;
   /// <summary>
   /// <para>(300A,0330) Number of Lateral Spreading Devices</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfLateralSpreadingDevices: number = 805962544;
   /// <summary>
   /// <para>(300A,0332) Lateral Spreading Device Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static LateralSpreadingDeviceSequence: number = 805962546;
   /// <summary>
   /// <para>(300A,0334) Lateral Spreading Device Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static LateralSpreadingDeviceNumber: number = 805962548;
   /// <summary>
   /// <para>(300A,0336) Lateral Spreading Device ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static LateralSpreadingDeviceId: number = 805962550;
   /// <summary>
   /// <para>(300A,0338) Lateral Spreading Device Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static LateralSpreadingDeviceType: number = 805962552;
   /// <summary>
   /// <para>(300A,033A) Lateral Spreading Device Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static LateralSpreadingDeviceDescription: number = 805962554;
   /// <summary>
   /// <para>(300A,033C) Lateral Spreading Device Water Equivalent Thickness</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static LateralSpreadingDeviceWaterEquivalentThickness: number = 805962556;
   /// <summary>
   /// <para>(300A,0340) Number of Range Modulators</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfRangeModulators: number = 805962560;
   /// <summary>
   /// <para>(300A,0342) Range Modulator Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RangeModulatorSequence: number = 805962562;
   /// <summary>
   /// <para>(300A,0344) Range Modulator Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static RangeModulatorNumber: number = 805962564;
   /// <summary>
   /// <para>(300A,0346) Range Modulator ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static RangeModulatorId: number = 805962566;
   /// <summary>
   /// <para>(300A,0348) Range Modulator Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RangeModulatorType: number = 805962568;
   /// <summary>
   /// <para>(300A,034A) Range Modulator Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static RangeModulatorDescription: number = 805962570;
   /// <summary>
   /// <para>(300A,034C) Beam Current Modulation ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static BeamCurrentModulationId: number = 805962572;
   /// <summary>
   /// <para>(300A,0350) Patient Support Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PatientSupportType: number = 805962576;
   /// <summary>
   /// <para>(300A,0352) Patient Support ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static PatientSupportId: number = 805962578;
   /// <summary>
   /// <para>(300A,0354) Patient Support Accessory Code</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static PatientSupportAccessoryCode: number = 805962580;
   /// <summary>
   /// <para>(300A,0356) Fixation Light Azimuthal Angle</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static FixationLightAzimuthalAngle: number = 805962582;
   /// <summary>
   /// <para>(300A,0358) Fixation Light Polar Angle</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static FixationLightPolarAngle: number = 805962584;
   /// <summary>
   /// <para>(300A,035A) Meterset Rate</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static MetersetRate: number = 805962586;
   /// <summary>
   /// <para>(300A,0360) Range Shifter Settings Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RangeShifterSettingsSequence: number = 805962592;
   /// <summary>
   /// <para>(300A,0362) Range Shifter Setting</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static RangeShifterSetting: number = 805962594;
   /// <summary>
   /// <para>(300A,0364) Isocenter to Range Shifter Distance</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static IsocenterToRangeShifterDistance: number = 805962596;
   /// <summary>
   /// <para>(300A,0366) Range Shifter Water Equivalent Thickness</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static RangeShifterWaterEquivalentThickness: number = 805962598;
   /// <summary>
   /// <para>(300A,0370) Lateral Spreading Device Settings Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static LateralSpreadingDeviceSettingsSequence: number = 805962608;
   /// <summary>
   /// <para>(300A,0372) Lateral Spreading Device Setting</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static LateralSpreadingDeviceSetting: number = 805962610;
   /// <summary>
   /// <para>(300A,0374) Isocenter to Lateral Spreading Device Distance</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static IsocenterToLateralSpreadingDeviceDistance: number = 805962612;
   /// <summary>
   /// <para>(300A,0380) Range Modulator Settings Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RangeModulatorSettingsSequence: number = 805962624;
   /// <summary>
   /// <para>(300A,0382) Range Modulator Gating Start Value</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static RangeModulatorGatingStartValue: number = 805962626;
   /// <summary>
   /// <para>(300A,0384) Range Modulator Gating Stop Value</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static RangeModulatorGatingStopValue: number = 805962628;
   /// <summary>
   /// <para>(300A,0386) Range Modulator Gating Start Water Equivalent Thickness</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static RangeModulatorGatingStartWaterEquivalentThickness: number = 805962630;
   /// <summary>
   /// <para>(300A,0388) Range Modulator Gating Stop Water Equivalent Thickness</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static RangeModulatorGatingStopWaterEquivalentThickness: number = 805962632;
   /// <summary>
   /// <para>(300A,038A) Isocenter to Range Modulator Distance</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static IsocenterToRangeModulatorDistance: number = 805962634;
   /// <summary>
   /// <para>(300A,0390) Scan Spot Tune ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static ScanSpotTuneId: number = 805962640;
   /// <summary>
   /// <para>(300A,0392) Number of Scan Spot Positions</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfScanSpotPositions: number = 805962642;
   /// <summary>
   /// <para>(300A,0394) Scan Spot Position Map</para>
   /// <para> VR: FL VM:1-n</para>
   /// </summary>
   public static ScanSpotPositionMap: number = 805962644;
   /// <summary>
   /// <para>(300A,0396) Scan Spot Meterset Weights</para>
   /// <para> VR: FL VM:1-n</para>
   /// </summary>
   public static ScanSpotMetersetWeights: number = 805962646;
   /// <summary>
   /// <para>(300A,0398) Scanning Spot Size</para>
   /// <para> VR: FL VM:2</para>
   /// </summary>
   public static ScanningSpotSize: number = 805962648;
   /// <summary>
   /// <para>(300A,039A) Number of Paintings</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfPaintings: number = 805962650;
   /// <summary>
   /// <para>(300A,03A0) Ion Tolerance Table Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IonToleranceTableSequence: number = 805962656;
   /// <summary>
   /// <para>(300A,03A2) Ion Beam Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IonBeamSequence: number = 805962658;
   /// <summary>
   /// <para>(300A,03A4) Ion Beam Limiting Device Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IonBeamLimitingDeviceSequence: number = 805962660;
   /// <summary>
   /// <para>(300A,03A6) Ion Block Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IonBlockSequence: number = 805962662;
   /// <summary>
   /// <para>(300A,03A8) Ion Control Point Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IonControlPointSequence: number = 805962664;
   /// <summary>
   /// <para>(300A,03AA) Ion Wedge Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IonWedgeSequence: number = 805962666;
   /// <summary>
   /// <para>(300A,03AC) Ion Wedge Position Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static IonWedgePositionSequence: number = 805962668;
   /// <summary>
   /// <para>(300A,0401) Referenced Setup Image Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedSetupImageSequence: number = 805962753;
   /// <summary>
   /// <para>(300A,0402) Setup Image Comment</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static SetupImageComment: number = 805962754;
   /// <summary>
   /// <para>(300A,0410) Motion Synchronization Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MotionSynchronizationSequence: number = 805962768;
   /// <summary>
   /// <para>(300A,0412) Control Point Orientation</para>
   /// <para> VR: FL VM:3</para>
   /// </summary>
   public static ControlPointOrientation: number = 805962770;
   /// <summary>
   /// <para>(300A,0420) General Accessory Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static GeneralAccessorySequence: number = 805962784;
   /// <summary>
   /// <para>(300A,0421) General Accessory ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static GeneralAccessoryId: number = 805962785;
   /// <summary>
   /// <para>(300A,0422) General Accessory Description</para>
   /// <para> VR: ST VM:1</para>
   /// </summary>
   public static GeneralAccessoryDescription: number = 805962786;
   /// <summary>
   /// <para>(300A,0423) General Accessory Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static GeneralAccessoryType: number = 805962787;
   /// <summary>
   /// <para>(300A,0424) General Accessory Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static GeneralAccessoryNumber: number = 805962788;
   /// <summary>
   /// <para>(300A,0431) Applicator Geometry Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ApplicatorGeometrySequence: number = 805962801;
   /// <summary>
   /// <para>(300A,0432) Applicator Aperture Shape</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ApplicatorApertureShape: number = 805962802;
   /// <summary>
   /// <para>(300A,0433) Applicator Opening</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static ApplicatorOpening: number = 805962803;
   /// <summary>
   /// <para>(300A,0434) Applicator Opening X</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static ApplicatorOpeningX: number = 805962804;
   /// <summary>
   /// <para>(300A,0435) Applicator Opening Y</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static ApplicatorOpeningY: number = 805962805;
   /// <summary>
   /// <para>(300A,0436) Source to Applicator Mounting Position Distance</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static SourceToApplicatorMountingPositionDistance: number = 805962806;
   /// <summary>
   /// <para>(300C,0002) Referenced RT Plan Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedRtPlanSequence: number = 806092802;
   /// <summary>
   /// <para>(300C,0004) Referenced Beam Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedBeamSequence: number = 806092804;
   /// <summary>
   /// <para>(300C,0006) Referenced Beam Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ReferencedBeamNumber: number = 806092806;
   /// <summary>
   /// <para>(300C,0007) Referenced Reference Image Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ReferencedReferenceImageNumber: number = 806092807;
   /// <summary>
   /// <para>(300C,0008) Start Cumulative Meterset Weight</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static StartCumulativeMetersetWeight: number = 806092808;
   /// <summary>
   /// <para>(300C,0009) End Cumulative Meterset Weight</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static EndCumulativeMetersetWeight: number = 806092809;
   /// <summary>
   /// <para>(300C,000A) Referenced Brachy Application Setup Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedBrachyApplicationSetupSequence: number = 806092810;
   /// <summary>
   /// <para>(300C,000C) Referenced Brachy Application Setup Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ReferencedBrachyApplicationSetupNumber: number = 806092812;
   /// <summary>
   /// <para>(300C,000E) Referenced Source Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ReferencedSourceNumber: number = 806092814;
   /// <summary>
   /// <para>(300C,0020) Referenced Fraction Group Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedFractionGroupSequence: number = 806092832;
   /// <summary>
   /// <para>(300C,0022) Referenced Fraction Group Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ReferencedFractionGroupNumber: number = 806092834;
   /// <summary>
   /// <para>(300C,0040) Referenced Verification Image Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedVerificationImageSequence: number = 806092864;
   /// <summary>
   /// <para>(300C,0042) Referenced Reference Image Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedReferenceImageSequence: number = 806092866;
   /// <summary>
   /// <para>(300C,0050) Referenced Dose Reference Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedDoseReferenceSequence: number = 806092880;
   /// <summary>
   /// <para>(300C,0051) Referenced Dose Reference Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ReferencedDoseReferenceNumber: number = 806092881;
   /// <summary>
   /// <para>(300C,0055) Brachy Referenced Dose Reference Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static BrachyReferencedDoseReferenceSequence: number = 806092885;
   /// <summary>
   /// <para>(300C,0060) Referenced Structure Set Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedStructureSetSequence: number = 806092896;
   /// <summary>
   /// <para>(300C,006A) Referenced Patient Setup Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ReferencedPatientSetupNumber: number = 806092906;
   /// <summary>
   /// <para>(300C,0080) Referenced Dose Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedDoseSequence: number = 806092928;
   /// <summary>
   /// <para>(300C,00A0) Referenced Tolerance Table Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ReferencedToleranceTableNumber: number = 806092960;
   /// <summary>
   /// <para>(300C,00B0) Referenced Bolus Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedBolusSequence: number = 806092976;
   /// <summary>
   /// <para>(300C,00C0) Referenced Wedge Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ReferencedWedgeNumber: number = 806092992;
   /// <summary>
   /// <para>(300C,00D0) Referenced Compensator Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ReferencedCompensatorNumber: number = 806093008;
   /// <summary>
   /// <para>(300C,00E0) Referenced Block Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ReferencedBlockNumber: number = 806093024;
   /// <summary>
   /// <para>(300C,00F0) Referenced Control Point Index</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ReferencedControlPointIndex: number = 806093040;
   /// <summary>
   /// <para>(300C,00F2) Referenced Control Point Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ReferencedControlPointSequence: number = 806093042;
   /// <summary>
   /// <para>(300C,00F4) Referenced Start Control Point Index</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ReferencedStartControlPointIndex: number = 806093044;
   /// <summary>
   /// <para>(300C,00F6) Referenced Stop Control Point Index</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ReferencedStopControlPointIndex: number = 806093046;
   /// <summary>
   /// <para>(300C,0100) Referenced Range Shifter Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ReferencedRangeShifterNumber: number = 806093056;
   /// <summary>
   /// <para>(300C,0102) Referenced Lateral Spreading Device Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ReferencedLateralSpreadingDeviceNumber: number = 806093058;
   /// <summary>
   /// <para>(300C,0104) Referenced Range Modulator Number</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static ReferencedRangeModulatorNumber: number = 806093060;
   /// <summary>
   /// <para>(300E,0002) Approval Status</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ApprovalStatus: number = 806223874;
   /// <summary>
   /// <para>(300E,0004) Review Date</para>
   /// <para> VR: DA VM:1</para>
   /// </summary>
   public static ReviewDate: number = 806223876;
   /// <summary>
   /// <para>(300E,0005) Review Time</para>
   /// <para> VR: TM VM:1</para>
   /// </summary>
   public static ReviewTime: number = 806223877;
   /// <summary>
   /// <para>(300E,0008) Reviewer Name</para>
   /// <para> VR: PN VM:1</para>
   /// </summary>
   public static ReviewerName: number = 806223880;
   /// <summary>
   /// <para>(4000,0010) Arbitrary</para>
   /// <para> VR: LT VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ArbitraryRetired: number = 1073741840;
   /// <summary>
   /// <para>(4000,4000) Text Comments</para>
   /// <para> VR: LT VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TextCommentsRetired: number = 1073758208;
   /// <summary>
   /// <para>(4008,0040) Results ID</para>
   /// <para> VR: SH VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ResultsIdRetired: number = 1074266176;
   /// <summary>
   /// <para>(4008,0042) Results ID Issuer</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ResultsIdIssuerRetired: number = 1074266178;
   /// <summary>
   /// <para>(4008,0050) Referenced Interpretation Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ReferencedInterpretationSequenceRetired: number = 1074266192;
   /// <summary>
   /// <para>(4008,00FF) Report Production Status (Trial)</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ReportProductionStatusTrialRetired: number = 1074266367;
   /// <summary>
   /// <para>(4008,0100) Interpretation Recorded Date</para>
   /// <para> VR: DA VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static InterpretationRecordedDateRetired: number = 1074266368;
   /// <summary>
   /// <para>(4008,0101) Interpretation Recorded Time</para>
   /// <para> VR: TM VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static InterpretationRecordedTimeRetired: number = 1074266369;
   /// <summary>
   /// <para>(4008,0102) Interpretation Recorder</para>
   /// <para> VR: PN VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static InterpretationRecorderRetired: number = 1074266370;
   /// <summary>
   /// <para>(4008,0103) Reference to Recorded Sound</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ReferenceToRecordedSoundRetired: number = 1074266371;
   /// <summary>
   /// <para>(4008,0108) Interpretation Transcription Date</para>
   /// <para> VR: DA VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static InterpretationTranscriptionDateRetired: number = 1074266376;
   /// <summary>
   /// <para>(4008,0109) Interpretation Transcription Time</para>
   /// <para> VR: TM VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static InterpretationTranscriptionTimeRetired: number = 1074266377;
   /// <summary>
   /// <para>(4008,010A) Interpretation Transcriber</para>
   /// <para> VR: PN VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static InterpretationTranscriberRetired: number = 1074266378;
   /// <summary>
   /// <para>(4008,010B) Interpretation Text</para>
   /// <para> VR: ST VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static InterpretationTextRetired: number = 1074266379;
   /// <summary>
   /// <para>(4008,010C) Interpretation Author</para>
   /// <para> VR: PN VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static InterpretationAuthorRetired: number = 1074266380;
   /// <summary>
   /// <para>(4008,0111) Interpretation Approver Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static InterpretationApproverSequenceRetired: number = 1074266385;
   /// <summary>
   /// <para>(4008,0112) Interpretation Approval Date</para>
   /// <para> VR: DA VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static InterpretationApprovalDateRetired: number = 1074266386;
   /// <summary>
   /// <para>(4008,0113) Interpretation Approval Time</para>
   /// <para> VR: TM VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static InterpretationApprovalTimeRetired: number = 1074266387;
   /// <summary>
   /// <para>(4008,0114) Physician Approving Interpretation</para>
   /// <para> VR: PN VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static PhysicianApprovingInterpretationRetired: number = 1074266388;
   /// <summary>
   /// <para>(4008,0115) Interpretation Diagnosis Description</para>
   /// <para> VR: LT VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static InterpretationDiagnosisDescriptionRetired: number = 1074266389;
   /// <summary>
   /// <para>(4008,0117) Interpretation Diagnosis Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static InterpretationDiagnosisCodeSequenceRetired: number = 1074266391;
   /// <summary>
   /// <para>(4008,0118) Results Distribution List Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ResultsDistributionListSequenceRetired: number = 1074266392;
   /// <summary>
   /// <para>(4008,0119) Distribution Name</para>
   /// <para> VR: PN VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DistributionNameRetired: number = 1074266393;
   /// <summary>
   /// <para>(4008,011A) Distribution Address</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DistributionAddressRetired: number = 1074266394;
   /// <summary>
   /// <para>(4008,0200) Interpretation ID</para>
   /// <para> VR: SH VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static InterpretationIdRetired: number = 1074266624;
   /// <summary>
   /// <para>(4008,0202) Interpretation ID Issuer</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static InterpretationIdIssuerRetired: number = 1074266626;
   /// <summary>
   /// <para>(4008,0210) Interpretation Type ID</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static InterpretationTypeIdRetired: number = 1074266640;
   /// <summary>
   /// <para>(4008,0212) Interpretation Status ID</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static InterpretationStatusIdRetired: number = 1074266642;
   /// <summary>
   /// <para>(4008,0300) Impressions</para>
   /// <para> VR: ST VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ImpressionsRetired: number = 1074266880;
   /// <summary>
   /// <para>(4008,4000) Results Comments</para>
   /// <para> VR: ST VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static ResultsCommentsRetired: number = 1074282496;
   /// <summary>
   /// <para>(4010,0001) Low Energy Detectors</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static LowEnergyDetectors: number = 1074790401;
   /// <summary>
   /// <para>(4010,0002) High Energy Detectors</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static HighEnergyDetectors: number = 1074790402;
   /// <summary>
   /// <para>(4010,0004) Detector Geometry Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DetectorGeometrySequence: number = 1074790404;
   /// <summary>
   /// <para>(4010,1001) Threat ROI Voxel Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ThreatRoiVoxelSequence: number = 1074794497;
   /// <summary>
   /// <para>(4010,1004) Threat ROI Base</para>
   /// <para> VR: FL VM:3</para>
   /// </summary>
   public static ThreatRoiBase: number = 1074794500;
   /// <summary>
   /// <para>(4010,1005) Threat ROI Extents </para>
   /// <para> VR: FL VM:3</para>
   /// </summary>
   public static ThreatRoiExtents: number = 1074794501;
   /// <summary>
   /// <para>(4010,1006) Threat ROI Bitmap</para>
   /// <para> VR: OB VM:1</para>
   /// </summary>
   public static ThreatRoiBitmap: number = 1074794502;
   /// <summary>
   /// <para>(4010,1007) Route Segment ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static RouteSegmentId: number = 1074794503;
   /// <summary>
   /// <para>(4010,1008) Gantry Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static GantryType: number = 1074794504;
   /// <summary>
   /// <para>(4010,1009) OOI Owner Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static OoiOwnerType: number = 1074794505;
   /// <summary>
   /// <para>(4010,100A) Route Segment Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static RouteSegmentSequence: number = 1074794506;
   /// <summary>
   /// <para>(4010,1010) Potential Threat Object ID</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static PotentialThreatObjectId: number = 1074794512;
   /// <summary>
   /// <para>(4010,1011) Threat Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static ThreatSequence: number = 1074794513;
   /// <summary>
   /// <para>(4010,1012) Threat Category </para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ThreatCategory: number = 1074794514;
   /// <summary>
   /// <para>(4010,1013) Threat Category Description</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static ThreatCategoryDescription: number = 1074794515;
   /// <summary>
   /// <para>(4010,1014) ATD Ability Assessment</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AtdAbilityAssessment: number = 1074794516;
   /// <summary>
   /// <para>(4010,1015) ATD Assessment Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AtdAssessmentFlag: number = 1074794517;
   /// <summary>
   /// <para>(4010,1016) ATD Assessment Probability</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static AtdAssessmentProbability: number = 1074794518;
   /// <summary>
   /// <para>(4010,1017) Mass</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static Mass: number = 1074794519;
   /// <summary>
   /// <para>(4010,1018) Density</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static Density: number = 1074794520;
   /// <summary>
   /// <para>(4010,1019) Z Effective</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static ZEffective: number = 1074794521;
   /// <summary>
   /// <para>(4010,101A) Boarding Pass ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static BoardingPassId: number = 1074794522;
   /// <summary>
   /// <para>(4010,101B) Center of Mass</para>
   /// <para> VR: FL VM:3</para>
   /// </summary>
   public static CenterOfMass: number = 1074794523;
   /// <summary>
   /// <para>(4010,101C) Center of PTO</para>
   /// <para> VR: FL VM:3</para>
   /// </summary>
   public static CenterOfPto: number = 1074794524;
   /// <summary>
   /// <para>(4010,101D) Bounding Polygon</para>
   /// <para> VR: FL VM:6-n</para>
   /// </summary>
   public static BoundingPolygon: number = 1074794525;
   /// <summary>
   /// <para>(4010,101E) Route Segment Start Location ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static RouteSegmentStartLocationId: number = 1074794526;
   /// <summary>
   /// <para>(4010,101F) Route Segment End Location ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static RouteSegmentEndLocationId: number = 1074794527;
   /// <summary>
   /// <para>(4010,1020) Route Segment Location ID Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static RouteSegmentLocationIdType: number = 1074794528;
   /// <summary>
   /// <para>(4010,1021) Abort Reason</para>
   /// <para> VR: CS VM:1-n</para>
   /// </summary>
   public static AbortReason: number = 1074794529;
   /// <summary>
   /// <para>(4010,1023) Volume of PTO</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static VolumeOfPto: number = 1074794531;
   /// <summary>
   /// <para>(4010,1024) Abort Flag</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AbortFlag: number = 1074794532;
   /// <summary>
   /// <para>(4010,1025) Route Segment Start Time</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static RouteSegmentStartTime: number = 1074794533;
   /// <summary>
   /// <para>(4010,1026) Route Segment End Time</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static RouteSegmentEndTime: number = 1074794534;
   /// <summary>
   /// <para>(4010,1027) TDR Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TdrType: number = 1074794535;
   /// <summary>
   /// <para>(4010,1028) International Route Segment</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static InternationalRouteSegment: number = 1074794536;
   /// <summary>
   /// <para>(4010,1029) Threat Detection Algorithm and Version</para>
   /// <para> VR: LO VM:1-n</para>
   /// </summary>
   public static ThreatDetectionAlgorithmAndVersion: number = 1074794537;
   /// <summary>
   /// <para>(4010,102A) Assigned Location </para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static AssignedLocation: number = 1074794538;
   /// <summary>
   /// <para>(4010,102B) Alarm Decision Time</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static AlarmDecisionTime: number = 1074794539;
   /// <summary>
   /// <para>(4010,1031) Alarm Decision</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AlarmDecision: number = 1074794545;
   /// <summary>
   /// <para>(4010,1033) Number of Total Objects</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfTotalObjects: number = 1074794547;
   /// <summary>
   /// <para>(4010,1034) Number of Alarm Objects</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static NumberOfAlarmObjects: number = 1074794548;
   /// <summary>
   /// <para>(4010,1037) PTO Representation Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PtoRepresentationSequence: number = 1074794551;
   /// <summary>
   /// <para>(4010,1038) ATD Assessment Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AtdAssessmentSequence: number = 1074794552;
   /// <summary>
   /// <para>(4010,1039) TIP Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TipType: number = 1074794553;
   /// <summary>
   /// <para>(4010,103A) DICOS Version</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static DicosVersion: number = 1074794554;
   /// <summary>
   /// <para>(4010,1041) OOI Owner Creation Time</para>
   /// <para> VR: DT VM:1</para>
   /// </summary>
   public static OoiOwnerCreationTime: number = 1074794561;
   /// <summary>
   /// <para>(4010,1042) OOI Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static OoiType: number = 1074794562;
   /// <summary>
   /// <para>(4010,1043) OOI Size</para>
   /// <para> VR: FL VM:3</para>
   /// </summary>
   public static OoiSize: number = 1074794563;
   /// <summary>
   /// <para>(4010,1044) Acquisition Status</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static AcquisitionStatus: number = 1074794564;
   /// <summary>
   /// <para>(4010,1045)  Basis Materials Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static BasisMaterialsCodeSequence: number = 1074794565;
   /// <summary>
   /// <para>(4010,1046) Phantom Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static PhantomType: number = 1074794566;
   /// <summary>
   /// <para>(4010,1047) OOI Owner Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static OoiOwnerSequence: number = 1074794567;
   /// <summary>
   /// <para>(4010,1048) Scan Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static ScanType: number = 1074794568;
   /// <summary>
   /// <para>(4010,1051) Itinerary ID</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ItineraryId: number = 1074794577;
   /// <summary>
   /// <para>(4010,1052) Itinerary ID Type</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static ItineraryIdType: number = 1074794578;
   /// <summary>
   /// <para>(4010,1053) Itinerary ID Assigning Authority</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static ItineraryIdAssigningAuthority: number = 1074794579;
   /// <summary>
   /// <para>(4010,1054) Route ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static RouteId: number = 1074794580;
   /// <summary>
   /// <para>(4010,1055) Route ID Assigning Authority</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static RouteIdAssigningAuthority: number = 1074794581;
   /// <summary>
   /// <para>(4010,1056) Inbound  Arrival Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static InboundArrivalType: number = 1074794582;
   /// <summary>
   /// <para>(4010,1058) Carrier ID</para>
   /// <para> VR: SH VM:1</para>
   /// </summary>
   public static CarrierId: number = 1074794584;
   /// <summary>
   /// <para>(4010,1059) Carrier ID Assigning Authority</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static CarrierIdAssigningAuthority: number = 1074794585;
   /// <summary>
   /// <para>(4010,1060) Source Orientation</para>
   /// <para> VR: FL VM:3</para>
   /// </summary>
   public static SourceOrientation: number = 1074794592;
   /// <summary>
   /// <para>(4010,1061) Source Position</para>
   /// <para> VR: FL VM:3</para>
   /// </summary>
   public static SourcePosition: number = 1074794593;
   /// <summary>
   /// <para>(4010,1062) Belt Height</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static BeltHeight: number = 1074794594;
   /// <summary>
   /// <para>(4010,1064) Algorithm Routing Code Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static AlgorithmRoutingCodeSequence: number = 1074794596;
   /// <summary>
   /// <para>(4010,1067)  Transport Classification</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static TransportClassification: number = 1074794599;
   /// <summary>
   /// <para>(4010,1068) OOI Type Descriptor</para>
   /// <para> VR: LT VM:1</para>
   /// </summary>
   public static OoiTypeDescriptor: number = 1074794600;
   /// <summary>
   /// <para>(4010,1069) Total Processing Time</para>
   /// <para> VR: FL VM:1</para>
   /// </summary>
   public static TotalProcessingTime: number = 1074794601;
   /// <summary>
   /// <para>(4010,106C) Detector Calibration Data</para>
   /// <para> VR: OB VM:1</para>
   /// </summary>
   public static DetectorCalibrationData: number = 1074794604;
   /// <summary>
   /// <para>(4FFE,0001) MAC Parameters Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static MacParametersSequence: number = 1342046209;
   /// <summary>
   /// <para>(5000,0005) Curve Dimensions </para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CurveDimensionsRetired: number = 1342177285;
   /// <summary>
   /// <para>(5000,0010) Number of Points </para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static NumberOfPointsRetired: number = 1342177296;
   /// <summary>
   /// <para>(5000,0020) Type of Data</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TypeOfDataRetired: number = 1342177312;
   /// <summary>
   /// <para>(5000,0022) Curve Description</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CurveDescriptionRetired: number = 1342177314;
   /// <summary>
   /// <para>(5000,0030) Axis Units </para>
   /// <para> VR: SH VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static AxisUnitsRetired: number = 1342177328;
   /// <summary>
   /// <para>(5000,0040) Axis Labels </para>
   /// <para> VR: SH VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static AxisLabelsRetired: number = 1342177344;
   /// <summary>
   /// <para>(5000,0103) Data Value Representation </para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static DataValueRepresentationRetired: number = 1342177539;
   /// <summary>
   /// <para>(5000,0104) Minimum Coordinate Value </para>
   /// <para> VR: US VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static MinimumCoordinateValueRetired: number = 1342177540;
   /// <summary>
   /// <para>(5000,0105) Maximum Coordinate Value </para>
   /// <para> VR: US VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static MaximumCoordinateValueRetired: number = 1342177541;
   /// <summary>
   /// <para>(5000,0106) Curve Range</para>
   /// <para> VR: SH VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CurveRangeRetired: number = 1342177542;
   /// <summary>
   /// <para>(5000,0110) Curve Data Descriptor</para>
   /// <para> VR: US VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CurveDataDescriptorRetired: number = 1342177552;
   /// <summary>
   /// <para>(5000,0112) Coordinate Start Value</para>
   /// <para> VR: US VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CoordinateStartValueRetired: number = 1342177554;
   /// <summary>
   /// <para>(5000,0114) Coordinate Step Value</para>
   /// <para> VR: US VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CoordinateStepValueRetired: number = 1342177556;
   /// <summary>
   /// <para>(5000,1001) Curve Activation Layer </para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CurveActivationLayerRetired: number = 1342181377;
   /// <summary>
   /// <para>(5000,2000) Audio Type</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static AudioTypeRetired: number = 1342185472;
   /// <summary>
   /// <para>(5000,2002) Audio Sample Format</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static AudioSampleFormatRetired: number = 1342185474;
   /// <summary>
   /// <para>(5000,2004) Number of Channels</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static NumberOfChannelsRetired: number = 1342185476;
   /// <summary>
   /// <para>(5000,2006) Number of Samples</para>
   /// <para> VR: UL VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static NumberOfSamplesRetired: number = 1342185478;
   /// <summary>
   /// <para>(5000,2008) Sample Rate</para>
   /// <para> VR: UL VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static SampleRateRetired: number = 1342185480;
   /// <summary>
   /// <para>(5000,200A) Total Time</para>
   /// <para> VR: UL VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static TotalTimeRetired: number = 1342185482;
   /// <summary>
   /// <para>(5000,200C) Audio Sample Data</para>
   /// <para> VR: OW or OB VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static AudioSampleDataRetired: number = 1342185484;
   /// <summary>
   /// <para>(5000,200E) Audio Comments</para>
   /// <para> VR: LT VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static AudioCommentsRetired: number = 1342185486;
   /// <summary>
   /// <para>(5000,2500) Curve Label</para>
   /// <para> VR: LO VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CurveLabelRetired: number = 1342186752;
   /// <summary>
   /// <para>(5000,2600) Curve Referenced Overlay Sequence </para>
   /// <para> VR: SQ VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CurveReferencedOverlaySequenceRetired: number = 1342187008;
   /// <summary>
   /// <para>(5000,2610) Curve Referenced Overlay Group</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CurveReferencedOverlayGroupRetired: number = 1342187024;
   /// <summary>
   /// <para>(5000,3000) Curve Data</para>
   /// <para> VR: OW or OB VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CurveDataRetired: number = 1342189568;
   /// <summary>
   /// <para>(5200,9229) Shared Functional Groups Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static SharedFunctionalGroupsSequence: number = 1375769129;
   /// <summary>
   /// <para>(5200,9230) Per-frame Functional Groups Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static PerFrameFunctionalGroupsSequence: number = 1375769136;
   /// <summary>
   /// <para>(5400,0100) Waveform Sequence </para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static WaveformSequence: number = 1409286400;
   /// <summary>
   /// <para>(5400,0110) Channel Minimum Value </para>
   /// <para> VR: OB or OW VM:1</para>
   /// </summary>
   public static ChannelMinimumValue: number = 1409286416;
   /// <summary>
   /// <para>(5400,0112) Channel Maximum Value </para>
   /// <para> VR: OB or OW VM:1</para>
   /// </summary>
   public static ChannelMaximumValue: number = 1409286418;
   /// <summary>
   /// <para>(5400,1004) Waveform Bits Allocated</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static WaveformBitsAllocated: number = 1409290244;
   /// <summary>
   /// <para>(5400,1006) Waveform Sample Interpretation</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static WaveformSampleInterpretation: number = 1409290246;
   /// <summary>
   /// <para>(5400,100A) Waveform Padding Value</para>
   /// <para> VR: OB or OW VM:1</para>
   /// </summary>
   public static WaveformPaddingValue: number = 1409290250;
   /// <summary>
   /// <para>(5400,1010) Waveform Data </para>
   /// <para> VR: OB or OW VM:1</para>
   /// </summary>
   public static WaveformData: number = 1409290256;
   /// <summary>
   /// <para>(5600,0010) First Order Phase Correction Angle</para>
   /// <para> VR: OF VM:1</para>
   /// </summary>
   public static FirstOrderPhaseCorrectionAngle: number = 1442840592;
   /// <summary>
   /// <para>(5600,0020) Spectroscopy Data</para>
   /// <para> VR: OF VM:1</para>
   /// </summary>
   public static SpectroscopyData: number = 1442840608;
   /// <summary>
   /// <para>(6000,0010) Overlay Rows</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static OverlayRows: number = 1610612752;
   /// <summary>
   /// <para>(6000,0011) Overlay Columns</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static OverlayColumns: number = 1610612753;
   /// <summary>
   /// <para>(6000,0012) Overlay Planes</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayPlanesRetired: number = 1610612754;
   /// <summary>
   /// <para>(6000,0015) Number of Frames in Overlay</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static NumberOfFramesInOverlay: number = 1610612757;
   /// <summary>
   /// <para>(6000,0022) Overlay Description</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static OverlayDescription: number = 1610612770;
   /// <summary>
   /// <para>(6000,0040) Overlay Type</para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static OverlayType: number = 1610612800;
   /// <summary>
   /// <para>(6000,0045) Overlay Subtype</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static OverlaySubtype: number = 1610612805;
   /// <summary>
   /// <para>(6000,0050) Overlay Origin</para>
   /// <para> VR: SS VM:2</para>
   /// </summary>
   public static OverlayOrigin: number = 1610612816;
   /// <summary>
   /// <para>(6000,0051) Image Frame Origin</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static ImageFrameOrigin: number = 1610612817;
   /// <summary>
   /// <para>(6000,0052) Overlay Plane Origin</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayPlaneOriginRetired: number = 1610612818;
   /// <summary>
   /// <para>(6000,0060) Overlay Compression Code</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayCompressionCodeRetired: number = 1610612832;
   /// <summary>
   /// <para>(6000,0061) Overlay Compression Originator</para>
   /// <para> VR: SH VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayCompressionOriginatorRetired: number = 1610612833;
   /// <summary>
   /// <para>(6000,0062) Overlay Compression Label</para>
   /// <para> VR: SH VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayCompressionLabelRetired: number = 1610612834;
   /// <summary>
   /// <para>(6000,0063) Overlay Compression Description</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayCompressionDescriptionRetired: number = 1610612835;
   /// <summary>
   /// <para>(6000,0066) Overlay Compression Step Pointers</para>
   /// <para> VR: AT VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayCompressionStepPointersRetired: number = 1610612838;
   /// <summary>
   /// <para>(6000,0068) Overlay Repeat Interval</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayRepeatIntervalRetired: number = 1610612840;
   /// <summary>
   /// <para>(6000,0069) Overlay Bits Grouped</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayBitsGroupedRetired: number = 1610612841;
   /// <summary>
   /// <para>(6000,0100) Overlay Bits Allocated</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static OverlayBitsAllocated: number = 1610612992;
   /// <summary>
   /// <para>(6000,0102) Overlay Bit Position</para>
   /// <para> VR: US VM:1</para>
   /// </summary>
   public static OverlayBitPosition: number = 1610612994;
   /// <summary>
   /// <para>(6000,0110) Overlay Format</para>
   /// <para> VR: CS VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayFormatRetired: number = 1610613008;
   /// <summary>
   /// <para>(6000,0200) Overlay Location</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayLocationRetired: number = 1610613248;
   /// <summary>
   /// <para>(6000,0800) Overlay Code Label</para>
   /// <para> VR: CS VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayCodeLabelRetired: number = 1610614784;
   /// <summary>
   /// <para>(6000,0802) Overlay Number of Tables</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayNumberOfTablesRetired: number = 1610614786;
   /// <summary>
   /// <para>(6000,0803) Overlay Code Table Location</para>
   /// <para> VR: AT VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayCodeTableLocationRetired: number = 1610614787;
   /// <summary>
   /// <para>(6000,0804) Overlay Bits For Code Word</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayBitsForCodeWordRetired: number = 1610614788;
   /// <summary>
   /// <para>(6000,1001) Overlay Activation Layer </para>
   /// <para> VR: CS VM:1</para>
   /// </summary>
   public static OverlayActivationLayer: number = 1610616833;
   /// <summary>
   /// <para>(6000,1100) Overlay Descriptor - Gray</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayDescriptorGrayRetired: number = 1610617088;
   /// <summary>
   /// <para>(6000,1101) Overlay Descriptor - Red</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayDescriptorRedRetired: number = 1610617089;
   /// <summary>
   /// <para>(6000,1102) Overlay Descriptor - Green</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayDescriptorGreenRetired: number = 1610617090;
   /// <summary>
   /// <para>(6000,1103) Overlay Descriptor - Blue</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayDescriptorBlueRetired: number = 1610617091;
   /// <summary>
   /// <para>(6000,1200) Overlays - Gray</para>
   /// <para> VR: US VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlaysGrayRetired: number = 1610617344;
   /// <summary>
   /// <para>(6000,1201) Overlays - Red</para>
   /// <para> VR: US VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlaysRedRetired: number = 1610617345;
   /// <summary>
   /// <para>(6000,1202) Overlays - Green</para>
   /// <para> VR: US VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlaysGreenRetired: number = 1610617346;
   /// <summary>
   /// <para>(6000,1203) Overlays - Blue</para>
   /// <para> VR: US VM:1-n</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlaysBlueRetired: number = 1610617347;
   /// <summary>
   /// <para>(6000,1301) ROI Area</para>
   /// <para> VR: IS VM:1</para>
   /// </summary>
   public static RoiArea: number = 1610617601;
   /// <summary>
   /// <para>(6000,1302) ROI Mean</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static RoiMean: number = 1610617602;
   /// <summary>
   /// <para>(6000,1303) ROI Standard Deviation</para>
   /// <para> VR: DS VM:1</para>
   /// </summary>
   public static RoiStandardDeviation: number = 1610617603;
   /// <summary>
   /// <para>(6000,1500) Overlay Label</para>
   /// <para> VR: LO VM:1</para>
   /// </summary>
   public static OverlayLabel: number = 1610618112;
   /// <summary>
   /// <para>(6000,3000) Overlay Data</para>
   /// <para> VR: OB or OW VM:1</para>
   /// </summary>
   public static OverlayData: number = 1610625024;
   /// <summary>
   /// <para>(6000,4000) Overlay Comments</para>
   /// <para> VR: LT VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static OverlayCommentsRetired: number = 1610629120;
   /// <summary>
   /// <para>(7F00,0010) Variable Pixel Data</para>
   /// <para> VR: OW or OB VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static VariablePixelDataRetired: number = 2130706448;
   /// <summary>
   /// <para>(7F00,0011) Variable Next Data Group</para>
   /// <para> VR: US VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static VariableNextDataGroupRetired: number = 2130706449;
   /// <summary>
   /// <para>(7F00,0020) Variable Coefficients SDVN</para>
   /// <para> VR: OW VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static VariableCoefficientsSdvnRetired: number = 2130706464;
   /// <summary>
   /// <para>(7F00,0030) Variable Coefficients SDHN</para>
   /// <para> VR: OW VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static VariableCoefficientsSdhnRetired: number = 2130706480;
   /// <summary>
   /// <para>(7F00,0040) Variable Coefficients SDDN</para>
   /// <para> VR: OW VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static VariableCoefficientsSddnRetired: number = 2130706496;
   /// <summary>
   /// <para>(7FE0,0010) Pixel Data</para>
   /// <para> VR: OW or OB VM:1</para>
   /// </summary>
   public static PixelData: number = 2145386512;
   /// <summary>
   /// <para>(7FE0,0020) Coefficients SDVN</para>
   /// <para> VR: OW VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CoefficientsSdvnRetired: number = 2145386528;
   /// <summary>
   /// <para>(7FE0,0030) Coefficients SDHN</para>
   /// <para> VR: OW VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CoefficientsSdhnRetired: number = 2145386544;
   /// <summary>
   /// <para>(7FE0,0040) Coefficients SDDN</para>
   /// <para> VR: OW VM:1</para>
   /// <para>This tag has been retired.</para>
   /// </summary>
   public static CoefficientsSddnRetired: number = 2145386560;
   /// <summary>
   /// <para>(FFFA,FFFA) Digital Signatures Sequence</para>
   /// <para> VR: SQ VM:1</para>
   /// </summary>
   public static DigitalSignaturesSequence: number = 4294639610;
   /// <summary>
   /// <para>(FFFC,FFFC) Data Set Trailing Padding</para>
   /// <para> VR: OB VM:1</para>
   /// </summary>
   public static DataSetTrailingPadding: number = 4294770684;
}