import{jJ as T}from"./iframe-zheGqhAq.js";import{S as C}from"./SchemaDrivenAnnotationEditor-UtWOR6WC.js";import"./index-r8ZA1smB.js";import"./useEntity-CTIaPQug.js";import"./pickBy-DpS9WV9V.js";import"./isString-BR9QiN0Q.js";import"./_baseIteratee-DDo8Ap5B.js";import"./useQueries-DXsUmBVl.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-CG0Fso0D.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BxFP7Sk5.js";import"./useSchema-LVLrp2tk.js";import"./index-DoYaCjgV.js";import"./enums-w-jvyQDK.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CwsVC8cC.js";import"./uniq-CXMQvc5D.js";import"./forEach-B8iwwgef.js";import"./Grid-DT4MUoeo.js";import"./ListItem-CnyCff5H.js";import"./listItemButtonClasses-C233TWRI.js";import"./ListItemIcon-C33ydtAc.js";import"./MenuItem-Bwm8UOUj.js";import"./ListItemText-PbJXxPfv.js";import"./ArrowUpward-CEli2fyR.js";import"./ContentCopy-DCgBEL0o.js";import"./FormControlLabel-BJvY_HPF.js";import"./Checkbox-mXxzWTsk.js";import"./SwitchBase-BkAcyxYn.js";import"./FormGroup-DEK-Px8-.js";import"./RadioGroup-Crh2KpJr.js";import"./Radio-1JewHdMq.js";import"./Slider-w8cgSL6S.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-COSL1EcY.js";import"./DialogBase-CTe4gN8d.js";import"./Close-Czuq5Lj0.js";import"./HelpPopover-JQdCNZBx.js";import"./MarkdownPopover-BacXeUFr.js";import"./LightTooltip-DB1oMCwe.js";import"./MarkdownSynapse-Ct83EToF.js";import"./SkeletonButton-DnBFAAqj.js";import"./SkeletonInlineBlock-DQ4vmVkM.js";import"./SkeletonTable-B_5GfUT7.js";import"./SkeletonParagraph-0XdWF-57.js";import"./JsonSchemaForm-FEWnl6K8.js";import"./GridLegacy-Bpw0yPVP.js";import"./HelpTwoTone-BuTJyA9H.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-F-VsfME8.js";import"./_createAggregator-ByOX6Z0f.js";import"./_baseMap-BkkmexWo.js";import"./DateTimePicker-43oYgsa4.js";import"./useMobilePicker-GaJ5WChV.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-D1wDOMXn.js";import"./index-Cdw1MH5n.js";import"./Chip-BBw1-U_9.js";import"./Tabs-BSr1SFMo.js";import"./KeyboardArrowRight-BkonAvu5.js";import"./Autocomplete-CzwAv29J.js";import"./usePreviousProps-Oqo9GUWG.js";import"./use-deep-compare-effect.esm-zOhH6fqI.js";import"./TextWidget-93vAA17W.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,l,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,q,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    validationSchema: {
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: \`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/\${mockSchemaBinding.jsonSchemaVersionInfo.$id}\`,
      type: 'object',
      properties: {
        country: {
          enum: ['USA', 'CA'],
          description: 'Test description for country property'
        },
        showStringArray: {
          type: 'boolean'
        }
      },
      required: ['country'],
      allOf: [{
        if: {
          properties: {
            country: {
              const: 'USA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            state: {
              type: 'string'
            }
          },
          required: ['state']
        }
      }, {
        if: {
          properties: {
            country: {
              const: 'CA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            province: {
              type: 'string'
            }
          },
          required: ['province']
        }
      }, {
        if: {
          properties: {
            showStringArray: {
              const: true
            }
          },
          required: ['showStringArray']
        },
        then: {
          properties: {
            stringArray: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }
        }
      }]
    }
  }
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Kr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Kr as __namedExportsOrder,Jr as default};
