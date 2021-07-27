import { render, screen, cleanup } from '@testing-library/react';
import Welcome from '../../views/welcome';


describe("Ensure the welcome component renders correctly with the right elements", ()=>{
   afterEach(cleanup);
   
   it("Show that it all needed elements renders correctly", () => {
      render(<Welcome />);
      expect(screen.getByRole("heading")).toBeVisible(); //Shows a header
      expect(screen.getByText("Please click on the button below to view a demo of our widget")).toBeVisible(); //Shows a paragraph
      expect(screen.getByRole("button")).toBeVisible(); //Shows a button
    });

});

 