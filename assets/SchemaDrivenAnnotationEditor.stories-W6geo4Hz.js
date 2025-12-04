import{jF as T}from"./iframe-BjuWmOGi.js";import{S as C}from"./SchemaDrivenAnnotationEditor-C98VsL1L.js";import"./index-r8ZA1smB.js";import"./useEntity-BmPkcNlt.js";import"./pickBy-oh4ohDbb.js";import"./isString-SjnShR5k.js";import"./_baseIteratee-BMPI0n1s.js";import"./useQueries-C7jhvuGS.js";import"./useSuspenseQuery-DmE9zOqq.js";import"./useInfiniteQuery-C1IsBcDW.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Pni8KKTd.js";import"./useSchema-wMb79dWC.js";import"./index-C8YQ0Pw8.js";import"./enums-Bu6pNwVX.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-YBB0h5kf.js";import"./uniq-CmRSxbmj.js";import"./forEach-B8iwwgef.js";import"./Grid-CTrAtZUN.js";import"./ListItem-Cjx1mwRn.js";import"./listItemButtonClasses-iLzTZUjk.js";import"./ListItemIcon-DoZ10kLd.js";import"./MenuItem-D-8sEbrT.js";import"./ListItemText-Dy2lQTcN.js";import"./ArrowUpward-CaC1HHQe.js";import"./ContentCopy-BAFoF8Uw.js";import"./FormControlLabel-Pg9rhhJW.js";import"./Checkbox-Ckhn1YcA.js";import"./SwitchBase-VeURP3dA.js";import"./FormGroup-DkQhoO0F.js";import"./RadioGroup-BZQXsZJS.js";import"./Radio-DEijA1Ll.js";import"./Slider-B78viH1y.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-DppO_-Vj.js";import"./DialogBase-0BLPZ86t.js";import"./Close-B62x5WHs.js";import"./HelpPopover-BkI75ct6.js";import"./MarkdownPopover-zCTHVRdN.js";import"./LightTooltip-EAnXddzG.js";import"./MarkdownSynapse-BQfJHOxx.js";import"./SkeletonButton-DB1uc2E1.js";import"./SkeletonInlineBlock-CVuN0wiI.js";import"./SkeletonTable-CigWUdbM.js";import"./SkeletonParagraph-D6mW9cd8.js";import"./JsonSchemaForm-B8jNPLf2.js";import"./GridLegacy-ogeEFY3d.js";import"./HelpTwoTone-C39I495f.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CfJilsOm.js";import"./_createAggregator-l2fg5jQ-.js";import"./_baseMap-0Bp-WUWh.js";import"./DateTimePicker-hOjyxToj.js";import"./useMobilePicker-CuD9DR48.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-DZpa5h_S.js";import"./index-DkRGUkVV.js";import"./Chip-Ce4i36Hi.js";import"./Tabs-BSvgGEbb.js";import"./KeyboardArrowRight-H7ZRaQ6f.js";import"./Autocomplete-Mqv--iLi.js";import"./usePreviousProps-BO4uHsAd.js";import"./use-deep-compare-effect.esm-CKvc0cS6.js";import"./TextWidget-BX-1PsCn.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Kr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
