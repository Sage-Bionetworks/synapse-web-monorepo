import{jx as p}from"./iframe-Gl2uG7Gu.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BSb_gSct.js";import"./index-Chi_LkuB.js";import"./useEntity-D934njKf.js";import"./pickBy-CvHjxjJ_.js";import"./isString-Dwqv5QF9.js";import"./_baseIteratee-BYtIyUzR.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-B8esF6xB.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DMHI0iCj.js";import"./useSchema-DcqM1B35.js";import"./index-DotY-DlY.js";import"./enums-B9xZNMOc.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DDXBWgx7.js";import"./uniq-CEpVmCy4.js";import"./forEach-UWyboym_.js";import"./Add-DxcCbb7N.js";import"./Grid-Bw2tg2Qw.js";import"./ListItem-CyRfeqXs.js";import"./listItemButtonClasses-PeSON1or.js";import"./ListItemIcon-BW3T7gps.js";import"./MenuItem-DDtGYU59.js";import"./ListItemText-DOxO56h5.js";import"./ArrowUpward-CG9Fe4qJ.js";import"./ContentCopy-DIM4Wayj.js";import"./FormControlLabel-BhQ-7Pqi.js";import"./Checkbox-CsdNX8eC.js";import"./SwitchBase-fjg8G-tJ.js";import"./FormGroup-BcPdbL3e.js";import"./RadioGroup-D-asg-mZ.js";import"./Radio-DMUEn6SK.js";import"./Slider-oSOlblfc.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CkI_Ky3R.js";import"./DialogBase-CFDv1eZ2.js";import"./Close-D3nqMVPZ.js";import"./HelpPopover-FfzFHXn8.js";import"./MarkdownPopover-CvADHgL2.js";import"./LightTooltip-DCTLNLfM.js";import"./MarkdownSynapse-Dvsaf59R.js";import"./SkeletonButton-CAFmp0_I.js";import"./SkeletonInlineBlock-BdepDM7J.js";import"./SkeletonTable-DN89Pk10.js";import"./SkeletonParagraph-Ck270a2X.js";import"./JsonSchemaForm-C8U2u8p5.js";import"./GridLegacy-Dgy4ns4A.js";import"./HelpTwoTone-kqU08AKt.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-57GfemKd.js";import"./_createAggregator-BxszEWDY.js";import"./_baseMap-QVGtldut.js";import"./DateTimePicker-CRRGs4-M.js";import"./useMobilePicker-BiRqQsTv.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-C8juoqyx.js";import"./index-Dl1iid2-.js";import"./Chip-DiD-80ip.js";import"./Tabs-Cio30N0_.js";import"./KeyboardArrowRight-CH5AzytG.js";import"./Autocomplete-D4-XVfDi.js";import"./usePreviousProps-Cy9XFhAc.js";import"./use-deep-compare-effect.esm-BddGmASv.js";import"./TextWidget-dacobuLZ.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Er=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Er as __namedExportsOrder,Ir as default};
