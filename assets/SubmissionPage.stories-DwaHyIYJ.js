import{g as u,k as d,n as t,a1 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-BnwOOxVB.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CEP1EeFV.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BcQkOTD6.js";import"./useAccessRequirements-DZU0KuhL.js";import"./index-BWFWUV0I.js";import"./_baseOrderBy-EvR_akUg.js";import"./_baseIteratee-B9myDPIW.js";import"./_baseMap-Bsco3WZ-.js";import"./_baseEach-D1jaI2sf.js";import"./useInfiniteQuery-1s6_iIB7.js";import"./groupBy-DJwySWhB.js";import"./_createAggregator-B1rZ7wFB.js";import"./DialogBase-Dbn_HhWz.js";import"./Close-DsW9lEMH.js";import"./HelpPopover-f6Y-8lBt.js";import"./MarkdownPopover-dEsnVknt.js";import"./LightTooltip-BKLx-2zI.js";import"./MarkdownSynapse-CudWy8rb.js";import"./SkeletonButton-Cx1YwYzw.js";import"./SkeletonInlineBlock-CZWtZtay.js";import"./SkeletonTable-Dk7rdMrJ.js";import"./SkeletonParagraph-Bx2C1bW5.js";import"./EntityLink-Dvyvye-H.js";import"./useEntity-UkRqMMHl.js";import"./pickBy-Bjj4ZDBL.js";import"./isString-okp__rGt.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DuqX2qT_.js";import"./useGetEntityHeaders-BMZfaAWz.js";import"./EntityIcon-D4FtD9Jt.js";import"./ErrorChip-C7WG5rED.js";import"./Chip-B5d3JXK1.js";import"./UserOrTeamBadge-sgJ036Xk.js";import"./UserBadge-CqwZjHo1.js";import"./useUserBundle-DzFa2F0q.js";import"./MenuItem-DUMDRQOA.js";import"./Card-Dxpi6uBT.js";import"./TeamBadge-ChW0ghnZ.js";import"./UnmanagedACTAccessRequirementItem-CEbsmP_W.js";import"./RequirementItem-BaRlRo9I.js";import"./LockTwoTone-id6_RTtm.js";import"./UserSearchBoxV2-BHo-abXU.js";import"./useDebouncedEffect-ClluEaXj.js";import"./use-deep-compare-effect.esm-EqALDLgs.js";import"./uniq-D2uxdsYI.js";import"./without-BH-2tddu.js";import"./Select-aab027f3.esm-Dlq9pVOt.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CHQm5_B1.js";import"./SelfSignAccessRequirementItem-TQBZPKi2.js";import"./DataAccessRequestAccessorsFilesForm-Dlso2A3v.js";import"./enums-DGvLMIIN.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BZ1mxQnF.js";import"./RadioGroup-DsPF9R7X.js";import"./Radio-BHVGZsLz.js";import"./SwitchBase-D_8PvPPY.js";import"./FormGroup-BEFnzhFq.js";import"./FormControlLabel-D9xAaYtM.js";import"./UploadDocumentField-BhRG2a-2.js";import"./FileUpload-CpxTXDKT.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CTgXyPmY.js";import"./GridLegacy-NyhYAy9U.js";import"./ResearchProjectForm-iNedeBe3.js";import"./TextFieldWithWordLimit-DowzvM3V.js";import"./AuthenticatedRequirement-C_PIwa46.js";import"./CertificationRequirement-NWXyIvax.js";import"./TwoFactorAuthEnabledRequirement-CBQI9C48.js";import"./ValidationRequirement-Crg2x-jW.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-D6m1EjEo.js";import"./RejectDataAccessRequestModal-9ETOrMuj.js";import"./CannedRejectionDialog-D7ilaLiS.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BdmzWONJ.js";import"./Checkbox-Pl8JmO1l.js";import"./Grid-Dn3yFbHq.js";import"./upperFirst-s0sM1KMp.js";import"./_stringToArray-txMy1f-q.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
