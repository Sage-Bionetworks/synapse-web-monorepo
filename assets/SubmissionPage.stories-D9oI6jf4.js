import{g as u,k as d,n as t,a3 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-C2kEGB7j.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Hr6DzLB0.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BBBQudtx.js";import"./useAccessRequirements-D2Lohtaq.js";import"./index-ZDojTcBs.js";import"./_baseOrderBy-DPXrhWwh.js";import"./_baseIteratee-5rUV_LX2.js";import"./_baseMap-0nIDTP6u.js";import"./_baseEach-mV2SNSx4.js";import"./useInfiniteQuery-7NJwUk3W.js";import"./groupBy-BQbAJvQ9.js";import"./_createAggregator-D7rn-Ost.js";import"./DialogBase-CW3j8lBK.js";import"./Close-zOC26mc8.js";import"./HelpPopover-CBvQB68Y.js";import"./MarkdownPopover-CcmAtHQ5.js";import"./LightTooltip-Bc96vcP5.js";import"./MarkdownSynapse-F7h7ulwU.js";import"./SkeletonButton-B3EXz-nP.js";import"./SkeletonInlineBlock-DfFg1BbM.js";import"./SkeletonTable-DkNCUEbr.js";import"./SkeletonParagraph-CzHkK7a_.js";import"./EntityLink-bKqmmRoK.js";import"./useEntity-D3-Hp30Z.js";import"./pickBy-Dzuflwg7.js";import"./isString-CogNup7E.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-VWT-RUCI.js";import"./useGetEntityHeaders-Dva_t2bS.js";import"./EntityIcon-DvAi7nXy.js";import"./ErrorChip-BTsU7pok.js";import"./Chip-C46utT-v.js";import"./UserOrTeamBadge-B-N9dgfz.js";import"./UserBadge-19izyROB.js";import"./useUserBundle-Jr5wF9rW.js";import"./MenuItem-BNHT0Gz0.js";import"./Card-p-At64Gf.js";import"./TeamBadge-BrdXVtv6.js";import"./UnmanagedACTAccessRequirementItem-DW9-ogjo.js";import"./RequirementItem-CULW-Dcw.js";import"./LockTwoTone-BtGjQkaJ.js";import"./UserSearchBoxV2-B3HZC-HK.js";import"./useDebouncedEffect-BdeAEjPj.js";import"./use-deep-compare-effect.esm-D0Q21txf.js";import"./uniq-C68Gwzxs.js";import"./without-BuHZ-Q7C.js";import"./Select-aab027f3.esm-C_7jEFe-.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CPf0O0vq.js";import"./SelfSignAccessRequirementItem-8Bzpx8L2.js";import"./DataAccessRequestAccessorsFilesForm-7wm-cbbw.js";import"./enums-Dz8tuVcS.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BW_qljaz.js";import"./RadioGroup-I_S8jWme.js";import"./Radio-BFY1N0l5.js";import"./SwitchBase-CwCVifNx.js";import"./FormGroup-TTNxP9Oz.js";import"./FormControlLabel-DWUczytV.js";import"./UploadDocumentField-Ds6evC6-.js";import"./FileUpload-k7P0stgh.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Jgk4x82z.js";import"./GridLegacy-BjziM31E.js";import"./ResearchProjectForm-DQhlYlKY.js";import"./TextFieldWithWordLimit-fI44UFwe.js";import"./AuthenticatedRequirement-BbQs-Yny.js";import"./CertificationRequirement-Dw4jHnKK.js";import"./TwoFactorAuthEnabledRequirement-DDYKuoCs.js";import"./ValidationRequirement-BIyOSjgR.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-B60Lm3_u.js";import"./RejectDataAccessRequestModal-CQT-6aPv.js";import"./CannedRejectionDialog-C3Z3EB6b.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BbdKEfo2.js";import"./Checkbox-CbGSUy_e.js";import"./Grid-Dx-wlIwj.js";import"./upperFirst-DFheI1lS.js";import"./_stringToArray-C7riWPKt.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
