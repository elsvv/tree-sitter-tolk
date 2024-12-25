import * as Parser from 'web-tree-sitter';

export const loadTolk = (): Promise<Parser.Language> => {
  return Parser.Language.load(`${__dirname}/../external/tree-sitter-tolk.wasm`);
};
