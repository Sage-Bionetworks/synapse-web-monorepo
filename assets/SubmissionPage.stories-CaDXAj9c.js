import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-CGmVaDjG.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-yZuFK8IR.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-Ciwv7a9U.js";import"./useAccessRequirements-C0SSXLcr.js";import"./index-Bg4ai4NK.js";import"./_baseOrderBy-Be7RxQsn.js";import"./_baseIteratee-BT9JeoLs.js";import"./_baseMap-CrED9mcW.js";import"./_baseEach--X6tDxan.js";import"./useQueries-CFH4mD9S.js";import"./useInfiniteQuery-BOwZO-RU.js";import"./groupBy-CIWb25ff.js";import"./_createAggregator-oVImNT1C.js";import"./DialogBase-B3tdGTOA.js";import"./Close-lxYenFCK.js";import"./HelpPopover-2nxZPXpX.js";import"./MarkdownPopover-aHrxZUZD.js";import"./LightTooltip-ClWSh7qk.js";import"./MarkdownSynapse-V28WkNFd.js";import"./SkeletonButton-B4_njZrh.js";import"./SkeletonInlineBlock-DlR8y1uS.js";import"./SkeletonTable-DNeEDdIn.js";import"./SkeletonParagraph-Dm_x6xws.js";import"./EntityLink-D2xMk1zW.js";import"./useEntity-C8fikiZk.js";import"./pickBy-AOueuh4I.js";import"./isString-C-CuymGI.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CjqpIW6e.js";import"./useGetEntityHeaders-BLUzSDiz.js";import"./EntityIcon-BRP5I-Jm.js";import"./ErrorChip-Bf0hLM77.js";import"./Chip-DOrw28hN.js";import"./UserOrTeamBadge-CKyTzICL.js";import"./UserBadge-CNPQXBDq.js";import"./MenuItem-UENhvr4V.js";import"./Card-C00TRiyT.js";import"./TeamBadge-Dwsl-e-x.js";import"./UnmanagedACTAccessRequirementItem-3lNOIMJv.js";import"./RequirementItem-C_ZgEgx_.js";import"./LockTwoTone-D7IU0Ny9.js";import"./UserSearchBoxV2-DcEPiNLx.js";import"./useDebouncedEffect-BZA07H5D.js";import"./use-deep-compare-effect.esm-Bn3xhF-Y.js";import"./uniq-Dn33WZe4.js";import"./without-qPi_5CI2.js";import"./Select-aab027f3.esm-DPLoXPSl.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-Csb839Gr.js";import"./SelfSignAccessRequirementItem-CPGiBj8f.js";import"./DataAccessRequestAccessorsFilesForm-BOgm0XzM.js";import"./enums-vrlnAVl0.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-BGklvKov.js";import"./RadioGroup-eyh6FLOG.js";import"./Radio-BkWttgZH.js";import"./SwitchBase-D6wTm3P4.js";import"./FormGroup-C_dHKml8.js";import"./FormControlLabel-BNCF-8vF.js";import"./UploadDocumentField-d7sr879n.js";import"./FileUpload-CkXb-d-4.js";import"./ManagedACTAccessRequirementFormWikiWrapper-yCpCHKay.js";import"./GridLegacy-Bz7Cwig5.js";import"./ResearchProjectForm-Bd2HNKKT.js";import"./TextFieldWithWordLimit-Cdw-47Nh.js";import"./AuthenticatedRequirement-BRBualuo.js";import"./CertificationRequirement-3IKpJZqe.js";import"./TwoFactorAuthEnabledRequirement-BF_TY0ky.js";import"./ValidationRequirement-xzEBDPz-.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-pex-w02v.js";import"./RejectDataAccessRequestModal-CRQ9Quin.js";import"./CannedRejectionDialog-Bk-zLj3l.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-Be0gJysx.js";import"./Checkbox-BhWQu0Q_.js";import"./Grid-CUFsX9EA.js";import"./upperFirst-D1DwhQPe.js";import"./_stringToArray-Ceff9hT9.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
