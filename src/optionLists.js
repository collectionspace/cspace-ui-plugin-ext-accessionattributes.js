import { defineMessages } from 'react-intl';

export default {
  propagationMethods: {
    values: [
      'apomictic-cloning',
      'controlled-breeding',
      'derived-asexually',
      'individual-wild-plant',
      'isolated-self-pollinated',
      'open-breeding',
      'sexual-reproduction',
      'vegetative-reproduction',
      'unknown',
    ],
    messages: defineMessages({
      'apomictic-cloning': {
        id: 'option.propagationMethods.apomictic-cloning',
        defaultMessage: 'apomictic cloning',
      },
      'controlled-breeding': {
        id: 'option.propagationMethods.controlled-breeding',
        defaultMessage: 'controlled breeding',
      },
      'derived-asexually': {
        id: 'option.propagationMethods.derived-asexually',
        defaultMessage: 'derived asexually',
      },
      'individual-wild-plant': {
        id: 'option.propagationMethods.individual-wild-plant',
        defaultMessage: 'individual wild plant',
      },
      'isolated-self-pollinated': {
        id: 'option.propagationMethods.isolated-self-pollinated',
        defaultMessage: 'isolated self-pollinated',
      },
      'open-breeding': {
        id: 'option.propagationMethods.open-breeding',
        defaultMessage: 'open breeding',
      },
      'sexual-reproduction': {
        id: 'option.propagationMethods.sexual-reproduction',
        defaultMessage: 'sexual reproduction',
      },
      'vegetative-reproduction': {
        id: 'option.propagationMethods.vegetative-reproduction',
        defaultMessage: 'vegetative reproduction',
      },
      unknown: {
        id: 'option.propagationMethods.unknown',
        defaultMessage: 'unknown',
      },
    }),
  },
  breedingSystems: {
    values: [
      'agamospermy',
      'both',
      'female',
      'dioecious-and-unknown-sex',
      'male',
      'monoecious-and-self-compatible',
      'monoecious-and-self-incompatible',
      'unknown',
    ],
    messages: defineMessages({
      agamospermy: {
        id: 'option.breedingSystems.agamospermy',
        defaultMessage: 'agamospermy',
      },
      both: {
        id: 'option.breedingSystems.both',
        defaultMessage: 'both',
      },
      female: {
        id: 'option.breedingSystems.female',
        defaultMessage: 'female',
      },
      'dioecious-and-unknown-sex': {
        id: 'option.breedingSystems.dioecious-and-unknown-sex',
        defaultMessage: 'dioecious and unknown sex',
      },
      male: {
        id: 'option.breedingSystems.male',
        defaultMessage: 'male',
      },
      'monoecious-and-self-compatible': {
        id: 'option.breedingSystems.monoecious-and-self-compatible',
        defaultMessage: 'monoecious and self-compatible',
      },
      'monoecious-and-self-incompatible': {
        id: 'option.breedingSystems.monoecious-and-self-incompatible',
        defaultMessage: 'monoecious and self-incompatible',
      },
      unknown: {
        id: 'option.breedingSystems.unknown',
        defaultMessage: 'unknown',
      },
    }),
  },
};
