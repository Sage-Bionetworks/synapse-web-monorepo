import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-xpHBgFEc.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-CZhbOdkj.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-CLF4DqVf.js";import"./useAccessRequirements-39kPeKci.js";import"./index-BoBV2uWn.js";import"./_baseOrderBy-CrhkdzKR.js";import"./_baseIteratee-BIO8AyhS.js";import"./_baseMap-BaEDqoU1.js";import"./_baseEach-C4WWxFSA.js";import"./useQueries-BVu644GY.js";import"./useInfiniteQuery-BSZWHFvd.js";import"./groupBy-BZjl3WtS.js";import"./_createAggregator-91kNP6C4.js";import"./DialogBase-pgJ5o4Zt.js";import"./Close-5t4oWx4m.js";import"./HelpPopover-DCjpPdCE.js";import"./MarkdownPopover-dZJj-Vn5.js";import"./LightTooltip-BDDa2W0x.js";import"./MarkdownSynapse-BeCorgwC.js";import"./SkeletonButton-CHbgpEXP.js";import"./SkeletonInlineBlock-C-Vahxr2.js";import"./SkeletonTable-DHFbt_t8.js";import"./SkeletonParagraph-DAmn3J9_.js";import"./EntityLink-DoxiVK4d.js";import"./useEntity-CEMG6RUi.js";import"./pickBy-93Wpj6Up.js";import"./isString-BLHDc7zN.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Db3f-vFZ.js";import"./useGetEntityHeaders-hTJOvO-c.js";import"./EntityIcon-BkuUdWvD.js";import"./ErrorChip-DDnCnD8V.js";import"./Chip-D2WSSidr.js";import"./UserOrTeamBadge-BbLGWKyo.js";import"./UserBadge-DtVpsyNz.js";import"./MenuItem-B4u3b55B.js";import"./Card-DQNmpKVl.js";import"./TeamBadge-Dm-rJBM6.js";import"./UnmanagedACTAccessRequirementItem-aPFjY2VB.js";import"./RequirementItem-u3ha9Bd_.js";import"./LockTwoTone-KczrAgMX.js";import"./UserSearchBoxV2-BgvY7qVU.js";import"./useDebouncedEffect-C4G_c8Up.js";import"./use-deep-compare-effect.esm-Dh278jXm.js";import"./uniq-Biveekez.js";import"./without-CoQ23RBQ.js";import"./Select-aab027f3.esm-Bn-MJVs_.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-CfyYfzUL.js";import"./SelfSignAccessRequirementItem-DLi1X-I0.js";import"./DataAccessRequestAccessorsFilesForm-C9T6zS3z.js";import"./enums-BhPQTI61.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-Clx0ggc3.js";import"./RadioGroup-cx-nRxwk.js";import"./Radio-CaNYmFcL.js";import"./SwitchBase-xBoziYLh.js";import"./FormGroup-CYs1fh9V.js";import"./FormControlLabel-BeibZz3B.js";import"./UploadDocumentField-Di0Mehpc.js";import"./FileUpload-BFSYfnvD.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DWjKBVpZ.js";import"./GridLegacy-DhGK4Lgt.js";import"./ResearchProjectForm-pxqWi1p4.js";import"./TextFieldWithWordLimit-DqtXFP8Y.js";import"./AuthenticatedRequirement-DAerB81m.js";import"./CertificationRequirement-DOJB-qoS.js";import"./TwoFactorAuthEnabledRequirement-Be15yV-F.js";import"./ValidationRequirement-HhZ6H2LN.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-0ZG8USip.js";import"./RejectDataAccessRequestModal-JRknvvkt.js";import"./CannedRejectionDialog-CP4-Vy40.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-CwyDjVHU.js";import"./Checkbox-CN_U6AfU.js";import"./Grid-DyLwKXY1.js";import"./upperFirst-B3CB779g.js";import"./_stringToArray-CxYL73_R.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
