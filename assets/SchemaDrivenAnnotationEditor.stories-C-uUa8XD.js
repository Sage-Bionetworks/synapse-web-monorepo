import{jF as T}from"./iframe-DGqgB8og.js";import{S as C}from"./SchemaDrivenAnnotationEditor-5m9r6RYo.js";import"./index-r8ZA1smB.js";import"./useEntity-BVFUuXsO.js";import"./pickBy-SCKhelpd.js";import"./isString-DU16H64l.js";import"./_baseIteratee-DwFq8RQx.js";import"./useQueries-B2G60Uy5.js";import"./useSuspenseQuery-DgAqulHC.js";import"./useInfiniteQuery-CvHOf2NU.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B4w4L0be.js";import"./useSchema-Ceg0AvbS.js";import"./index-CghNyeOI.js";import"./enums--X3e1hTy.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CnHvp2pQ.js";import"./uniq-CfNDoASc.js";import"./forEach-B8iwwgef.js";import"./Add-CKfjTZuz.js";import"./Grid-s7cBGH0l.js";import"./ListItem-DWtDSsIy.js";import"./listItemButtonClasses-CEGYmnUZ.js";import"./ListItemIcon-MDXN63P5.js";import"./MenuItem-ClmHPDmJ.js";import"./ListItemText-CDNubly4.js";import"./ArrowUpward-CuVe6t8y.js";import"./ContentCopy-BVEIFfzI.js";import"./FormControlLabel-BPG4FuVu.js";import"./Checkbox-BtyRJrp1.js";import"./SwitchBase-Dc5MPTRj.js";import"./FormGroup-CqSFv4fO.js";import"./RadioGroup-DQme-WCR.js";import"./Radio-BR8C3wZu.js";import"./Slider-h_89LaHr.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-DuodJ_BP.js";import"./DialogBase-BdfEWFiQ.js";import"./Close-1BktUZ1s.js";import"./HelpPopover-D7QaDdbI.js";import"./MarkdownPopover-Baf-6UEB.js";import"./LightTooltip-CD7bmaAv.js";import"./MarkdownSynapse-DybE5CEs.js";import"./SkeletonButton-VHDypD6K.js";import"./SkeletonInlineBlock-CDJCDGy_.js";import"./SkeletonTable-B050jOXg.js";import"./SkeletonParagraph-_skZGHOU.js";import"./JsonSchemaForm-ezzVjpk4.js";import"./GridLegacy-cqg69e9T.js";import"./HelpTwoTone-DarYlwGi.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CmL_4A0w.js";import"./_createAggregator-DTuk2jBt.js";import"./_baseMap-CYaJztLS.js";import"./DateTimePicker-7Humia2S.js";import"./useMobilePicker-sCKzmF6v.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-pKurmRqd.js";import"./index-CX9m2Res.js";import"./Chip-C9fzpOls.js";import"./Tabs-C9L_h_2a.js";import"./KeyboardArrowRight-CIJqGFyN.js";import"./Autocomplete-CmXVVaam.js";import"./usePreviousProps-Bgsqcx8u.js";import"./use-deep-compare-effect.esm-nKvRvxU0.js";import"./TextWidget-WXzDuX7a.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
