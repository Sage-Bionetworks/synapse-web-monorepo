import{jF as T}from"./iframe-Djv8MYNB.js";import{S as C}from"./SchemaDrivenAnnotationEditor-x3O2AU_h.js";import"./index-r8ZA1smB.js";import"./useEntity-D1Vbp73T.js";import"./pickBy-B4gnU8TW.js";import"./isString-CT6WYqqB.js";import"./_baseIteratee-DzOJkO1l.js";import"./useQueries-iQS82f7J.js";import"./useSuspenseQuery-Bke-3bkA.js";import"./useInfiniteQuery-By8at75o.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C2CqcUzD.js";import"./useSchema-DxolivkT.js";import"./index-DB0uO4Oe.js";import"./enums-BUyp-lYE.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-liTqT7qy.js";import"./uniq-Bdn3ztIc.js";import"./forEach-B8iwwgef.js";import"./Add-C52nUpxM.js";import"./Grid-SmLd1_qQ.js";import"./ListItem-D3zDAHo2.js";import"./listItemButtonClasses-DsZo8FHL.js";import"./ListItemIcon-BZFnIC-I.js";import"./MenuItem-B1PtcVYM.js";import"./ListItemText-BJsMB9Q8.js";import"./ArrowUpward-B49yoL_6.js";import"./ContentCopy-B4FLLGJH.js";import"./FormControlLabel-DQneX3qL.js";import"./Checkbox-JxEZSJ4e.js";import"./SwitchBase-slp36AZK.js";import"./FormGroup-9WcFutCt.js";import"./RadioGroup-DnPimTNE.js";import"./Radio-CZdA52c-.js";import"./Slider-IFL3SbdY.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-Cxl5Efnn.js";import"./DialogBase-Bt09srou.js";import"./Close-Df0WyQYw.js";import"./HelpPopover-DVpvTiRQ.js";import"./MarkdownPopover-p5QWJMaq.js";import"./LightTooltip-CPJ4gklA.js";import"./MarkdownSynapse-D11UdXjT.js";import"./SkeletonButton-D377GQsO.js";import"./SkeletonInlineBlock-Bo6_99BY.js";import"./SkeletonTable-5bHQrafN.js";import"./SkeletonParagraph-CvIzEYe-.js";import"./JsonSchemaForm-lhKabKv7.js";import"./GridLegacy-Dhry2rrJ.js";import"./HelpTwoTone-DUiqwRe4.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-C0CFUh13.js";import"./_createAggregator-BVmDgvIf.js";import"./_baseMap-B3uOsC71.js";import"./DateTimePicker-DmC_J_6z.js";import"./useMobilePicker-6YEIDOlO.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-Dw9gZJsw.js";import"./index-DkUUvlSe.js";import"./Chip-BC_6TuQR.js";import"./Tabs-B3HoycY_.js";import"./KeyboardArrowRight-CSlRFtgC.js";import"./Autocomplete-DSkDcqCY.js";import"./usePreviousProps-BGqOKyt1.js";import"./use-deep-compare-effect.esm-C91J9K-c.js";import"./TextWidget-JJoHFGCK.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
