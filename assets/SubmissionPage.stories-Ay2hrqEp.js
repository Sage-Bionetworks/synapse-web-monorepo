import{g as u,k as d,n as t,a1 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-D7hmFFD3.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DGSX0QOS.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BgCIgvOP.js";import"./useAccessRequirements-B_xJJQtS.js";import"./index-DkPQYPLq.js";import"./_baseOrderBy-pC3KBgwM.js";import"./_baseIteratee-FZWzk7ua.js";import"./_baseMap-DsRa866f.js";import"./_baseEach-CLfxsE0k.js";import"./useInfiniteQuery-D13lTl67.js";import"./groupBy-Ch89fRwz.js";import"./_createAggregator-5KCvto1w.js";import"./DialogBase-C0-vtQvS.js";import"./Close-1n6W943I.js";import"./HelpPopover-B0CLm-hu.js";import"./MarkdownPopover-BlNh2jNC.js";import"./LightTooltip-C6WNo1mK.js";import"./MarkdownSynapse-BOtk1yaV.js";import"./SkeletonButton-BRppMIVv.js";import"./SkeletonInlineBlock-J2_tfC8B.js";import"./SkeletonTable-DwOxfj-6.js";import"./SkeletonParagraph-RrPVfHxb.js";import"./EntityLink-DErDjde5.js";import"./useEntity-BePhXUWF.js";import"./pickBy-LPS-KT0v.js";import"./isString-D59s40uV.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Dh9OE1lF.js";import"./useGetEntityHeaders-BNZJGxiH.js";import"./EntityIcon-DUuayhaf.js";import"./ErrorChip-D4QmuqJ8.js";import"./Chip-CwHKBceN.js";import"./UserOrTeamBadge-DhkRd2TB.js";import"./UserBadge-Ba74d-w4.js";import"./useUserBundle-DevMQvcY.js";import"./MenuItem-seRjpzQC.js";import"./Card-CUtKvHak.js";import"./TeamBadge-DRtca3gu.js";import"./UnmanagedACTAccessRequirementItem-CsYc7b1Q.js";import"./RequirementItem-D6Zw840x.js";import"./LockTwoTone-BtmRpgf1.js";import"./UserSearchBoxV2-pzLFwmAF.js";import"./useDebouncedEffect-CGbyTEUz.js";import"./use-deep-compare-effect.esm-D5U3OuuB.js";import"./uniq-BXe1zYGf.js";import"./without-BhOOg42B.js";import"./Select-aab027f3.esm-EDX_gZZ3.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DR75Dx1Q.js";import"./SelfSignAccessRequirementItem-HTeYpmLm.js";import"./DataAccessRequestAccessorsFilesForm-vDUhpZbI.js";import"./enums-DO_i19JF.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CI2jXzIK.js";import"./RadioGroup-BRU02pdl.js";import"./Radio-7ytErKIW.js";import"./SwitchBase-Dm2o857r.js";import"./FormGroup-dabxZ4lF.js";import"./FormControlLabel-DsGvY4MC.js";import"./UploadDocumentField-DEoeFlpj.js";import"./FileUpload-ChPVVl-c.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BxTJocrM.js";import"./GridLegacy-EKANE37v.js";import"./ResearchProjectForm-CeedqpPh.js";import"./TextFieldWithWordLimit-D4GlY2vI.js";import"./AuthenticatedRequirement-Cu49MZh1.js";import"./CertificationRequirement-B1Pai1QI.js";import"./TwoFactorAuthEnabledRequirement-mj-ilysV.js";import"./ValidationRequirement-UXm7k_9M.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Cu56sZ1s.js";import"./RejectDataAccessRequestModal-5eu41eET.js";import"./CannedRejectionDialog-DzBV3N-X.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-D56eSZEC.js";import"./Checkbox-DmdgFLw0.js";import"./Grid-ByKjz8_y.js";import"./upperFirst-DtM51xSN.js";import"./_stringToArray-CL0GOyZg.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
