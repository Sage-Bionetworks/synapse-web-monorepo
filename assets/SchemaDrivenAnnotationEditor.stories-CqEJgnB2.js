import{jG as p}from"./iframe-DrCEazsW.js";import{S as a}from"./SchemaDrivenAnnotationEditor-dHn8mNqM.js";import"./index-Chi_LkuB.js";import"./useEntity-BtnzEjDW.js";import"./pickBy-DY3T_7Uu.js";import"./isString-CXb79rfM.js";import"./_baseIteratee-s9gtzg3G.js";import"./useQueries-DvWk4uuh.js";import"./useSuspenseQuery-DQ6p8VKt.js";import"./useInfiniteQuery-Bi9tYdtQ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-GemdhLWE.js";import"./useSchema-BPSpzm83.js";import"./index-DcL5Q4LM.js";import"./enums-Co1Vi5Pd.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BI8KWHZ6.js";import"./uniq-CEHj_8vv.js";import"./forEach-CWOCpBhE.js";import"./Add-CGelbvGP.js";import"./Grid-DyO_a-po.js";import"./ListItem-BRzpHifX.js";import"./listItemButtonClasses-DDwCKa2g.js";import"./ListItemIcon-CkonOqUo.js";import"./MenuItem-C2nlmzrP.js";import"./ListItemText-Cqr-Z10P.js";import"./ArrowUpward-CrRA10x7.js";import"./ContentCopy-DKRfaTc0.js";import"./FormControlLabel-0BDDjvMM.js";import"./Checkbox-C7I_4mUy.js";import"./SwitchBase-DmV_-0J4.js";import"./FormGroup-D3HYc7HH.js";import"./RadioGroup-B2ZLbJoO.js";import"./Radio-Bq1xJrrP.js";import"./Slider-Bt1lLCwa.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-Dhl79wf0.js";import"./DialogBase-BH_HDzHK.js";import"./Close-CxIjT6Fh.js";import"./HelpPopover-DbOYMGtK.js";import"./MarkdownPopover-C7OUxN4B.js";import"./LightTooltip-CVm0W9H0.js";import"./MarkdownSynapse-cqZxM6bP.js";import"./SkeletonButton-C4mWmh8D.js";import"./SkeletonInlineBlock-DNr-Di6Y.js";import"./SkeletonTable-BtmY8UyV.js";import"./SkeletonParagraph-DxARbxEV.js";import"./JsonSchemaForm-D9hfykqg.js";import"./GridLegacy-DFNl9OvG.js";import"./HelpTwoTone-D6RTi61S.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BTm8lvWY.js";import"./_createAggregator-OBCQ_jNA.js";import"./_baseMap-DjbTSRZA.js";import"./DateTimePicker-DkWB9qA7.js";import"./useMobilePicker-De91kmwU.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-kJ61WKYx.js";import"./index-Bxv-iQH3.js";import"./Chip-DN_sqkiV.js";import"./Tabs-jbNovT7m.js";import"./KeyboardArrowRight-CERRywI9.js";import"./Autocomplete-CYtQibb4.js";import"./usePreviousProps-b7RDM_F6.js";import"./use-deep-compare-effect.esm-CItx8MYD.js";import"./TextWidget-DB6SM8kJ.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const br=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,br as __namedExportsOrder,qr as default};
