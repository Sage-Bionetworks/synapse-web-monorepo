import{jF as T}from"./iframe-APCqMGQN.js";import{S as C}from"./SchemaDrivenAnnotationEditor-BnDkxrbb.js";import"./index-r8ZA1smB.js";import"./useEntity-CCSA5IoB.js";import"./pickBy-BXOcfTdK.js";import"./isString-BiX_qD9y.js";import"./_baseIteratee-C1iyXZJZ.js";import"./useQueries-w0HgxzOW.js";import"./useSuspenseQuery-BHob01YS.js";import"./useInfiniteQuery-gXjf5_Em.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-3B7W4X2r.js";import"./useSchema-DNM5ebVp.js";import"./index-CeRi16Jw.js";import"./enums-B1pkj5cb.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CqMTNFX8.js";import"./uniq-DteFCC0d.js";import"./forEach-B8iwwgef.js";import"./Grid-DsreRBQp.js";import"./ListItem-DQORSOUe.js";import"./listItemButtonClasses-CAaGfR5y.js";import"./ListItemIcon-DQ_3vwRb.js";import"./MenuItem-BDJHy-II.js";import"./ListItemText-DjMlVkLg.js";import"./ArrowUpward-D4EYfguB.js";import"./ContentCopy-BF5j__Uh.js";import"./FormControlLabel-DrlXu2zA.js";import"./Checkbox-BFb0aAcu.js";import"./SwitchBase-CVLtTeuV.js";import"./FormGroup-B9Wga6I7.js";import"./RadioGroup-CAg8y022.js";import"./Radio-BhDW72Ud.js";import"./Slider-BtIp2ZU_.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-DX-eJ8BJ.js";import"./DialogBase-CPOjmtcd.js";import"./Close-Dfqur9mW.js";import"./HelpPopover-CSvALpOm.js";import"./MarkdownPopover-B00IKW0p.js";import"./LightTooltip-PuK_Y7Ky.js";import"./MarkdownSynapse-3Z4rZ9Dt.js";import"./SkeletonButton-BmM8-g6B.js";import"./SkeletonInlineBlock-CeF_-ICV.js";import"./SkeletonTable-DvijJWyz.js";import"./SkeletonParagraph-D-_OgKUm.js";import"./JsonSchemaForm-ComyRXTm.js";import"./GridLegacy-7Q4ADOup.js";import"./HelpTwoTone-Q0Z53bcn.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BA8Gl713.js";import"./_createAggregator-BW2mK8Bf.js";import"./_baseMap-Df7tfatB.js";import"./DateTimePicker-C3jeSytS.js";import"./useMobilePicker-CpDzGwjY.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-wcEqHGft.js";import"./index-Bfv0LEY1.js";import"./Chip-TkJBG0Qb.js";import"./Tabs-CbHe92A_.js";import"./KeyboardArrowRight-B1i8o1As.js";import"./Autocomplete-BC5f898a.js";import"./usePreviousProps-CrPmH5-V.js";import"./use-deep-compare-effect.esm-D1mvsljV.js";import"./TextWidget-8azcwIHq.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Kr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Lr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Lr as __namedExportsOrder,Kr as default};
