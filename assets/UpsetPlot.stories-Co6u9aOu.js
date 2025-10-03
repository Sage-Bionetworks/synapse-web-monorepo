import{U as L}from"./UpsetPlot-DNhcGejW.js";import{f as u}from"./index-DAefD5m2.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CGnUA8l7.js";import"./DefaultPropsProvider-CQ9vr5Fg.js";import"./createTheme-CLEJyU4o.js";import"./index-BvwUSpoE.js";import"./iframe-CSh-yyb9.js";import"./Button-BPLc_V13.js";import"./createSimplePaletteValueFilter-BgsLGErn.js";import"./useTimeout-D2Typ0WN.js";import"./ButtonBase-CAx0EV6B.js";import"./useForkRef-C4hZLQ5F.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-13Ka8rlw.js";import"./useFiles-C5IkgHKR.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BZ1xM3T_.js";import"./OrientationBanner-CaftPmJ0.js";import"./index-Dc7oXtx5.js";import"./spreadSx-CwcO6WA9.js";import"./react-CnOFtkUB.js";import"./FullWidthAlert-rH7PBXfB.js";import"./Alert-BNsJ0XmI.js";import"./useSlot-CPjqoygj.js";import"./createSvgIcon-cTCJaS7a.js";import"./Close-B26ASiW2.js";import"./IconButton-C1az1_o5.js";import"./Paper-CgmbLxaC.js";import"./useTheme-DPLPxQnc.js";import"./useTheme-z89Ynh4-.js";import"./Stack-x99x_t8V.js";import"./useThemeProps-DJ1xyvk8.js";import"./getThemeProps-HpT_6znR.js";import"./extendSxProp-BJJBLbQS.js";import"./Box-Dehh3oxZ.js";import"./AlertTitle-IP3qXvli.js";import"./Typography-BE4rHoNc.js";import"./index-IXTkT_FC.js";import"./ClickAwayListener-H_84-Aw-.js";import"./getReactElementRef-F8_OyX7G.js";import"./index-DMH_OaqC.js";import"./index-Cd_E_qr9.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D4OCuCHp.js";import"./Tooltip-DyZrSW_o.js";import"./index-B01-020F.js";import"./useControlled-BgGRQ0g4.js";import"./Popper-BVenD2n_.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-CLTeTbBo.js";import"./QueryClientProvider--YwERgDS.js";import"./Link-DlDLrxWt.js";import"./Collapse-CD-W84BO.js";import"./_baseUniq-DbXnkPVl.js";import"./_Uint8Array-CADqMcwt.js";import"./isArray-D8ZdJY-6.js";import"./_getTag-CirUuiqi.js";import"./isEqual-DlYHZiLm.js";import"./noop-DX6rZLP_.js";import"./merge-D-Dam4qi.js";import"./_initCloneObject-CJz6qKry.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cw-PXPOF.js";import"./inputBaseClasses-DPwHkifs.js";import"./calculateFriendlyFileSize-BfZPBZKW.js";import"./CheckCircleTwoTone-C44u5emq.js";import"./InfoTwoTone-mT_LStKZ.js";import"./useMutation-BQl0KsC5.js";import"./dayjs.min-DxypZ_oT.js";import"./chunk-AYJ5UCUI-3iV-Oige.js";import"./cloneDeep-GqePjE_a.js";import"./Skeleton-CKT5zskH.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BsdGxopv.js";import"./Backdrop-DMXZRFMX.js";import"./LinearProgress-C07erWio.js";import"./index-Ci643yui.js";import"./index-DZtb1F0H.js";import"./index-BGyt2akC.js";import"./const-BP60AzNb.js";import"./index-DqqmJQ2G.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
