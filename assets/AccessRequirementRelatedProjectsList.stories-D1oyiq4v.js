import{s as o,b as n,O as a,H as c}from"./iframe-QSWh_nl6.js";import{A as m}from"./AccessRequirementRelatedProjectsList-C4uMc74g.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BOSef9kn.js";import"./index-D_eAvhKF.js";import"./_baseOrderBy-CRclIjEo.js";import"./_baseIteratee-CFwgFnBf.js";import"./_baseMap-Bmwx28tM.js";import"./_baseEach-C5TZrtK0.js";import"./useInfiniteQuery-B5lzZVtS.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BMm54chF.js";import"./useEntity-MJbU_Wul.js";import"./pickBy-BIj1us4f.js";import"./isString-CMmyCM5R.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-1drniFxT.js";import"./useGetEntityHeaders-BtVEVJH9.js";import"./EntityIcon-DMgPS5gs.js";import"./ErrorChip-BOfzNWnQ.js";import"./Chip-BVgBfsjl.js";import"./ListItem-C9cQ1jJQ.js";import"./listItemButtonClasses-Bq8ZIMpV.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
