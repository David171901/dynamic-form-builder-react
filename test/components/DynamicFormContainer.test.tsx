import React from 'react';
import renderer from 'react-test-renderer';
import { DynamicFormContainer, Form } from '../../src/components';
import { form } from '../data/form';

// const { act } = renderer;

describe('DynamicFormContainer', () => {
  test('Component', () => {
    const wrapper = renderer.create(
      <DynamicFormContainer formSchema={form} formTitle={'Form'}>
        {() => (
          <>
            <Form />
          </>
        )}
      </DynamicFormContainer>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
