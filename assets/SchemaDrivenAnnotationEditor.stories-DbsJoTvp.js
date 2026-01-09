import{jF as T}from"./iframe-CJCPT_yY.js";import{S as C}from"./SchemaDrivenAnnotationEditor-DKZ5OiKf.js";import"./index-r8ZA1smB.js";import"./useEntity-cRx-7M0H.js";import"./pickBy-BqKuxUXO.js";import"./isString-BPiNTGH7.js";import"./_baseIteratee-BnCE0C_W.js";import"./useQueries-DH-E2OAK.js";import"./useSuspenseQuery-CA-nz-xS.js";import"./useInfiniteQuery-Cpo1uBE7.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CUeRAjYH.js";import"./useSchema-D_FEktDt.js";import"./index-BcUbJzoU.js";import"./enums-BOGERhLR.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-B08SIf5n.js";import"./uniq-Dpbrz5UI.js";import"./forEach-B8iwwgef.js";import"./Add-r_a8JhUy.js";import"./Grid-CKs3MHRE.js";import"./ListItem-DzQvSdbX.js";import"./listItemButtonClasses-DYyGUxr8.js";import"./ListItemIcon-Cnw9JU7o.js";import"./MenuItem-FQcUK81X.js";import"./ListItemText-CdrkWUOA.js";import"./ArrowUpward-D5XW5Rv2.js";import"./ContentCopy-ChFuUrm2.js";import"./FormControlLabel-BNnxMy1P.js";import"./Checkbox-FrSnOx71.js";import"./SwitchBase-Di4Jykwp.js";import"./FormGroup-Cz9_UP-H.js";import"./RadioGroup-BNfS6JyW.js";import"./Radio-DzfQI0TU.js";import"./Slider-CuDIe_ca.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-BD2HXlgs.js";import"./DialogBase-DD_PbrBf.js";import"./Close-BRTzwidq.js";import"./HelpPopover-C4PJJkqz.js";import"./MarkdownPopover-D-gx4RgI.js";import"./LightTooltip-BJLQph6o.js";import"./MarkdownSynapse-CTWmq3WF.js";import"./SkeletonButton-B0ZXgmWW.js";import"./SkeletonInlineBlock-DKm9jtot.js";import"./SkeletonTable-DEcRya5M.js";import"./SkeletonParagraph-CRVUa_L6.js";import"./JsonSchemaForm-CRDG6Y4V.js";import"./GridLegacy-DvZSuB_i.js";import"./HelpTwoTone-BvgE2jqw.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-QuWA7jrD.js";import"./_createAggregator-cLZY8Cmq.js";import"./_baseMap-CSY_I1bl.js";import"./DateTimePicker-LmW3v_cH.js";import"./useMobilePicker-DdA0qM08.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-BS_0c_w-.js";import"./index-8HwUI_iG.js";import"./Chip-BjrahEkE.js";import"./Tabs-AmYA8HrT.js";import"./KeyboardArrowRight-CafOjs3l.js";import"./Autocomplete-Nj1ACxqm.js";import"./usePreviousProps-DUbZ-Tde.js";import"./use-deep-compare-effect.esm-D7KdGUWw.js";import"./TextWidget-BTUGPmOE.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
