import React from 'react';
import { JsonForms } from '@jsonforms/react';
import { schema } from './schemas/schema';
import { uischema } from './schemas/uischema';
import { 
  ReadOnlyTextRenderer, readOnlyTextTester,
  ReadOnlyEnumRenderer, readOnlyEnumTester,
  ReadOnlyMultiEnumRenderer, readOnlyMultiEnumTester,
  ReadOnlyCountryPercentRenderer, readOnlyCountryPercentTester
} from './renderers';

const App = () => {
  const data = {
    user: {
      a08: "John Doe",
      a09: "I am a software engineer with 5 years of experience."
    },
    item: {
      s01: ["vendor", "subcontractor"],
      p02: "yes",
      i01: [
        { country: "Afghanistan", percent: 50 },
        { country: "Albania", percent: 50 }
      ]
    }
  };

  return (
    <div>
      <h1>Formulaire</h1>
      <JsonForms
        schema={schema}
        uischema={ uischema }
        data={data}
        renderers={[
          { tester: readOnlyTextTester, renderer: ReadOnlyTextRenderer },
          { tester: readOnlyEnumTester, renderer: ReadOnlyEnumRenderer },
          { tester: readOnlyMultiEnumTester, renderer: ReadOnlyMultiEnumRenderer },
          { tester: readOnlyCountryPercentTester, renderer: ReadOnlyCountryPercentRenderer }
        ]}
      />
    </div>
  );
};

export default App;
