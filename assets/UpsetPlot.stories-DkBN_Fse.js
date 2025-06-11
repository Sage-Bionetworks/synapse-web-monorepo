import{U as L}from"./UpsetPlot-Dd93I1_J.js";import{f as u}from"./index-BfT6lBh9.js";import"./jsx-runtime-CcC0El_l.js";import"./index-B68G30BL.js";import"./iframe-BhDmSVr3.js";import"./LargeButton-mdkW_cUp.js";import"./DefaultPropsProvider-CFtxA7R5.js";import"./createTheme-uH0JWPXs.js";import"./Button-CKTM6a-Q.js";import"./ButtonBase-uT-bVZ8Z.js";import"./useTimeout-IiKmTybS.js";import"./TransitionGroupContext-qMTvxwff.js";import"./useForkRef-CJhLMqiy.js";import"./useIsFocusVisible-CWkv9bHS.js";import"./useEventCallback-CT6ESdV1.js";import"./useFiles-DqNsHYE2.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./SynapseConstants-BdACTRHb.js";import"./OrientationBanner-wsXBDVnB.js";import"./index-BW3PCXjh.js";import"./spreadSx-CwcO6WA9.js";import"./react-BqOYHZeW.js";import"./FullWidthAlert-DyITlB3W.js";import"./Alert-JkMAwdP_.js";import"./resolveComponentProps-BlPPQYt3.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-CLp3pTmR.js";import"./Close-yJHZgjvL.js";import"./IconButton-C8Z2107h.js";import"./Paper-e82N6CUc.js";import"./Stack-CrEhumFf.js";import"./getThemeProps-CPiIGKdl.js";import"./useTheme-DmWCeBzk.js";import"./Box-Dfy5DiVK.js";import"./AlertTitle-CARXOnCR.js";import"./Typography-CexizsGO.js";import"./useTheme-D2wHp5z5.js";import"./Grow-Cc3QFLpJ.js";import"./index-DBrU7HLq.js";import"./index-9l0LHN3Q.js";import"./utils-DrB9Djcb.js";import"./ClickAwayListener-dr7M7gUP.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-D3zE2KP_.js";import"./index-CGBjJezI.js";import"./useControlled-Cxwn0Bse.js";import"./useId-D1bj6Ezy.js";import"./Popper-C3TYFz4O.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-etW1RJAA.js";import"./utils-CkMob-h2.js";import"./Link-BsMwYZcC.js";import"./Collapse-Bvlc19JG.js";import"./isNil-DMGNENX_.js";import"./_Uint8Array-Ce0zAvtV.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CCb2uYv7.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Bv38uHXe.js";import"./_getTag-DL_rFxlP.js";import"./tinycolor-Begke6kS.js";import"./Fade-CjdL0uLB.js";import"./Skeleton-DIbiOgAZ.js";import"./inputBaseClasses-DQW81ah8.js";import"./calculateFriendlyFileSize-eeYADzxW.js";import"./CheckCircleTwoTone-BxRyKYVR.js";import"./InfoTwoTone-DOMYMkSD.js";import"./useMutation-yvVj1gsv.js";import"./isEqual-zfkFeRpC.js";import"./dayjs.min-CbFjNGZU.js";import"./chunk-AYJ5UCUI-BMpn7eIV.js";import"./cloneDeep-B8r50GAX.js";import"./_initCloneObject-B86KfcnX.js";import"./merge-DWlXz-uv.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DMQpCQSh.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Dy3_-dyL.js";import"./Backdrop-Kzr1MO5z.js";import"./LinearProgress-CJ1hBIOd.js";import"./index-CfK0B-mN.js";import"./index-BRG1S6-W.js";import"./index-CDyekxhp.js";import"./const-Doag8klc.js";import"./index-qD_YVCiL.js";const Xt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Zt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Zt as __namedExportsOrder,Xt as default};
