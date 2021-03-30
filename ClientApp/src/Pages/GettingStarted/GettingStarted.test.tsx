import React from 'react';
import { GettingStarted } from './GettingStarted';
import { fireEvent, render, screen,act } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
// import 'jest-dom/extend-expect';



it('renders the LocationSummary component without errors',  async () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <MemoryRouter>
                <GettingStarted />
        </MemoryRouter>, div);
      await new Promise(resolve => setTimeout(resolve, 1000));
});


test('Onclick Event is working, Canada button works', () => {
      const  { getByTestId  } = render(<GettingStarted />)
      const canadaButton = getByTestId('CanadaButton')
      expect(canadaButton.className).toBe('unselected-icon')
      act(()=>{fireEvent.click(canadaButton)})
      expect(canadaButton.className).toBe('selected-icon')

})

test('Scotland is selected by default and unselected when Australia is clicked', () => {
      const  { getByTestId  } =act(()=>{render(<GettingStarted />)})
      const scotlandButton = getByTestId('ScotlandButton')
      const australiaButton = getByTestId('AustraliaButton')
      expect(scotlandButton.className).toBe('selected-icon')
      expect(australiaButton.className).toBe('unselected-icon')
      act(()=>{fireEvent.click(australiaButton)})
      expect(scotlandButton.className).toBe('unselected-icon')
      expect(australiaButton.className).toBe('selected-icon')

})

test('LocationSummary for Australia is shown when Australia is clicked', () => {
    const { getByTestId }  = render(<GettingStarted />)
    const australiaButton = getByTestId('AustraliaButton')
    expect(australiaButton.className).toBe('unselected-icon')
    act(()=>{fireEvent.click(australiaButton)})
    // expect(screen.getByTestId('description')).toHaveTextContent("Queensland’s whale hot spot is at Hervey Bay, around 300 kilometres north of Brisbane. This tranquil spot is protected by Fraser Island, affording humpback whales the opportune location to hang around a while, either to mate, breed or nurse. Each year in July and August, the arrival of the humpback whales is celebrated at the Hervey Bay Whale Festival, with concerts, street parades and displays.");
    expect(getByTestId('description').textContent).toEqual("Queensland’s whale hot spot is at Hervey Bay, around 300 kilometres north of Brisbane. This tranquil spot is protected by Fraser Island, affording humpback whales the opportune location to hang around a while, either to mate, breed or nurse. Each year in July and August, the arrival of the humpback whales is celebrated at the Hervey Bay Whale Festival, with concerts, street parades and displays.")

})