// @flow
import get from 'lodash.get';
import set from 'lodash.set';

function bindModel(context: { state: any, setState: Function, handleChange: ?Function }): {
      model: (path: string) =>
          { value: string, checked: boolean, onChange: (event: Event) => void },

      arrayItem: (pathToArray: string, index: number, arrayElementSubPath: ?string) =>
          { value: string, checked: boolean, onChange: (event: Event) => void }
    } {

  const { state, setState, handleChange } = context;

  return {
    model(path: string): { value: string, checked: boolean, onChange: (event: Event) => void } {
      const value = get(state, path, '');

      return {
        value,
        checked: value || false,

        onChange(event: Event) {
          const originalValue = value;
          const target: any = event.target;
          const newValue = target.type === 'checkbox' ? target.checked : target.value;

          const newState = {};
          set(newState, path, newValue);

          setState(newState);

          if (handleChange) {
            handleChange(path, newValue, originalValue);
          }
        }
      };
    },

    arrayItem(pathToArray: string, index: number, arrayElementSubPath: ?string):
        { value: string, checked: boolean, onChange: (event: Event) => void } {

      const stateArray = get(state, pathToArray, null) || [];
      const value = arrayElementSubPath ?
          get(stateArray[index], arrayElementSubPath, '') :
          stateArray[index];

      return {
        value: value || '',
        checked: value || false,

        onChange(event: Event) {
          const originalValue = value;
          const target: any = event.target;
          const newValue = target.type === 'checkbox' ? target.checked : target.value;

          if (arrayElementSubPath) {
            set(stateArray[index], arrayElementSubPath, newValue);
          } else {
            stateArray[index] = newValue;
          }

          const newState = {};
          set(newState, pathToArray, stateArray);

          setState(newState);

          if (handleChange) {
            handleChange(pathToArray, newValue, originalValue, index, arrayElementSubPath);
          }
        }
      };
    }
  };
}

export default bindModel;
