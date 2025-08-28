import{U as L}from"./UpsetPlot-DLDhNcj0.js";import{f as u}from"./index-Drx8msrJ.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Dtfie2iY.js";import"./DefaultPropsProvider-CH4awBfy.js";import"./createTheme-yejIOOkb.js";import"./index-ChY5Rm6r.js";import"./iframe-CqQBMbol.js";import"./Button-CHpGI9QY.js";import"./createSimplePaletteValueFilter-vjYDemZD.js";import"./useTimeout-B6D9Pure.js";import"./ButtonBase-OFJXx0k5.js";import"./useForkRef-Bmi28WuE.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DR9XS5It.js";import"./useFiles-CwBFozNb.js";import"./VerificationSubmission-CNoSrCdk.js";import"./SynapseConstants-H9QYZQx4.js";import"./OrientationBanner-CNeoJCz0.js";import"./index-DS8XOEZK.js";import"./spreadSx-CwcO6WA9.js";import"./react-DWoRMFdS.js";import"./FullWidthAlert-BORMZYsm.js";import"./Alert-Cb4ypvVc.js";import"./useSlot-CESV_KM2.js";import"./createSvgIcon-BsG8pbCe.js";import"./Close-CYN-IZzU.js";import"./IconButton-BYEsdF7g.js";import"./Paper-BGXgkOJn.js";import"./useTheme-DTyxxCa-.js";import"./useTheme-BfPp1CkS.js";import"./Stack-WojIaCdv.js";import"./extendSxProp-B7a0KEn2.js";import"./getThemeProps-OsG-0KZZ.js";import"./Box-DnISmt3M.js";import"./AlertTitle-C3WBFCmK.js";import"./Typography-BRD-yvy7.js";import"./index-_5AG2bz6.js";import"./ClickAwayListener-DFWrRdPK.js";import"./getReactElementRef-CPbW36NU.js";import"./index-BtYd2M4Q.js";import"./index-CTRw8MjU.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Brrrt1Cb.js";import"./Tooltip-DyXSSX-F.js";import"./index-C0Hx0yuJ.js";import"./useControlled-RMaq-pts.js";import"./Popper-Dj_XAtVq.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BmiE0y30.js";import"./useQuery-qLmhWmxw.js";import"./QueryClientProvider-BvTCMYrF.js";import"./Link-DouBH94E.js";import"./Collapse-CS4SoJcv.js";import"./_baseUniq-BNiF46u2.js";import"./_Uint8Array-ZkOH5xaJ.js";import"./isArray-BatmeEgt.js";import"./_getTag-DL7PcpR3.js";import"./isEqual-BmZyvHNS.js";import"./merge-DrBJrbmn.js";import"./_initCloneObject-BXiQnqVl.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CaDQddmk.js";import"./inputBaseClasses-D442M768.js";import"./calculateFriendlyFileSize-198o5yg1.js";import"./CheckCircleTwoTone-BmTJI1it.js";import"./InfoTwoTone-DPmSL3RU.js";import"./useMutation-Bs_GnPAU.js";import"./dayjs.min-NAl5tlfA.js";import"./chunk-AYJ5UCUI-B1Fmi4bj.js";import"./cloneDeep-5C23vurL.js";import"./Skeleton-DsgEN2lO.js";import"./SqlFunctions-FlDJijt2.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Dri8V2uV.js";import"./Backdrop-BRIgn0Th.js";import"./LinearProgress-rXKm0g78.js";import"./index-DXw6bmrJ.js";import"./index-BGwcDoST.js";import"./index-BFomJ-fi.js";import"./const-BP60AzNb.js";import"./index-B8pfCLFk.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const jt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,jt as __namedExportsOrder,$t as default};
