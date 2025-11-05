import{jH as T}from"./iframe-DNJeJ5iA.js";import{S as C}from"./SchemaDrivenAnnotationEditor-Ze7Ii3JK.js";import"./index-r8ZA1smB.js";import"./useEntity-BEmwNYr1.js";import"./pickBy-DPB3oBK6.js";import"./isString-DOGPTrHh.js";import"./_baseIteratee-CpPioSPx.js";import"./useQueries-BMjBIuDb.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-Br--10f9.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DLDN3id7.js";import"./useSchema-DOkJP54t.js";import"./index-DKMIIQwO.js";import"./enums-2tCaPdb0.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BNKOyPrU.js";import"./uniq-BSqZ-QXm.js";import"./forEach-B8iwwgef.js";import"./Grid-BVNpB9GF.js";import"./ListItem-DS8Yf9gg.js";import"./listItemButtonClasses-f8j0FUe6.js";import"./ListItemIcon-CoCPIgXM.js";import"./MenuItem-CT67I_PA.js";import"./ListItemText-LlnLwLsy.js";import"./ArrowUpward-BpMRNuDi.js";import"./ContentCopy-Cp9hz3-6.js";import"./FormControlLabel-BOTHUCHT.js";import"./Checkbox-CuIt-Arc.js";import"./SwitchBase-DvvguGJm.js";import"./FormGroup-DLsi-gm9.js";import"./RadioGroup-DHZAR6uM.js";import"./Radio-DJSCc87C.js";import"./Slider-BhuIE-x5.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DnlJR0qi.js";import"./DialogBase-CE44SEYA.js";import"./Close-BKUp_exR.js";import"./HelpPopover-CF0Dq4Vm.js";import"./MarkdownPopover-DoRIMtwC.js";import"./LightTooltip-DsJ2BEeZ.js";import"./MarkdownSynapse-DzSnHMfD.js";import"./SkeletonButton-BUOacwJB.js";import"./SkeletonInlineBlock-BeQwzjXN.js";import"./SkeletonTable-DVr3y68U.js";import"./SkeletonParagraph-D6w9BO_7.js";import"./JsonSchemaForm-bx1F9VUB.js";import"./GridLegacy-BBNQ6p-B.js";import"./HelpTwoTone-a7kpinnW.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-BYI9Mjm6.js";import"./_createAggregator-CW1Z-2pT.js";import"./_baseMap-DdsroZ9h.js";import"./DateTimePicker-CCkxbaRR.js";import"./useMobilePicker-W3w_fwRY.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-DXacaD-1.js";import"./index-CvnLitu3.js";import"./Chip-F4DxftXR.js";import"./Tabs-B54cC9YK.js";import"./KeyboardArrowRight-DaeCl1oQ.js";import"./Autocomplete-A3gwoMZZ.js";import"./usePreviousProps-x25YfvI0.js";import"./use-deep-compare-effect.esm-D3PGmV3S.js";import"./TextWidget-DltX9YY_.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Hr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Kr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Kr as __namedExportsOrder,Hr as default};
