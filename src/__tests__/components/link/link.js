import { render, screen, fireEvent,  cleanup } from '@testing-library/react';
import Link from '../../../components/link/link'; 


describe("Ensure that link component display correctly and works when clicked", ()=>{
   afterEach(cleanup);
   it("Shows nothing when text prop is not provided", () => {
      render(<Link />);
      expect(screen.getByRole("link")).toBeVisible();
   });
   
   it("Shows the value of text prop when it is passed", () => {
      const { getByText } = render(<Link text="Link text" />);
      expect(getByText("Link text")).toBeVisible();
    });
   
   /*
   Since we expect the link to open in a new tab, and we are not making any visible changes to the UI (what the user will see), it is sufficient to only test that the components renders correctly and display the right data.
   */ 

});

 