import{j as e,bh as d,bk as p,ag as g,V as v,bl as b,am as f,bi as h,bj as q,B as a}from"./iframe-CQAvee5F.js";import{H as x}from"./HelpPopover-DL3O30BL.js";import"./index-r8ZA1smB.js";import"./MarkdownPopover-CxnxngRT.js";import"./LightTooltip-DUFjrAlt.js";import"./MarkdownSynapse-CHoFalek.js";import"./SkeletonButton-BbTQsPlY.js";import"./SkeletonInlineBlock-QfDnwJMw.js";import"./SkeletonTable-n8bsuBVZ.js";import"./SkeletonParagraph-BHKzvjmx.js";const t=s=>{const{title:o,content:m,helpText:n,...c}=s;return e.jsxs(d,{...c,children:[e.jsx(p,{children:e.jsxs(g,{direction:"row",sx:{alignItems:"center",gap:"5px"},children:[o,n&&e.jsx(x,{markdownText:n}),e.jsx(v,{sx:{flexGrow:1}}),e.jsx(b,{children:e.jsx(f,{icon:"close",wrap:!1,sx:{color:"grey.700"}})})]})}),e.jsx(h,{children:m}),e.jsxs(q,{children:[e.jsx(a,{variant:"outlined",children:"Cancel"}),e.jsx(a,{variant:"contained",children:"OK"})]})]})};try{t.displayName="Dialog",t.__docgenInfo={description:"",displayName:"Dialog",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},helpText:{defaultValue:null,description:"",name:"helpText",required:!1,type:{name:"string"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<DialogSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:"{ root?: SlotProps<ElementType<ModalProps, keyof IntrinsicElements>, DialogRootSlotPropsOverrides, DialogOwnerState>; backdrop?: SlotProps<...>; container?: SlotProps<...>; transition?: SlotComponentProps<...>; paper?: SlotProps<...>; }"}}}}}catch{}const T={title:"UI/MUI/Dialog",component:t,argTypes:{fullWidth:{options:[!1,!0],control:{type:"boolean"}},maxWidth:{options:["xs","sm","md","lg","xl"],control:{type:"radio"}}},parameters:{design:{type:"figma",url:"https://www.figma.com/file/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?type=design&node-id=1361-18613"}}},i={args:{open:!0,maxWidth:"sm",title:"My Dialog Title",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat ultricies bibendum. Suspendisse sapien sem, dignissim eget viverra ut, volutpat vitae tellus. Nam rhoncus commodo velit, vitae suscipit est aliquet id. Cras et lectus finibus, imperdiet quam id, tempor velit. Cras ex mi, fermentum ac facilisis varius, euismod sed lectus. Praesent gravida mollis purus, non rhoncus elit placerat sit amet. Phasellus id elementum lorem. Pellentesque pharetra tincidunt mollis. Morbi faucibus porttitor lacus ac condimentum. Nulla quam erat, tincidunt quis dolor eu, dictum sodales ligula. Etiam eget luctus eros. Curabitur tempor massa ac nisi iaculis pellentesque. Interdum et malesuada fames ac ante ipsum primis in faucibus."}),e.jsx("p",{children:"Vivamus fermentum in ex quis vestibulum. Vestibulum id nibh varius magna porttitor semper. Phasellus eu tellus libero. Maecenas nec purus eu ante suscipit imperdiet. Vestibulum elementum a tellus at convallis. Vestibulum tincidunt tristique dictum. Nullam imperdiet ultricies ex et tristique."}),e.jsx("p",{children:"Proin suscipit fringilla massa, hendrerit tincidunt sapien. Vestibulum gravida convallis ligula quis vulputate. Curabitur venenatis purus sed volutpat pretium. Mauris tortor nibh, ornare in blandit vitae, interdum vitae nibh. Proin nec feugiat nisi. Morbi velit felis, sollicitudin porta enim in, gravida pretium magna. Cras nec risus vestibulum, rhoncus purus quis, iaculis est."}),e.jsxs("p",{children:[" ","Maecenas quis semper sem. Donec tincidunt quis neque congue eleifend. Fusce ultrices nibh id purus tincidunt egestas. In semper dolor tempor, consectetur enim eget, convallis dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sapien vitae diam tincidunt commodo. Nullam porta lacinia nisi, eget scelerisque ante commodo a. Integer tincidunt id lectus sit amet finibus. Sed elementum aliquam nibh. Nullam dapibus a nisi ac varius. Praesent eu sapien tortor. Aliquam eros turpis, ultricies ac fringilla eu, dignissim pellentesque odio. Pellentesque sodales lorem felis, et mollis ante accumsan nec. Donec augue est, vestibulum id ultricies eget, ultrices in mauris."]})]})}};var u,l,r;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    open: true,
    maxWidth: 'sm',
    title: 'My Dialog Title',
    content: <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          consequat ultricies bibendum. Suspendisse sapien sem, dignissim eget
          viverra ut, volutpat vitae tellus. Nam rhoncus commodo velit, vitae
          suscipit est aliquet id. Cras et lectus finibus, imperdiet quam id,
          tempor velit. Cras ex mi, fermentum ac facilisis varius, euismod sed
          lectus. Praesent gravida mollis purus, non rhoncus elit placerat sit
          amet. Phasellus id elementum lorem. Pellentesque pharetra tincidunt
          mollis. Morbi faucibus porttitor lacus ac condimentum. Nulla quam
          erat, tincidunt quis dolor eu, dictum sodales ligula. Etiam eget
          luctus eros. Curabitur tempor massa ac nisi iaculis pellentesque.
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
        <p>
          Vivamus fermentum in ex quis vestibulum. Vestibulum id nibh varius
          magna porttitor semper. Phasellus eu tellus libero. Maecenas nec purus
          eu ante suscipit imperdiet. Vestibulum elementum a tellus at
          convallis. Vestibulum tincidunt tristique dictum. Nullam imperdiet
          ultricies ex et tristique.
        </p>
        <p>
          Proin suscipit fringilla massa, hendrerit tincidunt sapien. Vestibulum
          gravida convallis ligula quis vulputate. Curabitur venenatis purus sed
          volutpat pretium. Mauris tortor nibh, ornare in blandit vitae,
          interdum vitae nibh. Proin nec feugiat nisi. Morbi velit felis,
          sollicitudin porta enim in, gravida pretium magna. Cras nec risus
          vestibulum, rhoncus purus quis, iaculis est.
        </p>
        <p>
          {' '}
          Maecenas quis semper sem. Donec tincidunt quis neque congue eleifend.
          Fusce ultrices nibh id purus tincidunt egestas. In semper dolor
          tempor, consectetur enim eget, convallis dolor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse tincidunt sapien vitae
          diam tincidunt commodo. Nullam porta lacinia nisi, eget scelerisque
          ante commodo a. Integer tincidunt id lectus sit amet finibus. Sed
          elementum aliquam nibh. Nullam dapibus a nisi ac varius. Praesent eu
          sapien tortor. Aliquam eros turpis, ultricies ac fringilla eu,
          dignissim pellentesque odio. Pellentesque sodales lorem felis, et
          mollis ante accumsan nec. Donec augue est, vestibulum id ultricies
          eget, ultrices in mauris.
        </p>
      </>
  }
}`,...(r=(l=i.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const _=["Demo"];export{i as Demo,_ as __namedExportsOrder,T as default};
