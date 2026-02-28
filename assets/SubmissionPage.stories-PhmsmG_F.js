import{g as d,k as u,n as t,a3 as c,dN as R,b as e,kn as i,ko as E,H as s,kp as _,p as m,kq as I,kr as S,k6 as O}from"./iframe-PaLoqTAY.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CF3XxVwR.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-9GMgHiq4.js";import"./useAccessRequirements-BUGBqPjk.js";import"./index-CNYDnv7t.js";import"./_baseOrderBy-B-90sWET.js";import"./_baseIteratee-DxxZiUq1.js";import"./_baseMap-CS_8_rhf.js";import"./_baseEach-Dz90dg28.js";import"./useInfiniteQuery-tSWCMdH0.js";import"./groupBy-CqlyGx9q.js";import"./_createAggregator-CY0jRzM8.js";import"./DialogBase-CdOZpOpZ.js";import"./Close-cm6rg5AJ.js";import"./HelpPopover-CsjQ6N0g.js";import"./MarkdownPopover-nKSUx3jQ.js";import"./LightTooltip-_tTaVink.js";import"./MarkdownSynapse-Ba6V8zsg.js";import"./SkeletonButton-BnWhyhDQ.js";import"./SkeletonInlineBlock-Cw72BSZP.js";import"./SkeletonTable-zz4k46jG.js";import"./SkeletonParagraph-BUTvJRRd.js";import"./EntityLink-DGsvVwy0.js";import"./useEntity-Cp85qi_z.js";import"./pickBy-BYJa1pH9.js";import"./isString-mxqnxG_F.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D-GVp5oH.js";import"./useGetEntityHeaders-BrlPNO2y.js";import"./EntityIcon-xzWSXdeX.js";import"./ErrorChip-BRwcNSTg.js";import"./Chip-CsQ7Z6OV.js";import"./UserOrTeamBadge-D-vtmvlK.js";import"./UserBadge-CVbBcasz.js";import"./useUserBundle-8xaYISQq.js";import"./MenuItem-HGElYqD5.js";import"./Card-v0j-xphS.js";import"./TeamBadge-CM2sug7A.js";import"./UnmanagedACTAccessRequirementItem-piMRtA85.js";import"./RequirementItem-B4cH3t0d.js";import"./LockTwoTone-9ItYIIxk.js";import"./UserSearchBoxV2-b_bGyPaU.js";import"./useDebouncedEffect-1lC_bowX.js";import"./use-deep-compare-effect.esm-4TMuC-2s.js";import"./uniq-CSJiZhD9.js";import"./without-ByLzUNUf.js";import"./Select-aab027f3.esm-RMistHs_.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-C1dZnGE1.js";import"./SelfSignAccessRequirementItem-DXqPUvjm.js";import"./DataAccessRequestAccessorsFilesForm-DPXO1pqW.js";import"./enums-CBWLBw3m.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CJfrCQQq.js";import"./RadioGroup-DRvWHXuC.js";import"./Radio-DiAE_BDX.js";import"./SwitchBase-8QTSdqSf.js";import"./FormGroup-6vm2TwLx.js";import"./FormControlLabel-B5WbGe-J.js";import"./UploadDocumentField-BZfMxjPV.js";import"./FileUpload-BPYgBNXy.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DjGIwf65.js";import"./GridLegacy-B8su8-AK.js";import"./ResearchProjectForm-BP4JszUd.js";import"./TextFieldWithWordLimit-15jAFZsH.js";import"./AuthenticatedRequirement-CbSu_mMV.js";import"./CertificationRequirement-oYogCXSr.js";import"./TwoFactorAuthEnabledRequirement-CnTWAmyH.js";import"./ValidationRequirement-CYJcxsBI.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DHMtlNsM.js";import"./RejectDataAccessRequestModal-Cwv2fuxm.js";import"./CannedRejectionDialog-DWFbrlhX.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CYp0eVVg.js";import"./Checkbox-D2fc_nRQ.js";import"./Grid-2tfAWBHV.js";import"./upperFirst-B1UjnQy3.js";import"./_stringToArray--_ejly3M.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ze=["Demo","DemoError"];export{o as Demo,n as DemoError,Ze as __namedExportsOrder,Ve as default};
