import{jF as T}from"./iframe-CQJI7H2t.js";import{S as C}from"./SchemaDrivenAnnotationEditor-zgTgNfFN.js";import"./index-r8ZA1smB.js";import"./useEntity-nTwQEwob.js";import"./pickBy-DYTtcuOm.js";import"./isString-MdCpdfIL.js";import"./_baseIteratee-5cMs_epi.js";import"./useQueries-DxTHEh5Q.js";import"./useSuspenseQuery-Bc-UZawL.js";import"./useInfiniteQuery-D6F9oIjz.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BjN0-gWG.js";import"./useSchema-2X7eyVMU.js";import"./index-C4Iu3w3v.js";import"./enums-CMQwIa5M.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DN0mH8Et.js";import"./uniq-C8Thh210.js";import"./forEach-B8iwwgef.js";import"./Add-DUd3UVE5.js";import"./Grid-Dsb41YIw.js";import"./ListItem-MzTAqO4I.js";import"./listItemButtonClasses-CxhAJpDr.js";import"./ListItemIcon-BVxnOMDf.js";import"./MenuItem-CsWn5GfW.js";import"./ListItemText-C8Hk29yc.js";import"./ArrowUpward-DUFitZPh.js";import"./ContentCopy-DueKUVoH.js";import"./FormControlLabel-KQaj4uUj.js";import"./Checkbox-DjMZlVKr.js";import"./SwitchBase-24TTnX7U.js";import"./FormGroup-0d0XHNN_.js";import"./RadioGroup-CeBzyp6I.js";import"./Radio-CnMFPJKi.js";import"./Slider-CpsO3M40.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-ByNauc16.js";import"./DialogBase-Bii4OYGm.js";import"./Close-ByqpzM9n.js";import"./HelpPopover-BGDGJ311.js";import"./MarkdownPopover-BsAFOo-I.js";import"./LightTooltip-DON7P_WS.js";import"./MarkdownSynapse-Dg1sB7BI.js";import"./SkeletonButton-DUugX30x.js";import"./SkeletonInlineBlock-BCuuGuk5.js";import"./SkeletonTable-939R3x-7.js";import"./SkeletonParagraph-oxsYr-A_.js";import"./JsonSchemaForm-Ou3fUlOW.js";import"./GridLegacy-DWdEjBy6.js";import"./HelpTwoTone-PTH8ZI5m.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CivGWQAR.js";import"./_createAggregator-CC0VGCBw.js";import"./_baseMap-DrS9-FBW.js";import"./DateTimePicker-BRPXoFou.js";import"./useMobilePicker-D_e5TqBT.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-1g_8crPz.js";import"./index-DqkU7ALG.js";import"./Chip-CsTJhxo4.js";import"./Tabs-B3GJZlzc.js";import"./KeyboardArrowRight-BNjNJodI.js";import"./Autocomplete-Ci9PNzq4.js";import"./usePreviousProps-ZZZQrcPt.js";import"./use-deep-compare-effect.esm-BUsAUVzD.js";import"./TextWidget-BQcz-z4x.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
