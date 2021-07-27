import { render, screen,  cleanup } from '@testing-library/react';
import BlackButton from '../../../components/button/black'; 


describe("Ensure that Button component display correctly", ()=>{
   afterEach(cleanup);
   it("Shows nothing when text prop is not provided", () => {
      render(<BlackButton />);
      expect(screen.getByRole("button")).toBeVisible();
   });
   
   it("Shows the value of text prop when it is passed", () => {
      const { getByText } = render(<BlackButton text="Button text" />);
      expect(getByText("Button text")).toBeVisible();
    });

});