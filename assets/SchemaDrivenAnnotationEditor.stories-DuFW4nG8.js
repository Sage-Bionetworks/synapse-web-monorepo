import{jy as p}from"./iframe-Ds4ORbxM.js";import{S as a}from"./SchemaDrivenAnnotationEditor-D1J13ZoZ.js";import"./index-Chi_LkuB.js";import"./useEntity-BR63XRu2.js";import"./pickBy-DgO1DT59.js";import"./isString-B9BpG1ls.js";import"./_baseIteratee-XRZy9AD3.js";import"./useInfiniteQuery-BUNrVJri.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CbyNlXJ1.js";import"./useSchema-BPkBNB3E.js";import"./index-CbWrvKoJ.js";import"./enums-B0zvswgR.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CRUm181W.js";import"./uniq-DyjfefYQ.js";import"./forEach-CWOCpBhE.js";import"./Add-D5ziiucX.js";import"./Grid-2F--zuuh.js";import"./ListItem-B3MSkZeU.js";import"./listItemButtonClasses-BowRKcjd.js";import"./ListItemIcon-B9amKd6s.js";import"./MenuItem-eFAVT6re.js";import"./ListItemText-DmoIyi1P.js";import"./ArrowUpward-Cvep0NVC.js";import"./ContentCopy-BybU7Loo.js";import"./FormControlLabel-DYj3bqOy.js";import"./Checkbox-0qRrkAZY.js";import"./SwitchBase-APPDUZSw.js";import"./FormGroup-CV8jqrOB.js";import"./RadioGroup-BzWqMiK9.js";import"./Radio-k-FER8DA.js";import"./Slider-BIGvO1Ba.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BrjEGNnR.js";import"./DialogBase-BuRnxzMT.js";import"./Close-CP5Sv8Gb.js";import"./HelpPopover-BpNHIXS5.js";import"./MarkdownPopover-D8vUi55e.js";import"./LightTooltip-CV5GUQCP.js";import"./MarkdownSynapse-lp_uroGI.js";import"./SkeletonButton-Bz2oBDCo.js";import"./SkeletonInlineBlock-DDXMTXRx.js";import"./SkeletonTable-yOIpbiOB.js";import"./SkeletonParagraph-DV2rBoVm.js";import"./JsonSchemaForm-CkEdYwrq.js";import"./GridLegacy-8qM7Emkc.js";import"./HelpTwoTone-CYM3pAFJ.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-OCKihvWF.js";import"./_createAggregator-D-VgGGNR.js";import"./_baseMap-G3nNbJZO.js";import"./DateTimePicker-BDfRLRmG.js";import"./useMobilePicker-CRVM34mC.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BsEDroix.js";import"./index-CIbrDib_.js";import"./Chip-DlFfjUFv.js";import"./Tabs-B53B0Oms.js";import"./KeyboardArrowRight-jZKjLUC2.js";import"./Autocomplete-DOiARfMZ.js";import"./usePreviousProps-CUdc62S3.js";import"./use-deep-compare-effect.esm-CekS7ztG.js";import"./TextWidget-BVGMEGnZ.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
