import{j as D,p as e,S as s,E as B}from"./iframe-Ci1lmE8g.js";import{M as L}from"./MarkdownSynapse-3G1qoarh.js";import{M as x}from"./ManagedACTAccessRequirementItemView-CYbs5Fpo.js";import"./index-r8ZA1smB.js";import"./SkeletonButton-CC-6gNoS.js";import"./SkeletonInlineBlock-B2RYwmUI.js";import"./SkeletonTable-DkbE7er9.js";import"./SkeletonParagraph-ITJPOI8x.js";import"./RequirementItem-DP_I-Bz7.js";import"./LockTwoTone-CrK_l1K_.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,J={title:"Governance/Data Access Request Flow/Requirements/ManagedACTAccessRequirementItem",component:x,args:{accessRequirement:e,wikiPage:D.jsx(L,{markdown:`These are the AR instructions presented to the user.
1. Fill out this form
2. Wait a bit
3. We will give you access`}),isLoading:!1,onRejectTerms:m(),onRequestAccess:m(),onCancelDataAccessRequest:m(),cancelRequestIsPending:!1},tags:["autodocs"]},t={args:{accessRequirementStatus:{accessRequirementId:String(e.id),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!1}}},n={args:{accessRequirementStatus:{accessRequirementId:String(e.id),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!0,currentSubmissionStatus:{submissionId:"1",submittedBy:"123456",modifiedOn:"2023-05-10T16:54:53.333Z",state:s.APPROVED}}}},r={args:{accessRequirementStatus:{accessRequirementId:String(e.id),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!1,currentSubmissionStatus:{submissionId:"1",submittedBy:"123456",modifiedOn:"2023-05-10T16:54:53.333Z",state:s.SUBMITTED}}}},a={args:{accessRequirementStatus:{accessRequirementId:String(e.id),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!1,currentSubmissionStatus:{submissionId:"1",submittedBy:"123456",modifiedOn:"2023-05-10T16:54:53.333Z",state:s.CANCELLED}}}},c={args:{accessRequirementStatus:{accessRequirementId:String(e.id),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!1,expiredOn:"2023-05-10T16:54:53.333Z",currentSubmissionStatus:{submissionId:"1",submittedBy:"123456",modifiedOn:"2023-05-10T16:54:53.333Z",state:s.APPROVED}}}},i={args:{accessRequirementStatus:{accessRequirementId:String(e.id),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!1,currentSubmissionStatus:{submissionId:"1",submittedBy:"123456",modifiedOn:"2023-05-10T16:54:53.333Z",state:s.REJECTED,rejectedReason:"This is a mock rejection reason for testing purposes."}}}},o={args:{accessRequirementStatus:{accessRequirementId:String(e.id),concreteType:"org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus",isApproved:!1},restrictionInformation:{objectId:e.id,restrictionLevel:B.CONTROLLED_BY_ACT,hasUnmetAccessRequirement:!0,restrictionDetails:[{accessRequirementId:e.id,isApproved:!1,isMet:!0,isExempt:!0}]}}};var d,u,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: false
    }
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,S,A;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: true,
      currentSubmissionStatus: {
        submissionId: '1',
        submittedBy: '123456',
        modifiedOn: '2023-05-10T16:54:53.333Z',
        state: SubmissionState.APPROVED
      }
    }
  }
}`,...(A=(S=n.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var R,T,q;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: false,
      currentSubmissionStatus: {
        submissionId: '1',
        submittedBy: '123456',
        modifiedOn: '2023-05-10T16:54:53.333Z',
        state: SubmissionState.SUBMITTED
      }
    }
  }
}`,...(q=(T=r.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var l,b,C;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: false,
      currentSubmissionStatus: {
        submissionId: '1',
        submittedBy: '123456',
        modifiedOn: '2023-05-10T16:54:53.333Z',
        state: SubmissionState.CANCELLED
      }
    }
  }
}`,...(C=(b=a.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var f,I,M;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: false,
      expiredOn: '2023-05-10T16:54:53.333Z',
      currentSubmissionStatus: {
        submissionId: '1',
        submittedBy: '123456',
        modifiedOn: '2023-05-10T16:54:53.333Z',
        state: SubmissionState.APPROVED
      }
    }
  }
}`,...(M=(I=c.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var k,E,y;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: false,
      currentSubmissionStatus: {
        submissionId: '1',
        submittedBy: '123456',
        modifiedOn: '2023-05-10T16:54:53.333Z',
        state: SubmissionState.REJECTED,
        rejectedReason: 'This is a mock rejection reason for testing purposes.'
      }
    }
  }
}`,...(y=(E=i.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var O,v,w;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    accessRequirementStatus: {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      concreteType: 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
      isApproved: false
    },
    restrictionInformation: {
      objectId: mockManagedACTAccessRequirement.id,
      restrictionLevel: RestrictionLevel.CONTROLLED_BY_ACT,
      hasUnmetAccessRequirement: true,
      restrictionDetails: [{
        accessRequirementId: mockManagedACTAccessRequirement.id,
        isApproved: false,
        isMet: true,
        isExempt: true
      }]
    }
  }
}`,...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const W=["Default","Approved","Pending","Cancelled","Expired","Rejected","ExemptFromAccessRequirement"];export{n as Approved,a as Cancelled,t as Default,o as ExemptFromAccessRequirement,c as Expired,r as Pending,i as Rejected,W as __namedExportsOrder,J as default};
