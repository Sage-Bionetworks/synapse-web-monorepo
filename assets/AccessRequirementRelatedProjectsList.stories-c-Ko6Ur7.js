import{n as o,b as n,Q as a,H as c}from"./iframe-DIHgldxa.js";import{A as m}from"./AccessRequirementRelatedProjectsList-ZqyhG5xt.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BXImRjuM.js";import"./index-DnH41gKI.js";import"./_baseOrderBy-ASpvx6Fd.js";import"./_baseIteratee-Co0Mhj_4.js";import"./_baseMap-DOg7hwfO.js";import"./_baseEach-BM-VXKp0.js";import"./useInfiniteQuery-C7SfxOXc.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DJXfKZPF.js";import"./useEntity-C5K14HDn.js";import"./pickBy-YfaqetyA.js";import"./isString-Ol6H3siH.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DN9g0Aiw.js";import"./useGetEntityHeaders-x9X5rfLu.js";import"./EntityIcon-5Ifo2YPZ.js";import"./ErrorChip-_TWxeC_c.js";import"./Chip-RTYTkfR-.js";import"./ListItem-W-fnM1Bm.js";import"./listItemButtonClasses-Yu4fYD5n.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
