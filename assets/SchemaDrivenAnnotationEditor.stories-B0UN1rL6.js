import{jF as T}from"./iframe-C6DVh3a8.js";import{S as C}from"./SchemaDrivenAnnotationEditor-hdkkwTnU.js";import"./index-r8ZA1smB.js";import"./useEntity-C-V6zgpE.js";import"./pickBy-tb-GfPY8.js";import"./isString-Cmdz_UQl.js";import"./_baseIteratee-CWWhk6NN.js";import"./useQueries-B0aVwD29.js";import"./useSuspenseQuery-Chz7E6o7.js";import"./useInfiniteQuery-ClFk1pW2.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B90ambwW.js";import"./useSchema-B7UxtqoP.js";import"./index-CZHpzthP.js";import"./enums-Bh7adedg.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-LxprNQX-.js";import"./uniq-D-JYaA-4.js";import"./forEach-B8iwwgef.js";import"./Add-sXAw-K23.js";import"./Grid-Ba5ajPM-.js";import"./ListItem-Dt0l7J3e.js";import"./listItemButtonClasses-CPX8fj-K.js";import"./ListItemIcon-Dyc8dnm4.js";import"./MenuItem-BQStYWQ5.js";import"./ListItemText-H3TsNHfd.js";import"./ArrowUpward-DLrHDvKg.js";import"./ContentCopy-CKkneaJo.js";import"./FormControlLabel-CiJk5KuY.js";import"./Checkbox-DJfaxyg9.js";import"./SwitchBase-CuaC-at1.js";import"./FormGroup-CbIk2vfI.js";import"./RadioGroup-CNFGXg9S.js";import"./Radio-CR1Rnskn.js";import"./Slider-Dp2g4Hya.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-Bn1YHVno.js";import"./DialogBase-DG3FOts0.js";import"./Close-Cvfvekss.js";import"./HelpPopover-D15layXw.js";import"./MarkdownPopover-DYELty5d.js";import"./LightTooltip-CehMS9nA.js";import"./MarkdownSynapse-DbU2DxXy.js";import"./SkeletonButton-DJ25ODSP.js";import"./SkeletonInlineBlock-DaN9DO1b.js";import"./SkeletonTable-BaZC2los.js";import"./SkeletonParagraph-BiRrs5sP.js";import"./JsonSchemaForm-Xhg5tn5W.js";import"./GridLegacy-BLDxfJJy.js";import"./HelpTwoTone-D0OxHOW8.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-D5dCbDAd.js";import"./_createAggregator-BAZrz04R.js";import"./_baseMap-DhNHWzMR.js";import"./DateTimePicker-DxulpDwZ.js";import"./useMobilePicker-Bj0eeLeu.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-CQNkYQ5a.js";import"./index-CWyeuUHI.js";import"./Chip-DnxNYuul.js";import"./Tabs-e4V2Y5Y_.js";import"./KeyboardArrowRight-CP1RGiAs.js";import"./Autocomplete-BrFOdlzt.js";import"./usePreviousProps-JdV1Aj9c.js";import"./use-deep-compare-effect.esm-SwhE2hrk.js";import"./TextWidget-tvV9adA-.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Mr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Mr as __namedExportsOrder,Lr as default};
