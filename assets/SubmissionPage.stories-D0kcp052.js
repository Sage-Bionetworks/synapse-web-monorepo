import{g as u,k as d,n as t,a3 as c,dP as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-CCrcZxgU.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CMXZtR72.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CPeo7zeS.js";import"./useAccessRequirements-BQdyOVUc.js";import"./index-DOETxQEh.js";import"./_baseOrderBy-D6U9sUP-.js";import"./_baseIteratee-DKTdiFzP.js";import"./_baseMap-BMwtKdev.js";import"./_baseEach-w-ECc3U0.js";import"./useInfiniteQuery-1J2BPHjO.js";import"./groupBy-DamAuluv.js";import"./_createAggregator-C6ipTSht.js";import"./DialogBase-CeubuD3-.js";import"./Close-CM4W6Pks.js";import"./HelpPopover-BR72KBQJ.js";import"./MarkdownPopover-BZ4yirLT.js";import"./LightTooltip-BQGvE2MH.js";import"./MarkdownSynapse-FC1rcF9v.js";import"./SkeletonButton-BtsVrZX-.js";import"./SkeletonInlineBlock-D21wux6D.js";import"./SkeletonTable-Ba707JDB.js";import"./SkeletonParagraph--DCUjqtN.js";import"./EntityLink-Cpcten75.js";import"./useEntity-CaXvVkPm.js";import"./pickBy-LV4paVeK.js";import"./isString-Czclw4dB.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DIyq_LAQ.js";import"./useGetEntityHeaders-BOaYFX4g.js";import"./EntityIcon-BwxxXsXX.js";import"./ErrorChip-0bLbGXgm.js";import"./Chip-BosvP6Bi.js";import"./UserOrTeamBadge-BYvSduTj.js";import"./UserBadge-foBknIQ2.js";import"./useUserBundle-BX_9QzHX.js";import"./MenuItem-BOrJnNIc.js";import"./Card-B7y7fXMD.js";import"./TeamBadge-C1b2KqY0.js";import"./UnmanagedACTAccessRequirementItem-vWxv1XLu.js";import"./RequirementItem-CKKgtof-.js";import"./LockTwoTone-bxUU_wh_.js";import"./UserSearchBoxV2-DOTN9-Mx.js";import"./useDebouncedEffect-C8ke_a0a.js";import"./use-deep-compare-effect.esm-DIYMX9jp.js";import"./uniq-C5y9uiBh.js";import"./without-DvwL1Z7T.js";import"./Select-aab027f3.esm-CpiUxLQo.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-qDDyCFMx.js";import"./SelfSignAccessRequirementItem-Dyr6t074.js";import"./DataAccessRequestAccessorsFilesForm-vbSYEo7E.js";import"./enums-DoNvCV0y.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-HWywYMx0.js";import"./RadioGroup-Bf8ekqgl.js";import"./Radio-CGUhauwV.js";import"./SwitchBase-Bn9II5pr.js";import"./FormGroup-BmoqV3KF.js";import"./FormControlLabel-4WFQ0_kJ.js";import"./UploadDocumentField-BXaql8Oo.js";import"./FileUpload-Cr30G54m.js";import"./ManagedACTAccessRequirementFormWikiWrapper-C5dnMmyr.js";import"./GridLegacy-DqF10TWz.js";import"./ResearchProjectForm-CXoMAkWl.js";import"./TextFieldWithWordLimit-CVP004cu.js";import"./AuthenticatedRequirement-BK8JAmt9.js";import"./CertificationRequirement-GG1gUqN1.js";import"./TwoFactorAuthEnabledRequirement-Dheq4gcu.js";import"./ValidationRequirement-BuSVMxJZ.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CKlcuxWB.js";import"./RejectDataAccessRequestModal-B2wLiSo0.js";import"./CannedRejectionDialog-R8p5piIw.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-D414-GDQ.js";import"./Checkbox-CTa9HHu3.js";import"./Grid-BBptQ3XV.js";import"./upperFirst-BrU4mVeI.js";import"./_stringToArray-BloE5-Rr.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
