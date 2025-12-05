import{jF as T}from"./iframe-BXzeMfE2.js";import{S as C}from"./SchemaDrivenAnnotationEditor-DOQcN97w.js";import"./index-r8ZA1smB.js";import"./useEntity-CCCkEaXY.js";import"./pickBy-DW6YOzJN.js";import"./isString-CX8A6Lbn.js";import"./_baseIteratee-Tm6Favd6.js";import"./useQueries-BnHuPm1A.js";import"./useSuspenseQuery-BZJKG4pU.js";import"./useInfiniteQuery-CkoFnETB.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Ci5C1gVu.js";import"./useSchema-CHeXePSM.js";import"./index-B3uiw6mB.js";import"./enums-DRyqncBq.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CZEl57ws.js";import"./uniq-BwR3keRF.js";import"./forEach-B8iwwgef.js";import"./Add-DjLh-jak.js";import"./Grid-BTfzcyEs.js";import"./ListItem-D6qFRc9N.js";import"./listItemButtonClasses-Ba2Oknx8.js";import"./ListItemIcon-D33oDRR-.js";import"./MenuItem-D5IIpJsJ.js";import"./ListItemText-CeI5Vuso.js";import"./ArrowUpward-BizU_-RZ.js";import"./ContentCopy-CN-rBbyP.js";import"./FormControlLabel-DwTdM1uL.js";import"./Checkbox-C7nauaBm.js";import"./SwitchBase-Ygh_CPfi.js";import"./FormGroup-caVskGoE.js";import"./RadioGroup-CVxLANRT.js";import"./Radio-hCKHGq1F.js";import"./Slider-DMbi88Lu.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-ekforYsO.js";import"./DialogBase-CgYwiZZW.js";import"./Close-CseduvHP.js";import"./HelpPopover-BY61c_J9.js";import"./MarkdownPopover-BrEHcBMc.js";import"./LightTooltip-CZ9_OK_2.js";import"./MarkdownSynapse-jVf_Tger.js";import"./SkeletonButton-BdVaI5NA.js";import"./SkeletonInlineBlock-Bcviv4QT.js";import"./SkeletonTable-CXSlR--N.js";import"./SkeletonParagraph-Bd7FVxmI.js";import"./JsonSchemaForm-By2P9D0a.js";import"./GridLegacy-dBV5qQ7h.js";import"./HelpTwoTone-Ddd9EeDb.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Cb-miTOA.js";import"./_createAggregator-DDffpnbN.js";import"./_baseMap-D8qq9A5I.js";import"./DateTimePicker-DOXvxcCs.js";import"./useMobilePicker-DuGSuRe0.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-B9LY1kLT.js";import"./index-DH-t8Kiq.js";import"./Chip-UqxHwarS.js";import"./Tabs-3wTbxNpH.js";import"./KeyboardArrowRight-NhovxYpj.js";import"./Autocomplete-dQKptPEr.js";import"./usePreviousProps-BYoDHLvu.js";import"./use-deep-compare-effect.esm-BQRfrosB.js";import"./TextWidget-X33YfgHq.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,l,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,q,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Mr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Mr as __namedExportsOrder,Lr as default};
