import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CheckboxInput,
    OptionPickerInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
  } = configContext.dataTypes;

  return {
    'ns2:collectionobjects_accessionattributes': {
      [config]: {
        service: {
          ns: 'http://collectionspace.org/services/collectionobject/domain/accessionattributes',
        },
      },
      flowerColor: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.flowerColor.name',
              defaultMessage: 'Flower color',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      fruitColor: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.fruitColor.name',
              defaultMessage: 'Fruit color',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      securityRisk: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.securityRisk.name',
              defaultMessage: 'Security risk',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      propagationHistory: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.propagationHistory.name',
              defaultMessage: 'Propagation history',
            },
          }),
          view: {
            type: OptionPickerInput,
            props: {
              source: 'propagationMethods',
            },
          },
        },
      },
      breedingSystem: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.breedingSystem.name',
              defaultMessage: 'Breeding system',
            },
          }),
          view: {
            type: OptionPickerInput,
            props: {
              source: 'breedingSystems',
            },
          },
        },
      },
      classUse: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.classUse.name',
              defaultMessage: 'Class use',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      researchUse: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.researchUse.name',
              defaultMessage: 'Research use',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      distribution: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.distribution.name',
              defaultMessage: 'Distribution',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      ignoreRedDot: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.ignoreRedDot.name',
              defaultMessage: 'Ignore red dot',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      fragrance: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.fragrance.name',
              defaultMessage: 'Fragrance',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      flowersJan: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.flowersJan.name',
              defaultMessage: 'Jan',
            },
            fullName: {
              id: 'field.ext.accessionattributes.flowersJan.fullName',
              defaultMessage: 'Flowers Jan',
            },
          }),
          view: {
            type: TermPickerInput,
            props: {
              source: 'floweringstatus',
            },
          },
        },
      },
      flowersFeb: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.flowersFeb.name',
              defaultMessage: 'Feb',
            },
            fullName: {
              id: 'field.ext.accessionattributes.flowersFeb.fullName',
              defaultMessage: 'Flowers Feb',
            },
          }),
          view: {
            type: TermPickerInput,
            props: {
              source: 'floweringstatus',
            },
          },
        },
      },
      flowersMar: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.flowersMar.name',
              defaultMessage: 'Mar',
            },
            fullName: {
              id: 'field.ext.accessionattributes.flowersMar.fullName',
              defaultMessage: 'Flowers Mar',
            },
          }),
          view: {
            type: TermPickerInput,
            props: {
              source: 'floweringstatus',
            },
          },
        },
      },
      flowersApr: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.flowersApr.name',
              defaultMessage: 'Apr',
            },
            fullName: {
              id: 'field.ext.accessionattributes.flowersApr.fullName',
              defaultMessage: 'Flowers Apr',
            },
          }),
          view: {
            type: TermPickerInput,
            props: {
              source: 'floweringstatus',
            },
          },
        },
      },
      flowersMay: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.flowersMay.name',
              defaultMessage: 'May',
            },
            fullName: {
              id: 'field.ext.accessionattributes.flowersMay.fullName',
              defaultMessage: 'Flowers May',
            },
          }),
          view: {
            type: TermPickerInput,
            props: {
              source: 'floweringstatus',
            },
          },
        },
      },
      flowersJun: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.flowersJun.name',
              defaultMessage: 'Jun',
            },
            fullName: {
              id: 'field.ext.accessionattributes.flowersJun.fullName',
              defaultMessage: 'Flowers Jun',
            },
          }),
          view: {
            type: TermPickerInput,
            props: {
              source: 'floweringstatus',
            },
          },
        },
      },
      flowersJul: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.flowersJul.name',
              defaultMessage: 'Jul',
            },
            fullName: {
              id: 'field.ext.accessionattributes.flowersJul.fullName',
              defaultMessage: 'Flowers Jul',
            },
          }),
          view: {
            type: TermPickerInput,
            props: {
              source: 'floweringstatus',
            },
          },
        },
      },
      flowersAug: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.flowersAug.name',
              defaultMessage: 'Aug',
            },
            fullName: {
              id: 'field.ext.accessionattributes.flowersAug.fullName',
              defaultMessage: 'Flowers Aug',
            },
          }),
          view: {
            type: TermPickerInput,
            props: {
              source: 'floweringstatus',
            },
          },
        },
      },
      flowersSep: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.flowersSep.name',
              defaultMessage: 'Sep',
            },
            fullName: {
              id: 'field.ext.accessionattributes.flowersSep.fullName',
              defaultMessage: 'Flowers Sep',
            },
          }),
          view: {
            type: TermPickerInput,
            props: {
              source: 'floweringstatus',
            },
          },
        },
      },
      flowersOct: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.flowersOct.name',
              defaultMessage: 'Oct',
            },
            fullName: {
              id: 'field.ext.accessionattributes.flowersOct.fullName',
              defaultMessage: 'Flowers Oct',
            },
          }),
          view: {
            type: TermPickerInput,
            props: {
              source: 'floweringstatus',
            },
          },
        },
      },
      flowersNov: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.flowersNov.name',
              defaultMessage: 'Nov',
            },
            fullName: {
              id: 'field.ext.accessionattributes.flowersNov.fullName',
              defaultMessage: 'Flowers Nov',
            },
          }),
          view: {
            type: TermPickerInput,
            props: {
              source: 'floweringstatus',
            },
          },
        },
      },
      flowersDec: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.flowersDec.name',
              defaultMessage: 'Dec',
            },
            fullName: {
              id: 'field.ext.accessionattributes.flowersDec.fullName',
              defaultMessage: 'Flowers Dec',
            },
          }),
          view: {
            type: TermPickerInput,
            props: {
              source: 'floweringstatus',
            },
          },
        },
      },
      fruitsJan: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.fruitsJan.name',
              defaultMessage: 'Jan',
            },
            fullName: {
              id: 'field.ext.accessionattributes.fruitsJan.fullName',
              defaultMessage: 'Fruits Jan',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      fruitsFeb: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.fruitsFeb.name',
              defaultMessage: 'Feb',
            },
            fullName: {
              id: 'field.ext.accessionattributes.fruitsFeb.fullName',
              defaultMessage: 'Fruits Feb',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      fruitsMar: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.fruitsMar.name',
              defaultMessage: 'Mar',
            },
            fullName: {
              id: 'field.ext.accessionattributes.fruitsMar.fullName',
              defaultMessage: 'Fruits Mar',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      fruitsApr: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.fruitsApr.name',
              defaultMessage: 'Apr',
            },
            fullName: {
              id: 'field.ext.accessionattributes.fruitsApr.fullName',
              defaultMessage: 'Fruits Apr',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      fruitsMay: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.fruitsMay.name',
              defaultMessage: 'May',
            },
            fullName: {
              id: 'field.ext.accessionattributes.fruitsMay.fullName',
              defaultMessage: 'Fruits May',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      fruitsJun: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.fruitsJun.name',
              defaultMessage: 'Jun',
            },
            fullName: {
              id: 'field.ext.accessionattributes.fruitsJun.fullName',
              defaultMessage: 'Fruits Jun',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      fruitsJul: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.fruitsJul.name',
              defaultMessage: 'Jul',
            },
            fullName: {
              id: 'field.ext.accessionattributes.fruitsJul.fullName',
              defaultMessage: 'Fruits Jul',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      fruitsAug: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.fruitsAug.name',
              defaultMessage: 'Aug',
            },
            fullName: {
              id: 'field.ext.accessionattributes.fruitsAug.fullName',
              defaultMessage: 'Fruits Aug',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      fruitsSep: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.fruitsSep.name',
              defaultMessage: 'Sep',
            },
            fullName: {
              id: 'field.ext.accessionattributes.fruitsSep.fullName',
              defaultMessage: 'Fruits Sep',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      fruitsOct: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.fruitsOct.name',
              defaultMessage: 'Oct',
            },
            fullName: {
              id: 'field.ext.accessionattributes.fruitsOct.fullName',
              defaultMessage: 'Fruits Oct',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      fruitsNov: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.fruitsNov.name',
              defaultMessage: 'Nov',
            },
            fullName: {
              id: 'field.ext.accessionattributes.fruitsNov.fullName',
              defaultMessage: 'Fruits Nov',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      fruitsDec: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.ext.accessionattributes.fruitsDec.name',
              defaultMessage: 'Dec',
            },
            fullName: {
              id: 'field.ext.accessionattributes.fruitsDec.fullName',
              defaultMessage: 'Fruits Dec',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
    },
  };
};
