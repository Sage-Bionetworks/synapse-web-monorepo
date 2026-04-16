import{z as u,b as e,o as d,s as t,kq as i,kr as c,H as s,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-CDo31VQT.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-D-XTbEcF.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-rCz18Vnb.js";import"./useAccessRequirements-De0YyHGF.js";import"./index-n3RJ91jU.js";import"./_baseOrderBy-CzmabnCx.js";import"./_baseIteratee-22si1V97.js";import"./_baseMap-DRCaeSez.js";import"./_baseEach-D9qbLuld.js";import"./useInfiniteQuery-zNzDu-Ai.js";import"./groupBy-DZccC2K2.js";import"./_createAggregator-CCSf8ylh.js";import"./DialogBase-E8WFtgAh.js";import"./Close-CuElEuLY.js";import"./HelpPopover-C32osPto.js";import"./MarkdownPopover-CvGVbAgl.js";import"./LightTooltip-xFNFrir-.js";import"./MarkdownSynapse-BY4P5oyv.js";import"./SkeletonButton-5CdV1WvK.js";import"./SkeletonInlineBlock-DWU8rLPE.js";import"./SkeletonTable-DUiAsn0J.js";import"./SkeletonParagraph-KDbQ1Dqi.js";import"./EntityLink-C8XqtHUd.js";import"./useEntity-uUVj_auO.js";import"./pickBy-BCJRYgtr.js";import"./isString-BtfLA6Fx.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DHi9K3Vb.js";import"./useGetEntityHeaders-DWbg_-gf.js";import"./EntityIcon-BMX3azV0.js";import"./ErrorChip-Uq50Cf6-.js";import"./Chip-B6hxaUER.js";import"./UserOrTeamBadge-BrTBi1bT.js";import"./useUserGroupHeader-Cf-nNW5u.js";import"./TeamBadge-BKkuj7BD.js";import"./UserBadge-CglgAQ0Y.js";import"./useUserBundle-BO5FAfwo.js";import"./MenuItem-CM8kbxyL.js";import"./Card-BmXOSgoq.js";import"./UnmanagedACTAccessRequirementItem-CJEzl6J7.js";import"./RequirementItem-B_xPOKc9.js";import"./CheckTwoTone-Dq1nl2mH.js";import"./ManagedACTAccessRequirementItemView-C6saVQa9.js";import"./SelfSignAccessRequirementItem-R-c_Ef5j.js";import"./DataAccessRequestAccessorsFilesForm-yAmXNftq.js";import"./enums-CvhQjBcK.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-C8IpQzj8.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-DVDUPkuz.js";import"./UserSearchBox-DQVrJBwk.js";import"./useDebouncedEffect-pm5O216d.js";import"./Autocomplete-TnARubMI.js";import"./usePreviousProps-CMRxk_ZT.js";import"./RadioGroup-DrxPVbpC.js";import"./Radio-BZWIAEbQ.js";import"./SwitchBase-UfViqCLi.js";import"./FormGroup-Cf4VLm4P.js";import"./FormControlLabel-D6JSzQu3.js";import"./UploadDocumentField-DbWg2NrR.js";import"./FileUpload-LdvbBrfY.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DBSFaXNk.js";import"./GridLegacy-DCUrUgoW.js";import"./ResearchProjectForm-DBZnAty3.js";import"./TextFieldWithWordLimit-qQmXC8Jm.js";import"./AuthenticatedRequirement-CN4BoO3f.js";import"./CertificationRequirement-r41Bl5PZ.js";import"./TwoFactorAuthEnabledRequirement-B_uEYWMK.js";import"./ValidationRequirement-5uGsqtX5.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Ctm5UtZd.js";import"./RejectDataAccessRequestModal-6cCkL1Fa.js";import"./CannedRejectionDialog-IwyUyJxD.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-C5P_AirD.js";import"./Checkbox-BRd7sRay.js";import"./Grid-B6QExvce.js";import"./upperFirst-BQEOlow0.js";import"./_stringToArray-CEU3m42K.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
