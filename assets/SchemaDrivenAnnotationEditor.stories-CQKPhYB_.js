import{jJ as T}from"./iframe-aiCTTxzx.js";import{S as C}from"./SchemaDrivenAnnotationEditor-BX9HLNBm.js";import"./index-r8ZA1smB.js";import"./useEntity-fAQrW7xp.js";import"./pickBy-Cmir8uaG.js";import"./isString-CoJ2Y4rt.js";import"./_baseIteratee-ZTZzVXP5.js";import"./useQueries-BVv0ZXiA.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-Gkgwzaik.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DBedoUKR.js";import"./useSchema-Daj2ZUnQ.js";import"./index-BJFft7lF.js";import"./enums-BDbo8TlJ.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-atuDNG5v.js";import"./uniq-C5q_3WvF.js";import"./forEach-B8iwwgef.js";import"./Grid-Bp6ID_x8.js";import"./ListItem-ykx6mdGZ.js";import"./listItemButtonClasses-DpfzkRpE.js";import"./ListItemIcon-Z0GNCqKC.js";import"./MenuItem-DS99slWK.js";import"./ListItemText-B16UfJ5p.js";import"./ArrowUpward-BujPJMIb.js";import"./ContentCopy-CNAvkDTS.js";import"./FormControlLabel-i7KA90RK.js";import"./Checkbox-tYC2r_Wk.js";import"./SwitchBase-C5vlrh6G.js";import"./FormGroup-Cw_gVl0y.js";import"./RadioGroup-B-xQA0fR.js";import"./Radio-D-0EP8nH.js";import"./Slider-B_2MJaqR.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DO-EfviT.js";import"./DialogBase-Gzuj-6fR.js";import"./Close-CfukyXb1.js";import"./HelpPopover-DCPIXOU3.js";import"./MarkdownPopover-2FWIzgd3.js";import"./LightTooltip-DNGLoswC.js";import"./MarkdownSynapse-CmpESD_-.js";import"./SkeletonButton-95Mbk9h_.js";import"./SkeletonInlineBlock-D-HDpP9G.js";import"./SkeletonTable-C8arYsQV.js";import"./SkeletonParagraph-JveYRW9s.js";import"./JsonSchemaForm-BzbA-ouA.js";import"./GridLegacy-6f-G97h8.js";import"./HelpTwoTone-xdObetoh.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-DLSK8y9B.js";import"./_createAggregator-uBzxyFbO.js";import"./_baseMap-DJjH_LSa.js";import"./DateTimePicker-k9kArQbB.js";import"./useMobilePicker-CUsCi8tB.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-LFK0i-__.js";import"./index-Q4iuKSAo.js";import"./Chip-RH7BrEwh.js";import"./Tabs-9eoqufKk.js";import"./KeyboardArrowRight-BUkFQPEn.js";import"./Autocomplete-qdt4lk58.js";import"./usePreviousProps-B2nWtMw7.js";import"./use-deep-compare-effect.esm-C0dmksk3.js";import"./TextWidget-DnGm8dkG.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
