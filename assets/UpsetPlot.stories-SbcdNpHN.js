import{U as L}from"./UpsetPlot-Db4CtH39.js";import{f as u}from"./index-BAOBHaSV.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CZdDcrtR.js";import"./DefaultPropsProvider-DbEdqidE.js";import"./createTheme-CIrJTDOf.js";import"./index-BljgPFTo.js";import"./iframe-CyBU6Q7V.js";import"./Button-BZXN9KrI.js";import"./createSimplePaletteValueFilter-BwVtGIPT.js";import"./useTimeout-Bpy0NDCv.js";import"./ButtonBase-Cd_tqh-g.js";import"./useForkRef-BPo1GnhT.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C5zAkQVG.js";import"./useFiles-Be6tFy5F.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BEZwovbV.js";import"./OrientationBanner-CtoXztzg.js";import"./index-0unR9H4H.js";import"./spreadSx-CwcO6WA9.js";import"./react-CVn33jqE.js";import"./FullWidthAlert-BZgBYNyl.js";import"./Alert-DJPQ4QIM.js";import"./useSlot-DVd3PzDD.js";import"./createSvgIcon-0kRQ-kbK.js";import"./Close-DaZgjw_6.js";import"./IconButton-BXR2LYXb.js";import"./Paper-Cyv4dyLK.js";import"./useTheme-vHPl7Z18.js";import"./useTheme-C-hh5JcE.js";import"./Stack-Bsu_lXkI.js";import"./useThemeProps-CpST4J4d.js";import"./getThemeProps-gduYeenR.js";import"./extendSxProp-BUchhns_.js";import"./Box-B7np8nCS.js";import"./AlertTitle-DS7VlmPb.js";import"./Typography-CTlCFPS1.js";import"./index-DmDe8b2A.js";import"./ClickAwayListener-oKANEk0z.js";import"./getReactElementRef-BIbEb3Zr.js";import"./index-CLXOAuby.js";import"./index-CTWVO3q3.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BnuhUscm.js";import"./Tooltip-Cr3zvRH6.js";import"./index-D921uLT9.js";import"./useControlled-B5_NtMt5.js";import"./Popper-CrTqWDfV.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-B-0wee67.js";import"./QueryClientProvider-DNTbqL71.js";import"./Link-BkUBKMhX.js";import"./Collapse-BYc6Wv8_.js";import"./_baseUniq-BCgHUW7P.js";import"./_Uint8Array-6RqZOC7P.js";import"./isArray-DqQflkTV.js";import"./_getTag-OZNTQHEg.js";import"./isEqual-BKU_n09T.js";import"./noop-DX6rZLP_.js";import"./merge-Dru2-Hnn.js";import"./_initCloneObject-Bom0r3NW.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cj0EUrvW.js";import"./inputBaseClasses-DCwWV1lh.js";import"./calculateFriendlyFileSize-CzujXqM3.js";import"./CheckCircleTwoTone-FMrAv7pD.js";import"./InfoTwoTone-MGxkGzni.js";import"./useMutation-BdNABu1Z.js";import"./dayjs.min-CqZWhcNT.js";import"./chunk-AYJ5UCUI-D_3CYfsv.js";import"./cloneDeep-XPWNqf30.js";import"./Skeleton-Dw7_uGLe.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BWDRsjiw.js";import"./Backdrop-BNrZWVHK.js";import"./LinearProgress-DaTjsL41.js";import"./index-BjKXB_Qm.js";import"./index-CXjof23Y.js";import"./index-o5KBtPuy.js";import"./const-BP60AzNb.js";import"./index-CR7ly3Cd.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
