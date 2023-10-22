import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatusWithHooks";


describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus text='I am programmer' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('I am programmer');
    });

    test('after creation <input> should be displayed with correct status', () => {
        const component = create(<ProfileStatus text='I am programmer' />);
        const root = component.root;
        expect( () => {
            let input = root.findByType('input');
        }).toThrow();
    });

    test('callback chould be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus text='I am programmer' />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});

  
