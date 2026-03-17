import{n as o,b as n,Q as a,H as c}from"./iframe-Bd48Phhx.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BFd-uomM.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-D8EP13X3.js";import"./index-4gXpW4bf.js";import"./_baseOrderBy-pD6oys2i.js";import"./_baseIteratee-FIlUPYy6.js";import"./_baseMap-BKdhkoLq.js";import"./_baseEach-Ca-EIFRq.js";import"./useInfiniteQuery-lMwdmXJ9.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-B9gEXoiY.js";import"./useEntity-xQcJ_DrW.js";import"./pickBy-CObcCQ8L.js";import"./isString-DP_DVEPW.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Csn_jgox.js";import"./useGetEntityHeaders-j3Jfeowy.js";import"./EntityIcon-CI-IKxMl.js";import"./ErrorChip-D1Il5Xsy.js";import"./Chip-Cnnt6mV5.js";import"./ListItem-BeCgj5OR.js";import"./listItemButtonClasses-BC6zKoHv.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
