import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-Pdm4gHko.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-ALBawPjC.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BFeuYfMU.js";import"./useAccessRequirements-DQCeO1Vk.js";import"./index-DFJ7Q3Tb.js";import"./_baseOrderBy-B7lLgH_2.js";import"./_baseIteratee-CHs1BNVw.js";import"./_baseMap-q97RKbZV.js";import"./_baseEach-Br-2w81B.js";import"./useQueries-CgvL72Zk.js";import"./useInfiniteQuery-B29qh585.js";import"./groupBy-6DAwTZH8.js";import"./_createAggregator-wgYNPvjm.js";import"./DialogBase-bF1STKBD.js";import"./Close-B5qXrF4s.js";import"./HelpPopover-DyzmZgtg.js";import"./MarkdownPopover-D9mZ0BlU.js";import"./LightTooltip-DYCkK4-y.js";import"./MarkdownSynapse-CRRjtehd.js";import"./SkeletonButton-KgZa_W_5.js";import"./SkeletonInlineBlock-DSI3AO38.js";import"./SkeletonTable-C47tnEUn.js";import"./SkeletonParagraph-DMN2Qcp6.js";import"./EntityLink-Do1sFQFM.js";import"./useEntity-CXbuQxWB.js";import"./pickBy-VwrgkaVz.js";import"./isString-CeqJC2jy.js";import"./useSuspenseQuery-2zOEkQmi.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-8acn-Ujm.js";import"./useGetEntityHeaders-CDk0qYYY.js";import"./EntityIcon-CXrTKmKE.js";import"./ErrorChip-BMqeVg8w.js";import"./Chip-D7Y4i0b0.js";import"./UserOrTeamBadge-BmPep3Uj.js";import"./UserBadge-wxpXkL3B.js";import"./useUserBundle-Bz1L6r6d.js";import"./MenuItem-D1_ZdkN0.js";import"./Card-C6gQHDcr.js";import"./TeamBadge-DnCwEZjc.js";import"./UnmanagedACTAccessRequirementItem-DDiNkKFL.js";import"./RequirementItem-CruGv34J.js";import"./LockTwoTone-BH7BPz-n.js";import"./UserSearchBoxV2-Dql8wmhI.js";import"./useDebouncedEffect-ALzozL4j.js";import"./use-deep-compare-effect.esm-Dxp9kEaT.js";import"./uniq-D1wwJhoZ.js";import"./without-DeZ9_D_G.js";import"./Select-aab027f3.esm-C6zoKCc-.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-Ch_aWJ76.js";import"./SelfSignAccessRequirementItem-CZNPDqI9.js";import"./DataAccessRequestAccessorsFilesForm-C-YZtDgv.js";import"./enums-C-KKPbSK.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CYnPKwQA.js";import"./RadioGroup-Cu8Y-DyW.js";import"./Radio-DcH-1h8U.js";import"./SwitchBase-D80GrcEk.js";import"./FormGroup-GrToRjoO.js";import"./FormControlLabel-HPR0Le7Z.js";import"./UploadDocumentField-Ci_lxJrz.js";import"./FileUpload-DUcXT-hV.js";import"./ManagedACTAccessRequirementFormWikiWrapper-_M0qVKtF.js";import"./GridLegacy-BpE5LebZ.js";import"./ResearchProjectForm-D73bM3aS.js";import"./TextFieldWithWordLimit-bZ_sV7in.js";import"./AuthenticatedRequirement-CYfetVCa.js";import"./CertificationRequirement-JVeUB7QH.js";import"./TwoFactorAuthEnabledRequirement-CrmUYaU4.js";import"./ValidationRequirement-BrBwh_qA.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-C6-yoFVe.js";import"./RejectDataAccessRequestModal-CsRL-QYM.js";import"./CannedRejectionDialog-kp-4cR3o.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-ewD4gxwv.js";import"./Checkbox-sjZ3Zt0Q.js";import"./Grid-BhJcUTyz.js";import"./upperFirst-BFlvU_Dv.js";import"./_stringToArray-CXA9Joek.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
