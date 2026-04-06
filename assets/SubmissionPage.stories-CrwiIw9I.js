import{z as d,b as e,o as u,s,kp as i,kq as c,H as t,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-Dh1-Bj9i.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CjMLbW4Q.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-B9R_pSKN.js";import"./useAccessRequirements-DucLZ6v-.js";import"./index-DA_VxtNU.js";import"./_baseOrderBy-BCuRUHAk.js";import"./_baseIteratee-CuoQlIYx.js";import"./_baseMap-GDF1xtgf.js";import"./_baseEach-OMUz4HGL.js";import"./useInfiniteQuery-CKi0ZKKC.js";import"./groupBy-CRQuNfSl.js";import"./_createAggregator-htRdNyE1.js";import"./DialogBase-Cs4R-zR2.js";import"./Close-D_7cgIwF.js";import"./HelpPopover-DkPOfTbO.js";import"./MarkdownPopover-D5SjgShk.js";import"./LightTooltip-DzvAkcfH.js";import"./MarkdownSynapse-IvCz3QWr.js";import"./SkeletonButton-C-IErnIc.js";import"./SkeletonInlineBlock-D9o-fuxy.js";import"./SkeletonTable-nkHHAelC.js";import"./SkeletonParagraph-Cbgp8OCT.js";import"./EntityLink-Br0YMoIx.js";import"./useEntity-BLDKE0cv.js";import"./pickBy-QrfkUTe_.js";import"./isString-BV1mrbKX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-83B7KXq6.js";import"./useGetEntityHeaders-CbKI9awj.js";import"./EntityIcon-4deVTKD-.js";import"./ErrorChip-Bwftuvzp.js";import"./Chip-D6-vR_S7.js";import"./UserOrTeamBadge-BVyaEq4-.js";import"./UserBadge-awlVBRBe.js";import"./useUserBundle-BOEHsSlJ.js";import"./MenuItem-DcI11cWZ.js";import"./Card-C6ntjiwM.js";import"./TeamBadge-B9E97fk-.js";import"./UnmanagedACTAccessRequirementItem-eClL2_Sh.js";import"./RequirementItem-oC2OXbxk.js";import"./LockTwoTone-CwWnIoh8.js";import"./ManagedACTAccessRequirementItemView-C4nFh-Op.js";import"./SelfSignAccessRequirementItem-DH4GweVC.js";import"./DataAccessRequestAccessorsFilesForm-BY2lQ29j.js";import"./enums-BjZlLncQ.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-FWSIKTRg.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-BeP-ZF_o.js";import"./UserSearchBox-XN_9fZn7.js";import"./useDebouncedEffect-DAVceLl-.js";import"./Autocomplete-DO5n1YAS.js";import"./usePreviousProps-jW-nUEeZ.js";import"./RadioGroup-CKZJHyE_.js";import"./Radio-BVOqVJjD.js";import"./SwitchBase-C1MmJwCG.js";import"./FormGroup-9fyIdxBc.js";import"./FormControlLabel-CYMNTndx.js";import"./UploadDocumentField-DErt4Dxf.js";import"./FileUpload-D6udUPgy.js";import"./ManagedACTAccessRequirementFormWikiWrapper-C_3HP5YY.js";import"./GridLegacy-DN66YdV6.js";import"./ResearchProjectForm-CkkzOT6Q.js";import"./TextFieldWithWordLimit-CiuAl4qJ.js";import"./AuthenticatedRequirement-BwlFKOVi.js";import"./CertificationRequirement-Ff3b3QEu.js";import"./TwoFactorAuthEnabledRequirement-y9X9h3wn.js";import"./ValidationRequirement-BUQ_fZtO.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Cu-b9zvQ.js";import"./RejectDataAccessRequestModal-ooK_D3sU.js";import"./CannedRejectionDialog-D0OZH3m8.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-Dy9AxfBp.js";import"./Checkbox-dmGiqlJj.js";import"./Grid-DVy6KkU3.js";import"./upperFirst-B-YhHOdv.js";import"./_stringToArray-BhltlimQ.js";const Le={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const xe=["Demo","DemoError"];export{o as Demo,n as DemoError,xe as __namedExportsOrder,Le as default};
