import{A as j}from"./AccessRequirementRelatedProjectsList-d67236d7.js";import{M as P}from"./getEndpoint-ac94413e.js";import{l as I}from"./index-99018656.js";import{aj as g}from"./SynapseClient-191a5ad3.js";import"./jsx-runtime-095bf462.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./OrientationBanner-caa14b37.js";import"./FullWidthAlert-f28d1efb.js";import"./AlertTitle-ce329963.js";import"./styled-81e3612a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./createSvgIcon-efa5fd2e.js";import"./Paper-057dfac2.js";import"./IconButton-2a435ef1.js";import"./ButtonBase-84be17da.js";import"./emotion-react.browser.esm-f993d2c2.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-aa95d3cf.js";import"./useForkRef-f2aa3d66.js";import"./useIsFocusVisible-bbf13f29.js";import"./Typography-214fd772.js";import"./extendSxProp-3a6755c2.js";import"./Stack-db426a61.js";import"./Box-f664662a.js";import"./useTheme-533dafd0.js";import"./Grow-080f23da.js";import"./isHostComponent-fa76b8d9.js";import"./index-8ce4a492.js";import"./utils-b7dab64f.js";import"./ClickAwayListener-e5c35437.js";import"./Tooltip-f72372f7.js";import"./Button-f56bbd3a.js";import"./useAccessRequirements-208a57a5.js";import"./useMutation-d4578919.js";import"./useInfiniteQuery-d4056584.js";import"./useMediaQuery-5b0b7435.js";import"./sortBy-85b5591b.js";import"./hasIn-41dc455b.js";import"./_Uint8Array-e7bacca1.js";import"./_getTag-ed9314eb.js";import"./isArray-5e3f9107.js";import"./_baseTimes-8715be3e.js";import"./isSymbol-7c514724.js";import"./toString-cc90cb98.js";import"./_getMatchData-a65e887f.js";import"./_baseIsEqual-e9b27ebd.js";import"./_cacheHas-5e0daad4.js";import"./_setToArray-3d6ec6fd.js";import"./identity-46f208ab.js";import"./_baseFor-d254fa1e.js";import"./_baseRest-de9add13.js";import"./_overRest-b2592a9d.js";import"./_isIterateeCall-b1fb139d.js";import"./EntityLink-2f5ce2b3.js";import"./useEntity-66c742c4.js";import"./isEqual-8bc63716.js";import"./pick-39707cbf.js";import"./_baseClone-085aef97.js";import"./_baseSlice-cf92e063.js";import"./isPlainObject-d90d8e80.js";import"./useGetEntityHeaders-f40d0574.js";import"./EntityIcon-ec5fe8d7.js";import"./IconSvg-3ab5d71e.js";import"./ErrorOutlined-3a36acde.js";import"./GetAppTwoTone-dc274b61.js";import"./InfoOutlined-f00f0485.js";import"./CheckCircleTwoTone-b7fa358f.js";import"./ErrorChip-c580c36c.js";import"./Chip-55e35231.js";import"./Avatar-58bc65b9.js";import"./Link-342b97d1.js";import"./Skeleton-fabf6a47.js";import"./pluralize-9608a438.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./List-471c9f54.js";import"./ListItem-fc4b1d33.js";import"./listItemButtonClasses-d94f4ee9.js";import"./isMuiElement-3ce2dffc.js";import"./util-69f8ea98.js";import"./index-bef4e47c.js";import"./SynapseConstants-163777d5.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-47c8dffe.js";import"./index-58d3fd43.js";import"./tiny-invariant-dd7d57d2.js";import"./InfoTwoTone-444cba43.js";import"./inputBaseClasses-a1108cc7.js";import"./Fade-275e12f9.js";const et={title:"Governance/AccessRequirementRelatedProjectsList",component:j},r={args:{accessRequirementId:9603055}},t={args:{accessRequirementId:9605913}},e={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[I.rest.post(`${P}${g}`,async(A,u,o)=>{const l={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return u(o.status(200),o.json(l))})]}}};var m,i,s;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var p,a,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var c,d,R;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(R=(d=e.parameters)==null?void 0:d.docs)==null?void 0:R.source}}};const ot=["ManyProjects","OneProject","ZeroProjectsMock"];export{r as ManyProjects,t as OneProject,e as ZeroProjectsMock,ot as __namedExportsOrder,et as default};
//# sourceMappingURL=AccessRequirementRelatedProjectsList.stories-1f8aed97.js.map
