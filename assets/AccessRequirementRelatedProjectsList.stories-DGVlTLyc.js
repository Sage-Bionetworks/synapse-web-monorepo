import{s as o,b as n,O as a,H as c}from"./iframe-zB-jZjF1.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BgSFTbT8.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-N-mQs8gZ.js";import"./index-CpNo1svs.js";import"./_baseOrderBy-8C8_6s3v.js";import"./_baseIteratee-D_pQoQ0U.js";import"./_baseMap-3faxojLo.js";import"./_baseEach-BxbuAt9h.js";import"./useInfiniteQuery--NK2xn9-.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DpENZb_Q.js";import"./useEntity-O8bJrzVR.js";import"./pickBy-Cdf8hihV.js";import"./isString-Cma2iw_R.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-HBiYxCDc.js";import"./useGetEntityHeaders-C6AqGtfJ.js";import"./EntityIcon-B2LOgno0.js";import"./ErrorChip-DJ988Kcs.js";import"./Chip-C8ZEijAb.js";import"./ListItem-B9DASHzs.js";import"./listItemButtonClasses-BkTygPr_.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
