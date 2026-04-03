import{jw as p}from"./iframe-AuqRm6Xj.js";import{S as a}from"./SchemaDrivenAnnotationEditor-1I9L7r1v.js";import"./index-Chi_LkuB.js";import"./useEntity-C-6R0MnF.js";import"./pickBy-C1skkiRy.js";import"./isString-CmiKb-kR.js";import"./_baseIteratee-VmDtVic5.js";import"./useInfiniteQuery-CwU4w13D.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DhR_HRI3.js";import"./useSchema-BqHKXyPQ.js";import"./index-TMqcHGNA.js";import"./enums-DqIDqCng.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CbR7Csp5.js";import"./uniq-BnnTlw4E.js";import"./forEach-UWyboym_.js";import"./Add-nk5nRE-b.js";import"./Grid-DZvB9Er5.js";import"./ListItem-BjxUNqaO.js";import"./listItemButtonClasses-Bdg07ZGq.js";import"./ListItemIcon-DfRpAFMX.js";import"./MenuItem-e1skeM_z.js";import"./ListItemText-B4wNv323.js";import"./ArrowUpward-DzvvAq-c.js";import"./ContentCopy-C6Oo-gBJ.js";import"./FormControlLabel-hQp6mAf4.js";import"./Checkbox-MxfcR8V3.js";import"./SwitchBase-DkN8Vn3a.js";import"./FormGroup-CgpqwVTC.js";import"./RadioGroup-5zH9ftG3.js";import"./Radio-BmcBe5E_.js";import"./Slider-DX6EqHcE.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-VlIF6_Hw.js";import"./DialogBase-Bp-oXsnD.js";import"./Close-wXc8W0YL.js";import"./HelpPopover-u8xzPavD.js";import"./MarkdownPopover-Dmj83Psx.js";import"./LightTooltip-BMQNdjTq.js";import"./MarkdownSynapse-DiqCpyPK.js";import"./SkeletonButton-De9SiVJE.js";import"./SkeletonInlineBlock-CL4j-wc-.js";import"./SkeletonTable-C0VRg4xn.js";import"./SkeletonParagraph-B6IfoMOd.js";import"./JsonSchemaForm-DSUYFhxy.js";import"./GridLegacy-BtG_kqNZ.js";import"./HelpTwoTone-B04vsAkK.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CvqRaqir.js";import"./_createAggregator-BtQAak8v.js";import"./_baseMap-B9GZp46S.js";import"./DateTimePicker-nwGTyVtb.js";import"./useMobilePicker-CLTyanpy.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CPdugysm.js";import"./index-D5YJAeH4.js";import"./Chip-DC7pM5qx.js";import"./Tabs-BlcqIIZJ.js";import"./KeyboardArrowRight-ClPnM8Pa.js";import"./Autocomplete-C2p2_ZC-.js";import"./usePreviousProps-CeiRwp8W.js";import"./use-deep-compare-effect.esm-BAaEYsoX.js";import"./TextWidget-zW-UHSoS.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
