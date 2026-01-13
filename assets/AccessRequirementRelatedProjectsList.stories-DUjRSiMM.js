import{n as o,b as n,O as a,H as c}from"./iframe-DVNYwO2X.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BukHbdog.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DWR2oOa2.js";import"./index-9hqwGMA7.js";import"./_baseOrderBy-CmoZ_S3f.js";import"./_baseIteratee-DppP0dwZ.js";import"./_baseMap-ksk5ZDPW.js";import"./_baseEach-Dp5MzYWx.js";import"./useQueries-BQ487jlg.js";import"./useInfiniteQuery-B9oS7yw5.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-XAzzfvzb.js";import"./useEntity-olcXtPjS.js";import"./pickBy-BQ7-Hlay.js";import"./isString-D_fby3AB.js";import"./useSuspenseQuery-33kCA9BT.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DJPyfImq.js";import"./useGetEntityHeaders-CSxZ3DO1.js";import"./EntityIcon-CvuZWRxc.js";import"./ErrorChip-ZmNEi7jr.js";import"./Chip-sOf8CffO.js";import"./ListItem-3zmpEz5q.js";import"./listItemButtonClasses-Bb6i5z9V.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
