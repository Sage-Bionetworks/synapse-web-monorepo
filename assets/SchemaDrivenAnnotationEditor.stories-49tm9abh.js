import{jJ as T}from"./iframe-CGmVaDjG.js";import{S as C}from"./SchemaDrivenAnnotationEditor-BoeA1bCh.js";import"./index-r8ZA1smB.js";import"./useEntity-C8fikiZk.js";import"./pickBy-AOueuh4I.js";import"./isString-C-CuymGI.js";import"./_baseIteratee-BT9JeoLs.js";import"./useQueries-CFH4mD9S.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-BOwZO-RU.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CjqpIW6e.js";import"./useSchema-DewlLZAw.js";import"./index-BFv-uzi_.js";import"./enums-vrlnAVl0.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach--X6tDxan.js";import"./uniq-Dn33WZe4.js";import"./forEach-B8iwwgef.js";import"./Grid-CUFsX9EA.js";import"./ListItem-BYtpJnlb.js";import"./listItemButtonClasses-CX5_diOU.js";import"./ListItemIcon-BU9eMI6w.js";import"./MenuItem-UENhvr4V.js";import"./ListItemText-C2a-lqT_.js";import"./ArrowUpward-bCAwSABM.js";import"./ContentCopy-DJToJE32.js";import"./FormControlLabel-BNCF-8vF.js";import"./Checkbox-BhWQu0Q_.js";import"./SwitchBase-D6wTm3P4.js";import"./FormGroup-C_dHKml8.js";import"./RadioGroup-eyh6FLOG.js";import"./Radio-BkWttgZH.js";import"./Slider-BL0zN_r-.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Be0gJysx.js";import"./DialogBase-B3tdGTOA.js";import"./Close-lxYenFCK.js";import"./HelpPopover-2nxZPXpX.js";import"./MarkdownPopover-aHrxZUZD.js";import"./LightTooltip-ClWSh7qk.js";import"./MarkdownSynapse-V28WkNFd.js";import"./SkeletonButton-B4_njZrh.js";import"./SkeletonInlineBlock-DlR8y1uS.js";import"./SkeletonTable-DNeEDdIn.js";import"./SkeletonParagraph-Dm_x6xws.js";import"./JsonSchemaForm-Rz_t8JIY.js";import"./GridLegacy-Bz7Cwig5.js";import"./HelpTwoTone-DFVH_4So.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CIWb25ff.js";import"./_createAggregator-oVImNT1C.js";import"./_baseMap-CrED9mcW.js";import"./DateTimePicker-BkeLQTbw.js";import"./useMobilePicker-Bz_0FoyK.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-BaEASxwI.js";import"./index-Bg4ai4NK.js";import"./Chip-DOrw28hN.js";import"./Tabs-Duvr-h1r.js";import"./KeyboardArrowRight-I6Zu0EXc.js";import"./Autocomplete-Bsct58f9.js";import"./usePreviousProps-DapeRrTY.js";import"./use-deep-compare-effect.esm-Bn3xhF-Y.js";import"./TextWidget-BE2qRJhE.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Kr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Kr as __namedExportsOrder,Jr as default};
