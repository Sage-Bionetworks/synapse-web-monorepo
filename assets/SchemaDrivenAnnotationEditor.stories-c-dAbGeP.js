import{jF as p}from"./iframe-CaOcC-hf.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DLX64qkq.js";import"./index-Chi_LkuB.js";import"./useEntity-BdQEsk8n.js";import"./pickBy-8SjG7ER4.js";import"./isString-BgQb4HBW.js";import"./_baseIteratee-CnGLSoYc.js";import"./useQueries-DwQcF1rT.js";import"./useSuspenseQuery-D6gXheFj.js";import"./useInfiniteQuery-DsHtYM7m.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CNIm-M4T.js";import"./useSchema-DxYQXbBX.js";import"./index-D7AUzWOe.js";import"./enums-BtaxbSII.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DGJRiyKO.js";import"./uniq-CMIq24Kg.js";import"./forEach-CWOCpBhE.js";import"./Add-IiQFpvdl.js";import"./Grid-BGFct7I5.js";import"./ListItem-DL8FCVr3.js";import"./listItemButtonClasses-CIaxaW0u.js";import"./ListItemIcon-BHm3PPIe.js";import"./MenuItem-BUoZ5k6v.js";import"./ListItemText-27ET1Tf9.js";import"./ArrowUpward-DXPb0ih-.js";import"./ContentCopy-Fgyh2kDT.js";import"./FormControlLabel-C2Rm-ZU_.js";import"./Checkbox-wHAkxbLY.js";import"./SwitchBase-19wbeUii.js";import"./FormGroup-C-VqjZ7_.js";import"./RadioGroup-DkwB7FNs.js";import"./Radio-C884L7vy.js";import"./Slider-C9TWTH6W.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-D38gahaL.js";import"./DialogBase-Dn94ypHd.js";import"./Close-7gN2buzZ.js";import"./HelpPopover-DtGoLtv4.js";import"./MarkdownPopover-pxj3Gfsw.js";import"./LightTooltip-DLMcdQ8O.js";import"./MarkdownSynapse-Bu_iQFQg.js";import"./SkeletonButton-C1Ne2e4S.js";import"./SkeletonInlineBlock-CXC8p12o.js";import"./SkeletonTable-BGTjeLmw.js";import"./SkeletonParagraph-DlGa_aoP.js";import"./JsonSchemaForm-COXZzLmr.js";import"./GridLegacy-D85eKpKn.js";import"./HelpTwoTone-BAPRnMyi.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-i2-grRQq.js";import"./_createAggregator-C9TVrnWc.js";import"./_baseMap-DQ2Ub_HZ.js";import"./DateTimePicker-D1OaURze.js";import"./useMobilePicker-B__YqbXC.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-FBJzNouj.js";import"./index-DGAj4kvP.js";import"./Chip-B_m5Zg1D.js";import"./Tabs-USVxpgH4.js";import"./KeyboardArrowRight-Cv98EYjr.js";import"./Autocomplete-DMLPNcMG.js";import"./usePreviousProps-BhnKP3Pz.js";import"./use-deep-compare-effect.esm-fXqDiM5e.js";import"./TextWidget-CfloqHk4.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
