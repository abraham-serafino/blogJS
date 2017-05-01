// @flow
function initializeActions(action: string, value: any, actionMap: Object): any {
  if (typeof actionMap[action] === 'function') {
    return actionMap[action](value);
  }
}

export default initializeActions;
