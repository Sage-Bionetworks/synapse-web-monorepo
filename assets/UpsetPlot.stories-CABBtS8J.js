import{U as L}from"./UpsetPlot-DG3hFE6i.js";import{f as u}from"./index-BmCntSTy.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DHVgKXln.js";import"./DefaultPropsProvider-BIfpEvA2.js";import"./createTheme-NhmqE9dQ.js";import"./index-BNUkr42D.js";import"./iframe-Ba3BTMJQ.js";import"./Button-SB8XScyN.js";import"./createSimplePaletteValueFilter-nQ38Im-Z.js";import"./useTimeout-BrN7Q3E4.js";import"./ButtonBase-LA74b3wr.js";import"./useForkRef-pDyZK79X.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DPMtitov.js";import"./useFiles-BAtCl2zW.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-XI6dYRWk.js";import"./OrientationBanner-B7q8lOlz.js";import"./index-CRCyvnZ0.js";import"./spreadSx-CwcO6WA9.js";import"./react-Be8tiLW3.js";import"./FullWidthAlert-BzIUXwFm.js";import"./Alert-D3sOM9Xh.js";import"./useSlot-BwQ6-TBw.js";import"./createSvgIcon-CFqKoRuC.js";import"./Close-DYrdwFiE.js";import"./IconButton-O8RH6c-u.js";import"./Paper-SGfBtoXB.js";import"./useTheme-C9UhfCaZ.js";import"./useTheme-BiiIEuaW.js";import"./Stack-CCWpXknc.js";import"./useThemeProps-CJIv2GwV.js";import"./getThemeProps-BReT4yLP.js";import"./extendSxProp-BpCHN6MP.js";import"./Box-DkpXgkjV.js";import"./AlertTitle-DRUFccnV.js";import"./Typography-BKcjb63t.js";import"./index-Bdrj1x6q.js";import"./ClickAwayListener-BLlYXqUz.js";import"./getReactElementRef-CkK36AdJ.js";import"./index-ClZPHG2a.js";import"./index-CI1meWOo.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C_KrjD6B.js";import"./Tooltip-BmMZYRk4.js";import"./index-DxH38UvO.js";import"./useControlled-1x59BUu5.js";import"./Popper-Dm6K9cls.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-U8UshR-7.js";import"./QueryClientProvider-B5zoqy2B.js";import"./Link-BqlhdZwN.js";import"./Collapse-DYtNuVOV.js";import"./_baseUniq-9RbHjxe5.js";import"./_Uint8Array-BISLfDEB.js";import"./isArray-0Sc2E1VG.js";import"./_getTag-CAM6QWbM.js";import"./isEqual-D_xj1UAB.js";import"./noop-DX6rZLP_.js";import"./merge-CWvb3TbJ.js";import"./_initCloneObject-D6-ehKcT.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CkpH8R1u.js";import"./inputBaseClasses-B9NzViCC.js";import"./calculateFriendlyFileSize-BpYlpajp.js";import"./CheckCircleTwoTone-B-9ZAYCH.js";import"./InfoTwoTone-Cc5V3tEz.js";import"./useMutation-B97dIDX4.js";import"./dayjs.min-C4odYbRz.js";import"./chunk-AYJ5UCUI-CV2ognkv.js";import"./cloneDeep-C1b6fvoG.js";import"./Skeleton-Btsuz_Uy.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BU81KbzJ.js";import"./Backdrop-CqC4sjx0.js";import"./LinearProgress-lNiNwJiH.js";import"./index-jMNMaGbZ.js";import"./index-Cy4JmKLm.js";import"./index-47rRJ-5g.js";import"./const-BP60AzNb.js";import"./index-C2q3aV38.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
