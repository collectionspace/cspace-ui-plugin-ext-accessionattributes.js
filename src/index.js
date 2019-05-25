import collectionobject from './collectionobject';
import optionLists from './optionLists';

export default () => configContext => ({
  optionLists,
  extensions: {
    accessionattributes: {
      collectionobject: collectionobject(configContext),
    },
  },
});
