import{U as L}from"./UpsetPlot-D2yidIvJ.js";import{f as u}from"./index-B54AI9E1.js";import"./jsx-runtime-D7u9V72l.js";import"./index-DIRP2mCL.js";import"./iframe-DvWt0ZAp.js";import"./LargeButton-CzFfWxEk.js";import"./DefaultPropsProvider-CvtzjoSb.js";import"./createTheme-ZwoTvgm9.js";import"./Button-Cc2ZrLOs.js";import"./createSimplePaletteValueFilter-nNG9q7Sh.js";import"./useTimeout-CBZZ7H3Q.js";import"./ButtonBase-B0cxrwnL.js";import"./useForkRef-b5KNrNfS.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ZnNsf0Kr.js";import"./useFiles--Fji3vMM.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-CH854TFV.js";import"./OrientationBanner-kwVrgmyF.js";import"./index-DAtIT332.js";import"./spreadSx-CwcO6WA9.js";import"./react-DOJgxBXV.js";import"./FullWidthAlert-CLcKqRsk.js";import"./Alert-CkX9fRjW.js";import"./useSlot-DE-Pgg-g.js";import"./createSvgIcon-Bxzmu4vz.js";import"./Close-BI6GuXhT.js";import"./IconButton-nQiKeKZm.js";import"./Paper-CLP7fHbB.js";import"./useTheme-C8L1Kxxv.js";import"./useTheme-DPM9nS2f.js";import"./Stack-6RwAq8kg.js";import"./extendSxProp-Cb7ZLztd.js";import"./getThemeProps-B-Dxxkrj.js";import"./Box-BEiNcjcE.js";import"./AlertTitle-7AwEmAD3.js";import"./Typography-M9KF5p_g.js";import"./index-heaGSp29.js";import"./ClickAwayListener-CdviVauh.js";import"./getReactElementRef-JAQ7byAz.js";import"./index-B7KIz0eC.js";import"./index-04G71cQJ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-mgM_dyBK.js";import"./Tooltip-CwW5wt2J.js";import"./index-BtRE8HK7.js";import"./useControlled-CAHdEYiv.js";import"./Popper-DlvAbLM7.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-C98ICP4o.js";import"./utils-DA3XjsWl.js";import"./Link-CduNptY6.js";import"./Collapse-BF5Saqfq.js";import"./_baseUniq-BSKzbIRa.js";import"./_Uint8Array-B1YxsvGR.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-B2qG3IjH.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CwQEadFU.js";import"./isEqual-Cz5E7whK.js";import"./merge-T2Rtq5_x.js";import"./_initCloneObject-AR8w6wIq.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D9b2Gutx.js";import"./inputBaseClasses-6e4vcwCJ.js";import"./calculateFriendlyFileSize-U7O1PnIw.js";import"./CheckCircleTwoTone-Chv9Dcrx.js";import"./InfoTwoTone-O5vZVGFV.js";import"./useMutation-CVuLVRZr.js";import"./dayjs.min-B7G6KnF3.js";import"./chunk-AYJ5UCUI-Ce6RdxID.js";import"./cloneDeep-BnbH_ri7.js";import"./Skeleton-ObQKd-kN.js";import"./SqlFunctions-DPgti-mT.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BUnjQ5NQ.js";import"./Backdrop-D7EtKFVN.js";import"./LinearProgress-BXv0sfto.js";import"./index-6G3WwBzs.js";import"./index-DSE0-u77.js";import"./index-BcVP414S.js";import"./const-Doag8klc.js";import"./index-DN5Kwn_a.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
