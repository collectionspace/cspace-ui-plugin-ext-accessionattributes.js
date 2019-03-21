import collectionobject from './collectionobject';
import optionLists from './optionLists';

module.exports = () => configContext => ({
  optionLists,
  extensions: {
    accessionattributes: {
      collectionobject: collectionobject(configContext),
    },
  },
});
