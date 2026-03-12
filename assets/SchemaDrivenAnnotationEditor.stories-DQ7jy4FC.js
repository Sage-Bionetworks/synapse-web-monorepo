import{jy as p}from"./iframe-CmEjpYjv.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DCxQJEKF.js";import"./index-Chi_LkuB.js";import"./useEntity-DiwKZDeA.js";import"./pickBy-C0wsAt-z.js";import"./isString-gqpjwSZg.js";import"./_baseIteratee-CS8N1y30.js";import"./useInfiniteQuery-Dpi_kcjt.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CDZ9GrJp.js";import"./useSchema-Cc46mUGH.js";import"./index-4BmNqSAI.js";import"./enums-BUDyGjmu.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-vhChnq9U.js";import"./uniq-DyWyuFR0.js";import"./forEach-CWOCpBhE.js";import"./Add-DbCp_wDJ.js";import"./Grid-C1qJnQ7P.js";import"./ListItem-DhrtzVzj.js";import"./listItemButtonClasses-DvYNsIe4.js";import"./ListItemIcon-BY71jsLc.js";import"./MenuItem-Se_d39CR.js";import"./ListItemText-CfynMBbb.js";import"./ArrowUpward-CEupIAj_.js";import"./ContentCopy-CmAXv2Na.js";import"./FormControlLabel-aij-wBjY.js";import"./Checkbox-BUXb2CI0.js";import"./SwitchBase-DeEYy5YV.js";import"./FormGroup-DN5QxJMD.js";import"./RadioGroup-CFTJxuoo.js";import"./Radio-BYXopt_z.js";import"./Slider-CD_TEFR_.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CU57bm7H.js";import"./DialogBase-axU2QUsf.js";import"./Close-DrVlknUt.js";import"./HelpPopover-g9_OAG8r.js";import"./MarkdownPopover-C9iZcAOm.js";import"./LightTooltip-HedBxZph.js";import"./MarkdownSynapse--zkp7VAK.js";import"./SkeletonButton-DlNsrAb3.js";import"./SkeletonInlineBlock-CbyXGVtN.js";import"./SkeletonTable-Bui1t3TM.js";import"./SkeletonParagraph-CQ6ji8az.js";import"./JsonSchemaForm-BqkiIaAc.js";import"./GridLegacy-BC9kpOOy.js";import"./HelpTwoTone-CIk0IVYC.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CZpxXjs5.js";import"./_createAggregator-rhot4_CT.js";import"./_baseMap-D09G1GiS.js";import"./DateTimePicker-jZteuWoV.js";import"./useMobilePicker-Cit-yR_O.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BUeWk7H9.js";import"./index-B-jXi1gZ.js";import"./Chip-DSdtXjpn.js";import"./Tabs-C9eweRFl.js";import"./KeyboardArrowRight-BduZ8GSB.js";import"./Autocomplete-BHc3YPZd.js";import"./usePreviousProps-CQ4k_-9b.js";import"./use-deep-compare-effect.esm-C7DLUob9.js";import"./TextWidget-DMIghgP1.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
