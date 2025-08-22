import{U as L}from"./UpsetPlot-D7jtzZvU.js";import{f as u}from"./index-CI1Az_Lv.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Ok8_Kzj8.js";import"./DefaultPropsProvider-rtv4Ib_v.js";import"./createTheme-DTWOUIpQ.js";import"./index-DsA_Gkw7.js";import"./iframe-Bm14Ewc9.js";import"./Button-CltLQCSi.js";import"./createSimplePaletteValueFilter-CAKW4g11.js";import"./useTimeout-Dy4LeGqi.js";import"./ButtonBase-vDOhooW8.js";import"./useForkRef-BvsWNGhT.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DxG99U2p.js";import"./useFiles-BD5gAGkA.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-Br9Lr6B3.js";import"./OrientationBanner-Dx79sAmr.js";import"./index-BuR_GS0x.js";import"./spreadSx-CwcO6WA9.js";import"./react-D0AA63Jx.js";import"./FullWidthAlert-L08Yz2at.js";import"./Alert-DkBWMoCb.js";import"./useSlot-DairkBZp.js";import"./createSvgIcon-BIE3cFeT.js";import"./Close-CRR-qnuA.js";import"./IconButton-BzBtzoQL.js";import"./Paper-BqpXHp3z.js";import"./useTheme-mt5piGsG.js";import"./useTheme-DyXIICkH.js";import"./Stack-C3wcpX49.js";import"./extendSxProp-11qvfwdm.js";import"./getThemeProps-2bFUeBGt.js";import"./Box-CqqjGcx5.js";import"./AlertTitle-CeRki0AL.js";import"./Typography-Dr_xejBs.js";import"./index-BOti27Vs.js";import"./ClickAwayListener-BFql8qCB.js";import"./getReactElementRef-DE-vjwLI.js";import"./index-qUtY8olG.js";import"./index-BK4iOm4v.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-gGx4oN6B.js";import"./Tooltip-C62LOQJz.js";import"./index-DBjDSNQj.js";import"./useControlled-MJeu_B0C.js";import"./Popper-CfukKOsw.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BDbQ7vG_.js";import"./QueryClientProvider-CdrFc_br.js";import"./Link-uqLRFcQX.js";import"./Collapse-Cw6gzR61.js";import"./_baseUniq-C5vFC5u9.js";import"./_Uint8Array-CUaZdRI9.js";import"./isArray-DS3OusoU.js";import"./_getTag-bzK9hrrH.js";import"./isEqual-Cd3CJJ7C.js";import"./merge-CB7oDTVf.js";import"./_initCloneObject-BWQkhfEi.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Bbtrxq6e.js";import"./inputBaseClasses-DiJIT7II.js";import"./calculateFriendlyFileSize-8_X2P_SF.js";import"./CheckCircleTwoTone-BDpXhMjJ.js";import"./InfoTwoTone-C_M6KuBa.js";import"./useMutation-CRnkUn9_.js";import"./dayjs.min-CSUSOviq.js";import"./chunk-AYJ5UCUI-BJYsWGWW.js";import"./cloneDeep-BwsUYtiQ.js";import"./Skeleton-tnAZhtYI.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Dl16XCEV.js";import"./Backdrop-Dh2rKyQZ.js";import"./LinearProgress-BNXeeQOA.js";import"./index-Bdf6nOLr.js";import"./index-DHyp11BH.js";import"./index-Ct3QhvQ6.js";import"./const-BP60AzNb.js";import"./index-CKfCK92K.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
