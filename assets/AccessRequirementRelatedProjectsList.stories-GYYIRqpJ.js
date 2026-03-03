import{n as o,b as n,Q as a,H as c}from"./iframe-BPIYH1oT.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BN7jmYL_.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BtM5n_Nn.js";import"./index-CSa6jvLb.js";import"./_baseOrderBy-D0f27N3W.js";import"./_baseIteratee-Bb0kra6V.js";import"./_baseMap-Bus0-AtT.js";import"./_baseEach-H9iq9W3A.js";import"./useInfiniteQuery-DoSJlmbq.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-C-G-Y72S.js";import"./useEntity-2zjLBXPR.js";import"./pickBy-DCBiBms_.js";import"./isString-CFu8K1iZ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DLQmS3vZ.js";import"./useGetEntityHeaders-B6wn6rH9.js";import"./EntityIcon-BRCHNatz.js";import"./ErrorChip-SfAp01sT.js";import"./Chip-DDX768Id.js";import"./ListItem-DUhlXqat.js";import"./listItemButtonClasses-CykFNgCw.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
