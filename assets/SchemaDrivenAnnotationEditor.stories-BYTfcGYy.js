import{jH as p}from"./iframe-DY1t7RUX.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CyJeg8Y9.js";import"./index-Chi_LkuB.js";import"./useEntity-1pUle0NL.js";import"./pickBy-BilzzK_3.js";import"./isString-ByPlCLlf.js";import"./_baseIteratee-Csi7uG28.js";import"./useQueries-BBbQzEvi.js";import"./useSuspenseQuery-xirJCFap.js";import"./useInfiniteQuery-Bh-67AIU.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DG_KhQzg.js";import"./useSchema-6O0gQxw1.js";import"./index-DyNNqmVB.js";import"./enums-Cpeh_flH.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-gQnStzZC.js";import"./uniq-yN4BBPIa.js";import"./forEach-CWOCpBhE.js";import"./Add-Dk_2g64c.js";import"./Grid-DZsdJ4GR.js";import"./ListItem-CrsdzVvH.js";import"./listItemButtonClasses-eVbC5euL.js";import"./ListItemIcon-DQGNfLc6.js";import"./MenuItem-C2Xe6MJI.js";import"./ListItemText-CBeHyooH.js";import"./ArrowUpward-B5tBm8YW.js";import"./ContentCopy-BID90Jgh.js";import"./FormControlLabel-BxC4Yjte.js";import"./Checkbox-CJeA1kXl.js";import"./SwitchBase-ZsFHOwpa.js";import"./FormGroup-BwEm0hQp.js";import"./RadioGroup-D4ohITre.js";import"./Radio-ONvsvftv.js";import"./Slider-DZKsMZJi.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-Bj6eqrOC.js";import"./DialogBase-DO28beWj.js";import"./Close-CDgVbOyZ.js";import"./HelpPopover-C9D9Mwao.js";import"./MarkdownPopover-St2sJIEx.js";import"./LightTooltip-DVzuHePn.js";import"./MarkdownSynapse-BvADFsyz.js";import"./SkeletonButton-DnY8-1vA.js";import"./SkeletonInlineBlock-DZRcElE1.js";import"./SkeletonTable-Q2u-z5xw.js";import"./SkeletonParagraph-DFydk1yR.js";import"./JsonSchemaForm-56XcuR_G.js";import"./GridLegacy-n-4iyt3X.js";import"./HelpTwoTone-RzqZHfZ7.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-EJA5Otto.js";import"./_createAggregator-B8YjUItx.js";import"./_baseMap-DbFCN3L8.js";import"./DateTimePicker-Ds1YroVI.js";import"./useMobilePicker-C-FSUQrf.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-HbC4oK3B.js";import"./index-By-2rY5w.js";import"./Chip-1hYgjVpt.js";import"./Tabs-DWLgnqMN.js";import"./KeyboardArrowRight-BcpW3lK6.js";import"./Autocomplete-CZr4lOiH.js";import"./usePreviousProps-pJvpTXgT.js";import"./use-deep-compare-effect.esm-CYAZWjeG.js";import"./TextWidget-1DJjsxPQ.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
