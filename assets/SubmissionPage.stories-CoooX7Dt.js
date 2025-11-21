import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-mGy2Wk6y.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-BVBd1P8L.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-D7oYhpYa.js";import"./useAccessRequirements-CIhqrsCU.js";import"./index-DiAJBedM.js";import"./_baseOrderBy-D6MmP28J.js";import"./_baseIteratee-B87rLCNJ.js";import"./_baseMap-CbP99YWG.js";import"./_baseEach-CDQIHyBg.js";import"./useQueries-DkOcIflI.js";import"./useInfiniteQuery-BfuuwBv9.js";import"./groupBy-DKmpt1Lj.js";import"./_createAggregator-CnAvzjW4.js";import"./DialogBase-Cu5joM36.js";import"./Close-DxD9H32T.js";import"./HelpPopover-CiiiUNoD.js";import"./MarkdownPopover-BSD3N8yp.js";import"./LightTooltip-CLAvFJUE.js";import"./MarkdownSynapse-BKRl9ICh.js";import"./SkeletonButton-D8FF59H8.js";import"./SkeletonInlineBlock-DsW0TT6X.js";import"./SkeletonTable-kLNdUUmz.js";import"./SkeletonParagraph-D3sTCCy6.js";import"./EntityLink-Uefo_eiG.js";import"./useEntity-CTXea8wh.js";import"./pickBy-FREIJ5sY.js";import"./isString-Drlyh7OZ.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DSEth7sM.js";import"./useGetEntityHeaders-B5FENZ26.js";import"./EntityIcon-Kin0xhEJ.js";import"./ErrorChip-E9UKoNpI.js";import"./Chip-DXX-HH6K.js";import"./UserOrTeamBadge-CLwUsqyQ.js";import"./UserBadge-lp_r4Ou3.js";import"./MenuItem-OonJkNvT.js";import"./Card-cHjfB50w.js";import"./TeamBadge-XHZ0_9yj.js";import"./UnmanagedACTAccessRequirementItem-Ba-rSiUi.js";import"./RequirementItem-D1sSv5zk.js";import"./LockTwoTone-BUt3ZyRn.js";import"./UserSearchBoxV2-Colvet46.js";import"./useDebouncedEffect-CTIgbBih.js";import"./use-deep-compare-effect.esm-C-7vAf0E.js";import"./uniq-owFX0wPL.js";import"./without-DNzz54Gy.js";import"./Select-aab027f3.esm-C1vwSAwn.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-BfdHvZKV.js";import"./SelfSignAccessRequirementItem-ByZFIhfI.js";import"./DataAccessRequestAccessorsFilesForm-DcbLzzlS.js";import"./enums-CTzhWsRl.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-tqV4VT2I.js";import"./RadioGroup-aHpcKJ0n.js";import"./Radio-CBX5G-09.js";import"./SwitchBase-0JJlcDJX.js";import"./FormGroup-D09-Bt8f.js";import"./FormControlLabel-w7O-liTB.js";import"./UploadDocumentField-p1we47Yb.js";import"./FileUpload-Bu_9Kg-f.js";import"./ManagedACTAccessRequirementFormWikiWrapper-YWgIeVpl.js";import"./GridLegacy-C_b13dml.js";import"./ResearchProjectForm-Bu12XBMb.js";import"./TextFieldWithWordLimit-4sOLUHYw.js";import"./AuthenticatedRequirement-DkMQuS7F.js";import"./CertificationRequirement-CVts95-g.js";import"./TwoFactorAuthEnabledRequirement-kL45YUuJ.js";import"./ValidationRequirement-C-G3_E8u.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-BohWk83a.js";import"./RejectDataAccessRequestModal-DfGNnzL_.js";import"./CannedRejectionDialog-BjWsUa7f.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-Ca4CsGOZ.js";import"./Checkbox-U16cDoFV.js";import"./Grid-DHByANVC.js";import"./upperFirst-GKXqjdlS.js";import"./_stringToArray-BlC1MlqJ.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
