import{U as L}from"./UpsetPlot-CL2RZCTS.js";import{f as u}from"./index-KRdTISwK.js";import"./jsx-runtime-DAw_QoWs.js";import"./index-B1D9r8pK.js";import"./iframe-BcOC2yHy.js";import"./LargeButton-Bka4CYB8.js";import"./DefaultPropsProvider-BRQN9N2m.js";import"./createTheme-C3x6mOsc.js";import"./Button-LzYkJm9V.js";import"./ButtonBase-CxNTjvXH.js";import"./useTimeout-DOooaOO7.js";import"./TransitionGroupContext-Bl3cUyHW.js";import"./useForkRef-BvktJw4g.js";import"./useIsFocusVisible-B_nwMbU_.js";import"./useEventCallback-C_4PLi3H.js";import"./useFiles-D5p9mEeJ.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-ChwKCKUe.js";import"./OrientationBanner-oeQY9W6x.js";import"./index-CSHqL8lk.js";import"./spreadSx-CwcO6WA9.js";import"./react-CaHgI2xI.js";import"./FullWidthAlert-CqKKYlX-.js";import"./Alert-Bd4UixhE.js";import"./resolveComponentProps-Bml2h3Vr.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-DFCLsq46.js";import"./Close-DQBgDOSz.js";import"./IconButton-CQEpaTId.js";import"./Paper-CLLam5eU.js";import"./Stack-MFmmhnKS.js";import"./getThemeProps-DX1gnVmC.js";import"./useTheme-ChDKy_2u.js";import"./Box-D-8YJusE.js";import"./AlertTitle-C83HUI2e.js";import"./Typography-VOjsn5Pz.js";import"./useTheme-bvUc0IYs.js";import"./Grow-BPCk84L6.js";import"./index-C88ldYJB.js";import"./utils-Bzb8CGjQ.js";import"./ClickAwayListener-BMStZymP.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Dp2Znnys.js";import"./index-CHIJk7Ky.js";import"./useControlled-BzTXu6R5.js";import"./useId-BgwkmMHa.js";import"./Popper-Cbo0s97p.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Df7AZImX.js";import"./useQuery-CWk1d_fS.js";import"./utils-D8g86RT1.js";import"./Link-C5RxPrJ3.js";import"./Collapse-DxRVa4rj.js";import"./isNil-trK1jsU5.js";import"./_Uint8Array-DpxWhSn9.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-l2stp93q.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-D9NgJpr4.js";import"./_getTag-BmfB6MEh.js";import"./tinycolor-Begke6kS.js";import"./Fade-C5PK1kHy.js";import"./Skeleton-BAZzAkN6.js";import"./inputBaseClasses-DXZf_3PC.js";import"./calculateFriendlyFileSize-DmhL_8oc.js";import"./CheckCircleTwoTone-CNnVInjh.js";import"./InfoTwoTone-BmfNDtit.js";import"./mutation-CINg4fey.js";import"./dayjs.min-DQJgKjZd.js";import"./chunk-AYJ5UCUI-B9_CWiKA.js";import"./cloneDeep-cFlRRiur.js";import"./_initCloneObject-X1pr-NFE.js";import"./isEqual-BZl8ciHp.js";import"./merge-TeTmR9Lg.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxVSBgLJ.js";import"./react-sizeme-tLR4v8E_.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BhNBz0nS.js";import"./Backdrop-H_np-adY.js";import"./LinearProgress-Bq4FfcSq.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
