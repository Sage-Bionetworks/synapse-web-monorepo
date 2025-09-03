import{U as L}from"./UpsetPlot-Nwy0OVDf.js";import{f as u}from"./index-DpDyImr8.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CQukgxcp.js";import"./DefaultPropsProvider-DQ6R5GBJ.js";import"./createTheme-CGDCJSPZ.js";import"./index-CQIGBc1V.js";import"./iframe-Btd2HHqG.js";import"./Button-D3b_nwUa.js";import"./createSimplePaletteValueFilter-B7mx9_xn.js";import"./useTimeout-yWZRAzgc.js";import"./ButtonBase-FedZLqF7.js";import"./useForkRef-BomXF6Jf.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B6Ebxn-f.js";import"./useFiles-BPLHvMvR.js";import"./VerificationSubmission-CDh9xETu.js";import"./SynapseConstants-DrCh_kdL.js";import"./OrientationBanner-VKXiGHYb.js";import"./index-B24iHAqT.js";import"./spreadSx-CwcO6WA9.js";import"./react-DAda01Jv.js";import"./FullWidthAlert-CSg7um0z.js";import"./Alert-CeS2DVz6.js";import"./useSlot-CY2J-DXD.js";import"./createSvgIcon-BYl9tErA.js";import"./Close-BG9NJg6x.js";import"./IconButton-a7sHWGoK.js";import"./Paper-DZgcFg1z.js";import"./useTheme-CqlqvvjI.js";import"./useTheme-BOBbHa5R.js";import"./Stack-CeqpGUjS.js";import"./extendSxProp-4nhTMu5I.js";import"./getThemeProps-DElxbgAZ.js";import"./Box-DTwKNAeW.js";import"./AlertTitle-oYeDsIVg.js";import"./Typography-mrNgtu5t.js";import"./index-DVUrkwNx.js";import"./ClickAwayListener-WijnqYS9.js";import"./getReactElementRef-HUgpiq-4.js";import"./index-C7YFv4kW.js";import"./index-BmyLYUcK.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Co_9QBfH.js";import"./Tooltip-KM72jp_q.js";import"./index-CMbZ97T8.js";import"./useControlled-D1bjab3Z.js";import"./Popper-CWkQLibq.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-_BY2npJD.js";import"./useQuery-D2poep1E.js";import"./QueryClientProvider-Du5Ep3LS.js";import"./Link-BMgGJGqF.js";import"./Collapse-DJ86565F.js";import"./_baseUniq-BE_JtR4S.js";import"./_Uint8Array-O6GMs0Ty.js";import"./isArray-Ct2qTZu_.js";import"./_getTag-Cj0yh0pL.js";import"./isEqual-ukfK57kz.js";import"./merge-Cw-pBLvU.js";import"./_initCloneObject-peehwC1z.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-URV8wb9u.js";import"./inputBaseClasses-Ds1n6_Ea.js";import"./calculateFriendlyFileSize-GNYX37MO.js";import"./CheckCircleTwoTone-8PYVvi3U.js";import"./InfoTwoTone-DEVw7o0q.js";import"./useMutation-C50fm1Gv.js";import"./dayjs.min-B6eIZka3.js";import"./chunk-AYJ5UCUI-DaetwfwG.js";import"./cloneDeep-BnzNgpeO.js";import"./Skeleton-BWhj9oCM.js";import"./SqlFunctions-BjspnTaW.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-uwAqIew4.js";import"./Backdrop-BFsynrD9.js";import"./LinearProgress-D8csksh2.js";import"./index-B11wVvjl.js";import"./index-DrRPfXaR.js";import"./index-kxFuMYgU.js";import"./const-BP60AzNb.js";import"./index-D7MO96jh.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
