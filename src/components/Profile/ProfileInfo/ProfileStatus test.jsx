import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatusWithHooks";


describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus text='I am programmer' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('I am programmer');
    });

    test('after creation span should be displayed with correct status', () => {
        const component = create(<ProfileStatus text='I am programmer' />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.length).toBe(1);
    });
});