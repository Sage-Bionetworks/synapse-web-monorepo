import{U as L}from"./UpsetPlot-B-v4AUhI.js";import{f as u}from"./index-CX9-htn5.js";import"./jsx-runtime-BoocIWMh.js";import"./index-BYsW-UGM.js";import"./iframe-CvStSd8l.js";import"./LargeButton-BLRVSoXs.js";import"./DefaultPropsProvider-D7kCmuDE.js";import"./createTheme-CD9FYzWa.js";import"./Button-DIhDyw4D.js";import"./ButtonBase-CSQbkZfT.js";import"./useTimeout-3f2ojJp1.js";import"./TransitionGroupContext-BhvU_wXg.js";import"./useForkRef-CrKJLQLu.js";import"./useIsFocusVisible-DEWRbVzD.js";import"./useEventCallback-Ck__gsyr.js";import"./useFiles-DH0hZnW0.js";import"./VerificationSubmission-DHPhgAH7.js";import"./SynapseConstants-B43XihpB.js";import"./OrientationBanner-Bn70Goou.js";import"./index-CcVtSZI1.js";import"./spreadSx-CwcO6WA9.js";import"./react-ClgVEHpJ.js";import"./FullWidthAlert-DCsaqEW2.js";import"./Alert-UkVPZ6lx.js";import"./resolveComponentProps-BFawuUKo.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-CJNY7FN1.js";import"./Close-B6CzrqbK.js";import"./IconButton-DWqxDXo3.js";import"./Paper-aoD8x6kl.js";import"./Stack-vXmPvWOy.js";import"./getThemeProps-V6bVpuH7.js";import"./useTheme-DObaY_2L.js";import"./Box-Crx_KkJs.js";import"./AlertTitle-DlWqoNQG.js";import"./Typography-B2rL68hj.js";import"./useTheme-B8HxMTzh.js";import"./Grow-BZWyJZLH.js";import"./index-1dw1k-mu.js";import"./utils-IzrHSjbr.js";import"./ClickAwayListener-J_XnNFqp.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-B9mLlwV6.js";import"./index-CUnMnMI3.js";import"./useControlled-DRov2nO8.js";import"./useId-e6r5XecO.js";import"./Popper-DRhu15Is.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-8tRvAzYp.js";import"./utils-Bt3D-rUS.js";import"./Link-ju7JKeKA.js";import"./Collapse-CEHOIevo.js";import"./isNil-DCGkC4xE.js";import"./_Uint8Array-Baslgj2I.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DLnZxQK6.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BADauply.js";import"./_getTag-Bvap34EV.js";import"./tinycolor-Begke6kS.js";import"./Fade-BPG5TcKR.js";import"./Skeleton-B-GAbu1S.js";import"./inputBaseClasses-CNrzxZep.js";import"./calculateFriendlyFileSize-Dx0b0pRy.js";import"./CheckCircleTwoTone-Def5yWF9.js";import"./InfoTwoTone-8mf67b7v.js";import"./useMutation-D-m5yZ5O.js";import"./isEqual-65PRO3at.js";import"./dayjs.min-BJZESKrl.js";import"./chunk-AYJ5UCUI-ByvWxCXR.js";import"./cloneDeep-DJYJ4ACu.js";import"./_initCloneObject-BMoAasIP.js";import"./merge-BiFf4Tsw.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DhoAZ_qc.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-D6tvXhk8.js";import"./Backdrop-Bufgy5AY.js";import"./LinearProgress-BopocXRS.js";import"./index-DxmUsdw0.js";import"./index-CAJ94Xpa.js";import"./const-Doag8klc.js";import"./index-mV2ZiuCC.js";const jt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
