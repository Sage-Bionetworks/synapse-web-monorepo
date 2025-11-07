import{j as t,bV as p,_ as l,d6 as d}from"./iframe-D6eR7C50.js";import"./index-r8ZA1smB.js";const s=e=>t.jsx(p,{...e});try{s.displayName="Tooltip",s.__docgenInfo={description:"",displayName:"Tooltip",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<TooltipSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:"{ popper?: SlotProps<ElementType<PopperProps, keyof IntrinsicElements>, TooltipPopperSlotPropsOverrides, TooltipOwnerState>; transition?: SlotProps<...>; tooltip?: SlotProps<...>; arrow?: SlotProps<...>; }"}}}}}catch{}const{userEvent:c,within:m}=__STORYBOOK_MODULE_TEST__,u={title:"UI/MUI/Tooltip",component:s,parameters:{design:{type:"figma",url:"https://www.figma.com/file/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=187%3A6615"}},play:async({canvasElement:e})=>{const i=m(e).getByTestId("tooltipAnchor");await c.hover(i)}},o={name:"Tooltip",args:{children:t.jsx(d,{"data-testid":"tooltipAnchor"}),title:t.jsxs("p",{children:["This is some text, and"," ",t.jsx(l,{href:"https://synapse.org/",children:"here is a link"}),"."]})}};var r,n,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Tooltip',
  args: {
    children: <InfoTwoTone data-testid={'tooltipAnchor'} />,
    title: <p>
        This is some text, and{' '}
        <Link href={'https://synapse.org/'}>here is a link</Link>.
      </p>
  }
}`,...(a=(n=o.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const y=["Demo"];export{o as Demo,y as __namedExportsOrder,u as default};
