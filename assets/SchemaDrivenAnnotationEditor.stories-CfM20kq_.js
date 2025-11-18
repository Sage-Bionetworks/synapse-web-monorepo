import{jJ as T}from"./iframe-xpHBgFEc.js";import{S as C}from"./SchemaDrivenAnnotationEditor-DrFSP58V.js";import"./index-r8ZA1smB.js";import"./useEntity-CEMG6RUi.js";import"./pickBy-93Wpj6Up.js";import"./isString-BLHDc7zN.js";import"./_baseIteratee-BIO8AyhS.js";import"./useQueries-BVu644GY.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-BSZWHFvd.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Db3f-vFZ.js";import"./useSchema-BZGZn5Xq.js";import"./index-BGyCcQKX.js";import"./enums-BhPQTI61.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C4WWxFSA.js";import"./uniq-Biveekez.js";import"./forEach-B8iwwgef.js";import"./Grid-DyLwKXY1.js";import"./ListItem-H7Ac9QLr.js";import"./listItemButtonClasses-Dv7hDOy4.js";import"./ListItemIcon-uVMxGh4H.js";import"./MenuItem-B4u3b55B.js";import"./ListItemText-D7USpfu4.js";import"./ArrowUpward-FFdXZqIr.js";import"./ContentCopy-C02kJ6c-.js";import"./FormControlLabel-BeibZz3B.js";import"./Checkbox-CN_U6AfU.js";import"./SwitchBase-xBoziYLh.js";import"./FormGroup-CYs1fh9V.js";import"./RadioGroup-cx-nRxwk.js";import"./Radio-CaNYmFcL.js";import"./Slider-Db2YMM3e.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CwyDjVHU.js";import"./DialogBase-pgJ5o4Zt.js";import"./Close-5t4oWx4m.js";import"./HelpPopover-DCjpPdCE.js";import"./MarkdownPopover-dZJj-Vn5.js";import"./LightTooltip-BDDa2W0x.js";import"./MarkdownSynapse-BeCorgwC.js";import"./SkeletonButton-CHbgpEXP.js";import"./SkeletonInlineBlock-C-Vahxr2.js";import"./SkeletonTable-DHFbt_t8.js";import"./SkeletonParagraph-DAmn3J9_.js";import"./JsonSchemaForm-CG2fnzTA.js";import"./GridLegacy-DhGK4Lgt.js";import"./HelpTwoTone-WhJl3etU.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BZjl3WtS.js";import"./_createAggregator-91kNP6C4.js";import"./_baseMap-BaEDqoU1.js";import"./DateTimePicker-BrUitIxg.js";import"./useMobilePicker-BahE-WtQ.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-DvmskpA0.js";import"./index-BoBV2uWn.js";import"./Chip-D2WSSidr.js";import"./Tabs-BH9En_zq.js";import"./KeyboardArrowRight-KXu76TuP.js";import"./Autocomplete-TmCM9QuQ.js";import"./usePreviousProps-sNEQDWB9.js";import"./use-deep-compare-effect.esm-Dh278jXm.js";import"./TextWidget-CEzBvkbm.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
