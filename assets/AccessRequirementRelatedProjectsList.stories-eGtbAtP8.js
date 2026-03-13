import{n as o,b as n,Q as a,H as c}from"./iframe-DMCVtv3C.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DuzCVqBS.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DW2ctlq7.js";import"./index-dVTjtAYj.js";import"./_baseOrderBy-Bt6OsKEx.js";import"./_baseIteratee-C328X4kO.js";import"./_baseMap-CqR0YY-2.js";import"./_baseEach-L2UrfanQ.js";import"./useInfiniteQuery-BJNbTrM6.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-x9jTWVRv.js";import"./useEntity-ixiKDUMF.js";import"./pickBy-DkbDPg0c.js";import"./isString-72zFrImG.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CwI3mobv.js";import"./useGetEntityHeaders-erWP6tCt.js";import"./EntityIcon-DDRj1oZi.js";import"./ErrorChip-Dq5Jks0o.js";import"./Chip-U5DUeNga.js";import"./ListItem-Dasx96eJ.js";import"./listItemButtonClasses-B6sKbrqe.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
