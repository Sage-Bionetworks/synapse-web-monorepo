import{z as u,b as e,o as d,s as t,kq as i,kr as c,H as s,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-DIHutOM2.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DI8yvxhL.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-UA2euDmN.js";import"./useAccessRequirements-B6M8ZlGq.js";import"./index-C9LEM1Gs.js";import"./_baseOrderBy-BzddQf8d.js";import"./_baseIteratee-D2BaxFYK.js";import"./_baseMap-BVRhLcGM.js";import"./_baseEach-USEntf0G.js";import"./useInfiniteQuery-DBeYwuV2.js";import"./groupBy-2h8zIF--.js";import"./_createAggregator-C14bRRWs.js";import"./DialogBase-BFJUh7rx.js";import"./Close-66Wa0jNb.js";import"./HelpPopover-Em0_eBy5.js";import"./MarkdownPopover-WQLNFQ0C.js";import"./LightTooltip-BMq0VrbL.js";import"./MarkdownSynapse-8m84fN3d.js";import"./SkeletonButton-zFoMoYHg.js";import"./SkeletonInlineBlock-CxHTYkDw.js";import"./SkeletonTable-C4N-t1H3.js";import"./SkeletonParagraph-BIGOfadt.js";import"./EntityLink-CNrJC2aE.js";import"./useEntity-BCd96Fuo.js";import"./pickBy-BK1o06LF.js";import"./isString-BaD9IBlG.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DXUioZpw.js";import"./useGetEntityHeaders-D4SsjwJk.js";import"./EntityIcon-Cgxdsl-f.js";import"./ErrorChip-qpC_T-qi.js";import"./Chip-BE1NWb4W.js";import"./UserOrTeamBadge-qoZZdjWZ.js";import"./useUserGroupHeader-DQOVdta_.js";import"./TeamBadge-bGdyVfrX.js";import"./UserBadge-F-3JUNkT.js";import"./useUserBundle-C5_SG0-L.js";import"./MenuItem-DK0615By.js";import"./Card-BmTXRzNL.js";import"./UnmanagedACTAccessRequirementItem-C4FvIncz.js";import"./RequirementItem-Dhalda50.js";import"./CheckTwoTone-Dau4t8Pg.js";import"./ManagedACTAccessRequirementItemView-CH1MD1ro.js";import"./SelfSignAccessRequirementItem-B79vBf_b.js";import"./DataAccessRequestAccessorsFilesForm-BwN86hjr.js";import"./enums-CztbxKjU.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-CVeN1MXW.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-CZYn-Z73.js";import"./UserSearchBox-Cgcz8PGw.js";import"./useDebouncedEffect-Bbon0Pxy.js";import"./Autocomplete-g8wVyTFT.js";import"./usePreviousProps-DeB1hVtp.js";import"./RadioGroup-YxUeEFrK.js";import"./Radio-CDYPZbnQ.js";import"./SwitchBase-GpXGIWUe.js";import"./FormGroup-CsaqhiB_.js";import"./FormControlLabel-D-4Nscdf.js";import"./UploadDocumentField-CGPMuIDl.js";import"./FileUpload-Ci8AdoQG.js";import"./ManagedACTAccessRequirementFormWikiWrapper-xFJMgmgb.js";import"./GridLegacy-gZW-03Q_.js";import"./ResearchProjectForm-DEaboyzZ.js";import"./TextFieldWithWordLimit-Cee2XAp6.js";import"./AuthenticatedRequirement-BB0rHR7L.js";import"./CertificationRequirement-CnxflMWn.js";import"./TwoFactorAuthEnabledRequirement-2x4UNbcD.js";import"./ValidationRequirement-BWTwKp8c.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-OxGZLraQ.js";import"./RejectDataAccessRequestModal-BMDtoetA.js";import"./CannedRejectionDialog-CDTSG6bh.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-PWqiGP-s.js";import"./Checkbox-BUXxhWF5.js";import"./Grid-BawCSdC7.js";import"./upperFirst-D13unfWY.js";import"./_stringToArray-YoAP_RKC.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
