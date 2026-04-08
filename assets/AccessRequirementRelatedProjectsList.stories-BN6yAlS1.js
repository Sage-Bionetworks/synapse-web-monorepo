import{s as o,b as n,O as a,H as c}from"./iframe-DvDRa5Q6.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DR-8KAiW.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-43ONejHS.js";import"./index-DCaH_YMW.js";import"./_baseOrderBy-B5hExVXf.js";import"./_baseIteratee-CmNCC7oz.js";import"./_baseMap-BG4Szxcl.js";import"./_baseEach-CMAF8SZ0.js";import"./useInfiniteQuery-zp3UrFFS.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CbShp25v.js";import"./useEntity-DiocNvqG.js";import"./pickBy-CYz8iHO0.js";import"./isString-DXLKKj12.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DdudX2f2.js";import"./useGetEntityHeaders-whNjPgbz.js";import"./EntityIcon-D1Nxz1mH.js";import"./ErrorChip-DuLjw1m2.js";import"./Chip-dgVEWiiO.js";import"./ListItem-DlM20Ec4.js";import"./listItemButtonClasses-CLODV7l0.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const H=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,s as ZeroProjectsMock,H as __namedExportsOrder,v as default};
