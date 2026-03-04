import{n as o,b as n,Q as a,H as c}from"./iframe-qVlGQSuu.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BJLu4fQ3.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-SzvQJuLz.js";import"./index-Be9oNlvR.js";import"./_baseOrderBy-BG0Y1VUv.js";import"./_baseIteratee-BMx8UgrR.js";import"./_baseMap-Cti1-MBK.js";import"./_baseEach-Gi_mbc02.js";import"./useInfiniteQuery-BvxwsDiv.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DbEBnUMV.js";import"./useEntity-Ct505i-Y.js";import"./pickBy-CICyjPiu.js";import"./isString-BzRHITTW.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DUfbyb2m.js";import"./useGetEntityHeaders-BBqOvY-q.js";import"./EntityIcon-DitKHH8f.js";import"./ErrorChip-BTmn8inS.js";import"./Chip-BBDwaxyK.js";import"./ListItem-CcfgXQtS.js";import"./listItemButtonClasses-DuNAD9yD.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
