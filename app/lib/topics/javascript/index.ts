import { VariablesTopic } from './variables';
import { DataTypesTopic } from './data-types';
import { CourseTopics } from '../types';
import { operatorsTopic } from './operators';
import { WhatIsJavaScriptTopic } from './what-is-javascript';
import { WritingJsTopic } from './writing-js';
import { ConsoleDebuggingTopic } from './console';
import { ControlFlowTopic } from './control-flow';
import { LoopsTopic } from './loops';
import { FunctionsBasicsTopic } from './functions-basics';
import { ArraysObjectsBasicsTopic } from './arrays-objects-basics';
import { DomBasicsTopic } from './dom-basics';

export const javascriptTopics: CourseTopics = {
  variables: VariablesTopic,
  'data-types': DataTypesTopic,
  'operators': operatorsTopic,
  'what-is-javascript': WhatIsJavaScriptTopic,
  'writing-js': WritingJsTopic,
  'console': ConsoleDebuggingTopic,
  'control-flow': ControlFlowTopic,
  'loops': LoopsTopic,
  'functions-basics': FunctionsBasicsTopic,
  'arrays-objects-basics': ArraysObjectsBasicsTopic,
  'dom-basics': DomBasicsTopic,
};
