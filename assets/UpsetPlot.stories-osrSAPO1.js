import{U as L}from"./UpsetPlot-DNQM7-gV.js";import{f as u}from"./index-DCMe3cSq.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-VrYmAxCy.js";import"./DefaultPropsProvider-C9mJXSlS.js";import"./createTheme-BGipwrSZ.js";import"./index-CCx7LtbX.js";import"./iframe-CXkN_bjh.js";import"./Button-C2r8JxxF.js";import"./createSimplePaletteValueFilter-Cx2IpYcE.js";import"./useTimeout-gBVtjGWN.js";import"./ButtonBase-C0vKM8oB.js";import"./useForkRef-D0tAio4i.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B3mrrbKE.js";import"./useFiles-CGy5Z_At.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-B-LC1ypq.js";import"./OrientationBanner-BbBfl_YH.js";import"./index-Bjcc8c1r.js";import"./spreadSx-CwcO6WA9.js";import"./react-D8sJYU4U.js";import"./FullWidthAlert-4g268GZ6.js";import"./Alert-mSRVcikz.js";import"./useSlot-CL9Tm_iu.js";import"./createSvgIcon-Dn1e9c9m.js";import"./Close-ALHvqgO_.js";import"./IconButton-BxhC3Er-.js";import"./Paper-_hjMoFje.js";import"./useTheme-Ccnn5CDs.js";import"./useTheme-C6Hms8rT.js";import"./Stack-CNsyzmPM.js";import"./extendSxProp-DFE9sSAY.js";import"./getThemeProps-CeD3wcUs.js";import"./Box-DxttMfmA.js";import"./AlertTitle-B47zWGCp.js";import"./Typography-BeXEtM59.js";import"./index-7Nlp89ok.js";import"./ClickAwayListener-BopzRr-s.js";import"./getReactElementRef-B_W85HoF.js";import"./index-CoD41yc1.js";import"./index-Cl-WCWPX.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-f0ioJdsi.js";import"./Tooltip-BSMMEp4O.js";import"./index-BqN4AehO.js";import"./useControlled-7LyiC2MA.js";import"./Popper-BWw2OTmL.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BAMs9skl.js";import"./QueryClientProvider-CTjZIdYp.js";import"./Link-DjUqzp-g.js";import"./Collapse-x5dCqbpD.js";import"./_baseUniq-BT4GANo1.js";import"./_Uint8Array-YMIauZjz.js";import"./isArray-8WYU2MbI.js";import"./_getTag-DCb-KCZR.js";import"./isEqual-BPvSjkwI.js";import"./merge-B6kKGF8W.js";import"./_initCloneObject-CmMQaoK8.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BxMIOZQV.js";import"./inputBaseClasses-CEmDwYah.js";import"./calculateFriendlyFileSize-C_8OiygM.js";import"./CheckCircleTwoTone-CpDhgK8q.js";import"./InfoTwoTone-DcM4CCDR.js";import"./useMutation-DkuvOR_-.js";import"./dayjs.min-Did3EpXL.js";import"./chunk-AYJ5UCUI-BdecK6oV.js";import"./cloneDeep-BneUL77Z.js";import"./Skeleton-Dk9RX1Ib.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-gfj-vJw0.js";import"./Backdrop-D1t9QhjK.js";import"./LinearProgress-yL_q_WYt.js";import"./index-COZCriak.js";import"./index-B3-Y5z1s.js";import"./index-ZIDGMurX.js";import"./const-BP60AzNb.js";import"./index-DlHVcyQF.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
