import{U as L}from"./UpsetPlot-Cs8qwGC_.js";import{f as u}from"./index-DrT7NkFE.js";import"./jsx-runtime-BotgeFwT.js";import"./index-BmHOuB5_.js";import"./iframe-DmkXVs35.js";import"./LargeButton-BE_rl3nN.js";import"./DefaultPropsProvider-DEc5OxJn.js";import"./createTheme-Dc38ti7g.js";import"./Button-VHXrIHUx.js";import"./ButtonBase-B52ubW7h.js";import"./useTimeout-BOP_xpZf.js";import"./TransitionGroupContext-BqBTwtnY.js";import"./useForkRef-88GE3SiY.js";import"./useIsFocusVisible-TkDIjfto.js";import"./useEventCallback-CjAGHQTa.js";import"./useFiles-YWmmbZpp.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-CnrTnmux.js";import"./OrientationBanner-npM_DAfi.js";import"./index-BJgwkqhp.js";import"./spreadSx-CwcO6WA9.js";import"./react-aMpCzbk9.js";import"./FullWidthAlert-DjX9Mevx.js";import"./Alert-BLpP3v3-.js";import"./resolveComponentProps-DrsR2GgO.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-C_8Qv0R-.js";import"./Close-6gD9trmr.js";import"./IconButton-kd3QgWK8.js";import"./Paper-B7_Z-2Tf.js";import"./Stack-BFmS--Ta.js";import"./getThemeProps-n6ESmhoJ.js";import"./useTheme-DExkflWm.js";import"./Box-XMBgXLk7.js";import"./AlertTitle-BPtjEeV0.js";import"./Typography-D37JOTkb.js";import"./useTheme-CbDAVqIb.js";import"./Grow-DtJN852e.js";import"./index-DhnVKWT6.js";import"./utils-CYEEhIBi.js";import"./ClickAwayListener-ERiY_cle.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DBTVbtNi.js";import"./index-BAuhL-tv.js";import"./useControlled-BNPn1a16.js";import"./useId-v77cI_FZ.js";import"./Popper-CdSbBsOI.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-Csyq51Xr.js";import"./utils-PqR9SzMK.js";import"./Link-DvEm6E_0.js";import"./Collapse-CMoxLgNk.js";import"./isNil-D9M1sZm8.js";import"./_Uint8Array-CGacEQoi.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CWYzZSfP.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DFrETrYV.js";import"./_getTag-CopO-oHq.js";import"./tinycolor-Begke6kS.js";import"./Fade-QisYz2mh.js";import"./Skeleton-_Who98MO.js";import"./inputBaseClasses-DCAmaP-g.js";import"./calculateFriendlyFileSize-BJC9cAcp.js";import"./CheckCircleTwoTone-98ZzfJ5I.js";import"./InfoTwoTone-CB73o47l.js";import"./mutation-BijGxgKZ.js";import"./dayjs.min-Bb5G5LaH.js";import"./chunk-AYJ5UCUI-CmA7Kmoy.js";import"./cloneDeep-BTdt0L8H.js";import"./_initCloneObject-BV2YsZzp.js";import"./isEqual-CY8rJ0kx.js";import"./merge-selKAKi3.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxcEiHsR.js";import"./react-sizeme-2F3SDzr7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-YjiU6vPU.js";import"./Backdrop-BrQ6CXPb.js";import"./LinearProgress-CT7x3R9H.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
