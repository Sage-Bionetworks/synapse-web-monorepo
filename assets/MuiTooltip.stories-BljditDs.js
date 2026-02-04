import{j as t,b$ as n,_ as a,d5 as i}from"./iframe-BE9PbKHz.js";import"./index-Chi_LkuB.js";const s=e=>t.jsx(n,{...e});try{s.displayName="Tooltip",s.__docgenInfo={description:"",displayName:"Tooltip",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<TooltipSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:"{ popper?: SlotProps<ElementType<PopperProps, keyof IntrinsicElements>, TooltipPopperSlotPropsOverrides, TooltipOwnerState>; transition?: SlotProps<...>; tooltip?: SlotProps<...>; arrow?: SlotProps<...>; }"}}}}}catch{}const{userEvent:p,within:l}=__STORYBOOK_MODULE_TEST__,h={title:"UI/MUI/Tooltip",component:s,parameters:{design:{type:"figma",url:"https://www.figma.com/file/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=187%3A6615"}},play:async({canvasElement:e})=>{const r=l(e).getByTestId("tooltipAnchor");await p.hover(r)}},o={name:"Tooltip",args:{children:t.jsx(i,{"data-testid":"tooltipAnchor"}),title:t.jsxs("p",{children:["This is some text, and"," ",t.jsx(a,{href:"https://synapse.org/",children:"here is a link"}),"."]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Tooltip',
  args: {
    children: <InfoTwoTone data-testid={'tooltipAnchor'} />,
    title: <p>
        This is some text, and{' '}
        <Link href={'https://synapse.org/'}>here is a link</Link>.
      </p>
  }
}`,...o.parameters?.docs?.source}}};const f=["Demo"];export{o as Demo,f as __namedExportsOrder,h as default};
