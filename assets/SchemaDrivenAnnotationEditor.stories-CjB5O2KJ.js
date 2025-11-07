import{jJ as T}from"./iframe-CeAgldvM.js";import{S as C}from"./SchemaDrivenAnnotationEditor-DZHOYKnX.js";import"./index-r8ZA1smB.js";import"./useEntity-DIayAt6X.js";import"./pickBy-B3E6w4SL.js";import"./isString-CJCueFgH.js";import"./_baseIteratee-CcVHlHZ8.js";import"./useQueries-DoFZKxYm.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-U-CVtIRK.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DxYhT2Z7.js";import"./useSchema-Bz-NSGCV.js";import"./index-hXJy-T5X.js";import"./enums-CX6vJc3G.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-yKkNUWZi.js";import"./uniq-Bz5l45sv.js";import"./forEach-B8iwwgef.js";import"./Grid-BMIT_ZcX.js";import"./ListItem-Dby61Cvn.js";import"./listItemButtonClasses-CMCJD7br.js";import"./ListItemIcon-By2isNRV.js";import"./MenuItem-DcOlOGUi.js";import"./ListItemText-CIHzKVpH.js";import"./ArrowUpward-CbK8JPnF.js";import"./ContentCopy-bXMwnyDU.js";import"./FormControlLabel-OfnNXanI.js";import"./Checkbox-HIkAiuBf.js";import"./SwitchBase-IEc58BLQ.js";import"./FormGroup-no-8tmV-.js";import"./RadioGroup-JvkF7ObP.js";import"./Radio-Dqd0D3lc.js";import"./Slider-cw-Q6H7y.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DPE1BIMW.js";import"./DialogBase-D0T8g2Im.js";import"./Close-o2F78_KZ.js";import"./HelpPopover-8snckHwd.js";import"./MarkdownPopover-ivtTXFwj.js";import"./LightTooltip-CNmsWsyw.js";import"./MarkdownSynapse-Dy8cp58X.js";import"./SkeletonButton-BvXrs4_f.js";import"./SkeletonInlineBlock-n6Wdtn3U.js";import"./SkeletonTable-D9BGXwSf.js";import"./SkeletonParagraph-DsPtfc6R.js";import"./JsonSchemaForm-KY7uxysa.js";import"./GridLegacy-BnhKZ9sC.js";import"./HelpTwoTone-D-BB4bCd.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-Bbge1Wt4.js";import"./_createAggregator-F5SY0kCg.js";import"./_baseMap-CxwWUgmR.js";import"./DateTimePicker-igMtrm77.js";import"./useMobilePicker-C3hj4_NZ.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-B2OACvV_.js";import"./index-T3jL32n1.js";import"./Chip-D7iOhvvK.js";import"./Tabs-CHHcJm1-.js";import"./KeyboardArrowRight-BReZDkuh.js";import"./Autocomplete-DSzhtfBq.js";import"./usePreviousProps-DshlgJUP.js";import"./use-deep-compare-effect.esm-DVfJ6rRp.js";import"./TextWidget-Heaxc_sd.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
