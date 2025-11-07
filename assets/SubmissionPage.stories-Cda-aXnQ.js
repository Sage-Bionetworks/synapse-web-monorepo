import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-BMyGeve0.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-D_DCDszR.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-B5yQBXEX.js";import"./useAccessRequirements-YPXOrsHS.js";import"./index-D4olMQqi.js";import"./_baseOrderBy-M6YhyYJW.js";import"./_baseIteratee-DmZh1ikp.js";import"./_baseMap-7niBu5kX.js";import"./_baseEach-Dz2o9pba.js";import"./useQueries-C9hmeEBs.js";import"./useInfiniteQuery-TUyJsnEQ.js";import"./groupBy-DoYN40KM.js";import"./_createAggregator-CyEP6dnk.js";import"./DialogBase-BjM9P9Rn.js";import"./Close-BXCO7x3F.js";import"./HelpPopover-C7G9YaEw.js";import"./MarkdownPopover-DuWNQuTs.js";import"./LightTooltip-CblZ2Lnk.js";import"./MarkdownSynapse-DLZKpOPg.js";import"./SkeletonButton-Bk8uTKNs.js";import"./SkeletonInlineBlock-C3rHjTF4.js";import"./SkeletonTable-DlFasnP9.js";import"./SkeletonParagraph-B_kTspc1.js";import"./EntityLink-BoDkJtjF.js";import"./useEntity-B1zulruF.js";import"./pickBy-uRBOk6GW.js";import"./isString-CUA9WR5g.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Cw_sP7d3.js";import"./useGetEntityHeaders-CVRoIDed.js";import"./EntityIcon-Cgk2zc0t.js";import"./ErrorChip-BawTWOvI.js";import"./Chip-7xwsG1n1.js";import"./UserOrTeamBadge-CQka3CPT.js";import"./UserBadge-BteVYeu4.js";import"./MenuItem-BW_PF2Vf.js";import"./Card-CCjI6n3F.js";import"./TeamBadge-zzeQUSKQ.js";import"./UnmanagedACTAccessRequirementItem-yUWVkhL2.js";import"./RequirementItem-DoxdwJbG.js";import"./LockTwoTone-DurE7ZQi.js";import"./UserSearchBoxV2-CsH1PO8a.js";import"./useDebouncedEffect-FBgA56S7.js";import"./use-deep-compare-effect.esm-YcNwKKf6.js";import"./uniq-B7AesGtx.js";import"./without-BVpbMo0D.js";import"./Select-aab027f3.esm-BQTpensv.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-7YGXlBl1.js";import"./SelfSignAccessRequirementItem-DARGBbwS.js";import"./DataAccessRequestAccessorsFilesForm-GO1CfOQX.js";import"./enums-BrbQ9Mgg.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-UwLP2n0L.js";import"./RadioGroup-CI5tNLIy.js";import"./Radio-zrUGfGoZ.js";import"./SwitchBase-ioZOas69.js";import"./FormGroup-CHt7AZVd.js";import"./FormControlLabel-lPD3-OXR.js";import"./UploadDocumentField-lnqHsvwX.js";import"./FileUpload-D2lbol1D.js";import"./ManagedACTAccessRequirementFormWikiWrapper-D51BZ9sB.js";import"./GridLegacy-DjuTwKx6.js";import"./ResearchProjectForm-Beepl-HM.js";import"./TextFieldWithWordLimit-BOpYGODC.js";import"./AuthenticatedRequirement-BzJmKc1e.js";import"./CertificationRequirement-CPdzq7TC.js";import"./TwoFactorAuthEnabledRequirement-D49Ne2c4.js";import"./ValidationRequirement-Bqwk7cSZ.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-CHp2rZp7.js";import"./RejectDataAccessRequestModal-CjJ6waEi.js";import"./CannedRejectionDialog-DNGkOyVM.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-V6lMhXLs.js";import"./Checkbox-CcvRFkl_.js";import"./Grid-BOL_C7u3.js";import"./upperFirst-BNkDNCCk.js";import"./_stringToArray-D7WXxn2h.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,c,R;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const sr=["Demo","DemoError"];export{o as Demo,n as DemoError,sr as __namedExportsOrder,tr as default};
