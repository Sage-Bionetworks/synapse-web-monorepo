import{z as u,b as e,o as d,s as t,kq as i,kr as c,H as s,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-BJt7q_JV.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-B_eqETMk.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CvzigN5O.js";import"./useAccessRequirements-BwSgVLqv.js";import"./index-D1KUKnNi.js";import"./_baseOrderBy-CIQ5pYB6.js";import"./_baseIteratee-BPQNR2Jo.js";import"./_baseMap-BzkpFs2l.js";import"./_baseEach-B4timjj-.js";import"./useInfiniteQuery-Ceo7_zT8.js";import"./groupBy-CUrgQl7L.js";import"./_createAggregator-NmKpHOFS.js";import"./DialogBase-DNgmg92r.js";import"./Close-CnuYTtXB.js";import"./HelpPopover-BKPDM7P7.js";import"./MarkdownPopover-iIdPMRk3.js";import"./LightTooltip-boxSQgEG.js";import"./MarkdownSynapse-BHezFvPm.js";import"./SkeletonButton-CQzFd6lb.js";import"./SkeletonInlineBlock-DWTLId8s.js";import"./SkeletonTable-BoHNQ0XH.js";import"./SkeletonParagraph-76490YmJ.js";import"./EntityLink-Cv3CpSGO.js";import"./useEntity-BiFHWUYV.js";import"./pickBy-ggZJH3G-.js";import"./isString-CsqEOPqS.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BO5FYJrE.js";import"./useGetEntityHeaders-ome2CvUP.js";import"./EntityIcon-CbW7rJO7.js";import"./ErrorChip-BH7aKgi-.js";import"./Chip-D4cY5ocF.js";import"./UserOrTeamBadge-CLetIjKX.js";import"./useUserGroupHeader-D1CyPOkN.js";import"./TeamBadge-BJMPS39-.js";import"./UserBadge-Bct9zt1u.js";import"./useUserBundle-DxuM9JQF.js";import"./MenuItem-DUuZTALA.js";import"./Card-C9SkN0MX.js";import"./UnmanagedACTAccessRequirementItem-B8kC6G0A.js";import"./RequirementItem-BgFU58qL.js";import"./CheckTwoTone-Cx9kZCtO.js";import"./ManagedACTAccessRequirementItemView-D_L5z5hI.js";import"./SelfSignAccessRequirementItem-B3o78QGF.js";import"./DataAccessRequestAccessorsFilesForm-u2BVps-k.js";import"./enums-Cv9chIdu.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-jUrse6Oz.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-DYW2yUqz.js";import"./UserSearchBox-lFi7N7kn.js";import"./useDebouncedEffect-DljHfkX5.js";import"./Autocomplete-2yZW5YM0.js";import"./usePreviousProps-_k1Molu3.js";import"./RadioGroup-BoIVV53h.js";import"./Radio-DgNCNVuW.js";import"./SwitchBase-B6wo5qcW.js";import"./FormGroup-DKxxADn2.js";import"./FormControlLabel-BZzQmDal.js";import"./UploadDocumentField-BX6rkT9g.js";import"./FileUpload-BTyiWgyp.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CR6Q2yTM.js";import"./GridLegacy-Crv8shTW.js";import"./ResearchProjectForm-CY06bjdT.js";import"./TextFieldWithWordLimit-D2UvLGT3.js";import"./AuthenticatedRequirement-DcIoeYu5.js";import"./CertificationRequirement-BobFBDGS.js";import"./TwoFactorAuthEnabledRequirement-Btfi6E-d.js";import"./ValidationRequirement-CsLBTENx.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BBDJhumY.js";import"./RejectDataAccessRequestModal-D1TndzHD.js";import"./CannedRejectionDialog-DYWep257.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-DhIfbqQu.js";import"./Checkbox-Beiu9b0t.js";import"./Grid-DFP1jire.js";import"./upperFirst-_HcW0Gnt.js";import"./_stringToArray-DKrnOmzL.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'SubmissionPage',
  loaders: [() => registerTableQueryResult({
    sql: \`SELECT * FROM \${REJECT_SUBMISSION_CANNED_RESPONSES_TABLE}\`
  }, mockRejectionReasonsTableQueryResultBundle)],
  parameters: {
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getWikiHandlers(MOCK_REPO_ORIGIN),
      // Return submission based on ID
      http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, ({
        params
      }) => {
        const submission = mockSubmissions.find(submission => params.id === submission.id);
        return HttpResponse.json(submission, {
          status: 200
        });
      }),
      // Return a mocked access requirement
      http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_BY_ID(':id')}\`, () => {
        return HttpResponse.json(mockManagedACTAccessRequirement, {
          status: 200
        });
      }), http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}\`, () => {
        return HttpResponse.json({
          wikiPageId: 123,
          ownerObjectId: mockManagedACTAccessRequirement.id,
          ownerObjectType: 'ACCESS_REQUIREMENT'
        }, {
          status: 200
        });
      }), http.get<{
        id: string;
      }>(\`\${MOCK_REPO_ORIGIN}/repo/v1/accessRequirement/:id/acl\`, ({
        params
      }) => {
        return HttpResponse.json({
          id: params.id,
          creationDate: '2022-05-20T14:32:31.665Z',
          etag: 'f4fbd4f2-751d-40dd-9421-1d2693231217',
          resourceAccess: [{
            principalId: MOCK_USER_ID_2,
            accessType: ['REVIEW_SUBMISSIONS']
          }]
        }, {
          status: 200
        });
      }), ...getHandlersForTableQuery(MOCK_REPO_ORIGIN), http.put(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, async ({
        request
      }) => {
        return HttpResponse.json(await request.json(), {
          status: 201
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 1
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Demo Error State',
  parameters: {
    msw: {
      handlers: [http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, () => {
        const errorResponse: ErrorResponse = {
          reason: 'The user must be validated in order to review data access submissions.',
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse'
        };
        return HttpResponse.json(errorResponse, {
          status: 403
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 9999
  }
}`,...n.parameters?.docs?.source}}};const Ve=["Demo","DemoError"];export{o as Demo,n as DemoError,Ve as __namedExportsOrder,Je as default};
