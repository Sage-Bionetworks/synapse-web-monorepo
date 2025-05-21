import{U as L}from"./UpsetPlot-CWP3UiMH.js";import{f as u}from"./index-Bl3uPSH3.js";import"./jsx-runtime-B8F9yCu2.js";import"./index-DQ1pwsUN.js";import"./iframe-Ber0uhpE.js";import"./LargeButton-B2-VRGX0.js";import"./DefaultPropsProvider-DTNalRio.js";import"./createTheme-CvWzDpdo.js";import"./Button-CYW7tum7.js";import"./ButtonBase-BQJxoogz.js";import"./useTimeout-LLr9iMPv.js";import"./TransitionGroupContext-BrtiFLkN.js";import"./useForkRef-BaidT4sD.js";import"./useIsFocusVisible-kYimsF7D.js";import"./useEventCallback-cNUA3zHB.js";import"./useFiles-DUNIhSV7.js";import"./VerificationSubmission-B0kBNeMy.js";import"./SynapseConstants-DQ1zBBb6.js";import"./OrientationBanner-Bji4jA3k.js";import"./index-D-sqPWvT.js";import"./spreadSx-CwcO6WA9.js";import"./react-DbIxCYhJ.js";import"./FullWidthAlert-BrTMKYXm.js";import"./Alert-PZkf-jPQ.js";import"./resolveComponentProps-XsoZTRWC.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-DXdrzfQq.js";import"./Close-CKQJvfvd.js";import"./IconButton-jrtzc4fH.js";import"./Paper-DolJMAHJ.js";import"./Stack-DNk4NVtx.js";import"./getThemeProps-Bmb8xS95.js";import"./useTheme-DC6cp_DY.js";import"./Box-CHcO_qIh.js";import"./AlertTitle-BZV0Rp7k.js";import"./Typography-Cr5v_ihi.js";import"./useTheme-BMkoP2Dd.js";import"./Grow-DIdr3kKL.js";import"./index-CzXE8kXs.js";import"./utils-crfQibeg.js";import"./ClickAwayListener-BdTMHeZW.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CRXO9dAn.js";import"./index-Cj0i8O2P.js";import"./useControlled-CuR_U5EM.js";import"./useId-DXwVjo-q.js";import"./Popper-8HZykaUC.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-CzgJJW-6.js";import"./useQuery-v9fHbYhn.js";import"./utils-C14kvl81.js";import"./Link-D--XjCYV.js";import"./Collapse-BFO6utOk.js";import"./isNil-DuX8kKMU.js";import"./_Uint8Array-trlUSQMK.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-6xxBu9nc.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Bq4Nylta.js";import"./_getTag-0tTDydmm.js";import"./tinycolor-Begke6kS.js";import"./Fade-CBo9pmeT.js";import"./Skeleton-BodMJu2e.js";import"./inputBaseClasses-HXrsNBjw.js";import"./calculateFriendlyFileSize-gcXWr6JQ.js";import"./CheckCircleTwoTone-D3yXCAfy.js";import"./InfoTwoTone-GaZs2gOk.js";import"./mutation-Dxj-2szy.js";import"./dayjs.min-CtWKk_St.js";import"./chunk-AYJ5UCUI-CtF4x_xB.js";import"./cloneDeep-ZEcnoJdE.js";import"./_initCloneObject-DmeBfQFl.js";import"./isEqual-CmS8f6Z7.js";import"./merge-R-dqjrns.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DnxC6kpb.js";import"./react-sizeme-lolvFYGF.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-wms8iM94.js";import"./Backdrop-fvamfRUP.js";import"./LinearProgress-CY90Z_qZ.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
