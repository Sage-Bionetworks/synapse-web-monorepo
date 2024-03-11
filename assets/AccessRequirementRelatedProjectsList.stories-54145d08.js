import{A as j}from"./AccessRequirementRelatedProjectsList-2dc13786.js";import{M as P}from"./getEndpoint-ac94413e.js";import{l as I}from"./index-6f91a733.js";import{c as g}from"./ApplicationSessionManager-7024b1a7.js";import"./jsx-runtime-9dc53467.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./OrientationBanner-450e6652.js";import"./FullWidthAlert-149d754f.js";import"./Alert-fd45ce28.js";import"./createTheme-d609db80.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./styled-bb145c31.js";import"./createSvgIcon-b657d91b.js";import"./Paper-35c12a01.js";import"./IconButton-9b53499e.js";import"./ButtonBase-0719e676.js";import"./emotion-react.browser.esm-ca9fe929.js";import"./TransitionGroupContext-e6fd87c7.js";import"./useForkRef-8feb2ebf.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./useIsFocusVisible-18cd238e.js";import"./Stack-9fb6382b.js";import"./extendSxProp-7fb4e09f.js";import"./Box-f6adec47.js";import"./AlertTitle-9139c2ff.js";import"./Typography-f217f607.js";import"./useTheme-a28bb397.js";import"./Grow-2f9de6a4.js";import"./isHostComponent-fa76b8d9.js";import"./index-d3ea75b5.js";import"./utils-19a63403.js";import"./ClickAwayListener-3b20c94f.js";import"./Tooltip-248f4fe4.js";import"./Button-065a21d4.js";import"./useAccessRequirements-e14688ad.js";import"./useQueries-8fe42109.js";import"./useMutation-7f675b66.js";import"./useInfiniteQuery-80b98059.js";import"./useMediaQuery-ed422b8f.js";import"./sortBy-3287642e.js";import"./_baseFlatten-7b590484.js";import"./_getAllKeys-af1012ce.js";import"./isArray-5e3f9107.js";import"./_Uint8Array-df44b265.js";import"./_Map-92f6da1c.js";import"./_baseTimes-8715be3e.js";import"./_getTag-b87d0382.js";import"./toString-cc90cb98.js";import"./isSymbol-7c514724.js";import"./_baseIteratee-3e70e377.js";import"./_getMatchData-2c772eab.js";import"./_cacheHas-c48b7592.js";import"./_setToArray-3d6ec6fd.js";import"./identity-46f208ab.js";import"./_baseFor-d254fa1e.js";import"./_baseRest-c9d7baca.js";import"./_overRest-2155f832.js";import"./_isIterateeCall-9cddbe78.js";import"./QueryFilterUtils-26ac5fac.js";import"./SynapseConstants-0078d114.js";import"./isNumber-e963e862.js";import"./EntityLink-e90cf6f4.js";import"./useEntity-4a46c64c.js";import"./isEqualWith-63226cfe.js";import"./pick-828da15c.js";import"./_baseIndexOf-c808ca38.js";import"./toInteger-5bb233f4.js";import"./_baseClone-d4db307e.js";import"./_initCloneObject-c3239c20.js";import"./_baseUnset-96ca7447.js";import"./_baseSlice-cf92e063.js";import"./isPlainObject-e233fb76.js";import"./InfiniteQueryUtils-54ae7e6b.js";import"./EntityIcon-53ca2368.js";import"./index-4a1b1a67.js";import"./IconSvg-dc6fa014.js";import"./ErrorOutlined-5d3a6347.js";import"./GetAppTwoTone-6e3519f9.js";import"./InfoOutlined-aa78e498.js";import"./CheckCircleTwoTone-6570b572.js";import"./ErrorChip-3c40d634.js";import"./Chip-a105e3ef.js";import"./Avatar-e1ef2d77.js";import"./Link-5cdd275a.js";import"./Skeleton-2007774f.js";import"./pluralize-9f2b9a2f.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./List-81115ae1.js";import"./ListItem-3ff2e111.js";import"./listItemButtonClasses-85d2ac2c.js";import"./isMuiElement-bce4c331.js";import"./util-1969ce74.js";import"./index-17a77bb8.js";import"./tinycolor-ea5bcbb6.js";import"./InfoTwoTone-aaf78040.js";import"./inputBaseClasses-8d4a6788.js";import"./Fade-05777e49.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-f79c4412.js";import"./index-9d475cdf.js";import"./tiny-invariant-dd7d57d2.js";const jt={title:"Governance/AccessRequirementRelatedProjectsList",component:j},r={args:{accessRequirementId:9603055}},t={args:{accessRequirementId:9605913}},o={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[I.rest.post(`${P}${g}`,async(A,u,e)=>{const l={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return u(e.status(200),e.json(l))})]}}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var s,a,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var c,d,R;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 1234567
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
      // searchAccessRequirements
      rest.post(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_SEARCH}\`, async (req, res, ctx) => {
        const zeroRelatedProjects = {
          results: [{
            id: '1234567',
            type: 'org.sagebionetworks.repo.model.ManagedACTAccessRequirement',
            createdOn: '2017-08-23T18:48:20.892Z',
            modifiedOn: '2023-12-14T00:43:41.315Z',
            name: 'Team AR without Related Projects',
            version: '1',
            relatedProjectIds: [],
            reviewerIds: []
          }]
        };
        return res(ctx.status(200), ctx.json(zeroRelatedProjects));
      })]
    }
  }
}`,...(R=(d=o.parameters)==null?void 0:d.docs)==null?void 0:R.source}}};const Pt=["ManyProjects","OneProject","ZeroProjectsMock"];export{r as ManyProjects,t as OneProject,o as ZeroProjectsMock,Pt as __namedExportsOrder,jt as default};
