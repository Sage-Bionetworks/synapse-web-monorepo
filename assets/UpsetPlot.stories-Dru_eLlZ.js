import{U as L}from"./UpsetPlot-BFblqDJN.js";import{f as u}from"./index-DPeu_zfe.js";import"./jsx-runtime-12fxGrjy.js";import"./index-eWb6yZq4.js";import"./iframe-DODfCr77.js";import"./LargeButton-BV4PiQHk.js";import"./DefaultPropsProvider-Ci8sbTV8.js";import"./createTheme-DRhRClLk.js";import"./Button-CDoCRKn7.js";import"./createSimplePaletteValueFilter-CMraNz6N.js";import"./useTimeout-CUTjfTtv.js";import"./ButtonBase-CLm9sSu-.js";import"./useForkRef-B4NxTtZx.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CdPHbqUK.js";import"./useFiles-DzQRyXfk.js";import"./VerificationSubmission-DKyendrM.js";import"./SynapseConstants-C01AROpC.js";import"./OrientationBanner-CswyJYID.js";import"./index-CMNPibww.js";import"./spreadSx-CwcO6WA9.js";import"./react-Bk-AWK8u.js";import"./FullWidthAlert-Blq3bBEi.js";import"./Alert-DWxtKETL.js";import"./useSlot-BOoc1-Wr.js";import"./createSvgIcon-D4n9PHew.js";import"./Close-DkJIaBp5.js";import"./IconButton-CJduSAtX.js";import"./Paper-Ci3Yueie.js";import"./useTheme-Do_MDklG.js";import"./useTheme-z8lzzdCb.js";import"./Stack-BS_Kn9Ff.js";import"./extendSxProp-DI5yyw6H.js";import"./getThemeProps-SQagHrVW.js";import"./Box-0inLKyKa.js";import"./AlertTitle-Ck-1gEhW.js";import"./Typography-CJHr4OCJ.js";import"./index-BwS5CNFE.js";import"./ClickAwayListener-DO69o72C.js";import"./getReactElementRef-DFFPg7hK.js";import"./index-CxQ-mLV2.js";import"./index-DlwQbzBX.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BKGYiqhi.js";import"./Tooltip-CxkZFGgd.js";import"./index-COCW-O7-.js";import"./useControlled-C7HItnBl.js";import"./Popper-CmdmamXe.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-DrZ8vTnH.js";import"./utils-j4SBhjSC.js";import"./Link-DTOk0JUk.js";import"./Collapse-CErYxnBs.js";import"./isNil-DLNdS6CO.js";import"./_Uint8Array-MTHtMqKk.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DitNMTVV.js";import"./isArray-Dxzbedgu.js";import"./isEqual-bHqmOGPc.js";import"./_getTag-C-k0-mgg.js";import"./tinycolor-Begke6kS.js";import"./Fade-B3HIOSOQ.js";import"./inputBaseClasses-iQvrcFLc.js";import"./calculateFriendlyFileSize-DKkGrI5V.js";import"./CheckCircleTwoTone-CIQNt3ux.js";import"./InfoTwoTone-BKwLIjWH.js";import"./useMutation-BJDaPx8l.js";import"./dayjs.min-CmKjBYsK.js";import"./chunk-AYJ5UCUI-C563RCUQ.js";import"./cloneDeep-C54KQJJc.js";import"./_initCloneObject-C69klfYQ.js";import"./Skeleton-DP5N4NIj.js";import"./merge-C4MUQ4-m.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-D5GxPzI3.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Di5h1pDz.js";import"./Backdrop-D6PBFd4w.js";import"./LinearProgress-CE3Dpwb7.js";import"./index-BG2au_tD.js";import"./index-CRgLlqfl.js";import"./index-M9nZY-ue.js";import"./const-Doag8klc.js";import"./index-B55PTghO.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)',
    rgbIndex: 0,
    maxBarCount: 20,
    setName: 'Individuals (#) per Assay',
    combinationName: 'Individuals (#)',
    summaryLink: '#',
    summaryLinkText: 'Explore All Of Something',
    onClick: selection => {
      const sets = (selection as any).sets;
      const query: Query = {
        sql: 'select * from syn12345',
        // stub files sql
        selectedFacets: [{
          concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          columnName: 'Assays',
          facetValues: [...sets.values()].map((v: any) => v.name) as string[]
        }]
      };
      const url = \`/Explore/Data%20by%20Files?QueryWrapper0=\${JSON.stringify(query)}\`;
      console.log(url);
    }
  }
}`,...(a=(e=t.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    rgbIndex: 0,
    maxBarCount: 10,
    setName: 'Set size',
    combinationName: 'Intersection size',
    onClick: fn()
  }
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var p,l,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    maxBarCount: 10,
    setName: 'Set size',
    combinationName: 'Intersection size',
    variant: 'ampals',
    onClick: fn()
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Xt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Xt as __namedExportsOrder,Kt as default};
