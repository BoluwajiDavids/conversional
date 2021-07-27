import { render, screen, cleanup } from '@testing-library/react';
import Widget from '../../views/widget';

const sampleData = require("../../data/data1.json");


describe("Ensure that given the appropriate data, the Component renders all fields correctly", ()=>{
   afterEach(cleanup);
   
   it("Show that it all needed elements", () => {
      render(<Widget data={sampleData} />);
      expect(screen.getByText("This is why you will love our product")).toBeVisible(); 
      expect(screen.getByText("free to use")).toBeVisible();  
      expect(screen.getByText("Our benefits")).toBeVisible();
    });

});

 

