import{U as L}from"./UpsetPlot-AeK_hyg-.js";import{f as u}from"./index-DsfPKnMC.js";import"./jsx-runtime-C5ysBaSF.js";import"./index-nsQxvz3s.js";import"./iframe-Janl4OHm.js";import"./LargeButton-CInW3KNo.js";import"./DefaultPropsProvider-AOp6TNyl.js";import"./createTheme-ByXOpdJz.js";import"./Button-2ZkIkkeV.js";import"./ButtonBase-D09UPZOY.js";import"./useTimeout-iGOOtj66.js";import"./TransitionGroupContext-BRGEgvEM.js";import"./useForkRef-Ceiq6s0j.js";import"./useIsFocusVisible-B_yrjrHI.js";import"./useEventCallback-BxOaVHWE.js";import"./useFiles-Dhq64LD3.js";import"./VerificationSubmission-DHPhgAH7.js";import"./SynapseConstants-nC0cy9NR.js";import"./OrientationBanner-BaOJTw1c.js";import"./index-Euv0kKX6.js";import"./spreadSx-CwcO6WA9.js";import"./react--bFTsUCT.js";import"./FullWidthAlert-DlFKq-DC.js";import"./Alert-RC7B8x0K.js";import"./resolveComponentProps-CfpND56K.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-DeXJlgu_.js";import"./Close-CT9yiP13.js";import"./IconButton-BtJv4fcx.js";import"./Paper-BkFXPQ0I.js";import"./Stack-Bu6KB5fc.js";import"./getThemeProps-BR7frNLW.js";import"./useTheme-dh9DXsym.js";import"./Box-Dh_kMIqf.js";import"./AlertTitle-CTWcSjN8.js";import"./Typography-2ZaHckIm.js";import"./useTheme-faklcodD.js";import"./Grow-DQCtPGN8.js";import"./index-BNgdfWIu.js";import"./utils-CCZi6kcq.js";import"./ClickAwayListener-DyUGUeMv.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-rXWE94cF.js";import"./index-BEcPdF-J.js";import"./useControlled-B8KPlW55.js";import"./useId-C4BxQuWA.js";import"./Popper-i9E87YUZ.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-B-QxEfwh.js";import"./utils-NjyKKwdB.js";import"./Link-DTRRVZ6z.js";import"./Collapse-haV8wGjw.js";import"./isNil-DWkoTF96.js";import"./_Uint8Array-CJ-px7Q4.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DIW4b2lw.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-CkMKoezu.js";import"./_getTag-BK3frtm6.js";import"./tinycolor-Begke6kS.js";import"./Fade-zN03jnnY.js";import"./Skeleton-CCW5pzar.js";import"./inputBaseClasses-DEtapqOK.js";import"./calculateFriendlyFileSize-C134mPnt.js";import"./CheckCircleTwoTone-DdehzE-y.js";import"./InfoTwoTone-DyKFxUVE.js";import"./useMutation-KCq28Paw.js";import"./isEqual-tsjY0vzA.js";import"./dayjs.min-CO0gnhwg.js";import"./chunk-AYJ5UCUI-DnzAy6h8.js";import"./cloneDeep-CKZCjTCX.js";import"./_initCloneObject-Bx7Kkndt.js";import"./merge-DPAljtzM.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DhoAZ_qc.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CsSkjlck.js";import"./Backdrop-BjEKCNaq.js";import"./LinearProgress-B7mtc77U.js";import"./index-BmfEqX58.js";import"./index-DSpCvlxY.js";import"./const-Doag8klc.js";import"./index-Dru30KK0.js";const jt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
