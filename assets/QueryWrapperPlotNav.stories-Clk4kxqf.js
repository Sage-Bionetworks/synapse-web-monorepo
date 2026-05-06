import{n as e}from"./chunk-jRWAZmH_.js";import{Ec as t,Hg as n,N_ as r,Ng as i,O_ as a,P_ as o,T_ as s,Tc as c,jS as l,ln as u,pg as d,vf as f,vn as p,wg as m,yf as h}from"./iframe-DbWsirBl.js";import{f as g,p as _}from"./CardContainerLogic-D-Klvw3k.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;e((()=>{f(),c(),s(),a(),u(),_(),v=l(),{fn:y}=__STORYBOOK_MODULE_TEST__,b={title:`Explore/QueryWrapperPlotNav`,component:g,decorators:[e=>(0,v.jsx)(`div`,{style:{paddingBottom:`50px`},children:(0,v.jsx)(e,{})})],args:{onQueryChange:y(),onQueryResultBundleChange:y()}},x={args:{name:`Data Catalog`,sql:`SELECT * FROM syn61609402 where includedInDataCatalog = 'true'`,defaultShowPlots:!1,defaultShowSearchBox:!0,hideCopyToClipboard:!0,hideSearchBarControl:!1,hideDownload:!0,cardConfiguration:{type:i,secondaryLabelLimit:4,genericCardSchema:{type:d,title:`name`,subTitle:`community`,description:`description`,secondaryLabels:[`contributors`,`individuals`,`id`,`link`]}}}},S=e=>{let t=e.queryContext?.getCurrentQueryRequest,n=e.queryContext?.executeQueryRequest;if(t===void 0||n===void 0){window.alert(`Query context functions not found, cannot apply additional filter`);return}let r=t();r.query.additionalFilters=[...r.query.additionalFilters||[],{concreteType:`org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter`,columnName:`resourceType`,operator:o.EQUAL,values:[e.row.values[0]]}],n(r)},C={args:{name:`Tools`,sql:`SELECT * FROM syn51730943`,customPlots:[{query:`SELECT resourceType, count(resourceType) FROM syn51730943 GROUP BY resourceType `,type:`bar`,title:`Resource Type`,onCustomPlotClick:S}],limit:5,initialLimit:2,defaultShowPlots:!1,defaultShowSearchBox:!0,shouldDeepLink:!0,cardConfiguration:{type:i,titleLinkConfig:{isMarkdown:!1,baseURL:`Explore/Tools/DetailsPage`,URLColumnName:`resourceId`,matchColumnName:`resourceId`,overrideLinkURLColumnName:`biobankURL`},secondaryLabelLimit:4,genericCardSchema:{type:m,title:`resourceName`,subTitle:`resourceType`,description:`description`,secondaryLabels:[`investigatorName`,`institution`,`rrid`,`synonyms`,`cellLineCategory`,`cellLineDisease`,`modelofManifestation`,`backgroundStrain`,`backgroundSubstrain`,`animalModelDisease`,`animalModelOfManifestation`,`targetAntigen`,`reactiveSpecies`,`hostOrganism`,`specimenTissueType`,`specimenPreparationMethod`,`diseaseType`,`tumorType`,`specimenFormat`,`specimenType`,`dateModified`]}}}},w={args:{tableConfiguration:{showAccessColumn:!0,showDirectDownloadColumn:!0,columnLinks:[{matchColumnName:`study`,isMarkdown:!1,baseURL:`Explore/Studies/DetailsPage`,URLColumnName:`Study_Name`,wrapValueWithParens:!0},{matchColumnName:`name`,isMarkdown:!1,baseURL:`Explore/Files/DetailsPage`,URLColumnName:`FileId`,overrideValueWithRowID:!0,wrapValueWithParens:!1}]},searchConfiguration:{searchable:`study.dataType.assay.organ.tissue.species.diagnosis.sex.consortium.grant.modelSystemName.treatmentType.specimenID.individualID.individualIdSource.specimenIdSource.resourceType.dataSubtype.metadataType.assayTarget.analysisType.cellType.nucleicAcidSource.fileFormat.group.name.isModelSystem.isConsortiumAnalysis.isMultiSpecimen.metaboliteType.chromosome`.split(`.`)},shouldDeepLink:!0,visibleColumnCount:10,rgbIndex:1,name:`Data`,sqlOperator:o.EQUAL,sql:`SELECT * FROM syn11346063`,hideSqlEditorControl:!1}},T={sql:`SELECT * FROM syn11346063.28`,additionalFilters:[{concreteType:`org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter`,columnName:`study`,function:r.HAS_LIKE,_function:r.HAS_LIKE,values:[`ADMC_ADNI_BakerLipidomics`]}]},E={args:{...w.args,shouldDeepLink:!1,initQueryJson:JSON.stringify(T),lockedColumn:{columnName:`study`,value:``}}},D={args:{sql:`SELECT * FROM syn11346063.69`,isRowSelectionVisible:!0,tableConfiguration:{showAccessColumn:!0,showDirectDownloadColumn:!0},unitDescription:`file`,name:`CAVATICA/Terra/Pluto Integration Demo`,hideSqlEditorControl:!1,shouldDeepLink:!1,enabledExternalAnalysisPlatforms:[`cavatica`,`terra`,`plutodev`]}},O=async e=>{let t=[];return e.request.query.sql=`select id from syn51186974`,(await h.getFullQueryTableResults(e.request)).queryResult?.queryResults.rows.map(e=>{e.values&&e.values[0]&&t.push(e.values[0])}),t},k=async e=>{let n=e.selectedRows&&e.selectedRows.length>0;p(`Custom action applied to ${n?e.selectedRows.length:`all`} rows (see js console for more information)`),console.log(`Rows selected:`),console.log(e.selectedRows);let r=e.queryMetadata?.columnModels?.findIndex(e=>e.name===`id`),i=n?e.selectedRows.map(e=>e.values[r]):await O(e),a={concreteType:`org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter`,columnName:`id`,operator:o.IN,values:i};localStorage.setItem(t(`syn51186974-selectedfiles`),JSON.stringify([a])),console.log(`Local Storage value set, refresh table to see additionalFilter QueryFilter being utilized`),e.refresh()},A={args:{sql:`SELECT * FROM syn11346063.57`,isRowSelectionVisible:!0,tableConfiguration:{},name:`Row Selection Demo`,hideSqlEditorControl:!0,shouldDeepLink:!1,additionalFiltersSessionStorageKey:` syn11346063-selectedfiles`,customControls:[{buttonText:`Row Custom Command`,onClick:e=>{k(e)},buttonID:`RowSelectionCustomCommandButtonID`}]}},j={args:{sql:`SELECT * FROM syn51425243`,tableConfiguration:{showAccessColumn:!0,showDirectDownloadColumn:!0},name:`Table Has Access Requirement`,hideSqlEditorControl:!1,shouldDeepLink:!1}},M={args:{sql:`SELECT * FROM syn51489955`,tableConfiguration:{showAccessColumn:!1,showDirectDownloadColumn:!1},name:`No Table Download Access`,hideSqlEditorControl:!1,shouldDeepLink:!1,onViewSharingSettingsClicked:e=>{p(`Open the ${e} Sharing Settings dialog.  If undefined, send to the entity page.`,`info`,{primaryButtonConfig:{text:`Open Entity Page`,href:`https://www.synapse.org/Synapse:${e}`}})}}},N={args:{sql:`SELECT * FROM syn26302617`,tableConfiguration:{showAccessColumn:!0,showDirectDownloadColumn:!0},name:`Dataset Demo`,sqlOperator:o.EQUAL,hideSqlEditorControl:!1,shouldDeepLink:!1,enabledExternalAnalysisPlatforms:[`cavatica`,`terra`],helpConfiguration:[{columnName:`id`,helpText:`This represents the unique ID in Synapse`}]}},P={args:{sql:`SELECT * FROM syn33199585`,tableConfiguration:{showAccessColumn:!0,showDirectDownloadColumn:!0},name:`Dataset Collection Demo`,sqlOperator:o.EQUAL,hideSqlEditorControl:!1,shouldDeepLink:!1}},F={args:{sql:`SELECT * FROM syn13897207`,name:`People Demo`,sqlOperator:o.EQUAL,hideSqlEditorControl:!1,shouldDeepLink:!1,cardConfiguration:{type:n}}},I={args:{sql:`SELECT * FROM syn52115635`,tableConfiguration:{},name:`JSON Column Demo`,hideSqlEditorControl:!1,shouldDeepLink:!1}},L={args:{sql:`SELECT * FROM syn52737576`,tableConfiguration:{showAccessColumn:!0,showDirectDownloadColumn:!0},name:`MV with File Commands Demo`,sqlOperator:o.EQUAL,hideSqlEditorControl:!1,shouldDeepLink:!1,enabledExternalAnalysisPlatforms:[`cavatica`,`terra`],fileIdColumnName:`id`,fileNameColumnName:`name`,fileVersionColumnName:`currentVersion`}},R={parameters:{stack:`development`},args:{sql:`SELECT * FROM syn14227599`,tableConfiguration:{showAccessColumn:!0,showDirectDownloadColumn:!0},name:`Table with Click Wrap`,hideSqlEditorControl:!1,shouldDeepLink:!1,enabledExternalAnalysisPlatforms:[`cavatica`,`terra`],fileIdColumnName:`id`,fileNameColumnName:`name`,fileVersionColumnName:`currentVersion`}},z={args:{sql:`SELECT * FROM syn64926023`,tableConfiguration:{showAccessColumn:!0,showDirectDownloadColumn:!0},name:`Table with Range Types`,hideSqlEditorControl:!1,shouldDeepLink:!1,enabledExternalAnalysisPlatforms:[]}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Data Catalog',
    sql: "SELECT * FROM syn61609402 where includedInDataCatalog = 'true'",
    defaultShowPlots: false,
    defaultShowSearchBox: true,
    hideCopyToClipboard: true,
    hideSearchBarControl: false,
    hideDownload: true,
    cardConfiguration: {
      type: GENERIC_CARD,
      secondaryLabelLimit: 4,
      genericCardSchema: {
        type: DATASET,
        title: 'name',
        subTitle: 'community',
        description: 'description',
        secondaryLabels: ['contributors', 'individuals', 'id', 'link']
      }
    }
  }
}`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Tools',
    sql: 'SELECT * FROM syn51730943',
    customPlots: [{
      query: 'SELECT resourceType, count(resourceType) FROM syn51730943 GROUP BY resourceType ',
      type: 'bar',
      title: 'Resource Type',
      onCustomPlotClick: handlePlotClick
    }],
    limit: 5,
    initialLimit: 2,
    defaultShowPlots: false,
    defaultShowSearchBox: true,
    shouldDeepLink: true,
    cardConfiguration: {
      type: GENERIC_CARD,
      titleLinkConfig: {
        isMarkdown: false,
        baseURL: 'Explore/Tools/DetailsPage',
        URLColumnName: 'resourceId',
        matchColumnName: 'resourceId',
        overrideLinkURLColumnName: 'biobankURL'
      },
      secondaryLabelLimit: 4,
      genericCardSchema: {
        type: EXPERIMENTAL_TOOL,
        title: 'resourceName',
        subTitle: 'resourceType',
        description: 'description',
        secondaryLabels: ['investigatorName', 'institution', 'rrid', 'synonyms', 'cellLineCategory', 'cellLineDisease', 'modelofManifestation', 'backgroundStrain', 'backgroundSubstrain', 'animalModelDisease', 'animalModelOfManifestation', 'targetAntigen', 'reactiveSpecies', 'hostOrganism', 'specimenTissueType', 'specimenPreparationMethod', 'diseaseType', 'tumorType', 'specimenFormat', 'specimenType', 'dateModified']
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    tableConfiguration: {
      showAccessColumn: true,
      showDirectDownloadColumn: true,
      columnLinks: [{
        matchColumnName: 'study',
        isMarkdown: false,
        baseURL: 'Explore/Studies/DetailsPage',
        URLColumnName: 'Study_Name',
        wrapValueWithParens: true
      }, {
        matchColumnName: 'name',
        isMarkdown: false,
        baseURL: 'Explore/Files/DetailsPage',
        URLColumnName: 'FileId',
        overrideValueWithRowID: true,
        wrapValueWithParens: false
      }]
    },
    searchConfiguration: {
      searchable: ['study', 'dataType', 'assay', 'organ', 'tissue', 'species', 'diagnosis', 'sex', 'consortium', 'grant', 'modelSystemName', 'treatmentType', 'specimenID', 'individualID', 'individualIdSource', 'specimenIdSource', 'resourceType', 'dataSubtype', 'metadataType', 'assayTarget', 'analysisType', 'cellType', 'nucleicAcidSource', 'fileFormat', 'group', 'name', 'isModelSystem', 'isConsortiumAnalysis', 'isMultiSpecimen', 'metaboliteType', 'chromosome']
    },
    shouldDeepLink: true,
    visibleColumnCount: 10,
    rgbIndex: 1,
    name: 'Data',
    sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
    sql: 'SELECT * FROM syn11346063',
    hideSqlEditorControl: false
  }
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...FileView.args,
    shouldDeepLink: false,
    initQueryJson: JSON.stringify(queryWithAdditionalFilter),
    lockedColumn: {
      columnName: 'study',
      value: ''
    }
  }
}`,...E.parameters?.docs?.source},description:{story:`This demo contains a filter on a locked column. This type of configuration should hide that the filter on the locked
column is applied, making it seem as if the total contents of the table are just the filtered results. Common in
DetailsPages in portals.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT * FROM syn11346063.69',
    isRowSelectionVisible: true,
    tableConfiguration: {
      showAccessColumn: true,
      showDirectDownloadColumn: true
    },
    unitDescription: 'file',
    name: 'CAVATICA/Terra/Pluto Integration Demo',
    hideSqlEditorControl: false,
    shouldDeepLink: false,
    enabledExternalAnalysisPlatforms: ['cavatica', 'terra', 'plutodev']
  }
}`,...D.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT * FROM syn11346063.57',
    isRowSelectionVisible: true,
    tableConfiguration: {},
    name: 'Row Selection Demo',
    hideSqlEditorControl: true,
    shouldDeepLink: false,
    // demo custom additional filter local storage key.
    // In the cohort builder, the file view of the Virtual Table should have one value,
    // while the participant view of the same Virtual Table should have another.
    // The custom commands should add filters that target the other perspective
    // (file command adds filter for participant perspective, participant command adds filter for the file perspective)
    additionalFiltersSessionStorageKey: ' syn11346063-selectedfiles',
    customControls: [{
      buttonText: 'Row Custom Command',
      onClick: (event: CustomControlCallbackData) => {
        handleRowSelectionCustomCommandClick(event);
      },
      buttonID: 'RowSelectionCustomCommandButtonID'
    }]
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT * FROM syn51425243',
    tableConfiguration: {
      showAccessColumn: true,
      showDirectDownloadColumn: true
    },
    name: 'Table Has Access Requirement',
    hideSqlEditorControl: false,
    shouldDeepLink: false
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT * FROM syn51489955',
    tableConfiguration: {
      showAccessColumn: false,
      showDirectDownloadColumn: false
    },
    name: 'No Table Download Access',
    hideSqlEditorControl: false,
    shouldDeepLink: false,
    // onViewSharingSettingsClicked: undefined
    onViewSharingSettingsClicked: (benefactorEntityId: string) => {
      displayToast(\`Open the \${benefactorEntityId} Sharing Settings dialog.  If undefined, send to the entity page.\`, 'info', {
        primaryButtonConfig: {
          text: 'Open Entity Page',
          href: \`https://www.synapse.org/Synapse:\${benefactorEntityId}\`
        }
      });
    }
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT * FROM syn26302617',
    tableConfiguration: {
      showAccessColumn: true,
      showDirectDownloadColumn: true
    },
    name: 'Dataset Demo',
    sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
    hideSqlEditorControl: false,
    shouldDeepLink: false,
    enabledExternalAnalysisPlatforms: ['cavatica', 'terra'],
    helpConfiguration: [{
      columnName: 'id',
      helpText: 'This represents the unique ID in Synapse'
    }]
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT * FROM syn33199585',
    tableConfiguration: {
      showAccessColumn: true,
      showDirectDownloadColumn: true
    },
    name: 'Dataset Collection Demo',
    sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
    hideSqlEditorControl: false,
    shouldDeepLink: false
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT * FROM syn13897207',
    name: 'People Demo',
    sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
    hideSqlEditorControl: false,
    shouldDeepLink: false,
    cardConfiguration: {
      type: MEDIUM_USER_CARD
    }
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT * FROM syn52115635',
    tableConfiguration: {},
    name: 'JSON Column Demo',
    hideSqlEditorControl: false,
    shouldDeepLink: false
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT * FROM syn52737576',
    tableConfiguration: {
      showAccessColumn: true,
      showDirectDownloadColumn: true
    },
    name: 'MV with File Commands Demo',
    sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
    hideSqlEditorControl: false,
    shouldDeepLink: false,
    enabledExternalAnalysisPlatforms: ['cavatica', 'terra'],
    fileIdColumnName: 'id',
    fileNameColumnName: 'name',
    fileVersionColumnName: 'currentVersion'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    stack: 'development'
  },
  args: {
    sql: 'SELECT * FROM syn14227599',
    tableConfiguration: {
      showAccessColumn: true,
      showDirectDownloadColumn: true
    },
    name: 'Table with Click Wrap',
    hideSqlEditorControl: false,
    shouldDeepLink: false,
    enabledExternalAnalysisPlatforms: ['cavatica', 'terra'],
    fileIdColumnName: 'id',
    fileNameColumnName: 'name',
    fileVersionColumnName: 'currentVersion'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT * FROM syn64926023',
    tableConfiguration: {
      showAccessColumn: true,
      showDirectDownloadColumn: true
    },
    name: 'Table with Range Types',
    hideSqlEditorControl: false,
    shouldDeepLink: false,
    enabledExternalAnalysisPlatforms: []
  }
}`,...z.parameters?.docs?.source}}},B=[`DataCatalogCards`,`Cards`,`FileView`,`FileViewWithLockedColumn`,`SendToAnalysisPlatform`,`TableRowSelectionWithCustomCommand`,`TableHasAccessRequirement`,`TableWithNoDownloadAccess`,`Dataset`,`DatasetCollection`,`People`,`TableWithJSONColumns`,`MaterializedViewOfFiles`,`TableWithClickWrap`,`TableWithRange`]}))();export{C as Cards,x as DataCatalogCards,N as Dataset,P as DatasetCollection,w as FileView,E as FileViewWithLockedColumn,L as MaterializedViewOfFiles,F as People,D as SendToAnalysisPlatform,j as TableHasAccessRequirement,A as TableRowSelectionWithCustomCommand,R as TableWithClickWrap,I as TableWithJSONColumns,M as TableWithNoDownloadAccess,z as TableWithRange,B as __namedExportsOrder,b as default};