import{U as L}from"./UpsetPlot-DHNUvhA4.js";import{f as u}from"./index-2kyBmyZn.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DyBhllFu.js";import"./DefaultPropsProvider-4-Nbo_PQ.js";import"./createTheme-joOF16y3.js";import"./index-CJWOyIck.js";import"./iframe-DoTUlnRU.js";import"./Button-CxLdoTH8.js";import"./createSimplePaletteValueFilter-CriwX3Nq.js";import"./useTimeout-DR3YPM4S.js";import"./ButtonBase-Dp-i_ss-.js";import"./useForkRef-BwBAI-XY.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-bHi32ma4.js";import"./useFiles-DOr2eiI0.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-SICaIPpp.js";import"./OrientationBanner-YlGcQ8oA.js";import"./index-CeSfpRkX.js";import"./spreadSx-CwcO6WA9.js";import"./react-CZondhIN.js";import"./FullWidthAlert-CTCf0_0y.js";import"./Alert-K5yXR8E3.js";import"./useSlot-pK9Rx4f9.js";import"./createSvgIcon-8zBnI0wH.js";import"./Close-o_-k88i3.js";import"./IconButton-CMDHKdOn.js";import"./Paper-CA1sfC9c.js";import"./useTheme-CerIELR_.js";import"./useTheme-8KgRob2p.js";import"./Stack-DsuCYzOE.js";import"./extendSxProp-CK0LILTo.js";import"./getThemeProps-ZNj3hCTU.js";import"./Box-C-mmB_q5.js";import"./AlertTitle-DsIfsLeR.js";import"./Typography-B0Q9QmtT.js";import"./index-9RqmjHB0.js";import"./ClickAwayListener-CkaBAZBz.js";import"./getReactElementRef-AtSduVbi.js";import"./index-RFI4-CTC.js";import"./index-CLQ8OUAf.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C2WkGHMq.js";import"./Tooltip-DJFZrf82.js";import"./index-B_VJ5W3d.js";import"./useControlled-DXqZCC6Q.js";import"./Popper-CgY2t-Jy.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-CJ6zXZoE.js";import"./QueryClientProvider-oDqE1HUl.js";import"./Link-B7EB4ta7.js";import"./Collapse-Dv1ewoJy.js";import"./_baseUniq-BubK3-dV.js";import"./_Uint8Array-Ce48In0X.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-G8zwPoD_.js";import"./isArray-Dxzbedgu.js";import"./_getTag-n-EU0TN4.js";import"./isEqual-DRemrjEy.js";import"./merge-DQ6m7iup.js";import"./_initCloneObject-BAIB2BRc.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-kTrZyV86.js";import"./inputBaseClasses-BR-v_UEh.js";import"./calculateFriendlyFileSize-B8OS6tmQ.js";import"./CheckCircleTwoTone-Cqsu8gS4.js";import"./InfoTwoTone-CLmpUWXV.js";import"./useMutation-CRVn1-QC.js";import"./dayjs.min-BZLa1BwX.js";import"./chunk-AYJ5UCUI-6pCYvLhm.js";import"./cloneDeep-BIkPzsIQ.js";import"./Skeleton-uaiLWYQK.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-B-8xxWLv.js";import"./Backdrop-DSrgvIlF.js";import"./LinearProgress-DZ6J2GCh.js";import"./index-cHc9MFPO.js";import"./index-Dy-mLwmx.js";import"./index-CplfLTTU.js";import"./const-BP60AzNb.js";import"./index-BSijvwGp.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
