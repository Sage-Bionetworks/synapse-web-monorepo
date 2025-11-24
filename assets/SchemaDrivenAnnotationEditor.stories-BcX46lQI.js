import{jK as T}from"./iframe-C2KiuWKW.js";import{S as C}from"./SchemaDrivenAnnotationEditor-xIAIi3_e.js";import"./index-r8ZA1smB.js";import"./useEntity-7cXVCmEM.js";import"./pickBy-CCpCCyD3.js";import"./isString-CJO-7Tta.js";import"./_baseIteratee-CjIdJ6hr.js";import"./useQueries-DR2SNVW2.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-BrhgLvSC.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CLgDPVZl.js";import"./useSchema-Dw7LSio7.js";import"./index-D6SajlMw.js";import"./enums-C-8kEX-O.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DRvbLTSB.js";import"./uniq-QrSgfjXv.js";import"./forEach-B8iwwgef.js";import"./Grid-XsX4lsh5.js";import"./ListItem-DqPKbn2h.js";import"./listItemButtonClasses-B4A2zqtw.js";import"./ListItemIcon-iOWwSMyp.js";import"./MenuItem-SU_iXbyZ.js";import"./ListItemText-Cmnx9GMk.js";import"./ArrowUpward-tOzp8J30.js";import"./ContentCopy-DKU9p_n8.js";import"./FormControlLabel-D_3YwViS.js";import"./Checkbox-B3nGy5Ij.js";import"./SwitchBase-Cjz94MqM.js";import"./FormGroup-Bl_NnUy2.js";import"./RadioGroup-BHXI8pcV.js";import"./Radio-xI5KIyYJ.js";import"./Slider-2gqz8lBC.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-Bm4vu1Af.js";import"./DialogBase-B4kmo7Ld.js";import"./Close-BIaHlc92.js";import"./HelpPopover-CfPQcqAt.js";import"./MarkdownPopover-5UTwOQCz.js";import"./LightTooltip-Bcc7fqEX.js";import"./MarkdownSynapse-C5i7NIK_.js";import"./SkeletonButton-CRFxONAo.js";import"./SkeletonInlineBlock-B39hqJKo.js";import"./SkeletonTable-PHS1izgY.js";import"./SkeletonParagraph-D5MYRaWu.js";import"./JsonSchemaForm-CZfvb7EM.js";import"./GridLegacy-DKga7jPZ.js";import"./HelpTwoTone-Cfnjl_n4.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CeYvJcKY.js";import"./_createAggregator-CTuXFwdy.js";import"./_baseMap-DitX6qHD.js";import"./DateTimePicker-cXPdZnwF.js";import"./useMobilePicker-CT6b9d6s.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-CSd5m8DA.js";import"./index-Bxj6rqQ-.js";import"./Chip-CHQONIC6.js";import"./Tabs-DRYQtm1c.js";import"./KeyboardArrowRight-eavl9Inm.js";import"./Autocomplete-CXxSldJt.js";import"./usePreviousProps-DmVZrnSm.js";import"./use-deep-compare-effect.esm-BLwPhTf4.js";import"./TextWidget-BmTMShFj.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
