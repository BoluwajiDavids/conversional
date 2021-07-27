import { render, screen, cleanup } from '@testing-library/react';
import WidgetBox from '../../views/widgetBox';

const sampleData = require("../../data/data1.json");


describe("Ensure that the Component renders correctly", ()=>{
   afterEach(cleanup);
   
   it("Show tab option from the data set provided", () => {
      render(<WidgetBox data={sampleData} />);
      expect(screen.getByText("Data set 1")).toBeVisible(); 
      expect(screen.getByText("Please select any of the options above")).toBeVisible(); 
    });

    /*
    Since the rest of the UI depends on user interaction, it is sufficient to test on only what is visible on initial render
    */

});

  