import{jF as T}from"./iframe-CXX3j3k4.js";import{S as C}from"./SchemaDrivenAnnotationEditor-DVgbeaHD.js";import"./index-r8ZA1smB.js";import"./useEntity-Cu3nWcjI.js";import"./pickBy-DTma2HjN.js";import"./isString-BDOlTXrI.js";import"./_baseIteratee-1UNfM9nP.js";import"./useQueries-DR1JWuQB.js";import"./useSuspenseQuery-BN00Uhyj.js";import"./useInfiniteQuery-qlxPBsTZ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BpJg0bA7.js";import"./useSchema-CmlcOder.js";import"./index-BfdMPl8g.js";import"./enums-C4m4KUQK.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Cin_LC24.js";import"./uniq-BTvaEj3q.js";import"./forEach-B8iwwgef.js";import"./Add-CQyEoaTF.js";import"./Grid-DROBElw5.js";import"./ListItem-BG7l9-ht.js";import"./listItemButtonClasses-3uFHVpPu.js";import"./ListItemIcon-COIDXq1a.js";import"./MenuItem-Bsjjr9Hj.js";import"./ListItemText-n280CH4j.js";import"./ArrowUpward-BD5iNKW0.js";import"./ContentCopy-BvBI5sWv.js";import"./FormControlLabel-D_ywbKjj.js";import"./Checkbox-CncWC2DQ.js";import"./SwitchBase-ClGQ9l6f.js";import"./FormGroup-Cxds_uWq.js";import"./RadioGroup-C9_NH97w.js";import"./Radio-suj20a1z.js";import"./Slider-B2gYozKE.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-BBYfC9oT.js";import"./DialogBase-DiPVYK5d.js";import"./Close-CqT8m-h4.js";import"./HelpPopover-DYzM-K-s.js";import"./MarkdownPopover-Bt9mzS5O.js";import"./LightTooltip-BljA5YjT.js";import"./MarkdownSynapse-CcsPZuDG.js";import"./SkeletonButton-CM_ISHRH.js";import"./SkeletonInlineBlock-B8S3Nzba.js";import"./SkeletonTable-Dy_jc2vl.js";import"./SkeletonParagraph-D9HvcMZH.js";import"./JsonSchemaForm-B8muG34q.js";import"./GridLegacy-6nE79X5W.js";import"./HelpTwoTone-Bffv9WNf.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CvKMH1oC.js";import"./_createAggregator-D4HzBGq3.js";import"./_baseMap-lc2X7ooU.js";import"./DateTimePicker-BR5NgJMe.js";import"./useMobilePicker-nd4ZqHES.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-Dl0vsIC-.js";import"./index-BMdlDJHf.js";import"./Chip-BQx2btmN.js";import"./Tabs-DSdjxQqe.js";import"./KeyboardArrowRight-B8Yud1ig.js";import"./Autocomplete-DBlR90U8.js";import"./usePreviousProps-D7QeSJqu.js";import"./use-deep-compare-effect.esm-C67h1UqU.js";import"./TextWidget-6WIUuhZq.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
