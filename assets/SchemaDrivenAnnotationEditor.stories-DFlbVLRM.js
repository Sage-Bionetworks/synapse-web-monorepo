import{jy as p}from"./iframe-BVhGOjHR.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BsSyMSQz.js";import"./index-Chi_LkuB.js";import"./useEntity-B8pNOBp6.js";import"./pickBy-Ch7pvodo.js";import"./isString-Ddretr-d.js";import"./_baseIteratee-Ck-dt1hT.js";import"./useInfiniteQuery-DBGOhcL0.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B5tPR1Ac.js";import"./useSchema-H3aFC2Fs.js";import"./index-d8hW59wo.js";import"./enums-8Qrw7zXW.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DdsX8oqy.js";import"./uniq-CigljoQU.js";import"./forEach-CWOCpBhE.js";import"./Add-DJRfixQ2.js";import"./Grid-BoTHHcTR.js";import"./ListItem-BrIwjY3U.js";import"./listItemButtonClasses-CguTVZpn.js";import"./ListItemIcon-BXwmAzTi.js";import"./MenuItem-CXPtROXT.js";import"./ListItemText-CLEnZUp-.js";import"./ArrowUpward-BI4TLSlL.js";import"./ContentCopy-DyKvVT2X.js";import"./FormControlLabel-37G6IIQa.js";import"./Checkbox-DfTEr6Wc.js";import"./SwitchBase-D5USTId4.js";import"./FormGroup-BXxNQwlv.js";import"./RadioGroup-COCCjC_I.js";import"./Radio-CcC48vc_.js";import"./Slider-COVtlvgi.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Cv8Px1du.js";import"./DialogBase-DRrK0xBi.js";import"./Close-BMnT91sG.js";import"./HelpPopover-D6fqSHgm.js";import"./MarkdownPopover-DU6whr1F.js";import"./LightTooltip-vnEyTJDI.js";import"./MarkdownSynapse-BL-kClrd.js";import"./SkeletonButton-u72hHay5.js";import"./SkeletonInlineBlock-BxY577KC.js";import"./SkeletonTable-DsxcrpLy.js";import"./SkeletonParagraph-mwYfRmjy.js";import"./JsonSchemaForm-BcxvuW_L.js";import"./GridLegacy-BgD0AfKA.js";import"./HelpTwoTone-Cvwp_fZt.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-B7GTJ_9c.js";import"./_createAggregator-Cla5cKyU.js";import"./_baseMap-C3_dlTWv.js";import"./DateTimePicker-BTryZJIj.js";import"./useMobilePicker-J7Fu9_pG.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BlCMJ_To.js";import"./index-B8gzQCaZ.js";import"./Chip-DZiNGCO2.js";import"./Tabs-BNecdC9d.js";import"./KeyboardArrowRight-DTZbJjyK.js";import"./Autocomplete-BohBXqxH.js";import"./usePreviousProps-zTGnpYa-.js";import"./use-deep-compare-effect.esm-6jG1hbRQ.js";import"./TextWidget-2XoFxO2q.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
