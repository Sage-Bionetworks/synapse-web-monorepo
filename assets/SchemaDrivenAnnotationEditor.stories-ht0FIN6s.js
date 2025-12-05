import{jF as T}from"./iframe-Dh27wMqB.js";import{S as C}from"./SchemaDrivenAnnotationEditor-BXXxH7mF.js";import"./index-r8ZA1smB.js";import"./useEntity-CPKm_rx-.js";import"./pickBy-CQtlHPLC.js";import"./isString-BH-A2E2_.js";import"./_baseIteratee-DEDPyERc.js";import"./useQueries-BPK8tx1d.js";import"./useSuspenseQuery-B1cUOedV.js";import"./useInfiniteQuery-B-Fw0EIq.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DCXfRG_X.js";import"./useSchema-DuaaI7lg.js";import"./index-M3U7EShs.js";import"./enums-CjbX0f7i.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-B73iYufC.js";import"./uniq-BE2B1P-o.js";import"./forEach-B8iwwgef.js";import"./Grid-BBFYnyUS.js";import"./ListItem-BRfwmcp2.js";import"./listItemButtonClasses-CPz0L6T8.js";import"./ListItemIcon-DYvnGLoB.js";import"./MenuItem-G0Ev3uUJ.js";import"./ListItemText-N9rCXTDn.js";import"./ArrowUpward-Bgaiwhwy.js";import"./ContentCopy-Dp0xArIy.js";import"./FormControlLabel-cOjz9kb1.js";import"./Checkbox-BQZMpPY0.js";import"./SwitchBase-DRWmMpc4.js";import"./FormGroup-7INvUqZz.js";import"./RadioGroup-39-2yG1G.js";import"./Radio-7tGvqub-.js";import"./Slider-CATnIEt_.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-DxjWAx0P.js";import"./DialogBase-CaFiVTkO.js";import"./Close-BffXL7L9.js";import"./HelpPopover-BHvKVQ3A.js";import"./MarkdownPopover-DnKNyBIA.js";import"./LightTooltip-y4XaVzOV.js";import"./MarkdownSynapse-BfugqKsd.js";import"./SkeletonButton-zWY26s6L.js";import"./SkeletonInlineBlock-CUxQyvLz.js";import"./SkeletonTable-QTbu1S9P.js";import"./SkeletonParagraph-BECb2Xut.js";import"./JsonSchemaForm-u3R8BD1z.js";import"./GridLegacy-XxyUbYwq.js";import"./HelpTwoTone-s_sIHulX.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-LY8nPiiH.js";import"./_createAggregator-D60ZJine.js";import"./_baseMap-MvKhi6ce.js";import"./DateTimePicker-LjKPHRSU.js";import"./useMobilePicker-BpGOhaIa.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-fRCBUpqm.js";import"./index-PG4lqu2T.js";import"./Chip-CVqxkPH_.js";import"./Tabs-D1zjxqIC.js";import"./KeyboardArrowRight-Blr7LSCq.js";import"./Autocomplete-DHdmaxvY.js";import"./usePreviousProps-B_x_3dzj.js";import"./use-deep-compare-effect.esm-Dddb7spg.js";import"./TextWidget-b03Clj2a.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Kr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Lr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Lr as __namedExportsOrder,Kr as default};
