import{U as L}from"./UpsetPlot-Doe68pj8.js";import{f as u}from"./index-BEsfzSfK.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-OFPjxsmE.js";import"./DefaultPropsProvider-ClcQ3uP0.js";import"./createTheme-TpA-3NyD.js";import"./index-rtfIZOBz.js";import"./iframe-BSAdkskh.js";import"./Button-BIg6urlw.js";import"./createSimplePaletteValueFilter-CRcDnHhj.js";import"./useTimeout-UPOXvIQi.js";import"./ButtonBase-CvtPUVDK.js";import"./useForkRef-BXmHGwTp.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-PmYyi6P1.js";import"./useFiles-BQlRdK2p.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-C9Kx2PdH.js";import"./OrientationBanner-CFBv2Mgj.js";import"./index-Id6yKsWj.js";import"./spreadSx-CwcO6WA9.js";import"./react-4NYdTHIT.js";import"./FullWidthAlert-DfRiHts4.js";import"./Alert-CPLuX8Hb.js";import"./useSlot-DLjeaIp5.js";import"./createSvgIcon-CwoUZhBh.js";import"./Close-Ds7BVYZC.js";import"./IconButton-pezkiABd.js";import"./Paper-XVSaVcnR.js";import"./useTheme-CLtP7zuk.js";import"./useTheme-46yO0v9y.js";import"./Stack-isn2z1hm.js";import"./extendSxProp-BA64ORW4.js";import"./getThemeProps-BcSfWOMe.js";import"./Box-CmPnTZT6.js";import"./AlertTitle-Cqx2Kz-Q.js";import"./Typography-CVsqgwqE.js";import"./index-mZUzmPNt.js";import"./ClickAwayListener-CHD4va3x.js";import"./getReactElementRef-C7VXSmDD.js";import"./index-CAPjrIXg.js";import"./index-CqvFs-KO.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bhg4T4Mr.js";import"./Tooltip-bA_0IsvL.js";import"./index-TxSCJiWo.js";import"./useControlled-Xa_D7kK1.js";import"./Popper-Dq8sBxDL.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BWmFLtG_.js";import"./QueryClientProvider-JjFW09VY.js";import"./Link-DqnKyorz.js";import"./Collapse-DNDcHbRG.js";import"./_baseUniq-DGRBPPYl.js";import"./_Uint8Array-BAHg-G7z.js";import"./isArray-D_sXtQcP.js";import"./_getTag-Cpfz1PLy.js";import"./isEqual-CCOT5IPQ.js";import"./merge-DylbgP-k.js";import"./_initCloneObject-CoBPQnAp.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DeDuUH6a.js";import"./inputBaseClasses-C39B9qSG.js";import"./calculateFriendlyFileSize-Dkozcub-.js";import"./CheckCircleTwoTone-BD6TWLlR.js";import"./InfoTwoTone-D2Cft5us.js";import"./useMutation-DcQ8H_mX.js";import"./dayjs.min-DiFtu2Qq.js";import"./chunk-AYJ5UCUI-BMeXv6Ag.js";import"./cloneDeep-Cr3r1W7N.js";import"./Skeleton-UavY_-4M.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DqVmtEcw.js";import"./Backdrop-BiGgfsHJ.js";import"./LinearProgress-Hov9YEhx.js";import"./index-BhMuydRu.js";import"./index-7sqQKGi9.js";import"./index-C86djSp8.js";import"./const-BP60AzNb.js";import"./index-Ct7q-KwE.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
