import{U as L}from"./UpsetPlot-CHsNO536.js";import{f as u}from"./index-DpwCX-GD.js";import"./jsx-runtime-N6ye8Cll.js";import"./index-Lo42Gh79.js";import"./iframe-BeLSOqK0.js";import"./LargeButton-uY6Yp5VP.js";import"./DefaultPropsProvider-CNnQMBV4.js";import"./createTheme-zUoByXU0.js";import"./Button-Bdir9JO_.js";import"./ButtonBase-lRXedyLt.js";import"./useTimeout-Fspxp6pC.js";import"./TransitionGroupContext-GoISSeOA.js";import"./useForkRef-BG5ZtOCT.js";import"./useIsFocusVisible-DsSc-LK2.js";import"./useEventCallback-Co6pa197.js";import"./useFiles-wPL3noqa.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-DVzzGxGK.js";import"./OrientationBanner-D3UsPxXx.js";import"./index-Bf7y0XZD.js";import"./spreadSx-CwcO6WA9.js";import"./react-D7WMFHc_.js";import"./FullWidthAlert-pApCjOvL.js";import"./Alert-DnAYteIA.js";import"./resolveComponentProps-BJ8uhEQv.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-B7Fm4obF.js";import"./Close-DGWi-3t4.js";import"./IconButton-CPNT-u2D.js";import"./Paper-13cV-0Of.js";import"./Stack-BeytxLtO.js";import"./getThemeProps-Bv2-5X3N.js";import"./useTheme-COBO9Fob.js";import"./Box-atqS-zJr.js";import"./AlertTitle-BbIYRcBk.js";import"./Typography-tG7EFsUv.js";import"./useTheme-CFiH-FLy.js";import"./Grow-C1bIe5cL.js";import"./index-cN61rZYG.js";import"./utils-DiIkWdd2.js";import"./ClickAwayListener-BuLQRAHV.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-lA2laYzz.js";import"./index-DYutZETn.js";import"./useControlled-DZUuzM-I.js";import"./useId-G0RrJkXu.js";import"./Popper-ouRmnn8F.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-D1RrcX2T.js";import"./utils-DSX88CCK.js";import"./Link-029SLwqk.js";import"./Collapse-thXyZuvh.js";import"./isNil-DAzj2u8t.js";import"./_Uint8Array-BrkH6h_h.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Bl8WEi7v.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DIkf-jLy.js";import"./_getTag-dgEDOUa8.js";import"./tinycolor-Begke6kS.js";import"./Fade-B4sfEdAe.js";import"./Skeleton-zk9T0ahk.js";import"./inputBaseClasses-BQUdFaBR.js";import"./calculateFriendlyFileSize-DJRIw0Wx.js";import"./CheckCircleTwoTone-Dm-a3uAR.js";import"./InfoTwoTone-P5w7WfcN.js";import"./mutation-DrD0YQPG.js";import"./dayjs.min-CvwiUaiC.js";import"./chunk-AYJ5UCUI-Dc_jcqd8.js";import"./cloneDeep-EMhmsPM9.js";import"./_initCloneObject-SveHNOq9.js";import"./isEqual-7SDsHlZH.js";import"./merge-DPBYIowj.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxcEiHsR.js";import"./react-sizeme-DJaQBK8T.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-B3Mp9ReT.js";import"./Backdrop-XUoU_VHY.js";import"./LinearProgress-JwNniy1S.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
