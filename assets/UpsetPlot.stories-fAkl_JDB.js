import{U as L}from"./UpsetPlot-BucmpTMs.js";import{f as u}from"./index-DP8uHCJU.js";import"./jsx-runtime-BKf5RQqp.js";import"./index-B9M1VMdY.js";import"./iframe-DrxrBbCN.js";import"./LargeButton-v5yynizN.js";import"./DefaultPropsProvider-n162cE-R.js";import"./createTheme-DvTVIqjb.js";import"./Button-Cb0Y6AbC.js";import"./ButtonBase-CBwCYDGT.js";import"./useTimeout-zL07Ezm-.js";import"./TransitionGroupContext-DyKzf55a.js";import"./useForkRef-DIg_dHQL.js";import"./useIsFocusVisible-CRgE5DAe.js";import"./useEventCallback-Ct97vZo3.js";import"./useFiles-S3rZyFqo.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-DOl4aYU7.js";import"./OrientationBanner-Cgb7NpTp.js";import"./index-CvaCOTZN.js";import"./spreadSx-CwcO6WA9.js";import"./react-DH013oxs.js";import"./FullWidthAlert-Dd_na1Es.js";import"./Alert-Cgxhkh7G.js";import"./resolveComponentProps-DPQntKSC.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-hbT_i5o6.js";import"./Close-BfHkgXih.js";import"./IconButton-CUjwcRMT.js";import"./Paper-DiRfE40y.js";import"./Stack-D2Q57en8.js";import"./getThemeProps-CnIOYt9Y.js";import"./useTheme-Bekjdflv.js";import"./Box-D7zKVt5d.js";import"./AlertTitle-1sffTsZH.js";import"./Typography-DzBHpQw1.js";import"./useTheme-CEZhMqZD.js";import"./Grow-BaIE4F4U.js";import"./index-5WQ-QQb9.js";import"./utils-Bc1CwYEB.js";import"./ClickAwayListener-CxOU0Mam.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BEF1_Vht.js";import"./index-P0g_OErs.js";import"./useControlled-Cy6R5uHn.js";import"./useId-DqRnOE6C.js";import"./Popper-BbC7HGmV.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-Cxycb3jH.js";import"./utils-DtsR_yTk.js";import"./Link-Cu43YTgh.js";import"./Collapse-DVsMgavj.js";import"./isNil-ByvPwQOL.js";import"./_Uint8Array-C3OS79Gb.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-loWZaajr.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-gfmG73DD.js";import"./_getTag-Bc2H9Xcc.js";import"./tinycolor-Begke6kS.js";import"./Fade-BJV6ivWB.js";import"./Skeleton-DpQMO-g4.js";import"./inputBaseClasses-D3AwDbQD.js";import"./calculateFriendlyFileSize-C7irlqqb.js";import"./CheckCircleTwoTone-BX_oHHcp.js";import"./InfoTwoTone-DlYvTuQN.js";import"./mutation-CTQh6bQy.js";import"./dayjs.min-CodsgMmV.js";import"./chunk-AYJ5UCUI-BC-6-RBu.js";import"./cloneDeep-DLtL0oYk.js";import"./_initCloneObject-BGcQbDnl.js";import"./isEqual-p7X2E0s9.js";import"./merge-BNCYZUK1.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxcEiHsR.js";import"./react-sizeme-DVZYz7pp.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CTk1WslI.js";import"./Backdrop-CXPR0K03.js";import"./LinearProgress-Cd5UkKse.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
