
import { render, screen, cleanup } from '@testing-library/react';
import List from '../../../components/list/list';

describe("Ensure that given the appropriate data, the Component list items correctly", ()=>{
   afterEach(cleanup);
   
   it("Show that it rendered all needed elements", () => {
      render(<List li={["Sample link 1", "Sample link 2"]} />);
      expect(screen.getByText("Sample link 1")).toBeVisible(); 
      expect(screen.getByText("Sample link 2")).toBeVisible();  
    });

});

 


 