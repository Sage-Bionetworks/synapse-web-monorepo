import{U as L}from"./UpsetPlot-Dpr1LQpv.js";import{f as u}from"./index-CgjcRqby.js";import"./jsx-runtime-MnZ2317C.js";import"./index-DBUZyXtq.js";import"./iframe-Agwozm59.js";import"./LargeButton-CMqgEfCy.js";import"./DefaultPropsProvider-FBbxzESS.js";import"./createTheme-C-idqo33.js";import"./Button-BgtgpHEH.js";import"./createSimplePaletteValueFilter-Bdbxw0JP.js";import"./useTimeout-D9WeMCjd.js";import"./ButtonBase-C1DcD2E0.js";import"./useForkRef-CjnZLg2p.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-n314Qg5c.js";import"./useFiles-DnUO1Api.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-V1sQpU_s.js";import"./OrientationBanner-D2fotMsN.js";import"./index-BoeVxqoJ.js";import"./spreadSx-CwcO6WA9.js";import"./react-BM--CzU7.js";import"./FullWidthAlert-aDseP76t.js";import"./Alert-7eVifPuv.js";import"./useSlot-C1iX9q8K.js";import"./createSvgIcon-DGFsbDpa.js";import"./Close-DlumTVsj.js";import"./IconButton-D83ce9NZ.js";import"./Paper-CR0oZZpP.js";import"./useTheme-BihevxPC.js";import"./useTheme-UmraWpqS.js";import"./Stack-FHc61ter.js";import"./extendSxProp-DiQYnhrh.js";import"./getThemeProps-CJ_YGnbo.js";import"./Box-BH8rgvLb.js";import"./AlertTitle-CpjpvVjh.js";import"./Typography-By-qWDlQ.js";import"./index-L8mzx5Bg.js";import"./ClickAwayListener-CTsU5cTY.js";import"./getReactElementRef-6_LsB2Ll.js";import"./index-BMDeBweZ.js";import"./index-juxSWwrL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CZQ-XoRz.js";import"./Tooltip-BHZ2B9D4.js";import"./index-CmYnUnfx.js";import"./useControlled-B8KaoKId.js";import"./Popper-DPSnelcp.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-CiIdiLfh.js";import"./utils-gUl3EyCu.js";import"./Link-DIPaPrKj.js";import"./Collapse-BUZBhcx6.js";import"./_baseUniq-ByR3GzWR.js";import"./_Uint8Array-DnwaM0yi.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BWY1lDtv.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BQIn1FIZ.js";import"./isEqual-DXp2A0Mg.js";import"./merge-DKxr4ITZ.js";import"./_initCloneObject-oQ4HOIU2.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-MdAgGiLr.js";import"./inputBaseClasses-QOARJcz1.js";import"./calculateFriendlyFileSize-ncijnfII.js";import"./CheckCircleTwoTone-CqDyMHgN.js";import"./InfoTwoTone-C68cHQWw.js";import"./useMutation-DEtxxh-c.js";import"./dayjs.min-CFlyIOCv.js";import"./chunk-AYJ5UCUI-CH_1fBPV.js";import"./cloneDeep-BErKjqL_.js";import"./Skeleton-ZUE2YBUO.js";import"./SqlFunctions-DPgti-mT.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-3Q-5QMkp.js";import"./Backdrop-CDykUBCO.js";import"./LinearProgress-psX_-ZR0.js";import"./index-CFAcqn6W.js";import"./index-Ch_36dDz.js";import"./index-C74PMm1e.js";import"./const-Doag8klc.js";import"./index-PgD3lR90.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
