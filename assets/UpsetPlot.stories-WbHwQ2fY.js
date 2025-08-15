import{U as L}from"./UpsetPlot-DZ2dbO1v.js";import{f as u}from"./index-C5jZVqEl.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CVxRC71m.js";import"./DefaultPropsProvider-JciSacAe.js";import"./createTheme-uSqP-y16.js";import"./index-BhoLOz1H.js";import"./iframe-B-L9UC8S.js";import"./Button-CS10Dyhh.js";import"./createSimplePaletteValueFilter-DK6_d1Ss.js";import"./useTimeout-C-8UHDQb.js";import"./ButtonBase-DQo73RHU.js";import"./useForkRef-DYuMtypn.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CY6nvIDK.js";import"./useFiles-KMy9YqPL.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-BgYtpW4k.js";import"./OrientationBanner-7upF-hoQ.js";import"./index-TbvRGm8v.js";import"./spreadSx-CwcO6WA9.js";import"./react-Bign9K4W.js";import"./FullWidthAlert-Djn7ZtR5.js";import"./Alert-nw7YVywL.js";import"./useSlot-CxrlCIUv.js";import"./createSvgIcon-COdRNMCK.js";import"./Close-DIM5GSvr.js";import"./IconButton-B1rYF2mA.js";import"./Paper-DFU7rbcO.js";import"./useTheme-Dzar86kc.js";import"./useTheme-IOcY49Vw.js";import"./Stack-DxavnVeo.js";import"./extendSxProp-Bky6oZpU.js";import"./getThemeProps-1OZ0r_fo.js";import"./Box-YHUhwqyo.js";import"./AlertTitle-Bu5lgKMW.js";import"./Typography-DtJqdX6z.js";import"./index-0WGr6q2T.js";import"./ClickAwayListener-CxHe6jg0.js";import"./getReactElementRef-Bwg-tl0o.js";import"./index-DkDu69A9.js";import"./index-D7gNMrVA.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BHUIcvLI.js";import"./Tooltip-BCfoCJ3N.js";import"./index-O2jcSvk0.js";import"./useControlled-DAZ0ami4.js";import"./Popper-DFM4tJbE.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-asVn40sM.js";import"./QueryClientProvider-BKyAf0tB.js";import"./Link-CW9915Wz.js";import"./Collapse-CAJ9rrC3.js";import"./_baseUniq-CWmT4RJi.js";import"./_Uint8Array-CtkICx9Q.js";import"./isArray-DuW2GSwC.js";import"./_getTag-CAf2_jcI.js";import"./isEqual-C6FBY3EC.js";import"./merge-BxJp-ABZ.js";import"./_initCloneObject-ChSHVE82.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-VmFZ3hHI.js";import"./inputBaseClasses-C3GEILXL.js";import"./calculateFriendlyFileSize-DIzU-93O.js";import"./CheckCircleTwoTone-BYuWZBzO.js";import"./InfoTwoTone-DEsyfpaf.js";import"./useMutation-SVgm8zyG.js";import"./dayjs.min-hV4VZGRn.js";import"./chunk-AYJ5UCUI-CMn21yAC.js";import"./cloneDeep-DjK-kExa.js";import"./Skeleton-DPHcOcIo.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-D6dG6iXV.js";import"./Backdrop-BoKXZAML.js";import"./LinearProgress-AL4Av5lo.js";import"./index-S035XFxW.js";import"./index-CmOhddiE.js";import"./index-BczGVk0a.js";import"./const-BP60AzNb.js";import"./index-B9EVJfFS.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
