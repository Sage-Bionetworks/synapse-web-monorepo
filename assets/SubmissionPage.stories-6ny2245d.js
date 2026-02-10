import{g as u,k as d,n as t,a3 as c,e0 as R,b as e,ku as i,kv as E,H as s,kw as _,p as m,kx as I,ky as S,kd as O}from"./iframe-C80DNIXY.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-4xUV8fah.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Q--OvMZZ.js";import"./useAccessRequirements-Bjdl36fC.js";import"./index-Bee01HS_.js";import"./_baseOrderBy-DqQOHAJE.js";import"./_baseIteratee-CmYeUqfJ.js";import"./_baseMap-eSh9iFHA.js";import"./_baseEach-DUUo9Nf8.js";import"./useQueries-BaRURQgG.js";import"./useInfiniteQuery-4baG4-hB.js";import"./groupBy-nIO_S1M6.js";import"./_createAggregator-BAmkPOkH.js";import"./DialogBase-Cay5tgui.js";import"./Close-BuMywD3y.js";import"./HelpPopover-BipFBkNI.js";import"./MarkdownPopover-B07suYMP.js";import"./LightTooltip-DMhSxq7g.js";import"./MarkdownSynapse-DKqR68s3.js";import"./SkeletonButton-uDijPjPz.js";import"./SkeletonInlineBlock-DqQYipf9.js";import"./SkeletonTable-WwsVDHsD.js";import"./SkeletonParagraph-nOvV6g22.js";import"./EntityLink-BJZce3Hh.js";import"./useEntity-BFq9en9A.js";import"./pickBy-C1JTeSPX.js";import"./isString-lbmFIYbF.js";import"./useSuspenseQuery-CqybcQ2J.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CzveUUhX.js";import"./useGetEntityHeaders-CwVj1QcI.js";import"./EntityIcon-AJpP8A_P.js";import"./ErrorChip-CZQXgjbD.js";import"./Chip-BVUqKial.js";import"./UserOrTeamBadge-C70J9loF.js";import"./UserBadge-B9rGk1Ik.js";import"./useUserBundle-Ck2w6lrW.js";import"./MenuItem-DX3jCWRl.js";import"./Card-CmWYd_mM.js";import"./TeamBadge-AVJEQmDD.js";import"./UnmanagedACTAccessRequirementItem-DyZW-a1P.js";import"./RequirementItem-DzSVs1sG.js";import"./LockTwoTone-hGFTP-hf.js";import"./UserSearchBoxV2-spPxYNEM.js";import"./useDebouncedEffect-D1xvaNwI.js";import"./use-deep-compare-effect.esm-CoyZ24TJ.js";import"./uniq-CP9CCD-y.js";import"./without-BTq4Rjy7.js";import"./Select-aab027f3.esm-BeiepPeR.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-Bi9zsowi.js";import"./SelfSignAccessRequirementItem-mo6UpHUL.js";import"./DataAccessRequestAccessorsFilesForm-CgPjIEE5.js";import"./enums-DE5QfU55.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CJsQbtVG.js";import"./RadioGroup-CWYSDWxU.js";import"./Radio-QzUPD6c3.js";import"./SwitchBase-CINz3Fhr.js";import"./FormGroup-CYXXK9KG.js";import"./FormControlLabel-BStBW8z5.js";import"./UploadDocumentField-CFfvCkEb.js";import"./FileUpload-SWA-4ixI.js";import"./ManagedACTAccessRequirementFormWikiWrapper-tZuW6jbC.js";import"./GridLegacy-DiH3N7gN.js";import"./ResearchProjectForm-D_Cdd-0l.js";import"./TextFieldWithWordLimit-CqnjDiUo.js";import"./AuthenticatedRequirement-BefgTsry.js";import"./CertificationRequirement-DCyFC0w-.js";import"./TwoFactorAuthEnabledRequirement-Dhu5lqDl.js";import"./ValidationRequirement-C6dAYiGw.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-v_WKzP5T.js";import"./RejectDataAccessRequestModal-DPb1nHIW.js";import"./CannedRejectionDialog-CTW7CRdW.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-C9JPgHed.js";import"./Checkbox-AtJt6d_0.js";import"./Grid-CZssvg8x.js";import"./upperFirst-CxdBkPgI.js";import"./_stringToArray-Qhdj9Se1.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
