import{s as o,b as n,O as a,H as c}from"./iframe-BFtw_QUH.js";import{A as m}from"./AccessRequirementRelatedProjectsList-T61O7nY3.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BTsdKkft.js";import"./index-CFaVGWZ0.js";import"./_baseOrderBy-DcKYylt1.js";import"./_baseIteratee-CJVbWW0K.js";import"./_baseMap-BFNisPHr.js";import"./_baseEach-B9RBeIUP.js";import"./useInfiniteQuery-D-5eLx7Z.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DfNfPnDv.js";import"./useEntity-C3m0mLEK.js";import"./pickBy-CxxY41Bx.js";import"./isString-D2qY6B-G.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BNNdEoVQ.js";import"./useGetEntityHeaders-DyAh47vo.js";import"./EntityIcon-CWCDPWc-.js";import"./ErrorChip-CLqyixuO.js";import"./Chip-CtpBh3N1.js";import"./ListItem-C67FS7Y0.js";import"./listItemButtonClasses-rrzIeHbz.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
