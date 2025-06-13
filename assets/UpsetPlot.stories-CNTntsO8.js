import{U as L}from"./UpsetPlot-vo-aHeBf.js";import{f as u}from"./index-C4uoEY6p.js";import"./jsx-runtime--VDmQxho.js";import"./index-CuDCD8Cd.js";import"./iframe-BqzTMP-6.js";import"./LargeButton-BgFm99Cb.js";import"./DefaultPropsProvider-B_Sofjtv.js";import"./createTheme-BjDkboqX.js";import"./Button-D4VXSl38.js";import"./createSimplePaletteValueFilter-esMbi9-T.js";import"./useTimeout-DATmwXFk.js";import"./ButtonBase-AwvyoIOV.js";import"./useForkRef-CsgOK780.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DqVQN-ep.js";import"./useFiles-N2sWxoXQ.js";import"./VerificationSubmission-DKyendrM.js";import"./SynapseConstants-wMEBUGx4.js";import"./OrientationBanner-BCQbNnza.js";import"./index-DmHdRDtR.js";import"./spreadSx-CwcO6WA9.js";import"./react-dbF9bnqN.js";import"./FullWidthAlert-1M5hpNih.js";import"./Alert-p-r8DxH1.js";import"./useSlot-DS3iUyMI.js";import"./createSvgIcon-DxUNcRk1.js";import"./Close-OfKhpn5t.js";import"./IconButton-CMsWyADJ.js";import"./Paper-DbEaZNKI.js";import"./useTheme-D1oNS_LI.js";import"./useTheme-D6w9qOOY.js";import"./Stack-I2caYhOY.js";import"./extendSxProp-B48CrRxU.js";import"./getThemeProps-B_gV8fQl.js";import"./Box-BXO-o3lc.js";import"./AlertTitle-B7-3cLF-.js";import"./Typography-DxMOu3Nh.js";import"./index-DGodYfXt.js";import"./ClickAwayListener-Deska0ZP.js";import"./getReactElementRef-QT_YGi8b.js";import"./index--qVxq6-z.js";import"./index-Dgn98faf.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DGRSNWMN.js";import"./Tooltip-DrQgQo01.js";import"./index-Dh59YMo3.js";import"./useControlled-BhFUbj8p.js";import"./Popper-CTKKY7d_.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-q3zwWk44.js";import"./utils-A-KMXcap.js";import"./Link-DZQNNy4T.js";import"./Collapse-BDOLvwNe.js";import"./isNil-DkKNgmMM.js";import"./_Uint8Array-x6e4vkBj.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-D8j_XhY_.js";import"./isArray-Dxzbedgu.js";import"./isEqual-C90r3yLJ.js";import"./_getTag-BuRU9Bgy.js";import"./tinycolor-Begke6kS.js";import"./Fade-DDna5lT4.js";import"./inputBaseClasses-BS6ehBVH.js";import"./calculateFriendlyFileSize-DLpqeOM4.js";import"./CheckCircleTwoTone-OACbepET.js";import"./InfoTwoTone-89W568jB.js";import"./useMutation-Dngnwen0.js";import"./dayjs.min-BncQY9dT.js";import"./chunk-AYJ5UCUI-DEJIN_fb.js";import"./cloneDeep-nOAbP7jl.js";import"./_initCloneObject-C2EI-6Xb.js";import"./Skeleton-BVCwjyC9.js";import"./merge-BzBrfKpd.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-D5GxPzI3.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DgoR8RCo.js";import"./Backdrop-DgFO6OAd.js";import"./LinearProgress-sFvI-arL.js";import"./index-B_N7JE1u.js";import"./index-DHTyDBS2.js";import"./index-Zeu66H_J.js";import"./const-Doag8klc.js";import"./index-DCpVLSjo.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Xt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Xt as __namedExportsOrder,Kt as default};
