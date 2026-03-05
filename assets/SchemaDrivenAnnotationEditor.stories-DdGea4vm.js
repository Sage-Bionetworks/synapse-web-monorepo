import{jv as p}from"./iframe-DmJPOOU_.js";import{S as a}from"./SchemaDrivenAnnotationEditor-Dafh4VUv.js";import"./index-Chi_LkuB.js";import"./useEntity-CQC1iVNp.js";import"./pickBy-M_UJi6ID.js";import"./isString-DV94wrcf.js";import"./_baseIteratee-1Q2L5zu3.js";import"./useInfiniteQuery-BDaCbZ6f.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-RBjfW4XO.js";import"./useSchema-DSUZeCDW.js";import"./index-Bw1RPFF2.js";import"./enums-BpOx3OUg.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CAIliHKy.js";import"./uniq-DPbT0Jrg.js";import"./forEach-CWOCpBhE.js";import"./Add-CRK_wVoj.js";import"./Grid-7soIe3w7.js";import"./ListItem-CeZm0VNM.js";import"./listItemButtonClasses-CS68_jdA.js";import"./ListItemIcon-CQhUxgKS.js";import"./MenuItem-DeCPXHAD.js";import"./ListItemText-CG9aQg9v.js";import"./ArrowUpward-CNvRfzHy.js";import"./ContentCopy-B_lX-Ue9.js";import"./FormControlLabel-Drfk0QYR.js";import"./Checkbox-Dk6Grjtf.js";import"./SwitchBase-BGEA75yw.js";import"./FormGroup-Lx1TEJBP.js";import"./RadioGroup-BpO4zrzo.js";import"./Radio-C0v3VRHl.js";import"./Slider-DB1Myqw1.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-hpX1a8na.js";import"./DialogBase-D-N6jGJj.js";import"./Close-DOrDhmY8.js";import"./HelpPopover-CH-RPBO_.js";import"./MarkdownPopover-BCp9ClLr.js";import"./LightTooltip-Cww8R-MD.js";import"./MarkdownSynapse-C6q6tMz7.js";import"./SkeletonButton-Cd2blMTY.js";import"./SkeletonInlineBlock-rRVfoSJd.js";import"./SkeletonTable-B15aTznV.js";import"./SkeletonParagraph-B8-jdRST.js";import"./JsonSchemaForm-DRHnh8QO.js";import"./GridLegacy-B9LwJOAU.js";import"./HelpTwoTone-Dr1v1ZHx.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-etl_Bs2L.js";import"./_createAggregator-LIt2780W.js";import"./_baseMap-BWARg_nl.js";import"./DateTimePicker-Dxy5w_sf.js";import"./useMobilePicker-BlQW_RpD.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DNfIMo8Y.js";import"./index-BXFJdLDG.js";import"./Chip-CM8JUIti.js";import"./Tabs-BnjAkChX.js";import"./KeyboardArrowRight-DXt3h4Nz.js";import"./Autocomplete-ZkQYeN5g.js";import"./usePreviousProps-BcjdZXAS.js";import"./use-deep-compare-effect.esm-Tvv8-TnI.js";import"./TextWidget-z2Pxk88j.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
