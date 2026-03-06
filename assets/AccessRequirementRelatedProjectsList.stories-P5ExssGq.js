import{n as o,b as n,Q as a,H as c}from"./iframe-CK9LwFro.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CT2tDC2d.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DgSyxERp.js";import"./index-BisQv3gR.js";import"./_baseOrderBy-B7Ja_XJE.js";import"./_baseIteratee-D0W9oXXs.js";import"./_baseMap-BxMZGUb8.js";import"./_baseEach-D6x_jnH3.js";import"./useInfiniteQuery-D4l8wj4_.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CgYjAGTf.js";import"./useEntity-C7yCzu2y.js";import"./pickBy-DtlktYT1.js";import"./isString-1n4YuqPD.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DRRv1QRo.js";import"./useGetEntityHeaders-8XdKvJ0s.js";import"./EntityIcon-DqKFVo5X.js";import"./ErrorChip-C_ng-GEm.js";import"./Chip-CRLyozh0.js";import"./ListItem-B9_q_YP4.js";import"./listItemButtonClasses-CDA8g5P2.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 1234567
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
      // searchAccessRequirements
      http.post(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_SEARCH}\`, () => {
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
        return HttpResponse.json(zeroRelatedProjects, {
          status: 200
        });
      })]
    }
  }
}`,...s.parameters?.docs?.source}}};const v=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,s as ZeroProjectsMock,v as __namedExportsOrder,f as default};
