import{jy as p}from"./iframe-CMt_VWB6.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CcIigB7a.js";import"./index-Chi_LkuB.js";import"./useEntity-DjmvQj1X.js";import"./pickBy-Djb2FVbf.js";import"./isString-ip3O_EYI.js";import"./_baseIteratee-B5bSJZ1u.js";import"./useInfiniteQuery-BAQXKU0U.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BRn05waU.js";import"./useSchema-Cc1VRbvF.js";import"./index-F7Mkg5dH.js";import"./enums-CjCYE25A.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BoAwORqe.js";import"./uniq-BkGj474s.js";import"./forEach-CWOCpBhE.js";import"./Add-Gj7dpzco.js";import"./Grid-B6aLYPDX.js";import"./ListItem-DsZE78Aa.js";import"./listItemButtonClasses-DcR7PE9G.js";import"./ListItemIcon-DW9-KWez.js";import"./MenuItem-B3mmchc7.js";import"./ListItemText-tsyDMjks.js";import"./ArrowUpward-C7ILaGrK.js";import"./ContentCopy-DPhBqIxC.js";import"./FormControlLabel-DGusZH-A.js";import"./Checkbox-BbbClNW0.js";import"./SwitchBase-BCjd-8Pb.js";import"./FormGroup-DaIvP2b_.js";import"./RadioGroup-CJ9N852e.js";import"./Radio-CA40ednN.js";import"./Slider-C2MRZLCE.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DAAIkUCV.js";import"./DialogBase-BioY0WeR.js";import"./Close-JIZxqLvI.js";import"./HelpPopover-xOn9G6UQ.js";import"./MarkdownPopover-CsiHNvec.js";import"./LightTooltip-7kZK-MU9.js";import"./MarkdownSynapse-_5g5FMG-.js";import"./SkeletonButton-8Q59D0HR.js";import"./SkeletonInlineBlock-CT1ZajhA.js";import"./SkeletonTable-DytwZ5o7.js";import"./SkeletonParagraph-LH_zBhkQ.js";import"./JsonSchemaForm-CDfGrLbB.js";import"./GridLegacy-BIyRmK1s.js";import"./HelpTwoTone-NSG5EkVi.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-ljzfDzsB.js";import"./_createAggregator-Cds5u4KH.js";import"./_baseMap-CsGQuzjF.js";import"./DateTimePicker-R9JnhTrW.js";import"./useMobilePicker-C-8KNvxC.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CYSaZVIE.js";import"./index-CXnGKoIL.js";import"./Chip-CyQCL8kX.js";import"./Tabs-D5_GQ8T3.js";import"./KeyboardArrowRight-FChfxsz2.js";import"./Autocomplete-BKoMOKpq.js";import"./usePreviousProps-Cxu79QyG.js";import"./use-deep-compare-effect.esm-YjhISabb.js";import"./TextWidget-DLXk73OK.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
