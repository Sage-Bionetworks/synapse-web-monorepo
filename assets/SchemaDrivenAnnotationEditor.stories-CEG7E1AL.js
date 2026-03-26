import{jx as p}from"./iframe-BVIZDvjc.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DMqU1f4X.js";import"./index-Chi_LkuB.js";import"./useEntity-Bn24goiK.js";import"./pickBy-DEaar3Eq.js";import"./isString-xAVC3jrr.js";import"./_baseIteratee-D9EuEOo0.js";import"./useInfiniteQuery-BSt_-lE2.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-N2Gqs-EN.js";import"./useSchema-CmHBPbZQ.js";import"./index-34VoHgiq.js";import"./enums-DcJU6bMW.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-IrID1Gdl.js";import"./uniq-NUrNodLE.js";import"./forEach-CWOCpBhE.js";import"./Add-DvE4-Vx3.js";import"./Grid-BWKWw_LY.js";import"./ListItem-BJ06OWeo.js";import"./listItemButtonClasses-BXxyGXVq.js";import"./ListItemIcon-Btvdpair.js";import"./MenuItem-CO-Q0A-K.js";import"./ListItemText-Ckvx6gVK.js";import"./ArrowUpward-DcM1PRZz.js";import"./ContentCopy-Be6MBWeD.js";import"./FormControlLabel-C7grxvps.js";import"./Checkbox-BIzsyZ1H.js";import"./SwitchBase-uF1flSX8.js";import"./FormGroup-RwRqCx7S.js";import"./RadioGroup-Bc3Ih2lQ.js";import"./Radio-Bw7NFD0U.js";import"./Slider-y8s4nrPN.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-D-x0uIwM.js";import"./DialogBase-S6GlCR1h.js";import"./Close-B2iBzLNH.js";import"./HelpPopover-D_ahQJhV.js";import"./MarkdownPopover-BEAyCTTW.js";import"./LightTooltip-GG2U7cEt.js";import"./MarkdownSynapse-C1-7S77D.js";import"./SkeletonButton-D1SYxzVe.js";import"./SkeletonInlineBlock-CEdkX1JK.js";import"./SkeletonTable-CtaVYpmw.js";import"./SkeletonParagraph-BSFvRjJJ.js";import"./JsonSchemaForm-Hee_xS_u.js";import"./GridLegacy-Bd2GH6jD.js";import"./HelpTwoTone-CsWIw7jY.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BVQ3r91S.js";import"./_createAggregator-Jh2MOTj4.js";import"./_baseMap-Bi6B3sHX.js";import"./DateTimePicker-DZGv5mmP.js";import"./useMobilePicker-CoD6RFkX.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DxKfXZXb.js";import"./index-DNB6jgYr.js";import"./Chip-Bzu_y-sk.js";import"./Tabs-CFohSbQD.js";import"./KeyboardArrowRight-B5q2K8cZ.js";import"./Autocomplete-BfoDFiHZ.js";import"./usePreviousProps-CYr_jqzR.js";import"./use-deep-compare-effect.esm-B8nksVgc.js";import"./TextWidget-CBf2g4Ak.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ir=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Ir as __namedExportsOrder,vr as default};
