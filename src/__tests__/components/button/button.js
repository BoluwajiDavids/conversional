import { render, screen, cleanup } from '@testing-library/react';
import Button from '../../../components/button/button'; 


describe("Ensure that Button component display correctly", ()=>{
   afterEach(cleanup);
   it("Shows nothing when text prop is not provided", () => {
      render(<Button />);
      expect(screen.getByRole("button")).toBeVisible();
   });
   
   it("Shows the value of text prop when it is passed", () => {
      const { getByText } = render(<Button text="Button text - button" />);
      expect(getByText("Button text - button")).toBeVisible();
    });
 
   
   /*
   The same explanation for link applies here too
   */ 

});