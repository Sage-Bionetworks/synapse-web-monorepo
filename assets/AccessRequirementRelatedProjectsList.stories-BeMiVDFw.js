import{n as o,b as n,Q as a,H as c}from"./iframe-D6-EgIYn.js";import{A as m}from"./AccessRequirementRelatedProjectsList-NfWAeu-Z.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CDwXUrc8.js";import"./index-BAqH8QUV.js";import"./_baseOrderBy-kKcqyWpM.js";import"./_baseIteratee-DM4WPHJT.js";import"./_baseMap-DlGLzu_z.js";import"./_baseEach-DEorYF5u.js";import"./useQueries-Dp7eDvCj.js";import"./useInfiniteQuery-Bac3XvRa.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CclHeFNF.js";import"./useEntity-CcmBzuUK.js";import"./pickBy-DPt-VEwT.js";import"./isString-BleN90PO.js";import"./useSuspenseQuery-CDWRAkW_.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B-ukV0jW.js";import"./useGetEntityHeaders-Cm1kjIYm.js";import"./EntityIcon-BRLhkMOP.js";import"./ErrorChip-CZcgCZOx.js";import"./Chip-C2QYErxj.js";import"./ListItem-C6u7Ik_4.js";import"./listItemButtonClasses-Dg5mxcei.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const y=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,t as ZeroProjectsMock,y as __namedExportsOrder,H as default};
