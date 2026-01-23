import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,ks as i,kt as E,H as s,ku as _,p as m,kv as I,kw as S,kb as O}from"./iframe-C7rwSIbr.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DY0M19Bw.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BRIKNwgh.js";import"./useAccessRequirements-CDGfE6As.js";import"./index-Di-Cz18U.js";import"./_baseOrderBy-B3i1xKb7.js";import"./_baseIteratee-RvX3gnAq.js";import"./_baseMap-DlS14YDy.js";import"./_baseEach-B7tQAwJE.js";import"./useQueries-Ch1NNzV5.js";import"./useInfiniteQuery-B_4JrFtn.js";import"./groupBy-hVp1ZO68.js";import"./_createAggregator-RZ7ifyTG.js";import"./DialogBase-BuNrYOj6.js";import"./Close-DPgD_Lcy.js";import"./HelpPopover-D7lY4hER.js";import"./MarkdownPopover-DNfQ1GsD.js";import"./LightTooltip-CBY_GmRv.js";import"./MarkdownSynapse-C_a4bb2e.js";import"./SkeletonButton-5OEfN7I-.js";import"./SkeletonInlineBlock-9crGgDl7.js";import"./SkeletonTable-Dj6LF7El.js";import"./SkeletonParagraph-DljX6hdA.js";import"./EntityLink--Nx1-4VJ.js";import"./useEntity-CKCkIYWj.js";import"./pickBy-xqbS2Hav.js";import"./isString-D10AZ56B.js";import"./useSuspenseQuery-SFMk3h0j.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CWXhfopj.js";import"./useGetEntityHeaders-YKg_s5gg.js";import"./EntityIcon-ClsdALgC.js";import"./ErrorChip-B3ETCfTQ.js";import"./Chip-CdXxtxxp.js";import"./UserOrTeamBadge-BMtKaCno.js";import"./UserBadge-DIVA4wpA.js";import"./useUserBundle-pxWWzqzb.js";import"./MenuItem-GxwqXfxd.js";import"./Card-B6N2Lo5X.js";import"./TeamBadge-BqM7WgXA.js";import"./UnmanagedACTAccessRequirementItem-DPeZmlNr.js";import"./RequirementItem-BUTchHp6.js";import"./LockTwoTone-DTD_oLZ1.js";import"./UserSearchBoxV2-DxIhjRAV.js";import"./useDebouncedEffect-1GohcXtG.js";import"./use-deep-compare-effect.esm-0TBSbA1r.js";import"./uniq-CuRUC0sc.js";import"./without-B3B-Xyvk.js";import"./Select-aab027f3.esm-C_Z_0jsj.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-C7mWzAKZ.js";import"./SelfSignAccessRequirementItem-BpTDjnn8.js";import"./DataAccessRequestAccessorsFilesForm-DNQE6tjO.js";import"./enums-CXGwG4Vy.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-Dxc7Wy7e.js";import"./RadioGroup-BNh3afxN.js";import"./Radio-B1QfFUuf.js";import"./SwitchBase-CdhWNWQs.js";import"./FormGroup-DlnhovkY.js";import"./FormControlLabel-BfYoWgTN.js";import"./UploadDocumentField-lmLrIvu6.js";import"./FileUpload-EZ4sL6kb.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BJIHgGmF.js";import"./GridLegacy-BH_zNaZx.js";import"./ResearchProjectForm-xlv3Gc4Y.js";import"./TextFieldWithWordLimit-MWzDQ36s.js";import"./AuthenticatedRequirement-DfKfH7Zx.js";import"./CertificationRequirement-V4DCeudx.js";import"./TwoFactorAuthEnabledRequirement-BPubSMqr.js";import"./ValidationRequirement-Ct7IE0DI.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-K7r6p0fm.js";import"./RejectDataAccessRequestModal-DvAlnt8l.js";import"./CannedRejectionDialog-zCKnHUFt.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Cjq7hfr8.js";import"./Checkbox-F7R52Ayc.js";import"./Grid-Chh7U9I0.js";import"./upperFirst-BgVK01UZ.js";import"./_stringToArray-Ddz3XlK6.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Xe=["Demo","DemoError"];export{o as Demo,n as DemoError,Xe as __namedExportsOrder,ze as default};
