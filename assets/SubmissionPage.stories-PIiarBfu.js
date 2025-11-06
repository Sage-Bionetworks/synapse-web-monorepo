import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-ynK1h1ZQ.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-rWPJiVbg.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-DTP6hhn2.js";import"./useAccessRequirements-C4PpsW1H.js";import"./index-B5clCFJM.js";import"./_baseOrderBy-C-pKnPpp.js";import"./_baseIteratee-f8KlzNwu.js";import"./_baseMap-D8G-5nF0.js";import"./_baseEach-BZDElJQx.js";import"./useQueries-DoP51xjB.js";import"./useInfiniteQuery-C_WgtIFm.js";import"./groupBy-5v3mL-Zq.js";import"./_createAggregator-DUyxouRk.js";import"./DialogBase-04kg5s93.js";import"./Close-BsDzgrCN.js";import"./HelpPopover-DR5Q4c37.js";import"./MarkdownPopover-Dyxx0IQ0.js";import"./LightTooltip-D_YZpsMa.js";import"./MarkdownSynapse-Cg823f1k.js";import"./SkeletonButton-Bwr03Ql7.js";import"./SkeletonInlineBlock-C3nmwKQa.js";import"./SkeletonTable-CyuXTNTX.js";import"./SkeletonParagraph-DikrQ7Cm.js";import"./EntityLink-Cus_9X4a.js";import"./useEntity-DkZNn0-6.js";import"./pickBy-BXzVzUst.js";import"./isString-Rq1Sw5tw.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-747MaeoS.js";import"./useGetEntityHeaders-DJqDbuWR.js";import"./EntityIcon-BYOCvPB0.js";import"./ErrorChip-CTPre5Cn.js";import"./Chip-9C2a3vCF.js";import"./UserOrTeamBadge-BCM0bza-.js";import"./UserBadge-Czj3y833.js";import"./MenuItem-AKaHxYJT.js";import"./Card-BdM9B7UJ.js";import"./TeamBadge-Bfx59cif.js";import"./UnmanagedACTAccessRequirementItem-6SHTJwMi.js";import"./RequirementItem-BuqCrLVa.js";import"./LockTwoTone-h2L7eHsX.js";import"./UserSearchBoxV2-W8ljJJsJ.js";import"./useDebouncedEffect-BJDhFDWg.js";import"./use-deep-compare-effect.esm-D95pMM68.js";import"./uniq-BBr-0w4l.js";import"./without-CH2SkLb2.js";import"./Select-aab027f3.esm-DBG4C-QL.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-leLSoqmG.js";import"./SelfSignAccessRequirementItem-sT_6xxR0.js";import"./DataAccessRequestAccessorsFilesForm-DoOcDVTt.js";import"./enums-DstKDIV6.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-ZCqDgrZf.js";import"./RadioGroup-T2WvEbiB.js";import"./Radio-BIA2EoV2.js";import"./SwitchBase-DQA_xSey.js";import"./FormGroup-MF1_z3Ph.js";import"./FormControlLabel-NofvAP8Q.js";import"./UploadDocumentField-DFgNuse3.js";import"./FileUpload-BTD6iT6y.js";import"./ManagedACTAccessRequirementFormWikiWrapper-klCImsV4.js";import"./GridLegacy-CLKFI2aP.js";import"./ResearchProjectForm-MHp3N8RY.js";import"./TextFieldWithWordLimit-sbxtoXNs.js";import"./AuthenticatedRequirement-D59LyOfZ.js";import"./CertificationRequirement-BJNARWh2.js";import"./TwoFactorAuthEnabledRequirement-DLNCXShB.js";import"./ValidationRequirement-Dasy2ztt.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-BRsQCVHj.js";import"./RejectDataAccessRequestModal-B2cCBTag.js";import"./CannedRejectionDialog-CfKYvY3b.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-_5j4EqxQ.js";import"./Checkbox-CGzkhN5U.js";import"./Grid-BiX0S-HB.js";import"./upperFirst-BXuYoGXH.js";import"./_stringToArray-DqW96nDH.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
