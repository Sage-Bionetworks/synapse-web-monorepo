import{U as L}from"./UpsetPlot-BLXLcrp5.js";import{f as u}from"./index-C9OZ1VQp.js";import"./jsx-runtime-tYB6KGdN.js";import"./index-Bkzzsk0B.js";import"./iframe-PLARaQxx.js";import"./LargeButton-DJC3YjdT.js";import"./DefaultPropsProvider-keNhgGSS.js";import"./createTheme-ow6PpJ59.js";import"./Button-lu1VZGqc.js";import"./ButtonBase-DUe-2sLH.js";import"./useTimeout-D_xDPDG6.js";import"./TransitionGroupContext-BI5ozUmQ.js";import"./useForkRef-9Xc3crMX.js";import"./useIsFocusVisible-BmX07aem.js";import"./useEventCallback-n4BBqXCp.js";import"./useFiles-DvmSZ7jv.js";import"./VerificationSubmission-B0kBNeMy.js";import"./SynapseConstants-C6W0HfbC.js";import"./OrientationBanner-DtbTbOX1.js";import"./index-CoNRd3XO.js";import"./spreadSx-CwcO6WA9.js";import"./react-C-ewhzLl.js";import"./FullWidthAlert-DhQrdjoW.js";import"./Alert-B1CSW1mB.js";import"./resolveComponentProps-DtrKlPN5.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-BMm4XUen.js";import"./Close-C7oos599.js";import"./IconButton-NVoucUGK.js";import"./Paper-CUJNJhUR.js";import"./Stack-yhBWrz08.js";import"./getThemeProps-DKG83qIe.js";import"./useTheme-BjnpOWHg.js";import"./Box-BxR0r0Bu.js";import"./AlertTitle-CVG6At3E.js";import"./Typography-BZGJY9FA.js";import"./useTheme-DhFu0EUb.js";import"./Grow-CKdiTWKJ.js";import"./index-s6VlmbGT.js";import"./utils-B54jEU3b.js";import"./ClickAwayListener-ComLkdB-.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-5RP58HIB.js";import"./index-C1cLcL-0.js";import"./useControlled-DJeY4ee5.js";import"./useId-b-gK5Z5A.js";import"./Popper-DiS3rm17.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-CzgJJW-6.js";import"./useQuery-CdcWoVBs.js";import"./utils-Chx9P0H6.js";import"./Link-DqPKtuF6.js";import"./Collapse-BvuOKxET.js";import"./isNil-DJG7UM9y.js";import"./_Uint8Array-BtQ75CAl.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BOpRD9h1.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DVVLfzkX.js";import"./_getTag-9nw34TEi.js";import"./tinycolor-Begke6kS.js";import"./Fade-DXThxLhw.js";import"./Skeleton-DDpLtQDR.js";import"./inputBaseClasses-HcbgCmhJ.js";import"./calculateFriendlyFileSize-DM-ZgnS1.js";import"./CheckCircleTwoTone-BvcCTkha.js";import"./InfoTwoTone-XqK14u6n.js";import"./mutation-DSCbETsB.js";import"./dayjs.min-B8Vi_I8g.js";import"./chunk-AYJ5UCUI-D3hJj5mX.js";import"./cloneDeep-DTYlG1uc.js";import"./_initCloneObject-BIJYbTMn.js";import"./isEqual-Cw7YgxfX.js";import"./merge-BufaBT0Y.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DnxC6kpb.js";import"./react-sizeme-B3XSd1YT.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BZZkITwO.js";import"./Backdrop-DfAJYufp.js";import"./LinearProgress-0FFRjz5m.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const _t=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,_t as __namedExportsOrder,Yt as default};
