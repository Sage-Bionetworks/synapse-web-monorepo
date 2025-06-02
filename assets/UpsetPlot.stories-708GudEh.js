import{U as L}from"./UpsetPlot-BTdMzFrq.js";import{f as u}from"./index-1c6Jam-L.js";import"./jsx-runtime-CbE1-_Hu.js";import"./index-DRsegcgA.js";import"./iframe-DRSrCG1x.js";import"./LargeButton-DyOqqe0Z.js";import"./DefaultPropsProvider-C12ceKGQ.js";import"./createTheme-C7_V6wpJ.js";import"./Button-BVRJ5q5Y.js";import"./ButtonBase-CmnTtM5f.js";import"./useTimeout-DQT_LAZn.js";import"./TransitionGroupContext-OZASuHiR.js";import"./useForkRef-C78wZDeC.js";import"./useIsFocusVisible-obP2HoUH.js";import"./useEventCallback-BvBBsNbH.js";import"./useFiles-CAlHmr5T.js";import"./VerificationSubmission-BI5WaB2N.js";import"./SynapseConstants-bJg229mq.js";import"./OrientationBanner-DGngaujv.js";import"./index-LifXYACQ.js";import"./spreadSx-CwcO6WA9.js";import"./react-DxM2qjbL.js";import"./FullWidthAlert-3uSpNraA.js";import"./Alert-Bw1ywpIE.js";import"./resolveComponentProps-BN9HfiQD.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-18JsIaS-.js";import"./Close-DOqyLWj4.js";import"./IconButton-sxPalBtr.js";import"./Paper-CqJ40SAY.js";import"./Stack-Dg2xMObN.js";import"./getThemeProps-BLKeHxpS.js";import"./useTheme-CQ-aVgZE.js";import"./Box-D2GFn1fE.js";import"./AlertTitle-BCwKsMwc.js";import"./Typography-lU14u2GV.js";import"./useTheme-CRuycb0z.js";import"./Grow-CPE-J13k.js";import"./index-CziNeJdu.js";import"./utils-cOnYn6rO.js";import"./ClickAwayListener-D_gLR8Uu.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-v1tj7X5H.js";import"./index-C7UNvflh.js";import"./useControlled-CujF-W-N.js";import"./useId-C6f6WTtB.js";import"./Popper-IFEDVLcM.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-BXg3aRdm.js";import"./useQuery-szSrlcgI.js";import"./utils-CsQgGKbD.js";import"./Link-Cm7aV6n7.js";import"./Collapse-CPeMUQEz.js";import"./isNil-qGzJk0AT.js";import"./_Uint8Array-D2WfOTdE.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Cqjtje0X.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-CV2sNz5h.js";import"./_getTag-C1ILiECS.js";import"./tinycolor-Begke6kS.js";import"./Fade-vW6FvaYU.js";import"./Skeleton-Dgpvxrx_.js";import"./inputBaseClasses-DIfFvLjN.js";import"./calculateFriendlyFileSize-D9Fs0pNs.js";import"./CheckCircleTwoTone-DGPS0HlM.js";import"./InfoTwoTone-DBfE9lFd.js";import"./useMutation-DBuu9s3L.js";import"./isEqual-DE_dUMMt.js";import"./dayjs.min-rU54EIQ-.js";import"./chunk-AYJ5UCUI-CRE7f-_Q.js";import"./cloneDeep-BgDpPnkU.js";import"./_initCloneObject-Dh3qvFnp.js";import"./merge-Bw0szGHI.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BY6bcuvw.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-TTSgOIDL.js";import"./Backdrop-DN9q4oz3.js";import"./LinearProgress-BqySs8R0.js";import"./index-DR2wFsb7.js";import"./index-DxYkL6hh.js";import"./const-Doag8klc.js";import"./index-BAh6BXFl.js";const jt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Kt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Kt as __namedExportsOrder,jt as default};
